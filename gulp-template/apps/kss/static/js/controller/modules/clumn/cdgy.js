/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Ddgy 数据列表
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
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xjsh')>-1){
	            clumns.push({field : 'xjsh',title : '现监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'xjsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xjsh==null?"":row.xjsh)+'>'+(row.xjsh==null?"":row.xjsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ly')>-1){
	            clumns.push({field : 'ly',title : '理由',width : 200,hidden:util.getArrayIndex(option.hidden,'ly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ly==null?"":row.ly)+'>'+(row.ly==null?"":row.ly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qkms')>-1){
	            clumns.push({field : 'qkms',title : '情况描述',width : 200,hidden:util.getArrayIndex(option.hidden,'qkms')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qkms==null?"":row.qkms)+'>'+(row.qkms==null?"":row.qkms)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blr')>-1){
	            clumns.push({field : 'blr',title : '带入监室民警',width : 200,hidden:util.getArrayIndex(option.hidden,'blr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blr==null?"":row.blr)+'>'+(row.blr==null?"":row.blr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blsj')>-1){
	            clumns.push({field : 'blsj',title : '带入监室时间',width : 200,hidden:util.getArrayIndex(option.hidden,'blsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blsj==null?"":row.blsj)+'>'+(row.blsj==null?"":row.blsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfxj')>-1){
	            clumns.push({field : 'sfxj',title : '是否佩戴械具',width : 200,hidden:util.getArrayIndex(option.hidden,'sfxj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfxj==null?"":row.sfxj)+'>'+(row.sfxj==null?"":row.sfxj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzxm')>-1){
	            clumns.push({field : 'zdzxm',title : '中队长姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzxm==null?"":row.zdzxm)+'>'+(row.zdzxm==null?"":row.zdzxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzyj')>-1){
	            clumns.push({field : 'zdzyj',title : '中队长意见',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzyj==null?"":row.zdzyj)+'>'+(row.zdzyj==null?"":row.zdzyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzyjnr')>-1){
	            clumns.push({field : 'zdzyjnr',title : '中队长意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzyjnr==null?"":row.zdzyjnr)+'>'+(row.zdzyjnr==null?"":row.zdzyjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldxm')>-1){
	            clumns.push({field : 'ldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldxm==null?"":row.ldxm)+'>'+(row.ldxm==null?"":row.ldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyj')>-1){
	            clumns.push({field : 'ldyj',title : '领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyj==null?"":row.ldyj)+'>'+(row.ldyj==null?"":row.ldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyjnr')>-1){
	            clumns.push({field : 'ldyjnr',title : '领导意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyjnr==null?"":row.ldyjnr)+'>'+(row.ldyjnr==null?"":row.ldyjnr)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jstzsj')>-1){
	            clumns.push({field : 'jstzsj',title : '监室调整时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jstzsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jstzsj==null?"":row.jstzsj)+'>'+(row.jstzsj==null?"":row.jstzsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yjsh')>-1){
	            clumns.push({field : 'yjsh',title : '原监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'yjsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yjsh==null?"":row.yjsh)+'>'+(row.yjsh==null?"":row.yjsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjxm')>-1){
	            clumns.push({field : 'gjxm',title : '管教姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'gjxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjxm==null?"":row.gjxm)+'>'+(row.gjxm==null?"":row.gjxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjblsj')>-1){
	            clumns.push({field : 'gjblsj',title : '管教办理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'gjblsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjblsj==null?"":row.gjblsj)+'>'+(row.gjblsj==null?"":row.gjblsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'taskid')>-1){
	            clumns.push({field : 'taskid',title : 'taskid',width : 200,hidden:util.getArrayIndex(option.hidden,'taskid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.taskid==null?"":row.taskid)+'>'+(row.taskid==null?"":row.taskid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : 'ywlcid',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzqmsj')>-1){
	            clumns.push({field : 'zdzqmsj',title : '中队长签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzqmsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzqmsj==null?"":row.zdzqmsj)+'>'+(row.zdzqmsj==null?"":row.zdzqmsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldqmsj')>-1){
	            clumns.push({field : 'ldqmsj',title : '领导签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ldqmsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldqmsj==null?"":row.ldqmsj)+'>'+(row.ldqmsj==null?"":row.ldqmsj)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});