/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Csjkqk 数据列表
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
	        if(util.getArrayIndex(option.clumns,'gcbh')>-1){
	            clumns.push({field : 'gcbh',title : '过程编号',width : 200,hidden:util.getArrayIndex(option.hidden,'gcbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gcbh==null?"":row.gcbh)+'>'+(row.gcbh==null?"":row.gcbh)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'zq')>-1){
	            clumns.push({field : 'zq',title : '脏器',width : 200,hidden:util.getArrayIndex(option.hidden,'zq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zq==null?"":row.zq)+'>'+(row.zq==null?"":row.zq)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'tw')>-1){
	            clumns.push({field : 'tw',title : '体温',width : 200,hidden:util.getArrayIndex(option.hidden,'tw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tw==null?"":row.tw)+'>'+(row.tw==null?"":row.tw)+'</span>'}});
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
	            clumns.push({field : 'jb',title : '肩部',width : 200,hidden:util.getArrayIndex(option.hidden,'jb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jb==null?"":row.jb)+'>'+(row.jb==null?"":row.jb)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'bhlx')>-1){
	            clumns.push({field : 'bhlx',title : '病号类型',width : 200,hidden:util.getArrayIndex(option.hidden,'bhlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bhlx==null?"":row.bhlx)+'>'+(row.bhlx==null?"":row.bhlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yy')>-1){
	            clumns.push({field : 'yy',title : '语言表达能力',width : 200,hidden:util.getArrayIndex(option.hidden,'yy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yy==null?"":row.yy)+'>'+(row.yy==null?"":row.yy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xzzk')>-1){
	            clumns.push({field : 'xzzk',title : '行走状况',width : 200,hidden:util.getArrayIndex(option.hidden,'xzzk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xzzk==null?"":row.xzzk)+'>'+(row.xzzk==null?"":row.xzzk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jkzk')>-1){
	            clumns.push({field : 'jkzk',title : '健康状况',width : 200,hidden:util.getArrayIndex(option.hidden,'jkzk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jkzk==null?"":row.jkzk)+'>'+(row.jkzk==null?"":row.jkzk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbll')>-1){
	            clumns.push({field : 'jbll',title : '疾病来历',width : 200,hidden:util.getArrayIndex(option.hidden,'jbll')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbll==null?"":row.jbll)+'>'+(row.jbll==null?"":row.jbll)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'brbs')>-1){
	            clumns.push({field : 'brbs',title : '本人病史',width : 200,hidden:util.getArrayIndex(option.hidden,'brbs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.brbs==null?"":row.brbs)+'>'+(row.brbs==null?"":row.brbs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jtbs')>-1){
	            clumns.push({field : 'jtbs',title : '家庭病史',width : 200,hidden:util.getArrayIndex(option.hidden,'jtbs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jtbs==null?"":row.jtbs)+'>'+(row.jtbs==null?"":row.jtbs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gms')>-1){
	            clumns.push({field : 'gms',title : '过敏史',width : 200,hidden:util.getArrayIndex(option.hidden,'gms')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gms==null?"":row.gms)+'>'+(row.gms==null?"":row.gms)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'crb')>-1){
	            clumns.push({field : 'crb',title : '传染病',width : 200,hidden:util.getArrayIndex(option.hidden,'crb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.crb==null?"":row.crb)+'>'+(row.crb==null?"":row.crb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sbq')>-1){
	            clumns.push({field : 'sbq',title : '伤势伤情',width : 200,hidden:util.getArrayIndex(option.hidden,'sbq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sbq==null?"":row.sbq)+'>'+(row.sbq==null?"":row.sbq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zsbw')>-1){
	            clumns.push({field : 'zsbw',title : '致伤部位',width : 200,hidden:util.getArrayIndex(option.hidden,'zsbw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zsbw==null?"":row.zsbw)+'>'+(row.zsbw==null?"":row.zsbw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ysyj')>-1){
	            clumns.push({field : 'ysyj',title : '医生意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ysyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysyj==null?"":row.ysyj)+'>'+(row.ysyj==null?"":row.ysyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xp')>-1){
	            clumns.push({field : 'xp',title : '胸片',width : 200,hidden:util.getArrayIndex(option.hidden,'xp')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xp==null?"":row.xp)+'>'+(row.xp==null?"":row.xp)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcr')>-1){
	            clumns.push({field : 'jcr',title : '检查人',width : 200,hidden:util.getArrayIndex(option.hidden,'jcr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcr==null?"":row.jcr)+'>'+(row.jcr==null?"":row.jcr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zsrqyyy')>-1){
	            clumns.push({field : 'zsrqyyy',title : '致伤日期与原因',width : 200,hidden:util.getArrayIndex(option.hidden,'zsrqyyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zsrqyyy==null?"":row.zsrqyyy)+'>'+(row.zsrqyyy==null?"":row.zsrqyyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cqcs')>-1){
	            clumns.push({field : 'cqcs',title : '采取措施',width : 200,hidden:util.getArrayIndex(option.hidden,'cqcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cqcs==null?"":row.cqcs)+'>'+(row.cqcs==null?"":row.cqcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tmtz1')>-1){
	            clumns.push({field : 'tmtz1',title : '体貌特征',width : 200,hidden:util.getArrayIndex(option.hidden,'tmtz1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tmtz1==null?"":row.tmtz1)+'>'+(row.tmtz1==null?"":row.tmtz1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rtbw1')>-1){
	            clumns.push({field : 'rtbw1',title : '人体部位',width : 200,hidden:util.getArrayIndex(option.hidden,'rtbw1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rtbw1==null?"":row.rtbw1)+'>'+(row.rtbw1==null?"":row.rtbw1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fw1')>-1){
	            clumns.push({field : 'fw1',title : '方位',width : 200,hidden:util.getArrayIndex(option.hidden,'fw1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fw1==null?"":row.fw1)+'>'+(row.fw1==null?"":row.fw1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sl1')>-1){
	            clumns.push({field : 'sl1',title : '数量1',width : 200,hidden:util.getArrayIndex(option.hidden,'sl1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl1==null?"":row.sl1)+'>'+(row.sl1==null?"":row.sl1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tmtz2')>-1){
	            clumns.push({field : 'tmtz2',title : '体貌特征',width : 200,hidden:util.getArrayIndex(option.hidden,'tmtz2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tmtz2==null?"":row.tmtz2)+'>'+(row.tmtz2==null?"":row.tmtz2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rtbw2')>-1){
	            clumns.push({field : 'rtbw2',title : '人体部位',width : 200,hidden:util.getArrayIndex(option.hidden,'rtbw2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rtbw2==null?"":row.rtbw2)+'>'+(row.rtbw2==null?"":row.rtbw2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fw2')>-1){
	            clumns.push({field : 'fw2',title : '方位',width : 200,hidden:util.getArrayIndex(option.hidden,'fw2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fw2==null?"":row.fw2)+'>'+(row.fw2==null?"":row.fw2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sl2')>-1){
	            clumns.push({field : 'sl2',title : '数量2',width : 200,hidden:util.getArrayIndex(option.hidden,'sl2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl2==null?"":row.sl2)+'>'+(row.sl2==null?"":row.sl2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tmtz3')>-1){
	            clumns.push({field : 'tmtz3',title : '体貌特征',width : 200,hidden:util.getArrayIndex(option.hidden,'tmtz3')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tmtz3==null?"":row.tmtz3)+'>'+(row.tmtz3==null?"":row.tmtz3)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rtbw3')>-1){
	            clumns.push({field : 'rtbw3',title : '人体部位',width : 200,hidden:util.getArrayIndex(option.hidden,'rtbw3')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rtbw3==null?"":row.rtbw3)+'>'+(row.rtbw3==null?"":row.rtbw3)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fw3')>-1){
	            clumns.push({field : 'fw3',title : '方位',width : 200,hidden:util.getArrayIndex(option.hidden,'fw3')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fw3==null?"":row.fw3)+'>'+(row.fw3==null?"":row.fw3)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sl3')>-1){
	            clumns.push({field : 'sl3',title : '数量3',width : 200,hidden:util.getArrayIndex(option.hidden,'sl3')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl3==null?"":row.sl3)+'>'+(row.sl3==null?"":row.sl3)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tmtz4')>-1){
	            clumns.push({field : 'tmtz4',title : '体貌特征',width : 200,hidden:util.getArrayIndex(option.hidden,'tmtz4')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tmtz4==null?"":row.tmtz4)+'>'+(row.tmtz4==null?"":row.tmtz4)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rtbw4')>-1){
	            clumns.push({field : 'rtbw4',title : '人体部位',width : 200,hidden:util.getArrayIndex(option.hidden,'rtbw4')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rtbw4==null?"":row.rtbw4)+'>'+(row.rtbw4==null?"":row.rtbw4)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fw4')>-1){
	            clumns.push({field : 'fw4',title : '方位',width : 200,hidden:util.getArrayIndex(option.hidden,'fw4')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fw4==null?"":row.fw4)+'>'+(row.fw4==null?"":row.fw4)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sl4')>-1){
	            clumns.push({field : 'sl4',title : '数量4',width : 200,hidden:util.getArrayIndex(option.hidden,'sl4')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl4==null?"":row.sl4)+'>'+(row.sl4==null?"":row.sl4)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tmtz5')>-1){
	            clumns.push({field : 'tmtz5',title : '体貌特征',width : 200,hidden:util.getArrayIndex(option.hidden,'tmtz5')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tmtz5==null?"":row.tmtz5)+'>'+(row.tmtz5==null?"":row.tmtz5)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rtbw5')>-1){
	            clumns.push({field : 'rtbw5',title : '人体部位',width : 200,hidden:util.getArrayIndex(option.hidden,'rtbw5')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rtbw5==null?"":row.rtbw5)+'>'+(row.rtbw5==null?"":row.rtbw5)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fw5')>-1){
	            clumns.push({field : 'fw5',title : '方位',width : 200,hidden:util.getArrayIndex(option.hidden,'fw5')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fw5==null?"":row.fw5)+'>'+(row.fw5==null?"":row.fw5)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sl5')>-1){
	            clumns.push({field : 'sl5',title : '数量5',width : 200,hidden:util.getArrayIndex(option.hidden,'sl5')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl5==null?"":row.sl5)+'>'+(row.sl5==null?"":row.sl5)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sjzljsbz')>-1){
	            clumns.push({field : 'sjzljsbz',title : '数据质量及时标志',width : 200,hidden:util.getArrayIndex(option.hidden,'sjzljsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjzljsbz==null?"":row.sjzljsbz)+'>'+(row.sjzljsbz==null?"":row.sjzljsbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scbz')>-1){
	            clumns.push({field : 'scbz',title : '上传标志',width : 200,hidden:util.getArrayIndex(option.hidden,'scbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scbz==null?"":row.scbz)+'>'+(row.scbz==null?"":row.scbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'operator')>-1){
	            clumns.push({field : 'operator',title : '操作人',width : 200,hidden:util.getArrayIndex(option.hidden,'operator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.operator==null?"":row.operator)+'>'+(row.operator==null?"":row.operator)+'</span>'}});
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
	        
	        return clumns;
	    };
	    return main;
	});