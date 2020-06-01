/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Fxpg 数据列表
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
	        if(util.getArrayIndex(option.clumns,'yfxdj')>-1){
	            clumns.push({field : 'yfxdj',title : '原风险等级',width : 200,hidden:util.getArrayIndex(option.hidden,'yfxdj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yfxdj==null?"":row.yfxdj)+'>'+(row.yfxdj==null?"":row.yfxdj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xfxdj')>-1){
	            clumns.push({field : 'xfxdj',title : '现风险等级',width : 200,hidden:util.getArrayIndex(option.hidden,'xfxdj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xfxdj==null?"":row.xfxdj)+'>'+(row.xfxdj==null?"":row.xfxdj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pglx')>-1){
	            clumns.push({field : 'pglx',title : '评估类型',width : 200,hidden:util.getArrayIndex(option.hidden,'pglx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pglx==null?"":row.pglx)+'>'+(row.pglx==null?"":row.pglx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fxqk')>-1){
	            clumns.push({field : 'fxqk',title : '风险指标',width : 200,hidden:util.getArrayIndex(option.hidden,'fxqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fxqk==null?"":row.fxqk)+'>'+(row.fxqk==null?"":row.fxqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pgr')>-1){
	            clumns.push({field : 'pgr',title : '评估人',width : 200,hidden:util.getArrayIndex(option.hidden,'pgr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pgr==null?"":row.pgr)+'>'+(row.pgr==null?"":row.pgr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pgrq')>-1){
	            clumns.push({field : 'pgrq',title : '评估日期',width : 200,hidden:util.getArrayIndex(option.hidden,'pgrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pgrq==null?"":row.pgrq)+'>'+(row.pgrq==null?"":row.pgrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tzly')>-1){
	            clumns.push({field : 'tzly',title : '调整理由',width : 200,hidden:util.getArrayIndex(option.hidden,'tzly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tzly==null?"":row.tzly)+'>'+(row.tzly==null?"":row.tzly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lkcs')>-1){
	            clumns.push({field : 'lkcs',title : '列控措施',width : 200,hidden:util.getArrayIndex(option.hidden,'lkcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lkcs==null?"":row.lkcs)+'>'+(row.lkcs==null?"":row.lkcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'szyj')>-1){
	            clumns.push({field : 'szyj',title : '领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'szyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.szyj==null?"":row.szyj)+'>'+(row.szyj==null?"":row.szyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'szyjnr')>-1){
	            clumns.push({field : 'szyjnr',title : '领导意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'szyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.szyjnr==null?"":row.szyjnr)+'>'+(row.szyjnr==null?"":row.szyjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'szqm')>-1){
	            clumns.push({field : 'szqm',title : '领导签名',width : 200,hidden:util.getArrayIndex(option.hidden,'szqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.szqm==null?"":row.szqm)+'>'+(row.szqm==null?"":row.szqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'szpssj')>-1){
	            clumns.push({field : 'szpssj',title : '领导批示时间',width : 200,hidden:util.getArrayIndex(option.hidden,'szpssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.szpssj==null?"":row.szpssj)+'>'+(row.szpssj==null?"":row.szpssj)+'</span>'}});
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