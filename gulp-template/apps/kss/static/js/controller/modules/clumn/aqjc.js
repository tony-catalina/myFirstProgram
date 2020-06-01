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
	            clumns.push({field : 'id',title : 'ID',width : 200,hidden:util.getArrayIndex(option.hidden,'id')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.id==null?"":row.id)+'>'+(row.id==null?"":row.id)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcxs')>-1){
	            clumns.push({field : 'jcxs',title : '检查形式',width : 200,hidden:util.getArrayIndex(option.hidden,'jcxs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcxs==null?"":row.jcxs)+'>'+(row.jcxs==null?"":row.jcxs)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'fzr')>-1){
				clumns.push({field : 'fzr',title : '负责人',width : 200,hidden:util.getArrayIndex(option.hidden,'fzr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fzr==null?"":row.fzr)+'>'+(row.fzr==null?"":row.fzr)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'sj')>-1){
				clumns.push({field : 'sj',title : '检查时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sj==null?"":row.sj)+'>'+(row.sj==null?"":row.sj)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'zsjcry')>-1){
				clumns.push({field : 'zsjcry',title : '住所检查人员',width : 200,hidden:util.getArrayIndex(option.hidden,'zsjcry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zsjcry==null?"":row.zsjcry)+'>'+(row.zsjcry==null?"":row.zsjcry)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'ksscjrs')>-1){
	            clumns.push({field : 'ksscjrs',title : '看守所参加人数',width : 200,hidden:util.getArrayIndex(option.hidden,'ksscjrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ksscjrs==null?"":row.ksscjrs)+'>'+(row.ksscjrs==null?"":row.ksscjrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wjcjrs')>-1){
	            clumns.push({field : 'wjcjrs',title : '武警参加人数',width : 200,hidden:util.getArrayIndex(option.hidden,'wjcjrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wjcjrs==null?"":row.wjcjrs)+'>'+(row.wjcjrs==null?"":row.wjcjrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jskcjrs')>-1){
	            clumns.push({field : 'jskcjrs',title : '监所科参加人数',width : 200,hidden:util.getArrayIndex(option.hidden,'jskcjrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jskcjrs==null?"":row.jskcjrs)+'>'+(row.jskcjrs==null?"":row.jskcjrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fw')>-1){
	            clumns.push({field : 'fw',title : '检查范围',width : 200,hidden:util.getArrayIndex(option.hidden,'fw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fw==null?"":row.fw)+'>'+(row.fw==null?"":row.fw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nr')>-1){
	            clumns.push({field : 'nr',title : '检查内容',width : 200,hidden:util.getArrayIndex(option.hidden,'nr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nr==null?"":row.nr)+'>'+(row.nr==null?"":row.nr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcjg')>-1){
	            clumns.push({field : 'jcjg',title : '检查结果',width : 200,hidden:util.getArrayIndex(option.hidden,'jcjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcjg==null?"":row.jcjg)+'>'+(row.jcjg==null?"":row.jcjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cljg')>-1){
	            clumns.push({field : 'cljg',title : '处理结果',width : 200,hidden:util.getArrayIndex(option.hidden,'cljg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cljg==null?"":row.cljg)+'>'+(row.cljg==null?"":row.cljg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
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
	        
	        return clumns;
	    };
	    return main;
	});