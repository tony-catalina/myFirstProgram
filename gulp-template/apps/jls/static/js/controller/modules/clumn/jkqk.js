/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jkqk 数据列表
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
	        if(util.getArrayIndex(option.clumns,'gcbh')>-1){
	            clumns.push({field : 'gcbh',title : '过程编号',width : 200,hidden:util.getArrayIndex(option.hidden,'gcbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gcbh==null?"":row.gcbh)+'>'+(row.gcbh==null?"":row.gcbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sg')>-1){
	            clumns.push({field : 'sg',title : '身高（厘米）',width : 200,hidden:util.getArrayIndex(option.hidden,'sg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sg==null?"":row.sg)+'>'+(row.sg==null?"":row.sg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tz')>-1){
	            clumns.push({field : 'tz',title : '体重（公斤）',width : 200,hidden:util.getArrayIndex(option.hidden,'tz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tz==null?"":row.tz)+'>'+(row.tz==null?"":row.tz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zc')>-1){
	            clumns.push({field : 'zc',title : '足长（码）',width : 200,hidden:util.getArrayIndex(option.hidden,'zc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zc==null?"":row.zc)+'>'+(row.zc==null?"":row.zc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xl')>-1){
	            clumns.push({field : 'xl',title : '心率',width : 200,hidden:util.getArrayIndex(option.hidden,'xl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xl==null?"":row.xl)+'>'+(row.xl==null?"":row.xl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xy')>-1){
	            clumns.push({field : 'xy',title : '血压',width : 200,hidden:util.getArrayIndex(option.hidden,'xy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xy==null?"":row.xy)+'>'+(row.xy==null?"":row.xy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zq')>-1){
	            clumns.push({field : 'zq',title : '脏器',width : 200,hidden:util.getArrayIndex(option.hidden,'zq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zq==null?"":row.zq)+'>'+(row.zq==null?"":row.zq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcr')>-1){
	            clumns.push({field : 'jcr',title : '检查人',width : 200,hidden:util.getArrayIndex(option.hidden,'jcr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcr==null?"":row.jcr)+'>'+(row.jcr==null?"":row.jcr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbtsbj')>-1){
	            clumns.push({field : 'tbtsbj',title : '体表特殊标记',width : 200,hidden:util.getArrayIndex(option.hidden,'tbtsbj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbtsbj==null?"":row.tbtsbj)+'>'+(row.tbtsbj==null?"":row.tbtsbj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'crb')>-1){
	            clumns.push({field : 'crb',title : '传染病',width : 200,hidden:util.getArrayIndex(option.hidden,'crb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.crb==null?"":row.crb)+'>'+(row.crb==null?"":row.crb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'brbs')>-1){
	            clumns.push({field : 'brbs',title : '本人病史',width : 200,hidden:util.getArrayIndex(option.hidden,'brbs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.brbs==null?"":row.brbs)+'>'+(row.brbs==null?"":row.brbs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jtbs')>-1){
	            clumns.push({field : 'jtbs',title : '家庭病史',width : 200,hidden:util.getArrayIndex(option.hidden,'jtbs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jtbs==null?"":row.jtbs)+'>'+(row.jtbs==null?"":row.jtbs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sss')>-1){
	            clumns.push({field : 'sss',title : '手术史',width : 200,hidden:util.getArrayIndex(option.hidden,'sss')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sss==null?"":row.sss)+'>'+(row.sss==null?"":row.sss)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wss')>-1){
	            clumns.push({field : 'wss',title : '外伤史',width : 200,hidden:util.getArrayIndex(option.hidden,'wss')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wss==null?"":row.wss)+'>'+(row.wss==null?"":row.wss)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zszz')>-1){
	            clumns.push({field : 'zszz',title : '自述症状',width : 200,hidden:util.getArrayIndex(option.hidden,'zszz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zszz==null?"":row.zszz)+'>'+(row.zszz==null?"":row.zszz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sbq')>-1){
	            clumns.push({field : 'sbq',title : '伤病情',width : 200,hidden:util.getArrayIndex(option.hidden,'sbq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sbq==null?"":row.sbq)+'>'+(row.sbq==null?"":row.sbq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jkzk')>-1){
	            clumns.push({field : 'jkzk',title : '健康状况',width : 200,hidden:util.getArrayIndex(option.hidden,'jkzk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jkzk==null?"":row.jkzk)+'>'+(row.jkzk==null?"":row.jkzk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcrq')>-1){
	            clumns.push({field : 'jcrq',title : '检查日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jcrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcrq==null?"":row.jcrq)+'>'+(row.jcrq==null?"":row.jcrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ysyj')>-1){
	            clumns.push({field : 'ysyj',title : '医生意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ysyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysyj==null?"":row.ysyj)+'>'+(row.ysyj==null?"":row.ysyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ysqm')>-1){
	            clumns.push({field : 'ysqm',title : '医生签名',width : 200,hidden:util.getArrayIndex(option.hidden,'ysqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysqm==null?"":row.ysqm)+'>'+(row.ysqm==null?"":row.ysqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qmrq')>-1){
	            clumns.push({field : 'qmrq',title : '签名日期',width : 200,hidden:util.getArrayIndex(option.hidden,'qmrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qmrq==null?"":row.qmrq)+'>'+(row.qmrq==null?"":row.qmrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sjzljsbz')>-1){
	            clumns.push({field : 'sjzljsbz',title : '数据质量及时标志',width : 200,hidden:util.getArrayIndex(option.hidden,'sjzljsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjzljsbz==null?"":row.sjzljsbz)+'>'+(row.sjzljsbz==null?"":row.sjzljsbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scbz')>-1){
	            clumns.push({field : 'scbz',title : '上传标志',width : 200,hidden:util.getArrayIndex(option.hidden,'scbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scbz==null?"":row.scbz)+'>'+(row.scbz==null?"":row.scbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'operator')>-1){
	            clumns.push({field : 'operator',title : '操作人',width : 200,hidden:util.getArrayIndex(option.hidden,'operator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.operator==null?"":row.operator)+'>'+(row.operator==null?"":row.operator)+'</span>'}});
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