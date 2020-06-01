/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Yz 数据列表
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
	        if(util.getArrayIndex(option.clumns,'yszt')>-1){
	            clumns.push({field : 'yszt',title : '医生嘱托',width : 200,hidden:util.getArrayIndex(option.hidden,'yszt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yszt==null?"":row.yszt)+'>'+(row.yszt==null?"":row.yszt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'brbq')>-1){
	            clumns.push({field : 'brbq',title : '病人病情',width : 200,hidden:util.getArrayIndex(option.hidden,'brbq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.brbq==null?"":row.brbq)+'>'+(row.brbq==null?"":row.brbq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdjg')>-1){
	            clumns.push({field : 'zdjg',title : '诊断结果',width : 200,hidden:util.getArrayIndex(option.hidden,'zdjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdjg==null?"":row.zdjg)+'>'+(row.zdjg==null?"":row.zdjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ysxm')>-1){
	            clumns.push({field : 'ysxm',title : '医生姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ysxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysxm==null?"":row.ysxm)+'>'+(row.ysxm==null?"":row.ysxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ly')>-1){
	            clumns.push({field : 'ly',title : '来源',width : 200,hidden:util.getArrayIndex(option.hidden,'ly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ly==null?"":row.ly)+'>'+(row.ly==null?"":row.ly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfyx')>-1){
	            clumns.push({field : 'sfyx',title : '是否有效',width : 200,hidden:util.getArrayIndex(option.hidden,'sfyx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfyx==null?"":row.sfyx)+'>'+(row.sfyx==null?"":row.sfyx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'yzsj')>-1){
	            clumns.push({field : 'yzsj',title : '医嘱时间',width : 200,hidden:util.getArrayIndex(option.hidden,'yzsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yzsj==null?"":row.yzsj)+'>'+(row.yzsj==null?"":row.yzsj)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});