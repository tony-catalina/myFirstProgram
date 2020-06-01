/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Zbdjhistory 数据列表
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
	        if(util.getArrayIndex(option.clumns,'year')>-1){
	            clumns.push({field : 'year',title : '年',width : 200,hidden:util.getArrayIndex(option.hidden,'year')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.year==null?"":row.year)+'>'+(row.year==null?"":row.year)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'month')>-1){
	            clumns.push({field : 'month',title : '月',width : 200,hidden:util.getArrayIndex(option.hidden,'month')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.month==null?"":row.month)+'>'+(row.month==null?"":row.month)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'week')>-1){
	            clumns.push({field : 'week',title : '周',width : 200,hidden:util.getArrayIndex(option.hidden,'week')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.week==null?"":row.week)+'>'+(row.week==null?"":row.week)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'content')>-1){
	            clumns.push({field : 'content',title : '周数据',width : 200,hidden:util.getArrayIndex(option.hidden,'content')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.content==null?"":row.content)+'>'+(row.content==null?"":row.content)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'createtime')>-1){
	            clumns.push({field : 'createtime',title : '创建时间',width : 200,hidden:util.getArrayIndex(option.hidden,'createtime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.createtime==null?"":row.createtime)+'>'+(row.createtime==null?"":row.createtime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'creator')>-1){
	            clumns.push({field : 'creator',title : '创建人',width : 200,hidden:util.getArrayIndex(option.hidden,'creator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.creator==null?"":row.creator)+'>'+(row.creator==null?"":row.creator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'updatetime')>-1){
	            clumns.push({field : 'updatetime',title : '更新时间',width : 200,hidden:util.getArrayIndex(option.hidden,'updatetime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.updatetime==null?"":row.updatetime)+'>'+(row.updatetime==null?"":row.updatetime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'updator')>-1){
	            clumns.push({field : 'updator',title : '更新人',width : 200,hidden:util.getArrayIndex(option.hidden,'updator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.updator==null?"":row.updator)+'>'+(row.updator==null?"":row.updator)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});