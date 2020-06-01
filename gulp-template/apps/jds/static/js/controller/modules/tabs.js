define(function (require, exports, module) {

    /**
     * 设计说明：
     * 
     *     构造一个 TabControl 时会通过 createElements 创建其 DOM 结构，此时 Tab 项内容尚未加载，
     * 通过调用 TabControl 实例的 render 方法加载其 Tab 项内容，该函数返回一个 HTMLDivElement，表示
     * Tab 组件的 DOM 结构（包含内部的 Tab 项 DOM 结构）。
     * 
     *     每一个 Tab 项是一个由 define 定义的模块，其导出一个 render 方法，该方法返回一个 HTMLDivElement，
     * 表示该 Tab 项的页面元素。在 TabControl 的 render 方法调用时，将会依定义的顺序调用各个 Tab 项的
     * render 方法，并将返回的 HTMLDivElement 挂载（appendChild）到 Tab 的 DOM 结构上。
     */

    var EVENT_TAB_ITEM_SHOW = 'onTabShow';
    var EVENT_TAB_ITEM_MOUNTED = 'onTabMounted';

    var _tabCaches = {};

    // 导入 Tab 结构 HTML 字符串
    var _tabsTemplate = require('/apps/jds/views/pages/common/tabs.html');

    var createElements = function (options) {
        var element = document.createElement('div');
        element.innerHTML = template.render(_tabsTemplate, options);
        return element.firstElementChild;
    };

    var initEvents = function (tabControl) {
        tabControl.tabButtonContainer.addEventListener('click', function (e) {
            var closestTabButton = e.target.closest('.tab-control-button');
            if (closestTabButton) {
                tabControl.navigateToTabIndex(+closestTabButton.dataset.index);
            }
        });
    };

    var fireTabChangeEvent = function (self, index) {
        setTimeout(function () {
            if (self.options.onTabChange instanceof Function) {
                self.options.onTabChange.call(null, self.tabContentContainer.children[index]);
            }
        }, 0);
    };

    var fireTabItemEvent = function (self, type, index) {
        setTimeout(() => {
            var mod = self.options.items[index].mod;
            if (mod[type] instanceof Function) {
                mod[type].call(null, self.tabContentContainer.children[index]);
            }
        }, 0);
    };

    var navigateToTabIndex = function (self, index, force) {
        var item = self.options.items[index];
        if (self.options.activeIndex !== index || force) {
            self.tabButtonContainer.children[self.options.activeIndex].classList.remove('tab-active');
            self.tabButtonContainer.children[index].classList.add('tab-active');
            self.tabContentContainer.children[self.options.activeIndex].classList.remove('tab-item-active');
            self.tabContentContainer.children[index].classList.add('tab-item-active');
            self.options.activeIndex = index;

            // 触发 TabControl 的切换回调
            fireTabChangeEvent(self, index);

            // 首次加载模块
            if (!_tabCaches[item.name]) {
                _tabCaches[item.name] = renderTabItem(self, item);
                self.tabContentContainer.children[index].appendChild(_tabCaches[item.name]);
                fireTabItemEvent(self, EVENT_TAB_ITEM_MOUNTED, index);
            }

            // 触发 TabItem 的显示事件
            fireTabItemEvent(self, EVENT_TAB_ITEM_SHOW, index);
        }
    };

    var renderTabItem = function (self, item) {
        var i, mod = item.mod, element;
        if (mod) {
            var modHtml = mod.template || mod.html;
            if (mod.render) {
                try {
                    element = mod.render();
                } catch (ex) {
                    console.error(ex);
                }
            } else if (modHtml) {
                var div = document.createElement('div');
                div.innerHTML = modHtml;
                element = div.firstElementChild;
            }
        } else {
            console.error('module ' + self.options.items[i].name + ' is undefined');
        }
        return element;
    };

    var TabControl = function (options) {
        this.options = options;
        this.options.activeIndex = 0;
        this.element = createElements(options);
        this.tabButtonContainer = this.element.querySelector('.tab-title');
        this.tabContentContainer = this.element.querySelector('.tab-item-container');

        initEvents(this);
    };

    TabControl.prototype.mount = function (parent) {
        // 挂载到 DOM 结构上
        parent.appendChild(this.element);

        // 首次展示
        navigateToTabIndex(this, this.options.activeIndex, true);

        return this.element;
    };

    TabControl.prototype.navigateToTabName = function (name) {
        var i;
        for (i = 0; i < this.options.items.length; i++) {
            if (this.options.items[i].name === name) {
                navigateToTabIndex(this, i, false);
                break;
            }
        }
    };

    TabControl.prototype.navigateToTabIndex = function (index) {
        return navigateToTabIndex(this, index, false);
    };

    exports.TabControl = TabControl;

});
