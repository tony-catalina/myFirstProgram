
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
          ywlcCount.init("kss_sxdj", function(data) {
            getData2(data);
        });
        var getData2 = function(data) {
            ywlcCount.init("kss_fxdj", function(data2) {
                
            });
        };
            var api = "/plugin-flowchart/scene/simulation.json";
          var firstLoadFlow = "信件管理";
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
  
            ywlcCount.init("kss_sxdj", function (data) {
             console.log(data)
             let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
            console.log(config)
           
            config[0].data[0].extData.events = 0;
            config[0].data[1].extData.events = data.KSS_SXDJ_LDSP;
            config[0].data[2].extData.events = data.KSS_SXDJ_XJZJCL;
           
             
  
            __scene_flow.setOptions({
              series: config
          })
          
          
  
          });
          ywlcCount.init("kss_fxdj", function (data) {
            console.log(data)
            let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
           console.log(config)
          
           config[0].data[0].extData.events = 0;
           config[0].data[1].extData.events = data.KSS_FXDJ_LDSP;
           config[0].data[2].extData.events = data.KSS_FXDJ_XJJCCL;
          
            
 
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
                    if(target[0].case.options.name == "收信登记" || target[0].case.options.text == "收信登记"){
                      window.parent.parent.openTab('收信登记','/apps/kss/views/pages/xjgl/sxdj.html');
                    }
                    if(target[0].case.options.name == "领导审批" || target[0].case.options.text == "领导审批"){
                      window.parent.parent.openTab('领导审批','/apps/kss/views/pages/xjgl/ldsp.html');
                    }
                    if(target[0].case.options.name == "信件转接处理" || target[0].case.options.text == "信件转接处理"){
                      window.parent.parent.openTab('信件转接处理','/apps/kss/views/pages/xjgl/zjcl.html');
                    }
                    if(target[0].case.options.name == "发信登记" || target[0].case.options.text == "发信登记"){
                      window.parent.parent.openTab('发信登记','/apps/kss/views/pages/xjgl/fxdj.html');
                    }
                    if(target[0].case.options.name == "处理审批" || target[0].case.options.text == "处理审批"){
                        window.parent.parent.openTab('处理审批','/apps/kss/views/pages/xjgl/clsp.html');
                      }
                      if(target[0].case.options.name == "信件寄出处理" || target[0].case.options.text == "信件寄出处理"){
                        window.parent.parent.openTab('信件寄出处理','/apps/kss/views/pages/xjgl/xjjc.html');
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