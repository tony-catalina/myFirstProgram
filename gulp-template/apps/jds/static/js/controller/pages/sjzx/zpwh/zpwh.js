define([
    'jquery',
    'easyui',
    'easyuiZh',
    'arttemplate',
    '/apps/jds/views/pages/sjzx/zpwh/sztp.html',
    '/apps/jds/static/js/controller/pages/sjzx/zpwh/zpwhSearch.js',
    '/apps/jds/views/pages/sjzx/zpwh/zpwh.html'
], function (require, exports, module) {
    require('jquery');
    require('easyui');
    require('easyuiZh');
    require('arttemplate');

    var templ = require('/apps/jds/static/js/controller/pages/sjzx/zpwh/zpwhSearch.js');
 
    var formOptions = {
        primary:[{
            title:'姓名',
            type:'textbox'
        },{
            title:'监室号',
            type:'combotree'
        }],
        more:[
            [
                {title:'入所日期',type:'datetimebox'},
                {title:'至',type:'datetimebox'},
                // {title:'含历史人员',type:'checkbox', options:{labelPosition:'after'}},
                // {title:'未制远距卡',type:'checkbox', options:{labelPosition:'after'}},
            ],[
                {title:'不限',type:'checkbox',options:{labelPosition:'after'}},
                {title:'无照片',type:'checkbox',options:{labelPosition:'after'}},
                {title:'有照片',type:'checkbox',options:{labelPosition:'after'}},
                {title:'有但不足三张',type:'checkbox',options:{labelPosition:'after'}},
            ]
        ]
    }
    var initPageData = function (el) {
        // 数据表格部分
        var $table = $('.tmpl-table', el);
        $table.datagrid({
            method: 'get',
            url: '/mock/jds/datagrid/zpwhlist',
            // pageList: [2, 4, 6],
            // // 真正的自动展开/收缩列的大小，以适应网格的宽度，防止水平滚动。
            // rownumbers: true,
            fitColumns: true,
            pagination: true,
            rownumbers: true,
            columns: [[
                { field: 'ck', checkbox: true, width: '10px', align: 'center' },
                { field: 'id', title: '番号', hidden: true, align: 'center' },
                { field: 'name', title: '姓名', width: '10px', align: 'center' },
                { field: 'gender', title: '性别', width: '10px', align: 'center' },
                { field: 'leibie', title: '案件类别', width: '10px', align: 'center' },
                { field: 'jushiRoom', title: '戒毒室', width: '10px', align: 'center' },
                { field: 'birthTime', title: '出生日期', width: '10px', align: 'center' }
            ]],
        })
    }

    var pageOptions = {
        jxcx:{
            title:'',
            controlButtonList:[
                {
                    name: '选择图片',
                    icon: 'icon-jiahao'
                }, {
                    name: '上批图像',
                    icon: 'icon-pic'
                }, {
                    name: '下批图像',
                    icon: 'icon-pic'
                }, {
                    name: '打印',
                    icon: ''
                }, {
                    name: '退出',
                    icon: ''
                }
            ]
        }
    };

    var jxcxTemplate = require('/apps/jds/views/pages/sjzx/zpwh/sztp.html');
    var zpwhHtml = require('/apps/jds/views/pages/sjzx/zpwh/zpwh.html');

    var render = function() {
        var element = document.createElement('div');
        element.classList.add('section-container', 'qa-container');
        element.innerHTML = template.render(jxcxTemplate, pageOptions.jxcx) + zpwhHtml;
        element.querySelector(".zpContent").prepend(templ.render(formOptions));
        initPageData(element);

        return element;
    };
    exports.render = render;
});
