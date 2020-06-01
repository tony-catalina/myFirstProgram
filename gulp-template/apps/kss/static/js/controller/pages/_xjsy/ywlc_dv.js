
/**
 * 械具使用 页面入口
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
            ywlcCount.init("kss_xjsy", function (data) {
                // main.layout(data);
            });
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "械具使用";
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

            ywlcCount.init("kss_xjsy", function (data) {
                console.log(data)
                let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
                console.log(config)

                config[0].data[0].extData.events = data.KSS_XJSY_SZCP;
                config[0].data[1].extData.events = data.KSS_XJSY_ZDJSYJ;
                config[0].data[2].extData.events = data.KSS_XJSY_SYLDSP;
                config[0].data[3].extData.events = data.KSS_XJSY_XJSYDJ;
                config[0].data[4].extData.events = data.KSS_XJSY_XJTQJC;
                config[0].data[5].extData.events = data.KSS_XJSY_YCLDSP;
                config[0].data[6].extData.events = data.KSS_XJSY_YCZDJSYJ;
                config[0].data[7].extData.events = data.KSS_XJSY_YCJCCP;


                __scene_flow.setOptions({
                    series: config
                })

            });
            // console.log(flowConfig)
            vEngine.config.api.resourceRoot = "/apps/kss/static/images/"



            if (!__scene_flow) {
                __scene_flow = new vEngine.VEngine({
                    width: 1764,
                    height: 856,
                    edit: { enable: false }, // Ctrl + Alt + E 可以开启编辑模式
                    on: {
                        click: function (target, e) {
                            console.log(target, e)
                            if (target[0].case.options.name == "械具使用呈批" || target[0].case.options.text =="械具使用呈批") {
                                window.parent.parent.openTab('械具使用呈批', '/apps/kss/views/pages/xjsy/sycp.html');
                            }
                            if (target[0].case.options.name == "中队/警署意见"|| target[0].case.options.text =="中队/警署意见") {
                                window.parent.parent.openTab('中队/警署意见', '/apps/kss/views/pages/xjsy/syZdjzyj.html');
                            }
                            if (target[0].case.options.name == "所领导审批"|| target[0].case.options.text =="所领导审批") {
                                window.parent.parent.openTab('所领导审批', '/apps/kss/views/pages/xjsy/syszyj.html');
                            }
                            if (target[0].case.options.name == "械具使用登记"|| target[0].case.options.text =="械具使用登记") {
                                window.parent.parent.openTab('械具使用登记', '/apps/kss/views/pages/xjsy/sydj.html');
                            }
                            if (target[0].case.options.name == "械具提前解除"|| target[0].case.options.text =="械具提前解除") {
                                window.parent.parent.openTab('械具提前解除', '/apps/kss/views/pages/xjsy/jc.html');
                            }
                            if (target[0].case.options.name == "领导审批"|| target[0].case.options.text =="领导审批") {
                                window.parent.parent.openTab('领导审批', '/apps/kss/views/pages/xjsy/ycszsp.html');
                            }
                            if (target[0].case.options.name == "延长中队/警署意见"|| target[0].case.options.text =="延长中队/警署意见") {
                                window.parent.parent.openTab('延长中队/警署意见', '/apps/kss/views/pages/xjsy/yc.html');
                            }
                            if (target[0].case.options.name == "延长或提前解除呈报"|| target[0].case.options.text =="延长或提前解除呈报") {
                                window.parent.parent.openTab('延长或提前解除呈报', '/apps/kss/views/pages/xjsy/ychtqjc.html');
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