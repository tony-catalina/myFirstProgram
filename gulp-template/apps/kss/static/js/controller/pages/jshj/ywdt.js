/**
 * 业务动态 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var ywdtPage = require('services/com/ywdtColumn.html');
    var url = require('modules/url');

    //界面控件
    var main = {
        init: function() {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function() {
            var options = {
                    title: "临时出所--业务动态",
                    formItems:{
                        itemCloumnTitle:['律师会见室', '姓名', '开始时间'],
                        itemCloumnDatas:[
                            {hjsString:'会见室1', hsj:1, xm:'(未使用)', hjsjString:"未使用"},
                            {hjsString:'会见室2', hsj:2, xm:'(未使用)', hjsjString:"未使用"},
                            {hjsString:'会见室3', hsj:3, xm:'(未使用)', hjsjString:"未使用"},
                            {hjsString:'会见室4', hsj:4, xm:'(未使用)', hjsjString:"未使用"}
                        ]
                    }
            }
            
            $.ajax({
                url:url.jshjHjs,
                type:'POST',
                data:{},
                success:function(res) {
                    var result = res.result.data;
                    options.formItems.itemCloumnDatas.forEach(element => {
                        for (var index = 0; index < result.length; index++) {
                            console.log(element.hsj);
                            console.log(result[index].hjs);


                            if(element.hsj == result[index].hjs) {
                                
                                Object.assign(element, result[index]);
                            }
                        }
                    });
                    console.log("dddd"+JSON.stringify(options));
                    var ywdtHtml = ywdtPage('com/ywdtColumn', options);
                    document.querySelector('.ywdt').innerHTML = ywdtHtml;
                    $.parser.parse(".ywdt");
                }
            })

                //布局初始化
         
            

        },
        eventBind: function() {
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});