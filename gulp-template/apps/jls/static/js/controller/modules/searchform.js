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
    var main = {
        /**
         * 流程部分的搜索栏渲染
         * @param {htmlElement} id 渲染部分的id名
         * @param {object} option  传过来的参数
         */
        // 入所部分，传值
        init: function(id, option) {
            var formhtml = search('com/search', option.pageRender);
            $('#' + id).html(formhtml);
            $.parser.parse('#' + id);
            combox.initBySelect('#' + id + ' .easyui-awdCombox');
            combotree.initBySelect('#' + id + ' .easyui-awdCombotree')
            main.bindEvent(id, option);
        },
        /**
         * 流程节点部分的搜索栏渲染
         * @param {htmlElement} id 渲染部分的id名
         * @param {object} option  传过来的参数
         */
        initLc: function(id, option) {
            // 默认的查询条件
            var defaultJsPage = {
                primary: [{
                    name: 'jsh',
                    title: '拘室号',
                    type: 'awdCombotree',
                    url: url.jsComboxTree
                }, {
                    name: 'xm',
                    title: '姓名',
                    type: 'textbox'
                }],
                more: [
                    [
                        { name: 'ay', title: '案别', type: 'awdCombox', url: url.getDictionary + '?node=JLSAJLB' },
                        { name: 'rsrqStart', title: '入所日期', type: 'datebox' },
                        { name: 'rsrqEnd', title: '至', type: 'datebox' },
                        { name: 'xb', title: '性别', type: 'awdCombox', url: url.getDictionary + '?node=XB' }
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
         * @param {htmlElement} id 渲染部分的id名
         * @param {object} option  传过来的参数
         */
        initYwtz: function(id, option) {
            // 默认的查询条件
            var defaultJsPage = {
                primary: [{
                    name: 'jbxx_jsh',
                    title: '拘室号',
                    type: 'awdCombotree',
                    url: url.jsComboxTree
                }, {
                    name: 'jbxx_xm',
                    title: '姓名',
                    type: 'textbox'
                }],
                more: [
                    [
                        { name: 'jbxx_rsrqStart', title: '入所日期', type: 'datebox' },
                        { name: 'jbxx_rsrqEnd', title: '至', type: 'datebox' },
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
        getData: function(id) {
            return util.form2Json(id);
        },
        bindEvent: function(id, option) {
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