/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Qybz 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jsh')>-1){
	            clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bzlx')>-1){
	            clumns.push({field : 'bzlx',title : '保障类型',width : 200,hidden:util.getArrayIndex(option.hidden,'bzlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bzlx==null?"":row.bzlx)+'>'+(row.bzlx==null?"":row.bzlx)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'qy')>-1){
				clumns.push({field : 'qy',title : '区域',width : 200,hidden:util.getArrayIndex(option.hidden,'qy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qy==null?"":row.qy)+'>'+(row.qy==null?"":row.qy)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'kssj')>-1){
	            clumns.push({field : 'kssj',title : '开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'kssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kssj==null?"":row.kssj)+'>'+(row.kssj==null?"":row.kssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jssj')>-1){
	            clumns.push({field : 'jssj',title : '结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jssj==null?"":row.jssj)+'>'+(row.jssj==null?"":row.jssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dcsj')>-1){
	            clumns.push({field : 'dcsj',title : '带出时间',width : 200,hidden:util.getArrayIndex(option.hidden,'dcsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dcsj==null?"":row.dcsj)+'>'+(row.dcsj==null?"":row.dcsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dcmj')>-1){
	            clumns.push({field : 'dcmj',title : '带出民警',width : 200,hidden:util.getArrayIndex(option.hidden,'dcmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dcmj==null?"":row.dcmj)+'>'+(row.dcmj==null?"":row.dcmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dcrs')>-1){
	            clumns.push({field : 'dcrs',title : '带出人数',width : 200,hidden:util.getArrayIndex(option.hidden,'dcrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dcrs==null?"":row.dcrs)+'>'+(row.dcrs==null?"":row.dcrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dd')>-1){
	            clumns.push({field : 'dd',title : '带出地点',width : 200,hidden:util.getArrayIndex(option.hidden,'dd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dd==null?"":row.dd)+'>'+(row.dd==null?"":row.dd)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'mjxm')>-1){
				clumns.push({field : 'mjxm',title : '民警姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'mjxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mjxm==null?"":row.mjxm)+'>'+(row.mjxm==null?"":row.mjxm)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'dlr')>-1){
	            clumns.push({field : 'dlr',title : '带领人',width : 200,hidden:util.getArrayIndex(option.hidden,'dlr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dlr==null?"":row.dlr)+'>'+(row.dlr==null?"":row.dlr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dlys')>-1){
	            clumns.push({field : 'dlys',title : '带领医生',width : 200,hidden:util.getArrayIndex(option.hidden,'dlys')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dlys==null?"":row.dlys)+'>'+(row.dlys==null?"":row.dlys)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jtqk')>-1){
	            clumns.push({field : 'jtqk',title : '具体情况',width : 200,hidden:util.getArrayIndex(option.hidden,'jtqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jtqk==null?"":row.jtqk)+'>'+(row.jtqk==null?"":row.jtqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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
	        
	        return clumns;
	    };
	    return main;
	});