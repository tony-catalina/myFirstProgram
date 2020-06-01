/**
模块名称： 领导查询-谈话教育
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var hideshow=require('modules/showHideClumn');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/thjy');
    var url=require('modules/url');

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

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){}}
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name: 'thsj_start',
                        title: '谈话时间',
                        type: 'datebox'
                    }, {
                        name: 'thsj_end',
                        title: '至',
                        type: 'datebox'
                    }],
                    more:[
                        [
                            { name: 'wjxm', title: '民警姓名', type: 'awdCombox', url: url.getMjxx },
                            { name: 'lrjsqk', title: '录入及时情况', type: 'awdCombox', url: url.getDictionary + '?node=JSQK' },
                            { name: 'sfsyzwbd', title: '是否使用指纹比对', type: 'awdCombox',url:url.getDictionary + '?node=SF'  },
                        ]
                    ]
                },
                query:function(param){
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.thjyList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['snbh','xm','jsh','rsxzString','thyyString','fzmj','kssjString','jssjString'],
                    hidden:['createtimeString','sjzlJsbz','bllbz','usefinger','skthString']
                })
            });
            hideshow.init('modules/clumn/thjy',['snbh','xm','jsh','rsxzString','thyyString','fzmj','kssjString','jssjString'],['createtimeString','sjzlJsbz','bllbz','usefinger','skthString']);
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