/**
模块名称： 公安部台账
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var common=require('common');



    //界面控件
    var main={
        init:function(){
            /**界面初始化**/
            $.parser.parse("#fm");
            main.layout();
            main.eventBind();

            /**界面初始化**/
        },
        layout:function(){
            /**布局初始化**/
            $("#print").click(function(){
                var startTime = $("#qsny").datebox('getValue');
                var endTime = $("#zzny").datebox('getValue');
                var reportValue = $('input[name="sbbb"]:checked').val();
                if(!reportValue) {
                    utils.alert('请先选择报表');
                }else if(startTime == '' && endTime == '') {
                    utils.alert('时间未填写完整！');
                }else{
                    //window.open(common.info.reporturl+'?labName='+reportValue+'&start_time%3d='+startTime+'&%26end_time%3d='+endTime+'&%26jsbh%3d='+ common.info.user.jsbh);
					window.open(common.info.reporturl+'?displaytoolbar=true&label='+reportValue+'&name='+reportValue+'&parameters=start_time%3d'+startTime+'%26end_time%3d'+endTime+'%26jsbh%3d'+ common.info.user.jsbh);
				}
            })
            /**布局初始化**/
        },
        eventBind:function(){
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});