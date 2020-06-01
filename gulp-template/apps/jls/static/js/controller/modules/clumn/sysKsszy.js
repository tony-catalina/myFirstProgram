/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * SysKsszy 数据列表
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
	        if(util.getArrayIndex(option.clumns,'orybh')>-1){
	            clumns.push({field : 'orybh',title : 'orybh',width : 200,hidden:util.getArrayIndex(option.hidden,'orybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.orybh==null?"":row.orybh)+'>'+(row.orybh==null?"":row.orybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'osnbh')>-1){
	            clumns.push({field : 'osnbh',title : 'osnbh',width : 200,hidden:util.getArrayIndex(option.hidden,'osnbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.osnbh==null?"":row.osnbh)+'>'+(row.osnbh==null?"":row.osnbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ojsbh')>-1){
	            clumns.push({field : 'ojsbh',title : 'ojsbh',width : 200,hidden:util.getArrayIndex(option.hidden,'ojsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ojsbh==null?"":row.ojsbh)+'>'+(row.ojsbh==null?"":row.ojsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nrybh')>-1){
	            clumns.push({field : 'nrybh',title : 'nrybh',width : 200,hidden:util.getArrayIndex(option.hidden,'nrybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nrybh==null?"":row.nrybh)+'>'+(row.nrybh==null?"":row.nrybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nsnbh')>-1){
	            clumns.push({field : 'nsnbh',title : 'nsnbh',width : 200,hidden:util.getArrayIndex(option.hidden,'nsnbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nsnbh==null?"":row.nsnbh)+'>'+(row.nsnbh==null?"":row.nsnbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'njsbh')>-1){
	            clumns.push({field : 'njsbh',title : 'njsbh',width : 200,hidden:util.getArrayIndex(option.hidden,'njsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.njsbh==null?"":row.njsbh)+'>'+(row.njsbh==null?"":row.njsbh)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});