/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Xjjl 数据列表
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
	        if(util.getArrayIndex(option.clumns,'type')>-1){
	            clumns.push({field : 'type',title : '项目类型',width : 200,hidden:util.getArrayIndex(option.hidden,'type')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.type==null?"":row.type)+'>'+(row.type==null?"":row.type)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'name')>-1){
	            clumns.push({field : 'name',title : '项目名称',width : 200,hidden:util.getArrayIndex(option.hidden,'name')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.name==null?"":row.name)+'>'+(row.name==null?"":row.name)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xjrq')>-1){
	            clumns.push({field : 'xjrq',title : '巡检日期',width : 200,hidden:util.getArrayIndex(option.hidden,'xjrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xjrq==null?"":row.xjrq)+'>'+(row.xjrq==null?"":row.xjrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xjr')>-1){
	            clumns.push({field : 'xjr',title : '巡检人',width : 200,hidden:util.getArrayIndex(option.hidden,'xjr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xjr==null?"":row.xjr)+'>'+(row.xjr==null?"":row.xjr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywyc')>-1){
	            clumns.push({field : 'ywyc',title : '有无异常',width : 200,hidden:util.getArrayIndex(option.hidden,'ywyc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywyc==null?"":row.ywyc)+'>'+(row.ywyc==null?"":row.ywyc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ycqk')>-1){
	            clumns.push({field : 'ycqk',title : '异常情况',width : 200,hidden:util.getArrayIndex(option.hidden,'ycqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ycqk==null?"":row.ycqk)+'>'+(row.ycqk==null?"":row.ycqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除标识',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'dbrzsfzc')>-1){
	            clumns.push({field : 'dbrzsfzc',title : '打包日志是否正常',width : 200,hidden:util.getArrayIndex(option.hidden,'dbrzsfzc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbrzsfzc==null?"":row.dbrzsfzc)+'>'+(row.dbrzsfzc==null?"":row.dbrzsfzc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fsrzsfzc')>-1){
	            clumns.push({field : 'fsrzsfzc',title : '发送日志是否正常',width : 200,hidden:util.getArrayIndex(option.hidden,'fsrzsfzc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fsrzsfzc==null?"":row.fsrzsfzc)+'>'+(row.fsrzsfzc==null?"":row.fsrzsfzc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zsjcsbsfzc')>-1){
	            clumns.push({field : 'zsjcsbsfzc',title : '驻所检查设备是否正常',width : 200,hidden:util.getArrayIndex(option.hidden,'zsjcsbsfzc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zsjcsbsfzc==null?"":row.zsjcsbsfzc)+'>'+(row.zsjcsbsfzc==null?"":row.zsjcsbsfzc)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});