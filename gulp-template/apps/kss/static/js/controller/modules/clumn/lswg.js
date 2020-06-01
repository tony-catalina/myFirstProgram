/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Lswg 数据列表
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
	        if(util.getArrayIndex(option.clumns,'zjh')>-1){
                clumns.push({field : 'zjh',title : '证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'zjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjh==null?"":row.zjh)+'>'+(row.zjh==null?"":row.zjh)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'lsxm')>-1){
	            clumns.push({field : 'lsxm',title : '律师姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'lsxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsxm==null?"":row.lsxm)+'>'+(row.lsxm==null?"":row.lsxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wgsj')>-1){
	            clumns.push({field : 'wgsj',title : '违规时间',width : 200,hidden:util.getArrayIndex(option.hidden,'wgsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgsj==null?"":row.wgsj)+'>'+(row.wgsj==null?"":row.wgsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dw')>-1){
	            clumns.push({field : 'dw',title : '律师单位',width : 200,hidden:util.getArrayIndex(option.hidden,'dw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dw==null?"":row.dw)+'>'+(row.dw==null?"":row.dw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dwString')>-1){
                clumns.push({field : 'dwString',title : '律师单位',width : 200,hidden:util.getArrayIndex(option.hidden,'dwString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dwString==null?"":row.dwString)+'>'+(row.dwString==null?"":row.dwString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'hjsj')>-1){
                clumns.push({field : 'hjsj',title : '会见时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hjsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjsj==null?"":row.hjsj)+'>'+(row.hjsj==null?"":row.hjsj)+'</span>'}});
            }
            if(util.getArrayIndex(option.clumns,'jssj')>-1){
                clumns.push({field : 'jssj',title : '结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jssj==null?"":row.jssj)+'>'+(row.jssj==null?"":row.jssj)+'</span>'}});
            }
            if(util.getArrayIndex(option.clumns,'fzmj')>-1){
                clumns.push({field : 'fzmj',title : '带出民警',width : 200,hidden:util.getArrayIndex(option.hidden,'fzmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fzmj==null?"":row.fzmj)+'>'+(row.fzmj==null?"":row.fzmj)+'</span>'}});
            }
            if(util.getArrayIndex(option.clumns,'jsr')>-1){
                clumns.push({field : 'jsr',title : '收监民警',width : 200,hidden:util.getArrayIndex(option.hidden,'jsr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsr==null?"":row.jsr)+'>'+(row.jsr==null?"":row.jsr)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'wgqk')>-1){
	            clumns.push({field : 'wgqk',title : '违规情况',width : 200,hidden:util.getArrayIndex(option.hidden,'wgqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgqk==null?"":row.wgqk)+'>'+(row.wgqk==null?"":row.wgqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lrmj')>-1){
	            clumns.push({field : 'lrmj',title : '录入民警',width : 200,hidden:util.getArrayIndex(option.hidden,'lrmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lrmj==null?"":row.lrmj)+'>'+(row.lrmj==null?"":row.lrmj)+'</span>'}});
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