define(function(require){
    require('jquery');
    require('easyui');
    require('layui');
    require('layerui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var toolbar=require('modules/toolbar');
    var tableUtils=require('awd/layui/table_utils');
    var url= require('modules/url');
    var form =require('modules/whgg');
    var whgg_table;
    var main={
        init:function(){
            var toolbarhtml=toolbar.getToolBar({
                searchname:'title',
                search:function(){
                    var params=$.extend({state:'R2'},toolbar.getParams());
                    whgg_table.reload({where:params});
                    toolbar.bindEvent();
                },
                groups:[
                    {buttons:[
                            {name:'新增',color:'blue',fun:function(){
                                form.add(url.whggSave,{},function(){main.refresh({state:'R2'});});
                            }},
                            {name:'修改',color:'blue',fun:function(){tableUtils.getSelected('table',form.update,main.refresh);}},
                            {name:'删除',color:'blue',fun:function(){tableUtils.getSelected('table',form.del,main.refresh);}}
                        ]}
                ]

            });
            tableUtils.init('table', {
                url: url.whggQuery,
                method: 'post',
                height: 'full-2',
                param: {
                    // blrq_start: tools.getWeekStartAndEnd(0)[0], blrq_end: tools.getWeekStartAndEnd(0)[1], rows: 10
                },
                toolbar:toolbarhtml,
                pagesize: 10,
                clumns: [
                    { type:'checkbox' },
                    { field: 'jslx', width: '23%', title: '监所类型' },
                    { field: 'title', width: '24%', title: '公告标题' },
                    { field: 'content', width: '24%', title: '公告内容' },
                    { field: 'url', title: '插件下载地址', width: '24%' },
                ],id:'testReload',
                parseData: function (res) { //res 即为原始返回的数据
                    return {
                        'code': 0, //解析接口状态
                        'msg': res.msg, //解析提示文本
                        'count': res.total, //解析数据长度
                        'data': res.data //解析数据列表
                    };
                }
            },function(data){
                whgg_table=data;
            });
        },
        refresh:function(param){
            var params=$.extend(param,toolbar.getParams());
            whgg_table.reload({where:params});
            toolbar.bindEvent();
        }
    };

    $(main.init);
});