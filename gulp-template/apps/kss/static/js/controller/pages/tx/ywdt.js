/**
 * 业务动态 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var util = require('awd/easyui/util');
    var ywdtPage = require('services/com/txYwdtColumn.html');
    var url = require('modules/url');
    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            var options = {
                title: "临时出所--业务动态",
                formItems: {
                    itemCloumnTitle: ['律师会见室', '姓名', '开始时间'],
                    itemCloumnDatas: [
                        { hjsString: '提审室1', hsj: 0, lfrxm: '(未使用)', kssj: "未使用" },
                        { hjsString: '提审室2', hsj: 1, lfrxm: '(未使用)', kssj: "未使用" },
                        { hjsString: '提审室3', hsj: 2, lfrxm: '(未使用)', kssj: "未使用" },
                        { hjsString: '提审室4', hsj: 3, lfrxm: '(未使用)', kssj: "未使用" },
                        { hjsString: '提审室5', hsj: 4, lfrxm: '(未使用)', kssj: "未使用" }
                    ]
                }
            }
            $.ajax({
                url: url.tssListUseState,
                type: 'post',
                data: { "tss": "0,1,2,3,4" },
                success: function (res) {
                    var result = res.result.result;
                    console.log("=============" + JSON.stringify(result));
                    options.formItems.itemCloumnDatas.forEach(element => {
                        for (var index = 0; index < 5; index++) {
                            if (element.hsj == result[index].tss) {
                                Object.assign(element, result[index]);
                            }
                        }
                    });
                    console.log("====+" + JSON.stringify(options));
                    var ywdtHtml = ywdtPage('com/txYwdtColumn', options);
                    document.querySelector('.ywdt').innerHTML = ywdtHtml;
                    $.parser.parse(".ywdt");
                }
            })

            //布局初始化

            $(document).on('click', '#ywdt-btn', function () {
                $.ajax({
                    url: url.tssListUseState,
                    type: 'post',
                    data: { "tss": "0,1,2,3,4" },
                    beforeSend: function(jqXHR, setting) { //数据查询过程中
                            util.loadProgress($, true);
                    },
                    success: function (res) {
                        util.clearProgress($);
                        var result = res.result.result;
                        options.formItems.itemCloumnDatas.forEach(element => {
                            for (var index = 0; index < 5; index++) {
                                if (element.hsj == result[index].tss) {
                                    Object.assign(element, result[index]);
                                }
                            }
                        });
                        var ywdtHtml = ywdtPage('com/txYwdtColumn', options);
                        document.querySelector('.ywdt').innerHTML = ywdtHtml;
                        $.parser.parse(".ywdt");
                    }
                })
            })

        },
        eventBind: function () {
            //事件绑定
           
            
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});