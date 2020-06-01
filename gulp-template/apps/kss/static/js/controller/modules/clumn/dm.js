/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Dm 数据列表
 */
define(function (require) {
    var tools=require('awd/jquery/tools');
    var util=require('awd/easyui/util');
    var main=function(option){
        var clumns=[];
        if(tools.isTrue(option.check)){
            clumns.push({field: 'oid',title: '',formatter: function(value, rowData, rowIndex){return '<input type="checkbox" name="selectCheckBox" id="selectCheckBox' + rowIndex + '" value="' + rowData.oid + '" />';}});
        }else{
            clumns.push({field: 'oid',title: '',formatter: function(value, rowData, rowIndex){return '<input type="radio" name="selectRadio" id="selectRadio' + rowIndex + '" value="' + rowData.oid + '" />';}});
        }
        if(util.getArrayIndex(option.clumns,'id')>-1){
            clumns.push({field : 'id',title : 'id',width : 200,hidden:util.getArrayIndex(option.hidden,'id')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.id==null?"":row.id)+'>'+(row.id==null?"":row.id)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'jsh')>-1){
            clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'wdrybh')>-1){
            clumns.push({field : 'wdrybh',title : '未到人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'wdrybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wdrybh==null?"":row.wdrybh)+'>'+(row.wdrybh==null?"":row.wdrybh)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'kssj')>-1){
            clumns.push({field : 'kssj',title : '开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'kssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kssj==null?"":row.kssj)+'>'+(row.kssj==null?"":row.kssj)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'jssj')>-1){
            clumns.push({field : 'jssj',title : '结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jssj==null?"":row.jssj)+'>'+(row.jssj==null?"":row.jssj)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'wdrs')>-1){
            clumns.push({field : 'wdrs',title : '未到人数',width : 200,hidden:util.getArrayIndex(option.hidden,'wdrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wdrs==null?"":row.wdrs)+'>'+(row.wdrs==null?"":row.wdrs)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'dmr')>-1){
            clumns.push({field : 'dmr',title : '点名人',width : 200,hidden:util.getArrayIndex(option.hidden,'dmr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dmr==null?"":row.dmr)+'>'+(row.dmr==null?"":row.dmr)+'</span>'}});
        }
        return clumns;
    };
    return main;
});