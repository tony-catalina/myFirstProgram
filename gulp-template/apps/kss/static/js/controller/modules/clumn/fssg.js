/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Fssg 数据列表
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
	        if(util.getArrayIndex(option.clumns,'qklx')>-1){
	            clumns.push({field : 'qklx',title : '情况类型',width : 200,hidden:util.getArrayIndex(option.hidden,'qklx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qklx==null?"":row.qklx)+'>'+(row.qklx==null?"":row.qklx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sglx')>-1){
	            clumns.push({field : 'sglx',title : '事故类型',width : 200,hidden:util.getArrayIndex(option.hidden,'sglx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sglx==null?"":row.sglx)+'>'+(row.sglx==null?"":row.sglx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sglxString')>-1){
                clumns.push({field : 'sglxString',title : '事故类型',width : 200,hidden:util.getArrayIndex(option.hidden,'sglxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sglxString==null?"":row.sglxString)+'>'+(row.sglxString==null?"":row.sglxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'sgxz')>-1){
	            clumns.push({field : 'sgxz',title : '事故性质',width : 200,hidden:util.getArrayIndex(option.hidden,'sgxz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sgxz==null?"":row.sgxz)+'>'+(row.sgxz==null?"":row.sgxz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sgxzString')>-1){
                clumns.push({field : 'sgxzString',title : '事故性质',width : 200,hidden:util.getArrayIndex(option.hidden,'sgxzString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sgxzString==null?"":row.sgxzString)+'>'+(row.sgxzString==null?"":row.sgxzString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'sjlx')>-1){
	            clumns.push({field : 'sjlx',title : '事件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'sjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjlx==null?"":row.sjlx)+'>'+(row.sjlx==null?"":row.sjlx)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'sjlxString')>-1){
                clumns.push({field : 'sjlxString',title : '事件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'sjlxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjlxString==null?"":row.sjlxString)+'>'+(row.sjlxString==null?"":row.sjlxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'sgsj')>-1){
	            clumns.push({field : 'sgsj',title : '事故时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sgsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sgsj==null?"":row.sgsj)+'>'+(row.sgsj==null?"":row.sgsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sgdd')>-1){
	            clumns.push({field : 'sgdd',title : '事故地点',width : 200,hidden:util.getArrayIndex(option.hidden,'sgdd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sgdd==null?"":row.sgdd)+'>'+(row.sgdd==null?"":row.sgdd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sjry')>-1){
	            clumns.push({field : 'sjry',title : '涉及人员',width : 200,hidden:util.getArrayIndex(option.hidden,'sjry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjry==null?"":row.sjry)+'>'+(row.sjry==null?"":row.sjry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jyqk')>-1){
	            clumns.push({field : 'jyqk',title : '简要情况',width : 200,hidden:util.getArrayIndex(option.hidden,'jyqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jyqk==null?"":row.jyqk)+'>'+(row.jyqk==null?"":row.jyqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cljg')>-1){
	            clumns.push({field : 'cljg',title : '处理结果',width : 200,hidden:util.getArrayIndex(option.hidden,'cljg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cljg==null?"":row.cljg)+'>'+(row.cljg==null?"":row.cljg)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'sgrs')>-1){
	            clumns.push({field : 'sgrs',title : '事故人数',width : 200,hidden:util.getArrayIndex(option.hidden,'sgrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sgrs==null?"":row.sgrs)+'>'+(row.sgrs==null?"":row.sgrs)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});