

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
            var firstLoadFlow = "严管人员";
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

            ywlcCount.init("kss_ygsz", function (data) {
                getData1(data);
            });
            var getData1 = function (data) {
                ywlcCount.init("kss_ygjc", function (data1) {
                    getData2(data, data1);
                });
            }
            var getData2 = function (data, data1) {
                ywlcCount.init("kss_ygyc", function (data2) {
                    console.log(data)
                    let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
                    console.log(config)

                    config[0].data[0].extData.events = data.KSS_YGSZ_SZ;
                    config[0].data[1].extData.events = data.KSS_YGSZ_LDSP;
                    config[0].data[2].extData.events = data1.KSS_YGJC_JC;
                    config[0].data[3].extData.events = data1.KSS_YGJC_LDSP;
                    config[0].data[4].extData.events = data2.KSS_YGYC_YC;
                    config[0].data[5].extData.events = data2.KSS_YGYC_LDSP;


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
                            if (target[0].case.options.name == "严管设置"|| target[0].case.options.text =="严管设置") {
                                window.parent.parent.openTab('严管设置', '/apps/kss/views/pages/ygry/ygsz.html');
                            }
                            if (target[0].case.options.name == "设置领导审批"|| target[0].case.options.text =="设置领导审批") {
                                window.parent.parent.openTab('设置领导审批', '/apps/kss/views/pages/ygry/szldsp.html');
                            }
                            if (target[0].case.options.name == "严管撤销"|| target[0].case.options.text =="严管撤销") {
                                window.parent.parent.openTab('严管撤销', '/apps/kss/views/pages/ygry/ygcx.html');

                            }
                            if (target[0].case.options.name == "撤销领导审批"|| target[0].case.options.text =="撤销领导审批") {
                                window.parent.parent.openTab('撤销领导审批', '/apps/kss/views/pages/ygry/cxldsp.html');
                            }
                            if (target[0].case.options.name == "严管延长"|| target[0].case.options.text =="严管延长") {
                                window.parent.parent.openTab('严管延长', '/apps/kss/views/pages/ygry/ygyc.html');
                            }
                            if (target[0].case.options.name == "延长领导审批"|| target[0].case.options.text =="延长领导审批") {
                                window.parent.parent.openTab('延长领导审批', '/apps/kss/views/pages/ygry/ycldsp.html');
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