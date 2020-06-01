/**
 * 岗位交接班页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    const $ = require('jquery');
    require('easyui');
    require('easyuiZh');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var url = require('modules/url');
    var combox = require('awd/easyui/combox');
    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            //布局初始化
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $.ajax({type:"POST",dataType:"json",url:url.findMjJbxx,
            success:res=>$("#jbry_combox").combobox({data:res.result,textField:'xm',valueField:'jh'}),
            error:err=>utils.alert("数据获取失败，请稍后再试")})
            //布局初始化
        },
        eventBind: function () {
            //事件绑定
            $("#save").on('click',()=>{
                const Data = main.handleData();
            	Data.jbgw=$("#jbgw").combobox('getText');
            	Data.jbry=$("#jbry_combox").combobox('getText');
            	if(!Data)return;
                $.ajax({
                	url: url.gwjjbflow,data: Data ,type: 'post',
                    beforeSend:send=>util.loadProgress($, true),
	                success:res=>{
	                	if(res.success){utils.alert(res.msg);$("#fm").form('clear')}
                        else utils.alert(res.msg)},
                    error:err=>utils.alert('保存失败，请稍后再试'),
                    complete:(event,xhr,options)=>util.clearProgress($)
	                })
            })
            $("#close").on('click',()=>{
               $("#fm").window().window('close');
            })
        },
        handleData:()=>{
            const initData = $("#fm").serializeArray(),{log}=console;
            let SubmitData = new Object;
            try{initData.forEach(item=>{SubmitData[item.name]=item.value;
                switch(item.name){
                    case 'jbgw':if(!item.value){utils.alert('交班岗位未填写');throw new Error('表单字段未填写完整')}break;
                    case 'jbry':if(!item.value){utils.alert('交班人员未填写');throw new Error('表单字段未填写完整')}
                                else if(item.value){SubmitData["jh"] = item.value} break;
                    case 'jbsj':if(!item.value){utils.alert('交班时间未填写');throw new Error('表单字段未填写完整')}break;
                    case 'gzjl':if(!item.value){utils.alert('工作记录未填写');throw new Error('表单字段未填写完整')}break;
                }})
                return SubmitData;
            }catch(err){log(err)}
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});