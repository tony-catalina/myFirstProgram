/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Spdetailorder 数据列表
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
	        if(util.getArrayIndex(option.clumns,'ddbh')>-1){
	            clumns.push({field : 'ddbh',title : '订单编号',width : 200,hidden:util.getArrayIndex(option.hidden,'ddbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ddbh==null?"":row.ddbh)+'>'+(row.ddbh==null?"":row.ddbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sptm')>-1){
	            clumns.push({field : 'sptm',title : '商品条码',width : 200,hidden:util.getArrayIndex(option.hidden,'sptm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sptm==null?"":row.sptm)+'>'+(row.sptm==null?"":row.sptm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfqh')>-1){
	            clumns.push({field : 'sfqh',title : '是否缺货',width : 200,hidden:util.getArrayIndex(option.hidden,'sfqh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfqh==null?"":row.sfqh)+'>'+(row.sfqh==null?"":row.sfqh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfzjff')>-1){
	            clumns.push({field : 'sfzjff',title : '是否直接发放',width : 200,hidden:util.getArrayIndex(option.hidden,'sfzjff')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfzjff==null?"":row.sfzjff)+'>'+(row.sfzjff==null?"":row.sfzjff)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'spsl')>-1){
	            clumns.push({field : 'spsl',title : '商品数量',width : 200,hidden:util.getArrayIndex(option.hidden,'spsl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.spsl==null?"":row.spsl)+'>'+(row.spsl==null?"":row.spsl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'spmc')>-1){
	            clumns.push({field : 'spmc',title : '商品名称',width : 200,hidden:util.getArrayIndex(option.hidden,'spmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.spmc==null?"":row.spmc)+'>'+(row.spmc==null?"":row.spmc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xfje')>-1){
	            clumns.push({field : 'xfje',title : '应付金额',width : 200,hidden:util.getArrayIndex(option.hidden,'xfje')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xfje==null?"":row.xfje)+'>'+(row.xfje==null?"":row.xfje)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfje')>-1){
	            clumns.push({field : 'sfje',title : '实付金额',width : 200,hidden:util.getArrayIndex(option.hidden,'sfje')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfje==null?"":row.sfje)+'>'+(row.sfje==null?"":row.sfje)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ddcjsj')>-1){
	            clumns.push({field : 'ddcjsj',title : '订单创建时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ddcjsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ddcjsj==null?"":row.ddcjsj)+'>'+(row.ddcjsj==null?"":row.ddcjsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cgdbh')>-1){
	            clumns.push({field : 'cgdbh',title : '采购单号',width : 200,hidden:util.getArrayIndex(option.hidden,'cgdbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cgdbh==null?"":row.cgdbh)+'>'+(row.cgdbh==null?"":row.cgdbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'status')>-1){
	            clumns.push({field : 'status',title : '订单状态',width : 200,hidden:util.getArrayIndex(option.hidden,'status')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.status==null?"":row.status)+'>'+(row.status==null?"":row.status)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'shzt')>-1){
	            clumns.push({field : 'shzt',title : '审核状态',width : 200,hidden:util.getArrayIndex(option.hidden,'shzt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.shzt==null?"":row.shzt)+'>'+(row.shzt==null?"":row.shzt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'shyj')>-1){
	            clumns.push({field : 'shyj',title : '审核意见',width : 200,hidden:util.getArrayIndex(option.hidden,'shyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.shyj==null?"":row.shyj)+'>'+(row.shyj==null?"":row.shyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'shsj')>-1){
	            clumns.push({field : 'shsj',title : '审核时间',width : 200,hidden:util.getArrayIndex(option.hidden,'shsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.shsj==null?"":row.shsj)+'>'+(row.shsj==null?"":row.shsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'shr')>-1){
	            clumns.push({field : 'shr',title : '审核人',width : 200,hidden:util.getArrayIndex(option.hidden,'shr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.shr==null?"":row.shr)+'>'+(row.shr==null?"":row.shr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'gjqrr')>-1){
	            clumns.push({field : 'gjqrr',title : '管教确认人',width : 200,hidden:util.getArrayIndex(option.hidden,'gjqrr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjqrr==null?"":row.gjqrr)+'>'+(row.gjqrr==null?"":row.gjqrr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjqrsj')>-1){
	            clumns.push({field : 'gjqrsj',title : '管教确认时间',width : 200,hidden:util.getArrayIndex(option.hidden,'gjqrsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjqrsj==null?"":row.gjqrsj)+'>'+(row.gjqrsj==null?"":row.gjqrsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjzdblr')>-1){
	            clumns.push({field : 'gjzdblr',title : '管教中队办理人',width : 200,hidden:util.getArrayIndex(option.hidden,'gjzdblr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjzdblr==null?"":row.gjzdblr)+'>'+(row.gjzdblr==null?"":row.gjzdblr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjzdshyj')>-1){
	            clumns.push({field : 'gjzdshyj',title : '管教中队审核意见',width : 200,hidden:util.getArrayIndex(option.hidden,'gjzdshyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjzdshyj==null?"":row.gjzdshyj)+'>'+(row.gjzdshyj==null?"":row.gjzdshyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjzdpsbz')>-1){
	            clumns.push({field : 'gjzdpsbz',title : '管教中队审批状态',width : 200,hidden:util.getArrayIndex(option.hidden,'gjzdpsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjzdpsbz==null?"":row.gjzdpsbz)+'>'+(row.gjzdpsbz==null?"":row.gjzdpsbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjzdshsj')>-1){
	            clumns.push({field : 'gjzdshsj',title : '管教中队审批时间',width : 200,hidden:util.getArrayIndex(option.hidden,'gjzdshsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjzdshsj==null?"":row.gjzdshsj)+'>'+(row.gjzdshsj==null?"":row.gjzdshsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zhzdblr')>-1){
	            clumns.push({field : 'zhzdblr',title : '综合中队办理人',width : 200,hidden:util.getArrayIndex(option.hidden,'zhzdblr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zhzdblr==null?"":row.zhzdblr)+'>'+(row.zhzdblr==null?"":row.zhzdblr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zhzdshyj')>-1){
	            clumns.push({field : 'zhzdshyj',title : '综合中队审核意见',width : 200,hidden:util.getArrayIndex(option.hidden,'zhzdshyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zhzdshyj==null?"":row.zhzdshyj)+'>'+(row.zhzdshyj==null?"":row.zhzdshyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zhzdpsbz')>-1){
	            clumns.push({field : 'zhzdpsbz',title : '综合中队审批状态',width : 200,hidden:util.getArrayIndex(option.hidden,'zhzdpsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zhzdpsbz==null?"":row.zhzdpsbz)+'>'+(row.zhzdpsbz==null?"":row.zhzdpsbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zhzdshsj')>-1){
	            clumns.push({field : 'zhzdshsj',title : '综合中队审批时间',width : 200,hidden:util.getArrayIndex(option.hidden,'zhzdshsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zhzdshsj==null?"":row.zhzdshsj)+'>'+(row.zhzdshsj==null?"":row.zhzdshsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lqr')>-1){
	            clumns.push({field : 'lqr',title : '领取人',width : 200,hidden:util.getArrayIndex(option.hidden,'lqr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lqr==null?"":row.lqr)+'>'+(row.lqr==null?"":row.lqr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lqsj')>-1){
	            clumns.push({field : 'lqsj',title : '领取时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lqsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lqsj==null?"":row.lqsj)+'>'+(row.lqsj==null?"":row.lqsj)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});