define(function(require, exports, module) {
    var jquery = require('jquery');
    var swiper = require('swiper');
    var yer = require('yer');
    var menus = require('services/com/menuItems.html');
    var url = require('modules/url');
    var baseData = {
        navList: [],
        iframeList: []
    };
    var dashboard = "";

    /**
     * 矩形区域位置
     * @typedef {Object} Rectangle
     * @property {number} left 左边距离
     * @property {number} top 顶部距离
     * @property {number} right 右边距离
     * @property {number} bottom 底部距离
     */

    /**
     * 计算元素距离页面左上角的距离
     * @param {HTMLElement} elem 需要计算坐标的元素
     * @returns {Rectangle} 元素的位置数据，{x, y}
     */
    var computeElementOffset = function(elem) {
        /**
         * @type {Rectangle}
         */
        var rect = { left: 0, top: 0, bottom: 0, right: 0 };
        var p = elem;
        while (p) {
            rect.left += p.offsetLeft;
            rect.top += p.offsetTop;
            p = p.offsetParent;
        }
        rect.right = rect.left + elem.offsetWidth;
        rect.bottom = rect.top + elem.offsetHeight;
        return rect;
    };

    /**
     * 设置子菜单项列表的最大高度，防止其溢出浏览器
     * @param {HTMLElement} anchor 定位锚点，由于子菜单尚未显示，故无法获取其位置，采用一个已经显示的元素来获取位置
     * @param {HTMLUListElement} menuListElement 子菜单项 ul 元素
     * @param {number} padding 底部留白大小
     */
    var setMenuListMaxHeight = function(anchor, menuListElement, padding) {
        var pos = computeElementOffset(anchor);
        menuListElement.style.maxHeight = (
            document.documentElement.offsetHeight - pos.bottom - (padding || 0)) + 'px';
    };

    /**
     * 在浏览器调整大小时自动设置子菜单项列表的最大高度，防止其溢出浏览器
     * @param {HTMLElement} anchor 定位锚点，由于子菜单尚未显示，故无法获取其位置，采用一个已经显示的元素来获取位置
     * @param {HTMLUListElement} menuListElement 子菜单项 ul 元素
     * @param {number} padding 底部留白大小
     */
    var setMenuListMaxHeightAutomatically = function(anchor, menuListElement, padding) {
        setMenuListMaxHeight(anchor, menuListElement, padding);
        window.addEventListener('resize', function() {
            setMenuListMaxHeight(anchor, menuListElement, padding);
        });
    };

    /**
     * 使侧边的所有子菜单列表自动调整大小
     * @param {HTMLUListElement} mainMenu 菜单元素
     */
    var enableMenusAutoSize = function(mainMenu) {
        var subMenus = mainMenu.querySelectorAll('.sub-menus');
        Array.prototype.forEach.call(subMenus, function(subMenu) {
            setMenuListMaxHeightAutomatically(subMenu, subMenu.querySelector('.scroll-wrapper'), 20);
        });
    };

    // nav click function
    var handleNavClickFn = function() {
        var el = $('#navMe').find('.nav-info');
        el.off('click');
        el.on('click', onSubmenuItemClick);
    };
    // 右边 上部 菜单创建
    var handleCreateNav = function(name, url) {
        var e = /(.*)(\(.*\))$/;
        var res = name.replace(e, function(all, key, address) {
            return key;
        });
        var el = $('#navTop');
        if (baseData.navList.indexOf(name) === -1) {
            baseData.navList.push(name);

            if (name === '首页')
                el.append('<div class="swiper-slide r-nav-child dper-por dper-full-h">' +
                    '<div class="malign-center inside-box" style="height:80%">' +
                    '   <span class="malign-center-text font-20 text-overflow-e">' + name +
                    '</span><i class="close malign-center-right" data-name="' + name + '" data-url="' + url + '"></i></div>' + '</div>');
            else
                el.append('<div class="swiper-slide r-nav-child dper-por dper-full-h select-nav" style="min-width:200px;">' +
                    '<div class="malign-center inside-box " style="height:80%">' +
                    '   <span class="malign-center-text font-20 text-overflow-e">' + res +
                    '</span><i class="close malign-center-right" data-name="' + name + '" data-url="' + url + '">✗</i></div>' + '</div>');
            new swiper('#Swiper', {
                freeMode: true,
                direction: 'horizontal',
                slidesPerView: 10,
                mousewheel: true
            });
        }
        $.each(el.find('.close'), function(idx, itm) {
            if ($(itm).data('name') === name) {
                $(itm).parent().parent().addClass('active').siblings().removeClass('active');
            }
        });
        handleContShowFn(name, url);
        el.find('.r-nav-child').off('click');
        el.find('.r-nav-child').on('click', handleNavTopClick);
        el.find('.r-nav-child:not(:first)').off('mousedown');
        el.find('.r-nav-child:not(:first)').on('mousedown', youji);
        el.find('.close').off('click');
        el.find('.close').on('click', handleCloseClick);
        var subMenuLen = $("#navTop .swiper-slide").length;
        if (subMenuLen > 10) {
            var elem = el.find('.close').eq(1)[0];
            handleCloseClick(elem);
        }
    };
    // nav click function
    var event = function(role) {
        handleNavClickFn();
        handleCreateNav('首页', dashboard = '/apps/kss/views/dashboard.html');
    };
    var handleInitFn = function(role) {
        event(role);
        //阻止浏览器默认右键点击事件
        document.oncontextmenu = function() {
            return false;
        };
    };

    /**
     * 左侧子菜单项点击事件
     */
    var onSubmenuItemClick = (function() {
        /**
         * 保存上一次激活的菜单项
         * @type {HTMLElement}
         */
        var lastActiveMenuItem = null;

        /**
         * 保存上一次激活的子菜单项
         * @type {HTMLElement}
         */
        var lastActiveSubmenuItem = null;

        return function() {
            var $this = $(this);
            var name = $this.data('name');
            var url = $this.data('url');
            var closestMenuItem = this.closest('.sub-menus');
            var isMenuItemChanged = lastActiveMenuItem !== closestMenuItem;
            var isSubmenuItemChanged = this !== lastActiveSubmenuItem;

            if (isMenuItemChanged) {
                if (lastActiveMenuItem !== null) {
                    lastActiveMenuItem.classList.remove('active');
                }
                closestMenuItem.classList.add('active');
                lastActiveMenuItem = closestMenuItem;
            }
            if (isSubmenuItemChanged) {
                if (lastActiveSubmenuItem !== null) {
                    lastActiveSubmenuItem.classList.remove('active');
                }
                this.classList.add('active');
                lastActiveSubmenuItem = this;
            }

            handleCreateNav(name, url);
        };
    })();

    // 右边 上部 菜单切换
    var handleNavTopClick = function() {
        $(this).addClass('active').siblings().removeClass('active');
        handleContShowFn($(this).find('.close').data('name'), $(this).find('.close').data('url'));
    };
    // 右边 上部 菜单关闭 删除
    var handleCloseClick = function(elem) {
        var $this = elem instanceof HTMLElement ? $(elem) : $(this);
        var index = $this.parent().parent().index(),
            $el = $this.parent().parent();
        if (baseData.navList.indexOf($this.data('name')) !== -1) {
            baseData.navList.splice(baseData.navList.indexOf($this.data('name')), 1);
        }
        if ($el.hasClass('active') && index === 1) {
            $el.siblings().eq(0).addClass('active');
            // 右边下部 内容切换
            handleContShowFn($el.siblings().eq(0).find('.close').data('name'), $el.siblings().eq(0).find('.close').data('url'));
        } else if ($el.hasClass('active') && index === baseData.navList.length) {
            $el.siblings().eq(baseData.navList.length - 1).addClass('active');
            // 右边下部 内容切换
            handleContShowFn($el.siblings().eq(baseData.navList.length - 1).find('.close').data('name'), $el.siblings().eq(index - 1).find('.close').data('url'));
        } else if ($el.hasClass('active') && index !== baseData.navList.length && index !== 1) {
            $el.siblings().eq(index - 1).addClass('active');
            handleContShowFn($el.siblings().eq(index - 1).find('.close').data('name'), $el.siblings().eq(index - 1).find('.close').data('url'));
        }
        $el.remove();

    };
    //右击事件
    var youji = function(e) {
        e = e || event;
        // 鼠标点击位置坐标
        var index = $(this).index(),
            mouseX = e.pageX,
            mouseY = e.pageY,
            menuLeft = mouseX + 'px',
            menuTop = mouseY + 'px';
        // 菜单出现
        $('.right-youji').css({
            'left': menuLeft,
            'top': menuTop
        }).show();
        // 点击页面任意地方之后，右键菜单隐藏
        $(document).off('click');
        $(document).on('click', function() {
            $('.right-youji').hide();
        });

        //刷新
        $('#li1').off('click').on('click', (function() {
            const url = $(this).find('.close').data('url');
            $('iframe[src="' + url + '"]').attr('src',url);
        }).bind(this));
        //关闭当前
        $('#li2').off('click');
        $('#li2').on('click', (function() {
            var $el = $(this);
            if (baseData.navList.indexOf($(this).find('.close').data('name')) !== -1) {
                baseData.navList.splice(baseData.navList.indexOf($(this).find('.close').data('name')), 1);
            }
            if ($el.hasClass('active') && index === 1) {
                $el.siblings().eq(0).addClass('active');
                // 右边下部 内容切换
                handleContShowFn($el.siblings().eq(0).find('.close').data('name'), $el.siblings().eq(0).find('.close').data('url'));
            } else if ($el.hasClass('active') && index === baseData.navList.length) {
                $el.siblings().eq(baseData.navList.length - 1).addClass('active');
                // 右边下部 内容切换
                handleContShowFn($el.siblings().eq(baseData.navList.length - 1).find('.close').data('name'), $el.siblings().eq(baseData.navList.length - 1).find('.close').data('url'));
            } else if ($el.hasClass('active') && index !== baseData.navList.length && index !== 1) {
                $el.siblings().eq(index - 1).addClass('active');
                handleContShowFn($el.siblings().eq(index - 1).find('.close').data('name'), $el.siblings().eq(index - 1).find('.close').data('name'));
            }
            $(this).remove();
        }).bind(this));
        //关闭其它
        $('#li3').off('click');
        $('#li3').on('click', (function() {
            // nav arr 清空 然后 添加有active 元素
            baseData.navList = [];
            $.each($(this).parent().children(), function(idx, itm) {
                if ($(itm).hasClass('active')) {
                    $(itm).siblings('.select-nav').remove();
                    baseData.navList.push($(itm).find('.close').data('name'));
                }
            })
        }).bind(this));
        //关闭全部
        $('#li4').off('click');
        $('#li4').on('click', (function() {
            baseData.navList = ['首页'];
            if (!$(this).parent().children().eq(0).hasClass('active')) {
                $(this).parent().children().eq(0).addClass('active').siblings().removeClass('active');
                handleContShowFn(baseData.navList[0], dashboard);
            }
            $('.r-nav-child:not(:first)').remove();
        }).bind(this));
        e.stopPropagation();
    };
    // 右边下部 内容切换
    var handleContShowFn = function(name, url) {
        var el = $('#contCut'),
            newIframe = '',
            first = '';
        // el.empty();
        // 暂时注释
        if (baseData.iframeList.indexOf(url) === -1) {
            if (name === '首页') {
                first = '<iframe class="malign-tl dper-full-w dper-full-h homePage" style="border: none; background-color: #fff;" src="' + url + '">' + name + '</iframe>';
                el.append(first);
            } else {
                newIframe = '<iframe class="malign-tl dper-full-w dper-full-h" style="border: none; background-color: #fff;" src="' + url + '">' + name + '</iframe>';
                el.append(newIframe);
            }
            baseData.iframeList.push(url);
        }
        var currentIframe = $('iframe[src="' + url + '"]');

        $('#iframe').attr('src', $('#iframe').attr('src'));

        currentIframe.css('display', 'block').siblings().css('display', 'none');
    };
    var initData = function(role) {
        if($('#navMe-list ul li').length==0){
            $.get(url.getMenus + '?role=' + role, function(data) {
                data = data.result;

                // 左边栏title对应的icon标签
                var iconfontArray = [
                    { title: '收押接待', icon: 'icon-ico_qiantaijiedai_banlituifang' },
                    { title: '窗口服务', icon: 'icon-chuangkoufuwu' },
                    { title: '管教管理', icon: 'icon-guanjiaogangwei' },
                    { title: '综合业务', icon: 'icon-yewuguanli' },
                    { title: '医疗管理', icon: 'icon-yiliaowenjian' },
                    { title: '巡控管理', icon: 'icon-xunkong' },
                    { title: '财务管理', icon: 'icon-finance' },
                    { title: '领导办公', icon: 'icon-suolingdao' },
                    { title: '查询统计', icon: 'icon-chaxuntongji' }
                ];

                // 为data里面的img属性赋值iconfontArry里的icon
                for (var i = 0, len = data.menugroups.length; i < len; i++) {
                    data.menugroups[i].img = iconfontArray[i].icon;
                }

                var html = menus('com/menuItems', data);
                $('#navMe-list').html(html);
                var $mainMenu = $('#navMe-list');

                //导航点击事件
                $('.right-top .right-top-left .right-t2').on('click', function() {
                    $('.right-t1').slideToggle();
                    $(this).parent('.right-top-left').next('.right-top-right').slideToggle();
                });
                handleInitFn(role);

                // 使菜单项为自动大小
                if($mainMenu.lenght>0){
                    enableMenusAutoSize($mainMenu[0]);
                }

            });
        }

    }
    exports.init = function(role) {
        initData(role);
    };
    exports.openTab = handleCreateNav;

    module.exports = exports;
});