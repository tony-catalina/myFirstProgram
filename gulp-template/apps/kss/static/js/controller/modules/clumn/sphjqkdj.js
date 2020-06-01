/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Sphjqkdj 数据列表
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
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjrid')>-1){
	            clumns.push({field : 'hjrid',title : '会见人ID',width : 200,hidden:util.getArrayIndex(option.hidden,'hjrid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjrid==null?"":row.hjrid)+'>'+(row.hjrid==null?"":row.hjrid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjkssj')>-1){
	            clumns.push({field : 'hjkssj',title : '会见开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hjkssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjkssj==null?"":row.hjkssj)+'>'+(row.hjkssj==null?"":row.hjkssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjjssj')>-1){
	            clumns.push({field : 'hjjssj',title : '会见结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hjjssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjjssj==null?"":row.hjjssj)+'>'+(row.hjjssj==null?"":row.hjjssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bhjrdd')>-1){
	            clumns.push({field : 'bhjrdd',title : '被会见人地点',width : 200,hidden:util.getArrayIndex(option.hidden,'bhjrdd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bhjrdd==null?"":row.bhjrdd)+'>'+(row.bhjrdd==null?"":row.bhjrdd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bhjrbx')>-1){
	            clumns.push({field : 'bhjrbx',title : '被会见人表现',width : 200,hidden:util.getArrayIndex(option.hidden,'bhjrbx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bhjrbx==null?"":row.bhjrbx)+'>'+(row.bhjrbx==null?"":row.bhjrbx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjrdd')>-1){
	            clumns.push({field : 'hjrdd',title : '会见人地点',width : 200,hidden:util.getArrayIndex(option.hidden,'hjrdd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjrdd==null?"":row.hjrdd)+'>'+(row.hjrdd==null?"":row.hjrdd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjrbx')>-1){
	            clumns.push({field : 'hjrbx',title : '会见人表现',width : 200,hidden:util.getArrayIndex(option.hidden,'hjrbx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjrbx==null?"":row.hjrbx)+'>'+(row.hjrbx==null?"":row.hjrbx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsyy')>-1){
	            clumns.push({field : 'jsyy',title : '结束原因',width : 200,hidden:util.getArrayIndex(option.hidden,'jsyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsyy==null?"":row.jsyy)+'>'+(row.jsyy==null?"":row.jsyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjlx')>-1){
	            clumns.push({field : 'hjlx',title : '会见类型',width : 200,hidden:util.getArrayIndex(option.hidden,'hjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjlx==null?"":row.hjlx)+'>'+(row.hjlx==null?"":row.hjlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态(YWSTATE)',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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