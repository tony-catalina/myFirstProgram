define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_ypxxkcXg.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_ypxxkcXg',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '修改',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox,.easyui-numberspinner, .easyui-numberbox, .easyui-combobox'),function(el){
                                    $.parser.parse(el.parentElement);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                    combox.initBySelect(el,urls.getDictionary);
                                });
                            // }).then(function(){
                            //     return commFun.processQueued(el.querySelectorAll('.awdCombogrid'),function(el) {
                            //         combogrid.initPageClass(el,urls.getDictionaryPage);
                            //     });
                            // }).then(function(){
                            //     return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
                            //         comboxtree.initBySelect(el,urls.getJsCombotree);
                            //     });
                            // }).then(function(){
                            //     return commFun.processQueued(el.querySelectorAll('.awdTagbox'),function(el) {
                            //         comboxtree.initTagBox(el,urls.getDictionary);
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
                        main.submit(url, data,callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function(data) {
            
            $("#fm .imgFile").on('change', function() {
                var previewImage = $(this).parent().siblings('img');
                var file = this.files[0];
                var imgUrl = window.URL.createObjectURL(file);
                previewImage.attr('src', imgUrl);
                previewImage.onload = function() {
                    URL.revokeObjectURL(imgUrl);
                }
            })
            if (data.sfcfy == 0) {
                $('#sfcfyno').prop('checked','checked');
            }else if (data.sfcfy == 1) {
                $('#sfcfyyes').prop('checked','checked');
            }
            $('#fydwfm').combobox('setValue',data.fydw);
            $('#fydwfm').combobox('setText',data.fydwString);

            $('#ypdwfm').combobox('setValue',data.ypdw);
            $('#ypdwfm').combobox('setText',data.ypdwString);

            $('#syfffm').combobox('setValue',data.syff);
            $('#syfffm').combobox('setText',data.syffString);
            $('#ypmcfm').textbox('setValue',data.ypmc);
            $('#tmfm').textbox('setValue',data.tm);
            $('#jgfm').textbox('setValue',data.jg);
            $('#ggfm').textbox('setValue',data.gg);
            $('#sccjfm').textbox('setValue',data.sccj);
            $('#dzkclfm').textbox('setValue',data.dzkcl);


            
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.id = data.id;
                var smszp = $("#smszpfm")[0].files[0];
                var ypbzzp = $("#ypbzzpfm")[0].files[0];
                var sendDate = new FormData();
                sendDate.append("smszp",smszp);
                sendDate.append("ypbzzp",ypbzzp);
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
