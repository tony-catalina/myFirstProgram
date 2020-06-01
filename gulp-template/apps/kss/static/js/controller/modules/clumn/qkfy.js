/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Qkfy 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jsh')>-1){
	            clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fyr')>-1){
	            clumns.push({field : 'fyr',title : '反映人',width : 200,hidden:util.getArrayIndex(option.hidden,'fyr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fyr==null?"":row.fyr)+'>'+(row.fyr==null?"":row.fyr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fyrbh')>-1){
	            clumns.push({field : 'fyrbh',title : '反映人编号',width : 200,hidden:util.getArrayIndex(option.hidden,'fyrbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fyrbh==null?"":row.fyrbh)+'>'+(row.fyrbh==null?"":row.fyrbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bfydx')>-1){
	            clumns.push({field : 'bfydx',title : '被反映人名称',width : 200,hidden:util.getArrayIndex(option.hidden,'bfydx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bfydx==null?"":row.bfydx)+'>'+(row.bfydx==null?"":row.bfydx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bfydxbh')>-1){
	            clumns.push({field : 'bfydxbh',title : '被反映人编号',width : 200,hidden:util.getArrayIndex(option.hidden,'bfydxbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bfydxbh==null?"":row.bfydxbh)+'>'+(row.bfydxbh==null?"":row.bfydxbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fysj')>-1){
	            clumns.push({field : 'fysj',title : '反映时间',width : 200,hidden:util.getArrayIndex(option.hidden,'fysj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fysj==null?"":row.fysj)+'>'+(row.fysj==null?"":row.fysj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wgqk')>-1){
	            clumns.push({field : 'wgqk',title : '反映情况',width : 200,hidden:util.getArrayIndex(option.hidden,'wgqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgqk==null?"":row.wgqk)+'>'+(row.wgqk==null?"":row.wgqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xxwgqk')>-1){
	            clumns.push({field : 'xxwgqk',title : '详细违规情况',width : 200,hidden:util.getArrayIndex(option.hidden,'xxwgqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xxwgqk==null?"":row.xxwgqk)+'>'+(row.xxwgqk==null?"":row.xxwgqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfyycqk')>-1){
	            clumns.push({field : 'sfyycqk',title : '是否有异常情况',width : 200,hidden:util.getArrayIndex(option.hidden,'sfyycqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfyycqk==null?"":row.sfyycqk)+'>'+(row.sfyycqk==null?"":row.sfyycqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ycqk')>-1){
	            clumns.push({field : 'ycqk',title : '异常情况',width : 200,hidden:util.getArrayIndex(option.hidden,'ycqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ycqk==null?"":row.ycqk)+'>'+(row.ycqk==null?"":row.ycqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xxycqk')>-1){
	            clumns.push({field : 'xxycqk',title : '详细异常情况',width : 200,hidden:util.getArrayIndex(option.hidden,'xxycqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xxycqk==null?"":row.xxycqk)+'>'+(row.xxycqk==null?"":row.xxycqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wgsj')>-1){
	            clumns.push({field : 'wgsj',title : '违规时间',width : 200,hidden:util.getArrayIndex(option.hidden,'wgsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgsj==null?"":row.wgsj)+'>'+(row.wgsj==null?"":row.wgsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zscs')>-1){
	            clumns.push({field : 'zscs',title : '证实次数',width : 200,hidden:util.getArrayIndex(option.hidden,'zscs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zscs==null?"":row.zscs)+'>'+(row.zscs==null?"":row.zscs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zsr')>-1){
	            clumns.push({field : 'zsr',title : '证实人',width : 200,hidden:util.getArrayIndex(option.hidden,'zsr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zsr==null?"":row.zsr)+'>'+(row.zsr==null?"":row.zsr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fdcs')>-1){
	            clumns.push({field : 'fdcs',title : '否定次数',width : 200,hidden:util.getArrayIndex(option.hidden,'fdcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fdcs==null?"":row.fdcs)+'>'+(row.fdcs==null?"":row.fdcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fdr')>-1){
	            clumns.push({field : 'fdr',title : '否定人',width : 200,hidden:util.getArrayIndex(option.hidden,'fdr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fdr==null?"":row.fdr)+'>'+(row.fdr==null?"":row.fdr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yxzt')>-1){
	            clumns.push({field : 'yxzt',title : '有效状态',width : 200,hidden:util.getArrayIndex(option.hidden,'yxzt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yxzt==null?"":row.yxzt)+'>'+(row.yxzt==null?"":row.yxzt)+'</span>'}});
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