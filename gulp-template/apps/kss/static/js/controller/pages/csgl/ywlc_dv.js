
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
          var api = '/plugin-flowchart/scene/simulation.json';
          var firstLoadFlow = '出所管理';
          var element = document.querySelector('#scene');

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

          ywlcCount.init('kss_csgl', function (data) {
              console.log(data)
              var config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
              console.log(config)

              config[0].data[0].extData.events = data.KSS_CSGL_CSDJ;
              config[0].data[1].extData.events = data.KSS_CSGL_SLDSP;
              config[0].data[2].extData.events = data.KSS_CSGL_WSBD;
              config[0].data[3].extData.events = data.KSS_CSGL_CS;
              config[0].data[4].extData.events = 0;
              config[0].data[5].extData.events = 0;
              config[0].data[6].extData.events = data.KSS_CSGL_FWTH;

              __scene_flow.setOptions({
                    series: config
              });

          });

          vEngine.config.api.resourceRoot = '/apps/kss/static/images/';


          
          if (!__scene_flow) {
            __scene_flow = new vEngine.VEngine({
              width: 1764,
              height: 856,
              edit: { enable: false }, // Ctrl + Alt + E 可以开启编辑模式
              on: {
                click: function ( target, e ) {
                  console.log(target,e)
                  if(target[0].case.options.name == '出所登记' || target[0].case.options.text == "出所登记"){
                    window.parent.parent.openTab('出所登记','/apps/kss/views/pages/csgl/csdj.html');
                  }
                  if(target[0].case.options.name == '今日出所' || target[0].case.options.text == "今日出所"){
                    window.parent.parent.openTab('今日出所','/apps/kss/views/pages/csgl/jrcs.html');
                  }
                  if(target[0].case.options.name == '所领导审批' || target[0].case.options.text == "所领导审批"){
                    window.parent.parent.openTab('所领导审批','/apps/kss/views/pages/csgl/ldsp.html');
                  }
                  if(target[0].case.options.name == '文书补打' || target[0].case.options.text == "文书补打"){
                    window.parent.parent.openTab('文书补打','/apps/kss/views/pages/csgl/lcwsbd.html');
                  }
                  if(target[0].case.options.name == '出所' || target[0].case.options.text == "出所"){
                    window.parent.parent.openTab('出所','/apps/kss/views/pages/csgl/cs.html');
                  }
                  if(target[0].case.options.name == '出所通知' || target[0].case.options.text == "出所通知"){
                    window.parent.parent.openTab('出所通知','/apps/kss/views/pages/csgl/cstz.html');
                  }
                  if(target[0].case.options.name == '附物/财务退还' || target[0].case.options.text == "附物/财务退还"){
                    window.parent.parent.openTab('附物/财物退还','/apps/kss/views/pages/csgl/fwth.html');
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
          // $('canvas').css('height','750px')

        }
        
        
    };
    /**
     *运行入口
     */
      $(main.init);
});