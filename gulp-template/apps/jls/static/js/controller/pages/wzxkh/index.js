/**
 模块名称:
 开始时间: 2020-3-7
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');

    //界面控件
    var main={
        init:function(){
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout:function(){
            /**布局初始化**/
            var i=1990;
            var date=new Date();
            var year=date.getFullYear();//获取当前年份
            var dropList;
            for(var i;i<2030;i++){
                if(i==year){
                dropList=dropList+"<option value='"+i+"' selected>"+i+"</option>";
                }else {
                dropList=dropList+"<option value='"+i+"'>"+i+"</option>";
                }
            }
            $('#dateForm select[name=year]').html(dropList);//生成年份下拉列表
            var monthly;
            for(var j=1;j<13;j++){
                monthly=monthly+'<option value="'+j+'">'+j+'</option>'
            }
            $('#dateForm select[name=month]').html(monthly);//生成月份下拉列表

            var wzxkh = '';
            wzxkh += "<tbody style='text-align:center;font-size:16px;'>"+
            "<tr>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'></td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>基本信息</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>家属会见</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>送钱送物</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>律师会见</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>提讯登记</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>出所信息</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>信件管理</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>临时出所</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>安全检查</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>合计</td>"+
            "</tr>"+
            "<tr>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>市拘</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "<td rowspan='3'style='border:1px solid #0069f6;'></td>"+
            "</tr>"+
            "<tr>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'></td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>拘室调整</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>所外治疗</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>岗位交班</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>医生巡诊</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>所内就医</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>重病号</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>械具使用</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>深挖犯罪</td>"+
            "<td  style='border:1px solid #0069f6;padding: 8px;'></td>"+
            "</tr>"+
            "<tr>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>市拘</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "<td style='border:1px solid #0069f6;padding: 8px;'>/</td>"+
            "</tr>"+
            "</tbody>";
            $("#wzxkhTable").append(wzxkh);
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