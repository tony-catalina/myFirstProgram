define(function (__r__, exports, module) {

    // 由于 seajs 的 require 方式导入的模块无法触发 IntelliSense，故将 require 定义
    // 在 window 对象上，因此模块作用域内无 require 影响，IntelliSense 将会应用 CommonJS
    // 的 require 提示，同时在前端运行时 JS 引擎会沿着作用域链查找 require。
    window.require = window.require || __r__;

    require('jquery');
    require('easyui');
    require('easyuiZh');
    require('arttemplate');

    var pageHtml = require('/apps/jds/views/pages/rcgl/xjsf/ywlc.html');
    var jxcxHtml = require('/apps/jds/views/pages/common/jxcx.html');
    var searchForm = require('/apps/jds/static/js/controller/pages/common/searchForm.js');


    // 简项查询公共页面内容渲染
    var paegOptions = {
        title: '简项查询',
        controlButtonList: [
            {
                name: '添加',
                icon: 'icon-jiahao',
                command: 'new'
            }, {
                name: '导出',
                icon: 'icon-daochu',
                command: 'print'
            }, {
                name: '历史投劳花名册',
                icon: 'icon-jiahao',
                command: 'roster'
            }
        ]
    }

    // 搜索栏部分的内容渲染
    var formOptions = {
        primary: [{
            title: '姓名',
            type: 'textbox'
        }, {
            title: '监室号',
            type: 'combotree'
        }],
        more: [
            [
                { title: '开始谈话时间', type: 'datetimebox' },
                { title: '结束谈话时间', type: 'datetimebox' },
                { title: '收押编号', type: 'textbox' },
            ], [
                { title: '谈话主题', type: 'textbox' },
                { title: '谈话内容', type: 'textbox' }
            ]
        ]
    }

    var initPage = function(el) {
        var treeMenu = el.querySelector("#jqs");
        $(treeMenu).tree({
            data:[{
                id: "1",
                text: "第一监区",
                children: [
                    {
                        id: "12", 
                        text: "第一监区"
                    },
                    {
                        id: "13",
                        text: "第一监区",
                        // children: [
                        //     {
                        //         id: "14",
                        //         text: "第一监区"
                        //     }]
                    }]
                },{
                    id: "2",
                    text: "第二监区",
                    children: [
                        {
                            id: "21", 
                            text: "第二监区"
                        },
                        {
                            id: "22",
                            text: "第二监区",
                        }]
                },
                {
                    id: "3",
                    text: "第三监区",
                    children: [
                        {
                            id: "31", 
                            text: "第三监区"
                        },
                        {
                            id: "32",
                            text: "第三监区",
                        }]
                    },
                    {
                        id: "4",
                        text: "第四监区",
                        children: [
                            {
                                id: "41", 
                                text: "第四监区"
                            },
                            {
                                id: "42",
                                text: "第四监区",
                        }]
                    },
                    {
                        id: "5",
                        text: "第五监区",
                        children: [
                            {
                                id: "51", 
                                text: "第五监区"
                            },
                            {
                                id: "52",
                                text: "第五监区",
                        }]
                    }]
        });

        // 简项查询部分整体渲染
        var jxcxTeml = template.render(jxcxHtml, paegOptions);
        el.querySelector('.title').innerHTML = jxcxTeml;

        // 渲染搜搜栏部分
        el.querySelector('.search-form-content').prepend(searchForm.render(formOptions));
    }


    exports.render = function() {
        var div = document.createElement('div');
        div.innerHTML = pageHtml;
        initPage(div)
        return div.firstElementChild;
    }

 
});
