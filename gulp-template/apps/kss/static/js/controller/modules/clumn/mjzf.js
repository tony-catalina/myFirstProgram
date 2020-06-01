/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Mjzf 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jcnr')>-1){
	            clumns.push({field : 'jcnr',title : '检查内容',width : 200,hidden:util.getArrayIndex(option.hidden,'jcnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcnr==null?"":row.jcnr)+'>'+(row.jcnr==null?"":row.jcnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sjmj')>-1){
	            clumns.push({field : 'sjmj',title : '涉及民警',width : 200,hidden:util.getArrayIndex(option.hidden,'sjmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjmj==null?"":row.sjmj)+'>'+(row.sjmj==null?"":row.sjmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dd')>-1){
	            clumns.push({field : 'dd',title : '地点',width : 200,hidden:util.getArrayIndex(option.hidden,'dd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dd==null?"":row.dd)+'>'+(row.dd==null?"":row.dd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcqk')>-1){
	            clumns.push({field : 'jcqk',title : '检查情况',width : 200,hidden:util.getArrayIndex(option.hidden,'jcqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcqk==null?"":row.jcqk)+'>'+(row.jcqk==null?"":row.jcqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nrkh')>-1){
	            clumns.push({field : 'nrkh',title : '是否纳入考核',width : 200,hidden:util.getArrayIndex(option.hidden,'nrkh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nrkh==null?"":row.nrkh)+'>'+(row.nrkh==null?"":row.nrkh)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'nrkhString')>-1){
				clumns.push({field : 'nrkhString',title : '是否纳入考核',width : 200,hidden:util.getArrayIndex(option.hidden,'nrkhString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nrkhString==null?"":row.nrkhString)+'>'+(row.nrkhString==null?"":row.nrkhString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'kl')>-1){
	            clumns.push({field : 'kl',title : '是否刻录',width : 200,hidden:util.getArrayIndex(option.hidden,'kl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kl==null?"":row.kl)+'>'+(row.kl==null?"":row.kl)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'klString')>-1){
				clumns.push({field : 'klString',title : '是否刻录',width : 200,hidden:util.getArrayIndex(option.hidden,'klString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.klString==null?"":row.klString)+'>'+(row.klString==null?"":row.klString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'kssj')>-1){
	            clumns.push({field : 'kssj',title : '刻录开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'kssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kssj==null?"":row.kssj)+'>'+(row.kssj==null?"":row.kssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jssj')>-1){
	            clumns.push({field : 'jssj',title : '刻录结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jssj==null?"":row.jssj)+'>'+(row.jssj==null?"":row.jssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scbz')>-1){
	            clumns.push({field : 'scbz',title : '上传标志',width : 200,hidden:util.getArrayIndex(option.hidden,'scbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scbz==null?"":row.scbz)+'>'+(row.scbz==null?"":row.scbz)+'</span>'}});
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