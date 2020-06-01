/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Xjgl 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jbxx_jsh')>-1){
	        	clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_xm')>-1){
	        	clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsr')>-1){
	        	clumns.push({field : 'jsr',title : '通讯人',width : 200,hidden:util.getArrayIndex(option.hidden,'jsr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsr==null?"":row.jsr)+'>'+(row.jsr==null?"":row.jsr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xjrq')>-1){
	            clumns.push({field : 'xjrq',title : '来信寄信日期',width : 200,hidden:util.getArrayIndex(option.hidden,'xjrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xjrq==null?"":row.xjrq)+'>'+(row.xjrq==null?"":row.xjrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xjdz')>-1){
	        	clumns.push({field : 'xjdz',title : '收信寄信地址',width : 200,hidden:util.getArrayIndex(option.hidden,'xjdz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xjdz==null?"":row.xjdz)+'>'+(row.xjdz==null?"":row.xjdz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djr')>-1){
	            clumns.push({field : 'djr',title : '登记人',width : 200,hidden:util.getArrayIndex(option.hidden,'djr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djr==null?"":row.djr)+'>'+(row.djr==null?"":row.djr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djrq')>-1){
	            clumns.push({field : 'djrq',title : '登记日期',width : 200,hidden:util.getArrayIndex(option.hidden,'djrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djrq==null?"":row.djrq)+'>'+(row.djrq==null?"":row.djrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xjnr')>-1){
	            clumns.push({field : 'xjnr',title : '信件内容',width : 200,hidden:util.getArrayIndex(option.hidden,'xjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xjnr==null?"":row.xjnr)+'>'+(row.xjnr==null?"":row.xjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sldyj')>-1){
	            clumns.push({field : 'sldyj',title : '所领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'sldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldyj==null?"":row.sldyj)+'>'+(row.sldyj=="1"?"转交被监督人":"")+''+(row.sldyj=="2"?"信件存档，不予转交":"")+''+(row.sldyj=="3"?"销毁信件":"")+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldzs')>-1){
	            clumns.push({field : 'ldzs',title : '领导指示',width : 200,hidden:util.getArrayIndex(option.hidden,'ldzs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldzs==null?"":row.ldzs)+'>'+(row.ldzs==null?"":row.ldzs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldqm')>-1){
	            clumns.push({field : 'ldqm',title : '领导签名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldqm==null?"":row.ldqm)+'>'+(row.ldqm==null?"":row.ldqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldqmrq')>-1){
	            clumns.push({field : 'ldqmrq',title : '领导签名日期',width : 200,hidden:util.getArrayIndex(option.hidden,'ldqmrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldqmrq==null?"":row.ldqmrq)+'>'+(row.ldqmrq==null?"":row.ldqmrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xjclqk')>-1){
	            clumns.push({field : 'xjclqk',title : '信件处理情况',width : 200,hidden:util.getArrayIndex(option.hidden,'xjclqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xjclqk==null?"":row.xjclqk)+'>'+(row.xjclqk==null?"":row.xjclqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbr')>-1){
	            clumns.push({field : 'jbr',title : '经办人',width : 200,hidden:util.getArrayIndex(option.hidden,'jbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbr==null?"":row.jbr)+'>'+(row.jbr==null?"":row.jbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbrq')>-1){
	            clumns.push({field : 'jbrq',title : '经办日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbrq==null?"":row.jbrq)+'>'+(row.jbrq==null?"":row.jbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xjlx')>-1){
	            clumns.push({field : 'xjlx',title : '信件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'xjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xjlx==null?"":row.xjlx)+'>'+(row.xjlx==null?"":row.xjlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywjd')>-1){
	            clumns.push({field : 'ywjd',title : '业务阶段，1：领导审批；2：另行处理；3：结束',width : 200,hidden:util.getArrayIndex(option.hidden,'ywjd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywjd==null?"":row.ywjd)+'>'+(row.ywjd==null?"":row.ywjd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '存在状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'pastable')>-1){
	            clumns.push({field : 'pastable',title : '是否有效(SHFO)',width : 200,hidden:util.getArrayIndex(option.hidden,'pastable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pastable==null?"":row.pastable)+'>'+(row.pastable==null?"":row.pastable)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});