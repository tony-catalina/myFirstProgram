/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Zyryfyjl 数据列表
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
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'fyr')>-1){
				clumns.push({field : 'fyr',title : '发药人',width : 200,hidden:util.getArrayIndex(option.hidden,'fyr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fyr==null?"":row.fyr)+'>'+(row.fyr==null?"":row.fyr)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'fyrq')>-1){
	            clumns.push({field : 'fyrq',title : '发药日期',width : 200,hidden:util.getArrayIndex(option.hidden,'fyrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fyrq==null?"":row.fyrq)+'>'+(row.fyrq==null?"":row.fyrq)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'ypbhString')>-1){
				clumns.push({field : 'ypbhString',title : '药品名称',width : 200,hidden:util.getArrayIndex(option.hidden,'ypbhString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypbhString==null?"":row.ypbhString)+'>'+(row.ypbhString==null?"":row.ypbhString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'ypbh')>-1){
	            clumns.push({field : 'ypbh',title : '药品编号',width : 200,hidden:util.getArrayIndex(option.hidden,'ypbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypbh==null?"":row.ypbh)+'>'+(row.ypbh==null?"":row.ypbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fydw')>-1){
	            clumns.push({field : 'fydw',title : '发药单位',width : 200,hidden:util.getArrayIndex(option.hidden,'fydw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fydw==null?"":row.fydw)+'>'+(row.fydw==null?"":row.fydw)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'fydwString')>-1){
                clumns.push({field : 'fydwString',title : '发药单位',width : 200,hidden:util.getArrayIndex(option.hidden,'fydwString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fydwString==null?"":row.fydwString)+'>'+(row.fydwString==null?"":row.fydwString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'sl')>-1){
	            clumns.push({field : 'sl',title : '数量',width : 200,hidden:util.getArrayIndex(option.hidden,'sl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl==null?"":row.sl)+'>'+(row.sl==null?"":row.sl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'createtime')>-1){
	            clumns.push({field : 'createtime',title : '创建时间',width : 200,hidden:util.getArrayIndex(option.hidden,'createtime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.createtime==null?"":row.createtime)+'>'+(row.createtime==null?"":row.createtime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'creator')>-1){
	            clumns.push({field : 'creator',title : '创建人',width : 200,hidden:util.getArrayIndex(option.hidden,'creator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.creator==null?"":row.creator)+'>'+(row.creator==null?"":row.creator)+'</span>'}});
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