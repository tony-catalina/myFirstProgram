define(function (require) {
    require('jquery');
    require('easyui');
    require('layui');
    require('layerui');
    require('layer.config');
    var common = require('common');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var url = require('modules/url');

    var main = {
        init: function () {
            // main.loadData(1)
            main.eventBind();
            // main.loadData(1)
            // main.laypage()
        },
        eventBind: function () {
            /**事件绑定**/
            layui.use(['laypage', 'layer'], function () {
                var laypage = layui.laypage
                    , layer = layui.layer;
                // var pages = list.total;
                //调用分页
                laypage.render({
                    elem: 'test1'
                    , count: 50
                    , limit: 5
                    , curr: 1
                    , theme: '#0081C2'
                    , jump: function (obj, first) {
                        console.log(obj)
                        console.log(first)
                        if (!first) { //是否首次进入页面

                            // main.loadData(obj.curr);
                            // var currentPage = obj.curr; //获取点击的页码  
                            // page = currentPage;
                            // //点击下一页或其他页码重新请求一次，将参数（当前页码）带过去即可
                            // loadData();
                        }
                    }
                });
            })

            /**事件绑定**/
        },
        loadData: function (curr) {
            var data = [{
                title: '公告标题',
                name: '百度（纳斯达克：BIDU）是全球最大的中文搜索引擎，中国最大的以信息和知识为核心的互联网综合服务公司，全球领先的人工智能平台型公司。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。'
            }, {
                title: '公告标题',
                name: '百度（纳斯达克：BIDU）是全球最大的中文搜索引擎，中国最大的以信息和知识为核心的互联网综合服务公司，全球领先的人工智能平台型公司。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。'
            }, {
                title: '公告标题',
                name: '百度（纳斯达克：BIDU）是全球最大的中文搜索引擎，中国最大的以信息和知识为核心的互联网综合服务公司，全球领先的人工智能平台型公司。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。'
            }, {
                title: '公告标题',
                name: '百度（纳斯达克：BIDU）是全球最大的中文搜索引擎，中国最大的以信息和知识为核心的互联网综合服务公司，全球领先的人工智能平台型公司。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。'
            }, {
                title: '公告标题',
                name: '百度（纳斯达克：BIDU）是全球最大的中文搜索引擎，中国最大的以信息和知识为核心的互联网综合服务公司，全球领先的人工智能平台型公司。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。'
            }, {
                title: '公告标题',
                name: '百度（纳斯达克：BIDU）是全球最大的中文搜索引擎，中国最大的以信息和知识为核心的互联网综合服务公司，全球领先的人工智能平台型公司。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。'
            }, {
                title: '公告标题',
                name: '百度（纳斯达克：BIDU）是全球最大的中文搜索引擎，中国最大的以信息和知识为核心的互联网综合服务公司，全球领先的人工智能平台型公司。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。'
            }, {
                title: '公告标题',
                name: '百度（纳斯达克：BIDU）是全球最大的中文搜索引擎，中国最大的以信息和知识为核心的互联网综合服务公司，全球领先的人工智能平台型公司。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。'
            }, {
                title: '公告标题',
                name: '百度（纳斯达克：BIDU）是全球最大的中文搜索引擎，中国最大的以信息和知识为核心的互联网综合服务公司，全球领先的人工智能平台型公司。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。'
            }, {
                title: '公告标题',
                name: '百度（纳斯达克：BIDU）是全球最大的中文搜索引擎，中国最大的以信息和知识为核心的互联网综合服务公司，全球领先的人工智能平台型公司。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。'
            }, {
                title: '公告标题',
                name: '百度（纳斯达克：BIDU）是全球最大的中文搜索引擎，中国最大的以信息和知识为核心的互联网综合服务公司，全球领先的人工智能平台型公司。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。'
            }];
            // $.ajax({
            // type: "post",
            // url: '',
            // success: function (data) {
            var html = '';
            var list = data
            // console.log(msg)
            // var list = msg.list
            for (var i = 0; i < list.length; i++) {
                html += '<div class="ggContent">' +
                    '<h3>公告标题</h3>' +
                    '<p>百度（纳斯达克：BIDU）是全球最大的中文搜索引擎，中国最大的以信息和知识为核心的互联网综合服务公司，全球领先的人工智能平台型公司。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。' +
                    '</p>' +
                    '</div>'
            }
            $('#neironh').empty().html(html)
            main.laypage(list)
            // }
            // });
        },
        // 开启分页
        // laypage: function (list) {
        //     layui.use(['laypage', 'layer'], function () {
        //         var laypage = layui.laypage
        //             , layer = layui.layer;
        //         //调用分页
        //         laypage.render({
        //             elem: 'test1'
        //             , count: 50
        //             , limit: 5
        //             , curr: 1
        //             , jump: function (obj, first) {
        //                 console.log(obj)
        //                 console.log(first)
        //                 if (!first) { //是否首次进入页面

        //                     main.loadData(obj.curr);
        //                     // var currentPage = obj.curr; //获取点击的页码  
        //                     // page = currentPage;
        //                     // //点击下一页或其他页码重新请求一次，将参数（当前页码）带过去即可
        //                     // loadData();
        //                 }
        //             }
        //         });
        //     })
        // }






    }
    $(main.init);

})