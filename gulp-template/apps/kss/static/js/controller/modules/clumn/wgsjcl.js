/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Wgsjcl 数据列表
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
			if(util.getArrayIndex(option.clumns,'xm')>-1){
				clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jqjs')>-1){
				clumns.push({field : 'jqjs',title : '监区/监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jqjs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jqjs==null?"":row.jqjs)+'>'+(row.jqjs==null?"":row.jqjs)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'dxbh')>-1){
	            clumns.push({field : 'dxbh',title : '监区/监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'dxbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dxbh==null?"":row.dxbh)+'>'+(row.dxbh==null?"":row.dxbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clzt')>-1){
	            clumns.push({field : 'clzt',title : '处理状态（WGCLZT）',width : 200,hidden:util.getArrayIndex(option.hidden,'clzt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clzt==null?"":row.clzt)+'>'+(row.clzt==null?"":row.clzt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clr')>-1){
	            clumns.push({field : 'clr',title : '处理人',width : 200,hidden:util.getArrayIndex(option.hidden,'clr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clr==null?"":row.clr)+'>'+(row.clr==null?"":row.clr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clsj')>-1){
	            clumns.push({field : 'clsj',title : '处理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'clsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clsj==null?"":row.clsj)+'>'+(row.clsj==null?"":row.clsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clqk')>-1){
	            clumns.push({field : 'clqk',title : '处理方式',width : 200,hidden:util.getArrayIndex(option.hidden,'clqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clqk==null?"":row.clqk)+'>'+(row.clqk==null?"":row.clqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xsjlid')>-1){
	            clumns.push({field : 'xsjlid',title : '巡视记录ID',width : 200,hidden:util.getArrayIndex(option.hidden,'xsjlid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xsjlid==null?"":row.xsjlid)+'>'+(row.xsjlid==null?"":row.xsjlid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wgsj')>-1){
	        	clumns.push({field : 'wgsj',title : '违规时间',width : 200,hidden:util.getArrayIndex(option.hidden,'wgsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgsj==null?"":row.wgsj)+'>'+(row.wgsj==null?"":row.wgsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wglx')>-1){
	            clumns.push({field : 'wglx',title : '违规类型',width : 200,hidden:util.getArrayIndex(option.hidden,'wglx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wglx==null?"":row.wglx)+'>'+(row.wglx==null?"":row.wglx)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'wglxString')>-1){
				clumns.push({field : 'wglxString',title : '违规类型',width : 200,hidden:util.getArrayIndex(option.hidden,'wglxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wglxString==null?"":row.wglxString)+'>'+(row.wglxString==null?"":row.wglxString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'wgqk')>-1){
	            clumns.push({field : 'wgqk',title : '违规情况',width : 200,hidden:util.getArrayIndex(option.hidden,'wgqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgqk==null?"":row.wgqk)+'>'+(row.wgqk==null?"":row.wgqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wgqkString')>-1){
                clumns.push({field : 'wgqkString',title : '违规情况',width : 200,hidden:util.getArrayIndex(option.hidden,'wgqkString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgqkString==null?"":row.wgqkString)+'>'+(row.wgqkString==null?"":row.wgqkString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'wgqkcon')>-1){
	            clumns.push({field : 'wgqkcon',title : '违规详细情况',width : 200,hidden:util.getArrayIndex(option.hidden,'wgqkcon')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgqkcon==null?"":row.wgqkcon)+'>'+(row.wgqkcon==null?"":row.wgqkcon)+'</span>'}});
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
	            clumns.push({field : 'createtime',title : '存档时间',width : 200,hidden:util.getArrayIndex(option.hidden,'createtime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.createtime==null?"":row.createtime)+'>'+(row.createtime==null?"":row.createtime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'updator')>-1){
	            clumns.push({field : 'updator',title : '更新人',width : 200,hidden:util.getArrayIndex(option.hidden,'updator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.updator==null?"":row.updator)+'>'+(row.updator==null?"":row.updator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'updatetime')>-1){
	            clumns.push({field : 'updatetime',title : '更新时间',width : 200,hidden:util.getArrayIndex(option.hidden,'updatetime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.updatetime==null?"":row.updatetime)+'>'+(row.updatetime==null?"":row.updatetime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ycqk')>-1){
	            clumns.push({field : 'ycqk',title : '异常情况',width : 200,hidden:util.getArrayIndex(option.hidden,'ycqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ycqk==null?"":row.ycqk)+'>'+(row.ycqk==null?"":row.ycqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ycqkcon')>-1){
	            clumns.push({field : 'ycqkcon',title : '异常详细情况',width : 200,hidden:util.getArrayIndex(option.hidden,'ycqkcon')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ycqkcon==null?"":row.ycqkcon)+'>'+(row.ycqkcon==null?"":row.ycqkcon)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywyc')>-1){
	            clumns.push({field : 'ywyc',title : '有无异常',width : 200,hidden:util.getArrayIndex(option.hidden,'ywyc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywyc==null?"":row.ywyc)+'>'+(row.ywyc==null?"":row.ywyc)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});