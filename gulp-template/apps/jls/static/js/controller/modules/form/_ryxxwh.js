define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var clumn = require('modules/clumn/jbxx');
    var formtpl = require('services/form/_ryxxwh.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var addDeleteEvent = require('modules/addDeleteColumn');
    var isOpen=false;
    var popwin;
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var addDeleColumn1 = {
        title: ['姓名', '关系', '工作单位', '职业', '住所','联系电话'],
        options: [
            [
                { type: 'easyui-textbox', name:'addxm' },
                { type: 'awdCombox' ,name:'gx'},
                { type: 'easyui-textbox', name:'gzdw' },
                { type: 'awdCombox' ,name:'zy'},
                { type: 'easyui-textbox',name:'zs' },
                { type: 'easyui-textbox',name:'lxdh' }
            ]
        ]
    };
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_ryxxwh',data);
            if(!isOpen){
            popwin = utils.showWin({ 
                title: '人员信息维护',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function() {
                    isOpen = true;
                    var $timeLineTabControl = $('.qiehuan').tabs({ border: false });
                    addDeleteEvent.init($timeLineTabControl, 2, addDeleColumn1);
                    $.parser.parse('#fm');
                    main.bindEvent(data);
                    isOpen = true;
                },
                yes: function() {
                    main.submit(url,data, callback);
                }
            },function(){
                isOpen=false;
            });
        }
        },
        bindEvent: function() {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $(".tab-item").click(function () {
                $(this).addClass("active").css("background", "#0069f6").siblings().removeClass("active").css("background", "#5191f0");
                $(".products .mainCont").eq($(this).index()).show().siblings().hide();
                $.parser.parse('#fm');
                combox.initBySelect('#fm .awdCombox', url.getDictionary);
             
            })
        },
        submit: function(url,data, callback) {
            var shgxArr=[];
            $("input[name='addxm']").each(function () {
                var shgxJtr={};
                shgxJtr.xm=$(this).val();
                shgxJtr.gx=$(this).parent().parent().parent().find("input[name='gx']").val();
                shgxJtr.gzdw=$(this).parent().parent().parent().find("input[name='gzdw']").val();
                shgxJtr.zy=$(this).parent().parent().parent().find("input[name='zy']").val();
                shgxJtr.zs=$(this).parent().parent().parent().find("input[name='zs']").val();
                shgxJtr.lxdh=$(this).parent().parent().parent().find("input[name='lxdh']").val();
                shgxArr.push(shgxJtr);
            });
            var shgxStr=JSON.stringify(shgxArr);
            console.log("====="+shgxStr);
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');

                console.log("222");
                postData.rybh=data.rybh;
                postData.taskid=data.taskid;
                postData.ywlcid=data.ywlcid;

                postData.id=data.id;
                postData.xm=data.xm;
                postData.jsbh=data.jsbh;

                const jbxxData = $('#jbxx').serializeArray(),ajxxData = $('#ajxx').serializeArray();
                let jbxx_Data = new Object,ajxx_Data = new Object,formData = new FormData();
                try{
                    jbxxData.forEach(item=>{jbxx_Data[item.name] = item.value;
                        switch(item.name){
                            case 'xm':if(item.value == '' || item.value == undefined){utils.alert('姓名未填写');throw new Error('表单字段未填写完整');}break;                          
                        }});
                    ajxxData.forEach(item=>{ajxx_Data[item.name] = item.value;
                       switch(item.name){
                            case 'syr':if(item.value == '' || item.value == undefined){utils.alert('送拘人未填写');throw new Error('表单字段未填写完整');}break;                           
                       }});
                       formData.append('jbxxDate', JSON.stringify(jbxx_Data));
                       formData.append('ajxxDate', JSON.stringify(ajxx_Data));
                       formData.append("shgxData",shgxStr);
                       formData.append('leftPhoto', $("#leftpic")[0].files[0]);
                       formData.append('rightPhoto', $("#rightpic")[0].files[0]);
                       formData.append('centerPhoto', $("#centerpic")[0].files[0]);
       
                       util.ajax({
                           url: url,
                           data: formData,
                           processData: false,
                           contentType: false,
                           func: function(data) {
                               if (data.success) {
                                   utils.alert(data.msg);
                                   if (tools.isFunction(callback)) {
                                       callback();
                                       utils.closeWin(popwin);
                                   }
                               } else {
                                   utils.alert(data.msg);
                               }
                           }
                       });


                    }catch(err){}

                
                
            } else {
                utils.alert('表单数据格式不对！');
            }

        }
    };
    return main;
});