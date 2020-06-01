define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jslxlxxq.html');
    var combox = require('awd/easyui/combox');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var isOpen = false;//弹框默认不打开
    var url = require('modules/url');
    var urls = require('modules/url');
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_jslxlxxq',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '接待民警联系',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox, .easyui-combobox'),function(el){
                                    $.parser.parse(el.parentElement);
                                });
                            // }).then(function () {
                            //     return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                            //         combox.initBySelect(el,url.getDictionary);
                            //     });
                            // }).then(function(){
                            //     return commFun.processQueued(el.querySelectorAll('.awdCombogrid'),function(el) {
                            //         combogrid.initPageClass(el,url.getDictionaryPage);
                            //     });
                            // }).then(function(){
                            //     return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
                            //         comboxtree.initBySelect(el,url.getJsCombotree);
                            //     });
                            // }).then(function(){
                            //     return commFun.processQueued(el.querySelectorAll('.awdTagbox'),function(el) {
                            //         comboxtree.initTagBox(el,url.getDictionary);
                            //     });
                            }).then(function () {
                                var len = document.querySelectorAll('.timeline-item').length-1;
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
        bindEvent: function() {

            combox.initBySelect('#fm .awdCombox', urls.getDictionary);

            var checkbox = document.querySelector('#js1Checkbox');
            checkbox.addEventListener('change', function () {
                $('.elements-hidden').toggleClass('table-row-hidden');
                setTimeout(function (){
                        $.parser.parse('#fm');
                }, 0);});


                $("input[name='js2Checkbox']").on("click", function () {
                    if ($(this).attr("checked")) {
                        $(this).removeAttr("checked");
                        $('.js2Checkbox').hide()
                    } else {
                        $(this).attr("checked", 'true');
                        $('.js2Checkbox').show()
                        $.parser.parse('#fm');
                    }
                })

                $("input[name='js3Checkbox']").on("click", function () {
                    if ($(this).attr("checked")) {
                        $(this).removeAttr("checked");
                        $('.js3Checkbox').hide()
                    } else {
                        $(this).attr("checked", 'true');
                        $('.js3Checkbox').show()
                        $.parser.parse('#fm');
                    }
                })

                $("input[name='rsqsfyjb']").on("click", function () {
                    if ($(this).attr("checked")) {
                        $(this).removeAttr("checked");
                        $('.rsqsfyjb').hide()
                    } else {
                        $(this).attr("checked", 'true');
                        $('.rsqsfyjb').show()
                        $.parser.parse('#fm');
                    }
                })

                $("input[name='sfyjzbs']").on("click", function () {
                    if ($(this).attr("checked")) {
                        $(this).removeAttr("checked");
                        $('.sfyjzbs').hide()
                    } else {
                        $(this).attr("checked", 'true');
                        $('.sfyjzbs').show()
                        $.parser.parse('#fm');
                    }
                })

                $("input[name='sfcqfyhfyzmyw']").on("click", function () {
                    if ($(this).attr("checked")) {
                        $(this).removeAttr("checked");
                        $('.sfcqfyhfyzmyw').hide()
                    } else {
                        $(this).attr("checked", 'true');
                        $('.sfcqfyhfyzmyw').show()
                        $.parser.parse('#fm');
                    }
                })
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.taskid=data.taskid;
                postData.ywlcid=data.ywlcid;
                postData.jbxxSnbh=data.snbh;
                postData.jbxxXm=data.xm;
                postData.jbxxJsh=data.jsh;
                postData.jbxxJsbh=data.jsbh;

                var shgxList = [];
                var jsxx1 = {};
                jsxx1 = {"jsxm":$("#jsxm1").val(),"gx":$("#gx1").val(),"dz":$("#dz1").val(),"jszjh":$("#jszjh1").val(),"sj":$("#jslxdh1").val()};
                var jsxx2 = {};
                jsxx2 = {"jsxm":$("#jsxm2").val(),"gx":$("#gx2").val(),"dz":$("#dz2").val(),"jszjh":$("#jszjh2").val(),"sj":$("#jslxdh2").val()};
                var jsxx3 = {};
                jsxx3 = {"jsxm":$("#jsxm3").val(),"gx":$("#gx3").val(),"dz":$("#dz3").val(),"jszjh":$("#jszjh3").val(),"sj":$("#jslxdh3").val()};

                if(JSON.stringify(jsxx1) != "{}"){
                    shgxList.push(jsxx1);
                }
                if(JSON.stringify(jsxx2) != "{}"){
                    shgxList.push(jsxx2);
                }
                if(JSON.stringify(jsxx3) != "{}"){
                    shgxList.push(jsxx3);
                }


                var str=JSON.stringify(postData);
                var shgxs=JSON.stringify(shgxList);

                var sfyjzbs = $("#sfyjzbs").val();
                var sfyjzbsfm = 0;
                if(sfyjzbs == "on"){
                    sfyjzbsfm = 1;
                }else{
                    sfyjzbsfm = 0;
                }
                
                
                var sfcqfyhfyzmyw = $("#sfcqfyhfyzmyw").val();
                var sfcqfyhfyzmywfm = 0;
                if(sfcqfyhfyzmyw == "on"){
                    sfcqfyhfyzmywfm = 1;
                }else{
                    sfcqfyhfyzmywfm = 0;
                }
                var rsqsfyjb = $("#rsqsfyjb").val();
                var rsqsfyjbfm = 0;
                if(rsqsfyjb == "on"){
                    rsqsfyjbfm = 1;
                }else{
                    rsqsfyjbfm = 0;
                }
                console.log(sfcqfyhfyzmywfm);

                util.ajax({
                    url: url,
                    data: {data:str,shgxs:shgxs,"sfyjzbs":sfyjzbsfm,"sfcqfyhfyzmyw":sfcqfyhfyzmywfm,"rsqsfyjb":rsqsfyjbfm},
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
