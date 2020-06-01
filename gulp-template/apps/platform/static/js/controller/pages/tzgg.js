define(function(require){
    require('jquery');
    require('easyui');
    require('layui');
    require('layerui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var toolbar=require('modules/toolbar');
    var tableUtils=require('awd/layui/table_utils');
    var form =require('modules/tzgg');
    var tzgg_table;
    var url = require('modules/url');
    var main={
        init:function(){
            var toolbarhtml=toolbar.getToolBar({
                searchname:'title',
                search:function(){
                    var params=$.extend({state:'R2'},toolbar.getParams());
                    tzgg_table.reload({where:params});
                    toolbar.bindEvent();
                },
                groups:[
                    {buttons:[
                            {name:'新增',color:'blue',fun:function(){
                                form.add(url.tzggSave,{},function(){main.refresh({state:'R2'});});
                            }},
                            {name:'修改',color:'blue',fun:function(){tableUtils.getSelected('table',form.update,main.refresh);}},
                            {name:'删除',color:'blue',fun:function(){tableUtils.getSelected('table',form.del,main.refresh);}}
                        ]}
                ]

            });
            tableUtils.init('table', {
                url: url.tzggQuery,
                method: 'post',
                height: 'full-2',
                param: {},
                toolbar:toolbarhtml,
                pagesize: 10,
                clumns: [
                    {type:'checkbox'},
                    { field: 'jslxString', width: '16%', title: '监所类型' },
                    { field: 'title', width: '28%', title: '公告标题' },
                    { field: 'content', width: '28%', title: '公告内容' },
                    { field: 'fj', width: '28%', title: '附件' },
                ],id:'testReload',
                parseData: function (res) { //res 即为原始返回的数据
                    return {
                        "code": 0, //解析接口状态
                        "msg": res.info, //解析提示文本
                        "count": res.data.lenght, //解析数据长度
                        "data": res.data //解析数据列表
                    };
                },
            },function(data){
                tzgg_table=data;
            });
        },
        refresh:function(param){
            var params=$.extend(param,toolbar.getParams());
            tzgg_table.reload({where:params});
            toolbar.bindEvent();
        }
    };

    $(main.init);
});