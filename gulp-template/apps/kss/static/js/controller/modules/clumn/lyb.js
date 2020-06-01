/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Lyb 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jq')>-1){
	            clumns.push({field : 'jq',title : '监区',width : 200,hidden:util.getArrayIndex(option.hidden,'jq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jq==null?"":row.jq)+'>'+(row.jq==null?"":row.jq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lyr')>-1){
	            clumns.push({field : 'lyr',title : '留言人 ',width : 200,hidden:util.getArrayIndex(option.hidden,'lyr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lyr==null?"":row.lyr)+'>'+(row.lyr==null?"":row.lyr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lysj')>-1){
	            clumns.push({field : 'lysj',title : '留言时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lysj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lysj==null?"":row.lysj)+'>'+(row.lysj==null?"":row.lysj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yxts')>-1){
	            clumns.push({field : 'yxts',title : '有效天数',width : 200,hidden:util.getArrayIndex(option.hidden,'yxts')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yxts==null?"":row.yxts)+'>'+(row.yxts==null?"":row.yxts)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nr')>-1){
	            clumns.push({field : 'nr',title : '内容',width : 200,hidden:util.getArrayIndex(option.hidden,'nr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nr==null?"":row.nr)+'>'+(row.nr==null?"":row.nr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lyrylx')>-1){
	            clumns.push({field : 'lyrylx',title : '留言人员类型',width : 200,hidden:util.getArrayIndex(option.hidden,'lyrylx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lyrylx==null?"":row.lyrylx)+'>'+(row.lyrylx==null?"":row.lyrylx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'creator')>-1){
	            clumns.push({field : 'creator',title : '创建人',width : 200,hidden:util.getArrayIndex(option.hidden,'creator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.creator==null?"":row.creator)+'>'+(row.creator==null?"":row.creator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'createtime')>-1){
	            clumns.push({field : 'createtime',title : '创建时间 ',width : 200,hidden:util.getArrayIndex(option.hidden,'createtime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.createtime==null?"":row.createtime)+'>'+(row.createtime==null?"":row.createtime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'updator')>-1){
	            clumns.push({field : 'updator',title : '更新人',width : 200,hidden:util.getArrayIndex(option.hidden,'updator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.updator==null?"":row.updator)+'>'+(row.updator==null?"":row.updator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'updatetime')>-1){
	            clumns.push({field : 'updatetime',title : '更新时间',width : 200,hidden:util.getArrayIndex(option.hidden,'updatetime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.updatetime==null?"":row.updatetime)+'>'+(row.updatetime==null?"":row.updatetime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yxrq')>-1){
	            clumns.push({field : 'yxrq',title : '有效日期',width : 200,hidden:util.getArrayIndex(option.hidden,'yxrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yxrq==null?"":row.yxrq)+'>'+(row.yxrq==null?"":row.yxrq)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});