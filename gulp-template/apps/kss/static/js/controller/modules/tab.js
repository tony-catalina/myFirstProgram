/**
 * Tab 组件分装
 */
define(function(require) {
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var items = require('services/com/tabItems.html');
    var contents = require('services/com/tabContents.html');
    var tabButton, tabContent;
    var activeIndex = 0;
    var main = {
        init: function(id, option) {
            var itemsHtml = items('com/tabItems', option);
            $('#tabButtonList').html(itemsHtml);
            var contentsHtml = contents('com/tabContents', option);
            $('#tabContentList').html(contentsHtml);
            setTimeout(function (){
                $.parser.parse();
                main.initEvents();
            }, 0);
        },
        initEvents: function() {
            tabButton = $('.tab-control-button');
            tabContent = $('.tab-item');
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
                    main.loadUrl($(tabContent[index]),tabButton[index].innerText);
                });
            });
            main.loadUrl($(tabContent[0]));
        },
        loadUrl:function(iframe,title){
            if(!tools.isUndefined(iframe.find('iframe').attr('src'))&&title!='业务流程' ){
                iframe.find('iframe').show();
            }else{
                iframe.find('iframe').attr('src', iframe.find('iframe').attr('data-src'));
            }

        }
    };
    return main;
});