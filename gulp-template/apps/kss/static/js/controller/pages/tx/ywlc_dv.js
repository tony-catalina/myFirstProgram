
/**
 * 提讯 页面入口
 */
define(function (require) {
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
        init: function () {
            ywlcCount.init("kss_tsdj", function (data) {
               
            });
            var api = "/plugin-flowchart/scene/simulation.json";
            var firstLoadFlow = "提讯";
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
  
            ywlcCount.init("kss_tsdj", function (data) {
             console.log(data)
             let config = vEngine.helper.objectHelper.cloneDeep(flowConfig);
            console.log(config)
  
            config[0].data[0].extData.events = data.KSS_TSDJ_HDPZ;
            config[0].data[1].extData.events = data.KSS_TSDJ_TSDJ;
            config[0].data[2].extData.events = data.KSS_TSDJ_JQTRDJ;
            config[0].data[3].extData.events = data.KSS_TSDJ_AQJC;
            config[0].data[4].extData.events = data.KSS_TSDJ_TX;

             
  
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
                    if(target[0].case.options.name == "核对凭证" || target[0].case.options.text == "核对凭证"){
                      window.parent.parent.openTab('核对凭证','/apps/kss/views/pages/tx/hdpz.html');
                    }
                    if(target[0].case.options.name == "提讯登记" || target[0].case.options.text == "提讯登记"){
                      window.parent.parent.openTab('提讯登记','/apps/kss/views/pages/tx/txdj.html');
                    }
                    if(target[0].case.options.name == "监区提人登记" || target[0].case.options.text == "监区提人登记"){
                      window.parent.parent.openTab('监区提人登记','/apps/kss/views/pages/tx/jqtr.html');
                    }
                    if(target[0].case.options.name == "安全检查" || target[0].case.options.text == "安全检查"){
                      window.parent.parent.openTab('安全检查','/apps/kss/views/pages/tx/aqjc.html');
                    }
                    if(target[0].case.options.name == "退讯" || target[0].case.options.text == "退讯"){
                        window.parent.parent.openTab('退讯','/apps/kss/views/pages/tx/tx.html');
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
            $("canvas").css("margin-left","5%");
            
  
          }

        // layout: function (data) {
        //     // 布局初始化
        //     $('#Registration').html('(<font color="white">' + (data.KSS_TSDJ_TSDJ === undefined ? 0 : data.KSS_TSDJ_TSDJ) + '</font>)');
        //     $('#Supervisor').html('(<font color="white">' + (data.KSS_TSDJ_JQTRDJ === undefined ? 0 : data.KSS_TSDJ_JQTRDJ) + '</font>)');
        //     $('#securityCheck').html('(<font color="white">' + (data.KSS_TSDJ_AQJC === undefined ? 0 : data.KSS_TSDJ_AQJC) + '</font>)');
        //     $('#information').html('(<font color="white">' + (data.KSS_TSDJ_TX === undefined ? 0 : data.KSS_TSDJ_TX) + '</font>)');
        // },
        // eventBind: function () {
        //     /**
        //      * 事件绑定
        //      */
        //     $('#hdpz').on('click', function () {
        //         window.parent.parent.openTab('核对凭证', '/apps/kss/views/pages/tx/hdpz.html');
        //     });
        //     $('#txdj').on('click', function () {
        //         window.parent.parent.openTab('提讯登记', '/apps/kss/views/pages/tx/txdj.html');
        //     });
        //     $('#jqtrdj').on('click', function () {
        //         window.parent.parent.openTab('监区提人登记', '/apps/kss/views/pages/tx/jqtr.html');
        //     });
        //     $('#aqjc').on('click', function () {
        //         window.parent.parent.openTab('安全检查', '/apps/kss/views/pages/tx/aqjc.html');
        //     });
        //     $('#tx').on('click', function () {
        //         window.parent.parent.openTab('退讯', '/apps/kss/views/pages/tx/tx.html');
        //     });
        // },
        // handleInitFn2: function (data) {

        //     var mycss = {
        //         width: '36%',
        //         height: '36%',
        //     };
        //     var mycss1 = {
        //         width: '30%',
        //         height: '30%',
        //     };
        //     var yuan = {
        //         display: 'block',
        //         width: '78%',
        //         height: '96%',
        //         borderRadius: '50%',
        //         boxShadow: '0px 0px 20px 10px #ed848b',
        //     };
        //     var yuan1 = {
        //         display: 'none'
        //     };
        //     var rand = data.KSS_TSDJ_TSDJ;
        //     var rand1 = data.KSS_TSDJ_JQTRDJ;
        //     var rand2 = data.KSS_TSDJ_AQJC;
        //     var rand3 = data.KSS_TSDJ_TX;
        //     if (rand > 0) {
        //         $(".content3 .bottom-box-cent .img-box1").css("transform", "scale(1.1)");
        //         $(".content3 .bottom-box-cent .img-box1 .bot2").css('background-image', "url('../../../static/images/img1/入所登记.png')");
        //         $(".content3 .bottom-box-cent .img-box1 .bot2 .yuann").css(yuan);
        //         $(".content3 .bottom-box-cent .img-box1 .bot2 .qipao").css("display", "block");
        //     }
        //     if (rand <= 0) {
        //         $(".content3 .bottom-box-cent .img-box1").css("transform", "scale(1)");
        //         $(".content3 .bottom-box-cent .img-box1 .bot2 .yuann").css(yuan1);
        //         $(".content3 .bottom-box-cent .img-box1 .bot2").css('background-image', "url('../../../static/images/入所登记.png')");
        //         $(".content3 .bottom-box-cent .img-box1 .bot2 .qipao").css("display", "none");
        //     }
        //     if (rand1 > 0) {
        //         $(".content3 .bottom-box-cent .img-box2").css("transform", "scale(1.1)");
        //         $(".content3 .bottom-box-cent .img-box2 .cent3").css('background-image', "url('../../../static/images/img1/入所登记.png')");
        //         $(".content3 .bottom-box-cent .img-box2 .cent3 .yuann").css(yuan);
        //         $(".content3 .bottom-box-cent .img-box2 .cent3 .qipao").css("display", "block");
        //     }
        //     if (rand1 <= 0) {
        //         $(".content3 .bottom-box-cent .img-box2").css("transform", "scale(1)");
        //         $(".content3 .bottom-box-cent .img-box2 .cent3 .yuann").css(yuan1);
        //         $(".content3 .bottom-box-cent .img-box2 .cent3").css('background-image', "url('../../../static/images/入所登记.png')");
        //         $(".content3 .bottom-box-cent .img-box2 .cent3 .qipao").css("display", "none");
        //     }
        //     if (rand2 > 0) {
        //         $(".content3 .bottom-box-cent .img-box3").css("transform", "scale(1.1)");
        //         $(".content3 .bottom-box-cent .img-box3 .cent5").css('background-image', "url('../../../static/images/img1/健康检查.png')");
        //         $(".content3 .bottom-box-cent .img-box3 .cent5 .yuann").css(yuan);
        //         $(".content3 .bottom-box-cent .img-box3 .cent5 .qipao").css("display", "block");
        //     }
        //     if (rand2 <= 0) {
        //         $(".content3 .bottom-box-cent .img-box3").css("transform", "scale(1)");
        //         $(".content3 .bottom-box-cent .img-box3 .cent5 .yuann").css(yuan1);
        //         $(".content3 .bottom-box-cent .img-box3 .cent5").css('background-image', "url('../../../static/images/健康检查.png')");
        //         $(".content3 .bottom-box-cent .img-box3 .cent5 .qipao").css("display", "none");
        //     }
        //     if (rand3 > 0) {
        //         $(".content3 .bottom-box-cent .img-box4").css("transform", "scale(1.1)");
        //         $(".content3 .bottom-box-cent .img-box4 .cent5").css('background-image', "url('../../../static/images/img1/退讯.png')");
        //         $(".content3 .bottom-box-cent .img-box4 .cent5 .yuann").css(yuan);
        //         $(".content3 .bottom-box-cent .img-box4  .cent5 .qipao").css("display", "block");
        //     }
        //     if (rand3 <= 0) {
        //         $(".content3 .bottom-box-cent .img-box4").css("transform", "scale(1)");
        //         $(".content3 .bottom-box-cent .img-box4 .cent5 .yuann").css(yuan1);
        //         $(".content3 .bottom-box-cent .img-box4 .cent5").css('background-image', "url('../../../static/images/退讯.png')");
        //         $(".content3 .bottom-box-cent .img-box4  .cent5 .qipao").css("display", "none");
        //     }
        //     if (rand > 99) {
        //         $("#Registration").text("99+");
        //         $(".content3 .bottom-box-cent .img-box1 .bot2 .qipao").css(mycss);
        //     } else {
        //         $(".content3 .bottom-box-cent .img-box1 .bot2 .qipao").css(mycss1);
        //         $("#Registration").text("").append(rand);
        //     }
        //     if (rand1 > 99) {
        //         $("#Supervisor").text("99+");
        //         $(".content3 .bottom-box-cent .img-box2 .cent3 .qipao").css(mycss);
        //     } else {
        //         $(".content3 .bottom-box-cent .img-box2 .cent3 .qipao").css(mycss1);
        //         $("#Supervisor").text("").append(rand1);
        //     }
        //     if (rand2 > 99) {
        //         $("#securityCheck").text("99+");
        //         $(".content3 .bottom-box-cent .img-box3 .cent5 .qipao").css(mycss);
        //     } else {
        //         $(".content3 .bottom-box-cent .img-box3 .cent5 .qipao").css(mycss1);
        //         $("#securityCheck").text("").append(rand2);
        //     }
        //     if (rand3 > 99) {
        //         $("#information").text("99+");
        //         $(".content3 .bottom-box-cent .img-box4  .cent5 .qipao").css(mycss);
        //     } else {
        //         $(".content3 .bottom-box-cent .img-box4  .cent5 .qipao").css(mycss1);
        //         $("#information").text("").append(rand3);
        //     }

        // },
    };
    /**
     *运行入口
     */
    $(main.init);

});