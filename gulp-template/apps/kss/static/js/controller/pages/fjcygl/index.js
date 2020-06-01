/**
模块名称： 分级处遇管理
开始时间： 2020-2-29
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var utils=require('awd/layui/utils');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/jbxx');
    var clumn1=require('modules/clumn/cypj');
    var url=require('modules/url');
    var formtpl=require('services/form/_fjcyglXzpj.html');
    var hideshow=require('modules/showHideClumn');
    var fjcyglForm=require('modules/form/fjcygl');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
    //界面控件
    var main={
        init:function(){
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout:function(){
            /**布局初始化**/
            toolbar.init({
                buttons:[
                    {
                        id: 'add',
                        name: '新增',
                        icon: 'icon-jiahao',
                        ryyw:true,
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                var dates=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
                                data.cypjrq = dates;
                                fjcyglForm.init(url.cypjAdd, data, function() {
                                    grid.reload('table');
                                });
                            }else {
                                utils.alert('请选择人员');
                            }
                        }
                    },
                    {id:'print',name:'打印',icon:'icon-jiahao'},
                ]
            });

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){}}
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree', url:url.getJqCombotree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query:function(param){
                    grid.query('table',param);
                }
            });


            jbxxgrid.initjbxx('table',false,200, {},function(rybh) {
                $("#subtable").datagrid('reload', {    
                    'state$eq':'R2',
                     "rybh_eq": rybh,
                  });
             },[{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                  layer.open({
                      title:"业务信息",
                      area: ['90%', '600px'],
                      content:"<table id='subtable'></table>",
                      btn: ['取消'],
                      success: function () {
                          grid.init('subtable', {
                              url: url.cypjList,
                              fit: false,
                              width: '100%',
                              height: '450',
                              queryParams:{ "rybh_eq": data[0].rybh,"state$eq":'R2'},
                              firstLoad: true,
                              columns: clumn1({
                                  check: false,
                                  clumns: ['pjrq','khksrq','kpsx','ljkhzf','ljkhpjf','zhpdyj'],
                                  hidden: []
                              })
                          });

                      }
                  })
              }}
          ]);

            jqtree.init('jqtree','table');

            // grid.init('subtable',{
            //     url: url.cypjList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 500,
            //     firstLoad: false,
            //     columns: clumn1( {check:false,
            //         clumns:['pjrq','khksrq','kpsx','ljkhzf','ljkhpjf','zhpdyj'],
            //         hidden:[]})
            // });
            /**布局初始化**/
        },
        eventBind:function(){
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
