/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Rykh 数据列表
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
	            clumns.push({field : 'jsbh',title : '拘所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'khxdm')>-1){
	            clumns.push({field : 'khxdm',title : '考核项代码',width : 200,hidden:util.getArrayIndex(option.hidden,'khxdm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khxdm==null?"":row.khxdm)+'>'+(row.khxdm==null?"":row.khxdm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'khr')>-1){
	            clumns.push({field : 'khr',title : '考核人',width : 200,hidden:util.getArrayIndex(option.hidden,'khr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khr==null?"":row.khr)+'>'+(row.khr==null?"":row.khr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'khsj')>-1){
	            clumns.push({field : 'khsj',title : '考核时间',width : 200,hidden:util.getArrayIndex(option.hidden,'khsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khsj==null?"":row.khsj)+'>'+(row.khsj==null?"":row.khsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'khmk')>-1){
	            clumns.push({field : 'khmk',title : '考核模块',width : 200,hidden:util.getArrayIndex(option.hidden,'khmk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khmk==null?"":row.khmk)+'>'+(row.khmk==null?"":row.khmk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'khmkid')>-1){
	            clumns.push({field : 'khmkid',title : '考核模块记录ID',width : 200,hidden:util.getArrayIndex(option.hidden,'khmkid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khmkid==null?"":row.khmkid)+'>'+(row.khmkid==null?"":row.khmkid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'khmkcontent')>-1){
	            clumns.push({field : 'khmkcontent',title : '考核模块内容',width : 200,hidden:util.getArrayIndex(option.hidden,'khmkcontent')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khmkcontent==null?"":row.khmkcontent)+'>'+(row.khmkcontent==null?"":row.khmkcontent)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cygljkfs')>-1){
	            clumns.push({field : 'cygljkfs',title : '处遇管理-加扣分数',width : 200,hidden:util.getArrayIndex(option.hidden,'cygljkfs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cygljkfs==null?"":row.cygljkfs)+'>'+(row.cygljkfs==null?"":row.cygljkfs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fxpgjkfs')>-1){
	            clumns.push({field : 'fxpgjkfs',title : '风险评估-加扣分数',width : 200,hidden:util.getArrayIndex(option.hidden,'fxpgjkfs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fxpgjkfs==null?"":row.fxpgjkfs)+'>'+(row.fxpgjkfs==null?"":row.fxpgjkfs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pastable')>-1){
	            clumns.push({field : 'pastable',title : '有效状态',width : 200,hidden:util.getArrayIndex(option.hidden,'pastable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pastable==null?"":row.pastable)+'>'+(row.pastable==null?"":row.pastable)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scbz')>-1){
	            clumns.push({field : 'scbz',title : '上传标志',width : 200,hidden:util.getArrayIndex(option.hidden,'scbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scbz==null?"":row.scbz)+'>'+(row.scbz==null?"":row.scbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'operator')>-1){
	            clumns.push({field : 'operator',title : '操作人',width : 200,hidden:util.getArrayIndex(option.hidden,'operator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.operator==null?"":row.operator)+'>'+(row.operator==null?"":row.operator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jkfs')>-1){
	            clumns.push({field : 'jkfs',title : '加扣分数',width : 200,hidden:util.getArrayIndex(option.hidden,'jkfs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jkfs==null?"":row.jkfs)+'>'+(row.jkfs==null?"":row.jkfs)+'</span>'}});
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