/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Zdys 数据列表
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
	        if(util.getArrayIndex(option.clumns,'zdlx')>-1){
	            clumns.push({field : 'zdlx',title : 'zdlx',width : 200,hidden:util.getArrayIndex(option.hidden,'zdlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdlx==null?"":row.zdlx)+'>'+(row.zdlx==null?"":row.zdlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jgzd')>-1){
	            clumns.push({field : 'jgzd',title : 'jgzd',width : 200,hidden:util.getArrayIndex(option.hidden,'jgzd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jgzd==null?"":row.jgzd)+'>'+(row.jgzd==null?"":row.jgzd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wbzd')>-1){
	            clumns.push({field : 'wbzd',title : 'wbzd',width : 200,hidden:util.getArrayIndex(option.hidden,'wbzd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wbzd==null?"":row.wbzd)+'>'+(row.wbzd==null?"":row.wbzd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jgzh')>-1){
	            clumns.push({field : 'jgzh',title : 'jgzh',width : 200,hidden:util.getArrayIndex(option.hidden,'jgzh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jgzh==null?"":row.jgzh)+'>'+(row.jgzh==null?"":row.jgzh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wbzh')>-1){
	            clumns.push({field : 'wbzh',title : 'wbzh',width : 200,hidden:util.getArrayIndex(option.hidden,'wbzh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wbzh==null?"":row.wbzh)+'>'+(row.wbzh==null?"":row.wbzh)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});