/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Swdj 数据列表
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
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swsj')>-1){
	            clumns.push({field : 'swsj',title : '死亡时间',width : 200,hidden:util.getArrayIndex(option.hidden,'swsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swsj==null?"":row.swsj)+'>'+(row.swsj==null?"":row.swsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swdd')>-1){
	            clumns.push({field : 'swdd',title : '死亡地点',width : 200,hidden:util.getArrayIndex(option.hidden,'swdd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swdd==null?"":row.swdd)+'>'+(row.swdd==null?"":row.swdd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swyy')>-1){
	            clumns.push({field : 'swyy',title : '死亡原因',width : 200,hidden:util.getArrayIndex(option.hidden,'swyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swyy==null?"":row.swyy)+'>'+(row.swyy==null?"":row.swyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbr')>-1){
	            clumns.push({field : 'jbr',title : '经办人',width : 200,hidden:util.getArrayIndex(option.hidden,'jbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbr==null?"":row.jbr)+'>'+(row.jbr==null?"":row.jbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbrq')>-1){
	            clumns.push({field : 'jbrq',title : '经办日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbrq==null?"":row.jbrq)+'>'+(row.jbrq==null?"":row.jbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swjdjl')>-1){
	            clumns.push({field : 'swjdjl',title : '死亡鉴定结论',width : 200,hidden:util.getArrayIndex(option.hidden,'swjdjl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swjdjl==null?"":row.swjdjl)+'>'+(row.swjdjl==null?"":row.swjdjl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swjddw')>-1){
	            clumns.push({field : 'swjddw',title : '死亡鉴定单位',width : 200,hidden:util.getArrayIndex(option.hidden,'swjddw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swjddw==null?"":row.swjddw)+'>'+(row.swjddw==null?"":row.swjddw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'stclqk')>-1){
	            clumns.push({field : 'stclqk',title : '尸体处理情况',width : 200,hidden:util.getArrayIndex(option.hidden,'stclqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.stclqk==null?"":row.stclqk)+'>'+(row.stclqk==null?"":row.stclqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swtzr')>-1){
	            clumns.push({field : 'swtzr',title : '死亡通知人',width : 200,hidden:util.getArrayIndex(option.hidden,'swtzr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swtzr==null?"":row.swtzr)+'>'+(row.swtzr==null?"":row.swtzr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tzsj')>-1){
	            clumns.push({field : 'tzsj',title : '通知时间',width : 200,hidden:util.getArrayIndex(option.hidden,'tzsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tzsj==null?"":row.tzsj)+'>'+(row.tzsj==null?"":row.tzsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'flwsh')>-1){
	            clumns.push({field : 'flwsh',title : '法律文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'flwsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.flwsh==null?"":row.flwsh)+'>'+(row.flwsh==null?"":row.flwsh)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'sjzljsbz')>-1){
	            clumns.push({field : 'sjzljsbz',title : '及时标记',width : 200,hidden:util.getArrayIndex(option.hidden,'sjzljsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjzljsbz==null?"":row.sjzljsbz)+'>'+(row.sjzljsbz==null?"":row.sjzljsbz)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'sfjd')>-1){
	            clumns.push({field : 'sfjd',title : '是否鉴定',width : 200,hidden:util.getArrayIndex(option.hidden,'sfjd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfjd==null?"":row.sfjd)+'>'+(row.sfjd==null?"":row.sfjd)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});