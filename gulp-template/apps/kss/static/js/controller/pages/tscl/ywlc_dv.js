/**
 * 投诉处理 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    var ywlcCount = require('modules/ywlc');
    require('stats');
    var vEngine=require('vEngine')
    //获取流程节点代办数据
    var  __scene_flow;
    /**
     * 界面控件
     */
    var main = {
        init: function() {
            ywlcCount.init("kss_tscl", function(data) {
                // main.layout(data);
                // main.eventBind(data);
            });
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "投诉处理";
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

            ywlcCount.init("kss_tscl", function (data) {
             console.log(data)
             let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
            console.log(config,111)
           // dataCx.KSS_EMCX_SZYJ
             config[0].data[0].extData.events = 0;
             config[0].data[1].extData.events = data.KSS_TSCL_LDSP;
             config[0].data[2].extData.events = data.KSS_TSCL_DJCLJG;
            
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
                    if(target[0].case.options.name == "投诉处理登记"||target[0].case.options.text == "投诉处理登记"){
                      window.parent.parent.openTab('投诉处理登记','/apps/kss/views/pages/tscl/tsdj.html');
                    }
                    if(target[0].case.options.name == "领导审批"||target[0].case.options.text == "领导审批"){
                      window.parent.parent.openTab('领导审批','/apps/kss/views/pages/tscl/ldsp.html');
                    }
                    if(target[0].case.options.name == "登记处理结果"||target[0].case.options.text == "登记处理结果"){
                        window.parent.parent.openTab('登记处理结果','/apps/kss/views/pages/tscl/tscljgdj.html');
                      }
                  }
                }
              });
              // 将场景挂载到某个HTML元素
              __scene_flow.mount(element);
            }
            __scene_flow.setOptions({
              series: flowConfig
          });
          },
        // layout: function(data) {
        //     // 布局初始化
        //     $('#tscldjNum').html('投诉处理登记');
        //     $('#ldspNum').html('领导审批(<font color="red">' + (data.KSS_TSCL_LDSP === undefined ? "0" : data.KSS_TSCL_LDSP) + '</font>)');
        //     $('#djcljgNum').html('登记处理结果(<font color="red">' + (data.KSS_TSCL_DJCLJG === undefined ? "0" : data.KSS_TSCL_DJCLJG) + '</font>)');
        // },
        // eventBind: function() {
        //     /**
        //      * 事件绑定
        //      */
        //     $('#tscldj').on('click',function(){
        //         window.parent.parent.openTab('投诉处理登记','/apps/kss/views/pages/tscl/tsdj.html');
        //     });
        //     $('#ldsp').on('click',function(){
        //         window.parent.parent.openTab('领导审批','/apps/kss/views/pages/tscl/ldsp.html');
        //     });
        //     $('#djcljg').on('click',function(){
        //         window.parent.parent.openTab('登记处理结果','/apps/kss/views/pages/tscl/tscljgdj.html');
        //     });
        // }
    };
    /**
     *运行入口
     */
    $(main.init);

});