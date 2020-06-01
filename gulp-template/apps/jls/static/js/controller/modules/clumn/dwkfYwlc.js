/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Dwkf 数据列表
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
		if(util.getArrayIndex(option.clumns,'tbr')>-1){
			clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'tbrq')>-1){
			clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'kfsj')>-1){
			clumns.push({field : 'kfsj',title : '开放时间',width : 200,hidden:util.getArrayIndex(option.hidden,'kfsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.dwkf_kfsj==null?"":row.ldpsxx.dwkf_kfsj)+'>'+(row.ldpsxx.dwkf_kfsj==null?"":row.ldpsxx.dwkf_kfsj)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'kflx')>-1){
			clumns.push({field : 'kflx',title : '开放类型',width : 200,hidden:util.getArrayIndex(option.hidden,'kflx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.dwkf_kflx==null?"":row.ldpsxx.dwkf_kflx)+'>'+(row.ldpsxx.dwkf_kflx==null?"":row.ldpsxx.dwkf_kflx)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'dwkf_kflxString')>-1){
			clumns.push({field : 'dwkf_kflxString',title : '开放类型',width : 200,hidden:util.getArrayIndex(option.hidden,'dwkf_kflxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.dwkf_kflxString==null?"":row.ldpsxx.dwkf_kflxString)+'>'+(row.ldpsxx.dwkf_kflxString==null?"":row.ldpsxx.dwkf_kflxString)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'cgdx')>-1){
			clumns.push({field : 'cgdx',title : '参观对象',width : 200,hidden:util.getArrayIndex(option.hidden,'cgdx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.dwkf_cgdx==null?"":row.ldpsxx.dwkf_cgdx)+'>'+(row.ldpsxx.dwkf_cgdx==null?"":row.ldpsxx.dwkf_cgdx)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'cgrs')>-1){
			clumns.push({field : 'cgrs',title : '参观人数',width : 200,hidden:util.getArrayIndex(option.hidden,'cgrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.dwkf_cgrs==null?"":row.ldpsxx.dwkf_cgrs)+'>'+(row.ldpsxx.dwkf_cgrs==null?"":row.ldpsxx.dwkf_cgrs)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'uuid')>-1){
			clumns.push({field : 'uuid',title : '参观人UUID',width : 200,hidden:util.getArrayIndex(option.hidden,'uuid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.uuid==null?"":row.uuid)+'>'+(row.uuid==null?"":row.uuid)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'dwmc')>-1){
			clumns.push({field : 'dwmc',title : '单位名称',width : 200,hidden:util.getArrayIndex(option.hidden,'dwmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.dwkf_dwmc==null?"":row.ldpsxx.dwkf_dwmc)+'>'+(row.ldpsxx.dwkf_dwmc==null?"":row.ldpsxx.dwkf_dwmc)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'sqly')>-1){
			clumns.push({field : 'sqly',title : '申请理由',width : 200,hidden:util.getArrayIndex(option.hidden,'sqly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.dwkf_sqly==null?"":row.ldpsxx.dwkf_sqly)+'>'+(row.ldpsxx.dwkf_sqly==null?"":row.ldpsxx.dwkf_sqly)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'bz')>-1){
			clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'szyj')>-1){
			clumns.push({field : 'szyj',title : '所长意见',width : 200,hidden:util.getArrayIndex(option.hidden,'szyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.szyj==null?"":row.szyj)+'>'+(row.szyj==null?"":row.szyj)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'szyjnr')>-1){
			clumns.push({field : 'szyjnr',title : '所长意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'szyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.szyjnr==null?"":row.szyjnr)+'>'+(row.szyjnr==null?"":row.szyjnr)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'szqm')>-1){
			clumns.push({field : 'szqm',title : '所长签名',width : 200,hidden:util.getArrayIndex(option.hidden,'szqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.szqm==null?"":row.szqm)+'>'+(row.szqm==null?"":row.szqm)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'szqmsj')>-1){
			clumns.push({field : 'szqmsj',title : '所长签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'szqmsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.szqmsj==null?"":row.szqmsj)+'>'+(row.szqmsj==null?"":row.szqmsj)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'sjldyj')>-1){
			clumns.push({field : 'sjldyj',title : '上级领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'sjldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjldyj==null?"":row.sjldyj)+'>'+(row.sjldyj==null?"":row.sjldyj)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'sjldyjnr')>-1){
			clumns.push({field : 'sjldyjnr',title : '上级领导意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'sjldyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjldyjnr==null?"":row.sjldyjnr)+'>'+(row.sjldyjnr==null?"":row.sjldyjnr)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'sjldqm')>-1){
			clumns.push({field : 'sjldqm',title : '上级领导签名',width : 200,hidden:util.getArrayIndex(option.hidden,'sjldqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjldqm==null?"":row.sjldqm)+'>'+(row.sjldqm==null?"":row.sjldqm)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'sjldqmsj')>-1){
			clumns.push({field : 'sjldqmsj',title : '上级领导签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sjldqmsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjldqmsj==null?"":row.sjldqmsj)+'>'+(row.sjldqmsj==null?"":row.sjldqmsj)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'kskfsj')>-1){
			clumns.push({field : 'kskfsj',title : '开始开放时间',width : 200,hidden:util.getArrayIndex(option.hidden,'kskfsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kskfsj==null?"":row.kskfsj)+'>'+(row.kskfsj==null?"":row.kskfsj)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'kfdd')>-1){
			clumns.push({field : 'kfdd',title : '开放地点',width : 200,hidden:util.getArrayIndex(option.hidden,'kfdd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kfdd==null?"":row.kfdd)+'>'+(row.kfdd==null?"":row.kfdd)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'sqdh')>-1){
			clumns.push({field : 'sqdh',title : '申请单号',width : 200,hidden:util.getArrayIndex(option.hidden,'sqdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqdh==null?"":row.sqdh)+'>'+(row.sqdh==null?"":row.sqdh)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'sqr')>-1){
			clumns.push({field : 'sqr',title : '申请人',width : 200,hidden:util.getArrayIndex(option.hidden,'sqr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqr==null?"":row.sqr)+'>'+(row.sqr==null?"":row.sqr)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'fzr')>-1){
			clumns.push({field : 'fzr',title : '负责人',width : 200,hidden:util.getArrayIndex(option.hidden,'fzr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fzr==null?"":row.fzr)+'>'+(row.fzr==null?"":row.fzr)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'hdqk')>-1){
			clumns.push({field : 'hdqk',title : '活动情况',width : 200,hidden:util.getArrayIndex(option.hidden,'hdqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hdqk==null?"":row.hdqk)+'>'+(row.hdqk==null?"":row.hdqk)+'</span>'}});
		}
		if(util.getArrayIndex(option.clumns,'jssj')>-1){
			clumns.push({field : 'jssj',title : '结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jssj==null?"":row.jssj)+'>'+(row.jssj==null?"":row.jssj)+'</span>'}});
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