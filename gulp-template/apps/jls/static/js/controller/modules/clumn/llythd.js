/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Llythd 数据列表
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
	            clumns.push({field : 'jsbh',title : '拘所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ytwzbtjzz')>-1){
	            clumns.push({field : 'ytwzbtjzz',title : 'ytwzbtjzz',width : 200,hidden:util.getArrayIndex(option.hidden,'ytwzbtjzz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ytwzbtjzz==null?"":row.ytwzbtjzz)+'>'+(row.ytwzbtjzz==null?"":row.ytwzbtjzz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pxjg')>-1){
	            clumns.push({field : 'pxjg',title : 'pxjg',width : 200,hidden:util.getArrayIndex(option.hidden,'pxjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pxjg==null?"":row.pxjg)+'>'+(row.pxjg==null?"":row.pxjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hdsj')>-1){
	            clumns.push({field : 'hdsj',title : '活动时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hdsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hdsj==null?"":row.hdsj)+'>'+(row.hdsj==null?"":row.hdsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ytzt')>-1){
	            clumns.push({field : 'ytzt',title : 'ytzt',width : 200,hidden:util.getArrayIndex(option.hidden,'ytzt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ytzt==null?"":row.ytzt)+'>'+(row.ytzt==null?"":row.ytzt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zcr')>-1){
	            clumns.push({field : 'zcr',title : '主持人,组织指挥者',width : 200,hidden:util.getArrayIndex(option.hidden,'zcr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zcr==null?"":row.zcr)+'>'+(row.zcr==null?"":row.zcr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlr')>-1){
	            clumns.push({field : 'jlr',title : '记录人',width : 200,hidden:util.getArrayIndex(option.hidden,'jlr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlr==null?"":row.jlr)+'>'+(row.jlr==null?"":row.jlr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cjry')>-1){
	            clumns.push({field : 'cjry',title : '参加人员',width : 200,hidden:util.getArrayIndex(option.hidden,'cjry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cjry==null?"":row.cjry)+'>'+(row.cjry==null?"":row.cjry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hdqk')>-1){
	            clumns.push({field : 'hdqk',title : '活动情况',width : 200,hidden:util.getArrayIndex(option.hidden,'hdqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hdqk==null?"":row.hdqk)+'>'+(row.hdqk==null?"":row.hdqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
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