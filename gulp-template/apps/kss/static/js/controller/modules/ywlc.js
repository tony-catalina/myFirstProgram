/**
 * 业务动态页面
 */
define(function(require) {
    var util = require('awd/easyui/util');
    var url = require('modules/url');
    var main = {
        init: function(flowMapKey, callback) {
            //获取流程节点代办数据
            var data = util.ajax_ReturnData({
                url: url.getFlowNodeCount,
                data: {
                    "flowNode": flowMapKey
                },
                type: "post"
            }, function(res) {
                if (res.success) {
                    callback(res.result);
                } else {
                    console.log(error);
                }
            })

        }
    }

    return main;
});