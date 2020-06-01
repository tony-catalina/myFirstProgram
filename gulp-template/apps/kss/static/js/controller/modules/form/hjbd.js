define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_hjbdbahj.html');
    var combox = require('awd/easyui/combox');
    var combogrid = require('awd/easyui/combogrid');
    var url = require('modules/url');
    var grid = require('awd/easyui/grid');
    var formTable = require('modules/Form_Table');
    var common=require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,callback) {
            console.log(JSON.stringify(data))
            var html = formtpl('form/_hjbdbahj',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '环节变动登记',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        setTimeout(function (){
                            $.parser.parse('#fm');
                            main.bindEvent(data);
                        }, 0);
                    },
                    yes: function() {
                        main.submit(url,data, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function(data) {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            combogrid.initPageClass('.awdCombogrid', url.getDictionaryPage);
            formTable.init("Table_ryxx", data, [
                                ['监室号', '姓名', '关押期限', '办案环节', '当前办案单位', '当前办案单位类型'],
                                ['jsh', 'xm', 'gyqx', 'bahjString', 'badw', 'dwlxString']
                            ]);

            $("#czr").textbox().textbox('setValue',common.info.user.loginname);
            $("#czsj").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));
            $("#bdrq").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));


        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var arr=[];
                for (var i=0;i<data.length;i++){//提取需要的人员基本信息放入json对象
                    var arrJson = {xm:data[i].xm,
                        xb:data[i].xb,bm:data[i].bm,
                        rybh:data[i].rybh,snbh:data[i].snbh,
                        jsh:data[i].jsh,jsbh:data[i].jsbh,
                        ywlcid:data[i].ywlcid,taskid:data[i].taskid,
                        gyqx:data[i].gyqx,bardh:data[i].bardh,
                        bar:data[i].bar,badw:data[i].badw,
                        dwlx:data[i].dwlx,bahj:data[i].bahj,
                    };
                    arr.push(arrJson);//将人员基本信息的json对象放入数组
                }
                var rybhs = "";
                if(data.length > 0) {
                    for (var j = 0; j < data.length; j++) {
                        if (j == 1 || j == data.length - 1) {
                            rybhs = rybhs + data[j].rybh;
                        } else {
                            rybhs = rybhs + data[j].rybh + ",";
                        }
                    }
                }
                var badwname = $("#badwfm").combobox('getValue');
                var arrStr= JSON.stringify(arr);
                var postData = util.form2Json('fm');
                postData.badw=badwname;
                var dataStr=JSON.stringify(postData);
                util.ajax({
                    url: url,
                    data: {data_Jbxx:arrStr,data_ywxx:dataStr,rybhs:rybhs},
                    func: function(data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                               
                            }
                            utils.closeWin(popwin);
                            grid.reload('table');
                        } else {
                            utils.alert(data.msg);
                        }
                    }
                });
            } else {
                utils.alert('表单数据格式不对！');
            }

        }
    };
    return main;
});
