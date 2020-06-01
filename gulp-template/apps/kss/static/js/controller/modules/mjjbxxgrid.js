define(function (require) {
    var clumn = require('modules/clumn/mjjbxx');
    var hideshow = require('modules/showHideClumn');
    var grid = require('awd/easyui/grid');
    var url = require('modules/url');
    var tools = require('awd/jquery/tools');
    var rightmenu=require('modules/rightmenu');
    var main = {
        init:function(table,checkbox,height,selectFun,rightmenus){
            grid.init('table', {
                url: url.mjglList,
                fit: false,
                width: '100%',
                height: window.innerHeight - height,
                firstLoad: false,
                columns: clumn({
                    check: checkbox,
                    clumns: ['jh', 'xm', 'xbString', 'mzString', 'csny', 'jxString', 'xlString', 'xlzxsString', 'bm', 'gbzwjbString'],
                    hidden: ['zzmmString', 'cjgmgzsj', 'hyzkString', 'cjgzsj', 'bmzw', 'lxdh', 'sfzh', 'sjh', 'lkrq', 'lkyy', 'hjszdString', 'bz']
                }),
                onSelect: function (rowIndex, rowData) {
                    var jh = rowData.jh;
                    selectFun(jh);
                },onRowContextMenu:function(e, rowIndex, rowData){
                    e.preventDefault(); //阻止浏览器捕获右键事件
                    $(this).datagrid("clearSelections"); //取消所有选中项
                    $(this).datagrid("selectRow", rowIndex); //根据索引选中该行
                    $('#contextMenu').menu('show', {
                        left: e.pageX,//在鼠标点击处显示菜单
                        top: e.pageY
                    });
                    e.preventDefault();  //阻止浏览器自带的右键菜单弹出
                }
            });
            if(rightmenus==undefined){
                rightmenus=[
                    {id:'rymx',icon:'',name:'人员详情',fun:function(data){alert(1);console.log(data);}}
                ]
            }
            rightmenu.init(table,{
                menus:rightmenus
            });
            hideshow.init('modules/clumn/mjjbxx',
                ['jh', 'xm', 'xbString', 'mzString', 'csny', 'jxString', 'xlString', 'xlzxsString', 'bm', 'gbzwjbString'],
                ['zzmmString', 'cjgmgzsj', 'hyzkString', 'cjgzsj', 'bmzw', 'lxdh', 'sfzh', 'sjh', 'lkrq', 'lkyy', 'hjszdString', 'bz']);
        }
    };
    return main;
});