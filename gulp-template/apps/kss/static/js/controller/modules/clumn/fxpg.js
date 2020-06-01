/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Fxpg 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jtbg')>-1){
	            clumns.push({field : 'jtbg',title : '家庭变故',width : 200,hidden:util.getArrayIndex(option.hidden,'jtbg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jtbg==null?"":row.jtbg)+'>'+(row.jtbg==null?"":row.jtbg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ffrz')>-1){
	            clumns.push({field : 'ffrz',title : '服法认罪',width : 200,hidden:util.getArrayIndex(option.hidden,'ffrz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ffrz==null?"":row.ffrz)+'>'+(row.ffrz==null?"":row.ffrz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ddcjdjl')>-1){
	            clumns.push({field : 'ddcjdjl',title : '曾经经历',width : 200,hidden:util.getArrayIndex(option.hidden,'ddcjdjl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ddcjdjl==null?"":row.ddcjdjl)+'>'+(row.ddcjdjl==null?"":row.ddcjdjl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dddhyzk')>-1){
	            clumns.push({field : 'dddhyzk',title : '当前婚姻状况',width : 200,hidden:util.getArrayIndex(option.hidden,'dddhyzk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dddhyzk==null?"":row.dddhyzk)+'>'+(row.dddhyzk==null?"":row.dddhyzk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dqjtqk')>-1){
	            clumns.push({field : 'dqjtqk',title : '当前家庭情况',width : 200,hidden:util.getArrayIndex(option.hidden,'dqjtqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dqjtqk==null?"":row.dqjtqk)+'>'+(row.dqjtqk==null?"":row.dqjtqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dqgqsjqk')>-1){
	            clumns.push({field : 'dqgqsjqk',title : '当前感情世界情况',width : 200,hidden:util.getArrayIndex(option.hidden,'dqgqsjqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dqgqsjqk==null?"":row.dqgqsjqk)+'>'+(row.dqgqsjqk==null?"":row.dqgqsjqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dqshsczk')>-1){
	            clumns.push({field : 'dqshsczk',title : '当前社会生存情况',width : 200,hidden:util.getArrayIndex(option.hidden,'dqshsczk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dqshsczk==null?"":row.dqshsczk)+'>'+(row.dqshsczk==null?"":row.dqshsczk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dxdqxtqk')>-1){
	            clumns.push({field : 'dxdqxtqk',title : '当前心态状况',width : 200,hidden:util.getArrayIndex(option.hidden,'dxdqxtqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dxdqxtqk==null?"":row.dxdqxtqk)+'>'+(row.dxdqxtqk==null?"":row.dxdqxtqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dxdqstzk')>-1){
	            clumns.push({field : 'dxdqstzk',title : '当前神态状况',width : 200,hidden:util.getArrayIndex(option.hidden,'dxdqstzk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dxdqstzk==null?"":row.dxdqstzk)+'>'+(row.dxdqstzk==null?"":row.dxdqstzk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ddzsjsycqk')>-1){
	            clumns.push({field : 'ddzsjsycqk',title : '自述监室异常情况',width : 200,hidden:util.getArrayIndex(option.hidden,'ddzsjsycqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ddzsjsycqk==null?"":row.ddzsjsycqk)+'>'+(row.ddzsjsycqk==null?"":row.ddzsjsycqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dazdxjkf')>-1){
	            clumns.push({field : 'dazdxjkf',title : '对案子消极看法',width : 200,hidden:util.getArrayIndex(option.hidden,'dazdxjkf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dazdxjkf==null?"":row.dazdxjkf)+'>'+(row.dazdxjkf==null?"":row.dazdxjkf)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sjyz')>-1){
	            clumns.push({field : 'sjyz',title : '身居要职',width : 200,hidden:util.getArrayIndex(option.hidden,'sjyz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjyz==null?"":row.sjyz)+'>'+(row.sjyz==null?"":row.sjyz)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'pglx')>-1){
	            clumns.push({field : 'pglx',title : '评估类型',width : 200,hidden:util.getArrayIndex(option.hidden,'pglx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pglx==null?"":row.pglx)+'>'+(row.pglx==null?"":row.pglx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yfxdj')>-1){
	            clumns.push({field : 'yfxdj',title : '原风险等级',width : 200,hidden:util.getArrayIndex(option.hidden,'yfxdj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yfxdj==null?"":row.yfxdj)+'>'+(row.yfxdj==null?"":row.yfxdj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xfxdj')>-1){
	            clumns.push({field : 'xfxdj',title : '现风险等级',width : 200,hidden:util.getArrayIndex(option.hidden,'xfxdj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xfxdj==null?"":row.xfxdj)+'>'+(row.xfxdj==null?"":row.xfxdj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yfxzb')>-1){
	            clumns.push({field : 'yfxzb',title : '原风险指标',width : 200,hidden:util.getArrayIndex(option.hidden,'yfxzb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yfxzb==null?"":row.yfxzb)+'>'+(row.yfxzb==null?"":row.yfxzb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xfxzb')>-1){
	            clumns.push({field : 'xfxzb',title : '现风险指标',width : 200,hidden:util.getArrayIndex(option.hidden,'xfxzb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xfxzb==null?"":row.xfxzb)+'>'+(row.xfxzb==null?"":row.xfxzb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pgsj')>-1){
	            clumns.push({field : 'pgsj',title : '评估时间',width : 200,hidden:util.getArrayIndex(option.hidden,'pgsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pgsj==null?"":row.pgsj)+'>'+(row.pgsj==null?"":row.pgsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ypgsj')>-1){
	            clumns.push({field : 'ypgsj',title : '原评估时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ypgsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypgsj==null?"":row.ypgsj)+'>'+(row.ypgsj==null?"":row.ypgsj)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});