/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Zbdj 数据列表
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
	        if(util.getArrayIndex(option.clumns,'zbrq')>-1){
	            clumns.push({field : 'zbrq',title : '值班日期',width : 200,hidden:util.getArrayIndex(option.hidden,'zbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zbrq==null?"":row.zbrq)+'>'+(row.zbrq==null?"":row.zbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sld')>-1){
	            clumns.push({field : 'sld',title : '所领导',width : 200,hidden:util.getArrayIndex(option.hidden,'sld')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sld==null?"":row.sld)+'>'+(row.sld==null?"":row.sld)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sy')>-1){
	            clumns.push({field : 'sy',title : '收押',width : 200,hidden:util.getArrayIndex(option.hidden,'sy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sy==null?"":row.sy)+'>'+(row.sy==null?"":row.sy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ts')>-1){
	            clumns.push({field : 'ts',title : '提审',width : 200,hidden:util.getArrayIndex(option.hidden,'ts')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ts==null?"":row.ts)+'>'+(row.ts==null?"":row.ts)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xkzb')>-1){
	            clumns.push({field : 'xkzb',title : '巡控早班',width : 200,hidden:util.getArrayIndex(option.hidden,'xkzb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xkzb==null?"":row.xkzb)+'>'+(row.xkzb==null?"":row.xkzb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xkzhb')>-1){
	            clumns.push({field : 'xkzhb',title : '巡控中班',width : 200,hidden:util.getArrayIndex(option.hidden,'xkzhb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xkzhb==null?"":row.xkzhb)+'>'+(row.xkzhb==null?"":row.xkzhb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xkwb')>-1){
	            clumns.push({field : 'xkwb',title : '巡控晚班',width : 200,hidden:util.getArrayIndex(option.hidden,'xkwb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xkwb==null?"":row.xkwb)+'>'+(row.xkwb==null?"":row.xkwb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yszb')>-1){
	            clumns.push({field : 'yszb',title : '医生早班',width : 200,hidden:util.getArrayIndex(option.hidden,'yszb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yszb==null?"":row.yszb)+'>'+(row.yszb==null?"":row.yszb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yszhb')>-1){
	            clumns.push({field : 'yszhb',title : '医生中班',width : 200,hidden:util.getArrayIndex(option.hidden,'yszhb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yszhb==null?"":row.yszhb)+'>'+(row.yszhb==null?"":row.yszhb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yswb')>-1){
	            clumns.push({field : 'yswb',title : '医生晚班',width : 200,hidden:util.getArrayIndex(option.hidden,'yswb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yswb==null?"":row.yswb)+'>'+(row.yswb==null?"":row.yswb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gj')>-1){
	            clumns.push({field : 'gj',title : '管教',width : 200,hidden:util.getArrayIndex(option.hidden,'gj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gj==null?"":row.gj)+'>'+(row.gj==null?"":row.gj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zkzb')>-1){
	            clumns.push({field : 'zkzb',title : '总控早班',width : 200,hidden:util.getArrayIndex(option.hidden,'zkzb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zkzb==null?"":row.zkzb)+'>'+(row.zkzb==null?"":row.zkzb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zkzhb')>-1){
	            clumns.push({field : 'zkzhb',title : '总控中班',width : 200,hidden:util.getArrayIndex(option.hidden,'zkzhb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zkzhb==null?"":row.zkzhb)+'>'+(row.zkzhb==null?"":row.zkzhb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zkwb')>-1){
	            clumns.push({field : 'zkwb',title : '总控晚班',width : 200,hidden:util.getArrayIndex(option.hidden,'zkwb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zkwb==null?"":row.zkwb)+'>'+(row.zkwb==null?"":row.zkwb)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'week')>-1){
	            clumns.push({field : 'week',title : '星期（星期一，星期二、、、）',width : 200,hidden:util.getArrayIndex(option.hidden,'week')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.week==null?"":row.week)+'>'+(row.week==null?"":row.week)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});