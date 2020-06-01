/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Thys 数据列表
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
	        if(util.getArrayIndex(option.clumns,'thlx')>-1){
	            clumns.push({field : 'thlx',title : '谈话类型',width : 200,hidden:util.getArrayIndex(option.hidden,'thlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.thlx==null?"":row.thlx)+'>'+(row.thlx==null?"":row.thlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nr')>-1){
	            clumns.push({field : 'nr',title : '内容',width : 200,hidden:util.getArrayIndex(option.hidden,'nr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nr==null?"":row.nr)+'>'+(row.nr==null?"":row.nr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxmc')>-1){
	            clumns.push({field : 'lxmc',title : '类型名称',width : 200,hidden:util.getArrayIndex(option.hidden,'lxmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxmc==null?"":row.lxmc)+'>'+(row.lxmc==null?"":row.lxmc)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});