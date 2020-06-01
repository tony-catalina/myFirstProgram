define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
	var combogrid = require('awd/easyui/combogrid');
    var formtpl = require('services/form/_csglCsdj.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var popwin;
    var comboxtree = require('awd/easyui/comboxtreegrid');
    var common=require('common');
    var isOpen = false;//弹框默认不打开
    var main = {
        init: function (url, data, rows, callback) {
            var html = formtpl('form/_csglCsdj', data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '出所登记',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        setTimeout(function () {
                            $.parser.parse('#fm');
                            main.bindEvent(data, rows);
                        }, 0);
                    },
                    yes: function () {
                        main.submit(url, data, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
            
        },
        bindEvent: function (addData, data) {
            for (var i = 0; i < data.length; i++) {
                $("#csdj_form_tr").append(
                    '<tr style="text-align: center" >' +
                    '<td style="border:1px solid #297aff;">' + (i + 1) + '</td>' +
                    '<td style="border:1px solid #297aff;"><input class="" name="jsh" style="width: 100%;height: 100%;border: none;" readonly value="' + data[i].jsh + '"/></td>' +
                    '<td style="border:1px solid #297aff;"><input class="" name="xm"  title="' + data[i].xm + '" style="width: 100%;height: 100%;border: none;" readonly value="' + ((data[i].xm).length > 4 ? (((data[i].xm).slice(0, 4)) + "...") : data[i].xm) + '" /></td>' +
                    '<td style="border:1px solid #297aff;"><input class="easyui-textbox" id="pzr" required  name="pzr" style="width: 100%;height:100%;"    /></td>' +
                    '<td style="border:1px solid #297aff;"><input class="easyui-textbox"  required name="pzdw" style="width: 100%;height: 100%;"   /></td>' +
                    '<td style="border:1px solid #297aff;"><input class="awdCombox"  code="CSYY"  name="csyy" data-options="editable:false" required style="width: 100%;height:100%;"  /></td>' +
                    '<td style="border:1px solid #297aff;"><input  class="easyui-datetimebox"  name="cssj"  style="width: 100%;height:100%;"  value="' + addData.cssj + '"/></td>' +
                    '<td style="border:1px solid #297aff;"><input class="easyui-textbox"  name="csqx" style="width: 100%;height:100%"  /></td>' +
                    '<td style="border:1px solid #297aff;"><input  class="awdCombogrid"  code="BADW" name="tzdw" style="width: 100%;height:100%;"  /></td>' +
                    '<td style="display:none"><input  name="updator"   readonly value="'+common.info.user.loginname+'"/></td>' +
                    '<td style="display:none"><input  name="jbxxid"  readonly value="' + data[i].id + '"/></td>' +
                    '<td style="display:none"><input  name="taskid"  readonly value="' + data[i].taskid + '"/></td>' +
                    '<td style="display:none"><input  name="snbh"  readonly value="' + data[i].snbh + '"/></td>' +
                    '<td style="display:none"><input  name="rybh"  readonly value="' + data[i].rybh + '"/></td>' +
                    '<td style="display:none"><input  name="bm"  readonly value="' + data[i].bm + '"/></td>' +
                    '<td style="display:none"><input  name="gyqx"  readonly value="' + data[i].gyqx + '"/></td>' +
                    '<td style="display:none"><input  name="rsrq"  readonly value="' + data[i].rsrq + '"/></td>' +
                    '<td style="display:none"><input  name="jsbh"  readonly value="' + data[i].jsbh + '"/></td>' +
                    '<td style="display:none"><input  name="ywlcid"  readonly value="' + data[i].ywlcid + '"/></td>' +
                    '<td style="display:none"><input  name="xb"  readonly  value="' + data[i].xbString + '"/></td>' +
                    '</tr>'
                );
            }
            setTimeout(function () {
                $.parser.parse('#fm');
                combox.initBySelect('#fm .awdCombox', url.getDictionary);
				combogrid.initPageClass('#fm .awdCombogrid', url.getDictionaryPage);
            }, 0);


        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var jsonStr;
                $('#txtab tbody').find('tr').each(function () {               //shgxTable 是table表格的id
                    jsonStr += "{";
                    $(this).find('td').each(function () {
                        $(this).find('input').each(function () {                        //获取td中input的值
                            if ($(this).attr("name")) {                                  //name是input标签的属性
                                if ($(this).val() != "") {
                                    jsonStr += "\"" + $(this).attr("name") + "\":\"" + $(this).val() + "\",";
                                }
                            }
                        })
                    })
                    jsonStr = jsonStr.substring(0, jsonStr.length - 1);
                    if (jsonStr != "undefined") {
                        var endWith = jsonStr.substr(jsonStr.length - 1, 1);
                        if (endWith != ",") {
                            jsonStr += "},";
                        }
                    }
                })

                jsonStr = jsonStr.substring(9, jsonStr.length - 1);
                // var postData = util.form2Json('fm');
                // postData.jbxxid = data.id;
                // postData.rybh = data.rybh;
                // postData.bm = data.bm;
                // postData.gyqx = data.gyqx;
                // postData.rsrq = data.rsrq;
                // postData.jsbh = data.jsbh;
                // postData.xb = data.xbString;
                // postData.ywlcid = data.ywlcid;
                // postData.taskid = data.taskid;
                // postData.processName = 'kss_csgl';
                // postData.processNode = 'kss_csgl_csdj';
                // postData.sqyy = '';
                util.ajax({
                    url: url,
                    //dataType: 'json',
                    //content-type:'application/json',
                    data: {"ryxx": jsonStr},
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
                    }
                });
            } else {
                utils.alert('表单数据格式不对！');
            }

        }
    };
    return main;
});