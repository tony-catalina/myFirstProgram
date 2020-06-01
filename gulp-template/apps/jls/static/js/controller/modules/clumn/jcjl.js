/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jcjl 数据列表
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
	            clumns.push({field : 'jsbh',title : '拘所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
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
			if(util.getArrayIndex(option.clumns,'xm')>-1){
				clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jsh')>-1){
				clumns.push({field : 'jsh',title : '拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'jbxx_bahj')>-1){
	        	clumns.push({field : 'jbxx_bahj',title : '办案环节',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bahj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bahj==null?"":row.jbxx_bahj)+'>'+(row.jbxx_bahj==null?"":row.jbxx_bahj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlqk')>-1){
	            clumns.push({field : 'jlqk',title : '拘留情况',width : 200,hidden:util.getArrayIndex(option.hidden,'jlqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlqk==null?"":row.jlqk)+'>'+(row.jlqk==null?"":row.jlqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ly')>-1){
	            clumns.push({field : 'ly',title : '奖惩原因',width : 200,hidden:util.getArrayIndex(option.hidden,'ly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ly==null?"":row.ly)+'>'+(row.ly==null?"":row.ly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cpgj')>-1){
	            clumns.push({field : 'cpgj',title : '呈批管教',width : 200,hidden:util.getArrayIndex(option.hidden,'cpgj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cpgj==null?"":row.cpgj)+'>'+(row.cpgj==null?"":row.cpgj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cprq')>-1){
	            clumns.push({field : 'cprq',title : '呈批日期',width : 200,hidden:util.getArrayIndex(option.hidden,'cprq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cprq==null?"":row.cprq)+'>'+(row.cprq==null?"":row.cprq)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'cprqString')>-1){
			    clumns.push({field : 'cprqString',title : '呈批日期',width : 200,hidden:util.getArrayIndex(option.hidden,'cprqString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cprqString==null?"":row.cprqString)+'>'+(row.cprqString==null?"":row.cprqString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'zdyj')>-1){
	            clumns.push({field : 'zdyj',title : '中队意见',width : 200,hidden:util.getArrayIndex(option.hidden,'zdyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdyj==null?"":row.zdyj)+'>'+(row.zdyj==null?"":row.zdyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdyjnr')>-1){
	            clumns.push({field : 'zdyjnr',title : '中队意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'zdyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdyjnr==null?"":row.zdyjnr)+'>'+(row.zdyjnr==null?"":row.zdyjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdqm')>-1){
	            clumns.push({field : 'zdqm',title : '中队签名',width : 200,hidden:util.getArrayIndex(option.hidden,'zdqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdqm==null?"":row.zdqm)+'>'+(row.zdqm==null?"":row.zdqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdqmsj')>-1){
	            clumns.push({field : 'zdqmsj',title : '中队签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'zdqmsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdqmsj==null?"":row.zdqmsj)+'>'+(row.zdqmsj==null?"":row.zdqmsj)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'zdqmsjString')>-1){
			    clumns.push({field : 'zdqmsjString',title : '中队签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'zdqmsjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdqmsjString==null?"":row.zdqmsjString)+'>'+(row.zdqmsjString==null?"":row.zdqmsjString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'zxqk')>-1){
	            clumns.push({field : 'zxqk',title : '执行情况',width : 200,hidden:util.getArrayIndex(option.hidden,'zxqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zxqk==null?"":row.zxqk)+'>'+(row.zxqk==null?"":row.zxqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zxr')>-1){
	            clumns.push({field : 'zxr',title : '执行人',width : 200,hidden:util.getArrayIndex(option.hidden,'zxr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zxr==null?"":row.zxr)+'>'+(row.zxr==null?"":row.zxr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zxsj')>-1){
	            clumns.push({field : 'zxsj',title : '执行时间',width : 200,hidden:util.getArrayIndex(option.hidden,'zxsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zxsj==null?"":row.zxsj)+'>'+(row.zxsj==null?"":row.zxsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'taskid')>-1){
	            clumns.push({field : 'taskid',title : '业务进程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'taskid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.taskid==null?"":row.taskid)+'>'+(row.taskid==null?"":row.taskid)+'</span>'}});
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