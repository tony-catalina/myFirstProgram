define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jstzZxgsz.html');
    var combox = require('awd/easyui/combox');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');
    var isOpen=false;
    var commFun = require('modules/commFun');
    var popwin;
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_jstzZxgsz', data);
           if(!isOpen){
               popwin = utils.showWin({
                   title: '办理监室设置',
                   area: ['90%', '600px'],
                   content: html,
                   maxmin: true,
                   buttons: ['保存', '取消'],
                   success: function () {
                       isOpen = true;
                       Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                           return p.then(function () {
                               return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-datebox, .easyui-combobox'),function(el){
                                   $.parser.parse(el.parentElement);
                               });
                           }).then(function () {
                               return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                   combox.initBySelect(el,urls.getDictionary);
                               });
                           }).then(function(){
                               return commFun.processQueued(el.querySelectorAll('.awdCombogrid'),function(el) {
                                   combogrid.initZxgszClass(el, urls.jsList);
                               });
                           }).then(function(){
                               return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
                                   comboxtree.initBySelect(el,urls.getJsCombotree);
                               });
                           }).then(function(){
                               return commFun.processQueued(el.querySelectorAll('.awdTagbox'),function(el) {
                                   comboxtree.initTagBox(el,urls.getDictionary);
                               });
                           }).then(function () {
                               var len = document.querySelectorAll('.timeline-item').length-1;
                               if (idx === len) {
                                   main.bindEvent(data);

                               }
                           });
                       }, Promise.resolve());
                       main.jsAndzgmjcx(data);
                   },
                   yes: function () {
                       main.submit(url, data, callback);
                   }
               },function(){
                   isOpen=false;
               });
           }
        },
        bindEvent: function () {

        },
        jsAndzgmjcx: function (row) {
            $.ajax({
                type: "POST",  //提交方式
                url: urls.jsList,//路径
                data: {xm: row.xm},
                success: function (result) {
                    var data = result.result.rows;
                    let Data_Array = new Array;
                    if (data.length > 0) {
                        var xh = 0,lx
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].zgmj == row.xm || data[i].xgmj == row.xm) {
                                if (data[i].zgmj == row.xm) {
                                    lx = "主管";
                                    data[i].jgname = lx;
                                } else {
                                    lx = "协管";
                                    data[i].jgname = lx;
                                }
                                xh = xh + 1;
                                $("#zxgszfm").append(
                                    '<tr><td style="border:1px solid #297aff; color: #fff;text-align: center;"><input type="text" style="text-align: center;border:none"  readonly value="' + xh + '"></td>' +
                                    '<td style="border:1px solid #297aff; color: #000;text-align: center;">' + data[i].jsh + '</td>' +
                                    '<td style="border:1px solid #297aff; color: #000;text-align: center;">' + lx + '</td>' +
                                    '<td style="border:1px solid #297aff; color: #fff;text-align: center;"><span class="zxgjy" style="color: #fff;background: #297aff; padding: 4px; border-radius: 5px; cursor: pointer;text-decoration:none;" jsid ="' + data[i].id + '" >停止</span></td></tr>'
                                )
                                Data_Array.push(data[i]);
                            }
                        }
                        $(".zxgjy").each(function (i,item) {
                            $(this).on('click', function () {
                                let id = $(this).attr('jsid'),mjxm = row.xm,jsh = Data_Array[i].jsh,zxglx = Data_Array[i].jgname
                                cxk = layer.confirm('确定撤销<br>' + '<font style="color:red">' + mjxm + "在监室" +  jsh + "的" + zxglx + "职位？" + '</font>', {
                                    btn: ['确定', '取消']}, 
                                function () {
                                    util.ajax({type: "POST", url: urls.JsAndzxgCx,
                                        data: {id: id,zxglx: zxglx, jsh: jsh},
                                        func: function (result) {layer.close(cxk);
                                            if (result.status == "200") {
                                                $('#zxgszfm').empty();
                                                main.jsAndzgmjcx(row);
                                                utils.alert("撤销成功");
                                            } else utils.alert("撤销失败");
                                        },
                                    })
                                });
                            });
                        });
                    }
                }
            });
        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var mjxb = data.xb;
                var zgjsh = $("#zgjsfm").combogrid('getValue');
                var xgjsh = $("#xgjsfm").combogrid('getValue');
                var mjxm = data.xm;
                var mjjh = data.jh;
                var updator = '';
                var jsbh = data.jsbh;
                $.ajax({
                    type: "POST",  //提交方式
                    url: urls.getByJsh,//路径
                    data: {
                        jsh: zgjsh,
                        jsbh: jsbh
                    },

                    success: function (result) {
                        console.log(result)
                        var jsxb = result.rows[0].type;
                        if (mjxb != jsxb) {
                            utils.alert("民警性别与监室类型不符合！");
                            return;
                        } else {
                            if (zgjsh != xgjsh) {
                                util.ajax({
                                    type: "POST",
                                    url: urls.JsAndzxg,
                                    data: {
                                        zgjsh: zgjsh,
                                        xgjsh: xgjsh,
                                        mjxm: mjxm,
                                        mjjh: mjjh,
                                        updator: updator
                                    },
                                    noneOpen:undefined,
                                    func: function (data) {
                                        if (data.success) {
                                            utils.alert(data.msg);
                                            if (tools.isFunction(callback)) {
                                                callback();
                                                utils.closeWin(popwin);
                                            }
                                        } else {
                                            utils.alert(data.msg);
                                        }
                                    },
                                });
                            } else {
                                utils.alert('不可设置单监室主协管相同！');
                            }
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
