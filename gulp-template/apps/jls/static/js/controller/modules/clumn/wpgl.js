/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Wpgl 数据列表
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
			if(util.getArrayIndex(option.clumns,'jsh')>-1){
				clumns.push({field : 'jsh',title : '拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'xm')>-1){
				clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'xb')>-1){
				clumns.push({field : 'xb',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xb==null?"":row.xb)+'>'+(row.xb==null?"":row.xb)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'uuid')>-1){
	            clumns.push({field : 'uuid',title : 'UUID',width : 200,hidden:util.getArrayIndex(option.hidden,'uuid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.uuid==null?"":row.uuid)+'>'+(row.uuid==null?"":row.uuid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mc')>-1){
	            clumns.push({field : 'mc',title : '物品名称',width : 200,hidden:util.getArrayIndex(option.hidden,'mc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mc==null?"":row.mc)+'>'+(row.mc==null?"":row.mc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sl')>-1){
	            clumns.push({field : 'sl',title : '数量',width : 200,hidden:util.getArrayIndex(option.hidden,'sl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl==null?"":row.sl)+'>'+(row.sl==null?"":row.sl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wpdw')>-1){
	            clumns.push({field : 'wpdw',title : '单位',width : 200,hidden:util.getArrayIndex(option.hidden,'wpdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wpdw==null?"":row.wpdw)+'>'+(row.wpdw==null?"":row.wpdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wplx')>-1){
	            clumns.push({field : 'wplx',title : '物品类型',width : 200,hidden:util.getArrayIndex(option.hidden,'wplx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wplx==null?"":row.wplx)+'>'+(row.wplx==null?"":row.wplx)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'wplxString')>-1){
			    clumns.push({field : 'wplxString',title : '物品类型',width : 200,hidden:util.getArrayIndex(option.hidden,'wplxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wplxString==null?"":row.wplxString)+'>'+(row.wplxString==null?"":row.wplxString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'xjcd')>-1){
	            clumns.push({field : 'xjcd',title : '新旧程度',width : 200,hidden:util.getArrayIndex(option.hidden,'xjcd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xjcd==null?"":row.xjcd)+'>'+(row.xjcd==null?"":row.xjcd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wpxx')>-1){
	            clumns.push({field : 'wpxx',title : '物品详细信息',width : 200,hidden:util.getArrayIndex(option.hidden,'wpxx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wpxx==null?"":row.wpxx)+'>'+(row.wpxx==null?"":row.wpxx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ys')>-1){
	            clumns.push({field : 'ys',title : '颜色',width : 200,hidden:util.getArrayIndex(option.hidden,'ys')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ys==null?"":row.ys)+'>'+(row.ys==null?"":row.ys)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djr')>-1){
	            clumns.push({field : 'djr',title : '登记人',width : 200,hidden:util.getArrayIndex(option.hidden,'djr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djr==null?"":row.djr)+'>'+(row.djr==null?"":row.djr)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'wply')>-1){
			    clumns.push({field : 'wply',title : '物品来源',width : 200,hidden:util.getArrayIndex(option.hidden,'wply')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wply==null?"":row.wply)+'>'+(row.wply==null?"":row.wply)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'wplyString')>-1){
			    clumns.push({field : 'wplyString',title : '物品来源',width : 200,hidden:util.getArrayIndex(option.hidden,'wplyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wplyString==null?"":row.wplyString)+'>'+(row.wplyString==null?"":row.wplyString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'djrq')>-1){
	            clumns.push({field : 'djrq',title : '登记时间',width : 200,hidden:util.getArrayIndex(option.hidden,'djrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djrq==null?"":row.djrq)+'>'+(row.djrq==null?"":row.djrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lqzt')>-1){
	            clumns.push({field : 'lqzt',title : '领取状态',width : 200,hidden:util.getArrayIndex(option.hidden,'lqzt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lqzt==null?"":row.lqzt)+'>'+(row.lqzt==null?"":row.lqzt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lqr')>-1){
	            clumns.push({field : 'lqr',title : '领取人',width : 200,hidden:util.getArrayIndex(option.hidden,'lqr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lqr==null?"":row.lqr)+'>'+(row.lqr==null?"":row.lqr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lqrq')>-1){
	            clumns.push({field : 'lqrq',title : '领取时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lqrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lqrq==null?"":row.lqrq)+'>'+(row.lqrq==null?"":row.lqrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'twr')>-1){
	            clumns.push({field : 'twr',title : '退物办理人',width : 200,hidden:util.getArrayIndex(option.hidden,'twr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.twr==null?"":row.twr)+'>'+(row.twr==null?"":row.twr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'twrq')>-1){
	            clumns.push({field : 'twrq',title : '退物日期',width : 200,hidden:util.getArrayIndex(option.hidden,'twrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.twrq==null?"":row.twrq)+'>'+(row.twrq==null?"":row.twrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzr')>-1){
	            clumns.push({field : 'jzr',title : '见证人',width : 200,hidden:util.getArrayIndex(option.hidden,'jzr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzr==null?"":row.jzr)+'>'+(row.jzr==null?"":row.jzr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzrq')>-1){
	            clumns.push({field : 'jzrq',title : '见证日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jzrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzrq==null?"":row.jzrq)+'>'+(row.jzrq==null?"":row.jzrq)+'</span>'}});
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