/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Js 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jqh')>-1){
	            clumns.push({field : 'jqh',title : '拘区号',width : 200,hidden:util.getArrayIndex(option.hidden,'jqh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jqh==null?"":row.jqh)+'>'+(row.jqh==null?"":row.jqh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsmc')>-1){
	            clumns.push({field : 'jsmc',title : '拘室名称',width : 200,hidden:util.getArrayIndex(option.hidden,'jsmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsmc==null?"":row.jsmc)+'>'+(row.jsmc==null?"":row.jsmc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsh')>-1){
	            clumns.push({field : 'jsh',title : '拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jslb')>-1){
	            clumns.push({field : 'jslb',title : '拘室类别',width : 200,hidden:util.getArrayIndex(option.hidden,'jslb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jslb==null?"":row.jslb)+'>'+(row.jslb==null?"":row.jslb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fieldname')>-1){
	            clumns.push({field : 'fieldname',title : '拘区',width : 200,hidden:util.getArrayIndex(option.hidden,'fieldname')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fieldname==null?"":row.fieldname)+'>'+(row.fieldname==null?"":row.fieldname)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'code')>-1){
	            clumns.push({field : 'code',title : '代码',width : 200,hidden:util.getArrayIndex(option.hidden,'code')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.code==null?"":row.code)+'>'+(row.code==null?"":row.code)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'content')>-1){
	            clumns.push({field : 'content',title : '内容',width : 200,hidden:util.getArrayIndex(option.hidden,'content')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.content==null?"":row.content)+'>'+(row.content==null?"":row.content)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'type')>-1){
	            clumns.push({field : 'type',title : '男女类型',width : 200,hidden:util.getArrayIndex(option.hidden,'type')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.type==null?"":row.type)+'>'+(row.type==null?"":row.type)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'innum')>-1){
	            clumns.push({field : 'innum',title : '关押人数',width : 200,hidden:util.getArrayIndex(option.hidden,'innum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.innum==null?"":row.innum)+'>'+(row.innum==null?"":row.innum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bznum')>-1){
	            clumns.push({field : 'bznum',title : '额定押量',width : 200,hidden:util.getArrayIndex(option.hidden,'bznum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bznum==null?"":row.bznum)+'>'+(row.bznum==null?"":row.bznum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zgmj')>-1){
	            clumns.push({field : 'zgmj',title : '主管民警',width : 200,hidden:util.getArrayIndex(option.hidden,'zgmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zgmj==null?"":row.zgmj)+'>'+(row.zgmj==null?"":row.zgmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xgmj')>-1){
	            clumns.push({field : 'xgmj',title : '协管民警',width : 200,hidden:util.getArrayIndex(option.hidden,'xgmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xgmj==null?"":row.xgmj)+'>'+(row.xgmj==null?"":row.xgmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wmjs')>-1){
	            clumns.push({field : 'wmjs',title : '文明拘室',width : 200,hidden:util.getArrayIndex(option.hidden,'wmjs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wmjs==null?"":row.wmjs)+'>'+(row.wmjs==null?"":row.wmjs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scbz')>-1){
	            clumns.push({field : 'scbz',title : '上传标志',width : 200,hidden:util.getArrayIndex(option.hidden,'scbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scbz==null?"":row.scbz)+'>'+(row.scbz==null?"":row.scbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'operator')>-1){
	            clumns.push({field : 'operator',title : '操作人',width : 200,hidden:util.getArrayIndex(option.hidden,'operator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.operator==null?"":row.operator)+'>'+(row.operator==null?"":row.operator)+'</span>'}});
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