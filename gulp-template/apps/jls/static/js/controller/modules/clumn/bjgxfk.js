/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Bjgxfk 数据列表
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
	        if(util.getArrayIndex(option.clumns,'djrq')>-1){
	            clumns.push({field : 'djrq',title : '登记日期',width : 200,hidden:util.getArrayIndex(option.hidden,'djrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djrq==null?"":row.djrq)+'>'+(row.djrq==null?"":row.djrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djr')>-1){
	            clumns.push({field : 'djr',title : '登记人',width : 200,hidden:util.getArrayIndex(option.hidden,'djr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djr==null?"":row.djr)+'>'+(row.djr==null?"":row.djr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bjdwqx')>-1){
	            clumns.push({field : 'bjdwqx',title : '帮教单位区县',width : 200,hidden:util.getArrayIndex(option.hidden,'bjdwqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bjdwqx==null?"":row.bjdwqx)+'>'+(row.bjdwqx==null?"":row.bjdwqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bjdwsfs')>-1){
	            clumns.push({field : 'bjdwsfs',title : '帮教单位司法所',width : 200,hidden:util.getArrayIndex(option.hidden,'bjdwsfs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bjdwsfs==null?"":row.bjdwsfs)+'>'+(row.bjdwsfs==null?"":row.bjdwsfs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bjzrr')>-1){
	            clumns.push({field : 'bjzrr',title : '帮教责任人',width : 200,hidden:util.getArrayIndex(option.hidden,'bjzrr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bjzrr==null?"":row.bjzrr)+'>'+(row.bjzrr==null?"":row.bjzrr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bjrlxfx')>-1){
	            clumns.push({field : 'bjrlxfx',title : '帮教人联系方式',width : 200,hidden:util.getArrayIndex(option.hidden,'bjrlxfx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bjrlxfx==null?"":row.bjrlxfx)+'>'+(row.bjrlxfx==null?"":row.bjrlxfx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bjxzbh')>-1){
	            clumns.push({field : 'bjxzbh',title : '帮教小组编号',width : 200,hidden:util.getArrayIndex(option.hidden,'bjxzbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bjxzbh==null?"":row.bjxzbh)+'>'+(row.bjxzbh==null?"":row.bjxzbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'operator')>-1){
	            clumns.push({field : 'operator',title : '操作人',width : 200,hidden:util.getArrayIndex(option.hidden,'operator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.operator==null?"":row.operator)+'>'+(row.operator==null?"":row.operator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scbz')>-1){
	            clumns.push({field : 'scbz',title : '上传标志',width : 200,hidden:util.getArrayIndex(option.hidden,'scbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scbz==null?"":row.scbz)+'>'+(row.scbz==null?"":row.scbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
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