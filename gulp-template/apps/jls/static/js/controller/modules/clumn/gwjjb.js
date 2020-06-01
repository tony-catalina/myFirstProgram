/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Gwjjb 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jbgw')>-1){
	            clumns.push({field : 'jbgw',title : '交班岗位',width : 200,hidden:util.getArrayIndex(option.hidden,'jbgw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbgw==null?"":row.jbgw)+'>'+(row.jbgw==null?"":row.jbgw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbry')>-1){
	            clumns.push({field : 'jbry',title : '交班人员',width : 200,hidden:util.getArrayIndex(option.hidden,'jbry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbry==null?"":row.jbry)+'>'+(row.jbry==null?"":row.jbry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbsj')>-1){
	            clumns.push({field : 'jbsj',title : '交班时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jbsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbsj==null?"":row.jbsj)+'>'+(row.jbsj==null?"":row.jbsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gzjl')>-1){
	            clumns.push({field : 'gzjl',title : '工作记录',width : 200,hidden:util.getArrayIndex(option.hidden,'gzjl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gzjl==null?"":row.gzjl)+'>'+(row.gzjl==null?"":row.gzjl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zysx')>-1){
	            clumns.push({field : 'zysx',title : '注意事项',width : 200,hidden:util.getArrayIndex(option.hidden,'zysx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zysx==null?"":row.zysx)+'>'+(row.zysx==null?"":row.zysx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'abry')>-1){
	            clumns.push({field : 'abry',title : '接班人员',width : 200,hidden:util.getArrayIndex(option.hidden,'abry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.abry==null?"":row.abry)+'>'+(row.abry==null?"":row.abry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'absj')>-1){
	            clumns.push({field : 'absj',title : '接班时间',width : 200,hidden:util.getArrayIndex(option.hidden,'absj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.absj==null?"":row.absj)+'>'+(row.absj==null?"":row.absj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjbzt')>-1){
	            clumns.push({field : 'jjbzt',title : '交接班状态',width : 200,hidden:util.getArrayIndex(option.hidden,'jjbzt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjbzt==null?"":row.jjbzt)+'>'+(row.jjbzt==null?"":row.jjbzt)+'</span>'}});
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