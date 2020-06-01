define(function (require) {
    //添加删除部分的表格
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var urls = require('modules/url');
    var addDeleteTpl = require('services/com/addDeleteColumn.html');
    var combox = require('awd/easyui/combox');
    //界面控件
    var main = {
        /**
         * 
         * @param {ElementHtml} elem 需要操作的面板dom
         * @param {num} num 当前需要添加的面板序号
         * @param {Object} dataOptions 在html模板里渲染出的内容
         */
        init: function (elem, num, dataOptions) {
            for(var j = 0,len=dataOptions.options[0].length; j < len; j++) {
                if(tools.isUndefined(dataOptions.options[0][j].valid)){
                    dataOptions.options[0][j].valid='null';
                }
            }
            var addDeleteHtml = addDeleteTpl('com/addDeleteColumn', dataOptions);
            var $tabPanels = elem.tabs('tabs');

            $tabPanels[num].html(addDeleteHtml);
            var $tr = $tabPanels[num].find('.layui-table tr');

            var lineElement = $tr[$tr.length - 1];
            var backupLineElement = lineElement.cloneNode(true);
            main.eventBind($tabPanels, num, lineElement, backupLineElement);
        },

        eventBind: function ($tabPanels, num, lineElement, backupLineElement) {
            // 添加
            $tabPanels[num].find('.add').on('click', function () {
                var appendElement = backupLineElement.cloneNode(true);
                lineElement.parentNode.appendChild(appendElement);
                $.parser.parse(appendElement);
                combox.initBySelect(appendElement.querySelectorAll('.awdCombox'), urls.getDictionary);
            });

            // 删除当前行
            $tabPanels[num].on('click', '.remove', function () {
                var trcount = $tabPanels[num].find('.layui-table tbody>tr').length
                if (trcount == 1) {
                    layer.alert("行数不少于1行！");
                } else {
                    $(this).parent().parent().remove();
                }
            })




        }
    };

    /**
     *运行入口
     */
    return main;

});