/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Yzmx 数据列表
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
	        if(util.getArrayIndex(option.clumns,'ypbh')>-1){
	            clumns.push({field : 'ypbh',title : '药品编号',width : 200,hidden:util.getArrayIndex(option.hidden,'ypbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypbh==null?"":row.ypbh)+'>'+(row.ypbh==null?"":row.ypbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yzbh')>-1){
	            clumns.push({field : 'yzbh',title : '医嘱编号ID',width : 200,hidden:util.getArrayIndex(option.hidden,'yzbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yzbh==null?"":row.yzbh)+'>'+(row.yzbh==null?"":row.yzbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cs')>-1){
	            clumns.push({field : 'cs',title : '次数',width : 200,hidden:util.getArrayIndex(option.hidden,'cs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cs==null?"":row.cs)+'>'+(row.cs==null?"":row.cs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sl')>-1){
	            clumns.push({field : 'sl',title : '数量',width : 200,hidden:util.getArrayIndex(option.hidden,'sl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl==null?"":row.sl)+'>'+(row.sl==null?"":row.sl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fyjg')>-1){
	            clumns.push({field : 'fyjg',title : '服药间隔(单位默认小时)',width : 200,hidden:util.getArrayIndex(option.hidden,'fyjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fyjg==null?"":row.fyjg)+'>'+(row.fyjg==null?"":row.fyjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fyzysx')>-1){
	            clumns.push({field : 'fyzysx',title : '服药注意事项',width : 200,hidden:util.getArrayIndex(option.hidden,'fyzysx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fyzysx==null?"":row.fyzysx)+'>'+(row.fyzysx==null?"":row.fyzysx)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'dw')>-1){
	            clumns.push({field : 'dw',title : '单位(DW)',width : 200,hidden:util.getArrayIndex(option.hidden,'dw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dw==null?"":row.dw)+'>'+(row.dw==null?"":row.dw)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});