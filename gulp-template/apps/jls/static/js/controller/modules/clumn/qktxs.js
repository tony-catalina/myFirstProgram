/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Qktxs 数据列表
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
	        if(util.getArrayIndex(option.clumns,'fjhm')>-1){
	            clumns.push({field : 'fjhm',title : '房间号码',width : 200,hidden:util.getArrayIndex(option.hidden,'fjhm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fjhm==null?"":row.fjhm)+'>'+(row.fjhm==null?"":row.fjhm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fjqc')>-1){
	            clumns.push({field : 'fjqc',title : '房间全称',width : 200,hidden:util.getArrayIndex(option.hidden,'fjqc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fjqc==null?"":row.fjqc)+'>'+(row.fjqc==null?"":row.fjqc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'frxm')>-1){
	            clumns.push({field : 'frxm',title : '犯人姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'frxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.frxm==null?"":row.frxm)+'>'+(row.frxm==null?"":row.frxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tsry')>-1){
	            clumns.push({field : 'tsry',title : '提审人员',width : 200,hidden:util.getArrayIndex(option.hidden,'tsry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tsry==null?"":row.tsry)+'>'+(row.tsry==null?"":row.tsry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'syzt')>-1){
	            clumns.push({field : 'syzt',title : '使用状态',width : 200,hidden:util.getArrayIndex(option.hidden,'syzt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.syzt==null?"":row.syzt)+'>'+(row.syzt==null?"":row.syzt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fjlx')>-1){
	            clumns.push({field : 'fjlx',title : '房间类型',width : 200,hidden:util.getArrayIndex(option.hidden,'fjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fjlx==null?"":row.fjlx)+'>'+(row.fjlx==null?"":row.fjlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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