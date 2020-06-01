/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Zdry 数据列表
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
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bllx')>-1){
	            clumns.push({field : 'bllx',title : '办理类型',width : 200,hidden:util.getArrayIndex(option.hidden,'bllx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bllx==null?"":row.bllx)+'>'+(row.bllx==null?"":row.bllx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rygllb')>-1){
	            clumns.push({field : 'rygllb',title : '人员管理类别',width : 200,hidden:util.getArrayIndex(option.hidden,'rygllb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rygllb==null?"":row.rygllb)+'>'+(row.rygllb==null?"":row.rygllb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ly')>-1){
	            clumns.push({field : 'ly',title : '理由',width : 200,hidden:util.getArrayIndex(option.hidden,'ly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ly==null?"":row.ly)+'>'+(row.ly==null?"":row.ly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jgcs')>-1){
	            clumns.push({field : 'jgcs',title : '监管措施',width : 200,hidden:util.getArrayIndex(option.hidden,'jgcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jgcs==null?"":row.jgcs)+'>'+(row.jgcs==null?"":row.jgcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qzcs')>-1){
	            clumns.push({field : 'qzcs',title : '强制措施',width : 200,hidden:util.getArrayIndex(option.hidden,'qzcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qzcs==null?"":row.qzcs)+'>'+(row.qzcs==null?"":row.qzcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cpr')>-1){
	            clumns.push({field : 'cpr',title : '呈批人',width : 200,hidden:util.getArrayIndex(option.hidden,'cpr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cpr==null?"":row.cpr)+'>'+(row.cpr==null?"":row.cpr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cpsj')>-1){
	            clumns.push({field : 'cpsj',title : '呈批时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cpsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cpsj==null?"":row.cpsj)+'>'+(row.cpsj==null?"":row.cpsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyj')>-1){
	            clumns.push({field : 'ldyj',title : '领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyj==null?"":row.ldyj)+'>'+(row.ldyj==null?"":row.ldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdyj')>-1){
	            clumns.push({field : 'zdyj',title : '中队/警组意见',width : 200,hidden:util.getArrayIndex(option.hidden,'zdyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdyj==null?"":row.zdyj)+'>'+(row.zdyj==null?"":row.zdyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdyjnr')>-1){
	            clumns.push({field : 'zdyjnr',title : '中队/警组意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'zdyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdyjnr==null?"":row.zdyjnr)+'>'+(row.zdyjnr==null?"":row.zdyjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdqm')>-1){
	            clumns.push({field : 'zdqm',title : '中队/警组签名',width : 200,hidden:util.getArrayIndex(option.hidden,'zdqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdqm==null?"":row.zdqm)+'>'+(row.zdqm==null?"":row.zdqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdqmrq')>-1){
	            clumns.push({field : 'zdqmrq',title : '中队/警组签名日期',width : 200,hidden:util.getArrayIndex(option.hidden,'zdqmrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdqmrq==null?"":row.zdqmrq)+'>'+(row.zdqmrq==null?"":row.zdqmrq)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'sldqmrq')>-1){
	            clumns.push({field : 'sldqmrq',title : '所领导签名日期',width : 200,hidden:util.getArrayIndex(option.hidden,'sldqmrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldqmrq==null?"":row.sldqmrq)+'>'+(row.sldqmrq==null?"":row.sldqmrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'taskid')>-1){
	            clumns.push({field : 'taskid',title : '业务进程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'taskid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.taskid==null?"":row.taskid)+'>'+(row.taskid==null?"":row.taskid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scbz')>-1){
	            clumns.push({field : 'scbz',title : '上传标志',width : 200,hidden:util.getArrayIndex(option.hidden,'scbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scbz==null?"":row.scbz)+'>'+(row.scbz==null?"":row.scbz)+'</span>'}});
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