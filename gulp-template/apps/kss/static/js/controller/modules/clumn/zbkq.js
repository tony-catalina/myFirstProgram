/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Zbkq 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jh')>-1){
	            clumns.push({field : 'jh',title : '警号',width : 200,hidden:util.getArrayIndex(option.hidden,'jh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jh==null?"":row.jh)+'>'+(row.jh==null?"":row.jh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xm')>-1){
	            clumns.push({field : 'xm',title : '值班人',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zbrs')>-1){
	            clumns.push({field : 'zbrs',title : '值班人数',width : 200,hidden:util.getArrayIndex(option.hidden,'zbrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zbrs==null?"":row.zbrs)+'>'+(row.zbrs==null?"":row.zbrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zbsj')>-1){
	            clumns.push({field : 'zbsj',title : '值班时间',width : 200,hidden:util.getArrayIndex(option.hidden,'zbsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zbsj==null?"":row.zbsj)+'>'+(row.zbsj==null?"":row.zbsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbsj')>-1){
	            clumns.push({field : 'jbsj',title : '接班时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jbsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbsj==null?"":row.jbsj)+'>'+(row.jbsj==null?"":row.jbsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bdqk')>-1){
	            clumns.push({field : 'bdqk',title : '变动情况',width : 200,hidden:util.getArrayIndex(option.hidden,'bdqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bdqk==null?"":row.bdqk)+'>'+(row.bdqk==null?"":row.bdqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cljs')>-1){
	            clumns.push({field : 'cljs',title : '处理记事',width : 200,hidden:util.getArrayIndex(option.hidden,'cljs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cljs==null?"":row.cljs)+'>'+(row.cljs==null?"":row.cljs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xsjl')>-1){
	            clumns.push({field : 'xsjl',title : '巡视记录',width : 200,hidden:util.getArrayIndex(option.hidden,'xsjl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xsjl==null?"":row.xsjl)+'>'+(row.xsjl==null?"":row.xsjl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjsx')>-1){
	            clumns.push({field : 'jjsx',title : '交接事项',width : 200,hidden:util.getArrayIndex(option.hidden,'jjsx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjsx==null?"":row.jjsx)+'>'+(row.jjsx==null?"":row.jjsx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbr')>-1){
	            clumns.push({field : 'jbr',title : '接班人',width : 200,hidden:util.getArrayIndex(option.hidden,'jbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbr==null?"":row.jbr)+'>'+(row.jbr==null?"":row.jbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbrs')>-1){
	            clumns.push({field : 'jbrs',title : '接班人数',width : 200,hidden:util.getArrayIndex(option.hidden,'jbrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbrs==null?"":row.jbrs)+'>'+(row.jbrs==null?"":row.jbrs)+'</span>'}});
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