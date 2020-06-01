/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Yjyayl 数据列表
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
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'kssj')>-1){
	            clumns.push({field : 'kssj',title : '开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'kssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kssj==null?"":row.kssj)+'>'+(row.kssj==null?"":row.kssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jssj')>-1){
	            clumns.push({field : 'jssj',title : '结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jssj==null?"":row.jssj)+'>'+(row.jssj==null?"":row.jssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zzzhz')>-1){
	            clumns.push({field : 'zzzhz',title : '组织指挥者',width : 200,hidden:util.getArrayIndex(option.hidden,'zzzhz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzzhz==null?"":row.zzzhz)+'>'+(row.zzzhz==null?"":row.zzzhz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yllb')>-1){
	            clumns.push({field : 'yllb',title : '演练类别',width : 200,hidden:util.getArrayIndex(option.hidden,'yllb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yllb==null?"":row.yllb)+'>'+(row.yllb==null?"":row.yllb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cjdw')>-1){
	            clumns.push({field : 'cjdw',title : '参加单位',width : 200,hidden:util.getArrayIndex(option.hidden,'cjdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cjdw==null?"":row.cjdw)+'>'+(row.cjdw==null?"":row.cjdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cjrs')>-1){
	            clumns.push({field : 'cjrs',title : '参加人数',width : 200,hidden:util.getArrayIndex(option.hidden,'cjrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cjrs==null?"":row.cjrs)+'>'+(row.cjrs==null?"":row.cjrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yaylnr')>-1){
	            clumns.push({field : 'yaylnr',title : '预案演练内容',width : 200,hidden:util.getArrayIndex(option.hidden,'yaylnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yaylnr==null?"":row.yaylnr)+'>'+(row.yaylnr==null?"":row.yaylnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zcld')>-1){
	            clumns.push({field : 'zcld',title : '主持领导',width : 200,hidden:util.getArrayIndex(option.hidden,'zcld')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zcld==null?"":row.zcld)+'>'+(row.zcld==null?"":row.zcld)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hyjlr')>-1){
	            clumns.push({field : 'hyjlr',title : '记录人',width : 200,hidden:util.getArrayIndex(option.hidden,'hyjlr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hyjlr==null?"":row.hyjlr)+'>'+(row.hyjlr==null?"":row.hyjlr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ylqk')>-1){
	            clumns.push({field : 'ylqk',title : '演练情况',width : 200,hidden:util.getArrayIndex(option.hidden,'ylqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ylqk==null?"":row.ylqk)+'>'+(row.ylqk==null?"":row.ylqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czwt')>-1){
	            clumns.push({field : 'czwt',title : '存在的问题',width : 200,hidden:util.getArrayIndex(option.hidden,'czwt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czwt==null?"":row.czwt)+'>'+(row.czwt==null?"":row.czwt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjcs')>-1){
	            clumns.push({field : 'gjcs',title : '改进措施',width : 200,hidden:util.getArrayIndex(option.hidden,'gjcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjcs==null?"":row.gjcs)+'>'+(row.gjcs==null?"":row.gjcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dqjd')>-1){
	            clumns.push({field : 'dqjd',title : '当前阶段',width : 200,hidden:util.getArrayIndex(option.hidden,'dqjd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dqjd==null?"":row.dqjd)+'>'+(row.dqjd==null?"":row.dqjd)+'</span>'}});
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