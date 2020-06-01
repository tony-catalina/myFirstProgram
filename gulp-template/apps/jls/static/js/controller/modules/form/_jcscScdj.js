define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var formtpl = require('services/form/_jcscScdj.html');
    var addDeleteEvent = require('modules/addDeleteColumn');
    var common=require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;

    var addDeleColumn = {
        title: ['姓名', '职务', '所在单位'],
        options: [
            [
                { type: 'easyui-textbox', name:'xmAdd' },
                { type: 'easyui-textbox',name:'zw' },
                { type: 'easyui-textbox' ,name:'szdw'},
            ]
        ]
    };
    var main = {
 
        init: function (url, data, row, callback) {
            var dataall = {};
            Object.assign(dataall, data, row);
            var html = formtpl('form/_jcscScdj', dataall);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '数据录入',
                    area: ['90%', '85%'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {

                        var $timeLineTabControl = $('.jcscScdj').tabs({border: false});
                        addDeleteEvent.init($timeLineTabControl, 0, addDeleColumn);

                        $.parser.parse('#fm');
                        main.bindEvent();
                    },
                    yes: function () {
                        main.submit(url, data, callback);
                    }
                });
            }
        },
        bindEvent: function () {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
        },
        submit: function (url, row, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                var nowDate=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
                var jbxxAry=[];
                $("input[name='xmAdd']").each(function () {
                    var jbxxs={};
                    jbxxs.tbr=common.info.user.loginname;
                    jbxxs.tbrq=nowDate;
                    jbxxs.scbz=row.scbz;
                    jbxxs.ywlcid=row.ywlcid;
                    jbxxs.taskid=row.taskid;
                    jbxxs.jsbh=row.jsbh;
                    jbxxs.rq=data.rq;
                    jbxxs.ldxm=data.ldxm;
                    jbxxs.sfls=data.sfls;
                    jbxxs.ldzw=data.ldzw;
                    jbxxs.xm=$(this).val();
                    jbxxs.zw = $(this).parent().parent().parent().find("input[name='zw']").val();
                    jbxxs.dw = $(this).parent().parent().parent().find("input[name='szdw']").val();
                    jbxxs.scnr = data.scnr;
                    jbxxs.yjjy =data.yjjy;
                    jbxxAry.push(jbxxs);
                });

                var postData =JSON.stringify(jbxxAry);
                var ss={};
                ss.jsonList=postData;
                util.ajax({
                    url: url,
                    data: ss,
                    func: function(data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                               
                            }
                            utils.closeWin(popwin);
                            $('#table').datagrid("reload");
                            
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