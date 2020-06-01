define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jstzTzqr.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var common=require('common');
    var formTable = require('modules/Form_Table');
    var isOpen=false;
    var popwin;
    var main = {
        init: function(url,data,rows,callback) {
            var html = formtpl('form/_jstzTzqr', data);
            if(!isOpen){
                utils.showWin({
                    title: '监室调整--监室调整确认',
                    area: ['90%', '85%'],
                    content: html,
                    maxmin: true,
                    success: function () {
                        isOpen = true;
                        setTimeout(function (){
                            $.parser.parse('#fm');
                            main.bindEvent(data);
                        }, 0);

                    },
                    yes: function () {
                        main.submit(url,data, callback);
                    }
                },function(){
                    isOpen=true;
                });
            }
        },
        bindEvent: function(_jbxx) {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            var ddd=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
            $("#tzsjfm").datetimebox().datetimebox("setValue",ddd);
            $("#djrqfm").datetimebox().datetimebox("setValue",ddd);
            $("#gjxmfm").textbox().textbox('setValue',common.info.user.loginname);
            formTable.init("Table_ryxx", _jbxx, [
                ['监室号', '姓名', '办案环节', '涉嫌罪名', '调监理由','拟调监室号','中队签名','中队签名日期','所长批示日期'],
                ['jsh', 'xm', 'bahjString', 'sxzm', 'ldpsxx.yyString','ldpsxx.ntjsh','ldpsxx.zdxm','ldpsxx.zdpssj','ldpsxx.ldpssj']
            ]);

        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                var jsqrmap=[];
                for(var i = 0;i<data.length;i++){
                    var object = {};
                    var jqbz = "1";
                    var yjq = data[i].jsh.substring(0, 2)
                    var xjq = data[i].ldpsxx.ntjsh.substring(0, 2)
                    if(yjq != xjq){
                        jqbz = "2";
                    }
                    object.bz=$("#bzfm").val();
                    object.tzsj=$("#tzsjfm").val();
                    object.gjxm=$("#gjxmfm").val();
                    object.djrq=$("#djrqfm").val();
                    object.yjsh = data[i].jsh;
                    object.xjsh = data[i].ldpsxx.ntjsh
                    object.ywlcid=data[i].ywlcid;
                    object.rybh = data[i].rybh;
                    object.taskid =data[i].taskid;
                    object.id = data[i].ldpsxx.id;
                    object.processName = "kss_jstz";
                    object.processNode = "kss_jstz_tzqr";
                    object.lyString = data[i].ldpsxx.yyString;
                    object.ly = data[i].ldpsxx.yy;
                    jsqrmap.push(object);
                }
                var jstz=JSON.stringify(jsqrmap);

                util.ajax({
                    url: url,
                    data: {"jstz":jstz},
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
            } else {
                utils.alert('表单数据格式不对！');
            }

        }
    };
    return main;
});