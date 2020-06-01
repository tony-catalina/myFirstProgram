/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Txth 数据列表
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
			if(util.getArrayIndex(option.clumns,'ay')>-1){
	        	clumns.push({field : 'ay',title : '案由',width : 200,hidden:util.getArrayIndex(option.hidden,'ay')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ay==null?"":row.ay)+'>'+(row.ay==null?"":row.ay)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'ayString')>-1){
	        	clumns.push({field : 'ayString',title : '案由',width : 200,hidden:util.getArrayIndex(option.hidden,'ayString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ayString==null?"":row.ayString)+'>'+(row.ayString==null?"":row.ayString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djrq')>-1){
	            clumns.push({field : 'djrq',title : '登记日期',width : 200,hidden:util.getArrayIndex(option.hidden,'djrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djrq==null?"":row.djrq)+'>'+(row.djrq==null?"":row.djrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'txrxm1')>-1){
	            clumns.push({field : 'txrxm1',title : '通信人姓名1',width : 200,hidden:util.getArrayIndex(option.hidden,'txrxm1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.txrxm1==null?"":row.txrxm1)+'>'+(row.txrxm1==null?"":row.txrxm1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gx1String')>-1){
	            clumns.push({field : 'gx1String',title : '关系',width : 200,hidden:util.getArrayIndex(option.hidden,'gx1String')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gx1String==null?"":row.gx1String)+'>'+(row.gx1String==null?"":row.gx1String)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'gx1')>-1){
	            clumns.push({field : 'gx1',title : '关系',width : 200,hidden:util.getArrayIndex(option.hidden,'gx1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gx1==null?"":row.gx1)+'>'+(row.gx1==null?"":row.gx1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dhhm1')>-1){
	            clumns.push({field : 'dhhm1',title : '电话号码1',width : 200,hidden:util.getArrayIndex(option.hidden,'dhhm1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dhhm1==null?"":row.dhhm1)+'>'+(row.dhhm1==null?"":row.dhhm1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'txrxm2')>-1){
	            clumns.push({field : 'txrxm2',title : '通信人姓名2',width : 200,hidden:util.getArrayIndex(option.hidden,'txrxm2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.txrxm2==null?"":row.txrxm2)+'>'+(row.txrxm2==null?"":row.txrxm2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gx2')>-1){
	            clumns.push({field : 'gx2',title : '关系2',width : 200,hidden:util.getArrayIndex(option.hidden,'gx2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gx2==null?"":row.gx2)+'>'+(row.gx2==null?"":row.gx2)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'gx2String')>-1){
	            clumns.push({field : 'gx2String',title : '关系2',width : 200,hidden:util.getArrayIndex(option.hidden,'gx2String')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gx2String==null?"":row.gx2String)+'>'+(row.gx2String==null?"":row.gx2String)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'dhhm2')>-1){
	            clumns.push({field : 'dhhm2',title : '电话号码2',width : 200,hidden:util.getArrayIndex(option.hidden,'dhhm2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dhhm2==null?"":row.dhhm2)+'>'+(row.dhhm2==null?"":row.dhhm2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'txrxm3')>-1){
	            clumns.push({field : 'txrxm3',title : '通信人姓名3',width : 200,hidden:util.getArrayIndex(option.hidden,'txrxm3')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.txrxm3==null?"":row.txrxm3)+'>'+(row.txrxm3==null?"":row.txrxm3)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gx3')>-1){
	            clumns.push({field : 'gx3',title : '关系3',width : 200,hidden:util.getArrayIndex(option.hidden,'gx3')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gx3==null?"":row.gx3)+'>'+(row.gx3==null?"":row.gx3)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'gx3String')>-1){
	            clumns.push({field : 'gx3String',title : '关系3',width : 200,hidden:util.getArrayIndex(option.hidden,'gx3String')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gx3String==null?"":row.gx3String)+'>'+(row.gx3String==null?"":row.gx3String)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'dhhm3')>-1){
	            clumns.push({field : 'dhhm3',title : '电话号码3',width : 200,hidden:util.getArrayIndex(option.hidden,'dhhm3')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dhhm3==null?"":row.dhhm3)+'>'+(row.dhhm3==null?"":row.dhhm3)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjmjyj')>-1){
	            clumns.push({field : 'gjmjyj',title : '管教民警意见',width : 200,hidden:util.getArrayIndex(option.hidden,'gjmjyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjmjyj==null?"":row.gjmjyj)+'>'+(row.gjmjyj==null?"":row.gjmjyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjmj')>-1){
	            clumns.push({field : 'gjmj',title : '管教民警',width : 200,hidden:util.getArrayIndex(option.hidden,'gjmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjmj==null?"":row.gjmj)+'>'+(row.gjmj==null?"":row.gjmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjmjqmsj')>-1){
	            clumns.push({field : 'gjmjqmsj',title : '管教民警签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'gjmjqmsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjmjqmsj==null?"":row.gjmjqmsj)+'>'+(row.gjmjqmsj==null?"":row.gjmjqmsj)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'gjmjqmsjString')>-1){
	            clumns.push({field : 'gjmjqmsjString',title : '管教民警签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'gjmjqmsjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjmjqmsjString==null?"":row.gjmjqmsjString)+'>'+(row.gjmjqmsjString==null?"":row.gjmjqmsjString)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'thkssj')>-1){
	            clumns.push({field : 'thkssj',title : '通话开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'thkssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.thkssj==null?"":row.thkssj)+'>'+(row.thkssj==null?"":row.thkssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'thjssj')>-1){
	            clumns.push({field : 'thjssj',title : '通话结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'thjssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.thjssj==null?"":row.thjssj)+'>'+(row.thjssj==null?"":row.thjssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jdmj')>-1){
	            clumns.push({field : 'jdmj',title : '监督民警',width : 200,hidden:util.getArrayIndex(option.hidden,'jdmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jdmj==null?"":row.jdmj)+'>'+(row.jdmj==null?"":row.jdmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tsqk')>-1){
	            clumns.push({field : 'tsqk',title : '特殊情况',width : 200,hidden:util.getArrayIndex(option.hidden,'tsqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tsqk==null?"":row.tsqk)+'>'+(row.tsqk==null?"":row.tsqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
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