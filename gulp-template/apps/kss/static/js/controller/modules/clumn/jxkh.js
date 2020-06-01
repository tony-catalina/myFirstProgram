/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jxkh 数据列表
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
	            clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'khlx')>-1){
	            clumns.push({field : 'khlx',title : '考核类型',width : 200,hidden:util.getArrayIndex(option.hidden,'khlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khlx==null?"":row.khlx)+'>'+(row.khlx==null?"":row.khlx)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'khlxString')>-1){
                clumns.push({field : 'khlxString',title : '考核类型',width : 200,hidden:util.getArrayIndex(option.hidden,'khlxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khlxString==null?"":row.khlxString)+'>'+(row.khlxString==null?"":row.khlxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'khbm')>-1){
	            clumns.push({field : 'khbm',title : '考核部门',width : 200,hidden:util.getArrayIndex(option.hidden,'khbm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khbm==null?"":row.khbm)+'>'+(row.khbm==null?"":row.khbm)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'khbmString')>-1){
                clumns.push({field : 'khbmString',title : '考核部门',width : 200,hidden:util.getArrayIndex(option.hidden,'khbmString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khbmString==null?"":row.khbmString)+'>'+(row.khbmString==null?"":row.khbmString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'khr')>-1){
	            clumns.push({field : 'khr',title : '考核人',width : 200,hidden:util.getArrayIndex(option.hidden,'khr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khr==null?"":row.khr)+'>'+(row.khr==null?"":row.khr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'khsj')>-1){
	            clumns.push({field : 'khsj',title : '考核时间',width : 200,hidden:util.getArrayIndex(option.hidden,'khsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khsj==null?"":row.khsj)+'>'+(row.khsj==null?"":row.khsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'khjg')>-1){
	            clumns.push({field : 'khjg',title : '考核结果',width : 200,hidden:util.getArrayIndex(option.hidden,'khjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khjg==null?"":row.khjg)+'>'+(row.khjg==null?"":row.khjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'khjgString')>-1){
                clumns.push({field : 'khjgString',title : '考核结果',width : 200,hidden:util.getArrayIndex(option.hidden,'khjgString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khjgString==null?"":row.khjgString)+'>'+(row.khjgString==null?"":row.khjgString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态（STATE）',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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