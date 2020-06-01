/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Sqfx 数据列表
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
	        if(util.getArrayIndex(option.clumns,'hydd')>-1){
	            clumns.push({field : 'hydd',title : '会议地点',width : 200,hidden:util.getArrayIndex(option.hidden,'hydd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hydd==null?"":row.hydd)+'>'+(row.hydd==null?"":row.hydd)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'hynr')>-1){
	            clumns.push({field : 'hynr',title : '会议内容',width : 200,hidden:util.getArrayIndex(option.hidden,'hynr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hynr==null?"":row.hynr)+'>'+(row.hynr==null?"":row.hynr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态(YWSTATE)',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'cjrs')>-1){
	            clumns.push({field : 'cjrs',title : '参加人数',width : 200,hidden:util.getArrayIndex(option.hidden,'cjrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cjrs==null?"":row.cjrs)+'>'+(row.cjrs==null?"":row.cjrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hykssj')>-1){
	            clumns.push({field : 'hykssj',title : '会议开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hykssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hykssj==null?"":row.hykssj)+'>'+(row.hykssj==null?"":row.hykssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hyjssj')>-1){
	            clumns.push({field : 'hyjssj',title : '会议结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hyjssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hyjssj==null?"":row.hyjssj)+'>'+(row.hyjssj==null?"":row.hyjssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hyjlsj')>-1){
	            clumns.push({field : 'hyjlsj',title : '会议记录时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hyjlsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hyjlsj==null?"":row.hyjlsj)+'>'+(row.hyjlsj==null?"":row.hyjlsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hylx')>-1){
	            clumns.push({field : 'hylx',title : '会议类型',width : 200,hidden:util.getArrayIndex(option.hidden,'hylx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hylx==null?"":row.hylx)+'>'+(row.hylx==null?"":row.hylx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hylyurl')>-1){
	            clumns.push({field : 'hylyurl',title : '会议录音URL',width : 200,hidden:util.getArrayIndex(option.hidden,'hylyurl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hylyurl==null?"":row.hylyurl)+'>'+(row.hylyurl==null?"":row.hylyurl)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});