/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Zrap 数据列表
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
	        if(util.getArrayIndex(option.clumns,'apsj')>-1){
	            clumns.push({field : 'apsj',title : '安排时间',width : 200,hidden:util.getArrayIndex(option.hidden,'apsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.apsj==null?"":row.apsj)+'>'+(row.apsj==null?"":row.apsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'week')>-1){
	            clumns.push({field : 'week',title : '星期',width : 200,hidden:util.getArrayIndex(option.hidden,'week')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.week==null?"":row.week)+'>'+(row.week==null?"":row.week)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zbr1')>-1){
	            clumns.push({field : 'zbr1',title : '值班人1',width : 200,hidden:util.getArrayIndex(option.hidden,'zbr1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zbr1==null?"":row.zbr1)+'>'+(row.zbr1==null?"":row.zbr1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zbr2')>-1){
	            clumns.push({field : 'zbr2',title : '值班人2',width : 200,hidden:util.getArrayIndex(option.hidden,'zbr2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zbr2==null?"":row.zbr2)+'>'+(row.zbr2==null?"":row.zbr2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zbr3')>-1){
	            clumns.push({field : 'zbr3',title : '值班人3',width : 200,hidden:util.getArrayIndex(option.hidden,'zbr3')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zbr3==null?"":row.zbr3)+'>'+(row.zbr3==null?"":row.zbr3)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zbr4')>-1){
	            clumns.push({field : 'zbr4',title : '值班人4',width : 200,hidden:util.getArrayIndex(option.hidden,'zbr4')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zbr4==null?"":row.zbr4)+'>'+(row.zbr4==null?"":row.zbr4)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zbr5')>-1){
	            clumns.push({field : 'zbr5',title : '值班人5',width : 200,hidden:util.getArrayIndex(option.hidden,'zbr5')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zbr5==null?"":row.zbr5)+'>'+(row.zbr5==null?"":row.zbr5)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'jsh')>-1){
	            clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});