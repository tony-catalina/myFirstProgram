/**
模块名称： 监区违规
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var tree = require('awd/easyui/tree');
    var url = require('modules/url');
    var comboxtree = require('awd/easyui/comboxtree');
    var combox = require('awd/easyui/combox');
    //界面控件
    var main={
        init:function(){
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout:function(){
            /**布局初始化**/
            tree.initTree('jqtree',{
                url:url.jqtree,
                checkbox:true,
                select:function(){
                },
                BeforeExpand: function(node) {
                    $('#jqtree').tree('options').url = url.jqtree + '?id=' + node.id;
                }
            });
            /**布局初始化**/
        },
        eventBind:function(){
            /**事件绑定**/
            comboxtree.initBySelect('.awdComboxtree', url.wgTree+'?id=0101',false);
            combox.initBySelect('.awdCombox',url.getDictionary);
            $.parser.parse('#fm');
            $("#saveBtn").click(function () {
                var jqhstring=util.getTreeSelectionNos($('#jqtree'));
                if(jqhstring=='') {
                    utils.alert('请先选择监区!');
                    return false;
                }
                var wgqk = $("#wgqkfm").textbox("getValue");
                var wgqkcon = $("#wgxxqk").textbox("getValue");
                var wgsj = $("#wgsjfm").datetimebox("getValue");
                var clqk = $("#clqkfm").textbox("getValue");
                var bz = $("#bzfm").textbox("getValue");
                console.log(wgqk);
                if ("" == wgqk || undefined == wgqk){
                    utils.alert('违规情况不能为空!');
                }else if ("" == wgqkcon){
                    utils.alert('违规详细情况不能为空!');
                }else if ("" == wgsj){
                    utils.alert('违规时间不能为空!');
                }else if ("" == clqk || undefined == clqk){
                    utils.alert('处理情况不能为空!');
                }else{
                    var data = {};
                    data.wgqk = wgqk;
                    data.wgqkcon = wgqkcon;
                    data.wgsj = wgsj;
                    data.clqk = clqk;
                    data.bz = bz;
                    data.wglx = '1';
                    data.dxbh = jqhstring;

                    util.ajax({
                        url:url.wgsjclAdd,
                        type:'post',
                        data:data,
                        func:function (result) {
                            $("#fm").form('clear');
                            utils.alert(result.msg);
                        },
                        error:function () {

                        }
                    });
                }



                
            });
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
