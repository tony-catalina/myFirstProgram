/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Yjyayl 数据列表
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
	        if(util.getArrayIndex(option.clumns,'ylsj')>-1){
	            clumns.push({field : 'ylsj',title : '演练时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ylsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ylsj==null?"":row.ylsj)+'>'+(row.ylsj==null?"":row.ylsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zzzhz')>-1){
	            clumns.push({field : 'zzzhz',title : '组织指挥者',width : 200,hidden:util.getArrayIndex(option.hidden,'zzzhz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzzhz==null?"":row.zzzhz)+'>'+(row.zzzhz==null?"":row.zzzhz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hyjlr')>-1){
	            clumns.push({field : 'hyjlr',title : '记录人',width : 200,hidden:util.getArrayIndex(option.hidden,'hyjlr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hyjlr==null?"":row.hyjlr)+'>'+(row.hyjlr==null?"":row.hyjlr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ksscjry')>-1){
	            clumns.push({field : 'ksscjry',title : '看守所参加人员',width : 200,hidden:util.getArrayIndex(option.hidden,'ksscjry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ksscjry==null?"":row.ksscjry)+'>'+(row.ksscjry==null?"":row.ksscjry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wjzdcjry')>-1){
	            clumns.push({field : 'wjzdcjry',title : '武警中队参加人员',width : 200,hidden:util.getArrayIndex(option.hidden,'wjzdcjry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wjzdcjry==null?"":row.wjzdcjry)+'>'+(row.wjzdcjry==null?"":row.wjzdcjry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qtry')>-1){
	            clumns.push({field : 'qtry',title : '其他人员',width : 200,hidden:util.getArrayIndex(option.hidden,'qtry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qtry==null?"":row.qtry)+'>'+(row.qtry==null?"":row.qtry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ylqk')>-1){
	            clumns.push({field : 'ylqk',title : '演练情况',width : 200,hidden:util.getArrayIndex(option.hidden,'ylqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ylqk==null?"":row.ylqk)+'>'+(row.ylqk==null?"":row.ylqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czwt')>-1){
	            clumns.push({field : 'czwt',title : '存在的问题',width : 200,hidden:util.getArrayIndex(option.hidden,'czwt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czwt==null?"":row.czwt)+'>'+(row.czwt==null?"":row.czwt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjcs')>-1){
	            clumns.push({field : 'gjcs',title : '改进措施',width : 200,hidden:util.getArrayIndex(option.hidden,'gjcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjcs==null?"":row.gjcs)+'>'+(row.gjcs==null?"":row.gjcs)+'</span>'}});
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
	        
	        return clumns;
	    };
	    return main;
	});