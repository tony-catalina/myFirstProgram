define([
    'jquery',
    'easyui',
    'easyuiZh',
    'arttemplate',
    '/apps/jds/views/pages/common/jxcx.html',
    '/apps/jds/views/pages/common/zpwh.html',
    '/apps/jds/static/js/controller/pages/common/searchForm.js',
    '/apps/jds/static/js/controller/pages/common/dialog.js'
], function (require, exports, module) {
    require('jquery');
    require('easyui');
    require('easyuiZh');
    require('arttemplate');
    var searchForm = require('/apps/jds/static/js/controller/pages/common/searchForm.js');
    var dialogForm = require('/apps/jds/static/js/controller/pages/common/dialog.js');
    // 搜索栏部分的内容
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
                { title: '负责人', type: "textbox" },
            ], [
                { title: '谈话主题', type: 'textbox' },
                { title: '谈话内容', type: 'textbox' }
            ]
        ]
    }

    var pageOptions = {
        jxcx: {
            title: '简项查询',
            controlButtonList: [
                {
                    name: '指纹',
                    icon: 'icon-jiahao',
                    command: 'add-fingerprint'
                }, {
                    name: '虹膜',
                    icon: 'icon-jiahao',
                    command: 'add-iris'
                }, {
                    name: '人脸',
                    icon: 'icon-jiahao',
                    command: 'add-face'
                }, {
                    name: '新建',
                    icon: 'icon-jiahao',
                    command: 'new'
                }, {
                    name: '打印',
                    icon: 'icon-iconSVG-',
                    command: 'print'
                }, {
                    name: '导出',
                    icon: 'icon-daochu',
                    command: 'export'
                }
            ]
        }
    };
    var commandHandler = {
        'add-fingerprint': function () {
            alert("指纹");
        },
        'add-iris': function () {
            alert("虹膜");
        },
        'add-face': function () {
            alert("脸");
        },
        'new': function (el) {
            var dialogOptions = {
                title:'新建',
                styles:'width:60%',
                dialogOptions:"  modal:true,closed:true",
                content:[
                    {
                        title:"姓名",
                        type:'textbox',
                        inputOptions:{}
                    },
                    {
                        title:"性别",
                        type:'textbox',
                        inputOptions:{}
                    },
                    {
                        title:"别名",
                        type:'textbox',
                        inputOptions:{}
                    },
                    {
                        title:"监视号",
                        type:'combotree',
                        inputOptions:{}
                    },
                    {
                        title:"入所时间",
                        type:'datetimebox',
                        inputOptions:{}
                    },
                    {
                        title:"入所原因",
                        type:"textbox",
                        inputOptions:{}
                    },
                    {
                        title:"办案单位",
                        type:"textbox",
                        inputOptions:{}
                    },
                    {
                        title:"戒毒期限",
                        type:"textbox",
                        inputOptions:{}
                    },
                    {
                        title:"决定机关",
                        type:"textbox",
                        inputOptions:{}
                    },
                    {
                        title:"入所文件",
                        type:"textbox",
                        inputOptions:{}
                    },
                    {
                        title:"戒毒起始日期",
                        type:"datetimebox",
                        inputOptions:{}
                    },
                    {
                        title:"戒毒截至日期",
                        type:"datetimebox",
                        inputOptions:{}
                    }
                ]

            };
            // $('#win').window('destory');
            el.appendChild(dialogForm.render(dialogOptions));
            $.parser.parse(el);
            $('#win').window('open');
        
        },
        'print': function () {
            alert("打印");
        },
        'export': function () {
            alert("导入");
        },
    }

    var jxcxTemplate = require('/apps/jds/views/pages/common/jxcx.html');
    var zpwhHtml = require('/apps/jds/views/pages/common/zpwh.html');

    var initPageData = function (el) {
        // 数据表格部分
        var $table = $('.tmpl-table', el);
        $table.datagrid({
            url: '/mock/jds/datagrid/list',
            method: 'get',

            // 此处 fitColumns 可能会导致 easyui 的 datagrid 出现 bug，导致 .font-18 类名添加上一个样式 width: 116px
            // 此样式是通过 CSSRules 动态添加到 DOM 上的，不启用 fitColumns 或修复 easyui 的源码可解决此问题。
            fitColumns: true,

            pagination: true,
            rownumbers: true,
            columns: [[
                { field: 'ck', title: '', checkbox: true, width: '3%' },
                { field: 'name', title: '姓名', width: '15%' },
                { field: 'age', title: '年龄', width: "7%", },
                { field: 'firstTalkingTime', title: '首次谈话时间', width: "20%", },
                { field: 'personInCharge', title: '负责人', width: "13%" },
                { field: 'title', title: '谈话主题', width: "20%", },
                { field: 'content', title: '谈话内容', width: "20%", }
            ]],
        });


        // 照片维护部分
        var zpwh = $('.zpwh', el);
        var buttonTitle = $('.section-title', zpwh);
        buttonTitle.on('click', 'a', function (e) {
            $(this).addClass('active').siblings().removeClass('active');
            $('.' + this.id + '-content').addClass('show').siblings().removeClass('show');
            $table.eq(1).datagrid();
        })



    }


    var initPageEvents = function (el) {
        // 清空dialog-form
        var dialogForm = el.querySelector('.dialog-form');

        $('.section-controls', el).on('click', 'button', function () {
            var command = this.dataset.command;
            commandHandler[command](dialogForm);
        })



    }

    var render = function () {
        var element = document.createElement('div');
        element.classList.add('section-container', 'qa-container');
        element.innerHTML = template.render(jxcxTemplate, pageOptions.jxcx) + zpwhHtml;
        element.querySelector(".section-content").prepend(searchForm.render(formOptions));
        // 添加diglog div
        var dialogElement = document.createElement('div');
        dialogElement.className = 'dialog-form';
        element.appendChild(dialogElement);
        initPageEvents(element);

        return element;
    };

    var onTabMounted = function (element) {
        initPageData(element);
    };

    return {
        render: render,
        onTabMounted: onTabMounted
    };
});
