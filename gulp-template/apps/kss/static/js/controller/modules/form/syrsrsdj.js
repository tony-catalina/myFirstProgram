define(function(require) {
    var commFun = require('modules/commFun');
    const $ = require('jquery');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var formtpl = require('services/form/_syrsRsdj.html');
    var addDeleteEvent = require('modules/addDeleteColumn');
    var urls = require('modules/url');
    var common = require('common');
    var isOpen = false; //弹框默认不打开
    var popwin;


    var addDeleColumn = {
        title: ['姓名', '关系', '工作单位', '职业', '证件号', '住所', '联系电话'],
        options: [
            [
                { type: 'easyui-textbox',name:'jsxm' },
                { type: 'awdCombox', name: 'gx', code: 'GX' },
                { type: 'easyui-textbox' ,name:'gzdw'},
                { type: 'awdCombox' ,name:'zy', code: 'ZY'},
                { type: 'easyui-textbox',name:'jszjh', valid:'idcard' },
                { type: 'easyui-textbox' ,name:'zs'},
                { type: 'easyui-textbox' ,name:'lxdh',valid:'mphone'}
            ]
        ]
    };
    var main = {
        init: function(url, data, callback) {
            var html = formtpl('form/_syrsRsdj', data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '入所登记',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        var $timeLineTabControl = $('.timeline-content').tabs({ border: false });
                        addDeleteEvent.init($timeLineTabControl, 1, addDeleColumn);
                        // $.parser.parse('.timeline-content');
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function(p, el, idx) {
                            return p.then(function() {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-datebox'), function(el) {
                                    $.parser.parse(el.parentElement);
                                });
                            }).then(function() {
                                return commFun.processQueued(el.querySelectorAll('.awdCombox'), function(el) {
                                    combox.initBySelect(el, urls.getDictionary);
                                });
                            }).then(function() {
                                return commFun.processQueued(el.querySelectorAll('.awdCombogrid'), function(el) {
                                    combogrid.initPageClass(el, urls.getDictionaryPage);
                                });
                            }).then(function() {
                                return commFun.processQueued(el.querySelectorAll('.jsh'), function(el) {
                                    comboxtree.initBySelect(el, urls.getJsCombotree);
                                });
                            }).then(function() {
                                return commFun.processQueued(el.querySelectorAll('.awdTagbox'), function(el) {
                                    comboxtree.initTagBox(el, urls.getDictionary);
                                });
                            }).then(function() {
                                var len = document.querySelectorAll('.timeline-item').length - 1;
                                if (idx === len) {
                                    main.bindEvent(data);
                                }
                            });
                        }, Promise.resolve());
                    },
                    yes: function() {
                        main.submit(url, data, callback);
                    }
                },function() {
                    isOpen = false;
                });
            }
        },
        bindEvent: function(data) {
        	//comboxtree.initBySelect('#fm .jsh', urls.getJsCombotree);
            // 默认值
            // $("#xb").combobox('setValue', '1').combobox('setText', '男性');
            // $("#gj").combobox('setValue', '156').combobox('setText', '中国');
            // $("#mz").combobox('setValue', '01').combobox('setText', '汉');
            // $("#zjlx").combobox('setValue', '11').combobox('setValue', '身份证');
            $("#drjsr").textbox('setValue', common.info.user.loginname);
            $("#drjssj").datetimebox('setValue', new Date().Format("yyyy-MM-dd hh:mm:ss"));
        },
        submit: function(url, getData, callback) {
            if ($('#fm').form('validate')) {
            	//社会关系表单获取
            	var shgxlist = tools.getJsonByClass("layui-table ");
            	console.log(getData);
                var data = util.form2Json('fm');
                data.taskid = getData.taskid;
                data.id = getData.id;
                data.jsbh = getData.jsbh;
                data.rybh = getData.rybh;
                data.badw = $("#badw").combobox('getText')
                data.sydw = $("#sydw").combobox('getText')
                data.ay = $("#ay").tagbox('getValues').toString();
                data.shgxlist = shgxlist;
                util.ajax({
                    url: url,
                    data: data,
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