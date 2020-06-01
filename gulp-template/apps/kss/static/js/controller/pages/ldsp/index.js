/**
模块名称： 领导审批
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var url=require('modules/url');

    function ldsp_title(arr, arrs, index, jsonObj, url, titles) {
        var task;
        var indexs;
        var processDefinitionKey;
        var taskDefinitionKey;
        var indexes;
        if (arrs.length != 0) {
            indexes = 0
            for (var i = 0; i < arr.length; i++) {
                var gj = arr[i].toUpperCase();
                for (var j = 0; j < arrs.length; j++) {
                    if (arrs[j][gj] != 0 && arrs[j][gj] != undefined) {
                        indexes++;
                    }
                }
            }
            if (indexes > 0) {
                $('#maincontent').append(
                    '<div class="titlegw">' + titles +
                    '</div>' +
                    '<div id="ldsp_' + index + '" class="gwdbdiv"></div>'
                );
                for (var i = 0; i < arr.length; i++) {
                    var gj = arr[i].toUpperCase();
                    for (var j = 0; j < arrs.length; j++) {
                        if (arrs[j][gj] != 0 && arrs[j][gj] != undefined) {
                            task = arr[i];
                            indexs = task.lastIndexOf('_');
                            processDefinitionKey = task.substring(0, indexs);
                            taskDefinitionKey = task;
                            console.log('processDefinitionKey')
                            console.log(processDefinitionKey)
                            console.log('taskDefinitionKey')
                            console.log(taskDefinitionKey)
                            if (taskDefinitionKey == "kss_wmjscx_ldsp" || taskDefinitionKey == "kss_wmjssz_ldsp") {
                                // var url = "/kss_ldsp/wmjs_ldsp.html?processDefinitionKey=" + processDefinitionKey + "&taskDefinitionKey=" + taskDefinitionKey;

                                $("#ldsp_" + index).append(
                                    '<div class="bqnr">' +
                                    '<div class="tunr">' +
                                    '<img src="/apps/kss/static/images/ldsp.png" alt="">' +
                                    '</div>' +
                                    '<div class="mainnr">' +
                                    '<a href="' + url[gj] + '">' +
                                    '<p class="mainnrtitle">' + jsonObj[gj] +
                                    '</p>' +
                                    '<p>暂无说明</p>' +
                                    '</a>' +
                                    '</div>' +
                                    '<div class="numbernr">' +
                                    '<p>' + arrs[j][gj] +
                                    '</p>' +
                                    '</div>' +
                                    '</div>'
                                );
                            } else if (taskDefinitionKey == "kss_jstz_ldsp") {
                                // var url = "/kss_ldsp/jstz_ldsp.html?processDefinitionKey=" + processDefinitionKey + "&taskDefinitionKey=" + taskDefinitionKey;
                                $("#ldsp_" + index).append(
                                    '<div class="bqnr">' +
                                    '<div class="tunr">' +
                                    '<img src="/apps/kss/static/images/ldsp.png" alt="">' +
                                    '</div>' +
                                    '<div class="mainnr">' +
                                    '<a href="' + url[gj] + '">' +
                                    '<p class="mainnrtitle">' + jsonObj[gj] +
                                    '</p>' +
                                    '<p>调整相应的监室</p>' +
                                    '</a>' +
                                    '</div>' +
                                    '<div class="numbernr">' +
                                    '<p>' + arrs[j][gj] +
                                    '</p>' +
                                    '</div>' +
                                    '</div>'
                                );
                            }
                            else {
                                // var url = "/kss_ldsp/index_ldsp.html?processDefinitionKey=" + processDefinitionKey + "&taskDefinitionKey=" + taskDefinitionKey;
                                $("#ldsp_" + index).append(
                                    '<div class="bqnr">' +
                                    '<div class="tunr">' +
                                    '<img src="/apps/kss/static/images/ldsp.png" alt="">' +
                                    '</div>' +
                                    '<div class="mainnr">' +
                                    '<a href="' + url[gj] + '">' +
                                    '<p class="mainnrtitle">' + jsonObj[gj] +
                                    '</p>' +
                                    '<p>暂无说明</p>' +
                                    '</a>' +
                                    '</div>' +
                                    '<div class="numbernr">' +
                                    '<p>' + arrs[j][gj] +
                                    '</p>' +
                                    '</div>' +
                                    '</div>'
                                );

                            }
                        }
                    }
                }

            }

        }
    }
    //界面控件
    var main = {
        init: function () {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () {
            /**布局初始化**/
            var gjgl = ["kss_jslx_zdzsp", "kss_jslx_szsp", "kss_xjjc_ldsp", "kss_xjsz_ldsp", "kss_xjyc_ldsp", "kss_ygjc_ldsp", "kss_ygsz_ldsp", "kss_ygyc_ldsp", "kss_wmjscx_ldsp", "kss_wmjssz_ldsp", "kss_lsfx_ldsp", "kss_emcx_szyj", "kss_emcx_zdzyj", "kss_emsz_szyj", "kss_emsz_zdzyj", "kss_jbjc_ldsp", "kss_jbsz_ldsp", "kss_jbyc_ldsp", "kss_jstz_ldsp"];
            var zhgl = ["kss_tscl_ldsp"];
            var xkgl = [];
            var syjd = ["kss_csgl_ldsp", "kss_lscs_ldsp", "kss_tsdj_ldsp", "kss_jshj_ldsp", "kss_jsbjd_ldsp", "kss_jwzx_ldsp"];
            var cwgl = [];
            var ywgl = ["kss_jy_ldsp"];
            var allLdsp = {
                KSS_XJJC_LDSP: "/apps/kss/views/pages/xjsy/ycszsp.html", //械具解除
                KSS_XJSZ_LDSP: "/apps/kss/views/pages/xjsy/syszyj.html",//械具设置
                KSS_XJYC_LDSP: "/apps/kss/views/pages/xjsy/ycszsp.html",//械具延长
                KSS_YGJC_LDSP: "/apps/kss/views/pages/ygry/cxldsp.html",//严管解除
                KSS_YGSZ_LDSP: "/apps/kss/views/pages/ygry/szldsp.html",//严管设置
                KSS_YGYC_LDSP: "/apps/kss/views/pages/ygry/ycldsp.html",//严管延长
                KSS_WMJSCX_LDSP: "/apps/kss/views/pages/wmjs/cxldsp.html",//文明监室撤销
                KSS_WMJSSZ_LDSP: "/apps/kss/views/pages/wmjs/szldsp.html",//文明监室设置
                KSS_LSFX_LDSP: "",//留所服刑
                KSS_EMCX_SZYJ: "/apps/kss/views/pages/emgl/ldps.html",//耳目撤销
                KSS_EMCX_ZDZYJ: "/apps/kss/views/pages/emgl/cxzdjzyj.html",//耳目撤销
                KSS_EMSZ_SZYJ: "/apps/kss/views/pages/emgl/sldyj.html",//耳目设置
                KSS_EMSZ_ZDZYJ: "/apps/kss/views/pages/emgl/zdjzyj.html",//耳目设置
                KSS_JBJC_LDSP: "/apps/kss/views/pages/jbgl/jcldsp.html",//禁闭解除
                KSS_JBSZ_LDSP: "/apps/kss/views/pages/jbgl/szldsp.html",//禁闭设置
                KSS_JBYC_LDSP: "/apps/kss/views/pages/jbgl/ycldsp.html",//禁闭延长
                KSS_JSTZ_LDSP: "/apps/kss/views/pages/jstz/ldsp.html",//监室调整
                KSS_TSCL_LDSP: "/apps/kss/views/pages/tscl/ldsp.html",//投诉处理
                KSS_JY_LDSP: "/apps/kss/views/pages/jygl/ldsp.html",//就医
                KSS_JSLX_ZDZSP: "/apps/kss/views/pages/jslx/zdzsp.html",//家属联系中队长审批
                KSS_JSLX_SZSP: "/apps/kss/views/pages/jslx/ldsp.html",//家属联系所长审批
                KSS_CSGL_LDSP: "/apps/kss/views/pages/csgl/ldsp.html",//出所管理
                KSS_LSCS_LDSP: "/apps/kss/views/pages/lscs/ldsp.html",//临时出所
                KSS_TSDJ_LDSP: "",//提审
                KSS_JSHJ_LDSP: "/apps/kss/views/pages/jshj/ldsp.html",//家属会见
                KSS_JSBJD_LDSP: "",//精神病鉴定
                KSS_JWZX_LDSP: ""//监外执行
            }
            var jsonObj = {
                KSS_XJJC_LDSP: "械具解除",
                KSS_XJSZ_LDSP: "械具设置",
                KSS_XJYC_LDSP: "械具延长",
                KSS_YGJC_LDSP: "严管解除",
                KSS_YGSZ_LDSP: "严管设置",
                KSS_YGYC_LDSP: "严管延长",
                KSS_WMJSCX_LDSP: "文明监室撤销",
                KSS_WMJSSZ_LDSP: "文明监室设置",
                KSS_LSFX_LDSP: "留所服刑",
                KSS_EMCX_SZYJ: "耳目撤销",
                KSS_EMCX_ZDZYJ: "耳目撤销中队/警署意见",
                KSS_EMSZ_SZYJ: "耳目设置",
                KSS_EMSZ_ZDZYJ: "耳目设置中队/警署意见",
                KSS_JBJC_LDSP: "禁闭解除",
                KSS_JBSZ_LDSP: "禁闭设置",
                KSS_JBYC_LDSP: "禁闭延长",
                KSS_JSTZ_LDSP: "监室调整",
                KSS_TSCL_LDSP: "投诉处理",
                KSS_JY_LDSP: "就医",
                KSS_JSLX_ZDZSP: "家属联系中队长审批",
                KSS_JSLX_SZSP: "家属联系所长审批",
                KSS_CSGL_LDSP: "出所管理",
                KSS_LSCS_LDSP: "临时出所",
                KSS_TSDJ_LDSP: "提审",
                KSS_JSHJ_LDSP: "家属会见",
                KSS_JSBJD_LDSP: "精神病鉴定",
                KSS_JWZX_LDSP: "监外执行"
            }
            var gjgls;
            var zhgls;
            var xkgls;
            var syjds;
            var cwgls;
            var ywgls;
            var index = 0;
            /**事件绑定**/
            $.ajax({
                url: url.ldspList,//路径
                method: "post",
                async: false,
                success: function (ldsp_date) {
                    if (ldsp_date.success) {
                        if (gjgl.length != 0) {
                            gjgls = ldsp_date.result;
                            ldsp_title(gjgl, gjgls, index, jsonObj, allLdsp, "管教岗位");
                            index++;
                        }
                        if (zhgl.length != 0) {
                            zhgls = ldsp_date.result;
                            ldsp_title(zhgl, zhgls, index, jsonObj, allLdsp, "综合岗位");
                            index++;
                        }
                        if (ywgl.length != 0) {
                            ywgls = ldsp_date.result;
                            ldsp_title(ywgl, ywgls, index, jsonObj, allLdsp, "医务岗位");
                            index++;
                        }
                        if (syjd.length != 0) {
                            syjds = ldsp_date.result;
                            ldsp_title(syjd, syjds, index, jsonObj, allLdsp, "收押岗位");
                            index++;
                        }
                        if (cwgl.length != 0) {
                            cwgls = ldsp_date.result;
                            ldsp_title(cwgl, cwgls, index, jsonObj, allLdsp, "财务岗位");
                            index++;
                        }
                        if (xkgl.length != 0) {
                            xkgls = ldsp_date.result;
                            ldsp_title(xkgls, xkgls, index, jsonObj, allLdsp, "巡控岗位");
                            index++;
                        }
                    } else {
                        layer.alert("领导代办获取失败");
                    }

                }
            });
            /**布局初始化**/
        },
        eventBind: function () {

            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
