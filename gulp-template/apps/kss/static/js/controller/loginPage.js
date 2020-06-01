$(function () {
    handleInitFn();
  });

class UserConfig {
  constructor(user,password){
    this.user = user;
    this.password = password;
  }
}

  var handleInitFn=function(){
         $("#Login_Sign").on('click',function(){
           const User = $("input[name='login_user']").val(),Password = $("input[name='login_password']").val();
           const UserSetting = new UserConfig(User,Password);
           console.log(UserSetting);
           $.ajax({url:"",type:"POST",data:{"UserName":UserSetting.user,"Password":UserSetting.password},
                   beforeSend:()=>layer.load(0),
                   success:res=>{
                    if(res.status == 200)window.location.href = './index.html' 
                    else layer.alert('用户名或密码不正确',{icon:2,btnAlign:'c',closeBtn:0},index=>{
                      $("input[name='login_password']").val("");
                      layer.close(index);
                    })
                    },
                   error:err=>{
                     layer.alert('登录失败，请检查网络设置',{icon:2,btnAlign:'c',closeBtn:0},index=>layer.close(index))
                   },
                  complete:()=>layer.closeAll('loading')   
           })
         });
         $("#Login_Kpi").on('click',()=>window.location.href = './index.html')
  };
  