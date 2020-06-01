/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Xjjs 数据列表
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
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'currency')>-1){
	            clumns.push({field : 'currency',title : '币种',width : 200,hidden:util.getArrayIndex(option.hidden,'currency')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.currency==null?"":row.currency)+'>'+(row.currency==null?"":row.currency)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'srlx')>-1){
	            clumns.push({field : 'srlx',title : '接收类型',width : 200,hidden:util.getArrayIndex(option.hidden,'srlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.srlx==null?"":row.srlx)+'>'+(row.srlx==null?"":row.srlx)+'</span>'}});
			}
			
	        if(util.getArrayIndex(option.clumns,'jszjh')>-1){
	            clumns.push({field : 'jszjh',title : '家属证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'jszjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jszjh==null?"":row.jszjh)+'>'+(row.jszjh==null?"":row.jszjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jscxbh')>-1){
	            clumns.push({field : 'jscxbh',title : '接收次序编号   ',width : 200,hidden:util.getArrayIndex(option.hidden,'jscxbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jscxbh==null?"":row.jscxbh)+'>'+(row.jscxbh==null?"":row.jscxbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsje')>-1){
	            clumns.push({field : 'jsje',title : '接收的金额',width : 200,hidden:util.getArrayIndex(option.hidden,'jsje')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsje==null?"":row.jsje)+'>'+(row.jsje==null?"":row.jsje)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blrq')>-1){
	            clumns.push({field : 'blrq',title : '办理日期',width : 200,hidden:util.getArrayIndex(option.hidden,'blrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blrq==null?"":row.blrq)+'>'+(row.blrq==null?"":row.blrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blr')>-1){
	            clumns.push({field : 'blr',title : '办理人',width : 200,hidden:util.getArrayIndex(option.hidden,'blr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blr==null?"":row.blr)+'>'+(row.blr==null?"":row.blr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zy')>-1){
	            clumns.push({field : 'zy',title : '摘要',width : 200,hidden:util.getArrayIndex(option.hidden,'zy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zy==null?"":row.zy)+'>'+(row.zy==null?"":row.zy)+'</span>'}});
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