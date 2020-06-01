/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * FxpgRygkcs 数据列表
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
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gkcs')>-1){
	            clumns.push({field : 'gkcs',title : '管控措施',width : 200,hidden:util.getArrayIndex(option.hidden,'gkcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gkcs==null?"":row.gkcs)+'>'+(row.gkcs==null?"":row.gkcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lszt')>-1){
	            clumns.push({field : 'lszt',title : '落实状态',width : 200,hidden:util.getArrayIndex(option.hidden,'lszt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lszt==null?"":row.lszt)+'>'+(row.lszt==null?"":row.lszt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lssj')>-1){
	            clumns.push({field : 'lssj',title : '落实时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lssj==null?"":row.lssj)+'>'+(row.lssj==null?"":row.lssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pastable')>-1){
	            clumns.push({field : 'pastable',title : '有效状态',width : 200,hidden:util.getArrayIndex(option.hidden,'pastable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pastable==null?"":row.pastable)+'>'+(row.pastable==null?"":row.pastable)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'savetime')>-1){
	            clumns.push({field : 'savetime',title : '保存时间',width : 200,hidden:util.getArrayIndex(option.hidden,'savetime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.savetime==null?"":row.savetime)+'>'+(row.savetime==null?"":row.savetime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'saveuser')>-1){
	            clumns.push({field : 'saveuser',title : '保存人',width : 200,hidden:util.getArrayIndex(option.hidden,'saveuser')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.saveuser==null?"":row.saveuser)+'>'+(row.saveuser==null?"":row.saveuser)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lsr')>-1){
	            clumns.push({field : 'lsr',title : '落实人',width : 200,hidden:util.getArrayIndex(option.hidden,'lsr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsr==null?"":row.lsr)+'>'+(row.lsr==null?"":row.lsr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lsqk')>-1){
	            clumns.push({field : 'lsqk',title : '落实情况',width : 200,hidden:util.getArrayIndex(option.hidden,'lsqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsqk==null?"":row.lsqk)+'>'+(row.lsqk==null?"":row.lsqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zzr')>-1){
	            clumns.push({field : 'zzr',title : '责任人',width : 200,hidden:util.getArrayIndex(option.hidden,'zzr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzr==null?"":row.zzr)+'>'+(row.zzr==null?"":row.zzr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gklx')>-1){
	            clumns.push({field : 'gklx',title : '管控类型',width : 200,hidden:util.getArrayIndex(option.hidden,'gklx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gklx==null?"":row.gklx)+'>'+(row.gklx==null?"":row.gklx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lsh')>-1){
	            clumns.push({field : 'lsh',title : '流水号',width : 200,hidden:util.getArrayIndex(option.hidden,'lsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsh==null?"":row.lsh)+'>'+(row.lsh==null?"":row.lsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'pglx')>-1){
	            clumns.push({field : 'pglx',title : '评估类型',width : 200,hidden:util.getArrayIndex(option.hidden,'pglx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pglx==null?"":row.pglx)+'>'+(row.pglx==null?"":row.pglx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yfxdj')>-1){
	            clumns.push({field : 'yfxdj',title : '原风险等级',width : 200,hidden:util.getArrayIndex(option.hidden,'yfxdj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yfxdj==null?"":row.yfxdj)+'>'+(row.yfxdj==null?"":row.yfxdj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xfxdj')>-1){
	            clumns.push({field : 'xfxdj',title : '现风险等级',width : 200,hidden:util.getArrayIndex(option.hidden,'xfxdj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xfxdj==null?"":row.xfxdj)+'>'+(row.xfxdj==null?"":row.xfxdj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yfxzb')>-1){
	            clumns.push({field : 'yfxzb',title : '原风险指标',width : 200,hidden:util.getArrayIndex(option.hidden,'yfxzb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yfxzb==null?"":row.yfxzb)+'>'+(row.yfxzb==null?"":row.yfxzb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xfxzb')>-1){
	            clumns.push({field : 'xfxzb',title : '现风险指标',width : 200,hidden:util.getArrayIndex(option.hidden,'xfxzb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xfxzb==null?"":row.xfxzb)+'>'+(row.xfxzb==null?"":row.xfxzb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pgsj')>-1){
	            clumns.push({field : 'pgsj',title : '评估时间',width : 200,hidden:util.getArrayIndex(option.hidden,'pgsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pgsj==null?"":row.pgsj)+'>'+(row.pgsj==null?"":row.pgsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ypgsj')>-1){
	            clumns.push({field : 'ypgsj',title : '原评估时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ypgsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypgsj==null?"":row.ypgsj)+'>'+(row.ypgsj==null?"":row.ypgsj)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});