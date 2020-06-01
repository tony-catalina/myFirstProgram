/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jjwpgl 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jjwpmc')>-1){
	            clumns.push({field : 'jjwpmc',title : '接济物品名称',width : 200,hidden:util.getArrayIndex(option.hidden,'jjwpmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjwpmc==null?"":row.jjwpmc)+'>'+(row.jjwpmc==null?"":row.jjwpmc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjwpid')>-1){
	            clumns.push({field : 'jjwpid',title : '救济物品编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jjwpid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjwpid==null?"":row.jjwpid)+'>'+(row.jjwpid==null?"":row.jjwpid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjwpphoto')>-1){
	            clumns.push({field : 'jjwpphoto',title : '图片',width : 200,hidden:util.getArrayIndex(option.hidden,'jjwpphoto')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjwpphoto==null?"":row.jjwpphoto)+'>'+(row.jjwpphoto==null?"":row.jjwpphoto)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjwpphotourl')>-1){
	            clumns.push({field : 'jjwpphotourl',title : '图片路径',width : 200,hidden:util.getArrayIndex(option.hidden,'jjwpphotourl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjwpphotourl==null?"":row.jjwpphotourl)+'>'+(row.jjwpphotourl==null?"":row.jjwpphotourl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ksqsl')>-1){
	            clumns.push({field : 'ksqsl',title : '可申请数量',width : 200,hidden:util.getArrayIndex(option.hidden,'ksqsl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ksqsl==null?"":row.ksqsl)+'>'+(row.ksqsl==null?"":row.ksqsl)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wplx')>-1){
	            clumns.push({field : 'wplx',title : '物品类型',width : 200,hidden:util.getArrayIndex(option.hidden,'wplx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wplx==null?"":row.wplx)+'>'+(row.wplx==null?"":row.wplx)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});