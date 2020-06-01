/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Wmxc 数据列表
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
	        if(util.getArrayIndex(option.clumns,'xcnr')>-1){
	            clumns.push({field : 'xcnr',title : '宣传内容',width : 200,hidden:util.getArrayIndex(option.hidden,'xcnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xcnr==null?"":row.xcnr)+'>'+(row.xcnr==null?"":row.xcnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xcdx')>-1){
	            clumns.push({field : 'xcdx',title : '宣传对象',width : 200,hidden:util.getArrayIndex(option.hidden,'xcdx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xcdx==null?"":row.xcdx)+'>'+(row.xcdx==null?"":row.xcdx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xcsj')>-1){
	            clumns.push({field : 'xcsj',title : '宣传时间',width : 200,hidden:util.getArrayIndex(option.hidden,'xcsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xcsj==null?"":row.xcsj)+'>'+(row.xcsj==null?"":row.xcsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yxq')>-1){
	            clumns.push({field : 'yxq',title : '有限期',width : 200,hidden:util.getArrayIndex(option.hidden,'yxq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yxq==null?"":row.yxq)+'>'+(row.yxq==null?"":row.yxq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fzr')>-1){
	            clumns.push({field : 'fzr',title : '负责人',width : 200,hidden:util.getArrayIndex(option.hidden,'fzr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fzr==null?"":row.fzr)+'>'+(row.fzr==null?"":row.fzr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xcfw')>-1){
	            clumns.push({field : 'xcfw',title : '宣传范围',width : 200,hidden:util.getArrayIndex(option.hidden,'xcfw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xcfw==null?"":row.xcfw)+'>'+(row.xcfw==null?"":row.xcfw)+'</span>'}});
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