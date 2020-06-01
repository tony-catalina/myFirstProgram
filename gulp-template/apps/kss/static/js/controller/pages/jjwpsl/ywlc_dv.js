/**
 * 救济品申领 页面入口
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
            ywlcCount.init("kss_jjwpsl", function (data) {
                // main.layout(data);
            });
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "救济品申领";
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
            ywlcCount.init("kss_jjwpsl", function (data) {
                console.log(data)
                let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
                console.log(config)

                config[0].data[0].extData.events = data.KSS_JJWPSL_SL;
                config[0].data[1].extData.events = data.KSS_JJWPSL_LDSP;
                

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
                            if (target[0].case.options.name == "救济物品申领"|| target[0].case.options.text =="救济物品申领") {
                                window.parent.parent.openTab('救济物品申领', '/apps/kss/views/pages/jjwpsl/jjwpsl.html');
                            }
                            if (target[0].case.options.name == "领导审批"|| target[0].case.options.text =="领导审批") {
                                window.parent.parent.openTab('领导审批', '/apps/kss/views/pages/jjwpsl/ldsp.html');
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