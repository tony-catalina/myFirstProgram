/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Emdj 数据列表
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
	        if(util.getArrayIndex(option.clumns,'bllx')>-1){
	            clumns.push({field : 'bllx',title : '办理类型',width : 200,hidden:util.getArrayIndex(option.hidden,'bllx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bllx==null?"":row.bllx)+'>'+(row.bllx==null?"":row.bllx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'emlx')>-1){
	            clumns.push({field : 'emlx',title : '耳目类型',width : 200,hidden:util.getArrayIndex(option.hidden,'emlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.emlx==null?"":row.emlx)+'>'+(row.emlx==null?"":row.emlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xsbx')>-1){
	            clumns.push({field : 'xsbx',title : '现实表现',width : 200,hidden:util.getArrayIndex(option.hidden,'xsbx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xsbx==null?"":row.xsbx)+'>'+(row.xsbx==null?"":row.xsbx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ly')>-1){
	            clumns.push({field : 'ly',title : '理由',width : 200,hidden:util.getArrayIndex(option.hidden,'ly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ly==null?"":row.ly)+'>'+(row.ly==null?"":row.ly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blryj')>-1){
	            clumns.push({field : 'blryj',title : '承办人意见',width : 200,hidden:util.getArrayIndex(option.hidden,'blryj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blryj==null?"":row.blryj)+'>'+(row.blryj==null?"":row.blryj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blr')>-1){
	            clumns.push({field : 'blr',title : '承办人/管教',width : 200,hidden:util.getArrayIndex(option.hidden,'blr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blr==null?"":row.blr)+'>'+(row.blr==null?"":row.blr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blsj')>-1){
	            clumns.push({field : 'blsj',title : '承办/管教签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'blsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blsj==null?"":row.blsj)+'>'+(row.blsj==null?"":row.blsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cxsj')>-1){
	            clumns.push({field : 'cxsj',title : '撤销时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cxsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cxsj==null?"":row.cxsj)+'>'+(row.cxsj==null?"":row.cxsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sldyj')>-1){
	            clumns.push({field : 'sldyj',title : '所领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'sldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldyj==null?"":row.sldyj)+'>'+(row.sldyj==null?"":row.sldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sldyjnr')>-1){
	            clumns.push({field : 'sldyjnr',title : '所领导意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'sldyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldyjnr==null?"":row.sldyjnr)+'>'+(row.sldyjnr==null?"":row.sldyjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sldqm')>-1){
	            clumns.push({field : 'sldqm',title : '所领导签名',width : 200,hidden:util.getArrayIndex(option.hidden,'sldqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldqm==null?"":row.sldqm)+'>'+(row.sldqm==null?"":row.sldqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sldqmsj')>-1){
	            clumns.push({field : 'sldqmsj',title : '所领导签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sldqmsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldqmsj==null?"":row.sldqmsj)+'>'+(row.sldqmsj==null?"":row.sldqmsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'taskid')>-1){
	            clumns.push({field : 'taskid',title : '业务进程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'taskid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.taskid==null?"":row.taskid)+'>'+(row.taskid==null?"":row.taskid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scbz')>-1){
	            clumns.push({field : 'scbz',title : '上传标志',width : 200,hidden:util.getArrayIndex(option.hidden,'scbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scbz==null?"":row.scbz)+'>'+(row.scbz==null?"":row.scbz)+'</span>'}});
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