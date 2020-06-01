/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Xsjl 数据列表
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
	        if(util.getArrayIndex(option.clumns,'xsfw')>-1){
	            clumns.push({field : 'xsfw',title : '巡视范围',width : 200,hidden:util.getArrayIndex(option.hidden,'xsfw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xsfw==null?"":row.xsfw)+'>'+(row.xsfw==null?"":row.xsfw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xsfwString')>-1){
                clumns.push({field : 'xsfwString',title : '巡视范围',width : 200,hidden:util.getArrayIndex(option.hidden,'xsfwString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xsfwString==null?"":row.xsfwString)+'>'+(row.xsfwString==null?"":row.xsfwString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'xssj')>-1){
	            clumns.push({field : 'xssj',title : '巡视时间 ',width : 200,hidden:util.getArrayIndex(option.hidden,'xssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xssj==null?"":row.xssj)+'>'+(row.xssj==null?"":row.xssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xsmj')>-1){
	            clumns.push({field : 'xsmj',title : '巡视民警',width : 200,hidden:util.getArrayIndex(option.hidden,'xsmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xsmj==null?"":row.xsmj)+'>'+(row.xsmj==null?"":row.xsmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xsqk')>-1){
	            clumns.push({field : 'xsqk',title : '巡视情况',width : 200,hidden:util.getArrayIndex(option.hidden,'xsqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xsqk==null?"":row.xsqk)+'>'+(row.xsqk==null?"":row.xsqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xslx')>-1){
	            clumns.push({field : 'xslx',title : '巡视类型',width : 200,hidden:util.getArrayIndex(option.hidden,'xslx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xslx==null?"":row.xslx)+'>'+(row.xslx==null?"":row.xslx)+'</span>'}});
	        }
            if(util.getArrayIndex(option.clumns,'xslxString')>-1){
                clumns.push({field : 'xslxString',title : '巡视类型',width : 200,hidden:util.getArrayIndex(option.hidden,'xslxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xslxString==null?"":row.xslxString)+'>'+(row.xslxString==null?"":row.xslxString)+'</span>'}});
            }
            if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'wglx')>-1){
	            clumns.push({field : 'wglx',title : '违规类型',width : 200,hidden:util.getArrayIndex(option.hidden,'wglx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wglx==null?"":row.wglx)+'>'+(row.wglx==null?"":row.wglx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'updatetime')>-1){
	            clumns.push({field : 'updatetime',title : '更新时间',width : 200,hidden:util.getArrayIndex(option.hidden,'updatetime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.updatetime==null?"":row.updatetime)+'>'+(row.updatetime==null?"":row.updatetime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlsj')>-1){
	            clumns.push({field : 'jlsj',title : '记录时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jlsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlsj==null?"":row.jlsj)+'>'+(row.jlsj==null?"":row.jlsj)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});