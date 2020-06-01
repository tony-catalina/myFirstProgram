/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Sphjap 数据列表
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
	        if(util.getArrayIndex(option.clumns,'lxrid')>-1){
	            clumns.push({field : 'lxrid',title : '联系人',width : 200,hidden:util.getArrayIndex(option.hidden,'lxrid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxrid==null?"":row.lxrid)+'>'+(row.lxrid==null?"":row.lxrid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxsj')>-1){
	            clumns.push({field : 'lxsj',title : '联系时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lxsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxsj==null?"":row.lxsj)+'>'+(row.lxsj==null?"":row.lxsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxdh')>-1){
	            clumns.push({field : 'lxdh',title : '联系电话',width : 200,hidden:util.getArrayIndex(option.hidden,'lxdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxdh==null?"":row.lxdh)+'>'+(row.lxdh==null?"":row.lxdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxqk')>-1){
	            clumns.push({field : 'lxqk',title : '联系情况',width : 200,hidden:util.getArrayIndex(option.hidden,'lxqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxqk==null?"":row.lxqk)+'>'+(row.lxqk==null?"":row.lxqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjrid')>-1){
	            clumns.push({field : 'hjrid',title : '会见人',width : 200,hidden:util.getArrayIndex(option.hidden,'hjrid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjrid==null?"":row.hjrid)+'>'+(row.hjrid==null?"":row.hjrid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfhcqk')>-1){
	            clumns.push({field : 'sfhcqk',title : '身份核查情况',width : 200,hidden:util.getArrayIndex(option.hidden,'sfhcqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfhcqk==null?"":row.sfhcqk)+'>'+(row.sfhcqk==null?"":row.sfhcqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nhjsj')>-1){
	            clumns.push({field : 'nhjsj',title : '拟会见时间',width : 200,hidden:util.getArrayIndex(option.hidden,'nhjsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nhjsj==null?"":row.nhjsj)+'>'+(row.nhjsj==null?"":row.nhjsj)+'</span>'}});
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