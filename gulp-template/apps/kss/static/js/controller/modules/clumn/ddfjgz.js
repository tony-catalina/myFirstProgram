/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Ddfjgz 数据列表
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
        if(util.getArrayIndex(option.clumns,'ddmj')>-1){
            clumns.push({field : 'ddmj',title : '督导民警',width : 200,hidden:util.getArrayIndex(option.hidden,'ddmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ddmj==null?"":row.ddmj)+'>'+(row.ddmj==null?"":row.ddmj)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'fj')>-1){
            clumns.push({field : 'fj',title : '辅警',width : 200,hidden:util.getArrayIndex(option.hidden,'fj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fj==null?"":row.fj)+'>'+(row.fj==null?"":row.fj)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'ddsj')>-1){
            clumns.push({field : 'ddsj',title : '督导时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ddsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ddsj==null?"":row.ddsj)+'>'+(row.ddsj==null?"":row.ddsj)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'ddnr')>-1){
            clumns.push({field : 'ddnr',title : '督导内容',width : 200,hidden:util.getArrayIndex(option.hidden,'ddnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ddnr==null?"":row.ddnr)+'>'+(row.ddnr==null?"":row.ddnr)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'bz')>-1){
            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
        }

        return clumns;
    };
    return main;
});