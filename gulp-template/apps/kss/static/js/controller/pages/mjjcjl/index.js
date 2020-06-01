/**
模块名称： 民警奖惩记录
开始时间： 2020-2-29
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var xz = require('services/form/_mjJcjl.html');
    var hideshow=require('modules/showHideClumn');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var mjjbxxgrid=require('modules/mjjbxxgrid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/mjjbxx');
    var clumn1=require('modules/clumn/mjjcjl');
    var url=require('modules/url');
    var rightmenu=require('modules/rightmenu');
    var mjjcjlFormAdd = require('modules/form/mjjcjlAdd');
    var mjjcjlFormModify = require('modules/form/mjjcjlModify');
    var rybh_="";
    var selectFun=function(rybh){
    if(!rybh==rybh_){
        $("#subtable").datagrid('reload', {
                   
            'jh': rybh,
       
         });
         rybh_=rybh;
    }else{
        rybh_=""
    }
    
}

    //界面控件
    var main={
        init:function(){
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout:function(){
            //布局初始化
            toolbar.init({
                buttons:[
                    {id:'add',name:'新增',icon:'icon-jiahao',fun:function(){
                        var data = grid.getSelected('table')[0];
                        console.log(data);
                        if(data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = {jcsj:currentTime,tbsj:currentTime};
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                mjjcjlFormAdd.init(url.mjjcjlAdd, addData, function() {
                                    grid.reload("subtable")
                                });
                            }else {
                                layer.alert('请选择要新增的人员信息!');
                            }
                    }},
                    // {
                    //     id: 'edit',
                    //     name: '修改',
                    //     icon: 'icon-jiahao',
                    //     fun: function() {
                    //         var data = grid.getSelected('subtable')[0];
                    //         if(data) {
                    //             mjjcjlFormModify.init(url.mjjcjlUpdate, data, function() {
                    //                 grid.reload("subtable");
                    //             });
                    //         }else {
                    //             utils.alert('请选择要修改的记录!');
                    //         }
                    //     }
                    // }
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
                        name: 'jh',
                        title: '警号',
                        type: 'textbox'
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query:function(param){
                    param.flag='1';
                    grid.query('table',param);
                }
            });


            mjjbxxgrid.init('table', false, 250, function (rybh) {
                
            },[{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                layer.open({
                    title:"业务信息",
                    zIndex:1000,
                    area: ['90%', '600px'],
                    content: '<div class="section-container">' +
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
                        grid.init('subtable',{
                        url: url.mjjcjllList,
                        fit: false,
                        width: '100%',
                        queryParams:{ "jh": data[0].jh},
                        height: window.innerHeight - 200,
                        firstLoad: true,
                        columns: clumn1( {check:false,
                            clumns:['jcsj','jcyy','zmr','bz'],
                            hidden:[]})
                    });
                    $("#edit").click(function(){
                        var data = grid.getSelected('subtable')[0];
                        if(data) {
                            mjjcjlFormModify.init(url.mjjcjlUpdate, data, function() {
                                grid.reload("subtable");
                            });
                        }else {
                            utils.alert('请选择要修改的记录!');
                        }
                        })
                    }
                })
             }
         }
         ])


            hideshow.init('modules/clumn/mjjbxx',['jh', 'xm', 'xbString', 'mzString', 'csny', 'jxString','xlString','xlzxsString','bm','gbzwjbString'],['zzmmString','cjgmgzsj','hyzkString','cjgzsj','bmzw','lxdh','sfzh','sjh','lkrq','lkyy','hjszdString','bz']);
            
            // grid.init('subtable',{
            //     url: url.mjjcjllList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumn1( {check:false,
            //         clumns:['jcsj','jcyy','zmr','bz'],
            //         hidden:[]})
            // });
        },
        eventBind:function(){
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});