/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Zyrycfjl 数据列表
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
	        	clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_bm')>-1){
	        	clumns.push({field : 'jbxx_bm',title : '别名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bm==null?"":row.jbxx_bm)+'>'+(row.jbxx_bm==null?"":row.jbxx_bm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_xb')>-1){
	        	clumns.push({field : 'jbxx_xb',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_xb==null?"":row.jbxx_xb)+'>'+(row.jbxx_xb==null?"":row.jbxx_xb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_jsh')>-1){
	        	clumns.push({field : 'jbxx_jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_jsh==null?"":row.jbxx_jsh)+'>'+(row.jbxx_jsh==null?"":row.jbxx_jsh)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'cfly')>-1){
	            clumns.push({field : 'cfly',title : '处罚理由',width : 200,hidden:util.getArrayIndex(option.hidden,'cfly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cfly==null?"":row.cfly)+'>'+(row.cfly==null?"":row.cfly)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'cfzlString')>-1){
				clumns.push({field : 'cfzlString',title : '奖惩形式',width : 200,hidden:util.getArrayIndex(option.hidden,'cfzlString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cfzlString==null?"":row.cfzlString)+'>'+(row.cfzlString==null?"":row.cfzlString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'sjms')>-1){
	            clumns.push({field : 'sjms',title : '事件描述',width : 200,hidden:util.getArrayIndex(option.hidden,'sjms')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjms==null?"":row.sjms)+'>'+(row.sjms==null?"":row.sjms)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cfzl')>-1){
	            clumns.push({field : 'cfzl',title : '处罚种类',width : 200,hidden:util.getArrayIndex(option.hidden,'cfzl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cfzl==null?"":row.cfzl)+'>'+(row.cfzl==null?"":row.cfzl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cfts')>-1){
	            clumns.push({field : 'cfts',title : '处罚天数',width : 200,hidden:util.getArrayIndex(option.hidden,'cfts')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cfts==null?"":row.cfts)+'>'+(row.cfts==null?"":row.cfts)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cfksrq')>-1){
	            clumns.push({field : 'cfksrq',title : '处罚开始日期',width : 200,hidden:util.getArrayIndex(option.hidden,'cfksrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cfksrq==null?"":row.cfksrq)+'>'+(row.cfksrq==null?"":row.cfksrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cfjsrq')>-1){
	            clumns.push({field : 'cfjsrq',title : '处罚结束日期',width : 200,hidden:util.getArrayIndex(option.hidden,'cfjsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cfjsrq==null?"":row.cfjsrq)+'>'+(row.cfjsrq==null?"":row.cfjsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzxm')>-1){
	            clumns.push({field : 'zdzxm',title : '中队长姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzxm==null?"":row.zdzxm)+'>'+(row.zdzxm==null?"":row.zdzxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzpssj')>-1){
	            clumns.push({field : 'zdzpssj',title : '中队长批示时间',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzpssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzpssj==null?"":row.zdzpssj)+'>'+(row.zdzpssj==null?"":row.zdzpssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzpsbz')>-1){
	            clumns.push({field : 'zdzpsbz',title : '中队长批示标志',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzpsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzpsbz==null?"":row.zdzpsbz)+'>'+(row.zdzpsbz==null?"":row.zdzpsbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzyj')>-1){
	            clumns.push({field : 'zdzyj',title : '中队长意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzyj==null?"":row.zdzyj)+'>'+(row.zdzyj==null?"":row.zdzyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzyjbz')>-1){
	            clumns.push({field : 'zdzyjbz',title : '中队长意见备注',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzyjbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzyjbz==null?"":row.zdzyjbz)+'>'+(row.zdzyjbz==null?"":row.zdzyjbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldxm')>-1){
	            clumns.push({field : 'ldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldxm==null?"":row.ldxm)+'>'+(row.ldxm==null?"":row.ldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldpsbz')>-1){
	            clumns.push({field : 'ldpsbz',title : '领导批示标志',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsbz==null?"":row.ldpsbz)+'>'+(row.ldpsbz==null?"":row.ldpsbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldpssj')>-1){
	            clumns.push({field : 'ldpssj',title : '领导批示时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpssj==null?"":row.ldpssj)+'>'+(row.ldpssj==null?"":row.ldpssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyj')>-1){
	            clumns.push({field : 'ldyj',title : '领导意见意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyj==null?"":row.ldyj)+'>'+(row.ldyj==null?"":row.ldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyjbz')>-1){
	            clumns.push({field : 'ldyjbz',title : '领导意见备注',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyjbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyjbz==null?"":row.ldyjbz)+'>'+(row.ldyjbz==null?"":row.ldyjbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbr')>-1){
	            clumns.push({field : 'jbr',title : '经办人',width : 200,hidden:util.getArrayIndex(option.hidden,'jbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbr==null?"":row.jbr)+'>'+(row.jbr==null?"":row.jbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbsj')>-1){
	            clumns.push({field : 'jbsj',title : '经办时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jbsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbsj==null?"":row.jbsj)+'>'+(row.jbsj==null?"":row.jbsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zxqk')>-1){
	            clumns.push({field : 'zxqk',title : '执行情况',width : 200,hidden:util.getArrayIndex(option.hidden,'zxqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zxqk==null?"":row.zxqk)+'>'+(row.zxqk==null?"":row.zxqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zxsj')>-1){
	            clumns.push({field : 'zxsj',title : '执行时间',width : 200,hidden:util.getArrayIndex(option.hidden,'zxsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zxsj==null?"":row.zxsj)+'>'+(row.zxsj==null?"":row.zxsj)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'ycjbr')>-1){
	            clumns.push({field : 'ycjbr',title : '延长经办人',width : 200,hidden:util.getArrayIndex(option.hidden,'ycjbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ycjbr==null?"":row.ycjbr)+'>'+(row.ycjbr==null?"":row.ycjbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yccpsj')>-1){
	            clumns.push({field : 'yccpsj',title : '延长呈批时间',width : 200,hidden:util.getArrayIndex(option.hidden,'yccpsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yccpsj==null?"":row.yccpsj)+'>'+(row.yccpsj==null?"":row.yccpsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ycts')>-1){
	            clumns.push({field : 'ycts',title : '延长天数',width : 200,hidden:util.getArrayIndex(option.hidden,'ycts')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ycts==null?"":row.ycts)+'>'+(row.ycts==null?"":row.ycts)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ycly')>-1){
	            clumns.push({field : 'ycly',title : '延长理由',width : 200,hidden:util.getArrayIndex(option.hidden,'ycly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ycly==null?"":row.ycly)+'>'+(row.ycly==null?"":row.ycly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ycpsbz')>-1){
	            clumns.push({field : 'ycpsbz',title : '延长批示标志',width : 200,hidden:util.getArrayIndex(option.hidden,'ycpsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ycpsbz==null?"":row.ycpsbz)+'>'+(row.ycpsbz==null?"":row.ycpsbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yjssj')>-1){
	            clumns.push({field : 'yjssj',title : '原结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'yjssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yjssj==null?"":row.yjssj)+'>'+(row.yjssj==null?"":row.yjssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ycspr')>-1){
	            clumns.push({field : 'ycspr',title : '延长审批人',width : 200,hidden:util.getArrayIndex(option.hidden,'ycspr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ycspr==null?"":row.ycspr)+'>'+(row.ycspr==null?"":row.ycspr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ycspsj')>-1){
	            clumns.push({field : 'ycspsj',title : '延长审批时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ycspsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ycspsj==null?"":row.ycspsj)+'>'+(row.ycspsj==null?"":row.ycspsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cfqjbx')>-1){
	            clumns.push({field : 'cfqjbx',title : '处罚期间表现',width : 200,hidden:util.getArrayIndex(option.hidden,'cfqjbx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cfqjbx==null?"":row.cfqjbx)+'>'+(row.cfqjbx==null?"":row.cfqjbx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zxr')>-1){
	            clumns.push({field : 'zxr',title : '执行人',width : 200,hidden:util.getArrayIndex(option.hidden,'zxr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zxr==null?"":row.zxr)+'>'+(row.zxr==null?"":row.zxr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ycspyj')>-1){
	            clumns.push({field : 'ycspyj',title : '延长审批意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ycspyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ycspyj==null?"":row.ycspyj)+'>'+(row.ycspyj==null?"":row.ycspyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcrqString')>-1){
	            clumns.push({field : 'jcrqString',title : '解除惩罚日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jcrqString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcrqString==null?"":row.jcrqString)+'>'+(row.jcrqString==null?"":row.jcrqString)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jcrq')>-1){
	            clumns.push({field : 'jcrq',title : '解除惩罚日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jcrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcrq==null?"":row.jcrq)+'>'+(row.jcrq==null?"":row.jcrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcdjrq')>-1){
	            clumns.push({field : 'jcdjrq',title : '解除登记日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jcdjrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcdjrq==null?"":row.jcdjrq)+'>'+(row.jcdjrq==null?"":row.jcdjrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcr')>-1){
	            clumns.push({field : 'jcr',title : '解除人',width : 200,hidden:util.getArrayIndex(option.hidden,'jcr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcr==null?"":row.jcr)+'>'+(row.jcr==null?"":row.jcr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});