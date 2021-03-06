/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Swrypg 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jbxx_xm')>-1){
	        	clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_jsh')>-1){
	        	clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfswpg')>-1){
	            clumns.push({field : 'sfswpg',title : '是否涉维评估',width : 200,hidden:util.getArrayIndex(option.hidden,'sfswpg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfswpg==null?"":row.sfswpg)+'>'+(row.sfswpg==null?"":row.sfswpg)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'sfswryString')>-1){
				clumns.push({field : 'sfswryString',title : '是否涉维人员',width : 200,hidden:util.getArrayIndex(option.hidden,'sfswryString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfswryString==null?"":row.sfswryString)+'>'+(row.sfswryString==null?"":row.sfswryString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'swpgzb')>-1){
	            clumns.push({field : 'swpgzb',title : '涉维评估指标',width : 200,hidden:util.getArrayIndex(option.hidden,'swpgzb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swpgzb==null?"":row.swpgzb)+'>'+(row.swpgzb==null?"":row.swpgzb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pgr')>-1){
	            clumns.push({field : 'pgr',title : '评估人',width : 200,hidden:util.getArrayIndex(option.hidden,'pgr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pgr==null?"":row.pgr)+'>'+(row.pgr==null?"":row.pgr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pgrq')>-1){
	            clumns.push({field : 'pgrq',title : '评估日期',width : 200,hidden:util.getArrayIndex(option.hidden,'pgrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pgrq==null?"":row.pgrq)+'>'+(row.pgrq==null?"":row.pgrq)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'pgrqString')>-1){
				clumns.push({field : 'pgrqString',title : '评估日期',width : 200,hidden:util.getArrayIndex(option.hidden,'pgrqString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pgrqString==null?"":row.pgrqString)+'>'+(row.pgrqString==null?"":row.pgrqString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'creator')>-1){
	            clumns.push({field : 'creator',title : '创建人',width : 200,hidden:util.getArrayIndex(option.hidden,'creator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.creator==null?"":row.creator)+'>'+(row.creator==null?"":row.creator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'createtime')>-1){
	            clumns.push({field : 'createtime',title : '创建时间 ',width : 200,hidden:util.getArrayIndex(option.hidden,'createtime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.createtime==null?"":row.createtime)+'>'+(row.createtime==null?"":row.createtime)+'</span>'}});
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