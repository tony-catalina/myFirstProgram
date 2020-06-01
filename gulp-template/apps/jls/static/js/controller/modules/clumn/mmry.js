/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Mmry 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '拘所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fzss')>-1){
	            clumns.push({field : 'fzss',title : '犯罪事实',width : 200,hidden:util.getArrayIndex(option.hidden,'fzss')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fzss==null?"":row.fzss)+'>'+(row.fzss==null?"":row.fzss)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lkly')>-1){
	            clumns.push({field : 'lkly',title : '列控理由',width : 200,hidden:util.getArrayIndex(option.hidden,'lkly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lkly==null?"":row.lkly)+'>'+(row.lkly==null?"":row.lkly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lkrq')>-1){
	            clumns.push({field : 'lkrq',title : '列控日期',width : 200,hidden:util.getArrayIndex(option.hidden,'lkrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lkrq==null?"":row.lkrq)+'>'+(row.lkrq==null?"":row.lkrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jljbr')>-1){
	            clumns.push({field : 'jljbr',title : '建立经办人',width : 200,hidden:util.getArrayIndex(option.hidden,'jljbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jljbr==null?"":row.jljbr)+'>'+(row.jljbr==null?"":row.jljbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'kzcs')>-1){
	            clumns.push({field : 'kzcs',title : '控制措施',width : 200,hidden:util.getArrayIndex(option.hidden,'kzcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kzcs==null?"":row.kzcs)+'>'+(row.kzcs==null?"":row.kzcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ckly')>-1){
	            clumns.push({field : 'ckly',title : '撤控理由',width : 200,hidden:util.getArrayIndex(option.hidden,'ckly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ckly==null?"":row.ckly)+'>'+(row.ckly==null?"":row.ckly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ckrq')>-1){
	            clumns.push({field : 'ckrq',title : '撤控日期',width : 200,hidden:util.getArrayIndex(option.hidden,'ckrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ckrq==null?"":row.ckrq)+'>'+(row.ckrq==null?"":row.ckrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcjbr')>-1){
	            clumns.push({field : 'jcjbr',title : '解除经办人',width : 200,hidden:util.getArrayIndex(option.hidden,'jcjbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcjbr==null?"":row.jcjbr)+'>'+(row.jcjbr==null?"":row.jcjbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zt')>-1){
	            clumns.push({field : 'zt',title : '状态',width : 200,hidden:util.getArrayIndex(option.hidden,'zt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zt==null?"":row.zt)+'>'+(row.zt==null?"":row.zt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldps')>-1){
	            clumns.push({field : 'ldps',title : '领导批示',width : 200,hidden:util.getArrayIndex(option.hidden,'ldps')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldps==null?"":row.ldps)+'>'+(row.ldps==null?"":row.ldps)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'psbz')>-1){
	            clumns.push({field : 'psbz',title : '批示标志',width : 200,hidden:util.getArrayIndex(option.hidden,'psbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.psbz==null?"":row.psbz)+'>'+(row.psbz==null?"":row.psbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'type')>-1){
	            clumns.push({field : 'type',title : '标志位',width : 200,hidden:util.getArrayIndex(option.hidden,'type')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.type==null?"":row.type)+'>'+(row.type==null?"":row.type)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzrq')>-1){
	            clumns.push({field : 'jzrq',title : '截止日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jzrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzrq==null?"":row.jzrq)+'>'+(row.jzrq==null?"":row.jzrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzyj')>-1){
	            clumns.push({field : 'jzyj',title : '警长意见',width : 200,hidden:util.getArrayIndex(option.hidden,'jzyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzyj==null?"":row.jzyj)+'>'+(row.jzyj==null?"":row.jzyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzyjjc')>-1){
	            clumns.push({field : 'jzyjjc',title : '解除警长意见',width : 200,hidden:util.getArrayIndex(option.hidden,'jzyjjc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzyjjc==null?"":row.jzyjjc)+'>'+(row.jzyjjc==null?"":row.jzyjjc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyjjc')>-1){
	            clumns.push({field : 'ldyjjc',title : '领导意见解除',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyjjc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyjjc==null?"":row.ldyjjc)+'>'+(row.ldyjjc==null?"":row.ldyjjc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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