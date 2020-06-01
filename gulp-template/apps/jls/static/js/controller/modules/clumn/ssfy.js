/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Ssfy 数据列表
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
			
			if(util.getArrayIndex(option.clumns,'jbxx_xm')>-1){
	        	clumns.push({field : 'jbxx_xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_xm==null?"":row.jbxx_xm)+'>'+(row.jbxx_xm==null?"":row.jbxx_xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_bm')>-1){
	        	clumns.push({field : 'jbxx_bm',title : '别名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bm==null?"":row.jbxx_bm)+'>'+(row.jbxx_bm==null?"":row.jbxx_bm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_xb')>-1){
	        	clumns.push({field : 'jbxx_xb',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_xb==null?"":row.jbxx_xb)+'>'+(row.jbxx_xb==null?"":row.jbxx_xb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_jsh')>-1){
	        	clumns.push({field : 'jbxx_jsh',title : '拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_jsh==null?"":row.jbxx_jsh)+'>'+(row.jbxx_jsh==null?"":row.jbxx_jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_rsrq')>-1){
	        	clumns.push({field : 'jbxx_rsrq',title : '入所日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_rsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_rsrq==null?"":row.jbxx_rsrq)+'>'+(row.jbxx_rsrq==null?"":row.jbxx_rsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_gyqx')>-1){
	        	clumns.push({field : 'jbxx_gyqx',title : '关押期限',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_gyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_gyqx==null?"":row.jbxx_gyqx)+'>'+(row.jbxx_gyqx==null?"":row.jbxx_gyqx)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jbxx_gyts')>-1){
	        	clumns.push({field : 'jbxx_gyts',title : '关押天数',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_gyts')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_gyts==null?"":row.jbxx_gyts)+'>'+(row.jbxx_gyts==null?"":row.jbxx_gyts)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_bahj')>-1){
	        	clumns.push({field : 'jbxx_bahj',title : '办案环节',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bahj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bahj==null?"":row.jbxx_bahj)+'>'+(row.jbxx_bahj==null?"":row.jbxx_bahj)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jbxx_badw')>-1){
	        	clumns.push({field : 'jbxx_badw',title : '办案单位',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_gyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_badw==null?"":row.jbxx_badw)+'>'+(row.jbxx_badw==null?"":row.jbxx_badw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_ay')>-1){
	        	clumns.push({field : 'jbxx_ay',title : '案别',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_ay')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_ay==null?"":row.jbxx_ay)+'>'+(row.jbxx_ay==null?"":row.jbxx_ay)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqsy')>-1){
	            clumns.push({field : 'sqsy',title : '申请事由',width : 200,hidden:util.getArrayIndex(option.hidden,'sqsy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqsy==null?"":row.sqsy)+'>'+(row.sqsy==null?"":row.sqsy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdr')>-1){
	            clumns.push({field : 'zdr',title : '转递人',width : 200,hidden:util.getArrayIndex(option.hidden,'zdr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdr==null?"":row.zdr)+'>'+(row.zdr==null?"":row.zdr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdsj')>-1){
	            clumns.push({field : 'zdsj',title : '转递时间',width : 200,hidden:util.getArrayIndex(option.hidden,'zdsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdsj==null?"":row.zdsj)+'>'+(row.zdsj==null?"":row.zdsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zwdw')>-1){
	            clumns.push({field : 'zwdw',title : '材料转往单位',width : 200,hidden:util.getArrayIndex(option.hidden,'zwdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zwdw==null?"":row.zwdw)+'>'+(row.zwdw==null?"":row.zwdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbmj')>-1){
	            clumns.push({field : 'jbmj',title : '经办民警',width : 200,hidden:util.getArrayIndex(option.hidden,'jbmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbmj==null?"":row.jbmj)+'>'+(row.jbmj==null?"":row.jbmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbsj')>-1){
	            clumns.push({field : 'jbsj',title : '经办时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jbsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbsj==null?"":row.jbsj)+'>'+(row.jbsj==null?"":row.jbsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cljg')>-1){
	            clumns.push({field : 'cljg',title : '处理结果',width : 200,hidden:util.getArrayIndex(option.hidden,'cljg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cljg==null?"":row.cljg)+'>'+(row.cljg==null?"":row.cljg)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'sfcl')>-1){
	            clumns.push({field : 'sfcl',title : '是否转递材料',width : 200,hidden:util.getArrayIndex(option.hidden,'sfcl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfcl==null?"":row.sfcl)+'>'+(row.sfcl==null?"":row.sfcl)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});