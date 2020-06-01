/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Ggsw 数据列表
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
	        if(util.getArrayIndex(option.clumns,'swlx')>-1){
	            clumns.push({field : 'swlx',title : '事物类型',width : 200,hidden:util.getArrayIndex(option.hidden,'swlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swlx==null?"":row.swlx)+'>'+(row.swlx==null?"":row.swlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fssj')>-1){
	            clumns.push({field : 'fssj',title : '发生时间',width : 200,hidden:util.getArrayIndex(option.hidden,'fssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fssj==null?"":row.fssj)+'>'+(row.fssj==null?"":row.fssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nrjl')>-1){
	            clumns.push({field : 'nrjl',title : '内容记录',width : 200,hidden:util.getArrayIndex(option.hidden,'nrjl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nrjl==null?"":row.nrjl)+'>'+(row.nrjl==null?"":row.nrjl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djr')>-1){
	            clumns.push({field : 'djr',title : '登记人',width : 200,hidden:util.getArrayIndex(option.hidden,'djr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djr==null?"":row.djr)+'>'+(row.djr==null?"":row.djr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djsj')>-1){
	            clumns.push({field : 'djsj',title : '登记时间',width : 200,hidden:util.getArrayIndex(option.hidden,'djsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djsj==null?"":row.djsj)+'>'+(row.djsj==null?"":row.djsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dd')>-1){
	            clumns.push({field : 'dd',title : '地点',width : 200,hidden:util.getArrayIndex(option.hidden,'dd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dd==null?"":row.dd)+'>'+(row.dd==null?"":row.dd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zcr')>-1){
	            clumns.push({field : 'zcr',title : '主持人',width : 200,hidden:util.getArrayIndex(option.hidden,'zcr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zcr==null?"":row.zcr)+'>'+(row.zcr==null?"":row.zcr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cjry')>-1){
	            clumns.push({field : 'cjry',title : '参加人员',width : 200,hidden:util.getArrayIndex(option.hidden,'cjry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cjry==null?"":row.cjry)+'>'+(row.cjry==null?"":row.cjry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cjwj')>-1){
	            clumns.push({field : 'cjwj',title : '参加武警',width : 200,hidden:util.getArrayIndex(option.hidden,'cjwj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cjwj==null?"":row.cjwj)+'>'+(row.cjwj==null?"":row.cjwj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qtcjry')>-1){
	            clumns.push({field : 'qtcjry',title : '其他参加人员',width : 200,hidden:util.getArrayIndex(option.hidden,'qtcjry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qtcjry==null?"":row.qtcjry)+'>'+(row.qtcjry==null?"":row.qtcjry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yjjy')>-1){
	            clumns.push({field : 'yjjy',title : '意见建议',width : 200,hidden:util.getArrayIndex(option.hidden,'yjjy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yjjy==null?"":row.yjjy)+'>'+(row.yjjy==null?"":row.yjjy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjcs')>-1){
	            clumns.push({field : 'gjcs',title : '改进措施',width : 200,hidden:util.getArrayIndex(option.hidden,'gjcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjcs==null?"":row.gjcs)+'>'+(row.gjcs==null?"":row.gjcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qt')>-1){
	            clumns.push({field : 'qt',title : '其他',width : 200,hidden:util.getArrayIndex(option.hidden,'qt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qt==null?"":row.qt)+'>'+(row.qt==null?"":row.qt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxfs')>-1){
	            clumns.push({field : 'lxfs',title : '联系方式',width : 200,hidden:util.getArrayIndex(option.hidden,'lxfs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxfs==null?"":row.lxfs)+'>'+(row.lxfs==null?"":row.lxfs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dw')>-1){
	            clumns.push({field : 'dw',title : '单位',width : 200,hidden:util.getArrayIndex(option.hidden,'dw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dw==null?"":row.dw)+'>'+(row.dw==null?"":row.dw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nn')>-1){
	            clumns.push({field : 'nn',title : '年龄',width : 200,hidden:util.getArrayIndex(option.hidden,'nn')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nn==null?"":row.nn)+'>'+(row.nn==null?"":row.nn)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
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