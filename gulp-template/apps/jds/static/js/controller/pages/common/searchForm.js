define([
    'jquery',
    'easyui',
    'easyuiZh',
    'uikit',
    'arttemplate',
    '/apps/jds/views/pages/common/searchForm.html'
], function (require, exports, module) {
    require('jquery');
    require('easyui');
    require('easyuiZh');
    require('uikit');
    require('arttemplate');
    var cycles = 0;

    var formTemplate = require('/apps/jds/views/pages/common/searchForm.html');

    var initEvents = function (el) {
        // 查询栏部分
        var group = el.querySelector(".button-group");

        group.querySelector('.search-btn').addEventListener('click', function (e) {
            $.ajax({
                url: '/mock/jds/datagrid/list',
                type: 'get',
                success: function (re) {
                    console.log(re);
                }
            })
        })

        //重置
        group.querySelector('.reset-btn').addEventListener('click', function (e) {
            cycles++;
            // 强制清除
            $('.input', el).each(function (i) {
                $(this).textbox('setValue', '');
            });
            var iconRotate = this.firstElementChild;
            iconRotate.style.transform = 'rotate(' + (cycles * 360) + 'deg)';
        });

        // 更多按钮
        group.querySelector('.more-btn').addEventListener('click', function (e) {
            var iconRotate = this.firstElementChild;
            iconRotate.classList.toggle('icon-rotate-90');
            $(el).find(".search-more").slideToggle();
            if (!this.dataset.parsed) {
                this.dataset.parsed = true;
                $.parser.parse($('.search-more', el));
            }
        });
    }


    var render = function (data) {
        // 默认 input 框的属性
        var _defaultItemOpts = {
            textbox: {
                width: 270
            },
            datetimebox: {
                width: 270
            },
            combotree: {
                width: 270
            },
            combobox: {
                width: 270
            },
            "default": {
            }
        };
        // 封装data-options里面的参数格式
        var newMore = data.more.map(function (line) {
            return line.map(function (item) {
                return $.extend(true, { optionsString: JSON.stringify($.extend(true, {}, _defaultItemOpts[item.type] || _defaultItemOpts['default'], item.options || {})).slice(1, -1) }, item);
            });
        });
        var newPrimary = data.primary.map(function (item) {
            return $.extend(true, { optionsString: JSON.stringify($.extend(true, {}, _defaultItemOpts[item.type] || _defaultItemOpts['default'], item.options || {})).slice(1, -1) }, item);
        });
        var newOptions = $.extend(true, { more: newMore }, { primary: newPrimary }, data);
        var formHtml = template.render(formTemplate, newOptions);

        var div = document.createElement('div');
        div.innerHTML = formHtml;
        initEvents(div.firstElementChild);
        return div.firstElementChild;
    }

    exports.render = render;

});
