/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Aqjc 数据列表
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
            clumns.push({field : 'id',title : 'ID',width : 200,hidden:util.getArrayIndex(option.hidden,'id')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.id==null?"":row.id)+'>'+(row.id==null?"":row.id)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
        }


        if(util.getArrayIndex(option.clumns,'thrq')>-1){
            clumns.push({field : 'blsj',title : '退还日期',width : 200,hidden:util.getArrayIndex(option.hidden,'blsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blsj==null?"":row.blsj)+'>'+(row.blsj==null?"":row.blsj)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'xfje')>-1){
            clumns.push({field : 'xfje',title : '金额（单位：元）',width : 200,hidden:util.getArrayIndex(option.hidden,'xfje')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xfje==null?"":row.xfje)+'>'+(row.xfje==null?"":row.xfje)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'blr')>-1){
            clumns.push({field : 'blr',title : '操作人',width : 200,hidden:util.getArrayIndex(option.hidden,'blr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blr==null?"":row.blr)+'>'+(row.blr==null?"":row.blr)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'zy')>-1){
            clumns.push({field : 'zy',title : '摘要',width : 200,hidden:util.getArrayIndex(option.hidden,'zy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zy==null?"":row.zy)+'>'+(row.zy==null?"":row.zy)+'</span>'}});
        }

        return clumns;
    };
    return main;
});