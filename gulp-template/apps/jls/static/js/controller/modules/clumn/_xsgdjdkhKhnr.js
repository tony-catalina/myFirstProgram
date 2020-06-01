/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * XsgdjdkhKhnr 数据列表
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
	        if(util.getArrayIndex(option.clumns,'djr')>-1){
	            clumns.push({field : 'djr',title : '登记人',width : 200,hidden:util.getArrayIndex(option.hidden,'djr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djr==null?"":row.djr)+'>'+(row.djr==null?"":row.djr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djrq')>-1){
	            clumns.push({field : 'djrq',title : '登记日期',width : 200,hidden:util.getArrayIndex(option.hidden,'djrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djrq==null?"":row.djrq)+'>'+(row.djrq==null?"":row.djrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'kslx')>-1){
	            clumns.push({field : 'kslx',title : '考试类型',width : 200,hidden:util.getArrayIndex(option.hidden,'kslx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kslx==null?"":row.kslx)+'>'+(row.kslx==null?"":row.kslx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bsksrq')>-1){
	            clumns.push({field : 'bsksrq',title : '笔试考试日期',width : 200,hidden:util.getArrayIndex(option.hidden,'bsksrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bsksrq==null?"":row.bsksrq)+'>'+(row.bsksrq==null?"":row.bsksrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bsksdf')>-1){
	            clumns.push({field : 'bsksdf',title : '笔试考试得分',width : 200,hidden:util.getArrayIndex(option.hidden,'bsksdf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bsksdf==null?"":row.bsksdf)+'>'+(row.bsksdf==null?"":row.bsksdf)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bsbkrq')>-1){
	            clumns.push({field : 'bsbkrq',title : '笔试补考日期',width : 200,hidden:util.getArrayIndex(option.hidden,'bsbkrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bsbkrq==null?"":row.bsbkrq)+'>'+(row.bsbkrq==null?"":row.bsbkrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bsbkdf')>-1){
	            clumns.push({field : 'bsbkdf',title : '笔试考试得分',width : 200,hidden:util.getArrayIndex(option.hidden,'bsbkdf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bsbkdf==null?"":row.bsbkdf)+'>'+(row.bsbkdf==null?"":row.bsbkdf)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ksksrq')>-1){
	            clumns.push({field : 'ksksrq',title : '口试考试日期',width : 200,hidden:util.getArrayIndex(option.hidden,'ksksrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ksksrq==null?"":row.ksksrq)+'>'+(row.ksksrq==null?"":row.ksksrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ksksdf')>-1){
	            clumns.push({field : 'ksksdf',title : '口试考试得分',width : 200,hidden:util.getArrayIndex(option.hidden,'ksksdf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ksksdf==null?"":row.ksksdf)+'>'+(row.ksksdf==null?"":row.ksksdf)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ksbkrq')>-1){
	            clumns.push({field : 'ksbkrq',title : '口试补考日期',width : 200,hidden:util.getArrayIndex(option.hidden,'ksbkrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ksbkrq==null?"":row.ksbkrq)+'>'+(row.ksbkrq==null?"":row.ksbkrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ksbkdf')>-1){
	            clumns.push({field : 'ksbkdf',title : '口试补考得分',width : 200,hidden:util.getArrayIndex(option.hidden,'ksbkdf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ksbkdf==null?"":row.ksbkdf)+'>'+(row.ksbkdf==null?"":row.ksbkdf)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bxjd')>-1){
	            clumns.push({field : 'bxjd',title : '表现鉴定',width : 200,hidden:util.getArrayIndex(option.hidden,'bxjd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bxjd==null?"":row.bxjd)+'>'+(row.bxjd==null?"":row.bxjd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbjjqk')>-1){
	            clumns.push({field : 'tbjjqk',title : '坦白检举情况',width : 200,hidden:util.getArrayIndex(option.hidden,'tbjjqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbjjqk==null?"":row.tbjjqk)+'>'+(row.tbjjqk==null?"":row.tbjjqk)+'</span>'}});
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