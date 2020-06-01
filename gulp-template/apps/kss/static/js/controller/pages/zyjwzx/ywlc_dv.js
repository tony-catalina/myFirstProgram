
/**
 * 收押入所 页面入口
 */
define(function(require) {
   //公共控件、组件、工具导入
   require('stats');
   var vEngine=require('vEngine');
   require('jquery');
   var ywlcCount = require('modules/ywlc');
   //获取流程节点代办数据
   var __scene_flow;
    var main = {
        init: function() {
            ywlcCount.init("kss_jwzx", function(data) {
                var api = "/plugin-flowchart/scene/simulation.json";
                var firstLoadFlow = "暂予监外执行";
                var element = document.querySelector("#scene");
      
                main.generalScene(element, api, main.findConfigByFlowName(firstLoadFlow));
            });
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

            ywlcCount.init("kss_jwzx", function (data) {
             console.log(data);
             let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
             console.log(9999999999);
            console.log(config);
  
            config[0].data[0].extData.events = data.KSS_JWZX_JWZXSQ;
            config[0].data[1].extData.events = data.KSS_JWZX_SWHYJ;
            config[0].data[2].extData.events = data.KSS_JWZX_JD;
            config[0].data[3].extData.events = data.KSS_JWZX_SCDB;
            config[0].data[4].extData.events = data.KSS_JWZX_CS;
  
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
                    console.log('999999');
                    console.log(target);
                    if(target[0].case.options.name == "申请" || target[0].case.options.text == "申请"){
                      window.parent.parent.openTab('申请','/apps/kss/views/pages/zyjwzx/sq.html');
                    }
                    if(target[0].case.options.name == "所务会意见" || target[0].case.options.text == "所务会意见"){
                      window.parent.parent.openTab('所务会意见','/apps/kss/views/pages/zyjwzx/swhyyj.html');
                    }
                    if(target[0].case.options.name == "鉴定" || target[0].case.options.text == "鉴定"){
                      window.parent.parent.openTab('鉴定','/apps/kss/views/pages/zyjwzx/jd.html');
                    }
                    if(target[0].case.options.name == "审查担保" || target[0].case.options.text == "审查担保"){
                      window.parent.parent.openTab('审查担保','/apps/kss/views/pages/zyjwzx/scdb.html');
                    }
                    if(target[0].case.options.name == "出所" || target[0].case.options.text == "出所"){
                      window.parent.parent.openTab('出所','/apps/kss/views/pages/zyjwzx/cs.html');
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
  
          }
        
    };
    /**
     *运行入口
     */
    $(main.init);

});