define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jstzZdjzyj.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var formTable = require('modules/Form_Table');
    var common = require('common');
    var grid = require('awd/easyui/grid');
    var popwin;
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_jstzZdjzyj', data);
            popwin=utils.showWin({
                title: '中队/警署意见',
                area: ['90%', '85%'],
                content: html,
                maxmin: true,
                success: function () {
                    setTimeout(function () {
                        $.parser.parse('#fm');
                        main.bindEvent(data);
                    }, 0);

                },
                yes: function () {
                    main.submit(url, data, callback);
                }
            });
        },
        bindEvent: function (_jbxx) {
            console.log(_jbxx)
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#blrfm").textbox().textbox('setValue', common.info.user.loginname);
            var dates = (new Date()).Format("yyyy-MM-dd hh:mm:ss");
            $("#blsjfm").datetimebox("setValue", dates);

            // if (data.jstz_zdzyj == '同意') {
            //     $("input[name='zdzpsbz'][value=1]").attr("checked", true);
            // } else if (data.jstz_zdzyj == '不同意') {
            //     $("input[name='zdzpsbz'][value=2]").attr("checked", true);
            // }

            $('input[type=radio][name=zdzyj]').change(function () {
                if (this.value == '1') {
                    $("#ldyj").textbox("setValue", "同意");
                } else if (this.value == '2') {
                    $("#ldyj").textbox("setValue", "不同意");
                }
            });

            formTable.init("Table_ryxx", _jbxx, [
                ['监室号', '姓名', '关押期限', '办案环节', '当前办案单位', '当前办案单位类型'],
                ['jsh', 'xm', 'gyqx', 'bahjString', 'badw', 'dwlxString']
            ]);
        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                console.log("=====" + JSON.stringify(data));
                var postData = util.form2Json('fm');
                var psbz = $('input:radio:checked').val();
                var ldyj = $('#ldyj').val();
                var blr = $("#blrfm").val();
                var blsj = $("#blsjfm").val();

                var ldspmap = [];
                for (var i = 0; i < data.length; i++) {
                    var jqbz = "1";
                    var yjq = data[i].jsh.substring(0, 2)
                    console.log(data[i].ldpsxx.ntjsh);
                    var xjq = data[i].ldpsxx.ntjsh.substring(0, 2)
                    if (yjq != xjq) {
                        jqbz = "2";
                    }
                    console.log(jqbz);
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
                    object.yjsh = data[i].jsh;
                    object.taskid = data[i].taskid;
                    object.ywlcid = data[i].ywlcid;
                    object.xjsh = data[i].ldpsxx.ntjsh;
                    object.sz = jqbz;
                    object.processName = "kss_jstz";
                    object.processNode = "kss_jstz_zdzyj"
                    ldspmap[i] = object;
                }
                var ldps = JSON.stringify(ldspmap);
                util.ajax({
                    url: url,
                    data: {"ldps": ldps},
                    func: function (data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                utils.alert(data.msg);
                            }
                            utils.closeWin(popwin);
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
