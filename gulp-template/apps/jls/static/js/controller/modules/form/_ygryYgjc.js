define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_ygryYgjc.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var popwin;
    var isOpen = false;//弹框默认不打开
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_ygryYgjc',data);
           if(!isOpen) {
                popwin = utils.showWin({
                    title: '严管人员-严管解除',
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
                $.ajax({
                	type:"POST",
                	url:urls.ygrylist,
                	data:{
                		"rybh":data.rybh,
                		"bllx":"1",
                		"ldyj":"1",
                		"sort":"createtime",
                		"order":"desc",
                	},
                	success:function(result){
                        console.log(result);
                        var data1 = result.result.rows[0];
                        console.log(data1);
                        postData.ygly=data1.ygly;
                        postData.kzcs=data1.kzcs;
                        postData.qzcs=data1.qzcs;
                        postData.kssj=data1.kssj;
                        postData.jssj=data1.jssj;
                        
                        postData.rybh=data.rybh;
                        postData.ywlcid=data.ywlcid;
                        postData.taskid=data.taskid;
                        //此下五条数据乃是ygry/list查询数据
                        // postData.ygly=data.ygly;
                        // postData.kzcs=data.kzcs;
                        // postData.qzcs=data.qzcs;
                        // postData.kssj=data.kssj;
                        // postData.jssj=data.jssj;
                        postData.bllx='2';
                        util.ajax({
                            url: url,
                            data: postData,
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
                	},
                });




                
               
                
            } else {
                utils.alert('表单数据格式不对！');
            }

        }
    };
    return main;
});