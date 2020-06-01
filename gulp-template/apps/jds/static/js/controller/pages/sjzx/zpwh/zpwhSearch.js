define([
    'jquery',
    'easyui',
    'easyuiZh',
    'arttemplate',
    '/apps/jds/views/pages/sjzx/zpwh/search.html'
], function (require, exports, module) {
    require('jquery');
    require('easyui');
    require('easyuiZh');
    require('arttemplate');
    var cycles = 0;

    window.MYJSON = JSON;

    var formTemplate = require('/apps/jds/views/pages/sjzx/zpwh/search.html');

    var initEvents = function(el) {
        // 查询栏部分
        var group = el.querySelector(".button-group");

        group.querySelector('.search-btn').addEventListener('click', function(e) {
            console.log("ajax");
        })

      
        group.querySelector('.more-btn').addEventListener('click', function(e) {
            var iconRotate = this.firstElementChild;
            iconRotate.classList.toggle('icon-rotate-90');
            $(el).find(".search-more").slideToggle();
            $.parser.parse($('.search-more', el));
        });
    }


    var render = function(data){
       var _defaultItemOpts = {
            textbox: {
                width: 150
            },
            datetimebox: {
                width: 300
            },
            combotree: {
                width: 150
            },
            "default": {
            }
        };
        var newMore = data.more.map(function(line) {
            return line.map(function(item) {
                return $.extend(true, { optionsString:JSON.stringify($.extend(true, {}, _defaultItemOpts[item.type] || _defaultItemOpts['default'], item.options || {})).slice(1,-1) }, item);
            });
        });
        var newPrimary = data.primary.map(function(item) {
            return $.extend(true, { optionsString:JSON.stringify($.extend(true, {}, _defaultItemOpts[item.type] || _defaultItemOpts['default'], item.options || {})).slice(1,-1) }, item);
        })
        var newOptions = $.extend(true, { more:newMore },{ primary:newPrimary }, data);
        var formHtml = template.render(formTemplate, newOptions);
       
        var createDiv = document.createElement('div');
        createDiv.innerHTML = formHtml;
        console.log(createDiv.firstElementChild);
        initEvents(createDiv.firstElementChild);
        return createDiv.firstElementChild;
    }

   exports.render = render;
});