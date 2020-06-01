/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Wmpb 数据列表
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
			if(util.getArrayIndex(option.clumns,'jbxx_xm')>-1){
	        	clumns.push({field : 'jbxx_xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_xm==null?"":row.jbxx_xm)+'>'+(row.jbxx_xm==null?"":row.jbxx_xm)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'xm')>-1){
				clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'jbxx_bm')>-1){
	        	clumns.push({field : 'jbxx_bm',title : '别名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bm==null?"":row.jbxx_bm)+'>'+(row.jbxx_bm==null?"":row.jbxx_bm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_xb')>-1){
	        	clumns.push({field : 'jbxx_xb',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_xb==null?"":row.jbxx_xb)+'>'+(row.jbxx_xb==null?"":row.jbxx_xb)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'xb')>-1){
				clumns.push({field : 'xb',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xb==null?"":row.xb)+'>'+(row.xb==null?"":row.xb)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'xbString')>-1){
				clumns.push({field : 'xbString',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xbString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xbString==null?"":row.xbString)+'>'+(row.xbString==null?"":row.xbString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'jbxx_jsh')>-1){
	        	clumns.push({field : 'jbxx_jsh',title : '拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_jsh==null?"":row.jbxx_jsh)+'>'+(row.jbxx_jsh==null?"":row.jbxx_jsh)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'jsh')>-1){
				clumns.push({field : 'jsh',title : '拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'jbxx_rsrq')>-1){
	        	clumns.push({field : 'jbxx_rsrq',title : '入所日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_rsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_rsrq==null?"":row.jbxx_rsrq)+'>'+(row.jbxx_rsrq==null?"":row.jbxx_rsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_gyqx')>-1){
	        	clumns.push({field : 'jbxx_gyqx',title : '关押期限',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_gyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_gyqx==null?"":row.jbxx_gyqx)+'>'+(row.jbxx_gyqx==null?"":row.jbxx_gyqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_bahj')>-1){
	        	clumns.push({field : 'jbxx_bahj',title : '办案环节',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bahj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bahj==null?"":row.jbxx_bahj)+'>'+(row.jbxx_bahj==null?"":row.jbxx_bahj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bllx')>-1){
	            clumns.push({field : 'bllx',title : '办理类型',width : 200,hidden:util.getArrayIndex(option.hidden,'bllx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bllx==null?"":row.bllx)+'>'+(row.bllx==null?"":row.bllx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pxsj')>-1){
	            clumns.push({field : 'pxsj',title : '评选时间',width : 200,hidden:util.getArrayIndex(option.hidden,'pxsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pxsj==null?"":row.pxsj)+'>'+(row.pxsj==null?"":row.pxsj)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'pxsjString')>-1){
			    clumns.push({field : 'pxsjString',title : '评选时间',width : 200,hidden:util.getArrayIndex(option.hidden,'pxsjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pxsjString==null?"":row.pxsjString)+'>'+(row.pxsjString==null?"":row.pxsjString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'gjmj')>-1){
	            clumns.push({field : 'gjmj',title : '管教民警',width : 200,hidden:util.getArrayIndex(option.hidden,'gjmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjmj==null?"":row.gjmj)+'>'+(row.gjmj==null?"":row.gjmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'psr')>-1){
	            clumns.push({field : 'psr',title : '评审人',width : 200,hidden:util.getArrayIndex(option.hidden,'psr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.psr==null?"":row.psr)+'>'+(row.psr==null?"":row.psr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pblx')>-1){
	            clumns.push({field : 'pblx',title : '评比类型',width : 200,hidden:util.getArrayIndex(option.hidden,'pblx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pblx==null?"":row.pblx)+'>'+(row.pblx==null?"":row.pblx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfpdbz')>-1){
	            clumns.push({field : 'sfpdbz',title : '是否佩戴“文明个人”标志/悬挂“文明拘室”标志',width : 200,hidden:util.getArrayIndex(option.hidden,'sfpdbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfpdbz==null?"":row.sfpdbz)+'>'+(row.sfpdbz==null?"":row.sfpdbz)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'sfpdbzString')>-1){
			    clumns.push({field : 'sfpdbzString',title : '是否佩戴“文明个人”标志/悬挂“文明拘室”标志',width : 200,hidden:util.getArrayIndex(option.hidden,'sfpdbzString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfpdbzString==null?"":row.sfpdbzString)+'>'+(row.sfpdbzString==null?"":row.sfpdbzString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'pxyy')>-1){
	            clumns.push({field : 'pxyy',title : '评选原因',width : 200,hidden:util.getArrayIndex(option.hidden,'pxyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pxyy==null?"":row.pxyy)+'>'+(row.pxyy==null?"":row.pxyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlcs')>-1){
	            clumns.push({field : 'jlcs',title : '奖励措施',width : 200,hidden:util.getArrayIndex(option.hidden,'jlcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlcs==null?"":row.jlcs)+'>'+(row.jlcs==null?"":row.jlcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wmjs')>-1){
	            clumns.push({field : 'wmjs',title : '文明拘室[DELETE]',width : 200,hidden:util.getArrayIndex(option.hidden,'wmjs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wmjs==null?"":row.wmjs)+'>'+(row.wmjs==null?"":row.wmjs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wmgr')>-1){
	            clumns.push({field : 'wmgr',title : '文明个人[DELETE]',width : 200,hidden:util.getArrayIndex(option.hidden,'wmgr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wmgr==null?"":row.wmgr)+'>'+(row.wmgr==null?"":row.wmgr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qxsj')>-1){
	            clumns.push({field : 'qxsj',title : '取消时间',width : 200,hidden:util.getArrayIndex(option.hidden,'qxsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qxsj==null?"":row.qxsj)+'>'+(row.qxsj==null?"":row.qxsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qxyy')>-1){
	            clumns.push({field : 'qxyy',title : '取消原因',width : 200,hidden:util.getArrayIndex(option.hidden,'qxyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qxyy==null?"":row.qxyy)+'>'+(row.qxyy==null?"":row.qxyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'spr')>-1){
	            clumns.push({field : 'spr',title : '审批人',width : 200,hidden:util.getArrayIndex(option.hidden,'spr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.spr==null?"":row.spr)+'>'+(row.spr==null?"":row.spr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'spsj')>-1){
	            clumns.push({field : 'spsj',title : '审批时间',width : 200,hidden:util.getArrayIndex(option.hidden,'spsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.spsj==null?"":row.spsj)+'>'+(row.spsj==null?"":row.spsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clfs')>-1){
	            clumns.push({field : 'clfs',title : '处理方式',width : 200,hidden:util.getArrayIndex(option.hidden,'clfs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clfs==null?"":row.clfs)+'>'+(row.clfs==null?"":row.clfs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dwdm')>-1){
	            clumns.push({field : 'dwdm',title : '单位代码',width : 200,hidden:util.getArrayIndex(option.hidden,'dwdm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dwdm==null?"":row.dwdm)+'>'+(row.dwdm==null?"":row.dwdm)+'</span>'}});
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
	        
	        return clumns;
	    };
	    return main;
	});