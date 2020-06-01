/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Yabz 数据列表
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
	        if(util.getArrayIndex(option.clumns,'yadw')>-1){
	            clumns.push({field : 'yadw',title : '预案单位',width : 200,hidden:util.getArrayIndex(option.hidden,'yadw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yadw==null?"":row.yadw)+'>'+(row.yadw==null?"":row.yadw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yadwString')>-1){
                clumns.push({field : 'yadwString',title : '预案单位',width : 200,hidden:util.getArrayIndex(option.hidden,'yadwString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yadwString==null?"":row.yadwString)+'>'+(row.yadwString==null?"":row.yadwString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'yalx')>-1){
	            clumns.push({field : 'yalx',title : '预案类型',width : 200,hidden:util.getArrayIndex(option.hidden,'yalx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yalx==null?"":row.yalx)+'>'+(row.yalx==null?"":row.yalx)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'yalxString')>-1){
                clumns.push({field : 'yalxString',title : '预案类型',width : 200,hidden:util.getArrayIndex(option.hidden,'yalxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yalxString==null?"":row.yalxString)+'>'+(row.yalxString==null?"":row.yalxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'yadj')>-1){
	            clumns.push({field : 'yadj',title : '预案等级',width : 200,hidden:util.getArrayIndex(option.hidden,'yadj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yadj==null?"":row.yadj)+'>'+(row.yadj==null?"":row.yadj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yadjString')>-1){
                clumns.push({field : 'yadjString',title : '预案等级',width : 200,hidden:util.getArrayIndex(option.hidden,'yadjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yadjString==null?"":row.yadjString)+'>'+(row.yadjString==null?"":row.yadjString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'czfa')>-1){
	            clumns.push({field : 'czfa',title : '处置方案',width : 200,hidden:util.getArrayIndex(option.hidden,'czfa')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czfa==null?"":row.czfa)+'>'+(row.czfa==null?"":row.czfa)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bzcs')>-1){
	            clumns.push({field : 'bzcs',title : '保障措施',width : 200,hidden:util.getArrayIndex(option.hidden,'bzcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bzcs==null?"":row.bzcs)+'>'+(row.bzcs==null?"":row.bzcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sxsj')>-1){
	            clumns.push({field : 'sxsj',title : '生效时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sxsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sxsj==null?"":row.sxsj)+'>'+(row.sxsj==null?"":row.sxsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xgry')>-1){
	            clumns.push({field : 'xgry',title : '相关人员',width : 200,hidden:util.getArrayIndex(option.hidden,'xgry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xgry==null?"":row.xgry)+'>'+(row.xgry==null?"":row.xgry)+'</span>'}});
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