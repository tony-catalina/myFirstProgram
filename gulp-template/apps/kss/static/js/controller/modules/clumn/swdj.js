/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Swdj 数据列表
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
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swsj')>-1){
	            clumns.push({field : 'swsj',title : '死亡时间',width : 200,hidden:util.getArrayIndex(option.hidden,'swsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swsj==null?"":row.swsj)+'>'+(row.swsj==null?"":row.swsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swdd')>-1){
	            clumns.push({field : 'swdd',title : '死亡地点',width : 200,hidden:util.getArrayIndex(option.hidden,'swdd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swdd==null?"":row.swdd)+'>'+(row.swdd==null?"":row.swdd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swyy')>-1){
	            clumns.push({field : 'swyy',title : '死亡原因',width : 200,hidden:util.getArrayIndex(option.hidden,'swyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swyy==null?"":row.swyy)+'>'+(row.swyy==null?"":row.swyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clqk')>-1){
	            clumns.push({field : 'clqk',title : '处理情况',width : 200,hidden:util.getArrayIndex(option.hidden,'clqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clqk==null?"":row.clqk)+'>'+(row.clqk==null?"":row.clqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swlx')>-1){
	            clumns.push({field : 'swlx',title : '死亡类型',width : 200,hidden:util.getArrayIndex(option.hidden,'swlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swlx==null?"":row.swlx)+'>'+(row.swlx==null?"":row.swlx)+'</span>'}});
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