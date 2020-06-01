window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
    require('layer.config');
    var util= require('awd/easyui/util');
    var utils=require('awd/layui/utils');
    var url = require('modules/url');
    var combox = require('awd/easyui/combox');
    //界面控件
    var main={
        init:function(){
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () {
            //布局初始化
            $.ajax({type:"POST",dataType:"json",url:url.findMjJbxx,
            success:res=>$("#jbry").combobox({data:res.result,textField:'xm',valueField:'jh'}),
            error:err=>utils.alert("数据获取失败，请稍后再试")})
            //布局初始化
        },
        eventBind:function(){
            /**事件绑定**/
            $.parser.parse("#fm")
            $("#save").click(function(){
                var postData = util.form2Json('fm');
                    postData.jbgw=$("#jbgw").combobox('getText');
                    postData.jbry=$("#jbry").combobox('getText');
                    console.log(postData);
                $.ajax({
                    url: url.gwjjbflow,
                    data: postData,
                    type:'post',
                    beforeSend:send=>util.loadProgress($, true),
                    success:function(data){
                        if (data.success) {
                            $("#fm").form("clear");
                    utils.alert(data.msg);

                        }else{
                            utils.alert(data.msg);
                        }
                        
                    },
                    complete:(event,xhr,options)=>util.clearProgress($)
                })  　　　　
            });
            // $("#close").click(function(){

            // })
            /**事件绑定**/
        }
    };

    $(main.init);

});
