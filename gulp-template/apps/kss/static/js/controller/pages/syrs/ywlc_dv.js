
/**
 * 收押入所 页面入口
 */
define(function (require) {
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
        init: function () {
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "收押入所";
            var element = document.querySelector("#scene");
  
            main.generalScene(element, api, main.findConfigByFlowName(firstLoadFlow));
        },
        findConfigByFlowName:function ( flowName ) {
            var target = null;
            vEngine.config.flows.forEach(function ( item ) {
              if (vEngine.helper.stringHelper.trim(item.name) === vEngine.helper.stringHelper.trim(flowName)) target = item.config
            });
            return target;
        },
        generalScene:function ( element, api, flowConfig) {

        ywlcCount.init("kss_rsdj", function (data) {
            console.log(data)
            let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
            console.log(config)

            config[0].data[0].extData.events = data.KSS_RSDJ_YZDJ;
            config[0].data[1].extData.events = data.KSS_RSDJ_KSRS;
            config[0].data[2].extData.events = data.KSS_RSDJ_HSDJ;
            config[0].data[3].extData.events = data.KSS_RSDJ_JKJC;
            config[0].data[4].extData.events = data.KSS_RSDJ_SLDYJ;
            config[0].data[5].extData.events = data.KSS_RSDJ_AQJC;
            config[0].data[6].extData.events = data.KSS_RSDJ_ZBSY;
            config[0].data[7].extData.events = data.KSS_RSDJ_FWDJ;
            config[0].data[8].extData.events = data.KSS_RSDJ_JJWP;
            config[0].data[9].extData.events = data.KSS_RSDJ_SWTZCJ;
            config[0].data[10].extData.events = data.KSS_RSDJ_GZ;
            config[0].data[11].extData.events = data.KSS_RSDJ_RSDJ;
            config[0].data[12].extData.events = data.KSS_RSDJ_SYKZ;

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
                    click: function ( target, e ) {
                        console.log(target,e)
                        if(target[0].case.options.name == "验证登记"){
                            window.parent.parent.openTab('验证登记','/apps/kss/views/pages/syrs/yzdj.html');
                        }
                        if(target[0].case.options.name == "快速入所"){
                            window.parent.parent.openTab('快速入所','/apps/kss/views/pages/syrs/ksrs.html');
                        }
                        if(target[0].case.options.name == "回所登记"){
                            window.parent.parent.openTab('回所登记','/apps/kss/views/pages/syrs/shdj.html');
                        }
                        if(target[0].case.options.name == "健康检查"){
                            window.parent.parent.openTab('健康检查','/apps/kss/views/pages/syrs/jkjc.html');
                        }
                        if(target[0].case.options.name == "所领导意见"){
                            window.parent.parent.openTab('所领导意见','/apps/kss/views/pages/syrs/sldyj.html');
                        }
                        if(target[0].case.options.name == "安全检查"){
                            window.parent.parent.openTab('安全检查','/apps/kss/views/pages/syrs/aqjc.html');
                        }
                        if(target[0].case.options.name == "暂不收押"){
                            window.parent.parent.openTab('暂不收押','/apps/kss/views/pages/syrs/zbsy.html');
                        }
                        if(target[0].case.options.name == "附物登记"){
                            window.parent.parent.openTab('附物登记','/apps/kss/views/pages/syrs/fwdj.html');
                        }
                        if(target[0].case.options.name == "接济物品"){
                            window.parent.parent.openTab('接济物品','/apps/kss/views/pages/syrs/jjwp.html');
                        }
                        if(target[0].case.options.name == "生物特征"){
                            window.parent.parent.openTab('生物特征','/apps/kss/views/pages/syrs/swtz.html');
                        }
                        if(target[0].case.options.name == "告知"){
                            window.parent.parent.openTab('告知','/apps/kss/views/pages/syrs/rsgz.html');
                        }
                        if(target[0].case.options.name == "入所登记"){
                            window.parent.parent.openTab('入所登记','/apps/kss/views/pages/syrs/rsdj.html');
                        }
                        if(target[0].case.options.name == "收押开证"){
                            window.parent.parent.openTab('收押开证','/apps/kss/views/pages/syrs/sykz.html');
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
        // $("canvas").css("height","750px")

        }
    };
    /**
     *运行入口
     */
    $(main.init);

});