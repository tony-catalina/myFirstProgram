/**
 * 业务动态 页面入口
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var grid=require('awd/easyui/grid');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var subclumn=require('modules/clumn/_xjzc');
    var url=require('modules/url'); 
    var hideshow=require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree=require('modules/jqtree');//监区树引用
    var ryxxAjqkTpl = require('services/com/ryxxajqk.html'); //引入基本信息案件情况HTML模板
    var ryxxJkqkTpl = require('services/com/ryxxjkqk.html'); //引入基本信息健康情况HTML模板
    var ryxxLshjTpl = require('services/com/ryxxlshj.html'); //引入基本信息历史环节HTML模板
    var ryxxTpl = require('services/com/ryxxjbxx.html');
    var ajqkTpl = require('services/com/ryxxajqk.html');
    var jkqkTpl = require('services/com/ryxxjkqk.html');
    var combox = require('awd/easyui/combox');
    var clumnPjdj = require('modules/clumn/pjdj');//引入判决登记clumn
    var clumnTaf = require('modules/clumn/taf');//同案犯clumn
    var clumnJjfjl = require('modules/clumn/jkfjl');//加减分记录clumn
    var clumnJb = require('modules/clumn/jb');//禁闭表格clumn
    var clumnHjbd = require('modules/clumn/hjbd');//历史环节clumn
    var clumnXqbd = require('modules/clumn/jjx');//刑期变动clumn
    var clumnYqxx = require('modules/clumn/yq');//延期信息clumn
    var clumnJy = require('modules/clumn/jy');//就医clumn
    var clumnLshj = require('modules/clumn/lshj');//律师会见clumn
    var clumnTsdj = require('modules/clumn/tsdj');//提审登记clumn
    var clumnDjjl = require('modules/clumn/jstz');//监室调整clumn

    //ref end
  //界面控件
    var main={
        init:function(){
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout:function(){
            //布局初始化
            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){}}
                ]
            });
            searchform.init('search', {
				query:function(param){
                    param = $.extend({}, {
                        state:'R8',
                        'taskDefinitionKey': '',
                        'processDefinitionKey': ''
                    }, param);
				       grid.query('table',param);
				    },
            });

            jbxxgrid.initjbxx('table',false,250,{state:'R8'},function(rybh) {
                if (!tools.isUndefined(rybh)) {
                    $("#subtable").datagrid('reload', {'rybh': tools.isUndefined(rybh) ? 'norybh' : rybh});
                }
            },[{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                 layer.open({
                     title:"业务信息",
                     area: ['90%', '600px'],
                     content:"<table id='subtable'></table>",
                     btn: ['取消'],
                     success: function () {
                         grid.init('subtable', {
                             url: url.cwcxjbxxList,
                             fit: false,
                             width: '100%',
                             height: '450',
                             queryParams:{ "rybh": data[0].rybh},
                             firstLoad: true,
                             columns: subclumn({
                                 check: false,
                                 clumns: ['szrq', 'szlxString', 'je', 'zy', 'czr'],
                                 hidden: []
                             })
                         });

                     }
                 })
             }}
         ]);

            // grid.init('subtable',{
            //     url: url.cwcxjbxxList,
            //     fit: false,
            //     width: '100%',
            //     height: '300',
            //     firstLoad: false,
            //     columns: subclumn( {check:false,
            //                      clumns:['szrq', 'szlxString', 'je', 'zy', 'czr'],
            //                      hidden:[],
			// 			})
            // });

            jqtree.init('jqtree','table');//有监区树就加，没有不加
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