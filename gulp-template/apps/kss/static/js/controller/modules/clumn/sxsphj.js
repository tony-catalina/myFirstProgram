/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Sxsphj 数据列表
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
	            clumns.push({field : 'id',title : '主键',width : 200,hidden:util.getArrayIndex(option.hidden,'id')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.id==null?"":row.id)+'>'+(row.id==null?"":row.id)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjly')>-1){
	            clumns.push({field : 'hjly',title : '会见理由',width : 200,hidden:util.getArrayIndex(option.hidden,'hjly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjly==null?"":row.hjly)+'>'+(row.hjly==null?"":row.hjly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqr')>-1){
	            clumns.push({field : 'sqr',title : '申请人',width : 200,hidden:util.getArrayIndex(option.hidden,'sqr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqr==null?"":row.sqr)+'>'+(row.sqr==null?"":row.sqr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqsj')>-1){
	            clumns.push({field : 'sqsj',title : '申请时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sqsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqsj==null?"":row.sqsj)+'>'+(row.sqsj==null?"":row.sqsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjrid')>-1){
	            clumns.push({field : 'hjrid',title : '会见人ID',width : 200,hidden:util.getArrayIndex(option.hidden,'hjrid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjrid==null?"":row.hjrid)+'>'+(row.hjrid==null?"":row.hjrid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjdd')>-1){
	            clumns.push({field : 'hjdd',title : '会见地点',width : 200,hidden:util.getArrayIndex(option.hidden,'hjdd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjdd==null?"":row.hjdd)+'>'+(row.hjdd==null?"":row.hjdd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ltzh')>-1){
	            clumns.push({field : 'ltzh',title : '聊天账号',width : 200,hidden:util.getArrayIndex(option.hidden,'ltzh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ltzh==null?"":row.ltzh)+'>'+(row.ltzh==null?"":row.ltzh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fkfs')>-1){
	            clumns.push({field : 'fkfs',title : '反馈方式',width : 200,hidden:util.getArrayIndex(option.hidden,'fkfs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fkfs==null?"":row.fkfs)+'>'+(row.fkfs==null?"":row.fkfs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fkdx')>-1){
	            clumns.push({field : 'fkdx',title : '反馈对象',width : 200,hidden:util.getArrayIndex(option.hidden,'fkdx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fkdx==null?"":row.fkdx)+'>'+(row.fkdx==null?"":row.fkdx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fkrq')>-1){
	            clumns.push({field : 'fkrq',title : '反馈日期',width : 200,hidden:util.getArrayIndex(option.hidden,'fkrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fkrq==null?"":row.fkrq)+'>'+(row.fkrq==null?"":row.fkrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fkqk')>-1){
	            clumns.push({field : 'fkqk',title : '反馈及沟通情况',width : 200,hidden:util.getArrayIndex(option.hidden,'fkqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fkqk==null?"":row.fkqk)+'>'+(row.fkqk==null?"":row.fkqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fkr')>-1){
	            clumns.push({field : 'fkr',title : '反馈人',width : 200,hidden:util.getArrayIndex(option.hidden,'fkr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fkr==null?"":row.fkr)+'>'+(row.fkr==null?"":row.fkr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程id',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
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