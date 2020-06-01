
/**
 *  律师会见页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('stats');
    var vEngine=require('vEngine');
    var ywlcCount = require('modules/ywlc');
    var __scene_flow;
    //获取流程节点代办数据

    /**
     * 界面控件
     */
    var main = {
        init: function() {
            ywlcCount.init("kss_lshj", function (data) {
                // main.layout(data);
            });
          var api = "/plugin-flowchart/scene/simulation.json";
          var firstLoadFlow = "律师会见";
          var element = document.querySelector("#scene");

          main.generalScene(element, api, main.findConfigByFlowName(firstLoadFlow));
        },
        findConfigByFlowName:function ( flowName ) {
            var target = null;
            vEngine.config.flows.forEach(function ( item ) {
              if (vEngine.helper.stringHelper.trim(item.name) === vEngine.helper.stringHelper.trim(flowName)) target = item.config
            });
            console.log(target)
            return target;
          },
          generalScene:function ( element, api, flowConfig) {
  
            ywlcCount.init("kss_lshj", function (data) {
             console.log(data)
             let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
            console.log(config)
  
            config[0].data[0].extData.events = data.KSS_LSHJ_HDPZ;
            config[0].data[1].extData.events = data.KSS_LSHJ_DJCB;
            config[0].data[2].extData.events = data.KSS_LSHJ_JQTRDJ;
            config[0].data[3].extData.events = data.KSS_LSHJ_JS;
            config[0].data[4].extData.events = data.KSS_LSHJ_AQJC;
             
  
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
                  click: function ( target, e ) {
                    console.log(target,e)
                    if(target[0].case.options.name == "核对凭证" || target[0].case.options.text == "核对凭证"){
                      window.parent.parent.openTab('核对凭证','/apps/kss/views/pages/lshj/hdpz.html');
                    }
                    if(target[0].case.options.name == "登记呈报" || target[0].case.options.text == "登记呈报"){
                      window.parent.parent.openTab('登记呈报','/apps/kss/views/pages/lshj/djcb.html');
                    }
                    if(target[0].case.options.name == "监区提人登记" || target[0].case.options.text == "监区提人登记"){
                      window.parent.parent.openTab('监区提人登记','/apps/kss/views/pages/lshj/jqtr.html');
                    }
                    if(target[0].case.options.name == "会见完毕安全检查" || target[0].case.options.text == "会见完毕安全检查"){
                      window.parent.parent.openTab('会见完毕安全检查','/apps/kss/views/pages/lshj/aqjc.html');
                    }
                    if(target[0].case.options.name == "预约会见" || target[0].case.options.text == "预约会见" ){
                        // window.parent.parent.openTab('预约会见','/apps/kss/views/pages/lshj/yyhj.html');
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