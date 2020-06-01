
/**
 * 文明监室 页面入口
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
            var firstLoadFlow = "巡控管理——文明监室";
            console.log(firstLoadFlow)
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

            ywlcCount.init("KSS_WMJSSZ", function (data) {
                getData1(data)
            });
           
            var getData1 = function (data) {
                ywlcCount.init("KSS_WMJSCX", function (data1) {
                    console.log(data)
                    console.log(data1)
                    let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
                    console.log(config)
    
                    config[0].data[0].extData.events = data.KSS_WMJSSZ_SZ;
                    config[0].data[1].extData.events = data.KSS_WMJSSZ_LDSP;
                    config[0].data[2].extData.events = data1.KSS_WMJSCX_CX;
                    config[0].data[3].extData.events = data1.KSS_WMJSCX_LDSP;
    
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
                            if (target[0].case.options.name == "文明监室设置"|| target[0].case.options.text =="文明监室设置") {
                                window.parent.parent.openTab('文明监室设置', '/apps/kss/views/pages/wmjs/wmjssz.html');
                            }
                            if (target[0].case.options.name == "设置领导审批"|| target[0].case.options.text =="设置领导审批") {
                                window.parent.parent.openTab('设置领导审批', '/apps/kss/views/pages/wmjs/szldsp.html');
                            }
                            if (target[0].case.options.name == "文明监室撤销"|| target[0].case.options.text =="文明监室撤销") {
                                window.parent.parent.openTab('文明监室撤销', '/apps/kss/views/pages/wmjs/wmjscx.html');
                            }
                            if (target[0].case.options.name == "撤销领导审批"|| target[0].case.options.text =="撤销领导审批") {
                                window.parent.parent.openTab('撤销领导审批', '/apps/kss/views/pages/wmjs/cxldsp.html');
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