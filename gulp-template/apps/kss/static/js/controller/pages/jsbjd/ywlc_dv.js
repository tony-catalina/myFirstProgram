

/**
 * 收押入所 页面入口
 */
define(function (require) {
    console.log('走走走')
    //公共控件、组件、工具导入
    require('stats');
    var vEngine = require('vEngine');
    require('jquery');
    var ywlcCount = require('modules/ywlc');
    //获取流程节点代办数据
    var __scene_flow;
    var main = {

        init: function () {
            console.log(1)
            ywlcCount.init("kss_jsbjd", function (data) {
            });
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "精神病鉴定";
            var element = document.querySelector("#scene");

            main.generalScene(element, api, main.findConfigByFlowName(firstLoadFlow));

        },
        findConfigByFlowName: function (flowName) {
            console.log(2)
            var target = null;
            vEngine.config.flows.forEach(function (item) {
                if (vEngine.helper.stringHelper.trim(item.name) === vEngine.helper.stringHelper.trim(flowName)) target = item.config
            });
            console.log(target)
            return target;
        },
        generalScene: function (element, api, flowConfig) {
            console.log(3)
            ywlcCount.init("kss_jsbjd", function (data) {
                console.log(data)
                let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
                console.log(config)

                config[0].data[0].extData.events = data.KSS_JSBJD_JDKS;
                config[0].data[1].extData.events = data.KSS_JSBJD_JDJS;

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
                            if (target[0].case.options.name == "鉴定开始登记" || target[0].case.options.text =="鉴定开始登记") {
                                window.parent.parent.openTab('鉴定开始登记', '/apps/kss/views/pages/jsbjd/jdksdj.html');
                            }
                            if (target[0].case.options.name == "鉴定结束登记" || target[0].case.options.text =="鉴定结束登记") {
                                window.parent.parent.openTab('鉴定结束登记', '/apps/kss/views/pages/jsbjd/jdjcdj.html');

                            }


                        }
                    }
                });
                // 将场景挂载到某个HTML元素
                __scene_flow.mount(element);
                __scene_flow.setOptions({
                    series: flowConfig
                });
            }

        }
    };
    /**
     *运行入口
     */
    $(main.init);

});