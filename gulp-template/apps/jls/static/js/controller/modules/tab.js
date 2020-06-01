/**
 * Tab 组件分装
 */
define(function(require) {
    require('jquery');
    require('easyui');
    var items = require('services/com/tabItems.html');
    var contents = require('services/com/tabContents.html');
    var tabButton, tabContent;
    var activeIndex = 0;
    var main = {
        init: function(id, option) {
            var itemsHtml = items('com/tabItems', option);
            console.log(itemsHtml);
            console.log($('#tabButtonList'));
            $('#tabButtonList').html(itemsHtml);
            var contentsHtml = contents('com/tabContents', option);
            $('#tabContentList').html(contentsHtml);
            $.parser.parse();
            tabButton = $('.tab-control-button');
            tabContent = $('.tab-item');
            main.initEvents();
        },
        initEvents: function() {
            $('.tab-control-button').each(function() {
                $(this).on('click', function(event) {
                    var index = event.target.closest('.tab-control-button').dataset.index;;
                    console.log(tabContent[activeIndex].classList);
                    tabButton[activeIndex].classList.remove('tab-active');
                    tabButton[index].classList.add('tab-active');
                    tabContent[activeIndex].classList.remove('tab-item-active');
                    tabContent[index].classList.add('tab-item-active');
                    activeIndex = index;
                    //$(tabContent[index]).find('iframe').attr('src', $(tabContent[index]).find('iframe').attr('src'));
                    main.loadUrl($(tabContent[index]));
                });
            });
            main.loadUrl($(tabContent[0]));
        },
        loadUrl:function(iframe){
            iframe.find('iframe').attr('src', iframe.find('iframe').attr('data-src'));
        }
    };
    return main;
});