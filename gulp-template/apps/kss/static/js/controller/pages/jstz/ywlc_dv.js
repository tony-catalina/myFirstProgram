
// /**
//  * 监室调整 页面入口
//  */
// define(function(require) {
//     //公共控件、组件、工具导入
//     require('jquery');
//     var ywlcCount = require('modules/ywlc');
//     //获取流程节点代办数据

//     /**
//      * 界面控件
//      */
//     var main = {
//         init: function() {
//             ywlcCount.init("kss_jstz", function(data) {
//                 console.log(data,5)
//                 main.layout(data);
//                 main.eventBind(data);
//                 main.handleInitFn(data);
//             });
//         },
//         layout: function(data) {
//             // 布局初始化 
//           console.log(data.KSS_JSTZ_ZDJZYJ,8)

//            $('#opinion').html('<font color="white">' +(data.KSS_JSTZ_ZDZYJ===undefined?"0":data.KSS_JSTZ_ZDZYJ) + '</font>');
//            $('#Determination').html('<font color="white">' +(data.KSS_JSTZ_TZQR===undefined?"0":data.KSS_JSTZ_TZQR) + '</font>');
//            $('#Leader').html('<font color="white">' +(data.KSS_JSTZ_LDSP===undefined?"0":data.KSS_JSTZ_LDSP) + '</font>)');
          
                 
//         },
//         eventBind: function() {
//             /**
//              * 事件绑定
//              */
//             $('#jstzdj').on('click',function(){
//                 window.parent.parent.openTab('监室调整登记','/apps/kss/views/pages/jstz/jstzdj.html');
//             });
//             $('#zdjsyj').on('click',function(){
//                 window.parent.parent.openTab('中队/警署意见','/apps/kss/views/pages/jstz/zdjzyj.html');
//             });
//             $('#jstzqd').on('click',function(){
//                 window.parent.parent.openTab('监室调整确定','/apps/kss/views/pages/jstz/tzqr.html');
//             });
//             $('#ldsp').on('click',function(){
//                 window.parent.parent.openTab('领导审批','/apps/kss/views/pages/jstz/ldsp.html');
//             });
//             $('#mddy').on('click',function(){
//                 window.parent.parent.openTab('名单打印','/apps/kss/views/pages/jstz/mddy.html');
//             });
//             $('#zxgsz').on('click',function(){
//                 window.parent.parent.openTab('主协管设置','/apps/kss/views/pages/jstz/zxgsz.html');
//             });
//         },
//         handleInitFn :function(data){
           
//               var mycss = {
//                 width: '36%',
//                 height:'36%',
//               };
//               var mycss1 = {
//                 width: '30%',
//                 height:'30%',
//               };
//               var yuan={
//                 display:'block',
//                 width: '78%',
//                 height: '96%',
//                 borderRadius:'50%',
//                 boxShadow: '0px 0px 20px 10px #ed848b',
//               };
//               var yuan1={
//                 display:'none'
//               };
//               var rand = data.KSS_JSTZ_ZDZYJ;
//               var rand1 = data.KSS_JSTZ_TZQR;
//               var rand2 = data.KSS_JSTZ_LDSP;
//               console.log(rand,9)
//               if (rand>0){
//                 $(".content4 .bottom-box-top .img-box").css("transform","scale(1.1)");
//                 $(".content4 .bottom-box-top .img-box .today").css('background-image',"url('../../../static/images/img1/所领导意见.png')");
//                 $(".content4 .bottom-box-top .img-box .today .yuann").css(yuan);
//                 $(".content4 .bottom-box-top .img-box .today .qipao").css("display","block");
//               }
//               if (rand<=0){
//                 $(".content4 .bottom-box-top .img-box").css("transform","scale(1)");
//                 $(".content4 .bottom-box-top .img-box .today .yuann").css(yuan1);
//                 $(".content4 .bottom-box-top .img-box .today").css('background-image',"url('../../../static/images/所领导意见.png')");
//                 $(".content4 .bottom-box-top .img-box .today .qipao").css("display","none");
//               }
//               if (rand1>0){
//                 $(".content4 .bottom-box-cent .img-box1").css("transform","scale(1.1)");
//                 $(".content4 .bottom-box-cent .img-box1 .bot2").css('background-image',"url('../../../static/images/img1/所领导意见.png')");
//                 $(".content4 .bottom-box-cent .img-box1 .bot2 .yuann").css(yuan);
//                 $(".content4 .bottom-box-cent .img-box1 .bot2 .qipao").css("display","block");
//               }
//               if (rand1<=0){
//                 $(".content4 .bottom-box-cent .img-box1").css("transform","scale(1)");
//                 $(".content4 .bottom-box-cent .img-box1 .bot2 .yuann").css(yuan1);
//                 $(".content4 .bottom-box-cent .img-box1 .bot2").css('background-image',"url('../../../static/images/所领导意见.png')");
//                 $(".content4 .bottom-box-cent .img-box1 .bot2 .qipao").css("display","none");
//               }
//               if (rand2>0){
//                 $(".content4 .bottom-box-cent .img-box2").css("transform","scale(1.1)");
//                 $(".content4 .bottom-box-cent .img-box2 .cent3").css('background-image',"url('../../../static/images/img1/所领导意见.png')");
//                 $(".content4 .bottom-box-cent .img-box2 .cent3 .yuann").css(yuan);
//                 $(".content4 .bottom-box-cent .img-box2 .cent3 .qipao").css("display","block");
//               }
//               if (rand2<=0){
//                 $(".content4 .bottom-box-cent .img-box2").css("transform","scale(1)");
//                 $(".content4 .bottom-box-cent .img-box2 .cent3 .yuann").css(yuan1);
//                 $(".content4 .bottom-box-cent .img-box2 .cent3").css('background-image',"url('../../../static/images/所领导意见.png')");
//                 $(".content4 .bottom-box-cent .img-box2 .cent3 .qipao").css("display","none");
//               }
//               if (rand>99){
//                 $("#opinion").text("99+");
//                 $(".content4 .bottom-box-top .img-box .today .qipao").css(mycss);
//               }else {
//                 $(".content4 .bottom-box-top .img-box .today .qipao").css(mycss1);
//                 $("#opinion").text("").append(rand);
//               }
//               if (rand1>99){
//                 $("#Determination").text("99+");
//                 $(".content4 .bottom-box-cent .img-box1 .bot2 .qipao").css(mycss);
//               }else {
//                 $(".content4 .bottom-box-cent .img-box1 .bot2 .qipao").css(mycss1);
//                 $("#Determination").text("").append(rand1);
//               }
//               if (rand2>99){
//                 $("#Leader").text("99+");
//                 $(".content4 .bottom-box-cent .img-box2 .cent3 .qipao").css(mycss);
//               } else {
//                 $(".content4 .bottom-box-cent .img-box2 .cent3 .qipao").css(mycss1);
//                 $("#Leader").text("").append(rand2);
//               }
          
//           }
//     };
//     /**
//      *运行入口
//      */
//     $(main.init);

// });

/**
 * 自备药品申请 页面入口
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
      ywlcCount.init("kss_jstz", function (data) {
        // main.layout(data);
      });
      var api = "/plugin-flowchart/scene/simulation.json";
      var firstLoadFlow = "监控调整";
      var element = document.querySelector("#scene");

      main.generalScene(element, api, main.findConfigByFlowName(firstLoadFlow));
    },
    
    findConfigByFlowName: function (flowName) {
      var target = null;
      vEngine.config.flows.forEach(function (item) {
        if (vEngine.helper.stringHelper.trim(item.name) === vEngine.helper.stringHelper.trim(flowName)) target = item.config
      });
      console.log(target,7777)
      return target;
    },
    generalScene: function (element, api, flowConfig) {

      ywlcCount.init("kss_jstz", function (data) {
        console.log(data,8888)
        let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
        console.log(config,9999)

        config[0].data[0].extData.events = data.KSS_JSTZ_JSTZ;
        config[0].data[1].extData.events = data.KSS_JSTZ_ZDZYJ;
        config[0].data[2].extData.events = data.KSS_JSTZ_LDSP;
        config[0].data[3].extData.events = 0;
        config[0].data[4].extData.events = data.KSS_JSTZ_TZQR;
        config[0].data[5].extData.events = 0;


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
              if (target[0].case.options.name == "监室调整登记" || target[0].case.options.text == "监室调整登记") {
                window.parent.parent.openTab('监室调整登记', '/apps/kss/views/pages/jstz/jstzdj.html');
              }
              if (target[0].case.options.name == "中队/警署意见" || target[0].case.options.text == "中队/警署意见") {
                window.parent.parent.openTab('中队/警署意见', '/apps/kss/views/pages/jstz/zdjzyj.html');
              }
              if (target[0].case.options.name == "监室调整确定" || target[0].case.options.text == "监室调整确定") {
                window.parent.parent.openTab('监室调整确定', '/apps/kss/views/pages/jstz/tzqr.html');
              }
              if (target[0].case.options.name == "领导审批" || target[0].case.options.text == "领导审批") {
                window.parent.parent.openTab('领导审批', '/apps/kss/views/pages/jstz/ldsp.html');
              }
              if (target[0].case.options.name == "名单打印" || target[0].case.options.text == "名单打印") {
                  window.parent.parent.openTab('名单打印', '/apps/kss/views/pages/jstz/mddy.html');
              }
              if (target[0].case.options.name == "主协管设置" || target[0].case.options.text == "主协管设置") {
                  window.parent.parent.openTab('主协管设置', '/apps/kss/views/pages/jstz/zxgsz.html');
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
      

    }
  };
  /**
   *运行入口
   */
  $(main.init);

});