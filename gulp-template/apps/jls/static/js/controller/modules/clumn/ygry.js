/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Ygry 数据列表
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
			
			if(util.getArrayIndex(option.clumns,'xm')>-1){
	        	clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_bm')>-1){
	        	clumns.push({field : 'jbxx_bm',title : '别名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bm==null?"":row.jbxx_bm)+'>'+(row.jbxx_bm==null?"":row.jbxx_bm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xb')>-1){
	        	clumns.push({field : 'xb',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xb==null?"":row.xb)+'>'+(row.xb==null?"":row.xb)+'</span>'}});
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
			if(util.getArrayIndex(option.clumns,'jbxx_gyts')>-1){
	        	clumns.push({field : 'jbxx_gyts',title : '关押天数',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_gyts')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_gyts==null?"":row.jbxx_gyts)+'>'+(row.jbxx_gyts==null?"":row.jbxx_gyts)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_bahj')>-1){
	        	clumns.push({field : 'jbxx_bahj',title : '办案环节',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bahj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bahj==null?"":row.jbxx_bahj)+'>'+(row.jbxx_bahj==null?"":row.jbxx_bahj)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jbxx_badw')>-1){
	        	clumns.push({field : 'jbxx_badw',title : '办案单位',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_gyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_badw==null?"":row.jbxx_badw)+'>'+(row.jbxx_badw==null?"":row.jbxx_badw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csrq')>-1){
	        	clumns.push({field : 'csrq',title : '出生日期',width : 200,hidden:util.getArrayIndex(option.hidden,'csrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csrq==null?"":row.csrq)+'>'+(row.csrq==null?"":row.csrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bllx')>-1){
	            clumns.push({field : 'bllx',title : '办理类型',width : 200,hidden:util.getArrayIndex(option.hidden,'bllx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bllx==null?"":row.bllx)+'>'+(row.bllx==null?"":row.bllx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ygly')>-1){
	            clumns.push({field : 'ygly',title : '严管理由',width : 200,hidden:util.getArrayIndex(option.hidden,'ygly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ygly==null?"":row.ygly)+'>'+(row.ygly==null?"":row.ygly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ygjxly')>-1){
	            clumns.push({field : 'ygjxly',title : '严管继续理由',width : 200,hidden:util.getArrayIndex(option.hidden,'ygjxly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ygjxly==null?"":row.ygjxly)+'>'+(row.ygjxly==null?"":row.ygjxly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcly')>-1){
	            clumns.push({field : 'jcly',title : '解除理由',width : 200,hidden:util.getArrayIndex(option.hidden,'jcly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcly==null?"":row.jcly)+'>'+(row.jcly==null?"":row.jcly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'kzcs')>-1){
	            clumns.push({field : 'kzcs',title : '控制措施',width : 200,hidden:util.getArrayIndex(option.hidden,'kzcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kzcs==null?"":row.kzcs)+'>'+(row.kzcs==null?"":row.kzcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qzcs')>-1){
	            clumns.push({field : 'qzcs',title : '强制措施',width : 200,hidden:util.getArrayIndex(option.hidden,'qzcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qzcs==null?"":row.qzcs)+'>'+(row.qzcs==null?"":row.qzcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'kgcs')>-1){
	            clumns.push({field : 'kgcs',title : '看管措施',width : 200,hidden:util.getArrayIndex(option.hidden,'kgcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kgcs==null?"":row.kgcs)+'>'+(row.kgcs==null?"":row.kgcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'kssj')>-1){
	            clumns.push({field : 'kssj',title : '严管开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'kssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kssj==null?"":row.kssj)+'>'+(row.kssj==null?"":row.kssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jssj')>-1){
	            clumns.push({field : 'jssj',title : '严管结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jssj==null?"":row.jssj)+'>'+(row.jssj==null?"":row.jssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cpr')>-1){
	            clumns.push({field : 'cpr',title : '呈批人',width : 200,hidden:util.getArrayIndex(option.hidden,'cpr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cpr==null?"":row.cpr)+'>'+(row.cpr==null?"":row.cpr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cpsj')>-1){
	            clumns.push({field : 'cpsj',title : '呈批时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cpsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cpsj==null?"":row.cpsj)+'>'+(row.cpsj==null?"":row.cpsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyj')>-1){
	            clumns.push({field : 'ldyj',title : '领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyj==null?"":row.ldyj)+'>'+(row.ldyj==null?"":row.ldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyjnr')>-1){
	            clumns.push({field : 'ldyjnr',title : '领导意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyjnr==null?"":row.ldyjnr)+'>'+(row.ldyjnr==null?"":row.ldyjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldqm')>-1){
	            clumns.push({field : 'ldqm',title : '领导签名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldqm==null?"":row.ldqm)+'>'+(row.ldqm==null?"":row.ldqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldqmsj')>-1){
	            clumns.push({field : 'ldqmsj',title : '领导签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ldqmsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldqmsj==null?"":row.ldqmsj)+'>'+(row.ldqmsj==null?"":row.ldqmsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'taskid')>-1){
	            clumns.push({field : 'taskid',title : '业务进程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'taskid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.taskid==null?"":row.taskid)+'>'+(row.taskid==null?"":row.taskid)+'</span>'}});
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
