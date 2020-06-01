/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jls 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jlsmc')>-1){
	            clumns.push({field : 'jlsmc',title : '拘留所名称',width : 200,hidden:util.getArrayIndex(option.hidden,'jlsmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlsmc==null?"":row.jlsmc)+'>'+(row.jlsmc==null?"":row.jlsmc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlsjc')>-1){
	            clumns.push({field : 'jlsjc',title : '拘留所简称',width : 200,hidden:util.getArrayIndex(option.hidden,'jlsjc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlsjc==null?"":row.jlsjc)+'>'+(row.jlsjc==null?"":row.jlsjc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jstype')>-1){
	            clumns.push({field : 'jstype',title : '监所类型',width : 200,hidden:util.getArrayIndex(option.hidden,'jstype')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jstype==null?"":row.jstype)+'>'+(row.jstype==null?"":row.jstype)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dz')>-1){
	            clumns.push({field : 'dz',title : '地址',width : 200,hidden:util.getArrayIndex(option.hidden,'dz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dz==null?"":row.dz)+'>'+(row.dz==null?"":row.dz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dq')>-1){
	            clumns.push({field : 'dq',title : '详细地址',width : 200,hidden:util.getArrayIndex(option.hidden,'dq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dq==null?"":row.dq)+'>'+(row.dq==null?"":row.dq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dh')>-1){
	            clumns.push({field : 'dh',title : '电话',width : 200,hidden:util.getArrayIndex(option.hidden,'dh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dh==null?"":row.dh)+'>'+(row.dh==null?"":row.dh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cz')>-1){
	            clumns.push({field : 'cz',title : '传真',width : 200,hidden:util.getArrayIndex(option.hidden,'cz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cz==null?"":row.cz)+'>'+(row.cz==null?"":row.cz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yzbm')>-1){
	            clumns.push({field : 'yzbm',title : '邮政编码',width : 200,hidden:util.getArrayIndex(option.hidden,'yzbm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yzbm==null?"":row.yzbm)+'>'+(row.yzbm==null?"":row.yzbm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'email')>-1){
	            clumns.push({field : 'email',title : 'EMAIL',width : 200,hidden:util.getArrayIndex(option.hidden,'email')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.email==null?"":row.email)+'>'+(row.email==null?"":row.email)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'net')>-1){
	            clumns.push({field : 'net',title : '网址',width : 200,hidden:util.getArrayIndex(option.hidden,'net')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.net==null?"":row.net)+'>'+(row.net==null?"":row.net)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldxm')>-1){
	            clumns.push({field : 'ldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldxm==null?"":row.ldxm)+'>'+(row.ldxm==null?"":row.ldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dj')>-1){
	            clumns.push({field : 'dj',title : '等级',width : 200,hidden:util.getArrayIndex(option.hidden,'dj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dj==null?"":row.dj)+'>'+(row.dj==null?"":row.dj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gm')>-1){
	            clumns.push({field : 'gm',title : '规模',width : 200,hidden:util.getArrayIndex(option.hidden,'gm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gm==null?"":row.gm)+'>'+(row.gm==null?"":row.gm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rs')>-1){
	            clumns.push({field : 'rs',title : '民警总数',width : 200,hidden:util.getArrayIndex(option.hidden,'rs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rs==null?"":row.rs)+'>'+(row.rs==null?"":row.rs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bzrs')>-1){
	            clumns.push({field : 'bzrs',title : '编制人数',width : 200,hidden:util.getArrayIndex(option.hidden,'bzrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bzrs==null?"":row.bzrs)+'>'+(row.bzrs==null?"":row.bzrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jss')>-1){
	            clumns.push({field : 'jss',title : '拘室数',width : 200,hidden:util.getArrayIndex(option.hidden,'jss')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jss==null?"":row.jss)+'>'+(row.jss==null?"":row.jss)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rl')>-1){
	            clumns.push({field : 'rl',title : '设计容量',width : 200,hidden:util.getArrayIndex(option.hidden,'rl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rl==null?"":row.rl)+'>'+(row.rl==null?"":row.rl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scbz')>-1){
	            clumns.push({field : 'scbz',title : '上传标志',width : 200,hidden:util.getArrayIndex(option.hidden,'scbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scbz==null?"":row.scbz)+'>'+(row.scbz==null?"":row.scbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'version')>-1){
	            clumns.push({field : 'version',title : '使用系统版本号',width : 200,hidden:util.getArrayIndex(option.hidden,'version')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.version==null?"":row.version)+'>'+(row.version==null?"":row.version)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'enable')>-1){
	            clumns.push({field : 'enable',title : '是否启用',width : 200,hidden:util.getArrayIndex(option.hidden,'enable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.enable==null?"":row.enable)+'>'+(row.enable==null?"":row.enable)+'</span>'}});
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
	        
	        return clumns;
	    };
	    return main;
	});