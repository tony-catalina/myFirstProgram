define(function(require){
    require('jquery');
    require('easyui');
    require('layui');
    require('layerui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var toolbar=require('modules/toolbar');
    var tableUtils=require('awd/layui/table_utils');
    var form=require('modules/form/jqgl');
    var urls=require('modules/url');
    var tree = require('awd/layui/tree');
    var jq_table;
    main={
        init:function(){
            var toolbarhtml=toolbar.getToolBar({
                search:function(){
                    var params=$.extend({state:'R2'},toolbar.getParams());
                    jq_table.reload({where:params});
                    toolbar.bindEvent();
                },
                groups:[
                    {buttons:[
                            {name:'新增',color:'blue',fun:function(){
                                form.add(urls.saveOrUpdateJq,{},function () {
                                    main.refresh({state:'R2'});
                                });
                            }},
                            {name:'修改',color:'blue',fun:function(){tableUtils.getSelected('table',form.update,main.refresh);}},
                            {name:'删除',color:'blue',fun:function(){tableUtils.getSelected('table',form.del,main.refresh);}}
                    ]},
                    
                    ]
            });
            tableUtils.init('table', {
                url: urls.jqGetPage,
                method: 'post',
                height: 'full-50',
                param: { state:'R2'},
                toolbar:toolbarhtml,
                pagesize: 10,
                clumns: [
                    {type:'checkbox'},
                    { field: 'jqh', width: '30%', title: '监区号' },
                    { field: 'jqmc', width: '30%', title: '监区名称' },
                    { field: 'jsnum', width: '30%', title: '监室数' },
                ],
                parseData:function(res){ //res 即为原始返回的数据
                    return {
                        "code": res.code, //解析接口状态
                        "msg": res.msg, //解析提示文本
                        "count": res.total, //解析数据长度
                        "data": res.data //解析数据列表
                    };
                }
            },function(data){
                jq_table=data;
            });


        },
        refresh:function(param){
            var params=$.extend(param,toolbar.getParams());
            jq_table.reload({where:params});
            toolbar.bindEvent();
        }
    };

    $(main.init);
});