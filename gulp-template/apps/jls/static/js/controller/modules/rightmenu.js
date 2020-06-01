define(function(require) {
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var grid=require('awd/easyui/grid');
    var tempalte=require('services/com/rightmenus.html');
    main={
        init:function(id,option){
            console.log(option,888)
            var menu=$('#contextMenu').html();
            if(tools.isUndefined(menu)){
                var menuhtml=tempalte('com/rightmenus',option);
                $("#"+id).append(menuhtml);
                $.parser.parse("#"+id);
                $('#contextMenu').menu({
                    onClick:function(item){
                        option.menus.forEach(function(v,i,arr){
                            if(tools.isFunction(arr[i].fun)&&item.id==arr[i].id){
                                arr[i].fun(grid.getSelected(id));
                            }
                        });

                    }
                });
            }
        }
    };
    return main;

}); 