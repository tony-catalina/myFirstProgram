/**
 * 收押入所 页面入口
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
            ywlcCount.init("kss_jjx", function(data) {
                // main.layout(data);
                // main.eventBind(data);
            });
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "加减刑";
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

            ywlcCount.init("kss_jjx", function (data) {
             console.log(data)
             let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
            console.log(config,111)
           // dataCx.KSS_EMCX_SZYJ
             config[0].data[0].extData.events = data.KSS_JJX_BL;
             config[0].data[1].extData.events = data.KSS_JJX_LDSP;
            
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
                    if(target[0].case.options.name == "加减刑申请"||target[0].case.options.text == "加减刑申请"){
                      window.parent.parent.openTab('加减刑申请','/apps/kss/views/pages/jjx/jjxsq.html');
                    }
                    if(target[0].case.options.name == "领导审批"||target[0].case.options.text == "领导审批"){
                      window.parent.parent.openTab('领导审批','/apps/kss/views/pages/jjx/ldsp.html');
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
        //     $('#jjxsqNum').html('加减刑申请');
        //     $('#ldspNum').html('领导审批(<font color="red">' + (data.KSS_JJX_LDSP === undefined ? "0" : data.KSS_JJX_LDSP) + '</font>)');
        // },
        // eventBind: function() {
        //     /**
        //      * 事件绑定
        //      */
        //     $('#jjxsq').on('click',function(){
        //         window.parent.parent.openTab('加减刑申请','/apps/kss/views/pages/jjx/jjxsq.html');
        //     });
        //     $('#ldsq').on('click',function(){
        //         window.parent.parent.openTab('领导审批','/apps/kss/views/pages/jjx/ldsp.html');
        //     });
        // }
    };
    /**
     *运行入口
     */
    $(main.init);

});