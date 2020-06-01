/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Xdrz 数据列表
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
	        if(util.getArrayIndex(option.clumns,'xdrq')>-1){
	            clumns.push({field : 'xdrq',title : '消毒日期',width : 200,hidden:util.getArrayIndex(option.hidden,'xdrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xdrq==null?"":row.xdrq)+'>'+(row.xdrq==null?"":row.xdrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xdry')>-1){
	            clumns.push({field : 'xdry',title : '消毒人员',width : 200,hidden:util.getArrayIndex(option.hidden,'xdry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xdry==null?"":row.xdry)+'>'+(row.xdry==null?"":row.xdry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xddd')>-1){
	            clumns.push({field : 'xddd',title : '消毒地点',width : 200,hidden:util.getArrayIndex(option.hidden,'xddd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xddd==null?"":row.xddd)+'>'+(row.xddd==null?"":row.xddd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blr')>-1){
	            clumns.push({field : 'blr',title : '办理人',width : 200,hidden:util.getArrayIndex(option.hidden,'blr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blr==null?"":row.blr)+'>'+(row.blr==null?"":row.blr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blsj')>-1){
	            clumns.push({field : 'blsj',title : '办理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'blsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blsj==null?"":row.blsj)+'>'+(row.blsj==null?"":row.blsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'xdff')>-1){
				clumns.push({field : 'xdff',title : '消毒方法',width : 200,hidden:util.getArrayIndex(option.hidden,'xdff')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xdff==null?"":row.xdff)+'>'+(row.xdff==null?"":row.xdff)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'createtor')>-1){
	            clumns.push({field : 'createtor',title : '创建人',width : 200,hidden:util.getArrayIndex(option.hidden,'createtor')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.createtor==null?"":row.createtor)+'>'+(row.createtor==null?"":row.createtor)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'createtime')>-1){
	            clumns.push({field : 'createtime',title : '创建时间 ',width : 200,hidden:util.getArrayIndex(option.hidden,'createtime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.createtime==null?"":row.createtime)+'>'+(row.createtime==null?"":row.createtime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'updatetor')>-1){
	            clumns.push({field : 'updatetor',title : '更新人',width : 200,hidden:util.getArrayIndex(option.hidden,'updatetor')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.updatetor==null?"":row.updatetor)+'>'+(row.updatetor==null?"":row.updatetor)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'updatetime')>-1){
	            clumns.push({field : 'updatetime',title : '更新时间',width : 200,hidden:util.getArrayIndex(option.hidden,'updatetime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.updatetime==null?"":row.updatetime)+'>'+(row.updatetime==null?"":row.updatetime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : 'state',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});