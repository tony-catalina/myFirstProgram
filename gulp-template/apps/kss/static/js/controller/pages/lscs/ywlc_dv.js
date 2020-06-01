
/**
 * 临时出所 页面入口
 */
define(function (require) {
  //公共控件、组件、工具导入
  require('jquery');
  require('stats');
  var vEngine = require('vEngine');
  var ywlcCount = require('modules/ywlc');
  var __scene_flow;
  //获取流程节点代办数据

  /**
   * 界面控件
   */
  var main = {
    init: function () {
      var api = "/plugin-flowchart/scene/simulation.json";
      var firstLoadFlow = "临时出所";
      var element = document.querySelector("#scene");

      main.generalScene(element, api, main.findConfigByFlowName(firstLoadFlow));
    },
    findConfigByFlowName: function (flowName) {
      var target = null;
      vEngine.config.flows.forEach(function (item) {
        if (vEngine.helper.stringHelper.trim(item.name) === vEngine.helper.stringHelper.trim(flowName)) target = item.config
      });
      console.log(target)
      return target;
    },
    generalScene: function (element, api, flowConfig) {

      ywlcCount.init("kss_lscs", function (data) {
        console.log(data)
        let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
        console.log(config)

        config[0].data[0].extData.events = data.KSS_LSCS_CSDJ;
        config[0].data[1].extData.events = data.KSS_LSCS_LDSP;
        config[0].data[2].extData.events = data.KSS_LSCS_CS;
        config[0].data[3].extData.events = data.KSS_LSCS_HSQR;


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
            click: function (target, e) {
              console.log(target, e)
              if (target[0].case.options.name == "临时出所登记" || target[0].case.options.text == "临时出所登记") {
                window.parent.parent.openTab('临时出所登记', '/apps/kss/views/pages/lscs/csdj.html');
              }
              if (target[0].case.options.name == "出所" || target[0].case.options.text == "出所") {
                window.parent.parent.openTab('出所', '/apps/kss/views/pages/lscs/cs.html');
              }
              if (target[0].case.options.name == "领导审批" || target[0].case.options.text == "领导审批") {
                window.parent.parent.openTab('领导审批', '/apps/kss/views/pages/lscs/ldsp.html');
              }
              if (target[0].case.options.name == "回所确认" || target[0].case.options.text == "回所确认") {
                window.parent.parent.openTab('回所确认', '/apps/kss/views/pages/lscs/hsqr.html');
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
      $('canvas').css('margin-left','5%')
    }
  };
  /**
   *运行入口
   */
  $(main.init);

});