/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Ysxz 数据列表
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
			if(util.getArrayIndex(option.clumns,'xm')>-1){
	            clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jsh')>-1){
	            clumns.push({field : 'jsh',title : '拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'xbString')>-1){
	            clumns.push({field : 'xbString',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xbString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xbString==null?"":row.xbString)+'>'+(row.xbString==null?"":row.xbString)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'rsrqString')>-1){
	            clumns.push({field : 'rsrqString',title : '入所日期',width : 200,hidden:util.getArrayIndex(option.hidden,'rsrqString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsrqString==null?"":row.rsrqString)+'>'+(row.rsrqString==null?"":row.rsrqString)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'ayString')>-1){
	            clumns.push({field : 'ayString',title : '案由',width : 200,hidden:util.getArrayIndex(option.hidden,'ayString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ayString==null?"":row.rsrqString)+'>'+(row.ayString==null?"":row.ayString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywgms')>-1){
	            clumns.push({field : 'ywgms',title : '病史档案',width : 200,hidden:util.getArrayIndex(option.hidden,'ywgms')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywgms==null?"":row.ywgms)+'>'+(row.ywgms==null?"":row.ywgms)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sbqk')>-1){
	            clumns.push({field : 'sbqk',title : '主要症状[初步诊断]',width : 200,hidden:util.getArrayIndex(option.hidden,'sbqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sbqk==null?"":row.sbqk)+'>'+(row.sbqk==null?"":row.sbqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zlcs')>-1){
	            clumns.push({field : 'zlcs',title : '治疗措施',width : 200,hidden:util.getArrayIndex(option.hidden,'zlcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zlcs==null?"":row.zlcs)+'>'+(row.zlcs==null?"":row.zlcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clfs')>-1){
	            clumns.push({field : 'clfs',title : '处理方式',width : 200,hidden:util.getArrayIndex(option.hidden,'clfs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clfs==null?"":row.clfs)+'>'+(row.clfs==null?"":row.clfs)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'clfsString')>-1){
	            clumns.push({field : 'clfsString',title : '处理方式',width : 200,hidden:util.getArrayIndex(option.hidden,'clfsString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clfsString==null?"":row.clfsString)+'>'+(row.clfsString==null?"":row.clfsString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ysqm')>-1){
	            clumns.push({field : 'ysqm',title : '医生签名',width : 200,hidden:util.getArrayIndex(option.hidden,'ysqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysqm==null?"":row.ysqm)+'>'+(row.ysqm==null?"":row.ysqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xzrq')>-1){
	            clumns.push({field : 'xzrq',title : '巡诊时间',width : 200,hidden:util.getArrayIndex(option.hidden,'xzrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xzrq==null?"":row.xzrq)+'>'+(row.xzrq==null?"":row.xzrq)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'xzrqString')>-1){
	            clumns.push({field : 'xzrqString',title : '巡诊时间',width : 200,hidden:util.getArrayIndex(option.hidden,'xzrqString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xzrqString==null?"":row.xzrqString)+'>'+(row.xzrqString==null?"":row.xzrqString)+'</span>'}});
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