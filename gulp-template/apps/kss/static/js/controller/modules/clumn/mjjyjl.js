/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Mjjyjl 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jh')>-1){
	            clumns.push({field : 'jh',title : '警号',width : 200,hidden:util.getArrayIndex(option.hidden,'jh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jh==null?"":row.jh)+'>'+(row.jh==null?"":row.jh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qsny')>-1){
	            clumns.push({field : 'qsny',title : '起始年月',width : 200,hidden:util.getArrayIndex(option.hidden,'qsny')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qsny==null?"":row.qsny)+'>'+(row.qsny==null?"":row.qsny)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zzny')>-1){
	            clumns.push({field : 'zzny',title : '终止年月',width : 200,hidden:util.getArrayIndex(option.hidden,'zzny')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzny==null?"":row.zzny)+'>'+(row.zzny==null?"":row.zzny)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xxmc')>-1){
	            clumns.push({field : 'xxmc',title : '学校名称',width : 200,hidden:util.getArrayIndex(option.hidden,'xxmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xxmc==null?"":row.xxmc)+'>'+(row.xxmc==null?"":row.xxmc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zmr')>-1){
	            clumns.push({field : 'zmr',title : '证明人',width : 200,hidden:util.getArrayIndex(option.hidden,'zmr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zmr==null?"":row.zmr)+'>'+(row.zmr==null?"":row.zmr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'creator')>-1){
	            clumns.push({field : 'creator',title : '创建人',width : 200,hidden:util.getArrayIndex(option.hidden,'creator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.creator==null?"":row.creator)+'>'+(row.creator==null?"":row.creator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'createtime')>-1){
	            clumns.push({field : 'createtime',title : '创建时间',width : 200,hidden:util.getArrayIndex(option.hidden,'createtime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.createtime==null?"":row.createtime)+'>'+(row.createtime==null?"":row.createtime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'updator')>-1){
	            clumns.push({field : 'updator',title : '更新人',width : 200,hidden:util.getArrayIndex(option.hidden,'updator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.updator==null?"":row.updator)+'>'+(row.updator==null?"":row.updator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'updatetime')>-1){
	            clumns.push({field : 'updatetime',title : '更新时间',width : 200,hidden:util.getArrayIndex(option.hidden,'updatetime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.updatetime==null?"":row.updatetime)+'>'+(row.updatetime==null?"":row.updatetime)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});