/**
 * 交接班 页面入口
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
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "交接班";
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

          ywlcCount.init("kss_gwjjb", function (data) {
           console.log(data)
           let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
          console.log(config)

          config[0].data[0].extData.events = 0;
          config[0].data[1].extData.events = 0;
          config[0].data[2].extData.events = 0;

          __scene_flow.setOptions({
            series: config
        })

        });
          // console.log(flowConfig)
          vEngine.config.api.resourceRoot = "/apps/kss/static/images/"

          if (!__scene_flow) {
            __scene_flow = new vEngine.VEngine({
              width: 1628,
                    height: 904,
              edit: { enable: false }, // Ctrl + Alt + E 可以开启编辑模式
              on: {
                click: function ( target, e ) {
                  console.log(target,e)
                  if(target[0].case.options.name == "交班" || target[0].case.options.text == "交班"){
                    window.parent.parent.openTab('交班','/apps/kss/views/pages/jjb/jb.html');
                  }
                  if(target[0].case.options.name == "接班"|| target[0].case.options.text == "接班"){
                    window.parent.parent.openTab('接班','/apps/kss/views/pages/jjb/jieb.html');
                  }
                  if(target[0].case.options.name == "领导查看"|| target[0].case.options.text == "领导查看"){
                    window.parent.parent.openTab('领导查看','/apps/kss/views/pages/jjb/jbjl.html');
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
    main.init();

});