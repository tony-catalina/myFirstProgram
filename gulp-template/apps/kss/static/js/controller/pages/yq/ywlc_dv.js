
/**
 * 收押入所 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    var ywlcCount = require('modules/ywlc');
    require('stats');
    var vEngine = require('vEngine');
    //获取流程节点代办数据
    var __scene_flow;
    /**
     * 界面控件
     */
    var main = {
        init: function () {
            ywlcCount.init("kss_yq", function (data) {
              
            });
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "延期";
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

            ywlcCount.init("kss_yq", function (data) {
                console.log(data)
                let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
                console.log(config)

                config[0].data[0].extData.events = 0;
                config[0].data[1].extData.events = data.KSS_YQ_YQDJ;
                config[0].data[2].extData.events = 0;

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
                            if (target[0].case.options.name == "证件核对" || target[0].case.options.text == "证件核对") {
                                window.parent.parent.openTab('证件核对', '/apps/kss/views/pages/yq/zjhd.html');
                            }
                            if (target[0].case.options.name == "延期登记" || target[0].case.options.text == "延期登记") {
                                window.parent.parent.openTab('延期登记', '/apps/kss/views/pages/yq/yqdj.html');
                            }
                            if (target[0].case.options.name == "批量延期" || target[0].case.options.text == "批量延期") {
                                window.parent.parent.openTab('批量延期', '/apps/kss/views/pages/yq/plyq.html');
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

        },
 
    };
    /**
     *运行入口
     */
    $(main.init);

});