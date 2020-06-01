/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Crjjc 数据列表
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
	        if(util.getArrayIndex(option.clumns,'bllx')>-1){
	            clumns.push({field : 'bllx',title : '办理类型',width : 200,hidden:util.getArrayIndex(option.hidden,'bllx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bllx==null?"":row.bllx)+'>'+(row.bllx==null?"":row.bllx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blsj')>-1){
	            clumns.push({field : 'blsj',title : '办理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'blsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blsj==null?"":row.blsj)+'>'+(row.blsj==null?"":row.blsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywqxyc')>-1){
	            clumns.push({field : 'ywqxyc',title : '有无异常',width : 200,hidden:util.getArrayIndex(option.hidden,'ywqxyc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywqxyc==null?"":row.ywqxyc)+'>'+(row.ywqxyc==null?"":row.ywqxyc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qxycqk')>-1){
	            clumns.push({field : 'qxycqk',title : '情绪异常情况',width : 200,hidden:util.getArrayIndex(option.hidden,'qxycqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qxycqk==null?"":row.qxycqk)+'>'+(row.qxycqk==null?"":row.qxycqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywzssb')>-1){
	            clumns.push({field : 'ywzssb',title : '有无自述伤病',width : 200,hidden:util.getArrayIndex(option.hidden,'ywzssb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywzssb==null?"":row.ywzssb)+'>'+(row.ywzssb==null?"":row.ywzssb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sbqk')>-1){
	            clumns.push({field : 'sbqk',title : '伤病情况',width : 200,hidden:util.getArrayIndex(option.hidden,'sbqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sbqk==null?"":row.sbqk)+'>'+(row.sbqk==null?"":row.sbqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywwjp')>-1){
	            clumns.push({field : 'ywwjp',title : '有无违禁品',width : 200,hidden:util.getArrayIndex(option.hidden,'ywwjp')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywwjp==null?"":row.ywwjp)+'>'+(row.ywwjp==null?"":row.ywwjp)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wjpqk')>-1){
	            clumns.push({field : 'wjpqk',title : '违禁品情况',width : 200,hidden:util.getArrayIndex(option.hidden,'wjpqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wjpqk==null?"":row.wjpqk)+'>'+(row.wjpqk==null?"":row.wjpqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywtbs')>-1){
	            clumns.push({field : 'ywtbs',title : '有无体表伤',width : 200,hidden:util.getArrayIndex(option.hidden,'ywtbs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywtbs==null?"":row.ywtbs)+'>'+(row.ywtbs==null?"":row.ywtbs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zssbqk')>-1){
	            clumns.push({field : 'zssbqk',title : '自述受伤情况',width : 200,hidden:util.getArrayIndex(option.hidden,'zssbqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zssbqk==null?"":row.zssbqk)+'>'+(row.zssbqk==null?"":row.zssbqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dlmj')>-1){
	            clumns.push({field : 'dlmj',title : '带领民警',width : 200,hidden:util.getArrayIndex(option.hidden,'dlmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dlmj==null?"":row.dlmj)+'>'+(row.dlmj==null?"":row.dlmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bdfs')>-1){
	            clumns.push({field : 'bdfs',title : '比对方式',width : 200,hidden:util.getArrayIndex(option.hidden,'bdfs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bdfs==null?"":row.bdfs)+'>'+(row.bdfs==null?"":row.bdfs)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'ywbh')>-1){
	            clumns.push({field : 'ywbh',title : '业务名称',width : 200,hidden:util.getArrayIndex(option.hidden,'ywbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywbh==null?"":row.ywbh)+'>'+(row.ywbh==null?"":row.ywbh)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});