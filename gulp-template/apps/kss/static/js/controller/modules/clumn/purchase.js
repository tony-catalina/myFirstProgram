/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Purchase 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jhdh')>-1){
	            clumns.push({field : 'jhdh',title : '进货单号',width : 200,hidden:util.getArrayIndex(option.hidden,'jhdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jhdh==null?"":row.jhdh)+'>'+(row.jhdh==null?"":row.jhdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bh')>-1){
	            clumns.push({field : 'bh',title : '商品/药品编号',width : 200,hidden:util.getArrayIndex(option.hidden,'bh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bh==null?"":row.bh)+'>'+(row.bh==null?"":row.bh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hwlx')>-1){
	            clumns.push({field : 'hwlx',title : '货物类型',width : 200,hidden:util.getArrayIndex(option.hidden,'hwlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hwlx==null?"":row.hwlx)+'>'+(row.hwlx==null?"":row.hwlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'splx')>-1){
	            clumns.push({field : 'splx',title : '商品类型',width : 200,hidden:util.getArrayIndex(option.hidden,'splx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.splx==null?"":row.splx)+'>'+(row.splx==null?"":row.splx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yplx')>-1){
	            clumns.push({field : 'yplx',title : '药品类型',width : 200,hidden:util.getArrayIndex(option.hidden,'yplx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yplx==null?"":row.yplx)+'>'+(row.yplx==null?"":row.yplx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sl')>-1){
	            clumns.push({field : 'sl',title : '数量',width : 200,hidden:util.getArrayIndex(option.hidden,'sl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl==null?"":row.sl)+'>'+(row.sl==null?"":row.sl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dw')>-1){
	            clumns.push({field : 'dw',title : '商品/商品单位',width : 200,hidden:util.getArrayIndex(option.hidden,'dw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dw==null?"":row.dw)+'>'+(row.dw==null?"":row.dw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hwdj')>-1){
	            clumns.push({field : 'hwdj',title : '商品/药品单价',width : 200,hidden:util.getArrayIndex(option.hidden,'hwdj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hwdj==null?"":row.hwdj)+'>'+(row.hwdj==null?"":row.hwdj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zj')>-1){
	            clumns.push({field : 'zj',title : '进货总价',width : 200,hidden:util.getArrayIndex(option.hidden,'zj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zj==null?"":row.zj)+'>'+(row.zj==null?"":row.zj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jhrq')>-1){
	            clumns.push({field : 'jhrq',title : '进货日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jhrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jhrq==null?"":row.jhrq)+'>'+(row.jhrq==null?"":row.jhrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfyx')>-1){
	            clumns.push({field : 'sfyx',title : '是否有效',width : 200,hidden:util.getArrayIndex(option.hidden,'sfyx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfyx==null?"":row.sfyx)+'>'+(row.sfyx==null?"":row.sfyx)+'</span>'}});
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