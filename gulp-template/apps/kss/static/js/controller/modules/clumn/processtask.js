/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Xdrz 数据列表
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
	            clumns.push({field : 'id',title : 'id',width : 200,hidden:util.getArrayIndex(option.hidden,'id')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.params.id==null?"":row.params.id)+'>'+(row.params.id==null?"":row.params.id)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xm')>-1){
	            clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.params.xm==null?"":row.params.xm)+'>'+(row.params.xm==null?"":row.params.xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsh')>-1){
	            clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.params.jsh==null?"":row.params.jsh)+'>'+(row.params.jsh==null?"":row.params.jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dah')>-1){
	            clumns.push({field : 'dah',title : '档案编号',width : 200,hidden:util.getArrayIndex(option.hidden,'dah')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.params.dah==null?"":row.params.dah)+'>'+(row.params.dah==null?"":row.params.dah)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rsrq')>-1){
	        	clumns.push({field : 'rsrq',title : '入所日期',width : 200,hidden:util.getArrayIndex(option.hidden,'rsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.params.rsrq==null?"":row.params.rsrq)+'>'+(row.params.rsrq==null?"":row.params.rsrq)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'sydw')>-1){
			    clumns.push({field : 'sydw',title : '送押单位',width : 200,hidden:util.getArrayIndex(option.hidden,'sydw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.params.sydw==null?"":row.params.sydw)+'>'+(row.params.sydw==null?"":row.params.sydw)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jkzk')>-1){
			    clumns.push({field : 'jkzk',title : '健康情况',width : 200,hidden:util.getArrayIndex(option.hidden,'jkzk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.params.jkzk==null?"":row.params.jkzk)+'>'+(row.params.jkzk==null?"":row.params.jkzk)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jkzkString')>-1){
			    clumns.push({field : 'jkzkString',title : '健康情况',width : 200,hidden:util.getArrayIndex(option.hidden,'jkzkString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.params.jkzkString==null?"":row.params.jkzkString)+'>'+(row.params.jkzkString==null?"":row.params.jkzkString)+'</span>'}});
			}
			
	        return clumns;
	    };
	    return main;
	});