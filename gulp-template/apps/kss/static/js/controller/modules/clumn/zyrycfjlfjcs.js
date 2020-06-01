/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * ZyrycfjlFjcs 数据列表
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
	        if(util.getArrayIndex(option.clumns,'cfjlid')>-1){
	            clumns.push({field : 'cfjlid',title : '处罚管理表ID',width : 200,hidden:util.getArrayIndex(option.hidden,'cfjlid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cfjlid==null?"":row.cfjlid)+'>'+(row.cfjlid==null?"":row.cfjlid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fjcs')>-1){
	            clumns.push({field : 'fjcs',title : '附加措施',width : 200,hidden:util.getArrayIndex(option.hidden,'fjcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fjcs==null?"":row.fjcs)+'>'+(row.fjcs==null?"":row.fjcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cfts')>-1){
	            clumns.push({field : 'cfts',title : '处罚天数',width : 200,hidden:util.getArrayIndex(option.hidden,'cfts')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cfts==null?"":row.cfts)+'>'+(row.cfts==null?"":row.cfts)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'kssj')>-1){
	            clumns.push({field : 'kssj',title : '开始日期',width : 200,hidden:util.getArrayIndex(option.hidden,'kssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kssj==null?"":row.kssj)+'>'+(row.kssj==null?"":row.kssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jssj')>-1){
	            clumns.push({field : 'jssj',title : '结束日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jssj==null?"":row.jssj)+'>'+(row.jssj==null?"":row.jssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ycts')>-1){
	            clumns.push({field : 'ycts',title : '延长天数',width : 200,hidden:util.getArrayIndex(option.hidden,'ycts')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ycts==null?"":row.ycts)+'>'+(row.ycts==null?"":row.ycts)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yjsrq')>-1){
	            clumns.push({field : 'yjsrq',title : '原结束日期',width : 200,hidden:util.getArrayIndex(option.hidden,'yjsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yjsrq==null?"":row.yjsrq)+'>'+(row.yjsrq==null?"":row.yjsrq)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'cfyy')>-1){
	            clumns.push({field : 'cfyy',title : '惩罚原因',width : 200,hidden:util.getArrayIndex(option.hidden,'cfyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cfyy==null?"":row.cfyy)+'>'+(row.cfyy==null?"":row.cfyy)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});