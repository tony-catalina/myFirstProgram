/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Wgsjcl 数据列表
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
	        if(util.getArrayIndex(option.clumns,'xsjlid')>-1){
	            clumns.push({field : 'xsjlid',title : '巡视记录ID',width : 200,hidden:util.getArrayIndex(option.hidden,'xsjlid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xsjlid==null?"":row.xsjlid)+'>'+(row.xsjlid==null?"":row.xsjlid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dxbh')>-1){
	            clumns.push({field : 'dxbh',title : '对象编号',width : 200,hidden:util.getArrayIndex(option.hidden,'dxbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dxbh==null?"":row.dxbh)+'>'+(row.dxbh==null?"":row.dxbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clr')>-1){
	            clumns.push({field : 'clr',title : '处理人',width : 200,hidden:util.getArrayIndex(option.hidden,'clr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clr==null?"":row.clr)+'>'+(row.clr==null?"":row.clr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clsj')>-1){
	            clumns.push({field : 'clsj',title : '处理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'clsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clsj==null?"":row.clsj)+'>'+(row.clsj==null?"":row.clsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clqk')>-1){
	            clumns.push({field : 'clqk',title : '处理情况',width : 200,hidden:util.getArrayIndex(option.hidden,'clqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clqk==null?"":row.clqk)+'>'+(row.clqk==null?"":row.clqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tjsj')>-1){
	            clumns.push({field : 'tjsj',title : '提交时间',width : 200,hidden:util.getArrayIndex(option.hidden,'tjsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tjsj==null?"":row.tjsj)+'>'+(row.tjsj==null?"":row.tjsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tjr')>-1){
	            clumns.push({field : 'tjr',title : '提交人',width : 200,hidden:util.getArrayIndex(option.hidden,'tjr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tjr==null?"":row.tjr)+'>'+(row.tjr==null?"":row.tjr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wgqk')>-1){
	            clumns.push({field : 'wgqk',title : '违规情况',width : 200,hidden:util.getArrayIndex(option.hidden,'wgqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgqk==null?"":row.wgqk)+'>'+(row.wgqk==null?"":row.wgqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wgqkcon')>-1){
	            clumns.push({field : 'wgqkcon',title : '违规详细情况',width : 200,hidden:util.getArrayIndex(option.hidden,'wgqkcon')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgqkcon==null?"":row.wgqkcon)+'>'+(row.wgqkcon==null?"":row.wgqkcon)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wgsj')>-1){
	            clumns.push({field : 'wgsj',title : '违规时间',width : 200,hidden:util.getArrayIndex(option.hidden,'wgsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgsj==null?"":row.wgsj)+'>'+(row.wgsj==null?"":row.wgsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clzt')>-1){
	            clumns.push({field : 'clzt',title : '处理状态',width : 200,hidden:util.getArrayIndex(option.hidden,'clzt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clzt==null?"":row.clzt)+'>'+(row.clzt==null?"":row.clzt)+'</span>'}});
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