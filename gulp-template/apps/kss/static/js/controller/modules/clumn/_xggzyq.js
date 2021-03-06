/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Xggzyq 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jqh')>-1){
	            clumns.push({field : 'jqh',title : '监区号',width : 200,hidden:util.getArrayIndex(option.hidden,'jqh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jqh==null?"":row.jqh)+'>'+(row.jqh==null?"":row.jqh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yqqk')>-1){
	            clumns.push({field : 'yqqk',title : '工作要求情况',width : 200,hidden:util.getArrayIndex(option.hidden,'yqqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yqqk==null?"":row.yqqk)+'>'+(row.yqqk==null?"":row.yqqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yqnr')>-1){
	            clumns.push({field : 'yqnr',title : '工作要求内容',width : 200,hidden:util.getArrayIndex(option.hidden,'yqnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yqnr==null?"":row.yqnr)+'>'+(row.yqnr==null?"":row.yqnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yqfk')>-1){
	            clumns.push({field : 'yqfk',title : '要求必须反馈',width : 200,hidden:util.getArrayIndex(option.hidden,'yqfk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yqfk==null?"":row.yqfk)+'>'+(row.yqfk==null?"":row.yqfk)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'yqfkString')>-1){
				clumns.push({field : 'yqfkString',title : '要求必须反馈',width : 200,hidden:util.getArrayIndex(option.hidden,'yqfkString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yqfkString==null?"":row.yqfkString)+'>'+(row.yqfkString==null?"":row.yqfkString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'fkr')>-1){
	            clumns.push({field : 'fkr',title : '反馈人',width : 200,hidden:util.getArrayIndex(option.hidden,'fkr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fkr==null?"":row.fkr)+'>'+(row.fkr==null?"":row.fkr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fksj')>-1){
	            clumns.push({field : 'fksj',title : '反馈时间',width : 200,hidden:util.getArrayIndex(option.hidden,'fksj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fksj==null?"":row.fksj)+'>'+(row.fksj==null?"":row.fksj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fkqk')>-1){
	            clumns.push({field : 'fkqk',title : '反馈情况',width : 200,hidden:util.getArrayIndex(option.hidden,'fkqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fkqk==null?"":row.fkqk)+'>'+(row.fkqk==null?"":row.fkqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fkzt')>-1){
	            clumns.push({field : 'fkzt',title : '反馈状态(SHFO)',width : 200,hidden:util.getArrayIndex(option.hidden,'fkzt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fkzt==null?"":row.fkzt)+'>'+(row.fkzt==null?"":row.fkzt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态(YWSTATE)',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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