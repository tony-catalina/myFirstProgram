/**
 * 协助破案 页面入口
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
            ywlcCount.init("kss_xzpa", function (data) {
                // main.layout(data);
            });
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "协助破案";
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

            ywlcCount.init("kss_xzpa", function (data) {
                console.log(data)
                let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
                console.log(config)

                config[0].data[0].extData.events = 0;
                config[0].data[1].extData.events = data.KSS_XZPA_LDSP;
                config[0].data[2].extData.events = data.KSS_XZPA_CLZD;
                config[0].data[3].extData.events = data.KSS_XZPA_ZDDJ;
                config[0].data[4].extData.events = data.KSS_XZPA_ZCDX;
                config[0].data[5].extData.events = data.KSS_XZPA_XSDJ;
               


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
                            if (target[0].case.options.name == "线索登记"|| target[0].case.options.text =="线索登记") {
                                window.parent.parent.openTab('线索登记', '/apps/kss/views/pages/xzpa/xsdj.html');
                            }
                            if (target[0].case.options.name == "所领导意见"|| target[0].case.options.text =="所领导意见") {
                                window.parent.parent.openTab('所领导意见', '/apps/kss/views/pages/xzpa/ldyj.html');
                            }
                            if (target[0].case.options.name == "材料转递"|| target[0].case.options.text =="材料转递") {
                                window.parent.parent.openTab('材料转递', '/apps/kss/views/pages/xzpa/clzd.html');
                            }
                            if (target[0].case.options.name == "转递反馈"|| target[0].case.options.text =="转递反馈") {
                                window.parent.parent.openTab('转递反馈', '/apps/kss/views/pages/xzpa/cdfk.html');
                            }
                            if (target[0].case.options.name == "政策兑现"|| target[0].case.options.text =="政策兑现") {
                                window.parent.parent.openTab('政策兑现', '/apps/kss/views/pages/xzpa/zcdx.html');
                            }
                            if (target[0].case.options.name == "线索登记表打印"|| target[0].case.options.text =="线索登记表打印") {
                                window.parent.parent.openTab('线索登记表打印', '/apps/kss/views/pages/xzpa/xsdjbdy.html');
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