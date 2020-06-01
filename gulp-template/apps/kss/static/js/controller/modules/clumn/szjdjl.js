/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Szjdjl 数据列表
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
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sldxm')>-1){
	            clumns.push({field : 'sldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'sldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldxm==null?"":row.sldxm)+'>'+(row.sldxm==null?"":row.sldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jdsj')>-1){
	            clumns.push({field : 'jdsj',title : '接待时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jdsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jdsj==null?"":row.jdsj)+'>'+(row.jdsj==null?"":row.jdsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zlfxm')>-1){
	            clumns.push({field : 'zlfxm',title : '主要来访人姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'zlfxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zlfxm==null?"":row.zlfxm)+'>'+(row.zlfxm==null?"":row.zlfxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lfxb')>-1){
	            clumns.push({field : 'lfxb',title : '主要来访人性别',width : 200,hidden:util.getArrayIndex(option.hidden,'lfxb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lfxb==null?"":row.lfxb)+'>'+(row.lfxb==null?"":row.lfxb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lfnl')>-1){
	            clumns.push({field : 'lfnl',title : '主要来访人年龄',width : 200,hidden:util.getArrayIndex(option.hidden,'lfnl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lfnl==null?"":row.lfnl)+'>'+(row.lfnl==null?"":row.lfnl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lfgzdw')>-1){
	            clumns.push({field : 'lfgzdw',title : '主要来访人工作单位',width : 200,hidden:util.getArrayIndex(option.hidden,'lfgzdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lfgzdw==null?"":row.lfgzdw)+'>'+(row.lfgzdw==null?"":row.lfgzdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxfs')>-1){
	            clumns.push({field : 'lxfs',title : '联系方式',width : 200,hidden:util.getArrayIndex(option.hidden,'lxfs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxfs==null?"":row.lxfs)+'>'+(row.lxfs==null?"":row.lxfs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fywt')>-1){
	            clumns.push({field : 'fywt',title : '反映问题',width : 200,hidden:util.getArrayIndex(option.hidden,'fywt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fywt==null?"":row.fywt)+'>'+(row.fywt==null?"":row.fywt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dfyj')>-1){
	            clumns.push({field : 'dfyj',title : '当时答复意见',width : 200,hidden:util.getArrayIndex(option.hidden,'dfyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dfyj==null?"":row.dfyj)+'>'+(row.dfyj==null?"":row.dfyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clqk')>-1){
	            clumns.push({field : 'clqk',title : '事后处理情况',width : 200,hidden:util.getArrayIndex(option.hidden,'clqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clqk==null?"":row.clqk)+'>'+(row.clqk==null?"":row.clqk)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'zjlx')>-1){
	            clumns.push({field : 'zjlx',title : '证件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'zjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjlx==null?"":row.zjlx)+'>'+(row.zjlx==null?"":row.zjlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjh')>-1){
	            clumns.push({field : 'zjh',title : '证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'zjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjh==null?"":row.zjh)+'>'+(row.zjh==null?"":row.zjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lfrzw')>-1){
	            clumns.push({field : 'lfrzw',title : '来访人职务',width : 200,hidden:util.getArrayIndex(option.hidden,'lfrzw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lfrzw==null?"":row.lfrzw)+'>'+(row.lfrzw==null?"":row.lfrzw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbr')>-1){
	            clumns.push({field : 'jbr',title : '经办人',width : 200,hidden:util.getArrayIndex(option.hidden,'jbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbr==null?"":row.jbr)+'>'+(row.jbr==null?"":row.jbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lssj')>-1){
	            clumns.push({field : 'lssj',title : '来所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lssj==null?"":row.lssj)+'>'+(row.lssj==null?"":row.lssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djsj')>-1){
	            clumns.push({field : 'djsj',title : '登记时间',width : 200,hidden:util.getArrayIndex(option.hidden,'djsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djsj==null?"":row.djsj)+'>'+(row.djsj==null?"":row.djsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lfrs')>-1){
	            clumns.push({field : 'lfrs',title : '来访人数',width : 200,hidden:util.getArrayIndex(option.hidden,'lfrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lfrs==null?"":row.lfrs)+'>'+(row.lfrs==null?"":row.lfrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lfsj')>-1){
				clumns.push({field : 'lfsj',title : '来访时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lfsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lfsj==null?"":row.lfsj)+'>'+(row.lfsj==null?"":row.lfsj)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'lxdh')>-1){
	            clumns.push({field : 'lxdh',title : '联系电话',width : 200,hidden:util.getArrayIndex(option.hidden,'lxdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxdh==null?"":row.lxdh)+'>'+(row.lxdh==null?"":row.lxdh)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});