/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Clcs 数据列表
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
			if(util.getArrayIndex(option.clumns,'jbxx_jsh')>-1){
				clumns.push({field : 'jsh',title : '拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'jbxx_bm')>-1){
	        	clumns.push({field : 'jbxx_bm',title : '别名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bm==null?"":row.jbxx_bm)+'>'+(row.jbxx_bm==null?"":row.jbxx_bm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xbString')>-1){
	        	clumns.push({field : 'xbString',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xbString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xbString==null?"":row.xbString)+'>'+(row.xbString==null?"":row.xbString)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'csbllx')>-1){
	            clumns.push({field : 'csbllx',title : '出所办理类型',width : 200,hidden:util.getArrayIndex(option.hidden,'csbllx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csbllx==null?"":row.csbllx)+'>'+(row.csbllx==null?"":row.csbllx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csyy')>-1){
	            clumns.push({field : 'csyy',title : '出所原因',width : 200,hidden:util.getArrayIndex(option.hidden,'csyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csyy==null?"":row.csyy)+'>'+(row.csyy==null?"":row.csyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csqx')>-1){
	            clumns.push({field : 'csqx',title : '出所去向',width : 200,hidden:util.getArrayIndex(option.hidden,'csqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csqx==null?"":row.csqx)+'>'+(row.csqx==null?"":row.csqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzjg')>-1){
	            clumns.push({field : 'pzjg',title : '批准机关',width : 200,hidden:util.getArrayIndex(option.hidden,'pzjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzjg==null?"":row.pzjg)+'>'+(row.pzjg==null?"":row.pzjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ncsrq')>-1){
	            clumns.push({field : 'ncsrq',title : '拟出所日期',width : 200,hidden:util.getArrayIndex(option.hidden,'ncsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ncsrq==null?"":row.ncsrq)+'>'+(row.ncsrq==null?"":row.ncsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tqjcjlqx')>-1){
	            clumns.push({field : 'tqjcjlqx',title : '提前解除拘留期限',width : 200,hidden:util.getArrayIndex(option.hidden,'tqjcjlqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tqjcjlqx==null?"":row.tqjcjlqx)+'>'+(row.tqjcjlqx==null?"":row.tqjcjlqx)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'tqjcjlqxString')>-1){
				clumns.push({field : 'tqjcjlqxString',title : '提前解除拘留期限',width : 200,hidden:util.getArrayIndex(option.hidden,'tqjcjlqxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tqjcjlqxString==null?"":row.tqjcjlqxString)+'>'+(row.tqjcjlqxString==null?"":row.tqjcjlqxString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'jcly')>-1){
	            clumns.push({field : 'jcly',title : '解除理由',width : 200,hidden:util.getArrayIndex(option.hidden,'jcly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcly==null?"":row.jcly)+'>'+(row.jcly==null?"":row.jcly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjyj')>-1){
	            clumns.push({field : 'gjyj',title : '管教意见',width : 200,hidden:util.getArrayIndex(option.hidden,'gjyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjyj==null?"":row.gjyj)+'>'+(row.gjyj==null?"":row.gjyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjqm')>-1){
	            clumns.push({field : 'gjqm',title : '管教签名',width : 200,hidden:util.getArrayIndex(option.hidden,'gjqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjqm==null?"":row.gjqm)+'>'+(row.gjqm==null?"":row.gjqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjqmrq')>-1){
	            clumns.push({field : 'gjqmrq',title : '管教签名日期',width : 200,hidden:util.getArrayIndex(option.hidden,'gjqmrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjqmrq==null?"":row.gjqmrq)+'>'+(row.gjqmrq==null?"":row.gjqmrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzyj')>-1){
	            clumns.push({field : 'jzyj',title : '警组意见',width : 200,hidden:util.getArrayIndex(option.hidden,'jzyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzyj==null?"":row.jzyj)+'>'+(row.jzyj==null?"":row.jzyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzyjnr')>-1){
	            clumns.push({field : 'jzyjnr',title : '警组意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'jzyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzyjnr==null?"":row.jzyjnr)+'>'+(row.jzyjnr==null?"":row.jzyjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzqm')>-1){
	            clumns.push({field : 'jzqm',title : '警组签名',width : 200,hidden:util.getArrayIndex(option.hidden,'jzqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzqm==null?"":row.jzqm)+'>'+(row.jzqm==null?"":row.jzqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzqmsj')>-1){
	            clumns.push({field : 'jzqmsj',title : '警组签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jzqmsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzqmsj==null?"":row.jzqmsj)+'>'+(row.jzqmsj==null?"":row.jzqmsj)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'fgjldyj')>-1){
	            clumns.push({field : 'fgjldyj',title : '分管局领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'fgjldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fgjldyj==null?"":row.fgjldyj)+'>'+(row.fgjldyj==null?"":row.fgjldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fgjldyjnr')>-1){
	            clumns.push({field : 'fgjldyjnr',title : '分管局领导意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'fgjldyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fgjldyjnr==null?"":row.fgjldyjnr)+'>'+(row.fgjldyjnr==null?"":row.fgjldyjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fgjldqm')>-1){
	            clumns.push({field : 'fgjldqm',title : '分管局领导签名',width : 200,hidden:util.getArrayIndex(option.hidden,'fgjldqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fgjldqm==null?"":row.fgjldqm)+'>'+(row.fgjldqm==null?"":row.fgjldqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fgjldqmsj')>-1){
	            clumns.push({field : 'fgjldqmsj',title : '分管局领导签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'fgjldqmsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fgjldqmsj==null?"":row.fgjldqmsj)+'>'+(row.fgjldqmsj==null?"":row.fgjldqmsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cssj')>-1){
	            clumns.push({field : 'cssj',title : '出所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cssj==null?"":row.cssj)+'>'+(row.cssj==null?"":row.cssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'flwsh')>-1){
	            clumns.push({field : 'flwsh',title : '法律文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'flwsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.flwsh==null?"":row.flwsh)+'>'+(row.flwsh==null?"":row.flwsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbr')>-1){
	            clumns.push({field : 'jbr',title : '经办人',width : 200,hidden:util.getArrayIndex(option.hidden,'jbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbr==null?"":row.jbr)+'>'+(row.jbr==null?"":row.jbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbsj')>-1){
	            clumns.push({field : 'jbsj',title : '经办时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jbsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbsj==null?"":row.jbsj)+'>'+(row.jbsj==null?"":row.jbsj)+'</span>'}});
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
	            clumns.push({field : 'state',title : '状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sjzljsbz')>-1){
	            clumns.push({field : 'sjzljsbz',title : '及时标记',width : 200,hidden:util.getArrayIndex(option.hidden,'sjzljsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjzljsbz==null?"":row.sjzljsbz)+'>'+(row.sjzljsbz==null?"":row.sjzljsbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scbz')>-1){
	            clumns.push({field : 'scbz',title : '上传标志',width : 200,hidden:util.getArrayIndex(option.hidden,'scbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scbz==null?"":row.scbz)+'>'+(row.scbz==null?"":row.scbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bxqk')>-1){
	            clumns.push({field : 'bxqk',title : '表现情况',width : 200,hidden:util.getArrayIndex(option.hidden,'bxqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bxqk==null?"":row.bxqk)+'>'+(row.bxqk==null?"":row.bxqk)+'</span>'}});
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