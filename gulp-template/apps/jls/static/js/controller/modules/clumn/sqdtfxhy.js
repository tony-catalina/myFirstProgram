/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Sqdtfxhy 数据列表
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
	        if(util.getArrayIndex(option.clumns,'tbq')>-1){
	            clumns.push({field : 'tbq',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbq==null?"":row.tbq)+'>'+(row.tbq==null?"":row.tbq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfza')>-1){
	            clumns.push({field : 'sfza',title : '是否专案',width : 200,hidden:util.getArrayIndex(option.hidden,'sfza')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfza==null?"":row.sfza)+'>'+(row.sfza==null?"":row.sfza)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hydd')>-1){
	            clumns.push({field : 'hydd',title : '会议地点',width : 200,hidden:util.getArrayIndex(option.hidden,'hydd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hydd==null?"":row.hydd)+'>'+(row.hydd==null?"":row.hydd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'kssj')>-1){
	            clumns.push({field : 'kssj',title : '开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'kssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kssj==null?"":row.kssj)+'>'+(row.kssj==null?"":row.kssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jssj')>-1){
	            clumns.push({field : 'jssj',title : '结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jssj==null?"":row.jssj)+'>'+(row.jssj==null?"":row.jssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hyzcr')>-1){
	            clumns.push({field : 'hyzcr',title : '会议主持人',width : 200,hidden:util.getArrayIndex(option.hidden,'hyzcr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hyzcr==null?"":row.hyzcr)+'>'+(row.hyzcr==null?"":row.hyzcr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hyjlr')>-1){
	            clumns.push({field : 'hyjlr',title : '会议记录人',width : 200,hidden:util.getArrayIndex(option.hidden,'hyjlr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hyjlr==null?"":row.hyjlr)+'>'+(row.hyjlr==null?"":row.hyjlr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cjhyry')>-1){
	            clumns.push({field : 'cjhyry',title : '参加会议人员',width : 200,hidden:util.getArrayIndex(option.hidden,'cjhyry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cjhyry==null?"":row.cjhyry)+'>'+(row.cjhyry==null?"":row.cjhyry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hyrr')>-1){
	            clumns.push({field : 'hyrr',title : '会议内容',width : 200,hidden:util.getArrayIndex(option.hidden,'hyrr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hyrr==null?"":row.hyrr)+'>'+(row.hyrr==null?"":row.hyrr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djr')>-1){
	            clumns.push({field : 'djr',title : '登记人',width : 200,hidden:util.getArrayIndex(option.hidden,'djr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djr==null?"":row.djr)+'>'+(row.djr==null?"":row.djr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djsj')>-1){
	            clumns.push({field : 'djsj',title : '登记时间',width : 200,hidden:util.getArrayIndex(option.hidden,'djsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djsj==null?"":row.djsj)+'>'+(row.djsj==null?"":row.djsj)+'</span>'}});
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