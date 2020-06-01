/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Wpgl 数据列表
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
	            clumns.push({field : 'id',title : '物品管理',width : 200,hidden:util.getArrayIndex(option.hidden,'id')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.id==null?"":row.id)+'>'+(row.id==null?"":row.id)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wpjsid')>-1){
	            clumns.push({field : 'wpjsid',title : '物品接收ID',width : 200,hidden:util.getArrayIndex(option.hidden,'wpjsid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wpjsid==null?"":row.wpjsid)+'>'+(row.wpjsid==null?"":row.wpjsid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wpmc')>-1){
	            clumns.push({field : 'wpmc',title : '物品名称',width : 200,hidden:util.getArrayIndex(option.hidden,'wpmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wpmcString==null?"":row.wpmcString)+'>'+(row.wpmcString==null?"":row.wpmcString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sl')>-1){
	            clumns.push({field : 'sl',title : '数量',width : 200,hidden:util.getArrayIndex(option.hidden,'sl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl==null?"":row.sl)+'>'+(row.sl==null?"":row.sl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xh')>-1){
	            clumns.push({field : 'xh',title : '型号',width : 200,hidden:util.getArrayIndex(option.hidden,'xh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xh==null?"":row.xh)+'>'+(row.xh==null?"":row.xh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tz')>-1){
	            clumns.push({field : 'tz',title : '特征 ',width : 200,hidden:util.getArrayIndex(option.hidden,'tz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tz==null?"":row.tz)+'>'+(row.tz==null?"":row.tz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lqzt')>-1){
	            clumns.push({field : 'lqzt',title : '领取状态',width : 200,hidden:util.getArrayIndex(option.hidden,'lqzt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lqzt==null?"":row.lqzt)+'>'+(row.lqzt==null?"":row.lqzt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lqrq')>-1){
	            clumns.push({field : 'lqrq',title : '领取日期',width : 200,hidden:util.getArrayIndex(option.hidden,'lqrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lqrq==null?"":row.lqrq)+'>'+(row.lqrq==null?"":row.lqrq)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'lqr')>-1){
	            clumns.push({field : 'lqr',title : '领取人',width : 200,hidden:util.getArrayIndex(option.hidden,'lqr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lqr==null?"":row.lqr)+'>'+(row.lqr==null?"":row.lqr)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});