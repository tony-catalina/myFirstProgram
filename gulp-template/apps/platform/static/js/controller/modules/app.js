define(function(require){
    require('jquery');
    require('easyui');
    require('layui');
    require('layerui');
    require('layer.config');
    var tmpl=require('services/applist.html');
    main={
        init:function(user){
            var html=tmpl('applist',user);
            $('#applist').html(html);
            this.bindEvent();
        },
        bindEvent:function(){

        }
    };
    return main;
});