/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Wlry 数据列表
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
	        
			if(util.getArrayIndex(option.clumns,'lssyString')>-1){
	            clumns.push({field : 'lssyString',title : '来所事由',width : 200,hidden:util.getArrayIndex(option.hidden,'lssyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lssyString==null?"":row.lssyString)+'>'+(row.lssyString==null?"":row.lssyString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jtsy')>-1){
	            clumns.push({field : 'jtsy',title : '具体事由',width : 200,hidden:util.getArrayIndex(option.hidden,'jtsy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jtsy==null?"":row.jtsy)+'>'+(row.jtsy==null?"":row.jtsy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lfrs')>-1){
	            clumns.push({field : 'lfrs',title : '来访人数',width : 200,hidden:util.getArrayIndex(option.hidden,'lfrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lfrs==null?"":row.lfrs)+'>'+(row.lfrs==null?"":row.lfrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sxcls')>-1){
	            clumns.push({field : 'sxcls',title : '随行车辆数',width : 200,hidden:util.getArrayIndex(option.hidden,'sxcls')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sxcls==null?"":row.sxcls)+'>'+(row.sxcls==null?"":row.sxcls)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'drmj')>-1){
	            clumns.push({field : 'drmj',title : '带入民警',width : 200,hidden:util.getArrayIndex(option.hidden,'drmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.drmj==null?"":row.drmj)+'>'+(row.drmj==null?"":row.drmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'drsj')>-1){
	            clumns.push({field : 'drsj',title : '带入时间',width : 200,hidden:util.getArrayIndex(option.hidden,'drsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.drsj==null?"":row.drsj)+'>'+(row.drsj==null?"":row.drsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wljbxx')>-1){
	            clumns.push({field : 'wljbxx',title : '外来人员基本信息',width : 200,hidden:util.getArrayIndex(option.hidden,'wljbxx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wljbxx==null?"":row.wljbxx)+'>'+(row.wljbxx==null?"":row.wljbxx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clxx')>-1){
	            clumns.push({field : 'clxx',title : '车辆信息',width : 200,hidden:util.getArrayIndex(option.hidden,'clxx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clxx==null?"":row.clxx)+'>'+(row.clxx==null?"":row.clxx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '存在状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'stateString')>-1){
                clumns.push({field : 'stateString',title : '存在状态',width : 200,hidden:util.getArrayIndex(option.hidden,'stateString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.stateString==null?"":row.stateString)+'>'+(row.stateString==null?"":row.stateString)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'crdjbz')>-1){
	            clumns.push({field : 'crdjbz',title : '出入登记标志',width : 200,hidden:util.getArrayIndex(option.hidden,'crdjbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.crdjbz==null?"":row.crdjbz)+'>'+(row.crdjbz==null?"":row.crdjbz)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'crdjbzString')>-1){
                clumns.push({field : 'crdjbzString',title : '出入登记标志',width : 200,hidden:util.getArrayIndex(option.hidden,'crdjbzString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.crdjbzString==null?"":row.crdjbzString)+'>'+(row.crdjbzString==null?"":row.crdjbzString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'dcsj')>-1){
	            clumns.push({field : 'dcsj',title : '带出时间',width : 200,hidden:util.getArrayIndex(option.hidden,'dcsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dcsj==null?"":row.dcsj)+'>'+(row.dcsj==null?"":row.dcsj)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});