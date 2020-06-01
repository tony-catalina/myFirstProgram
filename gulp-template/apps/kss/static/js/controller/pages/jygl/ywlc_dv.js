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
            ywlcCount.init("kss_jy", function(data) {
                // main.layout(data);
                // main.eventBind(data);
            });
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "就医管理";
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

            ywlcCount.init("kss_jy", function (data) {
             console.log(data)
             let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
            console.log(config,111)
           // dataCx.KSS_EMCX_SZYJ
             config[0].data[0].extData.events = 0;
             config[0].data[1].extData.events = data.KSS_JY_LDSP;
             config[0].data[2].extData.events = data.KSS_JY_DCJS;
             config[0].data[3].extData.events = data.KSS_JY_ZYZLQR;
             config[0].data[4].extData.events = data.KSS_JY_DHJS;
             config[0].data[5].extData.events = data.KSS_JY_ZLXXQR;
            
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
                    if(target[0].case.options.name == "就医登记" || target[0].case.options.text == "就医登记"){
                      window.parent.parent.openTab('就医登记','/apps/kss/views/pages/jygl/jydj.html');
                    }
                    if(target[0].case.options.name == "领导审批" || target[0].case.options.text == "领导审批"){
                      window.parent.parent.openTab('领导审批','/apps/kss/views/pages/jygl/ldsp.html');
                    }
                    if(target[0].case.options.name == "带出监室" || target[0].case.options.text == "带出监室"){
                        window.parent.parent.openTab('带出监室','/apps/kss/views/pages/jygl/dcjs.html');
                      }
                      if(target[0].case.options.name == "住院治疗确认" || target[0].case.options.text == "住院治疗确认" ){
                        window.parent.parent.openTab('住院治疗确认','/apps/kss/views/pages/jygl/zyzlqr.html');
                      }
                      if(target[0].case.options.name == "带入监室" || target[0].case.options.text == "带入监室"){
                        window.parent.parent.openTab('带入监室','/apps/kss/views/pages/jygl/drjs.html');
                      }
                      if(target[0].case.options.name == "治疗信息录入" || target[0].case.options.text == "治疗信息录入"){
                        window.parent.parent.openTab('治疗信息录入','/apps/kss/views/pages/jygl/zlxxlr.html');
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
            $("canvas").css("margin-left","5%")
  
          },
        

    };
    /**
     *运行入口
     */
    $(main.init);

});
