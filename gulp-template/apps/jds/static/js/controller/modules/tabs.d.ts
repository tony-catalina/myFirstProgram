declare namespace tabs {
    /**
     * Tab 模块
     */
    export interface TabModule {
        /**
         * 模块渲染方法
         */
        render(): HTMLDivElement;

        /**
         * 当 Tab 显示后触发该事件
         * @param element Tab 内容
         */
        onTabShow(element: HTMLDivElement): void;

        /**
         * 当 Tab 挂载到 DOM 结构上触发该事件
         * @param element Tab 内容
         */
        onTabMounted(element: HTMLDivElement): void;
    }

    /**
     * Tab 项
     */
    export interface TabControlItem {
        /**
         * 模块显示名称
         */
        name: string;

        /**
         * iconfont 图标类名
         */
        icon: string;

        /**
         * 模块（由 seajs require 导入）
         */
        mod: TabModule;
    }

    /**
     * Tab 组件选项
     */
    export interface TabControlOptions {
        /**
         * Tab 项数组
         */
        items: Array<TabControlItem>;

        /**
         * 当 Tab 切换后触发该事件
         * @param element 改变后的 Tab 内容
         */
        onTabChange(element: HTMLDivElement): void;
    }

    /**
     * Tab 组件
     */
    export class TabControl {
        /**
         * 初始化一个 TabControl 组件，包含 DOM 结构
         * @param options TabControl 构造选项
         */
        constructor(options: TabControlOptions);

        /**
         * 将 TabControl 挂载到指定的组件上，并返回 TabControl 根节点的元素
         * @param parent 父节点
         */
        mount(parent: HTMLElement): HTMLDivElement;

        /**
         * 导航到指定的 Tab 项
         * @param name Tab 项名称
         */
        navigateToTabName(name: string): void;

        /**
         * 导航到指定的 Tab 项
         * @param index Tab 项索引
         */
        navigateToTabIndex(index: number): void;
    }
}

declare module "tabs" {
    export = tabs;
}
