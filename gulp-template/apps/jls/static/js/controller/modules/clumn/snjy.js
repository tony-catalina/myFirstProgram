/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Snjy 数据列表
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
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'snbh')>-1){
	            clumns.push({field : 'snbh',title : '所内编号',width : 200,hidden:util.getArrayIndex(option.hidden,'snbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.snbh==null?"":row.snbh)+'>'+(row.snbh==null?"":row.snbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zz')>-1){
	            clumns.push({field : 'zz',title : '症状',width : 200,hidden:util.getArrayIndex(option.hidden,'zz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zz==null?"":row.zz)+'>'+(row.zz==null?"":row.zz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tz')>-1){
	            clumns.push({field : 'tz',title : '体征',width : 200,hidden:util.getArrayIndex(option.hidden,'tz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tz==null?"":row.tz)+'>'+(row.tz==null?"":row.tz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcjg')>-1){
	            clumns.push({field : 'jcjg',title : '检查结果',width : 200,hidden:util.getArrayIndex(option.hidden,'jcjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcjg==null?"":row.jcjg)+'>'+(row.jcjg==null?"":row.jcjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zzjg')>-1){
	            clumns.push({field : 'zzjg',title : '诊治结果',width : 200,hidden:util.getArrayIndex(option.hidden,'zzjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzjg==null?"":row.zzjg)+'>'+(row.zzjg==null?"":row.zzjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdys')>-1){
	            clumns.push({field : 'zdys',title : '诊断医生',width : 200,hidden:util.getArrayIndex(option.hidden,'zdys')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdys==null?"":row.zdys)+'>'+(row.zdys==null?"":row.zdys)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdrq')>-1){
	            clumns.push({field : 'zdrq',title : '诊断日期',width : 200,hidden:util.getArrayIndex(option.hidden,'zdrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdrq==null?"":row.zdrq)+'>'+(row.zdrq==null?"":row.zdrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cfdh')>-1){
	            clumns.push({field : 'cfdh',title : '处方单号',width : 200,hidden:util.getArrayIndex(option.hidden,'cfdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cfdh==null?"":row.cfdh)+'>'+(row.cfdh==null?"":row.cfdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cfsm')>-1){
	            clumns.push({field : 'cfsm',title : '处方说明',width : 200,hidden:util.getArrayIndex(option.hidden,'cfsm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cfsm==null?"":row.cfsm)+'>'+(row.cfsm==null?"":row.cfsm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ypmc')>-1){
	            clumns.push({field : 'ypmc',title : '药品名称',width : 200,hidden:util.getArrayIndex(option.hidden,'ypmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypmc==null?"":row.ypmc)+'>'+(row.ypmc==null?"":row.ypmc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gg')>-1){
	            clumns.push({field : 'gg',title : '规格',width : 200,hidden:util.getArrayIndex(option.hidden,'gg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gg==null?"":row.gg)+'>'+(row.gg==null?"":row.gg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ypdw')>-1){
	            clumns.push({field : 'ypdw',title : '药品单位',width : 200,hidden:util.getArrayIndex(option.hidden,'ypdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypdw==null?"":row.ypdw)+'>'+(row.ypdw==null?"":row.ypdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ypsl')>-1){
	            clumns.push({field : 'ypsl',title : '药品数量',width : 200,hidden:util.getArrayIndex(option.hidden,'ypsl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypsl==null?"":row.ypsl)+'>'+(row.ypsl==null?"":row.ypsl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ypyf')>-1){
	            clumns.push({field : 'ypyf',title : '药品用法用量',width : 200,hidden:util.getArrayIndex(option.hidden,'ypyf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypyf==null?"":row.ypyf)+'>'+(row.ypyf==null?"":row.ypyf)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'kssj')>-1){
	            clumns.push({field : 'kssj',title : '开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'kssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kssj==null?"":row.kssj)+'>'+(row.kssj==null?"":row.kssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jssj')>-1){
	            clumns.push({field : 'jssj',title : '结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jssj==null?"":row.jssj)+'>'+(row.jssj==null?"":row.jssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yzbh')>-1){
	            clumns.push({field : 'yzbh',title : '医嘱编号',width : 200,hidden:util.getArrayIndex(option.hidden,'yzbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yzbh==null?"":row.yzbh)+'>'+(row.yzbh==null?"":row.yzbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yznr')>-1){
	            clumns.push({field : 'yznr',title : '医嘱内容',width : 200,hidden:util.getArrayIndex(option.hidden,'yznr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yznr==null?"":row.yznr)+'>'+(row.yznr==null?"":row.yznr)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程id',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'taskid')>-1){
	            clumns.push({field : 'taskid',title : '流程id',width : 200,hidden:util.getArrayIndex(option.hidden,'taskid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.taskid==null?"":row.taskid)+'>'+(row.taskid==null?"":row.taskid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsh')>-1){
	            clumns.push({field : 'jsh',title : '拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});