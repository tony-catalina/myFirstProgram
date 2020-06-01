/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Qjcs 数据列表
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
	        if(util.getArrayIndex(option.clumns,'sqr')>-1){
	            clumns.push({field : 'sqr',title : '申请人',width : 200,hidden:util.getArrayIndex(option.hidden,'sqr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqr==null?"":row.sqr)+'>'+(row.sqr==null?"":row.sqr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqsj')>-1){
	            clumns.push({field : 'sqsj',title : '申请时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sqsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqsj==null?"":row.sqsj)+'>'+(row.sqsj==null?"":row.sqsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qjly')>-1){
	            clumns.push({field : 'qjly',title : '请假理由',width : 200,hidden:util.getArrayIndex(option.hidden,'qjly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qjly==null?"":row.qjly)+'>'+(row.qjly==null?"":row.qjly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjqx')>-1){
	            clumns.push({field : 'zjqx',title : '准假期限（天）',width : 200,hidden:util.getArrayIndex(option.hidden,'zjqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjqx==null?"":row.zjqx)+'>'+(row.zjqx==null?"":row.zjqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qjkssj')>-1){
	            clumns.push({field : 'qjkssj',title : '请假开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'qjkssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qjkssj==null?"":row.qjkssj)+'>'+(row.qjkssj==null?"":row.qjkssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qjjssj')>-1){
	            clumns.push({field : 'qjjssj',title : '请假结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'qjjssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qjjssj==null?"":row.qjjssj)+'>'+(row.qjjssj==null?"":row.qjjssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qjrdh')>-1){
	            clumns.push({field : 'qjrdh',title : '请假人电话',width : 200,hidden:util.getArrayIndex(option.hidden,'qjrdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qjrdh==null?"":row.qjrdh)+'>'+(row.qjrdh==null?"":row.qjrdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbr')>-1){
	            clumns.push({field : 'dbr',title : '担保人',width : 200,hidden:util.getArrayIndex(option.hidden,'dbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbr==null?"":row.dbr)+'>'+(row.dbr==null?"":row.dbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbrdw')>-1){
	            clumns.push({field : 'dbrdw',title : '担保人单位',width : 200,hidden:util.getArrayIndex(option.hidden,'dbrdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbrdw==null?"":row.dbrdw)+'>'+(row.dbrdw==null?"":row.dbrdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbrdwdz')>-1){
	            clumns.push({field : 'dbrdwdz',title : '担保人单位地址',width : 200,hidden:util.getArrayIndex(option.hidden,'dbrdwdz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbrdwdz==null?"":row.dbrdwdz)+'>'+(row.dbrdwdz==null?"":row.dbrdwdz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbrzw')>-1){
	            clumns.push({field : 'dbrzw',title : '担保人职务',width : 200,hidden:util.getArrayIndex(option.hidden,'dbrzw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbrzw==null?"":row.dbrzw)+'>'+(row.dbrzw==null?"":row.dbrzw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ybdbrgx')>-1){
	            clumns.push({field : 'ybdbrgx',title : '与被担保人关系',width : 200,hidden:util.getArrayIndex(option.hidden,'ybdbrgx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ybdbrgx==null?"":row.ybdbrgx)+'>'+(row.ybdbrgx==null?"":row.ybdbrgx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbrzjh')>-1){
	            clumns.push({field : 'dbrzjh',title : '担保人证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'dbrzjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbrzjh==null?"":row.dbrzjh)+'>'+(row.dbrzjh==null?"":row.dbrzjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbrxzd')>-1){
	            clumns.push({field : 'dbrxzd',title : '担保人现住地址',width : 200,hidden:util.getArrayIndex(option.hidden,'dbrxzd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbrxzd==null?"":row.dbrxzd)+'>'+(row.dbrxzd==null?"":row.dbrxzd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dh')>-1){
	            clumns.push({field : 'dh',title : '电话',width : 200,hidden:util.getArrayIndex(option.hidden,'dh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dh==null?"":row.dh)+'>'+(row.dh==null?"":row.dh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbrgh')>-1){
	            clumns.push({field : 'dbrgh',title : '担保人固话',width : 200,hidden:util.getArrayIndex(option.hidden,'dbrgh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbrgh==null?"":row.dbrgh)+'>'+(row.dbrgh==null?"":row.dbrgh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjyjnr')>-1){
	            clumns.push({field : 'gjyjnr',title : '管教意见',width : 200,hidden:util.getArrayIndex(option.hidden,'gjyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjyjnr==null?"":row.gjyjnr)+'>'+(row.gjyjnr==null?"":row.gjyjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjqm')>-1){
	            clumns.push({field : 'gjqm',title : '管教签名',width : 200,hidden:util.getArrayIndex(option.hidden,'gjqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjqm==null?"":row.gjqm)+'>'+(row.gjqm==null?"":row.gjqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjqmrq')>-1){
	            clumns.push({field : 'gjqmrq',title : '管教签名日期',width : 200,hidden:util.getArrayIndex(option.hidden,'gjqmrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjqmrq==null?"":row.gjqmrq)+'>'+(row.gjqmrq==null?"":row.gjqmrq)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'zgldyj')>-1){
	            clumns.push({field : 'zgldyj',title : '主管领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'zgldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zgldyj==null?"":row.zgldyj)+'>'+(row.zgldyj==null?"":row.zgldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zgldyjnr')>-1){
	            clumns.push({field : 'zgldyjnr',title : '主管领导意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'zgldyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zgldyjnr==null?"":row.zgldyjnr)+'>'+(row.zgldyjnr==null?"":row.zgldyjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zgldqm')>-1){
	            clumns.push({field : 'zgldqm',title : '主管领导签名',width : 200,hidden:util.getArrayIndex(option.hidden,'zgldqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zgldqm==null?"":row.zgldqm)+'>'+(row.zgldqm==null?"":row.zgldqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zgldqmsj')>-1){
	            clumns.push({field : 'zgldqmsj',title : '主管领导签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'zgldqmsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zgldqmsj==null?"":row.zgldqmsj)+'>'+(row.zgldqmsj==null?"":row.zgldqmsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bzjje')>-1){
	            clumns.push({field : 'bzjje',title : '保证金金额（元）',width : 200,hidden:util.getArrayIndex(option.hidden,'bzjje')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bzjje==null?"":row.bzjje)+'>'+(row.bzjje==null?"":row.bzjje)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bzjsqsj')>-1){
	            clumns.push({field : 'bzjsqsj',title : '保证金收取时间',width : 200,hidden:util.getArrayIndex(option.hidden,'bzjsqsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bzjsqsj==null?"":row.bzjsqsj)+'>'+(row.bzjsqsj==null?"":row.bzjsqsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csyy')>-1){
	            clumns.push({field : 'csyy',title : '出所原因',width : 200,hidden:util.getArrayIndex(option.hidden,'csyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csyy==null?"":row.csyy)+'>'+(row.csyy==null?"":row.csyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cssj')>-1){
	            clumns.push({field : 'cssj',title : '出所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cssj==null?"":row.cssj)+'>'+(row.cssj==null?"":row.cssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csqx')>-1){
	            clumns.push({field : 'csqx',title : '出所去向',width : 200,hidden:util.getArrayIndex(option.hidden,'csqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csqx==null?"":row.csqx)+'>'+(row.csqx==null?"":row.csqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'flwsh')>-1){
	            clumns.push({field : 'flwsh',title : '法律文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'flwsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.flwsh==null?"":row.flwsh)+'>'+(row.flwsh==null?"":row.flwsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cbsj')>-1){
	            clumns.push({field : 'cbsj',title : '承办时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cbsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cbsj==null?"":row.cbsj)+'>'+(row.cbsj==null?"":row.cbsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cbr')>-1){
	            clumns.push({field : 'cbr',title : '承办人',width : 200,hidden:util.getArrayIndex(option.hidden,'cbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cbr==null?"":row.cbr)+'>'+(row.cbr==null?"":row.cbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hssj')>-1){
	            clumns.push({field : 'hssj',title : '回所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hssj==null?"":row.hssj)+'>'+(row.hssj==null?"":row.hssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zbmj')>-1){
	            clumns.push({field : 'zbmj',title : '值班民警',width : 200,hidden:util.getArrayIndex(option.hidden,'zbmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zbmj==null?"":row.zbmj)+'>'+(row.zbmj==null?"":row.zbmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dqwgclqk')>-1){
	            clumns.push({field : 'dqwgclqk',title : '到期未归处理情况',width : 200,hidden:util.getArrayIndex(option.hidden,'dqwgclqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dqwgclqk==null?"":row.dqwgclqk)+'>'+(row.dqwgclqk==null?"":row.dqwgclqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dqwgdjr')>-1){
	            clumns.push({field : 'dqwgdjr',title : '到期未归登记人',width : 200,hidden:util.getArrayIndex(option.hidden,'dqwgdjr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dqwgdjr==null?"":row.dqwgdjr)+'>'+(row.dqwgdjr==null?"":row.dqwgdjr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dqwgdjrq')>-1){
	            clumns.push({field : 'dqwgdjrq',title : '到期未归登记日期',width : 200,hidden:util.getArrayIndex(option.hidden,'dqwgdjrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dqwgdjrq==null?"":row.dqwgdjrq)+'>'+(row.dqwgdjrq==null?"":row.dqwgdjrq)+'</span>'}});
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