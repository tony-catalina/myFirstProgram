define(function(require){
    require('jquery');
    require('easyui');
    require('layui');
    require('layerui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var toolbar=require('modules/toolbar');
    var utils=require('awd/layui/utils');
    var tableUtils=require('awd/layui/table_utils');
    var common=require('common');
    var urls=require('modules/url');
    main={
        init:function(){
            $('#loginname').val(common.info.user.loginname);
            var rolestr='';
            common.info.roles.map(function(role,index){
                rolestr+=role.name+' ';
            });
            $('#role').val(rolestr);
            $('#glybz').val(common.info.user.glybzString);
            $('#restPassForm input[name="password_now"]').val(common.info.user.loginpass);
            $('#restPassForm input[name="password_new"]').val(common.info.user.loginpass);
            main.bindEvent();
        },
        bindEvent:function () {
            $('#updatePassBtn').on('click',function(){
                if($('#restPassForm input[name="password_now"]').val()==common.info.user.loginpass){
                    $.post(urls.changePassword, {
                        password_now: $('#restPassForm input[name="password_now"]').val(),
                        password_new: $('#restPassForm input[name="password_new"]').val()
                    }, function(data){
                        if(data.success){
                            utils.alert("密码修改成功，请重新登录");
                            window.href.location='/logout';
                        }else{
                            utils.alert(data.info);
                        }
                    });
                }else{
                    utils.alert("原密码不一致,请重新输入");
                    $('#restPassForm input[name="password_now"]').val('');
                }

            });
            $('#resetBtn').on('click',function(){
                $('#restPassForm input[name="password_now"]').val('');
                $('#restPassForm input[name="password_new"]').val('');
            });
        }

    };

    $(main.init);
});