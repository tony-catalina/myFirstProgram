define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var grid = require('awd/easyui/grid');
    var addDeleteEvent = require('modules/addDeleteColumn');
    var formtpl = require('services/form/_wlrydjWlrydj.html');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var addDeleColumn = {
        title: ['车辆所属单位', '车牌号码', '安全检查情况', '所内准停证号码'],
        options: [
            [
                { type: 'easyui-textbox' },
                { type: 'easyui-textbox' },
                { type: 'easyui-textbox' },
                { type: 'easyui-textbox' }
            ]
        ]
    };
    var addDeleColumn1 = {
        title: ['姓名', '证件号', '单位', '联系电话', '所内证件号'],
        options: [
            [
                { type: 'easyui-textbox' },
                { type: 'easyui-textbox' },
                { type: 'easyui-textbox' },
                { type: 'easyui-textbox' },
                { type: 'easyui-textbox' }
            ]
        ]
    };
    var main = {

        init: function (url, data, row, callback) {
            var dataall = {};
            Object.assign(dataall, data, row);
            var html = formtpl('form/_wlrydjWlrydj', dataall);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '数据录入',
                    area: ['90%', '85%'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        var $timeLineTabControl = $('.timeline-content2').tabs({border: false});
                        addDeleteEvent.init($timeLineTabControl, 0, addDeleColumn1);
                        addDeleteEvent.init($timeLineTabControl, 1, addDeleColumn);

                        $.parser.parse('#fm');
                        main.bindEvent();
                    },
                    yes: function () {
                        main.submit(url, callback);
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
                //var data = util.form2Json('fm');
                var dataObj = $("#fm").serializeObject();
                var sendDate = new FormData();
                sendDate.append("dataRyxx", "");
                sendDate.append("dataClxx", "");
                sendDate.append("jsonList", JSON.stringify(dataObj));
                util.ajax({
                    url: url,
                    data: sendDate,
                    processData: false,
                    contentType: false,
                    func: function (data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
							}
                            utils.closeWin(popwin);
                            grid.reload('table')
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