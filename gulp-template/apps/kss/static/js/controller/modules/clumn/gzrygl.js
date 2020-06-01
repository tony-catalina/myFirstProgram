/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Gzrygl 数据列表
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
	        if(util.getArrayIndex(option.clumns,'zgxm')>-1){
	            clumns.push({field : 'zgxm',title : '职工姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'zgxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zgxm==null?"":row.zgxm)+'>'+(row.zgxm==null?"":row.zgxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xmpy')>-1){
	            clumns.push({field : 'xmpy',title : '职工姓名拼音',width : 200,hidden:util.getArrayIndex(option.hidden,'xmpy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xmpy==null?"":row.xmpy)+'>'+(row.xmpy==null?"":row.xmpy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mz')>-1){
	            clumns.push({field : 'mz',title : '民族(MZ)',width : 200,hidden:util.getArrayIndex(option.hidden,'mz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mz==null?"":row.mz)+'>'+(row.mz==null?"":row.mz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csny')>-1){
	            clumns.push({field : 'csny',title : '出生年月',width : 200,hidden:util.getArrayIndex(option.hidden,'csny')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csny==null?"":row.csny)+'>'+(row.csny==null?"":row.csny)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zy')>-1){
	            clumns.push({field : 'zy',title : '职业',width : 200,hidden:util.getArrayIndex(option.hidden,'zy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zy==null?"":row.zy)+'>'+(row.zy==null?"":row.zy)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'zyString')>-1){
				clumns.push({field : 'zyString',title : '职业',width : 200,hidden:util.getArrayIndex(option.hidden,'zyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zyString==null?"":row.zyString)+'>'+(row.zyString==null?"":row.zyString)+'</span>'}});
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
			if(util.getArrayIndex(option.clumns,'zzmmString')>-1){
				clumns.push({field : 'zzmmString',title : '政治面貌',width : 200,hidden:util.getArrayIndex(option.hidden,'zzmmString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzmmString==null?"":row.zzmmString)+'>'+(row.zzmmString==null?"":row.zzmmString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'gw')>-1){
	            clumns.push({field : 'gw',title : '岗位',width : 200,hidden:util.getArrayIndex(option.hidden,'gw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gw==null?"":row.gw)+'>'+(row.gw==null?"":row.gw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jtzz')>-1){
	            clumns.push({field : 'jtzz',title : '家庭住址',width : 200,hidden:util.getArrayIndex(option.hidden,'jtzz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jtzz==null?"":row.jtzz)+'>'+(row.jtzz==null?"":row.jtzz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjszd')>-1){
	            clumns.push({field : 'hjszd',title : '户籍所在地',width : 200,hidden:util.getArrayIndex(option.hidden,'hjszd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjszd==null?"":row.hjszd)+'>'+(row.hjszd==null?"":row.hjszd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxdh')>-1){
	            clumns.push({field : 'lxdh',title : '联系电话',width : 200,hidden:util.getArrayIndex(option.hidden,'lxdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxdh==null?"":row.lxdh)+'>'+(row.lxdh==null?"":row.lxdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sjh')>-1){
	            clumns.push({field : 'sjh',title : '手机号',width : 200,hidden:util.getArrayIndex(option.hidden,'sjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjh==null?"":row.sjh)+'>'+(row.sjh==null?"":row.sjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xl')>-1){
	            clumns.push({field : 'xl',title : '学历(WHCD)',width : 200,hidden:util.getArrayIndex(option.hidden,'xl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xl==null?"":row.xl)+'>'+(row.xl==null?"":row.xl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yszyzbh')>-1){
	            clumns.push({field : 'yszyzbh',title : '医生执业证编号',width : 200,hidden:util.getArrayIndex(option.hidden,'yszyzbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yszyzbh==null?"":row.yszyzbh)+'>'+(row.yszyzbh==null?"":row.yszyzbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yszgzbh')>-1){
	            clumns.push({field : 'yszgzbh',title : '医生资格证编号',width : 200,hidden:util.getArrayIndex(option.hidden,'yszgzbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yszgzbh==null?"":row.yszgzbh)+'>'+(row.yszgzbh==null?"":row.yszgzbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfqzys')>-1){
	            clumns.push({field : 'sfqzys',title : '是否全职医生',width : 200,hidden:util.getArrayIndex(option.hidden,'sfqzys')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfqzys==null?"":row.sfqzys)+'>'+(row.sfqzys==null?"":row.sfqzys)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'flag')>-1){
	            clumns.push({field : 'flag',title : '是否在职(SHFO)',width : 200,hidden:util.getArrayIndex(option.hidden,'flag')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.flag==null?"":row.flag)+'>'+(row.flag==null?"":row.flag)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
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