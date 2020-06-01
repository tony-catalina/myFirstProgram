/**
 * 家属送物 页面入口
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
            var firstLoadFlow = "家属送物";
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

            ywlcCount.init("KSS_JSSW", function (data) {
                console.log(data)
                let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
                console.log(config)

                config[0].data[0].extData.events = 0;
                config[0].data[1].extData.events = data.KSS_JSSW_ZYRYSQ;
                config[0].data[2].extData.events = data.KSS_JSSW_GJQR;
                config[0].data[3].extData.events = data.KSS_JSSW_GJSP;
                config[0].data[4].extData.events = data.KSS_JSSW_YJJS;
                config[0].data[5].extData.events = data.KSS_JSSW_QTBL;
                config[0].data[6].extData.events = data.KSS_JSSW_AJJAJ;
                config[0].data[7].extData.events = data.KSS_JSSW_GJSW;
                config[0].data[8].extData.events = data.KSS_JSSW_ZYRYQR;

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
                            if (target[0].case.options.name == "物品补领" || target[0].case.options.text == "物品补领") {
                                window.parent.parent.openTab('物品补领', '/apps/kss/views/pages/jssw/wpbl.html');
                            }
                            if (target[0].case.options.name == "在押人员申请" || target[0].case.options.text == "在押人员申请") {
                                window.parent.parent.openTab('在押人员申请', '/apps/kss/views/pages/jssw/zyrysq.html');
                            }
                            if (target[0].case.options.name == "管教确认" || target[0].case.options.text == "管教确认") {
                                window.parent.parent.openTab('管教确认', '/apps/kss/views/pages/jssw/gjdqr.html');
                            }
                            if (target[0].case.options.name == "管教中队审批" || target[0].case.options.text == "管教中队审批") {
                                window.parent.parent.openTab('管教中队审批', '/apps/kss/views/pages/jssw/gjsp.html');
                            }
                            if (target[0].case.options.name == "邮寄家属" || target[0].case.options.text == "邮寄家属") {
                                window.parent.parent.openTab('邮寄家属', '/apps/kss/views/pages/jssw/yjjs.html');
                            }
                            if (target[0].case.options.name == "前台办理" || target[0].case.options.text == "前台办理") {
                                window.parent.parent.openTab('前台办理', '/apps/kss/views/pages/jssw/qtbl.html');
                            }
                            if (target[0].case.options.name == "安检机安检" || target[0].case.options.text == "安检机安检") {
                                window.parent.parent.openTab('安检机安检', '/apps/kss/views/pages/jssw/ajjaj.html');
                            }
                            if (target[0].case.options.name == "管教送物" || target[0].case.options.text == "管教送物") {
                                window.parent.parent.openTab('管教送物', '/apps/kss/views/pages/jssw/gjsw.html');
                            }
                            if (target[0].case.options.name == "在押人员确认" || target[0].case.options.text == "在押人员确认") {
                                window.parent.parent.openTab('在押人员确认', '/apps/kss/views/pages/jssw/zyryqr.html');
                            }

                        }
                    }
                });
                // 将场景挂载到某个HTML元素
                __scene_flow.mount(element);
                $("canvas").css("margin-left",'5%')
            }

        }

    };
    /**
     *运行入口
     */
    $(main.init);

});