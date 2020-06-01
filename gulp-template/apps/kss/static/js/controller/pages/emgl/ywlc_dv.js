
/**
 * 耳目管理 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
   require('stats');
    var vEngine=require('vEngine')
    var ywlcCount = require('modules/ywlc');
    //获取流程节点代办数据
   var  __scene_flow;
    /**
     * 界面控件
     */
    var main = {
        init: function() {
          
            ywlcCount.init("kss_emsz", function(data) {
                //getData2(data);
             });
             var api = "/plugin-flowchart/scene/simulation.json";
             var firstLoadFlow = "耳目管理";
            var element = document.querySelector("#scene");

          main.generalScene(element, api, main.findConfigByFlowName(firstLoadFlow));

            //  var getData2 = function(data) {
            //      ywlcCount.init("kss_emcx", function (data2) {
            //          main.layout(data, data2);
 
            //      });
            //  };
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

            ywlcCount.init("kss_emsz", function (data) {
             console.log(data)
             let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
            console.log(config,111)
           // dataCx.KSS_EMCX_SZYJ
            config[0].data[0].extData.events = data.KSS_EMSZ_EMSZCB;
            config[0].data[1].extData.events = data. KSS_EMSZ_ZDZYJ;
            config[0].data[2].extData.events = data.KSS_EMSZ_SZYJ;
            config[0].data[3].extData.events = 0;
            config[0].data[4].extData.events = 0;
            config[0].data[5].extData.events = 0;
            config[0].data[6].extData.events = 0;
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
                    if(target[0].case.options.name == "物建呈报" || target[0].case.options.text == "物建呈报"){
                      window.parent.parent.openTab('物建呈报','/apps/kss/views/pages/emgl/wjcp.html');
                    }
                    if(target[0].case.options.name == "中队/警署意见" || target[0].case.options.text == "中队/警署意见"){
                      window.parent.parent.openTab('中队/警署意见','/apps/kss/views/pages/emgl/zdjzyj.html');
                    }
                    if(target[0].case.options.name == "所领导意见" || target[0].case.options.text == "所领导意见"){
                      window.parent.parent.openTab('所领导意见','/apps/kss/views/pages/emgl/sldyj.html');
                    }
                    if(target[0].case.options.name == "撤销登记" || target[0].case.options.text == "撤销登记"){
                      window.parent.parent.openTab('撤销登记','/apps/kss/views/pages/emgl/cxdj.html');
                    }
                    if(target[0].case.options.name == "撤销中队长/警署意见" || target[0].case.options.text == "撤销中队长/警署意见"){
                      window.parent.parent.openTab('撤销中队长/警署意见','/apps/kss/views/pages/emgl/cxzdjzyj.html');
                    }
                    if(target[0].case.options.name == "领导审批" || target[0].case.options.text == "领导审批"){
                      window.parent.parent.openTab('领导审批','/apps/kss/views/pages/emgl/ldps.html');
                    }
                    if(target[0].case.options.name == "情况反馈" || target[0].case.options.text == "情况反馈"){
                      window.parent.parent.openTab('情况反馈','/apps/kss/views/pages/emgl/qkfy.html');
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