/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Xyr 数据列表
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
	        if(util.getArrayIndex(option.clumns,'gcbh')>-1){
	            clumns.push({field : 'gcbh',title : '过程编号',width : 200,hidden:util.getArrayIndex(option.hidden,'gcbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gcbh==null?"":row.gcbh)+'>'+(row.gcbh==null?"":row.gcbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wbrybh')>-1){
	            clumns.push({field : 'wbrybh',title : '网办人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'wbrybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wbrybh==null?"":row.wbrybh)+'>'+(row.wbrybh==null?"":row.wbrybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dah')>-1){
	            clumns.push({field : 'dah',title : '档案编号',width : 200,hidden:util.getArrayIndex(option.hidden,'dah')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dah==null?"":row.dah)+'>'+(row.dah==null?"":row.dah)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xm')>-1){
	            clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xmpy')>-1){
	            clumns.push({field : 'xmpy',title : '姓名拼音',width : 200,hidden:util.getArrayIndex(option.hidden,'xmpy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xmpy==null?"":row.xmpy)+'>'+(row.xmpy==null?"":row.xmpy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bm')>-1){
	            clumns.push({field : 'bm',title : '别名',width : 200,hidden:util.getArrayIndex(option.hidden,'bm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bm==null?"":row.bm)+'>'+(row.bm==null?"":row.bm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bmty')>-1){
	            clumns.push({field : 'bmty',title : '别名同音',width : 200,hidden:util.getArrayIndex(option.hidden,'bmty')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bmty==null?"":row.bmty)+'>'+(row.bmty==null?"":row.bmty)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mz')>-1){
	            clumns.push({field : 'mz',title : '民族',width : 200,hidden:util.getArrayIndex(option.hidden,'mz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mz==null?"":row.mz)+'>'+(row.mz==null?"":row.mz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gj')>-1){
	            clumns.push({field : 'gj',title : '国籍',width : 200,hidden:util.getArrayIndex(option.hidden,'gj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gj==null?"":row.gj)+'>'+(row.gj==null?"":row.gj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xb')>-1){
	            clumns.push({field : 'xb',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xb==null?"":row.xb)+'>'+(row.xb==null?"":row.xb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csrq')>-1){
	            clumns.push({field : 'csrq',title : '出生日期',width : 200,hidden:util.getArrayIndex(option.hidden,'csrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csrq==null?"":row.csrq)+'>'+(row.csrq==null?"":row.csrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjlx')>-1){
	            clumns.push({field : 'zjlx',title : '证件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'zjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjlx==null?"":row.zjlx)+'>'+(row.zjlx==null?"":row.zjlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjh')>-1){
	            clumns.push({field : 'zjh',title : '证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'zjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjh==null?"":row.zjh)+'>'+(row.zjh==null?"":row.zjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zzmm')>-1){
	            clumns.push({field : 'zzmm',title : '政治面貌',width : 200,hidden:util.getArrayIndex(option.hidden,'zzmm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzmm==null?"":row.zzmm)+'>'+(row.zzmm==null?"":row.zzmm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hyzk')>-1){
	            clumns.push({field : 'hyzk',title : '婚姻状况',width : 200,hidden:util.getArrayIndex(option.hidden,'hyzk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hyzk==null?"":row.hyzk)+'>'+(row.hyzk==null?"":row.hyzk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zuc')>-1){
	            clumns.push({field : 'zuc',title : '足长',width : 200,hidden:util.getArrayIndex(option.hidden,'zuc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zuc==null?"":row.zuc)+'>'+(row.zuc==null?"":row.zuc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sg')>-1){
	            clumns.push({field : 'sg',title : '身高',width : 200,hidden:util.getArrayIndex(option.hidden,'sg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sg==null?"":row.sg)+'>'+(row.sg==null?"":row.sg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jg')>-1){
	            clumns.push({field : 'jg',title : '籍贯',width : 200,hidden:util.getArrayIndex(option.hidden,'jg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jg==null?"":row.jg)+'>'+(row.jg==null?"":row.jg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjd')>-1){
	            clumns.push({field : 'hjd',title : '户籍地',width : 200,hidden:util.getArrayIndex(option.hidden,'hjd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjd==null?"":row.hjd)+'>'+(row.hjd==null?"":row.hjd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjdxz')>-1){
	            clumns.push({field : 'hjdxz',title : '户籍地详址',width : 200,hidden:util.getArrayIndex(option.hidden,'hjdxz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjdxz==null?"":row.hjdxz)+'>'+(row.hjdxz==null?"":row.hjdxz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xzd')>-1){
	            clumns.push({field : 'xzd',title : '现住地',width : 200,hidden:util.getArrayIndex(option.hidden,'xzd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xzd==null?"":row.xzd)+'>'+(row.xzd==null?"":row.xzd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xzdxz')>-1){
	            clumns.push({field : 'xzdxz',title : '现住地详址',width : 200,hidden:util.getArrayIndex(option.hidden,'xzdxz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xzdxz==null?"":row.xzdxz)+'>'+(row.xzdxz==null?"":row.xzdxz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'whcd')>-1){
	            clumns.push({field : 'whcd',title : '文化程度',width : 200,hidden:util.getArrayIndex(option.hidden,'whcd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.whcd==null?"":row.whcd)+'>'+(row.whcd==null?"":row.whcd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zc')>-1){
	            clumns.push({field : 'zc',title : '专长',width : 200,hidden:util.getArrayIndex(option.hidden,'zc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zc==null?"":row.zc)+'>'+(row.zc==null?"":row.zc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sf')>-1){
	            clumns.push({field : 'sf',title : '身份',width : 200,hidden:util.getArrayIndex(option.hidden,'sf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sf==null?"":row.sf)+'>'+(row.sf==null?"":row.sf)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tssf')>-1){
	            clumns.push({field : 'tssf',title : '特殊身份',width : 200,hidden:util.getArrayIndex(option.hidden,'tssf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tssf==null?"":row.tssf)+'>'+(row.tssf==null?"":row.tssf)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zy')>-1){
	            clumns.push({field : 'zy',title : '职业',width : 200,hidden:util.getArrayIndex(option.hidden,'zy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zy==null?"":row.zy)+'>'+(row.zy==null?"":row.zy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gzdw')>-1){
	            clumns.push({field : 'gzdw',title : '(原)工作单位',width : 200,hidden:util.getArrayIndex(option.hidden,'gzdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gzdw==null?"":row.gzdw)+'>'+(row.gzdw==null?"":row.gzdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jkzk')>-1){
	            clumns.push({field : 'jkzk',title : '健康情况',width : 200,hidden:util.getArrayIndex(option.hidden,'jkzk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jkzk==null?"":row.jkzk)+'>'+(row.jkzk==null?"":row.jkzk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bhlx')>-1){
	            clumns.push({field : 'bhlx',title : '病号类型(BHLX)',width : 200,hidden:util.getArrayIndex(option.hidden,'bhlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bhlx==null?"":row.bhlx)+'>'+(row.bhlx==null?"":row.bhlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'azb')>-1){
	            clumns.push({field : 'azb',title : '艾滋病(SHFO)',width : 200,hidden:util.getArrayIndex(option.hidden,'azb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.azb==null?"":row.azb)+'>'+(row.azb==null?"":row.azb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rsrq')>-1){
	            clumns.push({field : 'rsrq',title : '入所日期',width : 200,hidden:util.getArrayIndex(option.hidden,'rsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsrq==null?"":row.rsrq)+'>'+(row.rsrq==null?"":row.rsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rsxz')>-1){
	            clumns.push({field : 'rsxz',title : '入所原因',width : 200,hidden:util.getArrayIndex(option.hidden,'rsxz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsxz==null?"":row.rsxz)+'>'+(row.rsxz==null?"":row.rsxz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zrdw')>-1){
	            clumns.push({field : 'zrdw',title : '转入单位',width : 200,hidden:util.getArrayIndex(option.hidden,'zrdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zrdw==null?"":row.zrdw)+'>'+(row.zrdw==null?"":row.zrdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sydw')>-1){
	            clumns.push({field : 'sydw',title : '送押单位',width : 200,hidden:util.getArrayIndex(option.hidden,'sydw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sydw==null?"":row.sydw)+'>'+(row.sydw==null?"":row.sydw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'syr')>-1){
	            clumns.push({field : 'syr',title : '送押人',width : 200,hidden:util.getArrayIndex(option.hidden,'syr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.syr==null?"":row.syr)+'>'+(row.syr==null?"":row.syr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sy')>-1){
	            clumns.push({field : 'sy',title : '收押人',width : 200,hidden:util.getArrayIndex(option.hidden,'sy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sy==null?"":row.sy)+'>'+(row.sy==null?"":row.sy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'byzd')>-1){
	            clumns.push({field : 'byzd',title : '收押非拘捕人员',width : 200,hidden:util.getArrayIndex(option.hidden,'byzd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.byzd==null?"":row.byzd)+'>'+(row.byzd==null?"":row.byzd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sypzwsh')>-1){
	            clumns.push({field : 'sypzwsh',title : '收押凭证文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'sypzwsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sypzwsh==null?"":row.sypzwsh)+'>'+(row.sypzwsh==null?"":row.sypzwsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sypz')>-1){
	            clumns.push({field : 'sypz',title : '收押凭证',width : 200,hidden:util.getArrayIndex(option.hidden,'sypz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sypz==null?"":row.sypz)+'>'+(row.sypz==null?"":row.sypz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jyrq')>-1){
	            clumns.push({field : 'jyrq',title : '羁押日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jyrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jyrq==null?"":row.jyrq)+'>'+(row.jyrq==null?"":row.jyrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gyqx')>-1){
	            clumns.push({field : 'gyqx',title : '关押期限',width : 200,hidden:util.getArrayIndex(option.hidden,'gyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gyqx==null?"":row.gyqx)+'>'+(row.gyqx==null?"":row.gyqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ay')>-1){
	            clumns.push({field : 'ay',title : '主要案由',width : 200,hidden:util.getArrayIndex(option.hidden,'ay')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ay==null?"":row.ay)+'>'+(row.ay==null?"":row.ay)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xhay')>-1){
	            clumns.push({field : 'xhay',title : '细化案由',width : 200,hidden:util.getArrayIndex(option.hidden,'xhay')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xhay==null?"":row.xhay)+'>'+(row.xhay==null?"":row.xhay)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fzjl')>-1){
	            clumns.push({field : 'fzjl',title : '犯罪经历',width : 200,hidden:util.getArrayIndex(option.hidden,'fzjl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fzjl==null?"":row.fzjl)+'>'+(row.fzjl==null?"":row.fzjl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jyaq')>-1){
	            clumns.push({field : 'jyaq',title : '简要案情',width : 200,hidden:util.getArrayIndex(option.hidden,'jyaq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jyaq==null?"":row.jyaq)+'>'+(row.jyaq==null?"":row.jyaq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'caaj')>-1){
	            clumns.push({field : 'caaj',title : '从案类型',width : 200,hidden:util.getArrayIndex(option.hidden,'caaj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.caaj==null?"":row.caaj)+'>'+(row.caaj==null?"":row.caaj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cylx')>-1){
	            clumns.push({field : 'cylx',title : '成员类型',width : 200,hidden:util.getArrayIndex(option.hidden,'cylx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cylx==null?"":row.cylx)+'>'+(row.cylx==null?"":row.cylx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bar')>-1){
	            clumns.push({field : 'bar',title : '办案人 多个以逗号或空格分开',width : 200,hidden:util.getArrayIndex(option.hidden,'bar')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bar==null?"":row.bar)+'>'+(row.bar==null?"":row.bar)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'barjh')>-1){
	            clumns.push({field : 'barjh',title : '办案人警号 多个以逗号或空格分开',width : 200,hidden:util.getArrayIndex(option.hidden,'barjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.barjh==null?"":row.barjh)+'>'+(row.barjh==null?"":row.barjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bahj')>-1){
	            clumns.push({field : 'bahj',title : '办案环节',width : 200,hidden:util.getArrayIndex(option.hidden,'bahj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bahj==null?"":row.bahj)+'>'+(row.bahj==null?"":row.bahj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bardh')>-1){
	            clumns.push({field : 'bardh',title : '办案民警电话',width : 200,hidden:util.getArrayIndex(option.hidden,'bardh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bardh==null?"":row.bardh)+'>'+(row.bardh==null?"":row.bardh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zzqsrq')>-1){
	            clumns.push({field : 'zzqsrq',title : '暂住起始日期',width : 200,hidden:util.getArrayIndex(option.hidden,'zzqsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzqsrq==null?"":row.zzqsrq)+'>'+(row.zzqsrq==null?"":row.zzqsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlrq')>-1){
	            clumns.push({field : 'jlrq',title : '扣留日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jlrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlrq==null?"":row.jlrq)+'>'+(row.jlrq==null?"":row.jlrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbrq')>-1){
	            clumns.push({field : 'dbrq',title : '逮捕日期',width : 200,hidden:util.getArrayIndex(option.hidden,'dbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbrq==null?"":row.dbrq)+'>'+(row.dbrq==null?"":row.dbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'badw')>-1){
	            clumns.push({field : 'badw',title : '办案单位',width : 200,hidden:util.getArrayIndex(option.hidden,'badw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.badw==null?"":row.badw)+'>'+(row.badw==null?"":row.badw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dwlx')>-1){
	            clumns.push({field : 'dwlx',title : '办案单位类型',width : 200,hidden:util.getArrayIndex(option.hidden,'dwlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dwlx==null?"":row.dwlx)+'>'+(row.dwlx==null?"":row.dwlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'syrkid')>-1){
	            clumns.push({field : 'syrkid',title : '实有人口ID',width : 200,hidden:util.getArrayIndex(option.hidden,'syrkid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.syrkid==null?"":row.syrkid)+'>'+(row.syrkid==null?"":row.syrkid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czzt')>-1){
	            clumns.push({field : 'czzt',title : '操作状态',width : 200,hidden:util.getArrayIndex(option.hidden,'czzt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czzt==null?"":row.czzt)+'>'+(row.czzt==null?"":row.czzt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsly')>-1){
	            clumns.push({field : 'jsly',title : '拒收理由',width : 200,hidden:util.getArrayIndex(option.hidden,'jsly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsly==null?"":row.jsly)+'>'+(row.jsly==null?"":row.jsly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'aqdj')>-1){
	            clumns.push({field : 'aqdj',title : '安全等级',width : 200,hidden:util.getArrayIndex(option.hidden,'aqdj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.aqdj==null?"":row.aqdj)+'>'+(row.aqdj==null?"":row.aqdj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfyxjslx')>-1){
	            clumns.push({field : 'sfyxjslx',title : '是否允许家属联系',width : 200,hidden:util.getArrayIndex(option.hidden,'sfyxjslx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfyxjslx==null?"":row.sfyxjslx)+'>'+(row.sfyxjslx==null?"":row.sfyxjslx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'creator')>-1){
	            clumns.push({field : 'creator',title : '创建人',width : 200,hidden:util.getArrayIndex(option.hidden,'creator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.creator==null?"":row.creator)+'>'+(row.creator==null?"":row.creator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'creatorjh')>-1){
	            clumns.push({field : 'creatorjh',title : '创建人警号',width : 200,hidden:util.getArrayIndex(option.hidden,'creatorjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.creatorjh==null?"":row.creatorjh)+'>'+(row.creatorjh==null?"":row.creatorjh)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'zwbh')>-1){
	            clumns.push({field : 'zwbh',title : '指纹编号',width : 200,hidden:util.getArrayIndex(option.hidden,'zwbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zwbh==null?"":row.zwbh)+'>'+(row.zwbh==null?"":row.zwbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'shyy')>-1){
	            clumns.push({field : 'shyy',title : '收回原因',width : 200,hidden:util.getArrayIndex(option.hidden,'shyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.shyy==null?"":row.shyy)+'>'+(row.shyy==null?"":row.shyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'shrq')>-1){
	            clumns.push({field : 'shrq',title : '收回日期',width : 200,hidden:util.getArrayIndex(option.hidden,'shrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.shrq==null?"":row.shrq)+'>'+(row.shrq==null?"":row.shrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'flwsh')>-1){
	            clumns.push({field : 'flwsh',title : '法律文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'flwsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.flwsh==null?"":row.flwsh)+'>'+(row.flwsh==null?"":row.flwsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsh')>-1){
	            clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcys')>-1){
	            clumns.push({field : 'jcys',title : '检查医生',width : 200,hidden:util.getArrayIndex(option.hidden,'jcys')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcys==null?"":row.jcys)+'>'+(row.jcys==null?"":row.jcys)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xzhjaj')>-1){
	            clumns.push({field : 'xzhjaj',title : '限制会见案件',width : 200,hidden:util.getArrayIndex(option.hidden,'xzhjaj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xzhjaj==null?"":row.xzhjaj)+'>'+(row.xzhjaj==null?"":row.xzhjaj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lb')>-1){
	            clumns.push({field : 'lb',title : '类别',width : 200,hidden:util.getArrayIndex(option.hidden,'lb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lb==null?"":row.lb)+'>'+(row.lb==null?"":row.lb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'spdw')>-1){
	            clumns.push({field : 'spdw',title : '审批单位',width : 200,hidden:util.getArrayIndex(option.hidden,'spdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.spdw==null?"":row.spdw)+'>'+(row.spdw==null?"":row.spdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'spr')>-1){
	            clumns.push({field : 'spr',title : '审批人',width : 200,hidden:util.getArrayIndex(option.hidden,'spr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.spr==null?"":row.spr)+'>'+(row.spr==null?"":row.spr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gllb')>-1){
	            clumns.push({field : 'gllb',title : '管理类别',width : 200,hidden:util.getArrayIndex(option.hidden,'gllb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gllb==null?"":row.gllb)+'>'+(row.gllb==null?"":row.gllb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zxf')>-1){
	            clumns.push({field : 'zxf',title : '重刑犯',width : 200,hidden:util.getArrayIndex(option.hidden,'zxf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zxf==null?"":row.zxf)+'>'+(row.zxf==null?"":row.zxf)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tabh')>-1){
	            clumns.push({field : 'tabh',title : '同案编号',width : 200,hidden:util.getArrayIndex(option.hidden,'tabh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tabh==null?"":row.tabh)+'>'+(row.tabh==null?"":row.tabh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zw')>-1){
	            clumns.push({field : 'zw',title : '职务',width : 200,hidden:util.getArrayIndex(option.hidden,'zw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zw==null?"":row.zw)+'>'+(row.zw==null?"":row.zw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fwbh')>-1){
	            clumns.push({field : 'fwbh',title : '附物编号',width : 200,hidden:util.getArrayIndex(option.hidden,'fwbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fwbh==null?"":row.fwbh)+'>'+(row.fwbh==null?"":row.fwbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sdnjccjg')>-1){
	            clumns.push({field : 'sdnjccjg',title : '涉毒尿检初查结果',width : 200,hidden:util.getArrayIndex(option.hidden,'sdnjccjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sdnjccjg==null?"":row.sdnjccjg)+'>'+(row.sdnjccjg==null?"":row.sdnjccjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sdnjdw')>-1){
	            clumns.push({field : 'sdnjdw',title : '涉毒尿检单位',width : 200,hidden:util.getArrayIndex(option.hidden,'sdnjdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sdnjdw==null?"":row.sdnjdw)+'>'+(row.sdnjdw==null?"":row.sdnjdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sdnjcjsj')>-1){
	            clumns.push({field : 'sdnjcjsj',title : '涉毒尿检初检时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sdnjcjsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sdnjcjsj==null?"":row.sdnjcjsj)+'>'+(row.sdnjcjsj==null?"":row.sdnjcjsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sdnjjcr')>-1){
	            clumns.push({field : 'sdnjjcr',title : '涉毒尿检检查人',width : 200,hidden:util.getArrayIndex(option.hidden,'sdnjjcr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sdnjjcr==null?"":row.sdnjjcr)+'>'+(row.sdnjjcr==null?"":row.sdnjjcr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxdh')>-1){
	            clumns.push({field : 'lxdh',title : '联系电话',width : 200,hidden:util.getArrayIndex(option.hidden,'lxdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxdh==null?"":row.lxdh)+'>'+(row.lxdh==null?"":row.lxdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czr')>-1){
	            clumns.push({field : 'czr',title : '暂不收押操作人',width : 200,hidden:util.getArrayIndex(option.hidden,'czr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czr==null?"":row.czr)+'>'+(row.czr==null?"":row.czr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czsj')>-1){
	            clumns.push({field : 'czsj',title : '暂不收押操作时间',width : 200,hidden:util.getArrayIndex(option.hidden,'czsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czsj==null?"":row.czsj)+'>'+(row.czsj==null?"":row.czsj)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});