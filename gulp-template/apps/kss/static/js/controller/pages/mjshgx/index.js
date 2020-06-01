/**
模块名称： 民警社会关系
开始时间： 2020-2-29
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var xz = require('services/form/_mjShgx.html');
    var hideshow=require('modules/showHideClumn');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/mjjbxx');
    var clumn1=require('modules/clumn/mjshgx');
    var url=require('modules/url');
    var mjjbxxgrid=require('modules/mjjbxxgrid');
    var mjshgxFormAdd = require('modules/form/mjshgxAdd');
    var mjshgxFormModify = require('modules/form/mjshgxModify');



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
                            //var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");

                            var data = grid.getSelected('table')[0];
                            console.log(data);
                            if(data) {
                                mjshgxFormAdd.init(url.mjshgxAdd, data, function() {
                                    grid.reload('table')
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
                    //         var rydata=grid.getSelected('table')[0];
                    //         var data = grid.getSelected('subtable')[0];
                    //         console.log("=========11::"+JSON.stringify(data) );
                    //         data.xm=rydata.xm;
                    //         data.xbString=rydata.xbString;
                    //         data.mzString=rydata.mzString;
                    //         data.csny=rydata.csny;
                    //         data.jxString=rydata.jxString;
                    //         data.xlString=rydata.xlString;
                    //         data.zzmmString=rydata.zzmmString;
                    //         if(data) {
                    //             mjshgxFormModify.init(url.mjshgxUpdate, data, function() {
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
                        url: url.mjshgxList,
                        fit: false,
                        width: '100%',
                        queryParams:{ "jh": data[0].jh},
                        height: window.innerHeight - 200,
                        firstLoad: true,
                        columns: clumn1( {check:false,
                            clumns:['gxString','gxrxm','gxrgzdw','gxrzzmmString','gxrlxdh'],
                            hidden:[]})
                    });
                    $("#edit").click(function(){
                        var rydata=grid.getSelected('table')[0];
                        var data = grid.getSelected('subtable')[0];
                            console.log("=========11::"+JSON.stringify(data) );
                            
                            if(data) {
                                data.xm=rydata.xm;
                                data.xbString=rydata.xbString;
                                data.mzString=rydata.mzString;
                                data.csny=rydata.csny;
                                data.jxString=rydata.jxString;
                                data.xlString=rydata.xlString;
                                data.zzmmString=rydata.zzmmString;
                                mjshgxFormModify.init(url.mjshgxUpdate, data, function() {
                                    grid.reload('subtable');
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

            // grid.init('table',{
            //     url: url.mjglList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumn( {check:false,
            //         clumns: ['jh', 'xm', 'xbString', 'mzString', 'csny', 'jxString','xlString','xlzxsString','bm','gbzwjbString'],
            //         hidden: ['zzmmString','cjgmgzsj','hyzkString','cjgzsj','bmzw','lxdh','sfzh','sjh','lkrq','lkyy','hjszdString','bz']}),
            //     //     onClickRow: function(rowIndex, rowData){
            //     //     $('#table').datagrid('clearSelections');
            //     //     if (!tools.isUndefined($('#table').parent().find('input[name="selectRadio"]')[rowIndex])) {
            //     //         $('#table').parent().find('input[name="selectRadio"]')[rowIndex].checked = true;
            //     //     }
            //     //     $('#table').datagrid('selectRow', rowIndex);
            //     //     var jh = rowData.jh;
            //     //     grid.query('subtable',{jh:jh});
            //     // }
            //     onSelect: function (rowIndex, rowData) {
 
                    
            //         var jh = rowData.jh;
            //         console.log(jh);
            //         $("#subtable").datagrid('reload', {
            //             'jh': jh,
            //         });
                    
                 
            //      }
            // });
            hideshow.init('modules/clumn/mjjbxx',['jh', 'xm', 'xbString', 'mzString', 'csny', 'jxString','xlString','xlzxsString','bm','gbzwjbString'],['zzmmString','cjgmgzsj','hyzkString','cjgzsj','bmzw','lxdh','sfzh','sjh','lkrq','lkyy','hjszdString','bz']);
            // grid.init('subtable',{
            //     url: url.mjshgxList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumn1( {check:false,
            //         clumns:['gxString','gxrxm','gxrgzdw','gxrzzmmString','gxrlxdh'],
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