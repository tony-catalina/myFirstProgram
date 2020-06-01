/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Xjgl 数据列表
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

	        if(util.getArrayIndex(option.clumns,'xjlx')>-1){
	            clumns.push({field : 'xjlx',title : '信件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'xjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xjlx==null?"":row.xjlx)+'>'+(row.xjlx==null?"":row.xjlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wtr')>-1){
	            clumns.push({field : 'wtr',title : '委托人',width : 200,hidden:util.getArrayIndex(option.hidden,'wtr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wtr==null?"":row.wtr)+'>'+(row.wtr==null?"":row.wtr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wtsj')>-1){
	            clumns.push({field : 'wtsj',title : '委托时间',width : 200,hidden:util.getArrayIndex(option.hidden,'wtsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wtsj==null?"":row.wtsj)+'>'+(row.wtsj==null?"":row.wtsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wtyy')>-1){
	            clumns.push({field : 'wtyy',title : '委托原因',width : 200,hidden:util.getArrayIndex(option.hidden,'wtyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wtyy==null?"":row.wtyy)+'>'+(row.wtyy==null?"":row.wtyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xjrq')>-1){
	            clumns.push({field : 'xjrq',title : '来信寄信日期',width : 200,hidden:util.getArrayIndex(option.hidden,'xjrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xjrq==null?"":row.xjrq)+'>'+(row.xjrq==null?"":row.xjrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjtxry')>-1){
	            clumns.push({field : 'zjtxry',title : '转交通讯人员',width : 200,hidden:util.getArrayIndex(option.hidden,'zjtxry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjtxry==null?"":row.zjtxry)+'>'+(row.zjtxry==null?"":row.zjtxry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'shzj')>-1){
	            clumns.push({field : 'shzj',title : '是否转交或邮寄',width : 200,hidden:util.getArrayIndex(option.hidden,'shzj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.shzj==null?"":row.shzj)+'>'+(row.shzj==null?"":row.shzj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxdm')>-1){
	            clumns.push({field : 'lxdm',title : '邮编或电话号码',width : 200,hidden:util.getArrayIndex(option.hidden,'lxdm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxdm==null?"":row.lxdm)+'>'+(row.lxdm==null?"":row.lxdm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'txdw')>-1){
	            clumns.push({field : 'txdw',title : '通讯单位',width : 200,hidden:util.getArrayIndex(option.hidden,'txdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.txdw==null?"":row.txdw)+'>'+(row.txdw==null?"":row.txdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xjdz')>-1){
	            clumns.push({field : 'xjdz',title : '收信寄信地址',width : 200,hidden:util.getArrayIndex(option.hidden,'xjdz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xjdz==null?"":row.xjdz)+'>'+(row.xjdz==null?"":row.xjdz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xjnr')>-1){
	            clumns.push({field : 'xjnr',title : '信件内容',width : 200,hidden:util.getArrayIndex(option.hidden,'xjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xjnr==null?"":row.xjnr)+'>'+(row.xjnr==null?"":row.xjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsr')>-1){
	            clumns.push({field : 'jsr',title : '接收人',width : 200,hidden:util.getArrayIndex(option.hidden,'jsr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsr==null?"":row.jsr)+'>'+(row.jsr==null?"":row.jsr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xjclqk')>-1){
	            clumns.push({field : 'xjclqk',title : '信件处理情况',width : 200,hidden:util.getArrayIndex(option.hidden,'xjclqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xjclqk==null?"":row.xjclqk)+'>'+(row.xjclqk==null?"":row.xjclqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbr')>-1){
	            clumns.push({field : 'jbr',title : '经办人',width : 200,hidden:util.getArrayIndex(option.hidden,'jbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbr==null?"":row.jbr)+'>'+(row.jbr==null?"":row.jbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbrq')>-1){
	            clumns.push({field : 'jbrq',title : '经办日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbrq==null?"":row.jbrq)+'>'+(row.jbrq==null?"":row.jbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程id',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'taskid')>-1){
	            clumns.push({field : 'taskid',title : '业务进程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'taskid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.taskid==null?"":row.taskid)+'>'+(row.taskid==null?"":row.taskid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '存在状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pastable')>-1){
	            clumns.push({field : 'pastable',title : '是否有效',width : 200,hidden:util.getArrayIndex(option.hidden,'pastable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pastable==null?"":row.pastable)+'>'+(row.pastable==null?"":row.pastable)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
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