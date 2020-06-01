define(function(require) {
    var commFun = require('modules/commFun');
    var isOpen = false;//弹框默认不打开
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_gbjyThdj.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var popwin;
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_gbjyThdj',data);
           if(!isOpen) {
                popwin = utils.showWin({
                    title: '个别教育登记表',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox, .easyui-datebox, .easyui-combobox'),function(el){
                                    $.parser.parse(el.parentElement);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                    combox.initBySelect(el,urls.getDictionary);
                                });
                            // }).then(function(){
                            //     return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
                            //         comboxtree.initBySelect(el,urls.getJsCombotree);
                            //     });
                            }).then(function () {
                                var len = document.querySelectorAll('.timeline-item').length -1;
                                if (idx === len) {
                                    main.bindEvent(data);
                                }
                            });
                        }, Promise.resolve());
                    },
                    yes: function() {
                        main.submit(url,data, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function(data) {
            // combox.initBySelect('#fm .awdCombox', url.getDictionary);


                // // 回显部分
                // $('#fm .awdCombox').each(function() {
                //     var $this = $(this);
                //     var value = $this.attr('comboname').trim();
                //     if (data[value + 'String']) {
                //         $this.combobox().combobox('setValue', data[value]);
                //         $this.combobox().combobox('setText', data[value + 'String']);
                //     }
    
                // })
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
               
                postData.rybh=data.rybh;
                postData.jsbh=data.jsbh;
                postData.ywlcid=data.ywlcid;
                postData.taskid=data.taskid;
                postData.tbrq=(new Date()).Format("yyyy-MM-dd");
                var lyurl = $("#lyurlfm")[0].files[0];
                var sendDate = new FormData();
                
                sendDate.append("lyurl",lyurl);
                sendDate.append("formData",JSON.stringify(postData));

                
               
                util.ajax({
                    url: url,
                    data: sendDate,
                    processData: false,
					contentType: false,
                    func: function(data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                                utils.closeWin(popwin);
                            }
                        } else {
                            utils.alert(data.msg);
                        }
                    }
                });
            } else {
                utils.alert('表单数据格式不对！');
            }

        }
    };
    return main;
});