define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_thjyGbjyJxcx.html');
    var urls = require('modules/url');
    var grid = require('awd/easyui/grid');
    var clumnjb = require('modules/clumn/jbxx');
    var clumn = require('modules/clumn/wgsjcl');
    var clumn_qkfy=require('modules/clumn/qkfy');
    var clumn_gzqk=require('modules/clumn/gzqk');
    var clumn_ls=require('modules/clumn/lsjyjtqk');
    var comboxtree = require('awd/easyui/comboxtreegrid');
    var isOpen=false;
    var combogrid = require('awd/easyui/combogrid');
    var commFun = require('modules/commFun');
    var common=require('common');
    var popwin;
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_thjyGbjyJxcx', data);
            if(!isOpen){
                popwin = utils.showWin({
                    title: '个别教育',
                    area: ['90%', '90%'],
                    content: html,
                    buttons: ['关闭'],
                    success: function () {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-tabs, .easyui-datetimebox,.easyui-datebox, .easyui-combobox'),function(el){
                                    $.parser.parse(el.parentElement);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                    combox.initBySelect(el,urls.getDictionary);
                                });
                            }).then(function(){
                                return commFun.processQueued(el.querySelectorAll('.awdCombogrid'),function(el) {
                                    combogrid.initPageClass(el,urls.getDictionaryPage);
                                });
                            }).then(function(){
                                return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
                                    comboxtree.initBySelect(el,urls.getJsCombotree);
                                });
                            }).then(function(){
                                return commFun.processQueued(el.querySelectorAll('.awdTagbox'),function(el) {
                                    comboxtree.initTagBox(el,urls.getDictionary);
                                });
                            }).then(function () {
                                var len = document.querySelectorAll('.timeline-item').length -1;
                                if (idx === len) {
                                    $.parser.parse(el.parentElement);
                                    main.bindEvent(data);
                                }
                            });
                        }, Promise.resolve());
                    },
                    yes: function () {
                        utils.closeWin(popwin);
                    }
                },function(){
                    isOpen=false;
                });
            }
        },
        bindEvent: function (data) {
            grid.init('thnrTable', {
                url: urls.wgclList,
                fit: false,
                width: '100%',
                height: '280px',
                firstLoad: true,
                columns: clumn({
                    check: false,
                    clumns: ['wgqk', 'clqk', 'clr'],
                    hidden: ['sykzrq', 'xbString','dwlx','rsxz','csrq','zjlx','zjh','hjdString','xzd',
                        'mz','gj','whcd','zy','sf','tssf','jyrq','ayString']
                }),
                queryParams:{
                    "dxbh":data.rybh,
                    "pageSize" : function(){
                        return $('#thnrTable').datagrid("getPager").pagination("options").pageSize;
                    },
                    "pageIndex" : function(){
                        return $('#thnrTable').datagrid("getPager").pagination("options").pageNumber;
                    }
                }
            });
            $("#ycqkxx").hide();
            $("input[name=ywqxyc]").on("click",function(){
                if("1" == $(this).val()){
                    $("#ycqkxx").show();
                }else{
                    $("#ycqkxx").hide();
                }
            });
            $("#thnr_kssj").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));
            $('#tt').tabs({
                onSelect: function(title,index){
                    if(title=='情况反映'){
                        grid.init('qkfyTale', {
                            url: urls.qkfyList,
                            fit: false,
                            width: '100%',
                            height: '400px',
                            firstLoad: true,
                            columns: clumn_qkfy({
                                check: false,
                                clumns: ['fyr', 'bfydx', 'wgqk', 'xxwgqk', 'ycqk', 'xxycqk', 'wgsj'],
                                hidden: ['sykzrq', 'xbString','dwlx','rsxz','csrq','zjlx','zjh','hjdString','xzd',
                                    'mz','gj','whcd','zy','sf','tssf','jyrq','ayString']
                            }),
                            queryParams:{
                                "bfydxbh":data.rybh,
                                "pageSize" : function(){
                                    return $('#qkfyTale').datagrid("getPager").pagination("options").pageSize;
                                },
                                "pageIndex" : function(){
                                    return $('#qkfyTale').datagrid("getPager").pagination("options").pageNumber;
                                }
                            }
                        });
                        $("input[name=sfyycqk]").on("click",function(){
                            if("1" == $(this).val()){
                                $("#ycqk").show();
                            }else{
                                $("#ycqk").hide();
                            }
                        });
                        $("input[name=swfzy]").on("click",function(){
                            if("1" == $(this).val()){
                                $('#qkfy_tgrq').textbox({
                                    required : true,
                                });
                                $('#qkfy_xslx').textbox({
                                    required : true,
                                });
                                $('#qkfy_bfydx').textbox({
                                    required : false,
                                });
                            }else{
                                $('#qkfy_bfydx').textbox({
                                    required : true,
                                });
                                $('#qkfy_tgrq').textbox({
                                    required : false,
                                });
                                $('#qkfy_xslx').textbox({
                                    required : false,
                                });
                            }
                        });
                        $("#qkfySave").click(function () {
                            var swfzy=$("input[name=swfzy]").val();
                            var qkfy_bfydx=$("#qkfy_bfydx").textbox("getValue");
                            var qkfy_tgrq=$("#qkfy_tgrq").textbox("getValue");
                            var qkfy_xslx=$("#qkfy_xslx").textbox("getValue");
                            var qkfy_wgsj=$("#qkfy_wgsj").textbox("getValue");
                            var qkfy_xsnrzy=$("#qkfy_xsnrzy").textbox("getValue");
                            var qkfy_wgqk=$("#qkfy_wgqk").textbox("getValue");
                            var qkfy_xxwgqk=$("#qkfy_xxwgqk").textbox("getValue");
                            var sfyycqk=$("input[name=sfyycqk]").val();
                            var qkfy_ycqk=$("#qkfy_ycqk").textbox("getValue");
                            var qkfy_xxycqk=$("#qkfy_xxycqk").textbox("getValue");

                            var qk_data={};
                            qk_data.swfzy=swfzy;
                            qk_data.bfydx=qkfy_bfydx;
                            qk_data.tgrq=qkfy_tgrq;
                            qk_data.xslx=qkfy_xslx;
                            qk_data.wgsj=qkfy_wgsj;
                            qk_data.xsnrzy=qkfy_xsnrzy;
                            qk_data.wgqk=qkfy_wgqk;
                            qk_data.xxwgqk=qkfy_xxwgqk;
                            qk_data.sfyycqk=sfyycqk;
                            qk_data.ycqk=qkfy_ycqk;
                            qk_data.xxycqk=qkfy_xxycqk;
                            qk_data.bfydxbh=data.rybh;
                            qk_data.jsbh=data.jsbh;
                            qk_data.jsh=data.jsh;
                            qk_data.fyr=data.xm;
                            qk_data.fyrbh=data.rybh;
                            qk_data.rybh=data.rybh;
                            console.log("============"+JSON.stringify(qk_data));
                            util.ajax({
                                url: urls.qkfyAdd,
                                data: qk_data,
                                func: function (rows) {
                                    if (rows.success) {
                                        utils.alert(rows.msg);
                                        $("#qkfyTale").datagrid('reload', {
                                            "bfydxbh": data.rybh
                                        });
                                        document.querySelector("#fm").reset();
                                    } else {
                                        utils.alert(rows.msg);
                                    }
                                }
                            });
                        });
                        $("#qkfyClear").click(function () {
                            document.querySelector("#fm").reset();
                        });
                    }
                    if(title=='情况证实'){
                        grid.init('qkzsTable', {
                            url: urls.qkfyList,
                            fit: false,
                            width: '100%',
                            height: '400px',
                            firstLoad: true,
                            columns: clumn_qkfy({
                                check: false,
                                clumns: ['fysj', 'fyr', 'bfydx', 'xxwgqk', 'xxycqk', 'zscs', 'fdcs', 'yxzt'],
                                hidden: [, 'sykzrq', 'xbString','dwlx','rsxz','csrq','zjlx','zjh','hjdString','xzd',
                                    'mz','gj','whcd','zy','sf','tssf','jyrq','ayString']
                            }),
                            queryParams:{
                                "bfydxbh":data.rybh,
                                "pageSize" : function(){
                                    return $('#thnrTable').datagrid("getPager").pagination("options").pageSize;
                                },
                                "pageIndex" : function(){
                                    return $('#thnrTable').datagrid("getPager").pagination("options").pageNumber;
                                }
                            }
                        });
                        $("#qkzs_zs").click(function () {
                            var datess={};
                            var dataff = grid.getSelected('qkzsTable')[0];
                            datess.id=dataff.id;
                            datess.zscs='1';
                            console.log(dataff)
                            if(dataff){
                                if(dataff.yxzt == 0){
                                    if(dataff.fdcs == 2){
                                        utils.alert("该情况已被认定为<font color='red'>事实不存在</font>");
                                    }else{
                                        if(dataff.zscs == 2){
                                            utils.alert("该情况已被认定为<font color='red'>事实存在</font>");
                                        }else{
                                            if(dataff.zscs== ""){
                                                dataff.zscs="0";
                                            }
                                            util.ajax({
                                                url: urls.qkfyUpdate,
                                                data:datess,
                                                func: function (rows) {
                                                    if (rows.success) {
                                                        utils.alert(rows.msg);
                                                        $("#qkzsTable").datagrid('reload', {
                                                            "bzdx": data.xm
                                                        });
                                                    } else {
                                                        utils.alert(rows.msg);
                                                    }
                                                }
                                            });

                                        }
                                    }
                                }else{
                                    utils.alert("该情况已失效,如需办理请点击<font color='red'>撤销</font>或选择其他数据");
                                }
                            }else{
                                utils.alert("请选择要证实的情况");
                            }

                        });
                        $("#qkzs_fd").click(function () {
                            var datess={};
                            var dataff = grid.getSelected('qkzsTable')[0];
                            datess.id=dataff.id;
                            datess.fdcs='1';
                            if(dataff){
                                if(dataff.yxzt == 0){
                                    if(dataff.zscs == 2){
                                        utils.alert("该情况已被认定为<font color='red'>事实存在</font>");
                                    }else{
                                        if(dataff.fdcs == 2){
                                            utils.alert("该情况已被认定为<font color='red'>事实不存在</font>");
                                        }else{
                                            if(dataff.fdcs== ""){
                                                dataff.fdcs="0";
                                            }
                                            util.ajax({
                                                url: urls.qkfyUpdate,
                                                data:datess,
                                                func: function (rows) {
                                                    if (rows.success) {
                                                        utils.alert(rows.msg);
                                                        $("#qkzsTable").datagrid('reload', {
                                                            "bzdx": data.xm
                                                        });
                                                    } else {
                                                        utils.alert(rows.msg);
                                                    }
                                                }
                                            });

                                        }
                                    }
                                }else{
                                    utils.alert("该情况已失效,如需办理请点击<font color='red'>撤销</font>或选择其他数据");
                                }
                            }else{
                                utils.alert("请选择要否定的情况");
                            }

                        });
                        $("#qkzs_cx").click(function () {
                            var datess={};
                            var dataff = grid.getSelected('qkzsTable')[0];
                            datess.id=dataff.id;
                            datess.yxzt='1';
                            if(dataff){
                                if(dataff.yxzt == 1){
                                    util.ajax({
                                        url: urls.qkfyUpdate,
                                        data:datess,
                                        func: function (rows) {
                                            if (rows.success) {
                                                utils.alert(rows.msg);
                                                $("#qkzsTable").datagrid('reload', {
                                                    "bzdx": data.xm
                                                });
                                            } else {
                                                utils.alert(rows.msg);
                                            }
                                        }
                                    });

                                }else{
                                    utils.alert("请选择<font color='red'>无效</font>状态的数据");
                                }
                            }else{
                                utils.alert("请选择要撤销的数据");
                            }


                        });
                        $("#qkzs_cz").click(function () {
                            var datess={};
                            var dataff = grid.getSelected('qkzsTable')[0];
                            datess.id=dataff.id;
                            datess.fdcs='0';
                            datess.yxzt='0';
                            datess.zscs='0';
                            if(dataff){
                                util.ajax({
                                    url: urls.qkfyUpdate,
                                    data:datess,
                                    func: function (rows) {
                                        if (rows.success) {
                                            utils.alert(rows.msg);
                                            $("#qkzsTable").datagrid('reload', {
                                                "bzdx": data.xm
                                            });
                                        } else {
                                            utils.alert(rows.msg);
                                        }
                                    }
                                });
                            }else{
                                utils.alert("请选择要重置的数据");
                            }


                        });
                    }
                    if(title=='工作情况'){
                        grid.init('gzbzTable', {
                            url: urls.gzqkList,
                            fit: false,
                            width: '100%',
                            height: '400px',
                            firstLoad: true,
                            columns: clumn_gzqk({
                                check: false,
                                clumns: ['sbzrw', 'bbzmbxm', 'jtsm'],
                                hidden: [, 'sykzrq', 'xbString','dwlx','rsxz','csrq','zjlx','zjh','hjdString','xzd',
                                    'mz','gj','whcd','zy','sf','tssf','jyrq','ayString']
                            }),
                            queryParams:{
                                "bzdx":data.xm
                            }
                        });
                        grid.init('gzwcqkTable', {
                            url: urls.gzqkList,
                            fit: false,
                            width: '100%',
                            height: '400px',
                            firstLoad: true,
                            columns: clumn_gzqk({
                                check: false,
                                clumns: ['bzr', 'bzdx', 'bbzmbxm', 'bzsj', 'sbzrw', 'wcqk', 'yxztString'],
                                hidden: [, 'sykzrq', 'xbString','dwlx','rsxz','csrq','zjlx','zjh','hjdString','xzd',
                                    'mz','gj','whcd','zy','sf','tssf','jyrq','ayString']
                            }),
                            queryParams:{
                                "bzdx":data.xm
                            }
                        });
                        $("#gzbzSave").click(function () {
                            var sbzrwfm=$("#sbzrwfm").combobox("getValue");
                            var bbzmbxmfm=$("#bbzmbxmfm").textbox("getValue");
                            var jtsmfm=$("#jtsmfm").textbox("getValue");
                            var gz_data={};
                            gz_data.yxzt='1';
                            gz_data.wcqk='0';
                            gz_data.sbzrw=sbzrwfm;
                            gz_data.bbzmbxm=bbzmbxmfm;
                            gz_data.jtsm=jtsmfm;
                            var nowDate=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
                            gz_data.bzsj=nowDate;
                            gz_data.bzr=common.info.user.loginname;
                            gz_data.bzdx=data.xm;
                            util.ajax({
                                url: urls.gzqkAdd,
                                data: gz_data,
                                func: function (rows) {
                                    if (rows.success) {
                                        utils.alert(rows.msg);
                                        $("#gzbzTable").datagrid('reload', {
                                            "bzdx": data.xm
                                        });
                                    } else {
                                        utils.alert(rows.msg);
                                    }
                                }
                            });
                        });
                        $("#gzbzClear").click(function () {
                            document.querySelector("#fm").reset();
                        });
                        $("#gzbz_wc").click(function () {
                            var datess={};
                            var dataff = grid.getSelected('gzwcqkTable')[0];
                            datess.id=dataff.id;
                            datess.wcqk='2';
                            datess.yxzt='0';
                            if(dataff.yxzt=="1"){
                                util.ajax({
                                    url: urls.gzqkUpdate,
                                    data:datess,
                                    func: function (rows) {
                                        if (rows.success) {
                                            utils.alert(rows.msg);
                                            $("#gzwcqkTable").datagrid('reload', {
                                                "bzdx": data.xm
                                            });
                                        } else {
                                            utils.alert(rows.msg);
                                        }
                                    }
                                });
                            }else{
                                utils.alert("请选择有效数据");
                            }

                        });
                        $("#gzbz_dywwc").click(function () {
                            var datess={};
                            var dataff = grid.getSelected('gzwcqkTable')[0];
                            datess.id=dataff.id;
                            datess.wcqk='3';
                            datess.yxzt='1';
                            if(dataff.yxzt=="1"){
                                util.ajax({
                                    url: urls.gzqkUpdate,
                                    data:datess,
                                    func: function (rows) {
                                        if (rows.success) {
                                            utils.alert(rows.msg);
                                            $("#gzwcqkTable").datagrid('reload', {
                                                "bzdx": data.xm
                                            });
                                        } else {
                                            utils.alert(rows.msg);
                                        }
                                    }
                                });
                            }else{
                                utils.alert("请选择有效数据");
                            }

                        });
                        $("#gzbz_cx").click(function () {
                            var datess={};
                            var dataff = grid.getSelected('gzwcqkTable')[0];
                            datess.id=dataff.id;
                            datess.wcqk='1';
                            datess.yxzt='0';
                            if(dataff.yxzt=="1"){
                                util.ajax({
                                    url: urls.gzqkUpdate,
                                    data:datess,
                                    func: function (rows) {
                                        if (rows.success) {
                                            utils.alert(rows.msg);
                                            $("#gzwcqkTable").datagrid('reload', {
                                                "bzdx": data.xm
                                            });
                                        } else {
                                            utils.alert(rows.msg);
                                        }
                                    }
                                });
                            }else{
                                utils.alert("请选择有效数据");
                            }

                        });
                        $("#gzbz_cz").click(function () {
                            var datess={};
                            var dataff = grid.getSelected('gzwcqkTable')[0];
                            datess.id=dataff.id;
                            datess.wcqk='0';
                            datess.yxzt='1';
                            util.ajax({
                                url: urls.gzqkUpdate,
                                data:datess,
                                func: function (rows) {
                                    if (rows.success) {
                                        utils.alert(rows.msg);
                                        $("#gzwcqkTable").datagrid('reload', {
                                            "bzdx": data.xm
                                        });
                                    } else {
                                        utils.alert(rows.msg);
                                    }
                                }
                            });



                        });
                    }
                    if(title=='历史羁押'){
                        grid.init('lsjyTable', {
                            url: urls.jbxx,
                            fit: false,
                            width: '100%',
                            height: '400px',
                            firstLoad: true,
                            columns: clumnjb({
                                check: false,
                                clumns: ['jsbh', 'rsrq', 'cssj'],
                                hidden: ['sf','tssf','jyrq','ayString', 'bahjString', 'gyqx', 'badw',]
                            }),
                            queryParams:{
                                "zjh":data.zjh,
                                "state": 'R7,R8',
                            }
                        });
                        grid.init('lsjtqkTable', {
                            url: urls.getLsjyJtqk,
                            fit: false,
                            width: '100%',
                            height: '400px',
                            firstLoad: true,
                            columns: clumn_ls({
                                check: false,
                                clumns: ['xmmc', 'num'],
                                hidden: ['tssf','jyrq','ayString', 'bahjString', 'gyqx', 'badw',]
                            }),
                            queryParams:{
                                "zjh":data.zjh,
                                "jsbh":data.jsbh,
                            }
                        });
                    }
                    if(title=='风险评估'){
                        //风险评估表单
                        $("#fxpgSave").click(function () {
                            var fxpg1 = new Array();
                            var fxpg2 = new Array();
                            var fxpg3 = new Array();
                            var fxpg4 = new Array();
                            var fxpg5 = new Array();
                            var fxpg6 = new Array();
                            var fxpg7 = new Array();
                            var fxpg8 = new Array();
                            var fxpg9 = new Array();
                            var fxpg10 = new Array();
                            //遍历曾经经历
                            $('input[name="cb_dxcjdjl"]:checked').each(function(){

                                var fxpg_cjjl=$(this).val();
                                fxpg1.push(fxpg_cjjl);

                            });
                            //遍历当前婚姻状况
                            $('input[name="cb_dqdhyzk"]:checked').each(function(){

                                var fxpg_hyzk=$(this).val();
                                fxpg2.push(fxpg_hyzk);

                            });
                            //遍历当前家庭情况
                            $('input[name="cb_dqjtqk"]:checked').each(function(){

                                var fxpg_dqjtqk=$(this).val();
                                fxpg3.push(fxpg_dqjtqk);

                            });
                            //遍历当前感情世界情况
                            $('input[name="cb_dqgqsjqk"]:checked').each(function(){

                                var fxpg_dqgqsjqk=$(this).val();
                                fxpg4.push(fxpg_dqgqsjqk);

                            });
                            //遍历社会生存状况
                            $('input[name="cb_dqshsczk"]:checked').each(function(){

                                var fxpg_dqshsczk=$(this).val();

                                fxpg5.push(fxpg_dqshsczk);

                            });
                            //遍历自述在监室学习生活的异常情况
                            $('input[name="cb_dxzszjsxxshdycqk"]:checked').each(function(){

                                var fxpg_dxzszjsxxshdycqk=$(this).val();

                                fxpg6.push(fxpg_dxzszjsxxshdycqk);

                            });
                            //遍历是否确实对案子有以下消极看法
                            $('input[name="cb_dazdxjkf"]:checked').each(function(){

                                var fxpg_dazdxjkf=$(this).val();

                                fxpg7.push(fxpg_dazdxjkf);

                            });
                            //遍历当前主要心态情况
                            $('input[name="cb_dxdqxlqk"]:checked').each(function(){

                                var fxpg_dxdqxlqk=$(this).val();

                                fxpg8.push(fxpg_dxdqxlqk);

                            });
                            //遍历当前主要神态状况
                            $('input[name="cb_dxdqstzk"]:checked').each(function(){

                                var fxpg_dxdqstzk=$(this).val();

                                fxpg9.push(fxpg_dxdqstzk);

                            });
                            //遍历身居要职
                            $('input[name="cb_sjyz"]:checked').each(function(){
                                var fxpg_sjyz=$(this).val();
                                fxpg10.push(fxpg_sjyz);
                            });
                            var fxpgdata={};
                            fxpgdata.ddcjdjl=JSON.stringify(fxpg1);
                            fxpgdata.dddhyzk=JSON.stringify(fxpg2);
                            fxpgdata.dqjtqk=JSON.stringify(fxpg3);
                            fxpgdata.dqgqsjqk=JSON.stringify(fxpg4);
                            fxpgdata.dqshsczk=JSON.stringify(fxpg5);
                            fxpgdata.ddzsjsycqk=JSON.stringify(fxpg6);

                            fxpgdata.dazdxjkf=JSON.stringify(fxpg7);
                            fxpgdata.dxdqxtqk=JSON.stringify(fxpg8);
                            fxpgdata.dxdqstzk=JSON.stringify(fxpg9);
                            fxpgdata.sjyz=JSON.stringify(fxpg10);

                            fxpgdata.rybh=data.rybh;
                            fxpgdata.jsbh=data.jsbh;

                            console.log("===="+JSON.stringify(fxpgdata));

                            util.ajax({
                                url: urls.fxpgAdd,
                                data: fxpgdata,
                                func: function (datas) {
                                    if (datas.success) {
                                        utils.alert(datas.msg);

                                        $("#thnrTable").datagrid('reload', {
                                            "dxbh": data.rybh
                                        });
                                        document.querySelector("#fm").reset();
                                    } else {
                                        utils.alert(datas.msg);
                                    }
                                }
                            });
                        });
                        $("#fxpgClear").click(function () {
                            document.querySelector("#fm").reset();
                        });
                    }
                }
            });
            combox.initBySelect('#fm .awdCombox', urls.getDictionary);
            // 回显
            var url = '';
            $('#jsh').combotree({
                url: '',
                animate: true,
                method: 'post',
                onShowPanel: function (value) {
                    $(this).combotree("clear");
                    if (url == "" || url == undefined || url == null) {
                        $('#jsh').combotree('reload', urls.getJqCombotree);
                        $(this).combotree("panel")[0].jsh = "fontSelect";
                    } else {
                        $('#jsh').combotree('reload', url);
                        $(this).combotree("panel")[0].jsh = "fontSelect";
                    }
                },
                onClick: function (node) {
                    if (node.isparent) {
                        $("div.panel.combo-p.easyui-fluid").css('display', 'block');
                        $(this).tree(node.state === 'closed' ? 'expand' : 'collapse', node.target);
                    }
                },
                onBeforeExpand: function (node) {
                    var jqh = "dzjs" == node.id ? "" : node.id;
                    var $tree = $('#jsh').combotree("tree");
                    // console.log(data.xb)
                    var sex = data.xb
                    //区分男女监
                    if (sex != undefined && sex == "2" || sex == "6") {
                        $tree.tree("options").url = urls.jsCombotree+"?jqh=" + jqh + "&sex=" + sex;//展开节点时请求的后端接口
                    } else {
                        $tree.tree("options").url = urls.jsCombotree+"?jqh=" + jqh;//展开节点时请求的后端接口
                    }
                },
                onBeforeSelect: function (node) {
                    if (node.isparent) {
                        return false;
                    }
                },


            });

            //谈话教育保存
            $("#thjySave").click(function () {
                var data_thjy = {};
                var thnr_kssj=$("#thnr_kssj").textbox("getValue");
                var thnr_jssj=$("#thnr_jssj").textbox("getValue");
                var thnr_thyy=$("#thnr_thyy").combobox("getValue");
                var thnr_thnr=$("#thnr_thnr").textbox("getValue");
                var ywqxyc=$("input[name=ywqxyc]").val();
                var qxycqk=$("input[name=qxycqk]").val();

                var taskid=data.taskid;
                if(taskid){
                    data_thjy.taskid=taskid;
                }else {
                    data_thjy.taskid='';
                }
                data_thjy.kssj=thnr_kssj;
                data_thjy.jssj=thnr_jssj;
                data_thjy.thyy=thnr_thyy;
                data_thjy.thnr=thnr_thnr;
                data_thjy.ywqxyc=ywqxyc;
                data_thjy.qxycqk=qxycqk;
                data_thjy.rybh=data.rybh;
                util.ajax({
                    url: urls.thjyAdd,
                    data: data_thjy,
                    func: function (datas) {
                        if (datas.success) {
                            utils.alert(datas.msg);

                            $("#thnrTable").datagrid('reload', {
                                "dxbh": data.rybh,
                                "pageSize" : function(){
                                    return $('#thnrTable').datagrid("getPager").pagination("options").pageSize;
                                },
                                "pageIndex" : function(){
                                    return $('#thnrTable').datagrid("getPager").pagination("options").pageNumber;
                                }
                            });
                            document.querySelector("#fm").reset();
                        } else {
                            utils.alert(datas.msg);
                        }
                    }
                });
            });
            $("#thjyClear").click(function () {
                $("#thnr_kssj").textbox("setValue","");
                $("#thnr_jssj").textbox("setValue","");
                $("#thnr_thyy").combobox("setValue","");
                $("#thnr_thnr").textbox("setValue","");
                $("input[name=ywqxyc]").checked=false;
            });
            
        },
        submit: function (url,jbxx, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                var thnr_kssj=$("#thnr_kssj").textbox("getValue");
                var thnr_jssj=$("#thnr_jssj").textbox("getValue");
                var thnr_thyy=$("#thnr_thyy").combobox("getValue");
                var thnr_thnr=$("#thnr_thnr").textbox("getValue");
                var ywqxyc=$("input[name=ywqxyc]").val();
                data.kssj=thnr_kssj;
                data.jssj=thnr_jssj;
                data.thyy=thnr_thyy;
                data.thnr=thnr_thnr;
                data.ywqxyc=ywqxyc;
                data.rybh=jbxx.rybh;
                console.log("===--"+JSON.stringify(data));
                util.ajax({
                    url: urls.thjyAdd,
                    data: data,
                    func: function (data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                            }
                            $("#thnrTable").datagrid('reload', {
                                "dxbh": jbxx.rybh
                            });
                        } else {
                            utils.alert(data.msg);
                        }
                    }
                });
            } else {
                utils.alert('表单数据格式不对！');
            }


        }
    };
    return main;
});