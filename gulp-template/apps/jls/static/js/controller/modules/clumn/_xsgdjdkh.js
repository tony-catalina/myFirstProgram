/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Xsgdjdkh 数据列表
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
	        if(util.getArrayIndex(option.clumns,'rsrq')>-1){
	            clumns.push({field : 'rsrq',title : '入所日期',width : 200,hidden:util.getArrayIndex(option.hidden,'rsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsrq==null?"":row.rsrq)+'>'+(row.rsrq==null?"":row.rsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'khyj')>-1){
	            clumns.push({field : 'khyj',title : '考核依据',width : 200,hidden:util.getArrayIndex(option.hidden,'khyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khyj==null?"":row.khyj)+'>'+(row.khyj==null?"":row.khyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'khdj')>-1){
	            clumns.push({field : 'khdj',title : '考核登记',width : 200,hidden:util.getArrayIndex(option.hidden,'khdj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khdj==null?"":row.khdj)+'>'+(row.khdj==null?"":row.khdj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'khrq')>-1){
	            clumns.push({field : 'khrq',title : '考核日期',width : 200,hidden:util.getArrayIndex(option.hidden,'khrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khrq==null?"":row.khrq)+'>'+(row.khrq==null?"":row.khrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'khr')>-1){
	            clumns.push({field : 'khr',title : '考核人',width : 200,hidden:util.getArrayIndex(option.hidden,'khr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khr==null?"":row.khr)+'>'+(row.khr==null?"":row.khr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'khfs')>-1){
	            clumns.push({field : 'khfs',title : '考核方式',width : 200,hidden:util.getArrayIndex(option.hidden,'khfs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khfs==null?"":row.khfs)+'>'+(row.khfs==null?"":row.khfs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'savetime')>-1){
	            clumns.push({field : 'savetime',title : '保存时间',width : 200,hidden:util.getArrayIndex(option.hidden,'savetime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.savetime==null?"":row.savetime)+'>'+(row.savetime==null?"":row.savetime)+'</span>'}});
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