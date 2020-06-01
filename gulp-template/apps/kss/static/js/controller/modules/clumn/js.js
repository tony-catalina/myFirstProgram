/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Js 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jqh')>-1){
	            clumns.push({field : 'jqh',title : '监区号',width : 200,hidden:util.getArrayIndex(option.hidden,'jqh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jqh==null?"":row.jqh)+'>'+(row.jqh==null?"":row.jqh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsh')>-1){
	        	clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsmc')>-1){
	            clumns.push({field : 'jsmc',title : '监室名称',width : 200,hidden:util.getArrayIndex(option.hidden,'jsmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsmc==null?"":row.jsmc)+'>'+(row.jsmc==null?"":row.jsmc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jslbString')>-1){
	            clumns.push({field : 'jslbString',title : '监室类别',width : 200,hidden:util.getArrayIndex(option.hidden,'jslbString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jslbString==null?"":row.jslbString)+'>'+(row.jslbString==null?"":row.jslbString)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'typeString')>-1){
				clumns.push({field : 'typeString',title : '监室类别',width : 200,hidden:util.getArrayIndex(option.hidden,'typeString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.typeString==null?"":row.typeString)+'>'+(row.typeString==null?"":row.typeString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'type')>-1){
	            clumns.push({field : 'type',title : '男女类别',width : 200,hidden:util.getArrayIndex(option.hidden,'type')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.type==null?"":row.type)+'>'+(row.type==null?"":row.type)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'innum')>-1){
	            clumns.push({field : 'innum',title : '关押量',width : 200,hidden:util.getArrayIndex(option.hidden,'innum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.innum==null?"":row.innum)+'>'+(row.innum==null?"":row.innum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bznum')>-1){
	            clumns.push({field : 'bznum',title : '额定押量',width : 200,hidden:util.getArrayIndex(option.hidden,'bznum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bznum==null?"":row.bznum)+'>'+(row.bznum==null?"":row.bznum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zgmj')>-1){
	            clumns.push({field : 'zgmj',title : '主管民警',width : 200,hidden:util.getArrayIndex(option.hidden,'zgmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zgmj==null?"":row.zgmj)+'>'+(row.zgmj==null?"":row.zgmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xgmj')>-1){
	            clumns.push({field : 'xgmj',title : '协管民警',width : 200,hidden:util.getArrayIndex(option.hidden,'xgmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xgmj==null?"":row.xgmj)+'>'+(row.xgmj==null?"":row.xgmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wmjs')>-1){
	            clumns.push({field : 'wmjs',title : '文明监室',width : 200,hidden:util.getArrayIndex(option.hidden,'wmjs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wmjs==null?"":row.wmjs)+'>'+(row.wmjs==null?"":row.wmjs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态(STATE)',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'zgmjjh')>-1){
	            clumns.push({field : 'zgmjjh',title : '主管民警警号',width : 200,hidden:util.getArrayIndex(option.hidden,'zgmjjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zgmjjh==null?"":row.zgmjjh)+'>'+(row.zgmjjh==null?"":row.zgmjjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xgmjjh')>-1){
	            clumns.push({field : 'xgmjjh',title : '协管民警警号',width : 200,hidden:util.getArrayIndex(option.hidden,'xgmjjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xgmjjh==null?"":row.xgmjjh)+'>'+(row.xgmjjh==null?"":row.xgmjjh)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});