/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Scqk 数据列表
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
			if(util.getArrayIndex(option.clumns,'jbxxSnbh')>-1){
	            clumns.push({field : 'jbxxSnbh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxxSnbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxxSnbh==null?"":row.jbxxSnbh)+'>'+(row.jbxxSnbh==null?"":row.jbxxSnbh)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'lyString')>-1){
	            clumns.push({field : 'lyString',title : '理由',width : 200,hidden:util.getArrayIndex(option.hidden,'lyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lyString==null?"":row.lyString)+'>'+(row.lyString==null?"":row.lyString)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'ysyj')>-1){
	            clumns.push({field : 'ysyj',title : '医生意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ysyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysyj==null?"":row.ysyj)+'>'+(row.ysyj==null?"":row.ysyj)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'xm')>-1){
	            clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'jsh')>-1){
	            clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'fssj')>-1){
	            clumns.push({field : 'fssj',title : '发送时间',width : 200,hidden:util.getArrayIndex(option.hidden,'fssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fssj==null?"":row.fssj)+'>'+(row.fssj==null?"":row.fssj)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'fsrxm')>-1){
	            clumns.push({field : 'fsrxm',title : '发送人姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'fsrxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fsrxm==null?"":row.fsrxm)+'>'+(row.fsrxm==null?"":row.fsrxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rq')>-1){
	            clumns.push({field : 'rq',title : '视察日期',width : 200,hidden:util.getArrayIndex(option.hidden,'rq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rq==null?"":row.rq)+'>'+(row.rq==null?"":row.rq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tt')>-1){
	            clumns.push({field : 'tt',title : '视察团体',width : 200,hidden:util.getArrayIndex(option.hidden,'tt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tt==null?"":row.tt)+'>'+(row.tt==null?"":row.tt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldxm')>-1){
	            clumns.push({field : 'ldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldxm==null?"":row.ldxm)+'>'+(row.ldxm==null?"":row.ldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldzw')>-1){
	            clumns.push({field : 'ldzw',title : '领导职位',width : 200,hidden:util.getArrayIndex(option.hidden,'ldzw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldzw==null?"":row.ldzw)+'>'+(row.ldzw==null?"":row.ldzw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cy')>-1){
	            clumns.push({field : 'cy',title : '主要成员',width : 200,hidden:util.getArrayIndex(option.hidden,'cy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cy==null?"":row.cy)+'>'+(row.cy==null?"":row.cy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jdr')>-1){
	            clumns.push({field : 'jdr',title : '接待人',width : 200,hidden:util.getArrayIndex(option.hidden,'jdr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jdr==null?"":row.jdr)+'>'+(row.jdr==null?"":row.jdr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scnr')>-1){
	            clumns.push({field : 'scnr',title : '视察内容',width : 200,hidden:util.getArrayIndex(option.hidden,'scnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scnr==null?"":row.scnr)+'>'+(row.scnr==null?"":row.scnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yjjy')>-1){
	            clumns.push({field : 'yjjy',title : '意见建议',width : 200,hidden:util.getArrayIndex(option.hidden,'yjjy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yjjy==null?"":row.yjjy)+'>'+(row.yjjy==null?"":row.yjjy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zgqk')>-1){
	            clumns.push({field : 'zgqk',title : '整改情况',width : 200,hidden:util.getArrayIndex(option.hidden,'zgqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zgqk==null?"":row.zgqk)+'>'+(row.zgqk==null?"":row.zgqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlr')>-1){
	            clumns.push({field : 'jlr',title : '记录人',width : 200,hidden:util.getArrayIndex(option.hidden,'jlr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlr==null?"":row.jlr)+'>'+(row.jlr==null?"":row.jlr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlrq')>-1){
	            clumns.push({field : 'jlrq',title : '记录日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jlrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlrq==null?"":row.jlrq)+'>'+(row.jlrq==null?"":row.jlrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'creator')>-1){
	            clumns.push({field : 'creator',title : '创建人',width : 200,hidden:util.getArrayIndex(option.hidden,'creator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.creator==null?"":row.creator)+'>'+(row.creator==null?"":row.creator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'createtime')>-1){
	            clumns.push({field : 'createtime',title : '创建日期',width : 200,hidden:util.getArrayIndex(option.hidden,'createtime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.createtime==null?"":row.createtime)+'>'+(row.createtime==null?"":row.createtime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'updator')>-1){
	            clumns.push({field : 'updator',title : '更新人',width : 200,hidden:util.getArrayIndex(option.hidden,'updator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.updator==null?"":row.updator)+'>'+(row.updator==null?"":row.updator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'updatetime')>-1){
	            clumns.push({field : 'updatetime',title : '更新日期',width : 200,hidden:util.getArrayIndex(option.hidden,'updatetime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.updatetime==null?"":row.updatetime)+'>'+(row.updatetime==null?"":row.updatetime)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});