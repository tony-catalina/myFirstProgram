/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * KhLd 数据列表
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
	        if(util.getArrayIndex(option.clumns,'bllx')>-1){
	            clumns.push({field : 'bllx',title : '办理类型',width : 200,hidden:util.getArrayIndex(option.hidden,'bllx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bllx==null?"":row.bllx)+'>'+(row.bllx==null?"":row.bllx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jqzxjsh')>-1){
	            clumns.push({field : 'jqzxjsh',title : '监区秩序_拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jqzxjsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jqzxjsh==null?"":row.jqzxjsh)+'>'+(row.jqzxjsh==null?"":row.jqzxjsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jqzxjcsj')>-1){
	            clumns.push({field : 'jqzxjcsj',title : '监区秩序_检查时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jqzxjcsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jqzxjcsj==null?"":row.jqzxjcsj)+'>'+(row.jqzxjcsj==null?"":row.jqzxjcsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jqzxjcfs')>-1){
	            clumns.push({field : 'jqzxjcfs',title : '监区秩序_检查方式',width : 200,hidden:util.getArrayIndex(option.hidden,'jqzxjcfs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jqzxjcfs==null?"":row.jqzxjcfs)+'>'+(row.jqzxjcfs==null?"":row.jqzxjcfs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jqzxjcqk')>-1){
	            clumns.push({field : 'jqzxjcqk',title : '监区秩序_检查情况',width : 200,hidden:util.getArrayIndex(option.hidden,'jqzxjcqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jqzxjcqk==null?"":row.jqzxjcqk)+'>'+(row.jqzxjcqk==null?"":row.jqzxjcqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mjzfjcnr')>-1){
	            clumns.push({field : 'mjzfjcnr',title : '民警执法_检查内容',width : 200,hidden:util.getArrayIndex(option.hidden,'mjzfjcnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mjzfjcnr==null?"":row.mjzfjcnr)+'>'+(row.mjzfjcnr==null?"":row.mjzfjcnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mjzfsjmj')>-1){
	            clumns.push({field : 'mjzfsjmj',title : '民警执法_涉及民警',width : 200,hidden:util.getArrayIndex(option.hidden,'mjzfsjmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mjzfsjmj==null?"":row.mjzfsjmj)+'>'+(row.mjzfsjmj==null?"":row.mjzfsjmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mjzfdd')>-1){
	            clumns.push({field : 'mjzfdd',title : '民警执法_地点',width : 200,hidden:util.getArrayIndex(option.hidden,'mjzfdd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mjzfdd==null?"":row.mjzfdd)+'>'+(row.mjzfdd==null?"":row.mjzfdd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mjzfjcqk')>-1){
	            clumns.push({field : 'mjzfjcqk',title : '民警执法_检查情况',width : 200,hidden:util.getArrayIndex(option.hidden,'mjzfjcqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mjzfjcqk==null?"":row.mjzfjcqk)+'>'+(row.mjzfjcqk==null?"":row.mjzfjcqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mjzfnrkh')>-1){
	            clumns.push({field : 'mjzfnrkh',title : '民警执法_是否纳入考核',width : 200,hidden:util.getArrayIndex(option.hidden,'mjzfnrkh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mjzfnrkh==null?"":row.mjzfnrkh)+'>'+(row.mjzfnrkh==null?"":row.mjzfnrkh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mjzfkl')>-1){
	            clumns.push({field : 'mjzfkl',title : '民警执法_是否刻录',width : 200,hidden:util.getArrayIndex(option.hidden,'mjzfkl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mjzfkl==null?"":row.mjzfkl)+'>'+(row.mjzfkl==null?"":row.mjzfkl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mjzfkssj')>-1){
	            clumns.push({field : 'mjzfkssj',title : '民警执法_刻录开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'mjzfkssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mjzfkssj==null?"":row.mjzfkssj)+'>'+(row.mjzfkssj==null?"":row.mjzfkssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mjzfjssj')>-1){
	            clumns.push({field : 'mjzfjssj',title : '民警执法_刻录结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'mjzfjssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mjzfjssj==null?"":row.mjzfjssj)+'>'+(row.mjzfjssj==null?"":row.mjzfjssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xgghjqh')>-1){
	            clumns.push({field : 'xgghjqh',title : '相关工作_监区号',width : 200,hidden:util.getArrayIndex(option.hidden,'xgghjqh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xgghjqh==null?"":row.xgghjqh)+'>'+(row.xgghjqh==null?"":row.xgghjqh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xgghyqqk')>-1){
	            clumns.push({field : 'xgghyqqk',title : '相关工作_要求情况',width : 200,hidden:util.getArrayIndex(option.hidden,'xgghyqqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xgghyqqk==null?"":row.xgghyqqk)+'>'+(row.xgghyqqk==null?"":row.xgghyqqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xgghyqnr')>-1){
	            clumns.push({field : 'xgghyqnr',title : '相关工作_要求内容',width : 200,hidden:util.getArrayIndex(option.hidden,'xgghyqnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xgghyqnr==null?"":row.xgghyqnr)+'>'+(row.xgghyqnr==null?"":row.xgghyqnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xgghyqfk')>-1){
	            clumns.push({field : 'xgghyqfk',title : '相关工作_要求反馈',width : 200,hidden:util.getArrayIndex(option.hidden,'xgghyqfk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xgghyqfk==null?"":row.xgghyqfk)+'>'+(row.xgghyqfk==null?"":row.xgghyqfk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xgghfkr')>-1){
	            clumns.push({field : 'xgghfkr',title : '相关工作_反馈人',width : 200,hidden:util.getArrayIndex(option.hidden,'xgghfkr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xgghfkr==null?"":row.xgghfkr)+'>'+(row.xgghfkr==null?"":row.xgghfkr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xgghfksj')>-1){
	            clumns.push({field : 'xgghfksj',title : '相关工作_反馈时间',width : 200,hidden:util.getArrayIndex(option.hidden,'xgghfksj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xgghfksj==null?"":row.xgghfksj)+'>'+(row.xgghfksj==null?"":row.xgghfksj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xgghfkqk')>-1){
	            clumns.push({field : 'xgghfkqk',title : '相关工作_反馈情况',width : 200,hidden:util.getArrayIndex(option.hidden,'xgghfkqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xgghfkqk==null?"":row.xgghfkqk)+'>'+(row.xgghfkqk==null?"":row.xgghfkqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsnwjsh')>-1){
	            clumns.push({field : 'jsnwjsh',title : '拘室内务_拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsnwjsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsnwjsh==null?"":row.jsnwjsh)+'>'+(row.jsnwjsh==null?"":row.jsnwjsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsnwjcnr')>-1){
	            clumns.push({field : 'jsnwjcnr',title : '拘室内务_检查内容',width : 200,hidden:util.getArrayIndex(option.hidden,'jsnwjcnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsnwjcnr==null?"":row.jsnwjcnr)+'>'+(row.jsnwjcnr==null?"":row.jsnwjcnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsnwjcsj')>-1){
	            clumns.push({field : 'jsnwjcsj',title : '拘室内务_检查时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jsnwjcsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsnwjcsj==null?"":row.jsnwjcsj)+'>'+(row.jsnwjcsj==null?"":row.jsnwjcsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsnwztpj')>-1){
	            clumns.push({field : 'jsnwztpj',title : '拘室内务_总体评价',width : 200,hidden:util.getArrayIndex(option.hidden,'jsnwztpj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsnwztpj==null?"":row.jsnwztpj)+'>'+(row.jsnwztpj==null?"":row.jsnwztpj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsnwbz')>-1){
	            clumns.push({field : 'jsnwbz',title : '拘室内务_备注',width : 200,hidden:util.getArrayIndex(option.hidden,'jsnwbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsnwbz==null?"":row.jsnwbz)+'>'+(row.jsnwbz==null?"":row.jsnwbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'end')>-1){
	            clumns.push({field : 'end',title : 'END',width : 200,hidden:util.getArrayIndex(option.hidden,'end')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.end==null?"":row.end)+'>'+(row.end==null?"":row.end)+'</span>'}});
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