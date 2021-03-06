/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Scqk 数据列表
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
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rq')>-1){
	            clumns.push({field : 'rq',title : '视察日期',width : 200,hidden:util.getArrayIndex(option.hidden,'rq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rq==null?"":row.rq)+'>'+(row.rq==null?"":row.rq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tt')>-1){
	            clumns.push({field : 'tt',title : '视察团体',width : 200,hidden:util.getArrayIndex(option.hidden,'tt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tt==null?"":row.tt)+'>'+(row.tt==null?"":row.tt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cy')>-1){
	            clumns.push({field : 'cy',title : '主要成员',width : 200,hidden:util.getArrayIndex(option.hidden,'cy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cy==null?"":row.cy)+'>'+(row.cy==null?"":row.cy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jdr')>-1){
	            clumns.push({field : 'jdr',title : '接待人',width : 200,hidden:util.getArrayIndex(option.hidden,'jdr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jdr==null?"":row.jdr)+'>'+(row.jdr==null?"":row.jdr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cdsj')>-1){
	            clumns.push({field : 'cdsj',title : '存档时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cdsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cdsj==null?"":row.cdsj)+'>'+(row.cdsj==null?"":row.cdsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldxm')>-1){
	            clumns.push({field : 'ldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldxm==null?"":row.ldxm)+'>'+(row.ldxm==null?"":row.ldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldzw')>-1){
	            clumns.push({field : 'ldzw',title : '领导职位',width : 200,hidden:util.getArrayIndex(option.hidden,'ldzw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldzw==null?"":row.ldzw)+'>'+(row.ldzw==null?"":row.ldzw)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'ldzwString')>-1){
	            clumns.push({field : 'ldzwString',title : '领导职位',width : 200,hidden:util.getArrayIndex(option.hidden,'ldzwString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldzwString==null?"":row.ldzwString)+'>'+(row.ldzwString==null?"":row.ldzwString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scnr')>-1){
	            clumns.push({field : 'scnr',title : '视察内容',width : 200,hidden:util.getArrayIndex(option.hidden,'scnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scnr==null?"":row.scnr)+'>'+(row.scnr==null?"":row.scnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yjjy')>-1){
	            clumns.push({field : 'yjjy',title : '意见建议',width : 200,hidden:util.getArrayIndex(option.hidden,'yjjy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yjjy==null?"":row.yjjy)+'>'+(row.yjjy==null?"":row.yjjy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zgqk')>-1){
	            clumns.push({field : 'zgqk',title : '整改情况',width : 200,hidden:util.getArrayIndex(option.hidden,'zgqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zgqk==null?"":row.zgqk)+'>'+(row.zgqk==null?"":row.zgqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlr')>-1){
	            clumns.push({field : 'jlr',title : '记录人',width : 200,hidden:util.getArrayIndex(option.hidden,'jlr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlr==null?"":row.jlr)+'>'+(row.jlr==null?"":row.jlr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scbz')>-1){
	            clumns.push({field : 'scbz',title : '及时标志',width : 200,hidden:util.getArrayIndex(option.hidden,'scbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scbz==null?"":row.scbz)+'>'+(row.scbz==null?"":row.scbz)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'taskid')>-1){
	            clumns.push({field : 'taskid',title : '业务进程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'taskid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.taskid==null?"":row.taskid)+'>'+(row.taskid==null?"":row.taskid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfls')>-1){
	            clumns.push({field : 'sfls',title : '是否落实（SHFO）',width : 200,hidden:util.getArrayIndex(option.hidden,'sfls')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfls==null?"":row.sfls)+'>'+(row.sfls==null?"":row.sfls)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});