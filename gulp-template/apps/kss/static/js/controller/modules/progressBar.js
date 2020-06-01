/**
 * 管理文书 脚本组件
 */
define(function(require) {
    require('jquery');
    require('easyui');
    require('layer.config');
    var tableUtils = require('awd/layui/table_utils');
    var progressBarTpl = require('services/com/progressBar.html');

    var main = {
        init: function(className, options) {
            var html = progressBarTpl('com/progressBar', { datas: options.data });
            document.querySelector("." + className).innerHTML = html;
            main.initEvents(className, options);

        },
        initEvents: function(className, options) {
            var parentNode = document.querySelector('.' + className);
            layui.use('element', function() {
                var element = layui.element;
                element.render('progress');
                $('.progress-bar', parentNode).each(function() {
                    var filterName = this.getAttribute('lay-filter');
                    var percentage = this.firstElementChild.getAttribute('lay-percent');
                    element.progress(filterName, percentage);
                })
            });
            // 点击事件
            document.querySelector("." + className).addEventListener('click', function(event) {
                var event = event || window.event;
                var target = event.target || event.srcElement;
                var paramsValue = target.closest('.progress-bar').dataset.params;
                if (target.closest('.progress-bar')) {
                    tableUtils.popup({
                        title: '&#xe61e;' + options.title,
                        url: options.url,
                        params: {
                            [options.paramsKey]: paramsValue
                        },
                        columns: options.columns,
						request:{
							pageName: 'page' ,//页码的参数名称，默认：page,
							limitName: 'rows' //每页数据量的参数名，默认：limit
						},
                    })
                }
            })


        },
    };
    return main;
});