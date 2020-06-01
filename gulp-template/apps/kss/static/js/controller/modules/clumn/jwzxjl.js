/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jwzxjl 数据列表
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
	            clumns.push({field : 'rybh',title : '申请对象',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqyy')>-1){
	            clumns.push({field : 'sqyy',title : '申请原因',width : 200,hidden:util.getArrayIndex(option.hidden,'sqyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqyy==null?"":row.sqyy)+'>'+(row.sqyy==null?"":row.sqyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqrxm')>-1){
	            clumns.push({field : 'sqrxm',title : '申请人姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'sqrxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqrxm==null?"":row.sqrxm)+'>'+(row.sqrxm==null?"":row.sqrxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqsj')>-1){
	            clumns.push({field : 'sqsj',title : '申请时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sqsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqsj==null?"":row.sqsj)+'>'+(row.sqsj==null?"":row.sqsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqrzjh')>-1){
	            clumns.push({field : 'sqrzjh',title : '申请人证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'sqrzjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqrzjh==null?"":row.sqrzjh)+'>'+(row.sqrzjh==null?"":row.sqrzjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'spjg')>-1){
	            clumns.push({field : 'spjg',title : '申请结果',width : 200,hidden:util.getArrayIndex(option.hidden,'spjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.spjg==null?"":row.spjg)+'>'+(row.spjg==null?"":row.spjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldxm')>-1){
	            clumns.push({field : 'ldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldxm==null?"":row.ldxm)+'>'+(row.ldxm==null?"":row.ldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldpssj')>-1){
	            clumns.push({field : 'ldpssj',title : '领导批示时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpssj==null?"":row.ldpssj)+'>'+(row.ldpssj==null?"":row.ldpssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyj')>-1){
	            clumns.push({field : 'ldyj',title : '领导批示意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyj==null?"":row.ldyj)+'>'+(row.ldyj==null?"":row.ldyj)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'sqrlx')>-1){
	            clumns.push({field : 'sqrlx',title : '申请人类型',width : 200,hidden:util.getArrayIndex(option.hidden,'sqrlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqrlx==null?"":row.sqrlx)+'>'+(row.sqrlx==null?"":row.sqrlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'flws')>-1){
	            clumns.push({field : 'flws',title : '法律文书',width : 200,hidden:util.getArrayIndex(option.hidden,'flws')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.flws==null?"":row.flws)+'>'+(row.flws==null?"":row.flws)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzh')>-1){
	            clumns.push({field : 'pzh',title : '凭证号',width : 200,hidden:util.getArrayIndex(option.hidden,'pzh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzh==null?"":row.pzh)+'>'+(row.pzh==null?"":row.pzh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqlx')>-1){
	            clumns.push({field : 'sqlx',title : '申请类型',width : 200,hidden:util.getArrayIndex(option.hidden,'sqlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqlx==null?"":row.sqlx)+'>'+(row.sqlx==null?"":row.sqlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clsx')>-1){
	            clumns.push({field : 'clsx',title : '出所流向',width : 200,hidden:util.getArrayIndex(option.hidden,'clsx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clsx==null?"":row.clsx)+'>'+(row.clsx==null?"":row.clsx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ncssj')>-1){
	            clumns.push({field : 'ncssj',title : '拟定出所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ncssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ncssj==null?"":row.ncssj)+'>'+(row.ncssj==null?"":row.ncssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ncsqx')>-1){
	            clumns.push({field : 'ncsqx',title : '拟定出所期限',width : 200,hidden:util.getArrayIndex(option.hidden,'ncsqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ncsqx==null?"":row.ncsqx)+'>'+(row.ncsqx==null?"":row.ncsqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbr')>-1){
	            clumns.push({field : 'dbr',title : '担保人',width : 200,hidden:util.getArrayIndex(option.hidden,'dbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbr==null?"":row.dbr)+'>'+(row.dbr==null?"":row.dbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbrdz')>-1){
	            clumns.push({field : 'dbrdz',title : '担保人地址',width : 200,hidden:util.getArrayIndex(option.hidden,'dbrdz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbrdz==null?"":row.dbrdz)+'>'+(row.dbrdz==null?"":row.dbrdz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbrdw')>-1){
	            clumns.push({field : 'dbrdw',title : '担保人单位',width : 200,hidden:util.getArrayIndex(option.hidden,'dbrdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbrdw==null?"":row.dbrdw)+'>'+(row.dbrdw==null?"":row.dbrdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbryxyrgx')>-1){
	            clumns.push({field : 'dbryxyrgx',title : '担保人与嫌疑人关系',width : 200,hidden:util.getArrayIndex(option.hidden,'dbryxyrgx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbryxyrgx==null?"":row.dbryxyrgx)+'>'+(row.dbryxyrgx==null?"":row.dbryxyrgx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gzqjbx')>-1){
	            clumns.push({field : 'gzqjbx',title : '改造期间表现',width : 200,hidden:util.getArrayIndex(option.hidden,'gzqjbx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gzqjbx==null?"":row.gzqjbx)+'>'+(row.gzqjbx==null?"":row.gzqjbx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tfr')>-1){
	            clumns.push({field : 'tfr',title : '填发人',width : 200,hidden:util.getArrayIndex(option.hidden,'tfr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tfr==null?"":row.tfr)+'>'+(row.tfr==null?"":row.tfr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tfrq')>-1){
	            clumns.push({field : 'tfrq',title : '填发日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tfrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tfrq==null?"":row.tfrq)+'>'+(row.tfrq==null?"":row.tfrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'kssyj')>-1){
	            clumns.push({field : 'kssyj',title : '看守所意见',width : 200,hidden:util.getArrayIndex(option.hidden,'kssyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kssyj==null?"":row.kssyj)+'>'+(row.kssyj==null?"":row.kssyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zsjcrymd')>-1){
	            clumns.push({field : 'zsjcrymd',title : '驻所检查人员名单',width : 200,hidden:util.getArrayIndex(option.hidden,'zsjcrymd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zsjcrymd==null?"":row.zsjcrymd)+'>'+(row.zsjcrymd==null?"":row.zsjcrymd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jdjg')>-1){
	            clumns.push({field : 'jdjg',title : '鉴定机关',width : 200,hidden:util.getArrayIndex(option.hidden,'jdjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jdjg==null?"":row.jdjg)+'>'+(row.jdjg==null?"":row.jdjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jdsj')>-1){
	            clumns.push({field : 'jdsj',title : '鉴定时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jdsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jdsj==null?"":row.jdsj)+'>'+(row.jdsj==null?"":row.jdsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nr')>-1){
	            clumns.push({field : 'nr',title : '内容',width : 200,hidden:util.getArrayIndex(option.hidden,'nr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nr==null?"":row.nr)+'>'+(row.nr==null?"":row.nr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'shdbr')>-1){
	            clumns.push({field : 'shdbr',title : '审核担保人',width : 200,hidden:util.getArrayIndex(option.hidden,'shdbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.shdbr==null?"":row.shdbr)+'>'+(row.shdbr==null?"":row.shdbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cssj')>-1){
	            clumns.push({field : 'cssj',title : '出所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cssj==null?"":row.cssj)+'>'+(row.cssj==null?"":row.cssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzjg')>-1){
	            clumns.push({field : 'pzjg',title : '批准机关',width : 200,hidden:util.getArrayIndex(option.hidden,'pzjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzjg==null?"":row.pzjg)+'>'+(row.pzjg==null?"":row.pzjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzr')>-1){
	            clumns.push({field : 'pzr',title : '批准人',width : 200,hidden:util.getArrayIndex(option.hidden,'pzr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzr==null?"":row.pzr)+'>'+(row.pzr==null?"":row.pzr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzsj')>-1){
	            clumns.push({field : 'pzsj',title : '批准时间',width : 200,hidden:util.getArrayIndex(option.hidden,'pzsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzsj==null?"":row.pzsj)+'>'+(row.pzsj==null?"":row.pzsj)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'zjhm')>-1){
	            clumns.push({field : 'zjhm',title : '证件号码',width : 200,hidden:util.getArrayIndex(option.hidden,'zjhm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjhm==null?"":row.zjhm)+'>'+(row.zjhm==null?"":row.zjhm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxfs')>-1){
	            clumns.push({field : 'lxfs',title : '联系方式',width : 200,hidden:util.getArrayIndex(option.hidden,'lxfs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxfs==null?"":row.lxfs)+'>'+(row.lxfs==null?"":row.lxfs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zyjwzxly')>-1){
	            clumns.push({field : 'zyjwzxly',title : '暂予监外执行理由',width : 200,hidden:util.getArrayIndex(option.hidden,'zyjwzxly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zyjwzxly==null?"":row.zyjwzxly)+'>'+(row.zyjwzxly==null?"":row.zyjwzxly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlbbh')>-1){
	            clumns.push({field : 'jlbbh',title : '记录版本号',width : 200,hidden:util.getArrayIndex(option.hidden,'jlbbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlbbh==null?"":row.jlbbh)+'>'+(row.jlbbh==null?"":row.jlbbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'shr')>-1){
	            clumns.push({field : 'shr',title : '审核人',width : 200,hidden:util.getArrayIndex(option.hidden,'shr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.shr==null?"":row.shr)+'>'+(row.shr==null?"":row.shr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'shyj')>-1){
	            clumns.push({field : 'shyj',title : '审核意见',width : 200,hidden:util.getArrayIndex(option.hidden,'shyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.shyj==null?"":row.shyj)+'>'+(row.shyj==null?"":row.shyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'shsj')>-1){
	            clumns.push({field : 'shsj',title : '审核时间',width : 200,hidden:util.getArrayIndex(option.hidden,'shsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.shsj==null?"":row.shsj)+'>'+(row.shsj==null?"":row.shsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jdresult')>-1){
	            clumns.push({field : 'jdresult',title : '鉴定结果',width : 200,hidden:util.getArrayIndex(option.hidden,'jdresult')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jdresult==null?"":row.jdresult)+'>'+(row.jdresult==null?"":row.jdresult)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});