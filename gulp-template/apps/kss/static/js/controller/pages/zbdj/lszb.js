/**
模块名称： 值班登记-历史值班
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    const $ = require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_lszbb.html');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/zbdj');
    var url=require('modules/url');
    var popwin = '';

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
                    {id:'add',name:'新增值日安排',icon:'icon-jiahao',fun:function(){
                        var html = add('form/_lszbb', {});
                        popwin = utils.showWin({
                            title:'新增值日安排',
                            area: ['100%', '80%'],
                            content:html,
                            maxmin:true,
                            success:function(){
                                $.parser.parse('#fm');
                                setTimeout(() => main.initCombobox(),100);
                            },
                            yes:function(){
                                main.Submit();
                            }
                        });
                    }},
                ]
            });

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){alert(1);}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){alert(2);}},
                    {id:'return',name:'页面返回',icon:'icon-gengduo6',fun:function(){alert(3);}}
                ]
            });

            

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name:'apsj',
                        title: '年月',
                        type: 'datebox'
                    }, {
                        name:'week',
                        title: '周',
                        type: 'textbox'
                    }]
                }
                ,
                query:function(param){
                    console.log(param)
                    if(param.apsj==null || param.apsj == '' || param.apsj == undefined){
                        utils.alert("年月不能为空")
                        return false;
                    }
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.zbdjList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['zbrq','sld','sy','ts','xkzb','xkzhb','xkwb','yszb','yszhb','yswb','gj','zkzb','zkzhb','zkwb'],
                    hidden:[]})
            });

        },
        eventBind:function(){
            
        },
        initCombobox:function(){
             $.ajax({
                 url  :url.wqsyList,
                 type :"POST",
                 async: true,
                 data:{"flag": "1"},
                 beforeSend:send=>util.loadProgress($,true),
                 success:res=>{
                    let rowsdata=res.result,rowData  = rowsdata.rows,rows = new Array;
                    for(let i = 0; i < rowData.length; i++){let newXm=rowData[i].xm; rows[i]={xm:newXm }}
                    for(let o = 1 ; o <= 7 ; o++){
                        for (let k = 1; k <=13 ; k++) {	
                           let options=$('#nei_right_table_'+o+'_'+k).combobox('options');
                           options.textField="xm";//必须要和rows字段一样(大小写敏感)
                           options.valueField="xm";
                           $('#nei_right_table_'+o+'_'+k).combobox("loadData",rows);
                       }
                    }
                 },
                 error:err=>utils.alert('民警信息数据加载失败'),
                 complete:com=>util.clearProgress($)
             })
        },
        Submit:function(){
            let SubmitData = main.Searchdata();
            if(SubmitData){
                $.ajax({
                    contentType: 'application/json',
                    url:url.zbdjadd,
                    type:"post",
                    dataType: "json",
                    data:JSON.stringify(SubmitData),
                    beforeSend:send=>util.loadProgress($,true),
                    success:res=>{
                        utils.closeWin(popwin);
                        utils.alert(res.msg);
                    },
                    error:err=> utils.alert(err.msg),
                    complete:com=>util.clearProgress($)
                })
            }
        },
        Searchdata:function(){   //新增值日安排 Form数据搜集。
            var validate=$("#fm").form('validate');
            // if(validate){
            let SubmitForm = new Array();
            for(let o = 1 ; o <= 7 ; o++){
                let objdata = new Object();
                for (let k = 1; k <=13 ; k++) {
                    let data=$('#nei_right_table_'+o+'_'+k).combobox('getValue');
                    switch(k){
                       case 1:  objdata.sld  = data;break;
                       case 2:  objdata.sy   = data;break;
                       case 3:  objdata.ts   = data;break;
                       case 4:  objdata.xkzb = data;break;
                       case 5:  objdata.xkzhb = data;break;
                       case 6:  objdata.xkwb = data ;break;
                       case 7:  objdata.yszb = data;break;
                       case 8:  objdata.yszhb = data;break;
                       case 9:  objdata.yswb = data;break;
                       case 10: objdata.gj = data;break;
                       case 11: objdata.zkzb = data;break;
                       case 12: objdata.zkzhb = data  ;break;
                       case 13: objdata.zkwb = data;break;
                    }
               }
               SubmitForm[o-1] = objdata; 
            }
            return SubmitForm;
        //   }else {
        //     utils.alert('必填项不能为空，请填写完整');
        //   }
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
