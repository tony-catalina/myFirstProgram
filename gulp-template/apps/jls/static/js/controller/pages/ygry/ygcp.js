/**
模块名称： 安全检查
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var formtpl=require('services/form/_ygryYgcp.html');

    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/jbxx');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var form=require('modules/form/_ygryYgcp');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var hdpzFormAdd = require('modules/form/_ygryYgcp');
    var jbxxgrid=require('modules/jbxxgrid');
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
                    {id:'add',name:'办理登记',icon:'icon-jiahao',fun:function(){
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            hdpzFormAdd.init(url.ygryaddflow, data, function() {
                                grid.reload('table');
                            });
                        } else {
                            utils.alert("请选择人员");
                        }
                    }}
                ]
            });
            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.initLc('search',{
                // primary: [{
                //     name:'xm',
                //     title: '姓名',
                //     type: 'textbox'
                // }, {
                //     name:'jsh',
                //     title: '拘室号',
                //     type: 'awdCombotree', url:url.jsComboxTree
                // }],
                // more: [
                //     [
                //         {  name:'bm',title: '别名', type: 'textbox' },
                       
                //         { name:'rsrqStart', title: '线索登记日期', type: 'datebox' },
                //         { name:'rsrqEnd', title: '至', type: 'datebox' }
                //     ],[
                //         { name:'ay', title: '案别',type: 'awdCombox' ,url:url.getDictionary +'?node=JLSAJLB' },
                //         { name:'xb', title: '性别',type: 'awdCombox' ,url:url.getDictionary +'?node=XB' }
                //     ]
                // ],
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R8'
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initjbxx('table',false,200, {},function(rybh) {
            });
            // grid.init('table',{
            //     url: url.jbxxList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumn( {check:false,
            //                      clumns:['xm','jsh','bm','xb','rsrq','ay','badw','gyqx','gyts','jsbh','rybh','tbr','tbrq','wbrybh','gcbh','ywlcid','taskid','snbh','zjlx','zjh','gj','whcd','sf','tssf','mz','zzmm','csrq','hyzk',
            //                          'hjd','hjdxz','jg','xzd','xzdxz','gzdw','zy','jljdjg','bar','rsxz','syr','sypz','barjh','bardh','czdh', 'jlrq','sdnjccjg','sdnjdw',
            //                          'sdnjcjsj','sdnjjcr','jyaq','dah','hzflwsh','pzrybh','pzajbh','pzflwsh','czzt','jsly','byjswsh','jsrq','zxf','aqdj','rygllb','lscsyy','lscssj',
            //                          'lscshssj','crjbj','rkbhgbj','rkbhgyy','lrsfjs','cssj','csyy','csqx','jj','jb','zdzy','ygry','yfh','cwh','fwh','rsldsp','rsldspnr','rsldqm',
            //                          'rsldqmsj','state','scbz','dwlx','wfdd','sydw','creator','createtime','updator','updatetime','bhlx','csd','ky','lxdh','hjdszpcs','tmtbtz',
            //                          'dwdz','bjlrjl','bjlrjscfqk','wfsj','fxdj'],
            //                      hidden:['jsbh','rybh','tbr','tbrq','wbrybh','gcbh','ywlcid','taskid','snbh','zjlx','zjh','gj','whcd','sf','tssf','mz','zzmm','csrq','hyzk',
            //                      'hjd','hjdxz','jg','xzd','xzdxz','gzdw','zy','jljdjg','bar','rsxz','syr','sypz','barjh','bardh','czdh', 'jlrq','sdnjccjg','sdnjdw',
            //                      'sdnjcjsj','sdnjjcr','jyaq','dah','hzflwsh','pzrybh','pzajbh','pzflwsh','czzt','jsly','byjswsh','jsrq','zxf','aqdj','rygllb','lscsyy','lscssj',
            //                      'lscshssj','crjbj','rkbhgbj','rkbhgyy','lrsfjs','cssj','csyy','csqx','jj','jb','zdzy','ygry','yfh','cwh','fwh','rsldsp','rsldspnr','rsldqm',
            //                      'rsldqmsj','state','scbz','dwlx','wfdd','sydw','creator','createtime','updator','updatetime','bhlx','csd','ky','lxdh','hjdszpcs','tmtbtz',
            //                      'dwdz','bjlrjl','bjlrjscfqk','wfsj','fxdj']})
            // });
            // hideshow.init('modules/clumn/jbxx',
            //     ['xm','jsh','bm','xb','rsrq','ay','badw','gyqx','gyts','jsbh','rybh','tbr','tbrq','wbrybh','gcbh','ywlcid','taskid','snbh','zjlx','zjh','gj','whcd','sf','tssf','mz','zzmm','csrq','hyzk',
            //         'hjd','hjdxz','jg','xzd','xzdxz','gzdw','zy','jljdjg','bar','rsxz','syr','sypz','barjh','bardh','czdh', 'jlrq','sdnjccjg','sdnjdw',
            //         'sdnjcjsj','sdnjjcr','jyaq','dah','hzflwsh','pzrybh','pzajbh','pzflwsh','czzt','jsly','byjswsh','jsrq','zxf','aqdj','rygllb','lscsyy','lscssj',
            //         'lscshssj','crjbj','rkbhgbj','rkbhgyy','lrsfjs','cssj','csyy','csqx','jj','jb','zdzy','ygry','yfh','cwh','fwh','rsldsp','rsldspnr','rsldqm',
            //         'rsldqmsj','state','scbz','dwlx','wfdd','sydw','creator','createtime','updator','updatetime','bhlx','csd','ky','lxdh','hjdszpcs','tmtbtz',
            //         'dwdz','bjlrjl','bjlrjscfqk','wfsj','fxdj'],
            //     ['jsbh','rybh','tbr','tbrq','wbrybh','gcbh','ywlcid','taskid','snbh','zjlx','zjh','gj','whcd','sf','tssf','mz','zzmm','csrq','hyzk',
            // 'hjd','hjdxz','jg','xzd','xzdxz','gzdw','zy','jljdjg','bar','rsxz','syr','sypz','barjh','bardh','czdh', 'jlrq','sdnjccjg','sdnjdw',
            // 'sdnjcjsj','sdnjjcr','jyaq','dah','hzflwsh','pzrybh','pzajbh','pzflwsh','czzt','jsly','byjswsh','jsrq','zxf','aqdj','rygllb','lscsyy','lscssj',
            // 'lscshssj','crjbj','rkbhgbj','rkbhgyy','lrsfjs','cssj','csyy','csqx','jj','jb','zdzy','ygry','yfh','cwh','fwh','rsldsp','rsldspnr','rsldqm',
            // 'rsldqmsj','state','scbz','dwlx','wfdd','sydw','creator','createtime','updator','updatetime','bhlx','csd','ky','lxdh','hjdszpcs','tmtbtz',
            // 'dwdz','bjlrjl','bjlrjscfqk','wfsj','fxdj']);
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