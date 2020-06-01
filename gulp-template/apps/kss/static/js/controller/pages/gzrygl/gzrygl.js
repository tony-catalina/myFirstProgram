/**
模块名称： 消毒日志
开始时间： 2020-2-29
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    require('modules/commFun');
    var utils = require('awd/layui/utils');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/gzrygl');
    var url = require('modules/url');
    var gzryglFormAdd=require('modules/form/gzrygl');
  //  var gzryglFormModify=require('modules/form/gzryglxg');
   // var gzryglFormlz=require('modules/form/gzryglrylz');

    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            /**布局初始化**/
            toolbar.init({
                buttons: [
                    { id: 'add', name: '新增', icon: 'icon-jiahao', fun: function() {
                            gzryglFormAdd.init(url.qtgzryglUpdateState, {}, function() {
                                grid.reload('table');
                                });

                        } },
                    { id: 'edit', name: '修改', icon: 'icon-jiahao', fun: function() {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                gzryglFormAdd.init(url.qtgzryglUpdateState, data, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择要修改的记录!');
                            }
                        }
                            },
                            { id: 'banli',
                                name: '办理人员离职',
                                icon: 'icon-jiahao',
                                fun: function () {
                                var data = grid.getSelected('table')[0];
                                if (data) {
                                    if(data.flag=='2'){
                                        utils.alert('该工作人员已经被调离，无法修改！');
                                    }else{
                                        console.log(data);
                                       let cxk = layer.confirm('确认调离' + '<font style="color:red">' + data.zgxm +'?' + '</font>', {
                                                btn: ['确定', '取消']},
                                            function () {
                                                layer.close(cxk);
                                                util.ajax({type: 'post', url: url.qtgzryglUpdateState,
                                                    data: {id: data.id},
                                                    func: function (result) {
                                                        grid.reload('table');
                                                        utils.alert(result.msg);
                                                    },
                                                });
                                            });
                                    }
                                }
                                 else {
                                    utils.alert('请先选择要调离的人员!');
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
                pageRender: {
                    primary: [{
                        name:'zy',
                        title: '职业',
                        type: 'awdCombox', url: url.getDictionary+'?node=ZY'
                    }, {
                        name:'zgxm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                }
                ,
                query: function (param) {
                    param = $.extend({}, {
                        'flag': '1'
                    }, param);
                    grid.query('table', param);
                }
            });

            grid.init('table', {
                url: url.qtgzryglList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['zgxm', 'mzString', 'csny', 'zyString', 'zjlxString', 'zjh', 'zzmmString'],
                    //隐藏的部分
                    hidden: [ ,'lxdh', 'sjh', 'xl', 'yszyzbh', 'bz']

                })
            });
            //可选按钮部分
            hideshow.init('modules/clumn/gzrygl',['zgxm', 'mz', 'csny', 'zy', 'zjlx', 'zjh', 'zzmm', 'lxdh', 'sjh', 'xl', 'yszyzbh', 'bz'],[]);
        },
        eventBind: function () {
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
