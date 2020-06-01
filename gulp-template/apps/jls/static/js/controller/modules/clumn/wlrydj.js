/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Wlrydj 数据列表
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
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'uuid')>-1){
	            clumns.push({field : 'uuid',title : '外来人员相关信息UUID',width : 200,hidden:util.getArrayIndex(option.hidden,'uuid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.uuid==null?"":row.uuid)+'>'+(row.uuid==null?"":row.uuid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lssy')>-1){
	            clumns.push({field : 'lssy',title : '来所事由',width : 200,hidden:util.getArrayIndex(option.hidden,'lssy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lssy==null?"":row.lssy)+'>'+(row.lssy==null?"":row.lssy)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'lssyString')>-1){
	            clumns.push({field : 'lssyString',title : '来所事由',width : 200,hidden:util.getArrayIndex(option.hidden,'lssyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lssyString==null?"":row.lssyString)+'>'+(row.lssyString==null?"":row.lssyString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jtsy')>-1){
	            clumns.push({field : 'jtsy',title : '具体事由',width : 200,hidden:util.getArrayIndex(option.hidden,'jtsy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jtsy==null?"":row.jtsy)+'>'+(row.jtsy==null?"":row.jtsy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lssj')>-1){
	            clumns.push({field : 'lssj',title : '来所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lssj==null?"":row.lssj)+'>'+(row.lssj==null?"":row.lssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'drmj')>-1){
	            clumns.push({field : 'drmj',title : '带入民警',width : 200,hidden:util.getArrayIndex(option.hidden,'drmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.drmj==null?"":row.drmj)+'>'+(row.drmj==null?"":row.drmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'drsj')>-1){
	            clumns.push({field : 'drsj',title : '带入时间',width : 200,hidden:util.getArrayIndex(option.hidden,'drsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.drsj==null?"":row.drsj)+'>'+(row.drsj==null?"":row.drsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dcmj')>-1){
	            clumns.push({field : 'dcmj',title : '带出民警',width : 200,hidden:util.getArrayIndex(option.hidden,'dcmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dcmj==null?"":row.dcmj)+'>'+(row.dcmj==null?"":row.dcmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dcsj')>-1){
	            clumns.push({field : 'dcsj',title : '带出时间',width : 200,hidden:util.getArrayIndex(option.hidden,'dcsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dcsj==null?"":row.dcsj)+'>'+(row.dcsj==null?"":row.dcsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sxrs')>-1){
	            clumns.push({field : 'sxrs',title : '随行人数',width : 200,hidden:util.getArrayIndex(option.hidden,'sxrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sxrs==null?"":row.sxrs)+'>'+(row.sxrs==null?"":row.sxrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sxcls')>-1){
	            clumns.push({field : 'sxcls',title : '随行车辆数',width : 200,hidden:util.getArrayIndex(option.hidden,'sxcls')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sxcls==null?"":row.sxcls)+'>'+(row.sxcls==null?"":row.sxcls)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bfr')>-1){
	            clumns.push({field : 'bfr',title : '被访人',width : 200,hidden:util.getArrayIndex(option.hidden,'bfr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bfr==null?"":row.bfr)+'>'+(row.bfr==null?"":row.bfr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bfrbm')>-1){
	            clumns.push({field : 'bfrbm',title : '被访人部门',width : 200,hidden:util.getArrayIndex(option.hidden,'bfrbm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bfrbm==null?"":row.bfrbm)+'>'+(row.bfrbm==null?"":row.bfrbm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pclsh')>-1){
	            clumns.push({field : 'pclsh',title : '批次流水号',width : 200,hidden:util.getArrayIndex(option.hidden,'pclsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pclsh==null?"":row.pclsh)+'>'+(row.pclsh==null?"":row.pclsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lksj')>-1){
	            clumns.push({field : 'lksj',title : '离开时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lksj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lksj==null?"":row.lksj)+'>'+(row.lksj==null?"":row.lksj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lkqjywyc')>-1){
	            clumns.push({field : 'lkqjywyc',title : '离开期间有无异常',width : 200,hidden:util.getArrayIndex(option.hidden,'lkqjywyc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lkqjywyc==null?"":row.lkqjywyc)+'>'+(row.lkqjywyc==null?"":row.lkqjywyc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scbz')>-1){
	            clumns.push({field : 'scbz',title : '离开标志',width : 200,hidden:util.getArrayIndex(option.hidden,'scbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scbz==null?"":row.scbz)+'>'+(row.scbz==null?"":row.scbz)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'sfls')>-1){
	            clumns.push({field : 'sfls',title : '是否离所',width : 200,hidden:util.getArrayIndex(option.hidden,'sfls')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfls==null?"":row.sfls)+'>'+(row.sfls==null?"":row.sfls)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'xxxx')>-1){
			    clumns.push({field : 'xxxx',title : '详细信息',width : 200,hidden:util.getArrayIndex(option.hidden,'xxxx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xxxxString==null?"":row.xxxx)+'>'+(row.ysyj==null?"":row.xxxx)+'</span>'}});
			}
	        
	        return clumns;
	    };
	    return main;
	});