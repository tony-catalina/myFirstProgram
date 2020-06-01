/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Mjshgx 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jh')>-1){
	            clumns.push({field : 'jh',title : '警号',width : 200,hidden:util.getArrayIndex(option.hidden,'jh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jh==null?"":row.jh)+'>'+(row.jh==null?"":row.jh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gx')>-1){
	            clumns.push({field : 'gx',title : '关系',width : 200,hidden:util.getArrayIndex(option.hidden,'gx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gx==null?"":row.gx)+'>'+(row.gx==null?"":row.gx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gxString')>-1){
                clumns.push({field : 'gxString',title : '关系',width : 200,hidden:util.getArrayIndex(option.hidden,'gxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gxString==null?"":row.gxString)+'>'+(row.gxString==null?"":row.gxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'gxrxm')>-1){
	            clumns.push({field : 'gxrxm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'gxrxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gxrxm==null?"":row.gxrxm)+'>'+(row.gxrxm==null?"":row.gxrxm)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'gxrgzdw')>-1){
				clumns.push({field : 'gxrgzdw',title : '关系人工作单位',width : 200,hidden:util.getArrayIndex(option.hidden,'gxrgzdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gxrgzdw==null?"":row.gxrgzdw)+'>'+(row.gxrgzdw==null?"":row.gxrgzdw)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'gxrzzmm')>-1){
	            clumns.push({field : 'gxrzzmm',title : '关系人政治面貌',width : 200,hidden:util.getArrayIndex(option.hidden,'gxrzzmm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gxrzzmm==null?"":row.gxrzzmm)+'>'+(row.gxrzzmm==null?"":row.gxrzzmm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gxrzzmmString')>-1){
                clumns.push({field : 'gxrzzmmString',title : '关系人政治面貌',width : 200,hidden:util.getArrayIndex(option.hidden,'gxrzzmmString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gxrzzmmString==null?"":row.gxrzzmmString)+'>'+(row.gxrzzmmString==null?"":row.gxrzzmmString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'gxrlxdh')>-1){
	            clumns.push({field : 'gxrlxdh',title : '关系人联系电话',width : 200,hidden:util.getArrayIndex(option.hidden,'gxrlxdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gxrlxdh==null?"":row.gxrlxdh)+'>'+(row.gxrlxdh==null?"":row.gxrlxdh)+'</span>'}});
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