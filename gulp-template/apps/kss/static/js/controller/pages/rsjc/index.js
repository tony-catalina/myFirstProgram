/**
模块名称： 妊娠检查
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_rsjc.html');
    var hideshow=require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var clumn1 = require('modules/clumn/rsjc');
    var url = require('modules/url');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
    var common=require('common');
    var rsjcXzForm = require('modules/form/rsjcXz');
    var rsjcXgForm = require('modules/form/rsjcXg');
    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            //布局初始化
            toolbar.init({
                buttons: [
                    { id: 'add', name: '新增', icon: 'icon-jiahao', fun: function () { 
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            var addData1 = { id: data.id };
                            var addData = {};
                            Object.assign(addData, data, addData1);
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var user=common.info.user.loginname;
                            var postData = Object.assign({},data,{jcrq:currentTime,jcr:user});
                            rsjcXzForm.init(url.rsjcAdd, postData, function () {
                                grid.reload('table')
                            });
                        } else {
                            layer.alert('请选择要办理的记录!');
                        }
                     } },
                    // { id: 'edit', name: '修改', icon: 'icon-jiahao', fun: function () { 
                    //     var data = grid.getSelected('table')[0];
                    //     if (data) {
                    //         var datadown = grid.getSelected('subtable')[0];
                    //         if (datadown) {
                    //         var addData = {};
                    //         Object.assign(addData, data, datadown);
                    //         rsjcXgForm.init(url.rsjcUpdate, addData, function () {
                    //             grid.reload('table')
                    //         });
                    //         } else {
                    //             utils.alert('请选择要修改的记录!');
                    //         }
                    //     } else {
                    //         utils.alert('请选择要修改的记录!');
                    //     }
                    //  } },
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () {hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () {  } }
                ]
            });

            searchform.init('search', {
                primary: [{
                    name: 'jsh',
                    title: '监室号',
                    type: 'awdCombotree', url:url.getJqCombotree
                }, {
                    name:'param',
                    title: '姓名',
                    type: 'textbox'
                }],
                query: function (param) {
                    param = $.extend({}, {
                        'xb': '2',
                        'rsjclx': '2'
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initjbxx('table',false,200, {},function(rybh) {   
                $("#subtable").datagrid("clearSelections");
                $("#subtable").datagrid('reload', {    
                     "rybh": rybh
                  });
             },[{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                  layer.open({
                      title:"业务信息",
                      area: ['90%', '600px'],
                      zIndex: 1000,
                      content: '<div class="section-container">' +
                      '<div class="section-item section-item-one section-item-padding">' +
                      '<div class="section-header" style="margin-bottom:1%;">' +
                      '<div class="section-controls single-colors" id="tools">' +
                      '<button type="button" id="rsjc">' +
                      '<span class="iconfont icon-jiahao"></span>修改' +
                      '</button>' +
                      '</div>' +
                      ' </div>' +
                      ' <div class="section-item-content border-top">' +
                      '<form id="search" class="search-form"></form>' +
                      '<table id="subtable" ></table>' +
                      '</div>' +
                      '</div>' +
                      ' </div> ',
                      btn: ['取消'],
                      success: function () {
                          grid.init('subtable', {
                              url: url.rsjcList,
                              fit: false,
                              width: '100%',
                              height: '500',
                              queryParams:{ "rybh": data[0].rybh},
                              firstLoad: true,
                              columns: clumn1({
                                  check: false,
                                  clumns: ['jcr', 'jcjgString', 'jcrq'],
                                  hidden: []
                              })
                          });

                          $("#rsjc").on('click', function () {
                            var data = grid.getSelected('table')[0];
                                if (data) {
                                    var datadown = grid.getSelected('subtable')[0];
                                    if (datadown) {
                                    var addData = {};
                                    Object.assign(addData, data, datadown);
                                    rsjcXgForm.init(url.rsjcUpdate, addData, function () {
                                        grid.reload('subtable')
                                    });
                                    } else {
                                        utils.alert('请选择要修改的记录!');
                                    }
                                } else {
                                    utils.alert('请选择要修改的记录!');
                                }
                          })
 
                      }
                  })
              }}
          ]);
            jqtree.init('jqtree','table');
           
            hideshow.init('modules/clumn/jbxx',['snbh', 'xm', 'jsh', 'bahjstring', 'rsrq', 'gyqx', 'badw'],['xbString','dwlx','rsxzString','csrq','zjlxString','zjh','hjdString','xzdString','hyzkString','mzString','gjString','whcdString','zyString','sfString','tssfString','jyrq','ayString']);
            // grid.init('subtable', {
            //     url: url.rsjcList,
            //     fit: false,
            //     width: '100%',
            //     height: '300',
            //     firstLoad: false,
            //     columns: clumn1({
            //         check: false,
            //         clumns: ['jcr', 'jcjgString', 'jcrq'],
            //         hidden: []
            //     })
            // });
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