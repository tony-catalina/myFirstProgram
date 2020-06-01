/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jkqk 数据列表
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
	        if(util.getArrayIndex(option.clumns,'gcbh')>-1){
	            clumns.push({field : 'gcbh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'gcbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gcbh==null?"":row.gcbh)+'>'+(row.gcbh==null?"":row.gcbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjh')>-1){
	            clumns.push({field : 'zjh',title : '证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'zjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjh==null?"":row.zjh)+'>'+(row.zjh==null?"":row.zjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jclx')>-1){
	            clumns.push({field : 'jclx',title : '检查类型',width : 200,hidden:util.getArrayIndex(option.hidden,'jclx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jclx==null?"":row.jclx)+'>'+(row.jclx==null?"":row.jclx)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'jclxString')>-1){
                clumns.push({field : 'jclxString',title : '检查类型',width : 200,hidden:util.getArrayIndex(option.hidden,'jclxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jclxString==null?"":row.jclxString)+'>'+(row.jclxString==null?"":row.jclxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'xx')>-1){
	            clumns.push({field : 'xx',title : '血型',width : 200,hidden:util.getArrayIndex(option.hidden,'xx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xx==null?"":row.xx)+'>'+(row.xx==null?"":row.xx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xy')>-1){
	            clumns.push({field : 'xy',title : '血压',width : 200,hidden:util.getArrayIndex(option.hidden,'xy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xy==null?"":row.xy)+'>'+(row.xy==null?"":row.xy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xl')>-1){
	            clumns.push({field : 'xl',title : '心率',width : 200,hidden:util.getArrayIndex(option.hidden,'xl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xl==null?"":row.xl)+'>'+(row.xl==null?"":row.xl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tw')>-1){
	            clumns.push({field : 'tw',title : '体温',width : 200,hidden:util.getArrayIndex(option.hidden,'tw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tw==null?"":row.tw)+'>'+(row.tw==null?"":row.tw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xcg')>-1){
	            clumns.push({field : 'xcg',title : '血常规',width : 200,hidden:util.getArrayIndex(option.hidden,'xcg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xcg==null?"":row.xcg)+'>'+(row.xcg==null?"":row.xcg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xdt')>-1){
	            clumns.push({field : 'xdt',title : '心电图',width : 200,hidden:util.getArrayIndex(option.hidden,'xdt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xdt==null?"":row.xdt)+'>'+(row.xdt==null?"":row.xdt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bc')>-1){
	            clumns.push({field : 'bc',title : 'B超',width : 200,hidden:util.getArrayIndex(option.hidden,'bc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bc==null?"":row.bc)+'>'+(row.bc==null?"":row.bc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zq')>-1){
	            clumns.push({field : 'zq',title : '脏器',width : 200,hidden:util.getArrayIndex(option.hidden,'zq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zq==null?"":row.zq)+'>'+(row.zq==null?"":row.zq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xp')>-1){
	            clumns.push({field : 'xp',title : '胸片',width : 200,hidden:util.getArrayIndex(option.hidden,'xp')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xp==null?"":row.xp)+'>'+(row.xp==null?"":row.xp)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ky')>-1){
	            clumns.push({field : 'ky',title : '口音',width : 200,hidden:util.getArrayIndex(option.hidden,'ky')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ky==null?"":row.ky)+'>'+(row.ky==null?"":row.ky)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yy')>-1){
	            clumns.push({field : 'yy',title : '表达能力',width : 200,hidden:util.getArrayIndex(option.hidden,'yy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yy==null?"":row.yy)+'>'+(row.yy==null?"":row.yy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xzzk')>-1){
	            clumns.push({field : 'xzzk',title : '行走状况',width : 200,hidden:util.getArrayIndex(option.hidden,'xzzk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xzzk==null?"":row.xzzk)+'>'+(row.xzzk==null?"":row.xzzk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jkzk')>-1){
	            clumns.push({field : 'jkzk',title : '健康状况',width : 200,hidden:util.getArrayIndex(option.hidden,'jkzk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jkzk==null?"":row.jkzk)+'>'+(row.jkzk==null?"":row.jkzk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jkzkString')>-1){
                clumns.push({field : 'jkzkString',title : '健康状况',width : 200,hidden:util.getArrayIndex(option.hidden,'jkzkString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jkzkString==null?"":row.jkzkString)+'>'+(row.jkzkString==null?"":row.jkzkString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'jbll')>-1){
	            clumns.push({field : 'jbll',title : '疾病来历',width : 200,hidden:util.getArrayIndex(option.hidden,'jbll')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbll==null?"":row.jbll)+'>'+(row.jbll==null?"":row.jbll)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gms')>-1){
	            clumns.push({field : 'gms',title : '过敏史',width : 200,hidden:util.getArrayIndex(option.hidden,'gms')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gms==null?"":row.gms)+'>'+(row.gms==null?"":row.gms)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'brbs')>-1){
	            clumns.push({field : 'brbs',title : '本人病史',width : 200,hidden:util.getArrayIndex(option.hidden,'brbs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.brbs==null?"":row.brbs)+'>'+(row.brbs==null?"":row.brbs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jtbs')>-1){
	            clumns.push({field : 'jtbs',title : '家庭病史',width : 200,hidden:util.getArrayIndex(option.hidden,'jtbs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jtbs==null?"":row.jtbs)+'>'+(row.jtbs==null?"":row.jtbs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'crb')>-1){
	            clumns.push({field : 'crb',title : '传染病',width : 200,hidden:util.getArrayIndex(option.hidden,'crb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.crb==null?"":row.crb)+'>'+(row.crb==null?"":row.crb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bhlx')>-1){
	            clumns.push({field : 'bhlx',title : '病号类型',width : 200,hidden:util.getArrayIndex(option.hidden,'bhlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bhlx==null?"":row.bhlx)+'>'+(row.bhlx==null?"":row.bhlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sbq')>-1){
	            clumns.push({field : 'sbq',title : '伤势',width : 200,hidden:util.getArrayIndex(option.hidden,'sbq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sbq==null?"":row.sbq)+'>'+(row.sbq==null?"":row.sbq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zsbw')>-1){
	            clumns.push({field : 'zsbw',title : '致伤部位',width : 200,hidden:util.getArrayIndex(option.hidden,'zsbw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zsbw==null?"":row.zsbw)+'>'+(row.zsbw==null?"":row.zsbw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zsrqyyy')>-1){
	            clumns.push({field : 'zsrqyyy',title : '致伤日期与原因',width : 200,hidden:util.getArrayIndex(option.hidden,'zsrqyyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zsrqyyy==null?"":row.zsrqyyy)+'>'+(row.zsrqyyy==null?"":row.zsrqyyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ylnxrsjc')>-1){
	            clumns.push({field : 'ylnxrsjc',title : '育龄女性妊娠检查',width : 200,hidden:util.getArrayIndex(option.hidden,'ylnxrsjc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ylnxrsjc==null?"":row.ylnxrsjc)+'>'+(row.ylnxrsjc==null?"":row.ylnxrsjc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sdrydj')>-1){
	            clumns.push({field : 'sdrydj',title : '涉毒人员毒检',width : 200,hidden:util.getArrayIndex(option.hidden,'sdrydj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sdrydj==null?"":row.sdrydj)+'>'+(row.sdrydj==null?"":row.sdrydj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'azbryjc')>-1){
	            clumns.push({field : 'azbryjc',title : '艾滋病人员检查',width : 200,hidden:util.getArrayIndex(option.hidden,'azbryjc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.azbryjc==null?"":row.azbryjc)+'>'+(row.azbryjc==null?"":row.azbryjc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tnbryjc')>-1){
	            clumns.push({field : 'tnbryjc',title : '糖尿病人员检查',width : 200,hidden:util.getArrayIndex(option.hidden,'tnbryjc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tnbryjc==null?"":row.tnbryjc)+'>'+(row.tnbryjc==null?"":row.tnbryjc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxbjc')>-1){
	            clumns.push({field : 'lxbjc',title : '流行病检查',width : 200,hidden:util.getArrayIndex(option.hidden,'lxbjc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxbjc==null?"":row.lxbjc)+'>'+(row.lxbjc==null?"":row.lxbjc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wxys')>-1){
	            clumns.push({field : 'wxys',title : '智力严重低下、侏儒、两性人、生活不能自理的',width : 200,hidden:util.getArrayIndex(option.hidden,'wxys')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wxys==null?"":row.wxys)+'>'+(row.wxys==null?"":row.wxys)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbsqyy')>-1){
	            clumns.push({field : 'tbsqyy',title : '此伤情是否为暴力拒捕、行凶、脱逃、自残、自杀行为',width : 200,hidden:util.getArrayIndex(option.hidden,'tbsqyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbsqyy==null?"":row.tbsqyy)+'>'+(row.tbsqyy==null?"":row.tbsqyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lyr')>-1){
	            clumns.push({field : 'lyr',title : '聋哑人',width : 200,hidden:util.getArrayIndex(option.hidden,'lyr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lyr==null?"":row.lyr)+'>'+(row.lyr==null?"":row.lyr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcys')>-1){
	            clumns.push({field : 'jcys',title : '检查医生',width : 200,hidden:util.getArrayIndex(option.hidden,'jcys')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcys==null?"":row.jcys)+'>'+(row.jcys==null?"":row.jcys)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ysyj')>-1){
	            clumns.push({field : 'ysyj',title : '医生意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ysyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysyj==null?"":row.ysyj)+'>'+(row.ysyj==null?"":row.ysyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cqcs')>-1){
	            clumns.push({field : 'cqcs',title : '采取措施',width : 200,hidden:util.getArrayIndex(option.hidden,'cqcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cqcs==null?"":row.cqcs)+'>'+(row.cqcs==null?"":row.cqcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ysjcrq')>-1){
	            clumns.push({field : 'ysjcrq',title : '医生检查日期',width : 200,hidden:util.getArrayIndex(option.hidden,'ysjcrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysjcrq==null?"":row.ysjcrq)+'>'+(row.ysjcrq==null?"":row.ysjcrq)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'ysjcrqString')>-1){
				clumns.push({field : 'ysjcrqString',title : '医生检查日期',width : 200,hidden:util.getArrayIndex(option.hidden,'ysjcrqString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysjcrqString==null?"":row.ysjcrqString)+'>'+(row.ysjcrqString==null?"":row.ysjcrqString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sjzljsbz')>-1){
	            clumns.push({field : 'sjzljsbz',title : '及时标记',width : 200,hidden:util.getArrayIndex(option.hidden,'sjzljsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjzljsbz==null?"":row.sjzljsbz)+'>'+(row.sjzljsbz==null?"":row.sjzljsbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfyjs')>-1){
	            clumns.push({field : 'sfyjs',title : '是否拒收(SHFO)',width : 200,hidden:util.getArrayIndex(option.hidden,'sfyjs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfyjs==null?"":row.sfyjs)+'>'+(row.sfyjs==null?"":row.sfyjs)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'sg')>-1){
	            clumns.push({field : 'sg',title : '身高',width : 200,hidden:util.getArrayIndex(option.hidden,'sg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sg==null?"":row.sg)+'>'+(row.sg==null?"":row.sg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tz')>-1){
	            clumns.push({field : 'tz',title : '体重',width : 200,hidden:util.getArrayIndex(option.hidden,'tz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tz==null?"":row.tz)+'>'+(row.tz==null?"":row.tz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zc')>-1){
	            clumns.push({field : 'zc',title : '足长',width : 200,hidden:util.getArrayIndex(option.hidden,'zc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zc==null?"":row.zc)+'>'+(row.zc==null?"":row.zc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tb')>-1){
	            clumns.push({field : 'tb',title : '头部',width : 200,hidden:util.getArrayIndex(option.hidden,'tb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tb==null?"":row.tb)+'>'+(row.tb==null?"":row.tb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jb')>-1){
	            clumns.push({field : 'jb',title : '颈部',width : 200,hidden:util.getArrayIndex(option.hidden,'jb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jb==null?"":row.jb)+'>'+(row.jb==null?"":row.jb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xb')>-1){
	            clumns.push({field : 'xb',title : '胸部',width : 200,hidden:util.getArrayIndex(option.hidden,'xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xb==null?"":row.xb)+'>'+(row.xb==null?"":row.xb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fb')>-1){
	            clumns.push({field : 'fb',title : '腹部',width : 200,hidden:util.getArrayIndex(option.hidden,'fb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fb==null?"":row.fb)+'>'+(row.fb==null?"":row.fb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bb')>-1){
	            clumns.push({field : 'bb',title : '背部',width : 200,hidden:util.getArrayIndex(option.hidden,'bb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bb==null?"":row.bb)+'>'+(row.bb==null?"":row.bb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'db')>-1){
	            clumns.push({field : 'db',title : '臀部',width : 200,hidden:util.getArrayIndex(option.hidden,'db')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.db==null?"":row.db)+'>'+(row.db==null?"":row.db)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sz')>-1){
	            clumns.push({field : 'sz',title : '上肢',width : 200,hidden:util.getArrayIndex(option.hidden,'sz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sz==null?"":row.sz)+'>'+(row.sz==null?"":row.sz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xz')>-1){
	            clumns.push({field : 'xz',title : '下肢',width : 200,hidden:util.getArrayIndex(option.hidden,'xz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xz==null?"":row.xz)+'>'+(row.xz==null?"":row.xz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xds')>-1){
	            clumns.push({field : 'xds',title : '吸毒史',width : 200,hidden:util.getArrayIndex(option.hidden,'xds')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xds==null?"":row.xds)+'>'+(row.xds==null?"":row.xds)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sss')>-1){
	            clumns.push({field : 'sss',title : '手术史',width : 200,hidden:util.getArrayIndex(option.hidden,'sss')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sss==null?"":row.sss)+'>'+(row.sss==null?"":row.sss)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zszz')>-1){
	            clumns.push({field : 'zszz',title : '自述症状',width : 200,hidden:util.getArrayIndex(option.hidden,'zszz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zszz==null?"":row.zszz)+'>'+(row.zszz==null?"":row.zszz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbssqk')>-1){
	            clumns.push({field : 'tbssqk',title : '体表损失情况',width : 200,hidden:util.getArrayIndex(option.hidden,'tbssqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbssqk==null?"":row.tbssqk)+'>'+(row.tbssqk==null?"":row.tbssqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyj')>-1){
	            clumns.push({field : 'ldyj',title : '领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyj==null?"":row.ldyj)+'>'+(row.ldyj==null?"":row.ldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldpssj')>-1){
	            clumns.push({field : 'ldpssj',title : '领导批示时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpssj==null?"":row.ldpssj)+'>'+(row.ldpssj==null?"":row.ldpssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldxm')>-1){
	            clumns.push({field : 'ldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldxm==null?"":row.ldxm)+'>'+(row.ldxm==null?"":row.ldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tsqksy')>-1){
	            clumns.push({field : 'tsqksy',title : '特殊情况收押',width : 200,hidden:util.getArrayIndex(option.hidden,'tsqksy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tsqksy==null?"":row.tsqksy)+'>'+(row.tsqksy==null?"":row.tsqksy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldpsbz')>-1){
	            clumns.push({field : 'ldpsbz',title : '领导批示标志',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsbz==null?"":row.ldpsbz)+'>'+(row.ldpsbz==null?"":row.ldpsbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbtsbz')>-1){
	            clumns.push({field : 'tbtsbz',title : '体表特殊标志',width : 200,hidden:util.getArrayIndex(option.hidden,'tbtsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbtsbz==null?"":row.tbtsbz)+'>'+(row.tbtsbz==null?"":row.tbtsbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tx')>-1){
	            clumns.push({field : 'tx',title : '体型',width : 200,hidden:util.getArrayIndex(option.hidden,'tx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tx==null?"":row.tx)+'>'+(row.tx==null?"":row.tx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lx')>-1){
	            clumns.push({field : 'lx',title : '脸型',width : 200,hidden:util.getArrayIndex(option.hidden,'lx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lx==null?"":row.lx)+'>'+(row.lx==null?"":row.lx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xf')>-1){
	            clumns.push({field : 'xf',title : '心肺',width : 200,hidden:util.getArrayIndex(option.hidden,'xf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xf==null?"":row.xf)+'>'+(row.xf==null?"":row.xf)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fz')>-1){
	            clumns.push({field : 'fz',title : '肺脏',width : 200,hidden:util.getArrayIndex(option.hidden,'fz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fz==null?"":row.fz)+'>'+(row.fz==null?"":row.fz)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});