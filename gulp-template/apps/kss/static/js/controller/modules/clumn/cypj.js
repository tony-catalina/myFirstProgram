/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Cypj 数据列表
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
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsh')>-1){
	            clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'pjrq')>-1){
				clumns.push({field : 'pjrq',title : '评鉴日期',width : 200,hidden:util.getArrayIndex(option.hidden,'pjrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pjrq==null?"":row.pjrq)+'>'+(row.pjrq==null?"":row.pjrq)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'khksrq')>-1){
				clumns.push({field : 'khksrq',title : '考核开始日期',width : 200,hidden:util.getArrayIndex(option.hidden,'khksrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.khksrq==null?"":row.khksrq)+'>'+(row.khksrq==null?"":row.khksrq)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'kpsx')>-1){
	            clumns.push({field : 'kpsx',title : '考评时限(天)',width : 200,hidden:util.getArrayIndex(option.hidden,'kpsx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kpsx==null?"":row.kpsx)+'>'+(row.kpsx==null?"":row.kpsx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ljkhzf')>-1){
	            clumns.push({field : 'ljkhzf',title : '累计考核总分',width : 200,hidden:util.getArrayIndex(option.hidden,'ljkhzf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ljkhzf==null?"":row.ljkhzf)+'>'+(row.ljkhzf==null?"":row.ljkhzf)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ljkhpjf')>-1){
	            clumns.push({field : 'ljkhpjf',title : '累计考核平均分',width : 200,hidden:util.getArrayIndex(option.hidden,'ljkhpjf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ljkhpjf==null?"":row.ljkhpjf)+'>'+(row.ljkhpjf==null?"":row.ljkhpjf)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zhpdyj')>-1){
	            clumns.push({field : 'zhpdyj',title : '综合评定意见',width : 300,hidden:util.getArrayIndex(option.hidden,'zhpdyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zhpdyjString==null?"":row.zhpdyjString)+'>'+(row.zhpdyjString==null?"":row.zhpdyjString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dqssjd')>-1){
	            clumns.push({field : 'dqssjd',title : '当前诉讼阶段',width : 200,hidden:util.getArrayIndex(option.hidden,'dqssjd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dqssjd==null?"":row.dqssjd)+'>'+(row.dqssjd==null?"":row.dqssjd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jkfjl')>-1){
	            clumns.push({field : 'jkfjl',title : '加扣分记录',width : 200,hidden:util.getArrayIndex(option.hidden,'jkfjl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jkfjl==null?"":row.jkfjl)+'>'+(row.jkfjl==null?"":row.jkfjl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '存在状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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