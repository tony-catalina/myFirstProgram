/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Lscs 数据列表
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
			if(util.getArrayIndex(option.clumns,'xbString')>-1){
	        	clumns.push({field : 'xbString',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xbString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xbString==null?"":row.xbString)+'>'+(row.xbString==null?"":row.xbString)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'jbxx_bahj')>-1){
	        	clumns.push({field : 'jbxx_bahj',title : '办案环节',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bahj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bahj==null?"":row.jbxx_bahj)+'>'+(row.jbxx_bahj==null?"":row.jbxx_bahj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjher')>-1){
	            clumns.push({field : 'zjher',title : '证件核对人',width : 200,hidden:util.getArrayIndex(option.hidden,'zjher')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjher==null?"":row.zjher)+'>'+(row.zjher==null?"":row.zjher)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjhesj')>-1){
	            clumns.push({field : 'zjhesj',title : '证件核对时间',width : 200,hidden:util.getArrayIndex(option.hidden,'zjhesj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjhesj==null?"":row.zjhesj)+'>'+(row.zjhesj==null?"":row.zjhesj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csyy')>-1){
	            clumns.push({field : 'csyy',title : '出所原因',width : 200,hidden:util.getArrayIndex(option.hidden,'csyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csyy==null?"":row.csyy)+'>'+(row.csyy==null?"":row.csyy)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'csyyString')>-1){
	            clumns.push({field : 'csyyString',title : '出所原因',width : 200,hidden:util.getArrayIndex(option.hidden,'csyyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csyyString==null?"":row.csyyString)+'>'+(row.csyyString==null?"":row.csyyString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lsqx')>-1){
	            clumns.push({field : 'lsqx',title : '离所去向',width : 200,hidden:util.getArrayIndex(option.hidden,'lsqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsqx==null?"":row.lsqx)+'>'+(row.lsqx==null?"":row.lsqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ncssj')>-1){
	            clumns.push({field : 'ncssj',title : '拟出所日期',width : 200,hidden:util.getArrayIndex(option.hidden,'ncssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ncssj==null?"":row.ncssj)+'>'+(row.ncssj==null?"":row.ncssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjyjnr')>-1){
	            clumns.push({field : 'gjyjnr',title : '管教意见',width : 200,hidden:util.getArrayIndex(option.hidden,'gjyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjyjnr==null?"":row.gjyjnr)+'>'+(row.gjyjnr==null?"":row.gjyjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjqm')>-1){
	            clumns.push({field : 'gjqm',title : '管教签名',width : 200,hidden:util.getArrayIndex(option.hidden,'gjqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjqm==null?"":row.gjqm)+'>'+(row.gjqm==null?"":row.gjqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjqmsj')>-1){
	            clumns.push({field : 'gjqmsj',title : '管教签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'gjqmsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjqmsj==null?"":row.gjqmsj)+'>'+(row.gjqmsj==null?"":row.gjqmsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'szyj')>-1){
	            clumns.push({field : 'szyj',title : '所长意见',width : 200,hidden:util.getArrayIndex(option.hidden,'szyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.szyj==null?"":row.szyj)+'>'+(row.szyj==null?"":row.szyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'szyjnr')>-1){
	            clumns.push({field : 'szyjnr',title : '所长意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'szyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.szyjnr==null?"":row.szyjnr)+'>'+(row.szyjnr==null?"":row.szyjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'szqm')>-1){
	            clumns.push({field : 'szqm',title : '所长签名',width : 200,hidden:util.getArrayIndex(option.hidden,'szqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.szqm==null?"":row.szqm)+'>'+(row.szqm==null?"":row.szqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'szqmsj')>-1){
	            clumns.push({field : 'szqmsj',title : '所长签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'szqmsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.szqmsj==null?"":row.szqmsj)+'>'+(row.szqmsj==null?"":row.szqmsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lsqrr')>-1){
	            clumns.push({field : 'lsqrr',title : '离所确认人',width : 200,hidden:util.getArrayIndex(option.hidden,'lsqrr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsqrr==null?"":row.lsqrr)+'>'+(row.lsqrr==null?"":row.lsqrr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cssj')>-1){
	            clumns.push({field : 'cssj',title : '出所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cssj==null?"":row.cssj)+'>'+(row.cssj==null?"":row.cssj)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'cssjString')>-1){
	            clumns.push({field : 'cssjString',title : '出所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cssjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cssjString==null?"":row.cssjString)+'>'+(row.cssjString==null?"":row.cssjString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csqx')>-1){
	            clumns.push({field : 'csqx',title : '出所去向',width : 200,hidden:util.getArrayIndex(option.hidden,'csqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csqx==null?"":row.csqx)+'>'+(row.csqx==null?"":row.csqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hsqrr')>-1){
	            clumns.push({field : 'hsqrr',title : '回所确认人',width : 200,hidden:util.getArrayIndex(option.hidden,'hsqrr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hsqrr==null?"":row.hsqrr)+'>'+(row.hsqrr==null?"":row.hsqrr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hssj')>-1){
	            clumns.push({field : 'hssj',title : '回所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hssj==null?"":row.hssj)+'>'+(row.hssj==null?"":row.hssj)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'hssjString')>-1){
	            clumns.push({field : 'hssjString',title : '回所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hssjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hssjString==null?"":row.hssjString)+'>'+(row.hssjString==null?"":row.hssjString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zbmj')>-1){
	            clumns.push({field : 'zbmj',title : '值班民警',width : 200,hidden:util.getArrayIndex(option.hidden,'zbmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zbmj==null?"":row.zbmj)+'>'+(row.zbmj==null?"":row.zbmj)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'sjzljsbz')>-1){
	            clumns.push({field : 'sjzljsbz',title : '及时标记',width : 200,hidden:util.getArrayIndex(option.hidden,'sjzljsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjzljsbz==null?"":row.sjzljsbz)+'>'+(row.sjzljsbz==null?"":row.sjzljsbz)+'</span>'}});
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