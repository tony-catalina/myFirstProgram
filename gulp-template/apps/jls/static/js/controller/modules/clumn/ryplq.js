/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Ryplq 数据列表
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
	        if(util.getArrayIndex(option.clumns,'bid')>-1){
	            clumns.push({field : 'bid',title : 'bid',width : 200,hidden:util.getArrayIndex(option.hidden,'bid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bid==null?"":row.bid)+'>'+(row.bid==null?"":row.bid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wpmc')>-1){
	            clumns.push({field : 'wpmc',title : '物品名称',width : 200,hidden:util.getArrayIndex(option.hidden,'wpmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wpmc==null?"":row.wpmc)+'>'+(row.wpmc==null?"":row.wpmc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wpsl')>-1){
	            clumns.push({field : 'wpsl',title : '物品数量',width : 200,hidden:util.getArrayIndex(option.hidden,'wpsl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wpsl==null?"":row.wpsl)+'>'+(row.wpsl==null?"":row.wpsl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wpdj')>-1){
	            clumns.push({field : 'wpdj',title : '物品单价',width : 200,hidden:util.getArrayIndex(option.hidden,'wpdj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wpdj==null?"":row.wpdj)+'>'+(row.wpdj==null?"":row.wpdj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zj')>-1){
	            clumns.push({field : 'zj',title : '物品总价',width : 200,hidden:util.getArrayIndex(option.hidden,'zj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zj==null?"":row.zj)+'>'+(row.zj==null?"":row.zj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lqrq')>-1){
	            clumns.push({field : 'lqrq',title : '领取日期',width : 200,hidden:util.getArrayIndex(option.hidden,'lqrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lqrq==null?"":row.lqrq)+'>'+(row.lqrq==null?"":row.lqrq)+'</span>'}});
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