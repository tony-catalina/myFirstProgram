/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jjjf 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jjr')>-1){
	            clumns.push({field : 'jjr',title : '检举人',width : 200,hidden:util.getArrayIndex(option.hidden,'jjr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjr==null?"":row.jjr)+'>'+(row.jjr==null?"":row.jjr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjrq')>-1){
	            clumns.push({field : 'jjrq',title : '检举日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jjrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjrq==null?"":row.jjrq)+'>'+(row.jjrq==null?"":row.jjrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djrq')>-1){
	            clumns.push({field : 'djrq',title : '登记日期',width : 200,hidden:util.getArrayIndex(option.hidden,'djrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djrq==null?"":row.djrq)+'>'+(row.djrq==null?"":row.djrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bjjr')>-1){
	            clumns.push({field : 'bjjr',title : '被检举人',width : 200,hidden:util.getArrayIndex(option.hidden,'bjjr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bjjr==null?"":row.bjjr)+'>'+(row.bjjr==null?"":row.bjjr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xyzm')>-1){
	            clumns.push({field : 'xyzm',title : '涉嫌罪名',width : 200,hidden:util.getArrayIndex(option.hidden,'xyzm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xyzm==null?"":row.xyzm)+'>'+(row.xyzm==null?"":row.xyzm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjtzss')>-1){
	            clumns.push({field : 'jjtzss',title : '检举犯罪事实',width : 200,hidden:util.getArrayIndex(option.hidden,'jjtzss')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjtzss==null?"":row.jjtzss)+'>'+(row.jjtzss==null?"":row.jjtzss)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czdw')>-1){
	            clumns.push({field : 'czdw',title : '查证单位',width : 200,hidden:util.getArrayIndex(option.hidden,'czdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czdw==null?"":row.czdw)+'>'+(row.czdw==null?"":row.czdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fksj')>-1){
	            clumns.push({field : 'fksj',title : '反馈日期',width : 200,hidden:util.getArrayIndex(option.hidden,'fksj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fksj==null?"":row.fksj)+'>'+(row.fksj==null?"":row.fksj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czjg')>-1){
	            clumns.push({field : 'czjg',title : '查证结果',width : 200,hidden:util.getArrayIndex(option.hidden,'czjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czjg==null?"":row.czjg)+'>'+(row.czjg==null?"":row.czjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clqk')>-1){
	            clumns.push({field : 'clqk',title : '处理情况',width : 200,hidden:util.getArrayIndex(option.hidden,'clqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clqk==null?"":row.clqk)+'>'+(row.clqk==null?"":row.clqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjzm')>-1){
	            clumns.push({field : 'jjzm',title : '检举证明',width : 200,hidden:util.getArrayIndex(option.hidden,'jjzm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjzm==null?"":row.jjzm)+'>'+(row.jjzm==null?"":row.jjzm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zcdx')>-1){
	            clumns.push({field : 'zcdx',title : '政策兑现',width : 200,hidden:util.getArrayIndex(option.hidden,'zcdx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zcdx==null?"":row.zcdx)+'>'+(row.zcdx==null?"":row.zcdx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'phxsajcs')>-1){
	            clumns.push({field : 'phxsajcs',title : '破获刑事案件次数',width : 200,hidden:util.getArrayIndex(option.hidden,'phxsajcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.phxsajcs==null?"":row.phxsajcs)+'>'+(row.phxsajcs==null?"":row.phxsajcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'phzaajcs')>-1){
	            clumns.push({field : 'phzaajcs',title : '破获治安案件次数',width : 200,hidden:util.getArrayIndex(option.hidden,'phzaajcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.phzaajcs==null?"":row.phzaajcs)+'>'+(row.phzaajcs==null?"":row.phzaajcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zbrs')>-1){
	            clumns.push({field : 'zbrs',title : '追捕人数',width : 200,hidden:util.getArrayIndex(option.hidden,'zbrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zbrs==null?"":row.zbrs)+'>'+(row.zbrs==null?"":row.zbrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zzsm')>-1){
	            clumns.push({field : 'zzsm',title : '追赃数目',width : 200,hidden:util.getArrayIndex(option.hidden,'zzsm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzsm==null?"":row.zzsm)+'>'+(row.zzsm==null?"":row.zzsm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hqxsmj')>-1){
	            clumns.push({field : 'hqxsmj',title : '获取线索民警',width : 200,hidden:util.getArrayIndex(option.hidden,'hqxsmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hqxsmj==null?"":row.hqxsmj)+'>'+(row.hqxsmj==null?"":row.hqxsmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'flag')>-1){
	            clumns.push({field : 'flag',title : '标志位',width : 200,hidden:util.getArrayIndex(option.hidden,'flag')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.flag==null?"":row.flag)+'>'+(row.flag==null?"":row.flag)+'</span>'}});
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