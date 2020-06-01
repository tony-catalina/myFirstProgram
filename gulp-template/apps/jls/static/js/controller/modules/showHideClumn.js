/**
 *  显示隐藏列 组件分装
 */
define(function(require) {
    var utils=require('awd/layui/utils');
    var tools=require('awd/jquery/tools');
    var hideform=require('services/com/field.html');
    var allclumn;
    var main={
        init:function(module,clumns,hidden){
            var clumn=require(module);
            allclumn=clumn({
                check: false,
                clumns: clumns,
                hidden:hidden
            });
        },
        show:function(table){
            var html=hideform('com/field',{fields:allclumn});
            layer.open({
                title:'显示隐藏列',
                area: ['500px', '300px'],
                content:html,
                maxmin:false,
                buttons:[],
                success:function(){
                    $.parser.parse('.field-warp');
                    main.eventBind(table);
                }
            });

        },
        eventBind:function(table){
            $(".field-warp input[type='checkbox']").each(function(){
                $(this).on('click',function(){
                    if(tools.isTrue($(this)[0].checked)){
                        $('#'+table).datagrid('showColumn', $(this).attr('name'));
                    }else{
                        $('#'+table).datagrid('hideColumn', $(this).attr('name'));
                    }
                });
            });
        }
    };
    return main;

});