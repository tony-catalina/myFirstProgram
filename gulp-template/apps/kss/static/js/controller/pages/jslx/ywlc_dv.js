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
            ywlcCount.init("kss_jslx", function(data) {
                // main.layout(data);
                // main.eventBind(data);
            });
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "家属联系";
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

            ywlcCount.init("kss_jslx", function (data) {
             console.log(data)
             let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
            console.log(config,111)
           // dataCx.KSS_EMCX_SZYJ
             config[0].data[0].extData.events = data.KSS_JSLX_SQLX;
             config[0].data[1].extData.events = data.KSS_JSLX_ZDZSP;
             config[0].data[2].extData.events = data.KSS_JSLX_SZSP;
             config[0].data[3].extData.events = data.KSS_JSLX_JDMJLX;
            
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
                    if(target[0].case.options.name == "申请联系" || target[0].case.options.text == "申请联系"){
                      window.parent.parent.openTab('申请联系','/apps/kss/views/pages/jslx/sqlx.html');
                    }
                    if(target[0].case.options.name == "中队长审批" || target[0].case.options.text == "中队长审批"){
                      window.parent.parent.openTab('中队长审批','/apps/kss/views/pages/jslx/zdzsp.html');
                    }
                    if(target[0].case.options.name == "领导审批" || target[0].case.options.text == "领导审批"){
                        window.parent.parent.openTab('领导审批','/apps/kss/views/pages/jslx/ldsp.html');
                      }
                      if(target[0].case.options.name == "接待民警联系" || target[0].case.options.text == "接待民警联系"){
                        window.parent.parent.openTab('接待民警联系','/apps/kss/views/pages/jslx/jdmjlx.html');
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
            $("canvas").css("height","750px")
  
          },
        // layout: function(data) {
        //     // 布局初始化
        //     $('#zdzspNum').html('中队长审批(<font color="red">' + (data.KSS_JSLX_ZDZSP == undefined ?"0":data.KSS_JSLX_ZDZSP) + '</font>)');
        //     $('#ldsplNum').html('领导审批(<font color="red">' + (data.KSS_JSLX_SZSP == undefined ? "0":data.KSS_JSLX_SZSP) + '</font>)');
        //     $('#jdmjlxNum').html('接待民警联系(<font color="red">' + (data.KSS_JSLX_JDMJLX == undefined ? "0":data.KSS_JSLX_JDMJLX) + '</font>)');
        // },


        // eventBind: function() {
        //     /**
        //      * 事件绑定
        //      */
        //     $('#sqxl').on('click',function(){
        //         window.parent.parent.openTab('申请联系','/apps/kss/views/pages/jslx/sqlx.html');

        //     });
        //     $('#zdzsp').on('click',function(){
        //         window.parent.parent.openTab('中队长审批','/apps/kss/views/pages/jslx/zdzsp.html');
        //     });

        //     $('#ldsp').on('click',function(){
        //         window.parent.parent.openTab('领导审批','/apps/kss/views/pages/jslx/ldsp.html');
        //     });

        //     $('#jdmjlx').on('click',function(){
        //         window.parent.parent.openTab('接待民警联系','/apps/kss/views/pages/jslx/jdmjlx.html');
        //     });


        // }


    };
    /**
     *运行入口
     */
    $(main.init);

});
