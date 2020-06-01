/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Aqjc 数据列表
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
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlr')>-1){
	            clumns.push({field : 'jlr',title : '记录人',width : 200,hidden:util.getArrayIndex(option.hidden,'jlr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlr==null?"":row.jlr)+'>'+(row.jlr==null?"":row.jlr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cjrs')>-1){
	            clumns.push({field : 'cjrs',title : '参加人数',width : 200,hidden:util.getArrayIndex(option.hidden,'cjrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cjrs==null?"":row.cjrs)+'>'+(row.cjrs==null?"":row.cjrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jckssj')>-1){
	            clumns.push({field : 'jckssj',title : '检查开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jckssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jckssj==null?"":row.jckssj)+'>'+(row.jckssj==null?"":row.jckssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcjssj')>-1){
	            clumns.push({field : 'jcjssj',title : '检查结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jcjssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcjssj==null?"":row.jcjssj)+'>'+(row.jcjssj==null?"":row.jcjssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fw')>-1){
	            clumns.push({field : 'fw',title : '检查范围',width : 200,hidden:util.getArrayIndex(option.hidden,'fw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fw==null?"":row.fw)+'>'+(row.fw==null?"":row.fw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fzr')>-1){
	            clumns.push({field : 'fzr',title : '负责人',width : 200,hidden:util.getArrayIndex(option.hidden,'fzr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fzr==null?"":row.fzr)+'>'+(row.fzr==null?"":row.fzr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nr')>-1){
	            clumns.push({field : 'nr',title : '检查内容',width : 200,hidden:util.getArrayIndex(option.hidden,'nr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nr==null?"":row.nr)+'>'+(row.nr==null?"":row.nr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rs')>-1){
	            clumns.push({field : 'rs',title : '检查人数',width : 200,hidden:util.getArrayIndex(option.hidden,'rs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rs==null?"":row.rs)+'>'+(row.rs==null?"":row.rs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cjry')>-1){
	            clumns.push({field : 'cjry',title : '参加人员',width : 200,hidden:util.getArrayIndex(option.hidden,'cjry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cjry==null?"":row.cjry)+'>'+(row.cjry==null?"":row.cjry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wjp')>-1){
	            clumns.push({field : 'wjp',title : '违禁品',width : 200,hidden:util.getArrayIndex(option.hidden,'wjp')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wjp==null?"":row.wjp)+'>'+(row.wjp==null?"":row.wjp)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wjpurl')>-1){
	            clumns.push({field : 'wjpurl',title : '违禁品图片URL',width : 200,hidden:util.getArrayIndex(option.hidden,'wjpurl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wjpurl==null?"":row.wjpurl)+'>'+(row.wjpurl==null?"":row.wjpurl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'aqyh')>-1){
	            clumns.push({field : 'aqyh',title : '安全隐患与漏洞',width : 200,hidden:util.getArrayIndex(option.hidden,'aqyh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.aqyh==null?"":row.aqyh)+'>'+(row.aqyh==null?"":row.aqyh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'aqyhurl')>-1){
	            clumns.push({field : 'aqyhurl',title : '安全隐患URL',width : 200,hidden:util.getArrayIndex(option.hidden,'aqyhurl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.aqyhurl==null?"":row.aqyhurl)+'>'+(row.aqyhurl==null?"":row.aqyhurl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cljg')>-1){
	            clumns.push({field : 'cljg',title : '处理结果',width : 200,hidden:util.getArrayIndex(option.hidden,'cljg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cljg==null?"":row.cljg)+'>'+(row.cljg==null?"":row.cljg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldjpnr')>-1){
	            clumns.push({field : 'ldjpnr',title : '领导讲评内容',width : 200,hidden:util.getArrayIndex(option.hidden,'ldjpnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldjpnr==null?"":row.ldjpnr)+'>'+(row.ldjpnr==null?"":row.ldjpnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jpld')>-1){
	            clumns.push({field : 'jpld',title : '讲评领导',width : 200,hidden:util.getArrayIndex(option.hidden,'jpld')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jpld==null?"":row.jpld)+'>'+(row.jpld==null?"":row.jpld)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jpsj')>-1){
	            clumns.push({field : 'jpsj',title : '讲评时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jpsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jpsj==null?"":row.jpsj)+'>'+(row.jpsj==null?"":row.jpsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldqrnr')>-1){
	            clumns.push({field : 'ldqrnr',title : '领导确认',width : 200,hidden:util.getArrayIndex(option.hidden,'ldqrnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldqrnr==null?"":row.ldqrnr)+'>'+(row.ldqrnr==null?"":row.ldqrnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qrld')>-1){
	            clumns.push({field : 'qrld',title : '确认领导',width : 200,hidden:util.getArrayIndex(option.hidden,'qrld')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qrld==null?"":row.qrld)+'>'+(row.qrld==null?"":row.qrld)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qrsj')>-1){
	            clumns.push({field : 'qrsj',title : '确认时间',width : 200,hidden:util.getArrayIndex(option.hidden,'qrsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qrsj==null?"":row.qrsj)+'>'+(row.qrsj==null?"":row.qrsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'cljd')>-1){
	            clumns.push({field : 'cljd',title : '处理阶段',width : 200,hidden:util.getArrayIndex(option.hidden,'cljd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cljd==null?"":row.cljd)+'>'+(row.cljd==null?"":row.cljd)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});