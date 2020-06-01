/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Spxx 数据列表
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
	        if(util.getArrayIndex(option.clumns,'pch')>-1){
	            clumns.push({field : 'pch',title : '批次号',width : 200,hidden:util.getArrayIndex(option.hidden,'pch')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pch==null?"":row.pch)+'>'+(row.pch==null?"":row.pch)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'spmc')>-1){
	            clumns.push({field : 'spmc',title : '商品名称',width : 200,hidden:util.getArrayIndex(option.hidden,'spmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.spmc==null?"":row.spmc)+'>'+(row.spmc==null?"":row.spmc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tm')>-1){
	            clumns.push({field : 'tm',title : '条码',width : 200,hidden:util.getArrayIndex(option.hidden,'tm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tm==null?"":row.tm)+'>'+(row.tm==null?"":row.tm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gg')>-1){
	            clumns.push({field : 'gg',title : '规格',width : 200,hidden:util.getArrayIndex(option.hidden,'gg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gg==null?"":row.gg)+'>'+(row.gg==null?"":row.gg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jldw')>-1){
	            clumns.push({field : 'jldw',title : '计量单位',width : 200,hidden:util.getArrayIndex(option.hidden,'jldw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jldw==null?"":row.jldw)+'>'+(row.jldw==null?"":row.jldw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lsj')>-1){
	            clumns.push({field : 'lsj',title : '零售价',width : 200,hidden:util.getArrayIndex(option.hidden,'lsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsj==null?"":row.lsj)+'>'+(row.lsj==null?"":row.lsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'splb')>-1){
	            clumns.push({field : 'splb',title : '商品类别',width : 200,hidden:util.getArrayIndex(option.hidden,'splb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.splb==null?"":row.splb)+'>'+(row.splb==null?"":row.splb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfzjff')>-1){
	            clumns.push({field : 'sfzjff',title : '是否直接发放',width : 200,hidden:util.getArrayIndex(option.hidden,'sfzjff')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfzjff==null?"":row.sfzjff)+'>'+(row.sfzjff==null?"":row.sfzjff)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfxg')>-1){
	            clumns.push({field : 'sfxg',title : '是否为限购商品',width : 200,hidden:util.getArrayIndex(option.hidden,'sfxg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfxg==null?"":row.sfxg)+'>'+(row.sfxg==null?"":row.sfxg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jhpl')>-1){
	            clumns.push({field : 'jhpl',title : '进货频率',width : 200,hidden:util.getArrayIndex(option.hidden,'jhpl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jhpl==null?"":row.jhpl)+'>'+(row.jhpl==null?"":row.jhpl)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'photos')>-1){
	            clumns.push({field : 'photos',title : '商品图片',width : 200,hidden:util.getArrayIndex(option.hidden,'photos')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.photos==null?"":row.photos)+'>'+(row.photos==null?"":row.photos)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'photourl')>-1){
	            clumns.push({field : 'photourl',title : '商品图片路径',width : 200,hidden:util.getArrayIndex(option.hidden,'photourl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.photourl==null?"":row.photourl)+'>'+(row.photourl==null?"":row.photourl)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});