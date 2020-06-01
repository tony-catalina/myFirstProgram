/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Gd 数据列表
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
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dah')>-1){
	            clumns.push({field : 'dah',title : '档案号',width : 200,hidden:util.getArrayIndex(option.hidden,'dah')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dah==null?"":row.dah)+'>'+(row.dah==null?"":row.dah)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bcrq')>-1){
	            clumns.push({field : 'bcrq',title : '保存日期',width : 200,hidden:util.getArrayIndex(option.hidden,'bcrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bcrq==null?"":row.bcrq)+'>'+(row.bcrq==null?"":row.bcrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'flag')>-1){
	            clumns.push({field : 'flag',title : '是否归档',width : 200,hidden:util.getArrayIndex(option.hidden,'flag')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.flag==null?"":row.flag)+'>'+(row.flag==null?"":row.flag)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gdnr')>-1){
	            clumns.push({field : 'gdnr',title : '归档内容',width : 200,hidden:util.getArrayIndex(option.hidden,'gdnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gdnr==null?"":row.gdnr)+'>'+(row.gdnr==null?"":row.gdnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gdr')>-1){
	            clumns.push({field : 'gdr',title : '归档人',width : 200,hidden:util.getArrayIndex(option.hidden,'gdr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gdr==null?"":row.gdr)+'>'+(row.gdr==null?"":row.gdr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gdrq')>-1){
	            clumns.push({field : 'gdrq',title : '归档日期',width : 200,hidden:util.getArrayIndex(option.hidden,'gdrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gdrq==null?"":row.gdrq)+'>'+(row.gdrq==null?"":row.gdrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'createtime')>-1){
	            clumns.push({field : 'createtime',title : '创建时间',width : 200,hidden:util.getArrayIndex(option.hidden,'createtime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.createtime==null?"":row.createtime)+'>'+(row.createtime==null?"":row.createtime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'creator')>-1){
	            clumns.push({field : 'creator',title : '创建人',width : 200,hidden:util.getArrayIndex(option.hidden,'creator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.creator==null?"":row.creator)+'>'+(row.creator==null?"":row.creator)+'</span>'}});
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