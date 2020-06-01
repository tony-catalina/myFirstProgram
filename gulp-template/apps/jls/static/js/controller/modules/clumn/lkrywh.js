/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Lkrywh 数据列表
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
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'xm')>-1){
			    clumns.push({field : 'xm',title : '被布控人姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'zjhm')>-1){
			    clumns.push({field : 'zjhm',title : '被布控人证件号码',width : 200,hidden:util.getArrayIndex(option.hidden,'zjhm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjhm==null?"":row.zjhm)+'>'+(row.zjhm==null?"":row.zjhm)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'bbkray')>-1){
	            clumns.push({field : 'bbkray',title : '被布控人简要案情',width : 200,hidden:util.getArrayIndex(option.hidden,'bbkray')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bbkray==null?"":row.bbkray)+'>'+(row.bbkray==null?"":row.bbkray)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqrdw')>-1){
	            clumns.push({field : 'sqrdw',title : '申请人单位名称',width : 200,hidden:util.getArrayIndex(option.hidden,'sqrdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqrdw==null?"":row.sqrdw)+'>'+(row.sqrdw==null?"":row.sqrdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxdh')>-1){
	            clumns.push({field : 'lxdh',title : '申请人联系电话',width : 200,hidden:util.getArrayIndex(option.hidden,'lxdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxdh==null?"":row.lxdh)+'>'+(row.lxdh==null?"":row.lxdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqrxm')>-1){
	            clumns.push({field : 'sqrxm',title : '申请人姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'sqrxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqrxm==null?"":row.sqrxm)+'>'+(row.sqrxm==null?"":row.sqrxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xzdxz')>-1){
	            clumns.push({field : 'xzdxz',title : '被布控人现住地详址',width : 200,hidden:util.getArrayIndex(option.hidden,'xzdxz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xzdxz==null?"":row.xzdxz)+'>'+(row.xzdxz==null?"":row.xzdxz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjdxz')>-1){
	            clumns.push({field : 'hjdxz',title : '被布控人户籍地详址',width : 200,hidden:util.getArrayIndex(option.hidden,'hjdxz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjdxz==null?"":row.hjdxz)+'>'+(row.hjdxz==null?"":row.hjdxz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ajlb')>-1){
	            clumns.push({field : 'ajlb',title : '被布控人涉案类别',width : 200,hidden:util.getArrayIndex(option.hidden,'ajlb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ajlb==null?"":row.ajlb)+'>'+(row.ajlb==null?"":row.ajlb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csrq')>-1){
	            clumns.push({field : 'csrq',title : '被布控人出生日期',width : 200,hidden:util.getArrayIndex(option.hidden,'csrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csrq==null?"":row.csrq)+'>'+(row.csrq==null?"":row.csrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bdsj')>-1){
	            clumns.push({field : 'bdsj',title : '比对时间',width : 200,hidden:util.getArrayIndex(option.hidden,'bdsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bdsj==null?"":row.bdsj)+'>'+(row.bdsj==null?"":row.bdsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sdm')>-1){
	            clumns.push({field : 'sdm',title : '所代码',width : 200,hidden:util.getArrayIndex(option.hidden,'sdm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sdm==null?"":row.sdm)+'>'+(row.sdm==null?"":row.sdm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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