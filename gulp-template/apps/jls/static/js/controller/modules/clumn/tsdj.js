/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Tsdj 数据列表
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
	            clumns.push({field : 'jsbh',title : '拘室编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jbxx_xm')>-1){
	        	clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_bm')>-1){
	        	clumns.push({field : 'jbxx_bm',title : '别名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bm==null?"":row.jbxx_bm)+'>'+(row.jbxx_bm==null?"":row.jbxx_bm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xbString')>-1){
	        	clumns.push({field : 'xbString',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xbString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xbString==null?"":row.xbString)+'>'+(row.xbString==null?"":row.xbString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'jsh')>-1){
	        	clumns.push({field : 'jsh',title : '拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'bllx')>-1){
	            clumns.push({field : 'bllx',title : '办理类型',width : 200,hidden:util.getArrayIndex(option.hidden,'bllx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bllx==null?"":row.bllx)+'>'+(row.bllx==null?"":row.bllx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dwString')>-1){
	            clumns.push({field : 'dwString',title : '提审单位',width : 200,hidden:util.getArrayIndex(option.hidden,'dwString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dwString==null?"":row.dwString)+'>'+(row.dwString==null?"":row.dwString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjlx')>-1){
	            clumns.push({field : 'zjlx',title : '证件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'zjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjlx==null?"":row.zjlx)+'>'+(row.zjlx==null?"":row.zjlx)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'zjlxString')>-1){
	            clumns.push({field : 'zjlxString',title : '证件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'zjlxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjlxString==null?"":row.zjlxString)+'>'+(row.zjlxString==null?"":row.zjlxString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'kssjString')>-1){
	            clumns.push({field : 'kssjString',title : '开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'kssjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kssjString==null?"":row.kssjString)+'>'+(row.kssjString==null?"":row.kssjString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'jssjString')>-1){
	            clumns.push({field : 'jssjString',title : '结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jssjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jssjString==null?"":row.jssjString)+'>'+(row.jssjString==null?"":row.jssjString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tszbr')>-1){
	            clumns.push({field : 'tszbr',title : '提审值班人',width : 200,hidden:util.getArrayIndex(option.hidden,'tszbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tszbr==null?"":row.tszbr)+'>'+(row.tszbr==null?"":row.tszbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsr')>-1){
	            clumns.push({field : 'jsr',title : '收监民警',width : 200,hidden:util.getArrayIndex(option.hidden,'jsr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsr==null?"":row.jsr)+'>'+(row.jsr==null?"":row.jsr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dcmj')>-1){
	            clumns.push({field : 'dcmj',title : '带出民警',width : 200,hidden:util.getArrayIndex(option.hidden,'dcmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dcmj==null?"":row.dcmj)+'>'+(row.dcmj==null?"":row.dcmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tss')>-1){
	            clumns.push({field : 'tss',title : '提讯室',width : 200,hidden:util.getArrayIndex(option.hidden,'tss')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tss==null?"":row.tss)+'>'+(row.tss==null?"":row.tss)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bajglxfs')>-1){
	            clumns.push({field : 'bajglxfs',title : '办案机关联系方式',width : 200,hidden:util.getArrayIndex(option.hidden,'bajglxfs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bajglxfs==null?"":row.bajglxfs)+'>'+(row.bajglxfs==null?"":row.bajglxfs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bajg')>-1){
	            clumns.push({field : 'bajg',title : '办案机关',width : 200,hidden:util.getArrayIndex(option.hidden,'bajg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bajg==null?"":row.bajg)+'>'+(row.bajg==null?"":row.bajg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'barxm1')>-1){
	            clumns.push({field : 'barxm1',title : '办案人姓名1',width : 200,hidden:util.getArrayIndex(option.hidden,'barxm1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.barxm1==null?"":row.barxm1)+'>'+(row.barxm1==null?"":row.barxm1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gzzjhm1')>-1){
	            clumns.push({field : 'gzzjhm1',title : '工作证件号码1',width : 200,hidden:util.getArrayIndex(option.hidden,'gzzjhm1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gzzjhm1==null?"":row.gzzjhm1)+'>'+(row.gzzjhm1==null?"":row.gzzjhm1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxfs1')>-1){
	            clumns.push({field : 'lxfs1',title : '联系方式1',width : 200,hidden:util.getArrayIndex(option.hidden,'lxfs1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxfs1==null?"":row.lxfs1)+'>'+(row.lxfs1==null?"":row.lxfs1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'barxm2')>-1){
	            clumns.push({field : 'barxm2',title : '办案人姓名2',width : 200,hidden:util.getArrayIndex(option.hidden,'barxm2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.barxm2==null?"":row.barxm2)+'>'+(row.barxm2==null?"":row.barxm2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gzzjhm2')>-1){
	            clumns.push({field : 'gzzjhm2',title : '工作证件号码2',width : 200,hidden:util.getArrayIndex(option.hidden,'gzzjhm2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gzzjhm2==null?"":row.gzzjhm2)+'>'+(row.gzzjhm2==null?"":row.gzzjhm2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxfs2')>-1){
	            clumns.push({field : 'lxfs2',title : '联系方式2',width : 200,hidden:util.getArrayIndex(option.hidden,'lxfs2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxfs2==null?"":row.lxfs2)+'>'+(row.lxfs2==null?"":row.lxfs2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xway')>-1){
	            clumns.push({field : 'xway',title : '讯问案由',width : 200,hidden:util.getArrayIndex(option.hidden,'xway')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xway==null?"":row.xway)+'>'+(row.xway==null?"":row.xway)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'xwayString')>-1){
	            clumns.push({field : 'xwayString',title : '讯问案由',width : 200,hidden:util.getArrayIndex(option.hidden,'xwayString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xwayString==null?"":row.xwayString)+'>'+(row.xwayString==null?"":row.xwayString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsxbh')>-1){
	            clumns.push({field : 'jsxbh',title : '介绍信编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsxbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsxbh==null?"":row.jsxbh)+'>'+(row.jsxbh==null?"":row.jsxbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djr')>-1){
	            clumns.push({field : 'djr',title : '登记人',width : 200,hidden:util.getArrayIndex(option.hidden,'djr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djr==null?"":row.djr)+'>'+(row.djr==null?"":row.djr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djsjString')>-1){
	            clumns.push({field : 'djsjString',title : '登记时间',width : 200,hidden:util.getArrayIndex(option.hidden,'djsjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djsjString==null?"":row.djsjString)+'>'+(row.djsjString==null?"":row.djsjString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldpsbz')>-1){
	            clumns.push({field : 'ldpsbz',title : '领导批示标志',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsbz==null?"":row.ldpsbz)+'>'+(row.ldpsbz==null?"":row.ldpsbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyj')>-1){
	            clumns.push({field : 'ldyj',title : '领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyj==null?"":row.ldyj)+'>'+(row.ldyj==null?"":row.ldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldxm')>-1){
	            clumns.push({field : 'ldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldxm==null?"":row.ldxm)+'>'+(row.ldxm==null?"":row.ldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldpssj')>-1){
	            clumns.push({field : 'ldpssj',title : '领导批示时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpssj==null?"":row.ldpssj)+'>'+(row.ldpssj==null?"":row.ldpssj)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'sjzljsbz')>-1){
	            clumns.push({field : 'sjzljsbz',title : '及时标志',width : 200,hidden:util.getArrayIndex(option.hidden,'sjzljsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjzljsbz==null?"":row.sjzljsbz)+'>'+(row.sjzljsbz==null?"":row.sjzljsbz)+'</span>'}});
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