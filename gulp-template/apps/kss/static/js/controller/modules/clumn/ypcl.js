/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Ypcl 数据列表
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
			if(util.getArrayIndex(option.clumns,'jsbhString')>-1){
	            clumns.push({field : 'jsbhString',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbhString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbhString==null?"":row.jsbhString)+'>'+(row.jsbhString==null?"":row.jsbhString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ypbh')>-1){
	            clumns.push({field : 'ypbh',title : '药品编号',width : 200,hidden:util.getArrayIndex(option.hidden,'ypbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypbh==null?"":row.ypbh)+'>'+(row.ypbh==null?"":row.ypbh)+'</span>'}});
			} 
			if(util.getArrayIndex(option.clumns,'ypbhString')>-1){
	            clumns.push({field : 'ypbhString',title : '药品编号',width : 200,hidden:util.getArrayIndex(option.hidden,'ypbhString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypbhString==null?"":row.ypbhString)+'>'+(row.ypbhString==null?"":row.ypbhString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'pch')>-1){
	            clumns.push({field : 'pch',title : '批次号',width : 200,hidden:util.getArrayIndex(option.hidden,'pch')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pch==null?"":row.pch)+'>'+(row.pch==null?"":row.pch)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clbj')>-1){
	            clumns.push({field : 'clbj',title : '处理标记',width : 200,hidden:util.getArrayIndex(option.hidden,'clbj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clbj==null?"":row.clbj)+'>'+(row.clbj==null?"":row.clbj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sl')>-1){
	            clumns.push({field : 'sl',title : '数量',width : 200,hidden:util.getArrayIndex(option.hidden,'sl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl==null?"":row.sl)+'>'+(row.sl==null?"":row.sl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clsj')>-1){
	            clumns.push({field : 'clsj',title : '过期/损坏处理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'clsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clsj==null?"":row.clsj)+'>'+(row.clsj==null?"":row.clsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clr')>-1){
	            clumns.push({field : 'clr',title : '处理人',width : 200,hidden:util.getArrayIndex(option.hidden,'clr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clr==null?"":row.clr)+'>'+(row.clr==null?"":row.clr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'js')>-1){
	            clumns.push({field : 'js',title : '简述',width : 200,hidden:util.getArrayIndex(option.hidden,'js')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.js==null?"":row.js)+'>'+(row.js==null?"":row.js)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'stateString')>-1){
	            clumns.push({field : 'stateString',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'stateString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.stateString==null?"":row.stateString)+'>'+(row.stateString==null?"":row.stateString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'createtime')>-1){
	            clumns.push({field : 'createtime',title : '创建时间',width : 200,hidden:util.getArrayIndex(option.hidden,'createtime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.createtime==null?"":row.createtime)+'>'+(row.createtime==null?"":row.createtime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'creator')>-1){
	            clumns.push({field : 'creator',title : '创建人',width : 200,hidden:util.getArrayIndex(option.hidden,'creator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.creator==null?"":row.creator)+'>'+(row.creator==null?"":row.creator)+'</span>'}});
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