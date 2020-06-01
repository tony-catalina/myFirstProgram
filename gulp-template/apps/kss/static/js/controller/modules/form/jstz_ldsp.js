define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jstzLdsp.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var formTable = require('modules/Form_Table');
    var common=require('common');
    var isOpen=false;
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_jstzLdsp', data);
            if(!isOpen){
                utils.showWin({
                    title: '监室调整--领导审批',
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
                        isOpen = false;
                    });
            }
        },
        bindEvent: function(_jbxx) {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            formTable.init('Table_ryxx', _jbxx,[
                ['监室号', '姓名', '关押期限', '办案环节', '当前办案单位', '当前办案单位类型'],
                ['jsh', 'xm', 'gyqx', 'bahjString', 'badw', 'dwlxString']
            ]);
            $("#lsxm").textbox().textbox('setValue',common.info.user.loginname); 
            var dates=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
            $("#ldpssj").datetimebox().datetimebox("setValue",dates);
            $('input[type=radio][name=ldyj]').change(function () {
                if (this.value == '1') {
                    $("#ldyjfm").textbox("setValue", "同意");
                } else if (this.value == '2') {
                    $("#ldyjfm").textbox("setValue", "不同意");
                }
            });
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');

                var psbz = $('input:radio:checked').val();
                var ldyj = $('#ldyjfm').val();
                var blr = $('#lsxm').val();
                var blsj = $('#ldpssj').val();
                var ldspmap=[];
                for(var i = 0;i<data.length;i++){
                    var object = {};
                    object.jsbh = data[i].jsbh;
                    object.rybh = data[i].rybh;
                    object.sqr = data[i].ldpsxx.tbr;
                    object.sqsj = data[i].ldpsxx.blrq;
                    object.psbz = psbz;
                    object.ldyj = ldyj;
                    object.blr = blr;
                    object.sqyy = data[i].ldpsxx.yyString;
                    object.blsj = blsj;
                    object.yjsh =data[i].jsh;
                    object.taskid =data[i].taskid;
                    object.ywlcid =data[i].ywlcid;
                    object.xjsh =data[i].ldpsxx.ntjsh;
                    object.processName = 'kss_jstz';
                    object.processNode = 'kss_jstz_ldsp';
                    ldspmap[i] = object;
                }
                var ldps=JSON.stringify(ldspmap);

                util.ajax({
                    url: url,
                    data: {'ldps':ldps},
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