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
		if(util.getArrayIndex(option.clumns,'optype')>-1){
			clumns.push({field : 'optype',title : '操作类型',width : 200,hidden:util.getArrayIndex(option.hidden,'optype')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.optype==null?"":row.optype)+'>'+(row.optype==null?"":row.optype)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'opcontent')>-1){
			clumns.push({field : 'opcontent',title : '操作内容',width : 200,hidden:util.getArrayIndex(option.hidden,'opcontent')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.opcontent==null?"":row.opcontent)+'>'+(row.opcontent==null?"":row.opcontent)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'opresult')>-1){
			clumns.push({field : 'opresult',title : '操作结果',width : 200,hidden:util.getArrayIndex(option.hidden,'opresult')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.opresult==null?"":row.opresult)+'>'+(row.opresult==null?"":row.opresult)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'optime')>-1){
			clumns.push({field : 'optime',title : '操作时间',width : 200,hidden:util.getArrayIndex(option.hidden,'optime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.optime==null?"":row.optime)+'>'+(row.optime==null?"":row.optime)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'operator')>-1){
			clumns.push({field : 'operator',title : '操作人',width : 200,hidden:util.getArrayIndex(option.hidden,'operator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.operator==null?"":row.operator)+'>'+(row.operator==null?"":row.operator)+'</span>'}});
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