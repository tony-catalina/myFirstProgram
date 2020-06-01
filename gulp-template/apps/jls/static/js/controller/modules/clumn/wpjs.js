/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Wpjs 数据列表
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
	        	clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_bm')>-1){
	        	clumns.push({field : 'jbxx_bm',title : '别名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bm==null?"":row.jbxx_bm)+'>'+(row.jbxx_bm==null?"":row.jbxx_bm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_xb')>-1){
	        	clumns.push({field : 'jbxx_xb',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_xb==null?"":row.jbxx_xb)+'>'+(row.jbxx_xb==null?"":row.jbxx_xb)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'djr')>-1){
	            clumns.push({field : 'djr',title : '登记人',width : 200,hidden:util.getArrayIndex(option.hidden,'djr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djr==null?"":row.djr)+'>'+(row.djr==null?"":row.djr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djrq')>-1){
	            clumns.push({field : 'djrq',title : '登记日期',width : 200,hidden:util.getArrayIndex(option.hidden,'djrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djrq==null?"":row.djrq)+'>'+(row.djrq==null?"":row.djrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swrxm')>-1){
	            clumns.push({field : 'swrxm',title : '送物人姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'swrxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swrxm==null?"":row.swrxm)+'>'+(row.swrxm==null?"":row.swrxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swrxb')>-1){
	            clumns.push({field : 'swrxb',title : '送物人性别',width : 200,hidden:util.getArrayIndex(option.hidden,'swrxb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swrxb==null?"":row.swrxb)+'>'+(row.swrxb==null?"":row.swrxb)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'swrxbString')>-1){
				clumns.push({field : 'swrxbString',title : '送物人性别',width : 200,hidden:util.getArrayIndex(option.hidden,'swrxbString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swrxbString==null?"":row.swrxbString)+'>'+(row.swrxbString==null?"":row.swrxbString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'zjlx')>-1){
	            clumns.push({field : 'zjlx',title : '证件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'zjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjlx==null?"":row.zjlx)+'>'+(row.zjlx==null?"":row.zjlx)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'zjlxString')>-1){
	            clumns.push({field : 'zjlxString',title : '证件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'zjlxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjlxString==null?"":row.zjlxString)+'>'+(row.zjlxString==null?"":row.zjlxString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjhm')>-1){
	            clumns.push({field : 'zjhm',title : '送物人证件号码',width : 200,hidden:util.getArrayIndex(option.hidden,'zjhm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjhm==null?"":row.zjhm)+'>'+(row.zjhm==null?"":row.zjhm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swrlxdh')>-1){
	            clumns.push({field : 'swrlxdh',title : '送物人电话',width : 200,hidden:util.getArrayIndex(option.hidden,'swrlxdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swrlxdh==null?"":row.swrlxdh)+'>'+(row.swrlxdh==null?"":row.swrlxdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swrdw')>-1){
	            clumns.push({field : 'swrdw',title : '送物人工作单位',width : 200,hidden:util.getArrayIndex(option.hidden,'swrdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swrdw==null?"":row.swrdw)+'>'+(row.swrdw==null?"":row.swrdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swsj')>-1){
	            clumns.push({field : 'swsj',title : '送物时间',width : 200,hidden:util.getArrayIndex(option.hidden,'swsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swsj==null?"":row.swsj)+'>'+(row.swsj==null?"":row.swsj)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'swsjString')>-1){
				clumns.push({field : 'swsjString',title : '送物时间',width : 200,hidden:util.getArrayIndex(option.hidden,'swsjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swsjString==null?"":row.swsjString)+'>'+(row.swsjString==null?"":row.swsjString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'sqje')>-1){
	            clumns.push({field : 'sqje',title : '送钱金额',width : 200,hidden:util.getArrayIndex(option.hidden,'sqje')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqje==null?"":row.sqje)+'>'+(row.sqje==null?"":row.sqje)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zqmj')>-1){
	            clumns.push({field : 'zqmj',title : '执勤民警',width : 200,hidden:util.getArrayIndex(option.hidden,'zqmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zqmj==null?"":row.zqmj)+'>'+(row.zqmj==null?"":row.zqmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'uuid')>-1){
	            clumns.push({field : 'uuid',title : 'UUID,与物品信息关联',width : 200,hidden:util.getArrayIndex(option.hidden,'uuid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.uuid==null?"":row.uuid)+'>'+(row.uuid==null?"":row.uuid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzrq')>-1){
	            clumns.push({field : 'jzrq',title : '见证日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jzrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzrq==null?"":row.jzrq)+'>'+(row.jzrq==null?"":row.jzrq)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jzrqString')>-1){
	            clumns.push({field : 'jzrqString',title : '见证日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jzrqString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzrqString==null?"":row.jzrqString)+'>'+(row.jzrqString==null?"":row.jzrqString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzr')>-1){
	            clumns.push({field : 'jzr',title : '见证人',width : 200,hidden:util.getArrayIndex(option.hidden,'jzr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzr==null?"":row.jzr)+'>'+(row.jzr==null?"":row.jzr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pfsj')>-1){
	            clumns.push({field : 'pfsj',title : '派发时间',width : 200,hidden:util.getArrayIndex(option.hidden,'pfsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pfsj==null?"":row.pfsj)+'>'+(row.pfsj==null?"":row.pfsj)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'pfsjString')>-1){
	            clumns.push({field : 'pfsjString',title : '派发时间',width : 200,hidden:util.getArrayIndex(option.hidden,'pfsjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pfsjString==null?"":row.pfsjString)+'>'+(row.pfsjString==null?"":row.pfsjString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'pfr')>-1){
	            clumns.push({field : 'pfr',title : '派发人',width : 200,hidden:util.getArrayIndex(option.hidden,'pfr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pfr==null?"":row.pfr)+'>'+(row.pfr==null?"":row.pfr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wpmc')>-1){
	            clumns.push({field : 'wpmc',title : '物品名称',width : 200,hidden:util.getArrayIndex(option.hidden,'wpmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wpmc==null?"":row.wpmc)+'>'+(row.wpmc==null?"":row.wpmc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'taskid')>-1){
	            clumns.push({field : 'taskid',title : '业务进程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'taskid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.taskid==null?"":row.taskid)+'>'+(row.taskid==null?"":row.taskid)+'</span>'}});
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