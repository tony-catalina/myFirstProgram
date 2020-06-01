define(function (require) {
    'use strict';
    require('jquery');
    var menu = require('modules/menu.data');
    var main = {
        init: function () {
            //绑定 div 的鼠标事件
            // $('.navmenu-item a').click(function () {

            // });

            $('#mainPanle').addClass('no_border'); //数据展示区域
            $('.navigation-path').parent().parent().addClass('b_path'); //路径
            $('#layout_center_plan').addClass('no_border');
            $('.LeftMenu').parent().addClass('b_left');
            $('.LeftMenu').parent().find('.panel-header').addClass('leftMenuTitle');
        },
        initTopMenu: function () {
            $.each(menu._menusOneLeve(), function (i, n) {
                var str = '<li class="navmenu-item"> ';
                if (i === 0) {
                    str += '<a class="item active" target="LeftList" id="tommenu_' + n.menuid + ' onfocus="this.blur();">';
                } else {
                    str += '<a class="item" target="LeftList" id="tommenu_' + n.menuid + ' onfocus="this.blur();">';
                }
                str += '<i class="fa ' + n.icon + '"></i>';
                str += '<span class="title">' + n.menuname + '</span>';
                str += '</a>';
                str += '</li>';
                $('.viewui-navmenu').append(str);
            });
            $('a[id^="tommenu_"]').each(function (index) {
                $(this).on('click', function () {
                    $('.navmenu-item a').removeClass('active'); //清空已经选择的元素
                    $(this).addClass('active');
                    main.initLeftMenu(index);
                });
            });
        },
        initLeftMenu: function (parentMenu) {
            $('#nav').accordion({
                animate: false
            });
            var s = $('#nav').accordion('panels'),
                l = s.length;
            for (var i = 0; i < l; i++) {
                $('#nav').accordion('remove', 0); //删除一个后，下一个补充原来的位置所以下标始终为0
            }
            $.each(menu._menus(), function (i, n) {
                if (n.parentMenu == parentMenu) {
                    var menulist = '';
                    menulist += '<ul>';
                    $.each(n.menus, function (j, o) {
                        menulist += '<li class="pf-nav-item"><a ref="' + o.menuid + '" href="javascript:;" rel="' +
                            o.url + '" ><i class="fa ' + o.icon + '" ></i><span class="nav">' + o.menuname + '</span></a></li> ';
                    });
                    menulist += '</ul>';
                    $('#nav').accordion('add', {
                        title: n.menuname,
                        content: menulist,
                        iconCls: 'fa ' + n.icon
                    });
                }
            });

            $('.easyui-accordion li a').click(function () {
                var tabTitle = $(this).children('.nav').text();
                var menuid = $(this).attr('ref');
                main.addTab(menuid);
                $('.easyui-accordion li').removeClass('selected');
                $(this).parent().addClass('selected');
            }).hover(function () {
                $(this).parent().addClass('hover');
            }, function () {
                $(this).parent().removeClass('hover');
            });
            //选中第一个
            var panels = $('#nav').accordion('panels');
            $.parser.parse();
            var t = panels[0].panel('options').title;
            $('#nav').accordion('select', t);
        },
        getMenu: function (menuid) {
            var m = null;
            $.each(menu._menus(), function (i, n) {
                $.each(n.menus, function (j, o) {
                    if (o.menuid === menuid) {
                        //icon += o.icon;
                        m = o;
                        return true;
                    }
                });
            });
            return m;
        },
        addTab: function (menuid) {
            var menuInfo = main.getMenu(menuid),
                tabUrl = menuInfo.url,
                tabTitle = menuInfo.menuname,
                tabType = menuInfo.type,
                content = '';
            if (tabType == 'kss') {
                tabTitle = tabTitle + '(看)'
            } else if (tabType == 'jls') {
                tabTitle = tabTitle + '(拘)'
            } else if (tabType == 'jds') {
                tabTitle = tabTitle + '(戒)'
            } else if (tabType == 'bgs') {
                tabTitle = tabTitle + '(办公室)'
            } else if (tabType == 'yzd') {
                tabTitle = tabTitle + '(一支队)'
            } else {
                tabTitle = tabTitle
            }
            //tab是否存在
            console.log(menuInfo);

            if ($('#desktop').tabs('exists', tabTitle)) {
                $('#desktop').tabs('select', tabTitle);
            } else {
                if (tabUrl) {
                    content = '<iframe scrolling="yes" frameborder="0"  src="' + tabUrl + '" style="width:100%;height:99%;"></iframe>';
                } else {
                    content = '<iframe scrolling="yes" frameborder="0"  src="/apps/swj/views/404.html" style="width:100%;height:99%;"></iframe>';
                }
                $('#desktop').tabs('add', {
                    title: tabTitle,
                    closable: true,
                    content: content,
                    iconCls: menuInfo.icon
                });
                $('#desktop').find('div[style^="display: block;"] > div').addClass('overflow-hidden');
            }

        },
        createFrame: function (opts) {
            var url = opts.href,
                $iframe = $('<iframe id="center_iframe" name="' + opts.title + '"  class="main_iframe" src="' + url + '" width="100%" height="100%" allowfullscreen></iframe>');
            opts.content = $iframe;
            opts.href = '';
        },
        addFristPage: function () {
            $('#desktop iframe').attr('src', '../views/dashboard.html');
        },
        firstrefresh: function () {
            $('#center_iframe').attr('src', $('#center_iframe').attr('src'));
        }

    };

    return main;
});