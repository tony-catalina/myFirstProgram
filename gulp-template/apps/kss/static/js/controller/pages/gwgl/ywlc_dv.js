
/**
 * 购物管理 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('stats');
    var vEngine = require('vEngine');
    require('jquery');
    var ywlcCount = require('modules/ywlc');
    //获取流程节点代办数据
    var __scene_flow;

    /**
     * 界面控件
     */
    var main = {
        init: function () {
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "购物管理";
            var element = document.querySelector("#scene");

            main.generalScene(element, api, main.findConfigByFlowName(firstLoadFlow));
        },
        findConfigByFlowName: function (flowName) {
            var target = null;
            vEngine.config.flows.forEach(function (item) {
                if (vEngine.helper.stringHelper.trim(item.name) === vEngine.helper.stringHelper.trim(flowName)) target = item.config
            });
            return target;
        },
        generalScene: function (element, api, flowConfig) {

            ywlcCount.init("kss_gwgl", function (data) {
                console.log(data)
                let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
                console.log(config)

                config[0].data[0].extData.events = data.KSS_GWGL_ZYRQSQ;
                config[0].data[1].extData.events = data.KSS_GWGL_GJQR;
                config[0].data[2].extData.events = data.KSS_GWGL_GJZDSP;
                config[0].data[3].extData.events = data.KSS_GWGL_LDSP;
                config[0].data[4].extData.events = data.KSS_GWGL_ZHZDSP;
                config[0].data[5].extData.events = data.KSS_GWGL_ZYRYQR;

                __scene_flow.setOptions({
                    series: config
                })

            });
            vEngine.config.api.resourceRoot = "/apps/kss/static/images/"



            if (!__scene_flow) {
                __scene_flow = new vEngine.VEngine({
                    width: 1764,
                    height: 856,
                    edit: { enable: false }, // Ctrl + Alt + E 可以开启编辑模式
                    on: {
                        click: function (target, e) {
                            console.log(target)
                            if (target[0].case.options.name == "在押人员申请" || target[0].case.options.text == "在押人员申请") {
                                window.parent.parent.openTab('在押人员申请', '/apps/kss/views/pages/gwgl/zyrysq.html');
                            }
                            if (target[0].case.options.name == "管教确认" || target[0].case.options.text == "管教确认") {
                                window.parent.parent.openTab('管教确认', '/apps/kss/views/pages/gwgl/gjqr.html');
                            }
                            if (target[0].case.options.name == "管教中队审批" || target[0].case.options.text == "管教中队审批") {
                                window.parent.parent.openTab('管教中队审批', '/apps/kss/views/pages/gwgl/gjzdsp.html');
                            }
                            if (target[0].case.options.name == "所领导审批" || target[0].case.options.text == "所领导审批") {
                                window.parent.parent.openTab('所领导审批', '/apps/kss/views/pages/gwgl/sldsp.html');
                            }
                            if (target[0].case.options.name == "综合中队审批" || target[0].case.options.text == "综合中队审批") {
                                window.parent.parent.openTab('综合中队审批', '/apps/kss/views/pages/gwgl/zhzdsp.html');
                            }
                            if (target[0].case.options.name == "在押人员确认" || target[0].case.options.text == "在押人员确认") {
                                window.parent.parent.openTab('在押人员确认', '/apps/kss/views/pages/gwgl/zyryqr.html');
                            }
                        }
                    }
                });
                // 将场景挂载到某个HTML元素
                __scene_flow.mount(element);
            }

        }
       
    };
    /**
     *运行入口
     */
    $(main.init);

});