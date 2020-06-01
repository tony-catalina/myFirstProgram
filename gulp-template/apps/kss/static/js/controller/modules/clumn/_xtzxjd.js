/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Xtzxjd 数据列表
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
	        if(util.getArrayIndex(option.clumns,'ajmc')>-1){
	            clumns.push({field : 'ajmc',title : '案件名称',width : 200,hidden:util.getArrayIndex(option.hidden,'ajmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ajmc==null?"":row.ajmc)+'>'+(row.ajmc==null?"":row.ajmc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gaajbh')>-1){
	            clumns.push({field : 'gaajbh',title : '公安案件编号',width : 200,hidden:util.getArrayIndex(option.hidden,'gaajbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gaajbh==null?"":row.gaajbh)+'>'+(row.gaajbh==null?"":row.gaajbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ysdwmc')>-1){
	            clumns.push({field : 'ysdwmc',title : '移送单位名称',width : 200,hidden:util.getArrayIndex(option.hidden,'ysdwmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysdwmc==null?"":row.ysdwmc)+'>'+(row.ysdwmc==null?"":row.ysdwmc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsdwmc')>-1){
	            clumns.push({field : 'jsdwmc',title : '接收单位名称',width : 200,hidden:util.getArrayIndex(option.hidden,'jsdwmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsdwmc==null?"":row.jsdwmc)+'>'+(row.jsdwmc==null?"":row.jsdwmc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csjsjgsj')>-1){
	            clumns.push({field : 'csjsjgsj',title : '抄送接收机关上级单位名称',width : 200,hidden:util.getArrayIndex(option.hidden,'csjsjgsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csjsjgsj==null?"":row.csjsjgsj)+'>'+(row.csjsjgsj==null?"":row.csjsjgsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jdrq')>-1){
	            clumns.push({field : 'jdrq',title : '监督日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jdrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jdrq==null?"":row.jdrq)+'>'+(row.jdrq==null?"":row.jdrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wfqx')>-1){
	            clumns.push({field : 'wfqx',title : '违法情形',width : 200,hidden:util.getArrayIndex(option.hidden,'wfqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wfqx==null?"":row.wfqx)+'>'+(row.wfqx==null?"":row.wfqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfyzwf')>-1){
	            clumns.push({field : 'sfyzwf',title : '是否严重违法',width : 200,hidden:util.getArrayIndex(option.hidden,'sfyzwf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfyzwf==null?"":row.sfyzwf)+'>'+(row.sfyzwf==null?"":row.sfyzwf)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wfbjcdw')>-1){
	            clumns.push({field : 'wfbjcdw',title : '违法/被检查单位名称',width : 200,hidden:util.getArrayIndex(option.hidden,'wfbjcdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wfbjcdw==null?"":row.wfbjcdw)+'>'+(row.wfbjcdw==null?"":row.wfbjcdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jdwslx')>-1){
	            clumns.push({field : 'jdwslx',title : '监督文书类型',width : 200,hidden:util.getArrayIndex(option.hidden,'jdwslx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jdwslx==null?"":row.jdwslx)+'>'+(row.jdwslx==null?"":row.jdwslx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fgyj')>-1){
	            clumns.push({field : 'fgyj',title : '反馈意见',width : 200,hidden:util.getArrayIndex(option.hidden,'fgyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fgyj==null?"":row.fgyj)+'>'+(row.fgyj==null?"":row.fgyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fkrq')>-1){
	            clumns.push({field : 'fkrq',title : '反馈日期',width : 200,hidden:util.getArrayIndex(option.hidden,'fkrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fkrq==null?"":row.fkrq)+'>'+(row.fkrq==null?"":row.fkrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fsr')>-1){
	            clumns.push({field : 'fsr',title : '发送人',width : 200,hidden:util.getArrayIndex(option.hidden,'fsr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fsr==null?"":row.fsr)+'>'+(row.fsr==null?"":row.fsr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fssj')>-1){
	            clumns.push({field : 'fssj',title : '发送时间',width : 200,hidden:util.getArrayIndex(option.hidden,'fssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fssj==null?"":row.fssj)+'>'+(row.fssj==null?"":row.fssj)+'</span>'}});
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