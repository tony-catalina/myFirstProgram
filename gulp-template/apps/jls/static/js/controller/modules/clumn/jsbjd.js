/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jsbjd 数据列表
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
	        if(util.getArrayIndex(option.clumns,'sfsjsb')>-1){
	            clumns.push({field : 'sfsjsb',title : '是否是精神病',width : 200,hidden:util.getArrayIndex(option.hidden,'sfsjsb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfsjsb==null?"":row.sfsjsb)+'>'+(row.sfsjsb==null?"":row.sfsjsb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ygyqx')>-1){
	            clumns.push({field : 'ygyqx',title : '原关押期限',width : 200,hidden:util.getArrayIndex(option.hidden,'ygyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ygyqx==null?"":row.ygyqx)+'>'+(row.ygyqx==null?"":row.ygyqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xgyqx')>-1){
	            clumns.push({field : 'xgyqx',title : '现关押期限',width : 200,hidden:util.getArrayIndex(option.hidden,'xgyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xgyqx==null?"":row.xgyqx)+'>'+(row.xgyqx==null?"":row.xgyqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ksrq')>-1){
	            clumns.push({field : 'ksrq',title : '开始日期',width : 200,hidden:util.getArrayIndex(option.hidden,'ksrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ksrq==null?"":row.ksrq)+'>'+(row.ksrq==null?"":row.ksrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsrq')>-1){
	            clumns.push({field : 'jsrq',title : '结束日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsrq==null?"":row.jsrq)+'>'+(row.jsrq==null?"":row.jsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jdjg')>-1){
	            clumns.push({field : 'jdjg',title : '鉴定结果',width : 200,hidden:util.getArrayIndex(option.hidden,'jdjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jdjg==null?"":row.jdjg)+'>'+(row.jdjg==null?"":row.jdjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blr')>-1){
	            clumns.push({field : 'blr',title : '办理人',width : 200,hidden:util.getArrayIndex(option.hidden,'blr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blr==null?"":row.blr)+'>'+(row.blr==null?"":row.blr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blsj')>-1){
	            clumns.push({field : 'blsj',title : '办理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'blsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blsj==null?"":row.blsj)+'>'+(row.blsj==null?"":row.blsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pastable')>-1){
	            clumns.push({field : 'pastable',title : '失效标志',width : 200,hidden:util.getArrayIndex(option.hidden,'pastable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pastable==null?"":row.pastable)+'>'+(row.pastable==null?"":row.pastable)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scbz')>-1){
	            clumns.push({field : 'scbz',title : '上传标志',width : 200,hidden:util.getArrayIndex(option.hidden,'scbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scbz==null?"":row.scbz)+'>'+(row.scbz==null?"":row.scbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'operator')>-1){
	            clumns.push({field : 'operator',title : '操作人',width : 200,hidden:util.getArrayIndex(option.hidden,'operator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.operator==null?"":row.operator)+'>'+(row.operator==null?"":row.operator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'savetime')>-1){
	            clumns.push({field : 'savetime',title : '保存时间',width : 200,hidden:util.getArrayIndex(option.hidden,'savetime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.savetime==null?"":row.savetime)+'>'+(row.savetime==null?"":row.savetime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程使用id',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
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
	            clumns.push({field : 'updatetime',title : '更新时间 ',width : 200,hidden:util.getArrayIndex(option.hidden,'updatetime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.updatetime==null?"":row.updatetime)+'>'+(row.updatetime==null?"":row.updatetime)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});