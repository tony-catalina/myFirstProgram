/**
 * 禁闭管理 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('stats');
    var vEngine = require('vEngine');
    var ywlcCount = require('modules/ywlc');
    var __scene_flow;
    //获取流程节点代办数据

    /**
     * 界面控件
     */
    var main = {
        init: function () {



            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "禁闭管理";
            var element = document.querySelector("#scene");

            main.generalScene(element, api, main.findConfigByFlowName(firstLoadFlow));
        },
        findConfigByFlowName: function (flowName) {
            var target = null;
            vEngine.config.flows.forEach(function (item) {
                if (vEngine.helper.stringHelper.trim(item.name) === vEngine.helper.stringHelper.trim(flowName)) target = item.config
            });
            console.log(target)
            return target;
        },
        generalScene: function (element, api, flowConfig) {

            ywlcCount.init("kss_jbsz", function (data) {
                getData1(data);
            });
            var getData1 = function (data) {
                ywlcCount.init("kss_jbyc", function (data1) {
                    getData2(data, data1);
                });
            }
            var getData2 = function (data, data1) {
                ywlcCount.init("kss_jbjc", function (data2) {
                    console.log(data)
                    let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
                    console.log(config)

                    config[0].data[0].extData.events = data.KSS_JBSZ_SZ;
                    config[0].data[1].extData.events = data.KSS_JBSZ_YSYJ;
                    config[0].data[2].extData.events = data.KSS_JBSZ_ZDZYJ;
                    config[0].data[3].extData.events = data.KSS_JBSZ_LDSP;
                    config[0].data[4].extData.events = data1.KSS_JBYC_YC;
                    config[0].data[5].extData.events = data1.KSS_JBYC_YSYJ;
                    config[0].data[6].extData.events = data1.KSS_JBYC_ZDZYJ;
                    config[0].data[7].extData.events = data1.KSS_JBYC_LDSP;
                    config[0].data[8].extData.events = data2.KSS_JBJC_JC;
                    config[0].data[9].extData.events = data2.KSS_JBJC_YSYJ;
                    config[0].data[10].extData.events = data2.KSS_JBJC_ZDZYJ;
                    config[0].data[11].extData.events = data2.KSS_JBJC_LDSP;

                    __scene_flow.setOptions({
                        series: config
                    })


                });
            }
            vEngine.config.api.resourceRoot = "/apps/kss/static/images/"



            if (!__scene_flow) {
                __scene_flow = new vEngine.VEngine({
                    width: 1764,
                    height: 856,
                    edit: { enable: false }, // Ctrl + Alt + E 可以开启编辑模式
                    on: {
                        click: function (target, e) {
                            console.log(target, e)
                            if (target[0].case.options.name == "禁闭设置"|| target[0].case.options.text =="禁闭设置") {
                                window.parent.parent.openTab('禁闭设置', '/apps/kss/views/pages/jbgl/jbsz.html');
                            }
                            if (target[0].case.options.name == "设置医生意见"|| target[0].case.options.text =="设置医生意见") {
                                window.parent.parent.openTab('设置医生意见', '/apps/kss/views/pages/jbgl/szysyj.html');
                            }
                            if (target[0].case.options.name == "设置领导审批"|| target[0].case.options.text =="设置领导审批") {
                                window.parent.parent.openTab('设置领导审批', '/apps/kss/views/pages/jbgl/szldsp.html');
                            }
                            if (target[0].case.options.name == "设置中队长意见"|| target[0].case.options.text =="设置中队长意见") {
                                window.parent.parent.openTab('设置中队长意见', '/apps/kss/views/pages/jbgl/szzdzyj.html');
                            }
                            if (target[0].case.options.name == "禁闭延长"|| target[0].case.options.text =="禁闭延长") {
                                window.parent.parent.openTab('禁闭延长', '/apps/kss/views/pages/jbgl/jbyc.html');
                            }
                            if (target[0].case.options.name == "延长医生意见"|| target[0].case.options.text =="延长医生意见") {
                                window.parent.parent.openTab('延长医生意见', '/apps/kss/views/pages/jbgl/ycysyj.html');
                            }
                            if (target[0].case.options.name == "延长中队长意见"|| target[0].case.options.text =="延长中队长意见") {
                                window.parent.parent.openTab('延长中队长意见', '/apps/kss/views/pages/jbgl/yczdzyj.html');
                            }
                            if (target[0].case.options.name == "延长领导审批"|| target[0].case.options.text =="延长领导审批") {
                                window.parent.parent.openTab('延长领导审批', '/apps/kss/views/pages/jbgl/ycldsp.html');
                            }
                            if (target[0].case.options.name == "禁闭解除"|| target[0].case.options.text =="禁闭解除") {
                                window.parent.parent.openTab('禁闭解除', '/apps/kss/views/pages/jbgl/jbjc.html');
                            }
                            if (target[0].case.options.name == "解除医生意见"|| target[0].case.options.text =="解除医生意见") {
                                window.parent.parent.openTab('解除医生意见', '/apps/kss/views/pages/jbgl/jcysyj.html');
                            }
                            if (target[0].case.options.name == "解除中队长意见"|| target[0].case.options.text =="解除中队长意见") {
                                window.parent.parent.openTab('解除中队长意见', '/apps/kss/views/pages/jbgl/jczdzyj.html');
                            }
                            if (target[0].case.options.name == "解除领导审批"|| target[0].case.options.text =="解除领导审批") {
                                window.parent.parent.openTab('解除领导审批', '/apps/kss/views/pages/jbgl/jcldsp.html');
                            }



                        }
                    }
                });
                // 将场景挂载到某个HTML元素
                __scene_flow.mount(element);
                __scene_flow.setOptions({
                    series: flowConfig
                })
            }

        }
    };
    /**
     *运行入口
     */
    $(main.init);

});