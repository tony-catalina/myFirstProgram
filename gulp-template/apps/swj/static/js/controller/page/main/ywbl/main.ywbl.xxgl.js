define( function (require) {
    require('jquery');
    require('easyui');
    var layer=require('layer');
    var compSearchBox=require('awd/jquery/compSearchBox');
    var grid=require('awd/easyui/grid');
    var util=require('awd/easyui/util');
    var clumns=require('modules/main/clumns');
    var url=require('modules/main/mainurl');
    var echart=require('awd/echart/echart');
    var tools=require('awd/jquery/tools');

    var jbxxTable;
    var main = {
        init: function () {
            $.parser.parse();
            util.watermark(['张三', '北京市第一看守所']);
            main.toolsInit();
            main.gridInit();
            pop.tablePop();
            tools.toolsbar('tooles', {
                // 查询条件里面的字段
                "searchif": [{
                    // input框name名
                    id: 'xm',
                    // 字段名
                    name: '姓名',
                    // input框类型
                    classname: 'easyui-textbox'
                }, {
                    id: 'jsh',
                    name: '监室号',
                    classname: 'easyui-combobox'
                }, {
                    id: 'time',
                    name: '日期',
                    classname: 'easyui-datebox'
                }],
                // 高级查询里面的字段
                "highsearch": [{
                    id: 'rq',
                    name: '日期',
                    classname: 'easyui-datebox'
                }, {
                    id: 'fddbr',
                    name: '法定代表人',
                    classname: 'easyui-textbox'
                }, {
                    id: 'gys',
                    name: '供应商',
                    classname: 'easyui-textbox'
                }, {
                    id: 'tjrxm',
                    name: '坦检人姓名',
                    classname: 'easyui-textbox'
                }, {
                    id: 'tjrxb',
                    name: '坦检人性别',
                    classname: 'easyui-textbox'
                }, {
                    id: 'tjrzz',
                    name: '坦检人住址',
                    classname: 'easyui-textbox'
                }, {
                    id: 'tjrdh',
                    name: '坦检人电话',
                    classname: 'easyui-textbox'
                }],
                // 页面需要的按钮 添加、编辑、删除、打印、导出
                "tools": [{
                    // 工具栏id
                    id: 'add',
                    // 工具栏名称
                    name: '添加',
                    // 工具栏图标
                    icons: 'fa fa-plus-square',
                    // click:function(){
                    //     console.log("aaa");
                    // }
                }, {
                    id: 'edit',
                    name: '编辑',
                    icons: 'fa fa-pencil-square'
                }, {
                    id: 'delete',
                    name: '删除',
                    icons: 'fa fa-times-rectangle'
                }, {
                    id: 'export',
                    name: '导出',
                    icons: 'fa fa-pie-chart'
                }, {
                    id: 'print',
                    name: '打印',
                    icons: 'fa fa-check-circle'
                }],
            }, clumns.jcdd(), 'ryxxTable')
        },
        toolsInit: function () {
            $('.comp-search-box').compSearchBox(); //高级查询的条件查询
            $('#searchBtn').on('click', function () {
                alert(util.json2Str(util.form2Json('searchForm')));
                jbxxTable.datagrid('reload');
            });
            $('#editData').on('click', function () {
                layer.open({
                    type: 1,
                    skin: 'demo-class',
                    title: "编辑",
                    closeBtn: 2,
                    area: ['550px', '460px'],
                    // shadeClose: true, //点击遮罩关闭  
                    // btn:['确定', '取消'], 
                    skin: 'my-skin',
                    content: '<div style="width:83%;height:100%;position:absolute;left:17%"><div class="colRow" style="margin-top:40px"><span style="display:inline-block;width:100px;text-align:right;color:#3c3c3c">人员姓名</span><span style="margin-left:20px"><input name="xm" type="text" class="easyui-textbox" style="width:40%;height:30px;border:1px solid #b6b6b6;border-radius:4px"/></span></div>\
                              <div class="colRow" style="margin-top:20px"><span style="display:inline-block;width:100px;text-align:right;color:#3c3c3c">监室号</span><span style="margin-left:20px"><input name="xm" type="text" class="easyui-textbox" style="width:40%;height:30px;border:1px solid #b6b6b6;border-radius:4px"/></span></div>\
                              <div class="colRow" style="margin-top:20px"><span style="display:inline-block;width:100px;text-align:right;color:#3c3c3c">身份证号</span><span style="margin-left:20px"><input name="xm" type="text" class="easyui-textbox" style="width:40%;height:30px;border:1px solid #b6b6b6;border-radius:4px"/></span></div>\
                              <div class="colRow" style="margin-top:20px"><span style="display:inline-block;width:100px;text-align:right;color:#3c3c3c">监所名称</span><span style="margin-left:20px"><input name="xm" type="text" class="easyui-combobox" style="width:40%;height:30px;border:1px solid #b6b6b6;border-radius:4px"/></span></div>\
                              <div class="colRow" style="margin-top:20px"><span style="display:inline-block;width:100px;text-align:right;color:#3c3c3c">整改反馈</span><span style="margin-left:20px"><input name="xm" type="text" class="easyui-textbox" style="width:40%;height:30px;border:1px solid #b6b6b6;border-radius:4px" /></span></div>\
                              <div style="margin-top:30px;text-align:center;margin-left:-120px;"><button style="width:11%;height:38px;background-color:#0342c3;color:#ffffff;border:1px;border-radius:2px;margin-right:50px">确认</button><button style="width:11%;height:38px;border:1px solid #b6b6b6;border-radius:2px;background-color:#ffffff;color:#555555">取消</button></div></div>'
                    // content: "../../../../../../views/partials/form/newForm.html"             
                })
            });
            $('.my-skin')
            $('#excelData').on('click', function () {
                jbxxTable.datagrid('toExcel', '检查督导.xls');
            });
            $('#printData').on('click', function () {
                jbxxTable.datagrid('print', '检查督导');
            });
        },
        gridInit: function () {
            jbxxTable = grid.init('ryxxTable', {
                url: '/mock/swj/common/count',
                title: '',
                method: 'get',
                fit: false,
                width: '100%',
                height: window.innerHeight - 110,
                // pagination: false,
                detailviewshow: true,
                firstLoad: false,
                columns: clumns.jcdd()
            });
        }
    };
    $(main.init);
});
