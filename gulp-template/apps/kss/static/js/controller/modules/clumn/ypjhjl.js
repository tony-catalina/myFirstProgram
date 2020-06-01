/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Ypjhjl 数据列表
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
	        if(util.getArrayIndex(option.clumns,'ypbh')>-1){
	            clumns.push({field : 'ypbh',title : '药品编号',width : 200,hidden:util.getArrayIndex(option.hidden,'ypbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypbh==null?"":row.ypbh)+'>'+(row.ypbh==null?"":row.ypbh)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'ypbhString')>-1){
				clumns.push({field : 'ypbhString',title : '药品名称',width : 200,hidden:util.getArrayIndex(option.hidden,'ypbhString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypbhString==null?"":row.ypbhString)+'>'+(row.ypbhString==null?"":row.ypbhString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jhsl')>-1){
	            clumns.push({field : 'jhsl',title : '进货数量',width : 200,hidden:util.getArrayIndex(option.hidden,'jhsl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jhsl==null?"":row.jhsl)+'>'+(row.jhsl==null?"":row.jhsl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzwh')>-1){
	            clumns.push({field : 'pzwh',title : '批准文号',width : 200,hidden:util.getArrayIndex(option.hidden,'pzwh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzwh==null?"":row.pzwh)+'>'+(row.pzwh==null?"":row.pzwh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pch')>-1){
	            clumns.push({field : 'pch',title : '批次号',width : 200,hidden:util.getArrayIndex(option.hidden,'pch')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pch==null?"":row.pch)+'>'+(row.pch==null?"":row.pch)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jg')>-1){
	            clumns.push({field : 'jg',title : '价格',width : 200,hidden:util.getArrayIndex(option.hidden,'jg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jg==null?"":row.jg)+'>'+(row.jg==null?"":row.jg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scrq')>-1){
	            clumns.push({field : 'scrq',title : '生产日期',width : 200,hidden:util.getArrayIndex(option.hidden,'scrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scrq==null?"":row.scrq)+'>'+(row.scrq==null?"":row.scrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bzq')>-1){
	            clumns.push({field : 'bzq',title : '保质期',width : 200,hidden:util.getArrayIndex(option.hidden,'bzq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bzq==null?"":row.bzq)+'>'+(row.bzq==null?"":row.bzq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dqsj')>-1){
	            clumns.push({field : 'dqsj',title : '到期时间 ',width : 200,hidden:util.getArrayIndex(option.hidden,'dqsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dqsj==null?"":row.dqsj)+'>'+(row.dqsj==null?"":row.dqsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jhsj')>-1){
	            clumns.push({field : 'jhsj',title : '进货时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jhsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jhsj==null?"":row.jhsj)+'>'+(row.jhsj==null?"":row.jhsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jhr')>-1){
	            clumns.push({field : 'jhr',title : '进货人',width : 200,hidden:util.getArrayIndex(option.hidden,'jhr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jhr==null?"":row.jhr)+'>'+(row.jhr==null?"":row.jhr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'createtime')>-1){
	            clumns.push({field : 'createtime',title : '创建时间',width : 200,hidden:util.getArrayIndex(option.hidden,'createtime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.createtime==null?"":row.createtime)+'>'+(row.createtime==null?"":row.createtime)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'jhbh')>-1){
	            clumns.push({field : 'jhbh',title : '进货编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jhbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jhbh==null?"":row.jhbh)+'>'+(row.jhbh==null?"":row.jhbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zje')>-1){
	            clumns.push({field : 'zje',title : '总金额',width : 200,hidden:util.getArrayIndex(option.hidden,'zje')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zje==null?"":row.zje)+'>'+(row.zje==null?"":row.zje)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});