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
	        if(util.getArrayIndex(option.clumns,'loginname')>-1){
	            clumns.push({field : 'loginname',title : '登录名',width : 200,hidden:util.getArrayIndex(option.hidden,'loginname')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.loginname==null?"":row.loginname)+'>'+(row.loginname==null?"":row.loginname)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'logintime')>-1){
				clumns.push({field : 'logintime',title : '登录时间',width : 200,hidden:util.getArrayIndex(option.hidden,'logintime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.logintime==null?"":row.logintime)+'>'+(row.logintime==null?"":row.logintime)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'loginip')>-1){
				clumns.push({field : 'loginip',title : '登录IP',width : 200,hidden:util.getArrayIndex(option.hidden,'loginip')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.loginip==null?"":row.loginip)+'>'+(row.loginip==null?"":row.loginip)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'logintype')>-1){
				clumns.push({field : 'logintype',title : '登录类型',width : 200,hidden:util.getArrayIndex(option.hidden,'logintype')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.logintype==null?"":row.logintype)+'>'+(row.logintype==null?"":row.logintype)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'logintypeString')>-1){
				clumns.push({field : 'logintypeString',title : '登录类型',width : 200,hidden:util.getArrayIndex(option.hidden,'logintypeString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.logintypeString==null?"":row.logintypeString)+'>'+(row.logintypeString==null?"":row.logintypeString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'logouttime')>-1){
	            clumns.push({field : 'logouttime',title : '注销时间',width : 200,hidden:util.getArrayIndex(option.hidden,'logouttime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.logouttime==null?"":row.logouttime)+'>'+(row.logouttime==null?"":row.logouttime)+'</span>'}});
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