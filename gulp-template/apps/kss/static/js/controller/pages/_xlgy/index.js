define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils=require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var tree= require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var clumn1 = require('modules/clumn/_xlgy');
    var url = require('modules/url');
    var formtpl=require('services/form/_xlgyXlgy.html');
    var hideshow=require('modules/showHideClumn');
    var xlgyXlgyForm=require('modules/form/xlgyXlgy')
    var xlgyXgForm=require('modules/form/xlgyXg')
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
    var jbxxgrid = require('modules/jbxxgrid');
    var common=require('common');

    //界面控件
    var main = {
        init: function () {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () {
            /**布局初始化**/
            toolbar.init({
                buttons: [{
                    id: 'add',
                    name: '新增',
                    icon: 'icon-jiahao',
                    ryyw:true,
                    fun: function() {
                        var data = grid.getSelected('table')[0];
                        console.log(data);
                        var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                        var user=common.info.user.loginname;
                        var postData = Object.assign({},data,{djsj:currentTime,djr:user});
                        if(data) {
                            xlgyXlgyForm.init(url.xlgyAdd, postData, function() {
                                grid.reload('subtable');
                            });
                        }else {
                            utils.alert('请选择人员!');
                        }
                    }
                }
                // {
                //     id: 'edit',
                //     name: '修改',
                //     icon: 'icon-jiahao',
                //     fun: function() {
                //         var data = grid.getSelected('table')[0];
                //         var jl = grid.getSelected('subtable')[0];
                //         console.log(data);
                //         var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                //         var user=common.info.user.loginname;
                //         var postData = Object.assign({},data,{djsj:currentTime,djr:user});
                //         if(jl) {
                //             xlgyXgForm.init(url.xlgyUpdate, postData,jl, function() {
                //                 grid.reload('subtable');
                //             });
                //         }else {
                //             utils.alert('请选择需要修改的记录!');
                //         }
                //     }
                // }
            ]
            });
            linkbar.init({
                links: [{
                        id: 'list',
                        name: '数据列选择',
                        icon: 'icon-gengduo7',
                        fun: function () {
                            hideshow.show('table');
                        }
                    },
                    {
                        id: 'color',
                        name: '分色示例',
                        icon: 'icon-gengduo1',
                        fun: function () {
                            
                        }
                    }
                ]
            });
            searchform.init('search', {
                query:function(param){
                    param = $.extend({}, {
                        'taskDefinitionKey': '',
                        'processDefinitionKey': ''
                    }, param);
                    grid.query('table',param);
                }
            });

            jbxxgrid.initjbxx('table',false,250, {},function(rybh) {
                $("#subtable").datagrid('reload', {    
                     "rybh_eq": rybh
                  });
             },[
             {id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                  layer.open({
                      title:"业务信息",
                      area: ['90%', '600px'],
                      zIndex: 100,
                      type:1,
                      content:'<div class="section-container">' +
                     '<div class="section-item section-item-one section-item-padding">' +
                     '<div class="section-header" style="margin-bottom:1%;">' +
                     '<div class="section-controls single-colors" id="tools">' +
                     '<button type="button" id="edit">' +
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
                              url: url.xlgyList,
                              fit: false,
                              width: '100%',
                              height: '300',
                              queryParams:{ "rybh_eq": data[0].rybh},
                              firstLoad: true,
                              columns: clumn1({
                                  check: false,
                                  clumns:['djr','djsj','gynr'],
                                  hidden: []
                              })
                          });
                          $('#edit').on('click', function () {
                            var data = grid.getSelected('table')[0];
                            var jl = grid.getSelected('subtable')[0];
                            console.log(data);
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var user=common.info.user.loginname;
                            var postData = Object.assign({},data,{djsj:currentTime,djr:user});
                            if(jl) {
                                xlgyXgForm.init(url.xlgyUpdate, postData,jl, function() {
                                    grid.reload('subtable');
                                });
                            }else {
                                utils.alert('请选择需要修改的记录!');
                            }
                        })

                      }
                  })
              }
          }
          ]);

            // grid.init('subtable', {
            //     url: url.xlgyList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 500,
            //     firstLoad: false,
            //     columns: clumn1({
            //         check: false,
            //         clumns: ['djr','djsj','gynr'],
            //         hidden: []
            //     })
            // });

            jqtree.init('jqtree','table');//有监区树就加，没有不加
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
