/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Lsbd 数据列表
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
	        if(util.getArrayIndex(option.clumns,'lszh')>-1){
	            clumns.push({field : 'lszh',title : '律师证号',width : 200,hidden:util.getArrayIndex(option.hidden,'lszh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lszh==null?"":row.lszh)+'>'+(row.lszh==null?"":row.lszh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcsj')>-1){
	            clumns.push({field : 'jcsj',title : '解除时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jcsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcsj==null?"":row.jcsj)+'>'+(row.jcsj==null?"":row.jcsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcr')>-1){
	            clumns.push({field : 'jcr',title : '解除人',width : 200,hidden:util.getArrayIndex(option.hidden,'jcr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcr==null?"":row.jcr)+'>'+(row.jcr==null?"":row.jcr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '存在状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'createtime')>-1){
	            clumns.push({field : 'createtime',title : 'CREATETIME',width : 200,hidden:util.getArrayIndex(option.hidden,'createtime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.createtime==null?"":row.createtime)+'>'+(row.createtime==null?"":row.createtime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lsxm')>-1){
	            clumns.push({field : 'lsxm',title : '律师姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'lsxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsxm==null?"":row.lsxm)+'>'+(row.lsxm==null?"":row.lsxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lsxb')>-1){
	            clumns.push({field : 'lsxb',title : '律师性别',width : 200,hidden:util.getArrayIndex(option.hidden,'lsxb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsxb==null?"":row.lsxb)+'>'+(row.lsxb==null?"":row.lsxb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lszz')>-1){
	            clumns.push({field : 'lszz',title : '律师住址',width : 200,hidden:util.getArrayIndex(option.hidden,'lszz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lszz==null?"":row.lszz)+'>'+(row.lszz==null?"":row.lszz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lsjsxh')>-1){
	            clumns.push({field : 'lsjsxh',title : '律师事务所介绍信编号',width : 200,hidden:util.getArrayIndex(option.hidden,'lsjsxh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsjsxh==null?"":row.lsjsxh)+'>'+(row.lsjsxh==null?"":row.lsjsxh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzdw')>-1){
	            clumns.push({field : 'pzdw',title : '批准单位',width : 200,hidden:util.getArrayIndex(option.hidden,'pzdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzdw==null?"":row.pzdw)+'>'+(row.pzdw==null?"":row.pzdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lsdh')>-1){
	            clumns.push({field : 'lsdh',title : '律师电话',width : 200,hidden:util.getArrayIndex(option.hidden,'lsdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsdh==null?"":row.lsdh)+'>'+(row.lsdh==null?"":row.lsdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lssjh')>-1){
	            clumns.push({field : 'lssjh',title : '律师手机号',width : 200,hidden:util.getArrayIndex(option.hidden,'lssjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lssjh==null?"":row.lssjh)+'>'+(row.lssjh==null?"":row.lssjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lszyzmks')>-1){
	            clumns.push({field : 'lszyzmks',title : '律师执业证明开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lszyzmks')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lszyzmks==null?"":row.lszyzmks)+'>'+(row.lszyzmks==null?"":row.lszyzmks)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lszyzmjs')>-1){
	            clumns.push({field : 'lszyzmjs',title : '律师执业证明结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lszyzmjs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lszyzmjs==null?"":row.lszyzmjs)+'>'+(row.lszyzmjs==null?"":row.lszyzmjs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zlxm')>-1){
	            clumns.push({field : 'zlxm',title : '助理姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'zlxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zlxm==null?"":row.zlxm)+'>'+(row.zlxm==null?"":row.zlxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zlxb')>-1){
	            clumns.push({field : 'zlxb',title : '助理性别',width : 200,hidden:util.getArrayIndex(option.hidden,'zlxb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zlxb==null?"":row.zlxb)+'>'+(row.zlxb==null?"":row.zlxb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zlzjlx')>-1){
	            clumns.push({field : 'zlzjlx',title : '助理证件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'zlzjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zlzjlx==null?"":row.zlzjlx)+'>'+(row.zlzjlx==null?"":row.zlzjlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zlzjhm')>-1){
	            clumns.push({field : 'zlzjhm',title : '助理证件号码',width : 200,hidden:util.getArrayIndex(option.hidden,'zlzjhm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zlzjhm==null?"":row.zlzjhm)+'>'+(row.zlzjhm==null?"":row.zlzjhm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ryxm')>-1){
	            clumns.push({field : 'ryxm',title : '在押人员姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ryxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ryxm==null?"":row.ryxm)+'>'+(row.ryxm==null?"":row.ryxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjsj')>-1){
	            clumns.push({field : 'hjsj',title : '会见时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hjsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjsj==null?"":row.hjsj)+'>'+(row.hjsj==null?"":row.hjsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lsdw')>-1){
	            clumns.push({field : 'lsdw',title : '律师单位',width : 200,hidden:util.getArrayIndex(option.hidden,'lsdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsdw==null?"":row.lsdw)+'>'+(row.lsdw==null?"":row.lsdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjlx')>-1){
	            clumns.push({field : 'zjlx',title : '证件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'zjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjlx==null?"":row.zjlx)+'>'+(row.zjlx==null?"":row.zjlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjh')>-1){
	            clumns.push({field : 'zjh',title : '证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'zjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjh==null?"":row.zjh)+'>'+(row.zjh==null?"":row.zjh)+'</span>'}});
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
	        
	        return clumns;
	    };
	    return main;
	});