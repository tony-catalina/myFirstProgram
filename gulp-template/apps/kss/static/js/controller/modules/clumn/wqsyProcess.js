/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Wqsy 数据列表
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
	            clumns.push({field : 'id',title : 'id',width : 200,hidden:util.getArrayIndex(option.hidden,'id')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.id==null?"":row.ywlcxx.id)+'>'+(row.ywlcxx.id==null?"":row.ywlcxx.id)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'xm')>-1){
				clumns.push({field : 'xm',title : '使用人',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.sfgh==null?"":row.ywlcxx.xm)+'>'+(row.ywlcxx.xm==null?"":row.ywlcxx.xm)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'jh')>-1){
	            clumns.push({field : 'jh',title : '使用人警号',width : 200,hidden:util.getArrayIndex(option.hidden,'jh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.jh==null?"":row.ywlcxx.jh)+'>'+(row.ywlcxx.jh==null?"":row.ywlcxx.jh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.jsbh==null?"":row.ywlcxx.jsbh)+'>'+(row.ywlcxx.jsbh==null?"":row.ywlcxx.jsbh)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'wqzl')>-1){
				clumns.push({field : 'wqzl',title : '武器种类',width : 200,hidden:util.getArrayIndex(option.hidden,'wqzl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.wqzl==null?"":row.ywlcxx.wqzl)+'>'+(row.ywlcxx.wqzl==null?"":row.ywlcxx.wqzl)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'syly')>-1){
	            clumns.push({field : 'syly',title : '使用理由',width : 200,hidden:util.getArrayIndex(option.hidden,'syly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.syly==null?"":row.ywlcxx.syly)+'>'+(row.ywlcxx.syly==null?"":row.ywlcxx.syly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'syts')>-1){
	            clumns.push({field : 'syts',title : '使用天数',width : 200,hidden:util.getArrayIndex(option.hidden,'syts')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.syts==null?"":row.ywlcxx.syts)+'>'+(row.ywlcxx.syts==null?"":row.ywlcxx.syts)+'</span>'}});
	        }

	        if(util.getArrayIndex(option.clumns,'cpsj')>-1){
	            clumns.push({field : 'cpsj',title : '呈批时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cpsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.cpsj==null?"":row.ywlcxx.cpsj)+'>'+(row.ywlcxx.cpsj==null?"":row.ywlcxx.cpsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sykssj')>-1){
	            clumns.push({field : 'sykssj',title : '使用开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sykssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.sykssj==null?"":row.ywlcxx.sykssj)+'>'+(row.ywlcxx.sykssj==null?"":row.ywlcxx.sykssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'syjssj')>-1){
	            clumns.push({field : 'syjssj',title : '使用结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'syjssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.syjssj==null?"":row.ywlcxx.syjssj)+'>'+(row.ywlcxx.syjssj==null?"":row.ywlcxx.syjssj)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'cpr')>-1){
				clumns.push({field : 'cpr',title : '呈批人',width : 200,hidden:util.getArrayIndex(option.hidden,'cpr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cpr==null?"":row.ywlcxx.cpr)+'>'+(row.ywlcxx.cpr==null?"":row.ywlcxx.cpr)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'ghsj')>-1){
	            clumns.push({field : 'ghsj',title : '归还时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ghsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.ghsj==null?"":row.ywlcxx.ghsj)+'>'+(row.ywlcxx.ghsj==null?"":row.ywlcxx.ghsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldxm')>-1){
	            clumns.push({field : 'ldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.ldxm==null?"":row.ywlcxx.ldxm)+'>'+(row.ywlcxx.ldxm==null?"":row.ywlcxx.ldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyj')>-1){
	            clumns.push({field : 'ldyj',title : '领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.ldyj==null?"":row.ywlcxx.ldyj)+'>'+(row.ywlcxx.ldyj==null?"":row.ywlcxx.ldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldpssj')>-1){
	            clumns.push({field : 'ldpssj',title : '领导批示时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.ldpssj==null?"":row.ywlcxx.ldpssj)+'>'+(row.ywlcxx.ldpssj==null?"":row.ywlcxx.ldpssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.bz==null?"":row.ywlcxx.bz)+'>'+(row.ywlcxx.bz==null?"":row.ywlcxx.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'psbz')>-1){
	            clumns.push({field : 'psbz',title : '批示标识',width : 200,hidden:util.getArrayIndex(option.hidden,'psbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.psbz==null?"":row.ywlcxx.psbz)+'>'+(row.ywlcxx.psbz==null?"":row.ywlcxx.psbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.ywlcid==null?"":row.ywlcxx.ywlcid)+'>'+(row.ywlcxx.ywlcid==null?"":row.ywlcxx.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.state==null?"":row.ywlcxx.state)+'>'+(row.ywlcxx.state==null?"":row.ywlcxx.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'creator')>-1){
	            clumns.push({field : 'creator',title : '创建人',width : 200,hidden:util.getArrayIndex(option.hidden,'creator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.creator==null?"":row.ywlcxx.creator)+'>'+(row.ywlcxx.creator==null?"":row.ywlcxx.creator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'createtime')>-1){
	            clumns.push({field : 'createtime',title : '创建时间',width : 200,hidden:util.getArrayIndex(option.hidden,'createtime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.createtime==null?"":row.ywlcxx.createtime)+'>'+(row.ywlcxx.createtime==null?"":row.ywlcxx.createtime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'updator')>-1){
	            clumns.push({field : 'updator',title : '更新人',width : 200,hidden:util.getArrayIndex(option.hidden,'updator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.updator==null?"":row.ywlcxx.updator)+'>'+(row.ywlcxx.updator==null?"":row.ywlcxx.updator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'updatetime')>-1){
	            clumns.push({field : 'updatetime',title : '更新时间',width : 200,hidden:util.getArrayIndex(option.hidden,'updatetime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.updatetime==null?"":row.ywlcxx.updatetime)+'>'+(row.ywlcxx.updatetime==null?"":row.ywlcxx.updatetime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pastable')>-1){
	            clumns.push({field : 'pastable',title : '是否有效',width : 200,hidden:util.getArrayIndex(option.hidden,'pastable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.pastable==null?"":row.ywlcxx.pastable)+'>'+(row.ywlcxx.pastable==null?"":row.ywlcxx.pastable)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfgh')>-1){
	            clumns.push({field : 'sfgh',title : '是否归还',width : 200,hidden:util.getArrayIndex(option.hidden,'sfgh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcxx.sfgh==null?"":row.ywlcxx.sfgh)+'>'+(row.ywlcxx.sfgh==null?"":row.ywlcxx.sfgh)+'</span>'}});
	        }

	        
	        return clumns;
	    };
	    return main;
	});