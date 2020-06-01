/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Swgl 数据列表
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
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsh')>-1){
	            clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swqk')>-1){
	            clumns.push({field : 'swqk',title : '死亡情况',width : 200,hidden:util.getArrayIndex(option.hidden,'swqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swqk==null?"":row.swqk)+'>'+(row.swqk==null?"":row.swqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swrq')>-1){
	            clumns.push({field : 'swrq',title : '死亡时间',width : 200,hidden:util.getArrayIndex(option.hidden,'swrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swrq==null?"":row.swrq)+'>'+(row.swrq==null?"":row.swrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cbr')>-1){
	            clumns.push({field : 'cbr',title : '承办人',width : 200,hidden:util.getArrayIndex(option.hidden,'cbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cbr==null?"":row.cbr)+'>'+(row.cbr==null?"":row.cbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dcrq')>-1){
	            clumns.push({field : 'dcrq',title : '调查日期',width : 200,hidden:util.getArrayIndex(option.hidden,'dcrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dcrq==null?"":row.dcrq)+'>'+(row.dcrq==null?"":row.dcrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dcjgou')>-1){
	            clumns.push({field : 'dcjgou',title : '调查机构',width : 200,hidden:util.getArrayIndex(option.hidden,'dcjgou')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dcjgou==null?"":row.dcjgou)+'>'+(row.dcjgou==null?"":row.dcjgou)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dcjguo')>-1){
	            clumns.push({field : 'dcjguo',title : '调查结果',width : 200,hidden:util.getArrayIndex(option.hidden,'dcjguo')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dcjguo==null?"":row.dcjguo)+'>'+(row.dcjguo==null?"":row.dcjguo)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jyclyj')>-1){
	            clumns.push({field : 'jyclyj',title : '建议处理意见',width : 200,hidden:util.getArrayIndex(option.hidden,'jyclyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jyclyj==null?"":row.jyclyj)+'>'+(row.jyclyj==null?"":row.jyclyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clsj')>-1){
	            clumns.push({field : 'clsj',title : '处理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'clsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clsj==null?"":row.clsj)+'>'+(row.clsj==null?"":row.clsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clfs')>-1){
	            clumns.push({field : 'clfs',title : '处理方式',width : 200,hidden:util.getArrayIndex(option.hidden,'clfs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clfs==null?"":row.clfs)+'>'+(row.clfs==null?"":row.clfs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlr')>-1){
	            clumns.push({field : 'jlr',title : '记录人',width : 200,hidden:util.getArrayIndex(option.hidden,'jlr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlr==null?"":row.jlr)+'>'+(row.jlr==null?"":row.jlr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
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