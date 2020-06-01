/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Tmsq 数据列表
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
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sm')>-1){
	            clumns.push({field : 'sm',title : '说明',width : 200,hidden:util.getArrayIndex(option.hidden,'sm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sm==null?"":row.sm)+'>'+(row.sm==null?"":row.sm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'type')>-1){
	            clumns.push({field : 'type',title : '体貌/伤情部位',width : 200,hidden:util.getArrayIndex(option.hidden,'type')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.type==null?"":row.type)+'>'+(row.type==null?"":row.type)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'photo1')>-1){
	            clumns.push({field : 'photo1',title : '第一张照片',width : 200,hidden:util.getArrayIndex(option.hidden,'photo1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.photo1==null?"":row.photo1)+'>'+(row.photo1==null?"":row.photo1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'photo2')>-1){
	            clumns.push({field : 'photo2',title : '第二张照片',width : 200,hidden:util.getArrayIndex(option.hidden,'photo2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.photo2==null?"":row.photo2)+'>'+(row.photo2==null?"":row.photo2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'photo3')>-1){
	            clumns.push({field : 'photo3',title : '第三张照片',width : 200,hidden:util.getArrayIndex(option.hidden,'photo3')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.photo3==null?"":row.photo3)+'>'+(row.photo3==null?"":row.photo3)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'photo1url')>-1){
	            clumns.push({field : 'photo1url',title : '第一张照片url',width : 200,hidden:util.getArrayIndex(option.hidden,'photo1url')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.photo1url==null?"":row.photo1url)+'>'+(row.photo1url==null?"":row.photo1url)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'photo2url')>-1){
	            clumns.push({field : 'photo2url',title : '第二张照片url',width : 200,hidden:util.getArrayIndex(option.hidden,'photo2url')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.photo2url==null?"":row.photo2url)+'>'+(row.photo2url==null?"":row.photo2url)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'photo3url')>-1){
	            clumns.push({field : 'photo3url',title : '第三张照片url',width : 200,hidden:util.getArrayIndex(option.hidden,'photo3url')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.photo3url==null?"":row.photo3url)+'>'+(row.photo3url==null?"":row.photo3url)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqqk')>-1){
	            clumns.push({field : 'sqqk',title : '伤情情况',width : 200,hidden:util.getArrayIndex(option.hidden,'sqqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqqk==null?"":row.sqqk)+'>'+(row.sqqk==null?"":row.sqqk)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});