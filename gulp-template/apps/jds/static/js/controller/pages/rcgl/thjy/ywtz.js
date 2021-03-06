define(function (__r__, exports, module) {

    window.require = window.require || __r__;

    require('jquery');
    require('easyui');
    require('easyuiZh');
    require('arttemplate');

    // 引入此页面的布局
    var pageHtml = require('/apps/jds/views/pages/rcgl/thjy/ywtz.html');
    var searchForm = require('/apps/jds/static/js/controller/pages/common/searchForm.js');

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
        // 渲染搜搜栏部分
        element.querySelector('.search-form-content').appendChild(searchForm.render(formOptions));

      
        $.ajax({
            url:'/mock/jds/people/list',
            type:'get',
            success:function(i){
                console.log(i);

                var source = '{{each list}}<div>{{$value}}</div>{{/each}}';
                var render = template.compile(source);
                var html = render({
                    list:i
                })
                console.log(html);
            }
        })
    }

    exports.render = function () {
        var element = document.createElement('div');
        element.innerHTML = pageHtml;
        initPage(element);
        return element.firstElementChild;
    }


});