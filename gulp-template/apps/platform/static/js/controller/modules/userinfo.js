define(function(require){
    require('jquery');
    require('easyui');
    require('layui');
    require('layerui');
    require('layer.config');
    var tmpl=require('services/userinfo.html');
    main={
        init:function(user){
            console.log(user);
            var html=tmpl('userinfo',user);
            $('#userinfo').html(html);
        },
        resetPass:function(){

        }
    };
    return main;
});