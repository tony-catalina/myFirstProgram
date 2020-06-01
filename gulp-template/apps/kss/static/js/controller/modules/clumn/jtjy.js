/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jtjy 数据列表
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
	        if(util.getArrayIndex(option.clumns,'sj')>-1){
	            clumns.push({field : 'sj',title : '教育时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sj==null?"":row.sj)+'>'+(row.sj==null?"":row.sj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jyr')>-1){
	            clumns.push({field : 'jyr',title : '授课人',width : 200,hidden:util.getArrayIndex(option.hidden,'jyr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jyr==null?"":row.jyr)+'>'+(row.jyr==null?"":row.jyr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zw')>-1){
	        	clumns.push({field : 'zw',title : '授课人职务',width : 200,hidden:util.getArrayIndex(option.hidden,'zw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zw==null?"":row.zw)+'>'+(row.zw==null?"":row.zw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'kt')>-1){
	        	clumns.push({field : 'kt',title : '课题',width : 200,hidden:util.getArrayIndex(option.hidden,'kt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kt==null?"":row.kt)+'>'+(row.kt==null?"":row.kt)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'cjrs')>-1){
				clumns.push({field : 'cjrs',title : '参加人数',width : 200,hidden:util.getArrayIndex(option.hidden,'cjrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cjrs==null?"":row.cjrs)+'>'+(row.cjrs==null?"":row.cjrs)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'fw')>-1){
	            clumns.push({field : 'fw',title : '教育范围',width : 200,hidden:util.getArrayIndex(option.hidden,'fw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fw==null?"":row.fw)+'>'+(row.fw==null?"":row.fw)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'xs')>-1){
				clumns.push({field : 'xs',title : '教育形式',width : 200,hidden:util.getArrayIndex(option.hidden,'xs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xs==null?"":row.xs)+'>'+(row.xs==null?"":row.xs)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'nr')>-1){
	            clumns.push({field : 'nr',title : '教育内容',width : 200,hidden:util.getArrayIndex(option.hidden,'nr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nr==null?"":row.nr)+'>'+(row.nr==null?"":row.nr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xyfy')>-1){
	            clumns.push({field : 'xyfy',title : '学员反映',width : 200,hidden:util.getArrayIndex(option.hidden,'xyfy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xyfy==null?"":row.xyfy)+'>'+(row.xyfy==null?"":row.xyfy)+'</span>'}});
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