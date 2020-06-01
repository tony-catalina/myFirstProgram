define(function (__r__, exports, module) {

    window.require = window.require || __r__;

    require('jquery');
    require('easyui');
    require('easyuiZh');
    require('arttemplate');

    // 引入此页面的布局
    var pageHtml = require('/apps/jds/views/pages/rcgl/thjy/gfsm.html');
    var jxcxHtml = require('/apps/jds/views/pages/common/jxcx.html');
    var searchForm = require('/apps/jds/static/js/controller/pages/common/searchForm.js');

    // 简项查询公共页面内容渲染
    var paegOptions = {
        title: '简项查询',
        controlButtonList: [
            {
                name: '指纹',
                icon: 'icon-jiahao',
                command: 'new'
            }, {
                name: '虹膜',
                icon: 'icon-jiahao',
                command: 'homo'
            }, {
                name: '人脸',
                icon: 'icon-jiahao',
                command: 'face'
            }, {
                name: '手环',
                icon: 'icon-jiahao',
                command: 'hand'
            }, {
                name: '照片',
                icon: 'icon-jiahao',
                command: 'picture'
            }, {
                name: '照片(佳能)',
                icon: 'icon-jiahao',
                command: 'picturej'
            }, {
                name: '已采集完成',
                icon: 'icon-jiahao',
                command: 'finish'
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

    var initPage = function (element) {
        // 简项查询部分整体渲染
        var jxcxTeml = template.render(jxcxHtml, paegOptions);
        element.querySelector('.title').innerHTML = jxcxTeml;

        // var zpwhTeml = template.render(zpwhHtml);
        // element.querySelector('.zpwhg').innerHTML = zpwhTeml;

        // 渲染搜搜栏部分
        element.querySelector('.search-form-content').prepend(searchForm.render(formOptions));
    }

    exports.render = function () {
        var element = document.createElement('div');
        element.innerHTML = pageHtml;
        initPage(element);
        return element.firstElementChild;
    }


});