/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Djgl 数据列表
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
	        if(util.getArrayIndex(option.clumns,'djkt')>-1){
	            clumns.push({field : 'djkt',title : '党建课题',width : 200,hidden:util.getArrayIndex(option.hidden,'djkt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djkt==null?"":row.djkt)+'>'+(row.djkt==null?"":row.djkt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djlx')>-1){
	            clumns.push({field : 'djlx',title : '党建类型',width : 200,hidden:util.getArrayIndex(option.hidden,'djlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djlx==null?"":row.djlx)+'>'+(row.djlx==null?"":row.djlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djnr')>-1){
	            clumns.push({field : 'djnr',title : '党建内容',width : 200,hidden:util.getArrayIndex(option.hidden,'djnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djnr==null?"":row.djnr)+'>'+(row.djnr==null?"":row.djnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djbm')>-1){
	            clumns.push({field : 'djbm',title : '党建部门',width : 200,hidden:util.getArrayIndex(option.hidden,'djbm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djbm==null?"":row.djbm)+'>'+(row.djbm==null?"":row.djbm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djsj')>-1){
	            clumns.push({field : 'djsj',title : '党建时间',width : 200,hidden:util.getArrayIndex(option.hidden,'djsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djsj==null?"":row.djsj)+'>'+(row.djsj==null?"":row.djsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zqjcqk')>-1){
	            clumns.push({field : 'zqjcqk',title : '中期检查情况',width : 200,hidden:util.getArrayIndex(option.hidden,'zqjcqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zqjcqk==null?"":row.zqjcqk)+'>'+(row.zqjcqk==null?"":row.zqjcqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jxjg')>-1){
	            clumns.push({field : 'jxjg',title : '结项结果',width : 200,hidden:util.getArrayIndex(option.hidden,'jxjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jxjg==null?"":row.jxjg)+'>'+(row.jxjg==null?"":row.jxjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjqk')>-1){
	            clumns.push({field : 'hjqk',title : '获奖情况',width : 200,hidden:util.getArrayIndex(option.hidden,'hjqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjqk==null?"":row.hjqk)+'>'+(row.hjqk==null?"":row.hjqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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