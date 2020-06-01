/**
模块名称： 民警基本信息
开始时间： 2020-2-29
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    require('modules/commFun');

    var utils = require('awd/layui/utils');
    var zw = require('services/form/_mjjbxxZw.html');
    var hm = require('services/form/_mjjbxxHm.html');
    var rl = require('services/form/_mjjbxxRl.html');
    var xk = require('services/form/_mjjbxxXk.html');
    var hideshow = require('modules/showHideClumn');
    var add = require('modules/form/mjjbxxAdd');
    var modify = require('modules/form/mjjbxxModify');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/mjjbxx');
    var url = require('modules/url');

    //界面控件
    //界面控件
    var main = {
        init: function () {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () {
            // 表单选中


            /**布局初始化**/
            toolbar.init({
                buttons: [{
                    id: 'add',
                    name: '新增民警',
                    icon: 'icon-jiahao',
                    fun: function () {
                        add.init(url.mjjbxxAdd, {}, function () { })
                    }
                },
                {
                    id: 'edit',
                    name: '修改',
                    icon: 'icon-jiahao',
                    fun: function () {
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            modify.init(url.mjjbxxUpdate, data, function () { })
                        } else {
                            utils.alert('请选择要修改的记录!');
                        }

                    }
                },
                {
                    id: 'del',
                    name: '指纹',
                    icon: 'icon-jiahao',
                    fun: function () {
                        
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            var html = zw('form/_mjjbxxZw',data,{});
                            utils.showWin({
                                title: '指纹采集',
                                area: ['90%', '85%'],
                                content: html,
                                maxmin: true,
                                success: function () {
                                    $.parser.parse('#fm');
                                },
                                yes: function () {
                                }
                            });
                        } else {
                            utils.alert('请选择要修改的记录!');
                        }                      
                    }
                },
                {
                    id: 'cri',
                    name: '虹膜',
                    icon: 'icon-jiahao',
                    fun: function () {
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            var html = hm('form/_mjjbxxHm',data,{});
                            utils.showWin({
                                title: '虹膜采集',
                                area: ['90%', '85%'],
                                content: html,
                                maxmin: true,
                                success: function () {
                                    $.parser.parse('#fm');
                                },
                                yes: function () {
                                }
                            });
                        } else {
                            utils.alert('请选择要修改的记录!');
                        }
                        
                    }
                },
                {
                    id: 'pic',
                    name: '人脸',
                    icon: 'icon-jiahao',
                    fun: function () {
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            var html = rl('form/_mjjbxxRl',data,{});
                        utils.showWin({
                            title: '人脸采集',
                            area: ['90%', '85%'],
                            content: html,
                            maxmin: true,
                            success: function () {
                                $.parser.parse('#fm');
                            },
                            yes: function () {
                            }
                        });
                        } else {
                            utils.alert('请选择要修改的记录!');
                        }
                       
                    }
                },
                {
                    id: 'jia',
                    name: '胸卡',
                    icon: 'icon-jiahao',
                    fun: function () {
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            var html = xk('form/_mjjbxxXk',data,{});
                            utils.showWin({
                                title: '胸卡采集',
                                area: ['90%', '85%'],
                                content: html,
                                maxmin: true,
                                success: function () {
                                    $.parser.parse('#fm');
                                },
                                yes: function () {
                                }
                            });
                        } else {
                            utils.alert('请选择要修改的记录!');
                        }
                        
                    }
                },
                {
                    id: 'fin',
                    name: '办理民警调离',
                    icon: 'icon-jiahao',
                    fun: function () {
                        var data = grid.getSelected('table')[0];
                        console.log(data);
                        if (data){
                            if (data.flag == '2') {
                                utils.alert('该民警已经被调离，无法修改！');
                            }else{
                                cxk = layer.confirm('确认调离' + '<font style="color:red">' + data.xm +"？" + '</font>', {
                                        btn: ['确定', '取消']},
                                    function () {
                                        layer.close(cxk);
                                        util.ajax({type: "POST", url: url.dimjSave,
                                            data: {id: data.id},
                                            func: function (result) {
                                                    grid.reload('table');
                                                    utils.alert(result.msg);
                                            },
                                        })
                                    });
                            }
                        } else{
                            utils.alert("请选择要调离的民警!");
                        }

                    }
                }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name: 'jh',
                        title: '警号',
                        type: 'textbox'
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.mjglList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jh', 'xm', 'xbString', 'mzString', 'csny', 'jxString', 'xlString', 'xlzxsString', 'bm', 'gbzwjbString'],
                    hidden: ['zzmmString', 'cjgmgzsj', 'hyzkString', 'cjgzsj', 'bmzw', 'lxdh', 'sfzh', 'sjh', 'lkrq', 'lkyy', 'hjszdString', 'bz']
                })
            });
            hideshow.init('modules/clumn/mjjbxx', ['jh', 'xm', 'xbString', 'mzString', 'csny', 'jxString', 'xlString', 'xlzxsString', 'bm', 'gbzwjbString'], ['zzmmString', 'cjgmgzsj', 'hyzkString', 'cjgzsj', 'bmzw', 'lxdh', 'sfzh', 'sjh', 'lkrq', 'lkyy', 'hjszdString', 'bz']);
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/


            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
