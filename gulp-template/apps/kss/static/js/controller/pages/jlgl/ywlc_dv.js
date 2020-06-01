
/**
 * 奖励管理 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('stats');
    var vEngine=require('vEngine');
    require('jquery');
    var ywlcCount = require('modules/ywlc');
    //获取流程节点代办数据
    var __scene_flow;

    /**
     * 界面控件
     */
    var main = {
        init: function() {
            ywlcCount.init('kss_jlgl', function(data) {

            });
            var api = '/plugin-flowchart/scene/simulation.json';
            var firstLoadFlow = '奖励管理';
            var element = document.querySelector('#scene');

            main.generalScene(element, api, main.findConfigByFlowName(firstLoadFlow));
        },
        findConfigByFlowName:function ( flowName ) {
            var target = null;
            vEngine.config.flows.forEach(function ( item ) {
                if (vEngine.helper.stringHelper.trim(item.name) === vEngine.helper.stringHelper.trim(flowName)) target = item.config
            });
            console.log(target);
            return target;
        },
        generalScene:function ( element, api, flowConfig) {

            ywlcCount.init("kss_jlgl", function (data) {

                let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
                config[0].data[0].extData.events = data.KSS_JLGL_JLCP;
                config[0].data[1].extData.events = data.KSS_JLGL_JLQKDJ;
                config[0].data[2].extData.events = data.KSS_JLGL_SLDSP;
                config[0].data[3].extData.events = data.KSS_JLGL_ZDJZYJ;


                __scene_flow.setOptions({
                    series: config
                });

            });
            // console.log(flowConfig)
            vEngine.config.api.resourceRoot = "/apps/kss/static/images/"



            if (!__scene_flow) {
                __scene_flow = new vEngine.VEngine({
                    width: 1764,
                    height: 856,
                    edit: { enable: false }, // Ctrl + Alt + E 可以开启编辑模式
                    on: {
                        click: function ( target, e ) {
                            console.log(target,e)
                            if(target[0].case.options.name == "奖励呈批" || target[0].case.options.text == "奖励呈批"){
                                window.parent.parent.openTab('奖励呈批','/apps/kss/views/pages/jlgl/jlcp.html');
                            }
                            if(target[0].case.options.name == "中队/警署意见" || target[0].case.options.text == "中队/警署意见"){
                                window.parent.parent.openTab('中队/警署意见','/apps/kss/views/pages/jlgl/zdjzyj.html');
                            }
                            if(target[0].case.options.name == "所领导审批" || target[0].case.options.text == "所领导审批"){
                                window.parent.parent.openTab('所领导审批','/apps/kss/views/pages/jlgl/sldsp.html');
                            }
                            if(target[0].case.options.name == "奖励情况登记" || target[0].case.options.text == "奖励情况登记"){
                                window.parent.parent.openTab('奖励情况登记','/apps/kss/views/pages/jlgl/jlqkdj.html');
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