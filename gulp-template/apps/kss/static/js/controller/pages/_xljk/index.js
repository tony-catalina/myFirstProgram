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
    var clumn1 = require('modules/clumn/_xljk');
    var url = require('modules/url');
    var formtpl=require('services/form/_xljkXljkjl.html');
    var hideshow=require('modules/showHideClumn');
    var xljkXljkForm=require('modules/form/xljkXljk')
    var xljkxgForm=require('modules/form/xljkUpdate')
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree =require('modules/jqtree');
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
                    fun: function () {
                        var data = grid.getSelected('table')[0];
                        var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                        var user=common.info.user.loginname;
                        var postData = Object.assign({},data,{djsj:currentTime,djr:user});
                        if(data) {
                            xljkXljkForm.init(url.xljkAdd, postData,false, function() {
                                grid.reload('subtable');
                            });
                        }else {
                            utils.alert('请选择人员!');
                        }
                    }
                }, 
                // {
                //     id: 'edit',
                //     name: '修改',
                //     icon: 'icon-jiahao',
                //     fun: function () {
                //         var data = grid.getSelected('table')[0];
                //         var jl = grid.getSelected('subtable')[0];
                //         if(data) {
                //             xljkxgForm.init(url.xljkUpdate, data,jl, function() {
                //                 grid.reload('subtable');
                //             });
                //         }else {
                //             utils.alert('请选择要修改的记录!');
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
                            alert(2);
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
                  console.log(rybh,123)
             },
             [
             {id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                  layer.open({
                      title:"业务信息",
                      area: ['90%', '600px'],
                      type: 1,
                      zIndex: 100,
                     //  content:"<table id='subtable'></table>",
                     content: '<div class="section-container">' +
                             '<div class="section-item section-item-one section-item-padding">' +
                             '<div class="section-header" style="margin-bottom:1%;">' +
                             '<div class="section-controls single-colors" id="tools">' +
                             '<button type="button" id="modify">' +
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
                        console.log(data[0].rybh,222),
                          grid.init('subtable', {
                              url: url.xljkList,
                              fit: false,
                              width: '100%',
                              height: '300',
                              queryParams:{ "rybh_eq": data[0].rybh},
                              firstLoad: true,
                              columns: clumn1({
                                  check: false,
                                  clumns: ['djr','djsj','jynr','bz'],
                                  hidden: []
                              }) 
                         
                          });
                          $('#modify').on('click', function () {
                                    var data = grid.getSelected('table')[0];
                                    var jl = grid.getSelected('subtable')[0];
                                    if(data) {
                                        xljkxgForm.init(url.xljkUpdate, data,jl, function() {
                                           grid.reload('subtable');
                                        });
                                    }else {
                                        utils.alert('请选择要修改的记录!');
                                    }
                         })
 
                      }
                  })
              }}
          ]
             );
            
            // grid.init('subtable', {
            //     url:url.xljkList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 500,
            //     firstLoad: false,
            //     columns: clumn1({
            //         check: false,
            //         clumns: ['djr','djsj','jynr','bz'],
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
