/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * XsgdjdkhRcbx 数据列表
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
	        if(util.getArrayIndex(option.clumns,'khrq')>-1){
	            clumns.push({field : 'khrq',title : '考核日期',width : 200,hidden:util.getArrayIndex(option.hidden,'khrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khrq==null?"":row.khrq)+'>'+(row.khrq==null?"":row.khrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'khr')>-1){
	            clumns.push({field : 'khr',title : '考核人',width : 200,hidden:util.getArrayIndex(option.hidden,'khr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khr==null?"":row.khr)+'>'+(row.khr==null?"":row.khr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xxtd')>-1){
	            clumns.push({field : 'xxtd',title : '学习态度',width : 200,hidden:util.getArrayIndex(option.hidden,'xxtd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xxtd==null?"":row.xxtd)+'>'+(row.xxtd==null?"":row.xxtd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rstd')>-1){
	            clumns.push({field : 'rstd',title : '认识态度',width : 200,hidden:util.getArrayIndex(option.hidden,'rstd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rstd==null?"":row.rstd)+'>'+(row.rstd==null?"":row.rstd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fcgl')>-1){
	            clumns.push({field : 'fcgl',title : '服从管理',width : 200,hidden:util.getArrayIndex(option.hidden,'fcgl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fcgl==null?"":row.fcgl)+'>'+(row.fcgl==null?"":row.fcgl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zsjg')>-1){
	            clumns.push({field : 'zsjg',title : '遵守监规',width : 200,hidden:util.getArrayIndex(option.hidden,'zsjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zsjg==null?"":row.zsjg)+'>'+(row.zsjg==null?"":row.zsjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zxzd')>-1){
	            clumns.push({field : 'zxzd',title : '作息制度',width : 200,hidden:util.getArrayIndex(option.hidden,'zxzd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zxzd==null?"":row.zxzd)+'>'+(row.zxzd==null?"":row.zxzd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nwws')>-1){
	            clumns.push({field : 'nwws',title : '内务卫生',width : 200,hidden:util.getArrayIndex(option.hidden,'nwws')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nwws==null?"":row.nwws)+'>'+(row.nwws==null?"":row.nwws)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wmlm')>-1){
	            clumns.push({field : 'wmlm',title : '文明礼貌',width : 200,hidden:util.getArrayIndex(option.hidden,'wmlm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wmlm==null?"":row.wmlm)+'>'+(row.wmlm==null?"":row.wmlm)+'</span>'}});
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