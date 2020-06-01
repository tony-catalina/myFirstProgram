/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Fssg 数据列表
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
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sgsj')>-1){
	            clumns.push({field : 'sgsj',title : '事故时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sgsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sgsj==null?"":row.sgsj)+'>'+(row.sgsj==null?"":row.sgsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sgxz')>-1){
	            clumns.push({field : 'sgxz',title : '事故性质，事故类别',width : 200,hidden:util.getArrayIndex(option.hidden,'sgxz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sgxz==null?"":row.sgxz)+'>'+(row.sgxz==null?"":row.sgxz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sglx')>-1){
	            clumns.push({field : 'sglx',title : '事故类型',width : 200,hidden:util.getArrayIndex(option.hidden,'sglx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sglx==null?"":row.sglx)+'>'+(row.sglx==null?"":row.sglx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sgdw')>-1){
	            clumns.push({field : 'sgdw',title : '事故单位',width : 200,hidden:util.getArrayIndex(option.hidden,'sgdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sgdw==null?"":row.sgdw)+'>'+(row.sgdw==null?"":row.sgdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sgdd')>-1){
	            clumns.push({field : 'sgdd',title : '事故地点',width : 200,hidden:util.getArrayIndex(option.hidden,'sgdd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sgdd==null?"":row.sgdd)+'>'+(row.sgdd==null?"":row.sgdd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbr')>-1){
	            clumns.push({field : 'jbr',title : '经办人',width : 200,hidden:util.getArrayIndex(option.hidden,'jbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbr==null?"":row.jbr)+'>'+(row.jbr==null?"":row.jbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jyqk')>-1){
	            clumns.push({field : 'jyqk',title : '简要情况',width : 200,hidden:util.getArrayIndex(option.hidden,'jyqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jyqk==null?"":row.jyqk)+'>'+(row.jyqk==null?"":row.jyqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clqk')>-1){
	            clumns.push({field : 'clqk',title : '处理情况',width : 200,hidden:util.getArrayIndex(option.hidden,'clqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clqk==null?"":row.clqk)+'>'+(row.clqk==null?"":row.clqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cljg')>-1){
	            clumns.push({field : 'cljg',title : '处理结果',width : 200,hidden:util.getArrayIndex(option.hidden,'cljg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cljg==null?"":row.cljg)+'>'+(row.cljg==null?"":row.cljg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sgrs')>-1){
	            clumns.push({field : 'sgrs',title : '事故人数',width : 200,hidden:util.getArrayIndex(option.hidden,'sgrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sgrs==null?"":row.sgrs)+'>'+(row.sgrs==null?"":row.sgrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sgqk')>-1){
	            clumns.push({field : 'sgqk',title : '事故情况',width : 200,hidden:util.getArrayIndex(option.hidden,'sgqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sgqk==null?"":row.sgqk)+'>'+(row.sgqk==null?"":row.sgqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'shr')>-1){
	            clumns.push({field : 'shr',title : '审核人',width : 200,hidden:util.getArrayIndex(option.hidden,'shr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.shr==null?"":row.shr)+'>'+(row.shr==null?"":row.shr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'shsj')>-1){
	            clumns.push({field : 'shsj',title : '审核时间',width : 200,hidden:util.getArrayIndex(option.hidden,'shsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.shsj==null?"":row.shsj)+'>'+(row.shsj==null?"":row.shsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sjlx')>-1){
	            clumns.push({field : 'sjlx',title : '事件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'sjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjlx==null?"":row.sjlx)+'>'+(row.sjlx==null?"":row.sjlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qklx')>-1){
	            clumns.push({field : 'qklx',title : '情况类型',width : 200,hidden:util.getArrayIndex(option.hidden,'qklx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qklx==null?"":row.qklx)+'>'+(row.qklx==null?"":row.qklx)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'sfcl')>-1){
	            clumns.push({field : 'sfcl',title : '是否处理',width : 200,hidden:util.getArrayIndex(option.hidden,'sfcl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfcl==null?"":row.sfcl)+'>'+(row.sfcl==null?"":row.sfcl)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});