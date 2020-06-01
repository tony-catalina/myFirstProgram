/**
 * 业务动态 页面入口
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var ywdtPage = require('services/com/ywdt.html');
    var ywdt = require('modules/ywdt');
    var url = require('modules/url');
    //界面控件
    var main={
        init:function(){
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout:function(){
            //布局初始化
            ywdt.init('ywdt', {
                title: "暂予监外执行--业务动态",
                formItems: [{
                    itemTitle: { name: '申请原因', icon: 'icon-taizhang' },
                    itemLists: [
                        { name: "有严重疾病需保外就医", filed: "jb" },
                        { name: "怀孕或正在哺乳自己不满一周岁的婴儿", filed: "ye" },
                        { name: "生活不能自理", filed: "zl" }
                    ]
                }],
                searchItem:{
                    total:[
                        {name:"总人数", filed: "zrs", justfly:'left'}
                    ]
                },
                search:{
                    url: url.jwzxYwdt,
                    parameter:{"dw":'北京市第一看守所'}
                }
            })

        },
        eventBind:function(){
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});