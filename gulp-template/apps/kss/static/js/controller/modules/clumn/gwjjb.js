/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Gwjjb 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jbgw')>-1){
	            clumns.push({field : 'jbgw',title : '交班岗位',width : 200,hidden:util.getArrayIndex(option.hidden,'jbgw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbgw==null?"":row.jbgw)+'>'+(row.jbgw==null?"":row.jbgw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbry')>-1){
	            clumns.push({field : 'jbry',title : '交班人员',width : 200,hidden:util.getArrayIndex(option.hidden,'jbry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbry==null?"":row.jbry)+'>'+(row.jbry==null?"":row.jbry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbsj')>-1){
	            clumns.push({field : 'jbsj',title : '交班时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jbsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbsj==null?"":row.jbsj)+'>'+(row.jbsj==null?"":row.jbsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gzjl')>-1){
	            clumns.push({field : 'gzjl',title : '工作记录',width : 200,hidden:util.getArrayIndex(option.hidden,'gzjl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gzjl==null?"":row.gzjl)+'>'+(row.gzjl==null?"":row.gzjl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zysx')>-1){
	            clumns.push({field : 'zysx',title : '注意事项',width : 200,hidden:util.getArrayIndex(option.hidden,'zysx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zysx==null?"":row.zysx)+'>'+(row.zysx==null?"":row.zysx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyj')>-1){
	            clumns.push({field : 'ldyj',title : '交班领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyj==null?"":row.ldyj)+'>'+(row.ldyj==null?"":row.ldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldps')>-1){
	            clumns.push({field : 'ldps',title : '交班领导批示',width : 200,hidden:util.getArrayIndex(option.hidden,'ldps')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldps==null?"":row.ldps)+'>'+(row.ldps==null?"":row.ldps)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldqm')>-1){
	            clumns.push({field : 'ldqm',title : '交班领导签名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldqm==null?"":row.ldqm)+'>'+(row.ldqm==null?"":row.ldqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qrsj')>-1){
	            clumns.push({field : 'qrsj',title : '交班领导确认时间',width : 200,hidden:util.getArrayIndex(option.hidden,'qrsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qrsj==null?"":row.qrsj)+'>'+(row.qrsj==null?"":row.qrsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjbgw')>-1){
	            clumns.push({field : 'jjbgw',title : '接班岗位',width : 200,hidden:util.getArrayIndex(option.hidden,'jjbgw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjbgw==null?"":row.jjbgw)+'>'+(row.jjbgw==null?"":row.jjbgw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjbry')>-1){
	            clumns.push({field : 'jjbry',title : '接班人员',width : 200,hidden:util.getArrayIndex(option.hidden,'jjbry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjbry==null?"":row.jjbry)+'>'+(row.jjbry==null?"":row.jjbry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjbsj')>-1){
	            clumns.push({field : 'jjbsj',title : '接班时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jjbsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjbsj==null?"":row.jjbsj)+'>'+(row.jjbsj==null?"":row.jjbsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jgzjl')>-1){
	            clumns.push({field : 'jgzjl',title : '接班工作记录',width : 200,hidden:util.getArrayIndex(option.hidden,'jgzjl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jgzjl==null?"":row.jgzjl)+'>'+(row.jgzjl==null?"":row.jgzjl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzysx')>-1){
	            clumns.push({field : 'jzysx',title : '接班注意事项',width : 200,hidden:util.getArrayIndex(option.hidden,'jzysx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzysx==null?"":row.jzysx)+'>'+(row.jzysx==null?"":row.jzysx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbldyj')>-1){
	            clumns.push({field : 'jbldyj',title : '接班领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'jbldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbldyj==null?"":row.jbldyj)+'>'+(row.jbldyj==null?"":row.jbldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbldps')>-1){
	            clumns.push({field : 'jbldps',title : '接班领导批示',width : 200,hidden:util.getArrayIndex(option.hidden,'jbldps')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbldps==null?"":row.jbldps)+'>'+(row.jbldps==null?"":row.jbldps)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbldqm')>-1){
	            clumns.push({field : 'jbldqm',title : '接班领导签名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbldqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbldqm==null?"":row.jbldqm)+'>'+(row.jbldqm==null?"":row.jbldqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbqrsj')>-1){
	            clumns.push({field : 'jbqrsj',title : '接班领导确认时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jbqrsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbqrsj==null?"":row.jbqrsj)+'>'+(row.jbqrsj==null?"":row.jbqrsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'jh')>-1){
	            clumns.push({field : 'jh',title : '警号',width : 200,hidden:util.getArrayIndex(option.hidden,'jh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jh==null?"":row.jh)+'>'+(row.jh==null?"":row.jh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'flag')>-1){
	            clumns.push({field : 'flag',title : '交接班标志位',width : 200,hidden:util.getArrayIndex(option.hidden,'flag')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.flag==null?"":row.flag)+'>'+(row.flag==null?"":row.flag)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});