/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Tjcz 数据列表
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
	        if(util.getArrayIndex(option.clumns,'xm')>-1){
	            clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wfxw')>-1){
	            clumns.push({field : 'wfxw',title : 'wfxw',width : 200,hidden:util.getArrayIndex(option.hidden,'wfxw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wfxw==null?"":row.wfxw)+'>'+(row.wfxw==null?"":row.wfxw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlcs')>-1){
	            clumns.push({field : 'jlcs',title : 'jlcs',width : 200,hidden:util.getArrayIndex(option.hidden,'jlcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlcs==null?"":row.jlcs)+'>'+(row.jlcs==null?"":row.jlcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tgxsbm')>-1){
	            clumns.push({field : 'tgxsbm',title : '提供线索部门',width : 200,hidden:util.getArrayIndex(option.hidden,'tgxsbm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tgxsbm==null?"":row.tgxsbm)+'>'+(row.tgxsbm==null?"":row.tgxsbm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xslx')>-1){
	            clumns.push({field : 'xslx',title : '线索类型',width : 200,hidden:util.getArrayIndex(option.hidden,'xslx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xslx==null?"":row.xslx)+'>'+(row.xslx==null?"":row.xslx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tgrq')>-1){
	            clumns.push({field : 'tgrq',title : '提供日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tgrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tgrq==null?"":row.tgrq)+'>'+(row.tgrq==null?"":row.tgrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
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