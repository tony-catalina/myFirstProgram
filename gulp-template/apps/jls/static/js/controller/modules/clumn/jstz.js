/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jstz 数据列表
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
			if(util.getArrayIndex(option.clumns,'jbxx_xm')>-1){
	        	clumns.push({field : 'jbxx_xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_xm==null?"":row.jbxx_xm)+'>'+(row.jbxx_xm==null?"":row.jbxx_xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_bm')>-1){
	        	clumns.push({field : 'jbxx_bm',title : '别名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bm==null?"":row.jbxx_bm)+'>'+(row.jbxx_bm==null?"":row.jbxx_bm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_xb')>-1){
	        	clumns.push({field : 'jbxx_xb',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_xb==null?"":row.jbxx_xb)+'>'+(row.jbxx_xb==null?"":row.jbxx_xb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_jsh')>-1){
	        	clumns.push({field : 'jbxx_jsh',title : '拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_jsh==null?"":row.jbxx_jsh)+'>'+(row.jbxx_jsh==null?"":row.jbxx_jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_rsrq')>-1){
	        	clumns.push({field : 'jbxx_rsrq',title : '入所日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_rsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_rsrq==null?"":row.jbxx_rsrq)+'>'+(row.jbxx_rsrq==null?"":row.jbxx_rsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_gyqx')>-1){
	        	clumns.push({field : 'jbxx_gyqx',title : '关押期限',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_gyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_gyqx==null?"":row.jbxx_gyqx)+'>'+(row.jbxx_gyqx==null?"":row.jbxx_gyqx)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jbxx_gyts')>-1){
	        	clumns.push({field : 'jbxx_gyts',title : '关押天数',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_gyts')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_gyts==null?"":row.jbxx_gyts)+'>'+(row.jbxx_gyts==null?"":row.jbxx_gyts)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_bahj')>-1){
	        	clumns.push({field : 'jbxx_bahj',title : '办案环节',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bahj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bahj==null?"":row.jbxx_bahj)+'>'+(row.jbxx_bahj==null?"":row.jbxx_bahj)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jbxx_badw')>-1){
	        	clumns.push({field : 'jbxx_badw',title : '办案单位',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_gyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_badw==null?"":row.jbxx_badw)+'>'+(row.jbxx_badw==null?"":row.jbxx_badw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_ay')>-1){
	        	clumns.push({field : 'jbxx_ay',title : '案别',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_ay')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_ay==null?"":row.jbxx_ay)+'>'+(row.jbxx_ay==null?"":row.jbxx_ay)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blrq')>-1){
	            clumns.push({field : 'blrq',title : '办理日期',width : 200,hidden:util.getArrayIndex(option.hidden,'blrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blrq==null?"":row.blrq)+'>'+(row.blrq==null?"":row.blrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjmj')>-1){
	            clumns.push({field : 'gjmj',title : '管教民警',width : 200,hidden:util.getArrayIndex(option.hidden,'gjmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjmj==null?"":row.gjmj)+'>'+(row.gjmj==null?"":row.gjmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yjsh')>-1){
	            clumns.push({field : 'yjsh',title : '原拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'yjsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yjsh==null?"":row.yjsh)+'>'+(row.yjsh==null?"":row.yjsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xjsh')>-1){
	            clumns.push({field : 'xjsh',title : '拟拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'xjsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xjsh==null?"":row.xjsh)+'>'+(row.xjsh==null?"":row.xjsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tjyy')>-1){
	            clumns.push({field : 'tjyy',title : '调室理由',width : 200,hidden:util.getArrayIndex(option.hidden,'tjyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tjyy==null?"":row.tjyy)+'>'+(row.tjyy==null?"":row.tjyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yy')>-1){
	            clumns.push({field : 'yy',title : '原因',width : 200,hidden:util.getArrayIndex(option.hidden,'yy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yy==null?"":row.yy)+'>'+(row.yy==null?"":row.yy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tzsj')>-1){
	            clumns.push({field : 'tzsj',title : '调整时间',width : 200,hidden:util.getArrayIndex(option.hidden,'tzsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tzsj==null?"":row.tzsj)+'>'+(row.tzsj==null?"":row.tzsj)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'blrqString')>-1){
	            clumns.push({field : 'blrqString',title : '办理日期',width : 200,hidden:util.getArrayIndex(option.hidden,'blrqString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blrqString==null?"":row.blrqString)+'>'+(row.blrqString==null?"":row.blrqString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzyj')>-1){
	            clumns.push({field : 'jzyj',title : '警组意见',width : 200,hidden:util.getArrayIndex(option.hidden,'jzyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzyj==null?"":row.jzyj)+'>'+(row.jzyj==null?"":row.jzyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzyjnr')>-1){
	            clumns.push({field : 'jzyjnr',title : '警组意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'jzyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzyjnr==null?"":row.jzyjnr)+'>'+(row.jzyjnr==null?"":row.jzyjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sldyj')>-1){
	            clumns.push({field : 'sldyj',title : '所领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'sldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldyj==null?"":row.sldyj)+'>'+(row.sldyj==null?"":row.sldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sldyjnr')>-1){
	            clumns.push({field : 'sldyjnr',title : '所领导意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'sldyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldyjnr==null?"":row.sldyjnr)+'>'+(row.sldyjnr==null?"":row.sldyjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sldqm')>-1){
	            clumns.push({field : 'sldqm',title : '所领导签名',width : 200,hidden:util.getArrayIndex(option.hidden,'sldqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldqm==null?"":row.sldqm)+'>'+(row.sldqm==null?"":row.sldqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sldqmrq')>-1){
	            clumns.push({field : 'sldqmrq',title : '所领导签名日期',width : 200,hidden:util.getArrayIndex(option.hidden,'sldqmrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldqmrq==null?"":row.sldqmrq)+'>'+(row.sldqmrq==null?"":row.sldqmrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'taskid')>-1){
	            clumns.push({field : 'taskid',title : '流程进程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'taskid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.taskid==null?"":row.taskid)+'>'+(row.taskid==null?"":row.taskid)+'</span>'}});
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