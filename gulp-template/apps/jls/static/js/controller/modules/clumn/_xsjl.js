/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Xsjl 数据列表
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
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xm')>-1){
	            clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsh')>-1){
	            clumns.push({field : 'jsh',title : '拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yfh')>-1){
	            clumns.push({field : 'yfh',title : '衣服号',width : 200,hidden:util.getArrayIndex(option.hidden,'yfh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yfh==null?"":row.yfh)+'>'+(row.yfh==null?"":row.yfh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fssj')>-1){
	            clumns.push({field : 'fssj',title : '发生时间',width : 200,hidden:util.getArrayIndex(option.hidden,'fssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fssj==null?"":row.fssj)+'>'+(row.fssj==null?"":row.fssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wgsj')>-1){
	            clumns.push({field : 'wgsj',title : '违规时间',width : 200,hidden:util.getArrayIndex(option.hidden,'wgsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgsj==null?"":row.wgsj)+'>'+(row.wgsj==null?"":row.wgsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wgrs')>-1){
	            clumns.push({field : 'wgrs',title : '违规人数',width : 200,hidden:util.getArrayIndex(option.hidden,'wgrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgrs==null?"":row.wgrs)+'>'+(row.wgrs==null?"":row.wgrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wgdd')>-1){
	            clumns.push({field : 'wgdd',title : '违规地点',width : 200,hidden:util.getArrayIndex(option.hidden,'wgdd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgdd==null?"":row.wgdd)+'>'+(row.wgdd==null?"":row.wgdd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wgqk')>-1){
	            clumns.push({field : 'wgqk',title : '违规情况',width : 200,hidden:util.getArrayIndex(option.hidden,'wgqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgqk==null?"":row.wgqk)+'>'+(row.wgqk==null?"":row.wgqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wglx')>-1){
	            clumns.push({field : 'wglx',title : '违规类',width : 200,hidden:util.getArrayIndex(option.hidden,'wglx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wglx==null?"":row.wglx)+'>'+(row.wglx==null?"":row.wglx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jyqk')>-1){
	            clumns.push({field : 'jyqk',title : '简要情况',width : 200,hidden:util.getArrayIndex(option.hidden,'jyqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jyqk==null?"":row.jyqk)+'>'+(row.jyqk==null?"":row.jyqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjcd')>-1){
	            clumns.push({field : 'jjcd',title : '紧急程度',width : 200,hidden:util.getArrayIndex(option.hidden,'jjcd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjcd==null?"":row.jjcd)+'>'+(row.jjcd==null?"":row.jjcd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fbgw')>-1){
	            clumns.push({field : 'fbgw',title : '发布岗位',width : 200,hidden:util.getArrayIndex(option.hidden,'fbgw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fbgw==null?"":row.fbgw)+'>'+(row.fbgw==null?"":row.fbgw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zbr')>-1){
	            clumns.push({field : 'zbr',title : '值班人',width : 200,hidden:util.getArrayIndex(option.hidden,'zbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zbr==null?"":row.zbr)+'>'+(row.zbr==null?"":row.zbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlsj')>-1){
	            clumns.push({field : 'jlsj',title : '记录时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jlsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlsj==null?"":row.jlsj)+'>'+(row.jlsj==null?"":row.jlsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clqk')>-1){
	            clumns.push({field : 'clqk',title : '处理情况',width : 200,hidden:util.getArrayIndex(option.hidden,'clqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clqk==null?"":row.clqk)+'>'+(row.clqk==null?"":row.clqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xxfbfw')>-1){
	            clumns.push({field : 'xxfbfw',title : '信息发布范围',width : 200,hidden:util.getArrayIndex(option.hidden,'xxfbfw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xxfbfw==null?"":row.xxfbfw)+'>'+(row.xxfbfw==null?"":row.xxfbfw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clwcqk')>-1){
	            clumns.push({field : 'clwcqk',title : '处理完成情况',width : 200,hidden:util.getArrayIndex(option.hidden,'clwcqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clwcqk==null?"":row.clwcqk)+'>'+(row.clwcqk==null?"":row.clwcqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'photourl')>-1){
	            clumns.push({field : 'photourl',title : '现场截图URL',width : 200,hidden:util.getArrayIndex(option.hidden,'photourl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.photourl==null?"":row.photourl)+'>'+(row.photourl==null?"":row.photourl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wgqkcon')>-1){
	            clumns.push({field : 'wgqkcon',title : '违规情况内容',width : 200,hidden:util.getArrayIndex(option.hidden,'wgqkcon')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgqkcon==null?"":row.wgqkcon)+'>'+(row.wgqkcon==null?"":row.wgqkcon)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clqkcon')>-1){
	            clumns.push({field : 'clqkcon',title : '处理情况内容',width : 200,hidden:util.getArrayIndex(option.hidden,'clqkcon')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clqkcon==null?"":row.clqkcon)+'>'+(row.clqkcon==null?"":row.clqkcon)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xsr')>-1){
	            clumns.push({field : 'xsr',title : '巡视人',width : 200,hidden:util.getArrayIndex(option.hidden,'xsr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xsr==null?"":row.xsr)+'>'+(row.xsr==null?"":row.xsr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clr')>-1){
	            clumns.push({field : 'clr',title : '处理人',width : 200,hidden:util.getArrayIndex(option.hidden,'clr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clr==null?"":row.clr)+'>'+(row.clr==null?"":row.clr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cljg')>-1){
	            clumns.push({field : 'cljg',title : '处理结果',width : 200,hidden:util.getArrayIndex(option.hidden,'cljg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cljg==null?"":row.cljg)+'>'+(row.cljg==null?"":row.cljg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'type')>-1){
	            clumns.push({field : 'type',title : '类型',width : 200,hidden:util.getArrayIndex(option.hidden,'type')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.type==null?"":row.type)+'>'+(row.type==null?"":row.type)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjclsj')>-1){
	            clumns.push({field : 'gjclsj',title : '管教处理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'gjclsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjclsj==null?"":row.gjclsj)+'>'+(row.gjclsj==null?"":row.gjclsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clzt')>-1){
	            clumns.push({field : 'clzt',title : '处理状态',width : 200,hidden:util.getArrayIndex(option.hidden,'clzt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clzt==null?"":row.clzt)+'>'+(row.clzt==null?"":row.clzt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clsj')>-1){
	            clumns.push({field : 'clsj',title : '处理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'clsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clsj==null?"":row.clsj)+'>'+(row.clsj==null?"":row.clsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywyc')>-1){
	            clumns.push({field : 'ywyc',title : '有无异常',width : 200,hidden:util.getArrayIndex(option.hidden,'ywyc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywyc==null?"":row.ywyc)+'>'+(row.ywyc==null?"":row.ywyc)+'</span>'}});
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