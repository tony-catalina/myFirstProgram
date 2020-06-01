/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Tsyy 数据列表
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
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dw')>-1){
	            clumns.push({field : 'dw',title : '预约单位',width : 200,hidden:util.getArrayIndex(option.hidden,'dw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dw==null?"":row.dw)+'>'+(row.dw==null?"":row.dw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ry')>-1){
	            clumns.push({field : 'ry',title : '预约人员',width : 200,hidden:util.getArrayIndex(option.hidden,'ry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ry==null?"":row.ry)+'>'+(row.ry==null?"":row.ry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dwdh')>-1){
	            clumns.push({field : 'dwdh',title : '单位电话',width : 200,hidden:util.getArrayIndex(option.hidden,'dwdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dwdh==null?"":row.dwdh)+'>'+(row.dwdh==null?"":row.dwdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sjhm')>-1){
	            clumns.push({field : 'sjhm',title : '手机号',width : 200,hidden:util.getArrayIndex(option.hidden,'sjhm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjhm==null?"":row.sjhm)+'>'+(row.sjhm==null?"":row.sjhm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cxyy')>-1){
	            clumns.push({field : 'cxyy',title : '撤销原因',width : 200,hidden:util.getArrayIndex(option.hidden,'cxyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cxyy==null?"":row.cxyy)+'>'+(row.cxyy==null?"":row.cxyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjlx')>-1){
	            clumns.push({field : 'zjlx',title : '证件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'zjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjlx==null?"":row.zjlx)+'>'+(row.zjlx==null?"":row.zjlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjh')>-1){
	            clumns.push({field : 'zjh',title : '证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'zjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjh==null?"":row.zjh)+'>'+(row.zjh==null?"":row.zjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yyrq')>-1){
	            clumns.push({field : 'yyrq',title : '预约日期',width : 200,hidden:util.getArrayIndex(option.hidden,'yyrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yyrq==null?"":row.yyrq)+'>'+(row.yyrq==null?"":row.yyrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yysjd')>-1){
	            clumns.push({field : 'yysjd',title : '预约时间段',width : 200,hidden:util.getArrayIndex(option.hidden,'yysjd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yysjd==null?"":row.yysjd)+'>'+(row.yysjd==null?"":row.yysjd)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'lrr')>-1){
	            clumns.push({field : 'lrr',title : '录入人',width : 200,hidden:util.getArrayIndex(option.hidden,'lrr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lrr==null?"":row.lrr)+'>'+(row.lrr==null?"":row.lrr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lrsj')>-1){
	            clumns.push({field : 'lrsj',title : '录入时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lrsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lrsj==null?"":row.lrsj)+'>'+(row.lrsj==null?"":row.lrsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});