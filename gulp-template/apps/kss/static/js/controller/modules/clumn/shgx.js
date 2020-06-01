/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Shgx 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jbxx_xm')>-1){
	        	clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_jsh')>-1){
	        	clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsxm')>-1){
	            clumns.push({field : 'jsxm',title : '家属姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'jsxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsxm==null?"":row.jsxm)+'>'+(row.jsxm==null?"":row.jsxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xb')>-1){
	            clumns.push({field : 'xb',title : '家属性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xb==null?"":row.xb)+'>'+(row.xb==null?"":row.xb)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'xbString')>-1){
	            clumns.push({field : 'xbString',title : '家属性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xbString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xbString==null?"":row.xbString)+'>'+(row.xbString==null?"":row.xbString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nl')>-1){
	            clumns.push({field : 'nl',title : '年龄',width : 200,hidden:util.getArrayIndex(option.hidden,'nl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nl==null?"":row.nl)+'>'+(row.nl==null?"":row.nl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jszjh')>-1){
	            clumns.push({field : 'jszjh',title : '家属证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'jszjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jszjh==null?"":row.jszjh)+'>'+(row.jszjh==null?"":row.jszjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gx')>-1){
	            clumns.push({field : 'gx',title : '与在押人员关系',width : 200,hidden:util.getArrayIndex(option.hidden,'gx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gx==null?"":row.gx)+'>'+(row.gx==null?"":row.gx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gxString')>-1){
				clumns.push({field : 'gxString',title : '与在押人员关系',width : 200,hidden:util.getArrayIndex(option.hidden,'gxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gxString==null?"":row.gxString)+'>'+(row.gxString==null?"":row.gxString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'dwdh')>-1){
	            clumns.push({field : 'dwdh',title : '单位电话',width : 200,hidden:util.getArrayIndex(option.hidden,'dwdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dwdh==null?"":row.dwdh)+'>'+(row.dwdh==null?"":row.dwdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gzdw')>-1){
	            clumns.push({field : 'gzdw',title : '工作单位',width : 200,hidden:util.getArrayIndex(option.hidden,'gzdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gzdw==null?"":row.gzdw)+'>'+(row.gzdw==null?"":row.gzdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sj')>-1){
	            clumns.push({field : 'sj',title : '手机号码',width : 200,hidden:util.getArrayIndex(option.hidden,'sj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sj==null?"":row.sj)+'>'+(row.sj==null?"":row.sj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dh')>-1){
	            clumns.push({field : 'dh',title : '联系电话',width : 200,hidden:util.getArrayIndex(option.hidden,'dh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dh==null?"":row.dh)+'>'+(row.dh==null?"":row.dh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csrq')>-1){
	            clumns.push({field : 'csrq',title : '出生日期',width : 200,hidden:util.getArrayIndex(option.hidden,'csrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csrq==null?"":row.csrq)+'>'+(row.csrq==null?"":row.csrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mz')>-1){
	            clumns.push({field : 'mz',title : '民族（MZ）',width : 200,hidden:util.getArrayIndex(option.hidden,'mz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mz==null?"":row.mz)+'>'+(row.mz==null?"":row.mz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zzdz')>-1){
	            clumns.push({field : 'zzdz',title : '暂住地址',width : 200,hidden:util.getArrayIndex(option.hidden,'zzdz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzdz==null?"":row.zzdz)+'>'+(row.zzdz==null?"":row.zzdz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dz')>-1){
	            clumns.push({field : 'dz',title : '联系地址',width : 200,hidden:util.getArrayIndex(option.hidden,'dz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dz==null?"":row.dz)+'>'+(row.dz==null?"":row.dz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yb')>-1){
	            clumns.push({field : 'yb',title : '邮编',width : 200,hidden:util.getArrayIndex(option.hidden,'yb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yb==null?"":row.yb)+'>'+(row.yb==null?"":row.yb)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'zjlx')>-1){
	            clumns.push({field : 'zjlx',title : '证件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'zjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjlx==null?"":row.zjlx)+'>'+(row.zjlx==null?"":row.zjlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zy')>-1){
	            clumns.push({field : 'zy',title : '职业',width : 200,hidden:util.getArrayIndex(option.hidden,'zy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zy==null?"":row.zy)+'>'+(row.zy==null?"":row.zy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfswgx')>-1){
	            clumns.push({field : 'sfswgx',title : '是否涉维关系',width : 200,hidden:util.getArrayIndex(option.hidden,'sfswgx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfswgx==null?"":row.sfswgx)+'>'+(row.sfswgx==null?"":row.sfswgx)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});