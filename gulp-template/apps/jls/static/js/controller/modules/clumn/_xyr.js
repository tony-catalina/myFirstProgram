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
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wbrybh')>-1){
	            clumns.push({field : 'wbrybh',title : '网办人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'wbrybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wbrybh==null?"":row.wbrybh)+'>'+(row.wbrybh==null?"":row.wbrybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gcbh')>-1){
	            clumns.push({field : 'gcbh',title : '过程编号',width : 200,hidden:util.getArrayIndex(option.hidden,'gcbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gcbh==null?"":row.gcbh)+'>'+(row.gcbh==null?"":row.gcbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'taskid')>-1){
	            clumns.push({field : 'taskid',title : '业务进程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'taskid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.taskid==null?"":row.taskid)+'>'+(row.taskid==null?"":row.taskid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'snbh')>-1){
	            clumns.push({field : 'snbh',title : '所内编号',width : 200,hidden:util.getArrayIndex(option.hidden,'snbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.snbh==null?"":row.snbh)+'>'+(row.snbh==null?"":row.snbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsh')>-1){
	            clumns.push({field : 'jsh',title : '拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xm')>-1){
	            clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xmpy')>-1){
	            clumns.push({field : 'xmpy',title : '姓名拼音',width : 200,hidden:util.getArrayIndex(option.hidden,'xmpy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xmpy==null?"":row.xmpy)+'>'+(row.xmpy==null?"":row.xmpy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xmpyszm')>-1){
	            clumns.push({field : 'xmpyszm',title : '姓名拼音首字母',width : 200,hidden:util.getArrayIndex(option.hidden,'xmpyszm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xmpyszm==null?"":row.xmpyszm)+'>'+(row.xmpyszm==null?"":row.xmpyszm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bm')>-1){
	            clumns.push({field : 'bm',title : '别名',width : 200,hidden:util.getArrayIndex(option.hidden,'bm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bm==null?"":row.bm)+'>'+(row.bm==null?"":row.bm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bmty')>-1){
	            clumns.push({field : 'bmty',title : '别名同音',width : 200,hidden:util.getArrayIndex(option.hidden,'bmty')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bmty==null?"":row.bmty)+'>'+(row.bmty==null?"":row.bmty)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xb')>-1){
	            clumns.push({field : 'xb',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xb==null?"":row.xb)+'>'+(row.xb==null?"":row.xb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rsrq')>-1){
	            clumns.push({field : 'rsrq',title : '入所日期',width : 200,hidden:util.getArrayIndex(option.hidden,'rsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsrq==null?"":row.rsrq)+'>'+(row.rsrq==null?"":row.rsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjlx')>-1){
	            clumns.push({field : 'zjlx',title : '证件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'zjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjlx==null?"":row.zjlx)+'>'+(row.zjlx==null?"":row.zjlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjh')>-1){
	            clumns.push({field : 'zjh',title : '证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'zjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjh==null?"":row.zjh)+'>'+(row.zjh==null?"":row.zjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gj')>-1){
	            clumns.push({field : 'gj',title : '国籍',width : 200,hidden:util.getArrayIndex(option.hidden,'gj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gj==null?"":row.gj)+'>'+(row.gj==null?"":row.gj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'whcd')>-1){
	            clumns.push({field : 'whcd',title : '文化程度',width : 200,hidden:util.getArrayIndex(option.hidden,'whcd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.whcd==null?"":row.whcd)+'>'+(row.whcd==null?"":row.whcd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sf')>-1){
	            clumns.push({field : 'sf',title : '身份',width : 200,hidden:util.getArrayIndex(option.hidden,'sf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sf==null?"":row.sf)+'>'+(row.sf==null?"":row.sf)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tssf')>-1){
	            clumns.push({field : 'tssf',title : '特殊身份',width : 200,hidden:util.getArrayIndex(option.hidden,'tssf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tssf==null?"":row.tssf)+'>'+(row.tssf==null?"":row.tssf)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mz')>-1){
	            clumns.push({field : 'mz',title : '民族',width : 200,hidden:util.getArrayIndex(option.hidden,'mz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mz==null?"":row.mz)+'>'+(row.mz==null?"":row.mz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zzmm')>-1){
	            clumns.push({field : 'zzmm',title : '政治面貌',width : 200,hidden:util.getArrayIndex(option.hidden,'zzmm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzmm==null?"":row.zzmm)+'>'+(row.zzmm==null?"":row.zzmm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csrq')>-1){
	            clumns.push({field : 'csrq',title : '出生日期',width : 200,hidden:util.getArrayIndex(option.hidden,'csrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csrq==null?"":row.csrq)+'>'+(row.csrq==null?"":row.csrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hyzk')>-1){
	            clumns.push({field : 'hyzk',title : '婚姻状况',width : 200,hidden:util.getArrayIndex(option.hidden,'hyzk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hyzk==null?"":row.hyzk)+'>'+(row.hyzk==null?"":row.hyzk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjd')>-1){
	            clumns.push({field : 'hjd',title : '户籍地',width : 200,hidden:util.getArrayIndex(option.hidden,'hjd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjd==null?"":row.hjd)+'>'+(row.hjd==null?"":row.hjd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjdxz')>-1){
	            clumns.push({field : 'hjdxz',title : '户籍地详址',width : 200,hidden:util.getArrayIndex(option.hidden,'hjdxz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjdxz==null?"":row.hjdxz)+'>'+(row.hjdxz==null?"":row.hjdxz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jg')>-1){
	            clumns.push({field : 'jg',title : '籍贯',width : 200,hidden:util.getArrayIndex(option.hidden,'jg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jg==null?"":row.jg)+'>'+(row.jg==null?"":row.jg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xzd')>-1){
	            clumns.push({field : 'xzd',title : '现住地',width : 200,hidden:util.getArrayIndex(option.hidden,'xzd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xzd==null?"":row.xzd)+'>'+(row.xzd==null?"":row.xzd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xzdxz')>-1){
	            clumns.push({field : 'xzdxz',title : '现住地详址',width : 200,hidden:util.getArrayIndex(option.hidden,'xzdxz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xzdxz==null?"":row.xzdxz)+'>'+(row.xzdxz==null?"":row.xzdxz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gzdw')>-1){
	            clumns.push({field : 'gzdw',title : '工作单位',width : 200,hidden:util.getArrayIndex(option.hidden,'gzdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gzdw==null?"":row.gzdw)+'>'+(row.gzdw==null?"":row.gzdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zy')>-1){
	            clumns.push({field : 'zy',title : '职业',width : 200,hidden:util.getArrayIndex(option.hidden,'zy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zy==null?"":row.zy)+'>'+(row.zy==null?"":row.zy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jljdjg')>-1){
	            clumns.push({field : 'jljdjg',title : '拘留决定机关',width : 200,hidden:util.getArrayIndex(option.hidden,'jljdjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jljdjg==null?"":row.jljdjg)+'>'+(row.jljdjg==null?"":row.jljdjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'badw')>-1){
	            clumns.push({field : 'badw',title : '办案单位（送案单位）',width : 200,hidden:util.getArrayIndex(option.hidden,'badw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.badw==null?"":row.badw)+'>'+(row.badw==null?"":row.badw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bar')>-1){
	            clumns.push({field : 'bar',title : '办案人',width : 200,hidden:util.getArrayIndex(option.hidden,'bar')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bar==null?"":row.bar)+'>'+(row.bar==null?"":row.bar)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rsxz')>-1){
	            clumns.push({field : 'rsxz',title : '入所性质（收拘类别）',width : 200,hidden:util.getArrayIndex(option.hidden,'rsxz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsxz==null?"":row.rsxz)+'>'+(row.rsxz==null?"":row.rsxz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'syr')>-1){
	            clumns.push({field : 'syr',title : '收押人（收拘民警）',width : 200,hidden:util.getArrayIndex(option.hidden,'syr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.syr==null?"":row.syr)+'>'+(row.syr==null?"":row.syr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sypz')>-1){
	            clumns.push({field : 'sypz',title : '收押凭证',width : 200,hidden:util.getArrayIndex(option.hidden,'sypz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sypz==null?"":row.sypz)+'>'+(row.sypz==null?"":row.sypz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sypzwsh')>-1){
	            clumns.push({field : 'sypzwsh',title : '收押凭证文书号（收拘法律文书号）',width : 200,hidden:util.getArrayIndex(option.hidden,'sypzwsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sypzwsh==null?"":row.sypzwsh)+'>'+(row.sypzwsh==null?"":row.sypzwsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ay')>-1){
	            clumns.push({field : 'ay',title : '案由',width : 200,hidden:util.getArrayIndex(option.hidden,'ay')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ay==null?"":row.ay)+'>'+(row.ay==null?"":row.ay)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'barjh')>-1){
	            clumns.push({field : 'barjh',title : '办案人警号',width : 200,hidden:util.getArrayIndex(option.hidden,'barjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.barjh==null?"":row.barjh)+'>'+(row.barjh==null?"":row.barjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bardh')>-1){
	            clumns.push({field : 'bardh',title : '办案民警电话',width : 200,hidden:util.getArrayIndex(option.hidden,'bardh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bardh==null?"":row.bardh)+'>'+(row.bardh==null?"":row.bardh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czdh')>-1){
	            clumns.push({field : 'czdh',title : '办案传真电话',width : 200,hidden:util.getArrayIndex(option.hidden,'czdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czdh==null?"":row.czdh)+'>'+(row.czdh==null?"":row.czdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gyts')>-1){
	            clumns.push({field : 'gyts',title : '关押天数（日）',width : 200,hidden:util.getArrayIndex(option.hidden,'gyts')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gyts==null?"":row.gyts)+'>'+(row.gyts==null?"":row.gyts)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlrq')>-1){
	            clumns.push({field : 'jlrq',title : '拘留日期（拘留开始日期）',width : 200,hidden:util.getArrayIndex(option.hidden,'jlrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlrq==null?"":row.jlrq)+'>'+(row.jlrq==null?"":row.jlrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gyqx')>-1){
	            clumns.push({field : 'gyqx',title : '关押期限（拘留结束日期）',width : 200,hidden:util.getArrayIndex(option.hidden,'gyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gyqx==null?"":row.gyqx)+'>'+(row.gyqx==null?"":row.gyqx)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'jyaq')>-1){
	            clumns.push({field : 'jyaq',title : '简要案情',width : 200,hidden:util.getArrayIndex(option.hidden,'jyaq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jyaq==null?"":row.jyaq)+'>'+(row.jyaq==null?"":row.jyaq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dah')>-1){
	            clumns.push({field : 'dah',title : '档案号',width : 200,hidden:util.getArrayIndex(option.hidden,'dah')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dah==null?"":row.dah)+'>'+(row.dah==null?"":row.dah)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzrybh')>-1){
	            clumns.push({field : 'pzrybh',title : '派综人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'pzrybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzrybh==null?"":row.pzrybh)+'>'+(row.pzrybh==null?"":row.pzrybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzajbh')>-1){
	            clumns.push({field : 'pzajbh',title : '派综案件编号',width : 200,hidden:util.getArrayIndex(option.hidden,'pzajbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzajbh==null?"":row.pzajbh)+'>'+(row.pzajbh==null?"":row.pzajbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzflwsh')>-1){
	            clumns.push({field : 'pzflwsh',title : '派综法律文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'pzflwsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzflwsh==null?"":row.pzflwsh)+'>'+(row.pzflwsh==null?"":row.pzflwsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czzt')>-1){
	            clumns.push({field : 'czzt',title : '操作状态',width : 200,hidden:util.getArrayIndex(option.hidden,'czzt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czzt==null?"":row.czzt)+'>'+(row.czzt==null?"":row.czzt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsly')>-1){
	            clumns.push({field : 'jsly',title : '拒收理由',width : 200,hidden:util.getArrayIndex(option.hidden,'jsly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsly==null?"":row.jsly)+'>'+(row.jsly==null?"":row.jsly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'byjswsh')>-1){
	            clumns.push({field : 'byjswsh',title : '不宜拘留文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'byjswsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.byjswsh==null?"":row.byjswsh)+'>'+(row.byjswsh==null?"":row.byjswsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsrq')>-1){
	            clumns.push({field : 'jsrq',title : '拒收日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsrq==null?"":row.jsrq)+'>'+(row.jsrq==null?"":row.jsrq)+'</span>'}});
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