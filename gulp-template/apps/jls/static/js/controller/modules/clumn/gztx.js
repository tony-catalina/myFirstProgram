/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Gztx 数据列表
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
	        if(util.getArrayIndex(option.clumns,'fsr')>-1){
	            clumns.push({field : 'fsr',title : '发送人 ',width : 200,hidden:util.getArrayIndex(option.hidden,'fsr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fsr==null?"":row.fsr)+'>'+(row.fsr==null?"":row.fsr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fbjb')>-1){
	            clumns.push({field : 'fbjb',title : '发布级别',width : 200,hidden:util.getArrayIndex(option.hidden,'fbjb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fbjb==null?"":row.fbjb)+'>'+(row.fbjb==null?"":row.fbjb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fssj')>-1){
	            clumns.push({field : 'fssj',title : '发送时间',width : 200,hidden:util.getArrayIndex(option.hidden,'fssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fssj==null?"":row.fssj)+'>'+(row.fssj==null?"":row.fssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nr')>-1){
	            clumns.push({field : 'nr',title : '内容',width : 200,hidden:util.getArrayIndex(option.hidden,'nr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nr==null?"":row.nr)+'>'+(row.nr==null?"":row.nr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fbgw')>-1){
	            clumns.push({field : 'fbgw',title : '发布岗位',width : 200,hidden:util.getArrayIndex(option.hidden,'fbgw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fbgw==null?"":row.fbgw)+'>'+(row.fbgw==null?"":row.fbgw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsr')>-1){
	            clumns.push({field : 'jsr',title : '接收人',width : 200,hidden:util.getArrayIndex(option.hidden,'jsr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsr==null?"":row.jsr)+'>'+(row.jsr==null?"":row.jsr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fbkssj')>-1){
	            clumns.push({field : 'fbkssj',title : '发布开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'fbkssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fbkssj==null?"":row.fbkssj)+'>'+(row.fbkssj==null?"":row.fbkssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fbjssj')>-1){
	            clumns.push({field : 'fbjssj',title : '发布结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'fbjssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fbjssj==null?"":row.fbjssj)+'>'+(row.fbjssj==null?"":row.fbjssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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