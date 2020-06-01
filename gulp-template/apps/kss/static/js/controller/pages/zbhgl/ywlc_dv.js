/**
 * 重病号管理 页面入口
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
            var firstLoadFlow = "重病号管理";
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
           
                let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
                console.log(config)
                config[0].data[0].extData.events = 0;
                config[0].data[1].extData.events = 0;
                config[0].data[2].extData.events = 0;
                config[0].data[3].extData.events = 0;
                
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
                            if (target[0].case.options.name == "重病号登记" || target[0].case.options.text == "重病号登记") {
                                window.parent.parent.openTab('重病号登记', '/apps/kss/views/pages/zbhgl/zbhdj.html');
                            }
                            if (target[0].case.options.name == "解除重病号" || target[0].case.options.text == "解除重病号") {
                                window.parent.parent.openTab('解除重病号', '/apps/kss/views/pages/zbhgl/jczbh.html');
                            }
                            if (target[0].case.options.name == "重病号查询" || target[0].case.options.text == "重病号查询") {
                                window.parent.parent.openTab('重病号查询', '/apps/kss/views/pages/zbhgl/zbhcx.html');
                            }
                            if (target[0].case.options.name == "重病号分布图"  || target[0].case.options.text == "重病号分布图") {
                                window.parent.parent.openTab('重病号分布图', '/apps/kss/views/pages/zbhgl/zbhfbt.html');
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