/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Crjdj 数据列表
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
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dcmj')>-1){
	            clumns.push({field : 'dcmj',title : '带出民警',width : 200,hidden:util.getArrayIndex(option.hidden,'dcmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dcmj==null?"":row.dcmj)+'>'+(row.dcmj==null?"":row.dcmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dcsj')>-1){
	            clumns.push({field : 'dcsj',title : '带出时间',width : 200,hidden:util.getArrayIndex(option.hidden,'dcsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dcsj==null?"":row.dcsj)+'>'+(row.dcsj==null?"":row.dcsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dcyy')>-1){
	            clumns.push({field : 'dcyy',title : '带出原因',width : 200,hidden:util.getArrayIndex(option.hidden,'dcyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dcyy==null?"":row.dcyy)+'>'+(row.dcyy==null?"":row.dcyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djr')>-1){
	            clumns.push({field : 'djr',title : '登记人',width : 200,hidden:util.getArrayIndex(option.hidden,'djr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djr==null?"":row.djr)+'>'+(row.djr==null?"":row.djr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djsj')>-1){
	            clumns.push({field : 'djsj',title : '登记时间',width : 200,hidden:util.getArrayIndex(option.hidden,'djsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djsj==null?"":row.djsj)+'>'+(row.djsj==null?"":row.djsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'drmj')>-1){
	            clumns.push({field : 'drmj',title : '带入民警',width : 200,hidden:util.getArrayIndex(option.hidden,'drmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.drmj==null?"":row.drmj)+'>'+(row.drmj==null?"":row.drmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'drsj')>-1){
	            clumns.push({field : 'drsj',title : '带入时间',width : 200,hidden:util.getArrayIndex(option.hidden,'drsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.drsj==null?"":row.drsj)+'>'+(row.drsj==null?"":row.drsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcr')>-1){
	            clumns.push({field : 'jcr',title : '检查人',width : 200,hidden:util.getArrayIndex(option.hidden,'jcr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcr==null?"":row.jcr)+'>'+(row.jcr==null?"":row.jcr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcsj')>-1){
	            clumns.push({field : 'jcsj',title : '检查时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jcsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcsj==null?"":row.jcsj)+'>'+(row.jcsj==null?"":row.jcsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcjg')>-1){
	            clumns.push({field : 'jcjg',title : '检查结果',width : 200,hidden:util.getArrayIndex(option.hidden,'jcjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcjg==null?"":row.jcjg)+'>'+(row.jcjg==null?"":row.jcjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ycqk')>-1){
	            clumns.push({field : 'ycqk',title : '异常情况',width : 200,hidden:util.getArrayIndex(option.hidden,'ycqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ycqk==null?"":row.ycqk)+'>'+(row.ycqk==null?"":row.ycqk)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'taskid')>-1){
	            clumns.push({field : 'taskid',title : '流程进程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'taskid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.taskid==null?"":row.taskid)+'>'+(row.taskid==null?"":row.taskid)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});