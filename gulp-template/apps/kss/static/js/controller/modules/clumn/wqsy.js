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
	            clumns.push({field : 'id',title : 'id',width : 200,hidden:util.getArrayIndex(option.hidden,'id')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.id==null?"":row.id)+'>'+(row.id==null?"":row.id)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'xm')>-1){
				clumns.push({field : 'xm',title : '使用人',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfgh==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'jh')>-1){
	            clumns.push({field : 'jh',title : '使用人警号',width : 200,hidden:util.getArrayIndex(option.hidden,'jh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jh==null?"":row.jh)+'>'+(row.jh==null?"":row.jh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'wqzl')>-1){
				clumns.push({field : 'wqzl',title : '武器种类',width : 200,hidden:util.getArrayIndex(option.hidden,'wqzl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wqzl==null?"":row.wqzl)+'>'+(row.wqzl==null?"":row.wqzl)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'syly')>-1){
	            clumns.push({field : 'syly',title : '使用理由',width : 200,hidden:util.getArrayIndex(option.hidden,'syly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.syly==null?"":row.syly)+'>'+(row.syly==null?"":row.syly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'syts')>-1){
	            clumns.push({field : 'syts',title : '使用天数',width : 200,hidden:util.getArrayIndex(option.hidden,'syts')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.syts==null?"":row.syts)+'>'+(row.syts==null?"":row.syts)+'</span>'}});
	        }

	        if(util.getArrayIndex(option.clumns,'cpsj')>-1){
	            clumns.push({field : 'cpsj',title : '呈批时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cpsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cpsj==null?"":row.cpsj)+'>'+(row.cpsj==null?"":row.cpsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sykssj')>-1){
	            clumns.push({field : 'sykssj',title : '使用开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sykssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sykssj==null?"":row.sykssj)+'>'+(row.sykssj==null?"":row.sykssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'syjssjString')>-1){
	            clumns.push({field : 'syjssjString',title : '使用结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'syjssjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.syjssjString==null?"":row.syjssjString)+'>'+(row.syjssjString==null?"":row.syjssjString)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'cpr')>-1){
				clumns.push({field : 'cpr',title : '呈批人',width : 200,hidden:util.getArrayIndex(option.hidden,'cpr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cpr==null?"":row.cpr)+'>'+(row.cpr==null?"":row.cpr)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'ghsj')>-1){
	            clumns.push({field : 'ghsj',title : '归还时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ghsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ghsj==null?"":row.ghsj)+'>'+(row.ghsj==null?"":row.ghsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldxm')>-1){
	            clumns.push({field : 'ldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldxm==null?"":row.ldxm)+'>'+(row.ldxm==null?"":row.ldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyj')>-1){
	            clumns.push({field : 'ldyj',title : '领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyj==null?"":row.ldyj)+'>'+(row.ldyj==null?"":row.ldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldpssj')>-1){
	            clumns.push({field : 'ldpssj',title : '领导批示时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpssj==null?"":row.ldpssj)+'>'+(row.ldpssj==null?"":row.ldpssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'psbz')>-1){
	            clumns.push({field : 'psbz',title : '批示标识',width : 200,hidden:util.getArrayIndex(option.hidden,'psbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.psbz==null?"":row.psbz)+'>'+(row.psbz==null?"":row.psbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'pastable')>-1){
	            clumns.push({field : 'pastable',title : '是否有效',width : 200,hidden:util.getArrayIndex(option.hidden,'pastable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pastable==null?"":row.pastable)+'>'+(row.pastable==null?"":row.pastable)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfgh')>-1){
	            clumns.push({field : 'sfgh',title : '是否归还',width : 200,hidden:util.getArrayIndex(option.hidden,'sfgh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfgh==null?"":row.sfgh)+'>'+(row.sfgh==null?"":row.sfgh)+'</span>'}});
	        }

	        
	        return clumns;
	    };
	    return main;
	});