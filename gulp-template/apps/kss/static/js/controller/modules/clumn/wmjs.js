/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Wmjs 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jsh')>-1){
	            clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ly')>-1){
	            clumns.push({field : 'ly',title : '设置/撤销理由',width : 200,hidden:util.getArrayIndex(option.hidden,'ly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ly==null?"":row.ly)+'>'+(row.ly==null?"":row.ly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djrq')>-1){
	            clumns.push({field : 'djrq',title : '登记日期',width : 200,hidden:util.getArrayIndex(option.hidden,'djrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djrq==null?"":row.djrq)+'>'+(row.djrq==null?"":row.djrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rs')>-1){
	            clumns.push({field : 'rs',title : '人数',width : 200,hidden:util.getArrayIndex(option.hidden,'rs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rs==null?"":row.rs)+'>'+(row.rs==null?"":row.rs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzyj')>-1){
	            clumns.push({field : 'jzyj',title : '警组意见',width : 200,hidden:util.getArrayIndex(option.hidden,'jzyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzyj==null?"":row.jzyj)+'>'+(row.jzyj==null?"":row.jzyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bllx')>-1){
	            clumns.push({field : 'bllx',title : '办理类型',width : 200,hidden:util.getArrayIndex(option.hidden,'bllx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bllx==null?"":row.bllx)+'>'+(row.bllx==null?"":row.bllx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bllxString')>-1){
				clumns.push({field : 'bllxString',title : '办理类型',width : 200,hidden:util.getArrayIndex(option.hidden,'bllxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bllxString==null?"":row.bllxString)+'>'+(row.bllxString==null?"":row.bllxString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'blr')>-1){
	            clumns.push({field : 'blr',title : '办理人',width : 200,hidden:util.getArrayIndex(option.hidden,'blr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blr==null?"":row.blr)+'>'+(row.blr==null?"":row.blr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blrq')>-1){
	            clumns.push({field : 'blrq',title : '办理日期',width : 200,hidden:util.getArrayIndex(option.hidden,'blrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blrq==null?"":row.blrq)+'>'+(row.blrq==null?"":row.blrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldxm')>-1){
	            clumns.push({field : 'ldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldxm==null?"":row.ldxm)+'>'+(row.ldxm==null?"":row.ldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyj')>-1){
	            clumns.push({field : 'ldyj',title : '领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyj==null?"":row.ldyj)+'>'+(row.ldyj==null?"":row.ldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldpssj')>-1){
	            clumns.push({field : 'ldpssj',title : '领导批示时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpssj==null?"":row.ldpssj)+'>'+(row.ldpssj==null?"":row.ldpssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'psbz')>-1){
	            clumns.push({field : 'psbz',title : '批示标识',width : 200,hidden:util.getArrayIndex(option.hidden,'psbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.psbz==null?"":row.psbz)+'>'+(row.psbz==null?"":row.psbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '存在状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'pastable')>-1){
	            clumns.push({field : 'pastable',title : '是否有效',width : 200,hidden:util.getArrayIndex(option.hidden,'pastable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pastable==null?"":row.pastable)+'>'+(row.pastable==null?"":row.pastable)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'process_jsh')>-1){
				clumns.push({field : 'process_jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'process_jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.jsh==null?"":row.ldpsxx.jsh)+'>'+(row.ldpsxx.jsh==null?"":row.ldpsxx.jsh)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'process_sqrq')>-1){
				clumns.push({field : 'process_sqrq',title : '发送时间',width : 200,hidden:util.getArrayIndex(option.hidden,'process_sqrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.sqrq==null?"":row.ldpsxx.sqrq)+'>'+(row.ldpsxx.sqrq==null?"":row.ldpsxx.sqrq)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'process_sqr')>-1){
				clumns.push({field : 'process_sqr',title : '发送人姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'process_sqr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.sqr==null?"":row.ldpsxx.sqr)+'>'+(row.ldpsxx.sqr==null?"":row.ldpsxx.sqr)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'process_sqyy')>-1){
				clumns.push({field : 'process_sqyy',title : '申请原因',width : 200,hidden:util.getArrayIndex(option.hidden,'process_sqyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.sqyy==null?"":row.ldpsxx.sqyy)+'>'+(row.ldpsxx.sqyy==null?"":row.ldpsxx.sqyy)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'process_sqyyString')>-1){
                clumns.push({field : 'process_sqyyString',title : '申请原因',width : 200,hidden:util.getArrayIndex(option.hidden,'process_sqyyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.sqyy==null?"":row.ldpsxx.sqyy)+'>'+(row.ldpsxx.sqyy==null?"":row.ldpsxx.sqyy)+'</span>'}});
            }
	        
	        return clumns;
	    };
	    return main;
	});
