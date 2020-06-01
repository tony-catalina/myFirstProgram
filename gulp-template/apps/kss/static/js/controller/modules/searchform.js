/**
 * 搜索栏
 */
define(function(require) {
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var combox = require('awd/easyui/combox');
    var combotree = require('awd/easyui/comboxtree');
    var search = require('services/com/search.html');
    var url = require('modules/url');
    var cycles = 1;
    // var grid = require('awd/easyui/grid');
    var main = {
        /**
         * 表单构造选项
         * @typedef {Object} SearchFormOptions
         * @property {boolean} primary 是否为主要内容，即第一行始终存在的内容
         */
        /**
         * 流程部分的搜索栏渲染
         * @param {HTMLElement} id 渲染部分的id名
         * @param {SearchFormOptions} option  传过来的参数
         */
        init: function(id, option) {
            var defaultJqPage = {
                primary: [{
                    name: 'jsh',
                    title: '监室号',
                    type: 'awdCombotree',
                    url: url.getJqCombotree
                }, {
                    name: 'xm_like',
                    title: '姓名',
                    type: 'textbox'
                }],
                more: [
                    [
                        { name: 'gyqx_start', title: '关押期限', type: 'datebox' },
                        { name: 'gyqx_end', title: '至', type: 'datebox' },
                        { name: 'xb', title: '性别', type: 'awdCombox', url: url.getDictionary + '?node=XB' }
                    ],
                    [
                        { name: 'bahj', title: '办案环节', type: 'awdCombox', url: url.getDictionary + '?node=BAJD' },
                        { name: 'rsrq_start', title: '入所日期', type: 'datebox' },
                        { name: 'rsrq_end', title: '至', type: 'datebox' }
                    ]
                ]
            }

            var pageOptions = option.pageRender === undefined ? defaultJqPage : option.pageRender;
            if (!tools.isUndefined(option.primary) || !tools.isUndefined(option.more)) {
                pageOptions = option;
            }
            var formhtml = search('com/search', pageOptions);
            $('#' + id).html(formhtml);
            $.parser.parse('#' + id);
            combox.initBySelect('#' + id + ' .easyui-awdCombox');
            combotree.initBySelect('#' + id + ' .easyui-awdCombotree')
            main.bindEvent(id, option);
        },
        /**
         * 业务台账部分的搜索栏渲染
         * @param {HTMLElement} id 渲染部分的id名
         * @param {object} option  传过来的参数
         */
        initYwtz: function(id, option) {
            // 默认的查询条件
            var defaultJsPage = {
                primary: [{
                    name: 'jsh',
                    title: '监室号',
                    type: 'awdCombotree',
                    url: url.getJqCombotree
                }, {
                    name: 'xm_like',
                    title: '姓名',
                    type: 'textbox'
                }],
                more: [
                    [
                        { name: 'blrqstart', title: '办理日期', type: 'datebox' },
                        { name: 'blrqend', title: '至', type: 'datebox' },
                    ]
                ]
            }
            var pageOptions = option.pageRender === undefined ? defaultJsPage : option.pageRender;
            var formhtml = search('com/search', pageOptions);
            $('#' + id).html(formhtml);
            $.parser.parse('#' + id);
            combox.initBySelect('#' + id + ' .easyui-awdCombox');
            combotree.initBySelect('#' + id + ' .easyui-awdCombotree')
            main.bindEvent(id, option);
        },
        /**
         * 文书部分的搜索栏渲染
         * @param {HTMLElement} id 渲染部分的id名
         * @param {object} option  传过来的参数
         */
        initWsbd: function(id, option) {
            // 默认的查询条件
            var defaultJsPage = {
                primary: [{
                    name: 'jsh',
                    title: '监室号',
                    type: 'awdCombotree',
                    url: url.getJqCombotree
                }, {
                    name: 'xm',
                    title: '姓名',
                    type: 'textbox'
                }],
                more: [
                    [
                        { name: 'xb', title: '性别', type: 'awdCombox', url: url.getDictionary + '?node=XB' },
                        { name: 'gyqx_start', title: '关押期限', type: 'datebox' },
                        { name: 'gyqx_end', title: '至', type: 'datebox' },
                    ]
                ]
            }
            var pageOptions = option.pageRender === undefined ? defaultJsPage : option.pageRender;
            var formhtml = search('com/search', pageOptions);
            $('#' + id).html(formhtml);
            $.parser.parse('#' + id);
            combox.initBySelect('#' + id + ' .easyui-awdCombox');
            combotree.initBySelect('#' + id + ' .easyui-awdCombotree');
            main.bindEvent(id, option);
        },
        getData: function(id) {
            return util.form2Json(id);
        },
        bindEvent: function(id, option) {
            // 监听键盘查询事件

            document.addEventListener('keydown', function(event) {
                if (event.keyCode == 13) {
                    option.query(main.getData('search'));
                }
            })

            var el = document.getElementById(id);
            $('#query').on('click', function() {
                if (tools.isFunction(option.query)) {
                    option.query(main.getData('search'));
                }
            });

            $('#reset').on('click', function() {
                cycles++;
                var iconRotate = this.firstElementChild;
                iconRotate.style.transform = 'rotate(' + (cycles * 360) + 'deg)';
                $('#' + id).form('clear');
                option.query(main.getData('search'));
            });

            $('#more').on('click', function() {
                var iconRotate = this.firstElementChild;
                iconRotate.classList.toggle('icon-rotate-90');
                var el = $('#' + id);
                el.find(".search-more").slideToggle();
                if (!this.dataset.parsed) {
                    this.dataset.parsed = true;
                    $.parser.parse($('.search-more', el));
                }

            });
        }
    };
    return main;

});