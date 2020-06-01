/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * ThjyGzqk 数据列表
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
	            clumns.push({field : 'jsbh',title : '拘室编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bzsj')>-1){
	            clumns.push({field : 'bzsj',title : '布置时间',width : 200,hidden:util.getArrayIndex(option.hidden,'bzsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bzsj==null?"":row.bzsj)+'>'+(row.bzsj==null?"":row.bzsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sbzrw')>-1){
	            clumns.push({field : 'sbzrw',title : '所布置任务',width : 200,hidden:util.getArrayIndex(option.hidden,'sbzrw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sbzrw==null?"":row.sbzrw)+'>'+(row.sbzrw==null?"":row.sbzrw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wcqk')>-1){
	            clumns.push({field : 'wcqk',title : '完成情况',width : 200,hidden:util.getArrayIndex(option.hidden,'wcqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wcqk==null?"":row.wcqk)+'>'+(row.wcqk==null?"":row.wcqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scbz')>-1){
	            clumns.push({field : 'scbz',title : '上传标志',width : 200,hidden:util.getArrayIndex(option.hidden,'scbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scbz==null?"":row.scbz)+'>'+(row.scbz==null?"":row.scbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'operator')>-1){
	            clumns.push({field : 'operator',title : '操作人',width : 200,hidden:util.getArrayIndex(option.hidden,'operator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.operator==null?"":row.operator)+'>'+(row.operator==null?"":row.operator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bzr')>-1){
	            clumns.push({field : 'bzr',title : '编制人数',width : 200,hidden:util.getArrayIndex(option.hidden,'bzr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bzr==null?"":row.bzr)+'>'+(row.bzr==null?"":row.bzr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bzdx')>-1){
	            clumns.push({field : 'bzdx',title : '布置对象',width : 200,hidden:util.getArrayIndex(option.hidden,'bzdx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bzdx==null?"":row.bzdx)+'>'+(row.bzdx==null?"":row.bzdx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bzdxbh')>-1){
	            clumns.push({field : 'bzdxbh',title : '布置对象编号',width : 200,hidden:util.getArrayIndex(option.hidden,'bzdxbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bzdxbh==null?"":row.bzdxbh)+'>'+(row.bzdxbh==null?"":row.bzdxbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yxzt')>-1){
	            clumns.push({field : 'yxzt',title : '有效状态',width : 200,hidden:util.getArrayIndex(option.hidden,'yxzt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yxzt==null?"":row.yxzt)+'>'+(row.yxzt==null?"":row.yxzt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
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