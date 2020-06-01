define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_ryshgxRyshgx.html');
    var addDeleteTpl = require('services/com/addDeleteColumn.html');
    var addDeleteEvent = require('modules/addDeleteColumn');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var urls = require('modules/url');
    var isOpen=false;
    var popwin;
    // var addDeleteEvent = require('modules/addDeleteColumn');
    // var addDeleColumn = {
    //     title: ['姓名', '性别', '关系','工作单位', '职业', '住所','联系电话', '证件号码'],
    //     options: [
    //         [
    //             { type: 'easyui-textbox', name:'xm' },
    //             { type: 'easyui-combobox',name:'xb' },
    //             { type: 'easyui-combobox' ,name:'gx'},
    //             { type: 'easyui-textbox', name:'gzdw' },
    //             { type: 'easyui-combobox',name:'zy' },
    //             { type: 'easyui-textbox' ,name:'zs'},
    //             { type: 'easyui-textbox', name:'lxdh' },
    //             { type: 'easyui-textbox',name:'zjhm' },
    //         ]
    //     ]
    // };
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_ryshgxRyshgx',data);
            if(!isOpen){
                popwin = utils.showWin({
                    title: '人员社会关系添加',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen=true;
                        setTimeout(function (){
                            $.parser.parse('#fm');
                            main.bindEvent();
                        }, 0);

                        // var $timeLineTabControl = $('.ryshgx').tabs({ border: false });
                        // addDeleteEvent.init($timeLineTabControl, 0, addDeleColumn);
                        var jtcy = "";
                        jtcy +=`<tr>
                            <td  align="center"><input id="xm1" class="easyui-textbox" required></td>
                            <td  align="center"><input id="xbfm2" class="awdCombox" code="XB" required></td>
                            <td  align="center"><input id="gx1" class="awdCombox" code="GX" required></td>
                            <td  align="center"><input id="gzdw1" class="easyui-textbox"></td>
                            <td  align="center"><input id="zy1" class="awdCombox" code="ZY" required></td>
                            <td  align="center"><input id="zs1" class="easyui-textbox" required></td>
                            <td  align="center"><input id="lxdh1" class="easyui-textbox" data-options="validType:'mphone'" required></td>
                            <td  align="center"><input id="zjhm1" class="easyui-textbox" data-options="validType:'idcard'" required></td>
                            <td style="min-width:150px;" align="center"><input class="sm" type="button" value="扫描" style="margin: 4px;"><span class="iconfont icon-jianhao delBtn"></span><span class="iconfont icon-jiahao addBtn"></span></td>
                            </tr>`;
                        $("#jtcyTable").append(jtcy);
                        $.parser.parse('#jtcyTable');

                        $(document).on("click",".addBtn",function(){
                            var trcount = $("#jtcyTable").find("tr").length;
                            var jtcymd = "";
                            jtcymd +=`<tr>
                                <td  align="center"><input id="xm" ${trcount+1}  class="easyui-textbox"></td>
                                <td  align="center"><input id="xbfm" ${trcount+1} class="easyui-combobox"></td>
                                <td  align="center"><input id="gx" ${trcount+1} class="easyui-combobox"></td>
                                <td  align="center"><input id="gzdw" ${trcount+1}  class="easyui-textbox"></td>
                                <td  align="center"><input id="zy" ${trcount+1}  class="easyui-combobox"></td>
                                <td  align="center"><input id="zs" ${trcount+1}  class="easyui-textbox"></td>
                                <td  align="center"><input id="lxdh" ${trcount+1} class="easyui-textbox" data-options="validType:'mphone'"></td>
                                <td  align="center"><input id="zjhm" ${trcount+1}  class="easyui-textbox" data-options="validType:'idcard'"></td>
                                <td style="min-width:150px;" align="center"><input class="sm" type="button" value="扫描" style="margin: 4px;"><span class="iconfont icon-jianhao delBtn"></span><span class="iconfont icon-jiahao addBtn"></span></td>
                                </tr>`;
                            $("#jtcyTable").append(jtcymd);
                            $.parser.parse('#jtcyTable');
                            combox.initBySelect('#fm .awdCombox', urls.getDictionary);
                        })
                        $(document).on("click",".delBtn",function(){
                            var trcount = $("#jtcyTable").find("tr").length;
                            if (trcount == 1) {
                                $.messager.alert("提示", "行数不少于1行！", "info");
                            } else {
                                $(this).parent().parent().remove();
                            }
                        });

                        $.ajax({
                            type : "POST",  //提交方式
                            url : url.shgxList,//路径
                            async:false,
                            data : {
                                rybh:data.rybh,
                                jsbh:data.jsbh,
                                state:'R2',
                            },
                            success : function(result) {
                                var data = result.result.rows;
                                console.log(data,'data')
                                if (data.length>0){
                                    for(var i = 0;i<data.length;i++){
                                        var xh = i+1;
                                        var shgx='';
                                        shgx+= '<tr><td><input type="text" style="border: none;outline:none;text-align: center;" readonly value="'+xh+'"></td>'+
                                            '<td><input type="text" style="border: none;outline:none;text-align: center;" readonly value="'+data[i].jsxm+'"></td>'+
                                            '<td><input type="text" style="border: none;outline:none;text-align: center;" readonly value="'+data[i].xbString+'"></td>'+
                                            '<td><input type="text" style="border: none;outline:none;text-align: center;min-width:125px;" readonly value="'+data[i].jszjh+'"></td>'+
                                            '<td><input type="text" style="border: none;outline:none;text-align: center;" readonly value="'+data[i].gxString+'"></td>'+
                                            '<td><input type="text" style="border: none;outline:none;text-align: center;" readonly value="'+data[i].gzdw+'"></td>'+
                                            '<td><input type="text" style="border: none;outline:none;text-align: center;" readonly value="'+data[i].zyString+'"></td>'+
                                            '<td><input type="text" style="border: none;outline:none;text-align: center;" readonly value="'+data[i].zzdz+'"></td>'+
                                            '<td><input type="text" style="border: none;outline:none;text-align: center;min-width:125px;" readonly value="'+data[i].dh+'"></td>'+
                                            '</tr>'
                                        $('#shgxTable').append(shgx)
                                    }
                                } else{
                                    $("#shgxTable").append(
                                        '<tr><td colspan="9" style="text-align: center;"><input type="text" style="border: none;outline:none;text-align: center;" readonly value="暂无社会关系"></td></tr>'
                                    )
                                }
                            }
                        })


                        var shgx ='';
                        shgx +='';
                        $("#shgxTable").append(shgx)
                    },
                    yes: function() {
                        main.submit(url,data, callback);
                    }
                },function(){
                    isOpen=false;
                });
            }
        },
        bindEvent: function() {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);

        },
        submit: function(url,data, callback) {
            var jtxx = {};//家庭成员信息
            var jtxxarr = [];
            var jtxxcount = $("#jtcyTable").find("tr").length;
            for (var i = 1; i <= jtxxcount; i++) {
                var xm = $("#xm" + i).textbox("getValue");
                var xb = $("#xbfm" + i).val();
                var gx = $("#gx" + i).val();
                var gzdw = $("#gzdw" + i).val();
                var zy = $("#zy" + i).val();
                var zs = $("#zs" + i).val();
                var lxdh = $("#lxdh" + i).val();
                var zjhm = $("#zjhm" + i).val();
                if((xm!=""&&xm!=null) || (xb!=""&&xb!=null) || (gx!=""&&gx!=null) || (gzdw!=""&&gzdw!=null) || (zy!=""&&zy!=null) || (zs!=""&&zs!=null) || (lxdh!=""&&lxdh!=null) || (zjhm!=""&&zjhm!=null) ){

                    var year= zjhm.substr(6,4);
                    var date=new Date()
                    console.log(year)
                    console.log( date.getFullYear())


                    jtxx = {"jsxm": xm, "xb":xb, "gx": gx, "gzdw": gzdw, "zy": zy, "dz": zs, "dh": lxdh, "jszjh": zjhm,};
                    jtxxarr.push(jtxx);
                }
            }
            var jtxxjson = JSON.stringify(jtxxarr);
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.shgx=jtxxjson;
                postData.rybh=data.rybh;

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
            } else {
                utils.alert('表单数据格式不对！');
            }

        }
    };
    return main;
});