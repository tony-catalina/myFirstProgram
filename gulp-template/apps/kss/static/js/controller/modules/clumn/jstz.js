/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jstz 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jbxx_xb')>-1){
	        	clumns.push({field : 'xbString',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xbString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xbString==null?"":row.xbString)+'>'+(row.xbString==null?"":row.xbString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_csrq')>-1){
	        	clumns.push({field : 'csrqString',title : '出生日期',width : 200,hidden:util.getArrayIndex(option.hidden,'csrqString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csrqString==null?"":row.csrqString)+'>'+(row.csrqString==null?"":row.csrqString)+'</span>'}});
	        }
	        if(util.getArrayIndex(	option.clumns,'jbxx_rsrq')>-1){
	        	clumns.push({field : 'rsrqString',title : '入所日期',width : 200,hidden:util.getArrayIndex(option.hidden,'rsrqString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsrqString==null?"":row.rsrqString)+'>'+(row.rsrqString==null?"":row.rsrqString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_sxzm')>-1){
	        	clumns.push({field : 'ayString',title : '涉嫌罪名',width : 200,hidden:util.getArrayIndex(option.hidden,'ayString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ayString==null?"":row.ayString)+'>'+(row.ayString==null?"":row.ayString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_dabh')>-1){
	        	clumns.push({field : 'dah',title : '档案编号',width : 200,hidden:util.getArrayIndex(option.hidden,'dah')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dah==null?"":row.dah)+'>'+(row.dah==null?"":row.dah)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jbxx_hjd')>-1){
	        	clumns.push({field : 'hjd',title : '户籍地',width : 200,hidden:util.getArrayIndex(option.hidden,'hjd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjd==null?"":row.hjd)+'>'+(row.hjd==null?"":row.hjd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tzsj')>-1){
	            clumns.push({field : 'tzsjString',title : '调整时间',width : 200,hidden:util.getArrayIndex(option.hidden,'tzsjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tzsjString==null?"":row.tzsjString)+'>'+(row.tzsjString==null?"":row.tzsjString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yjsh')>-1){
	            clumns.push({field : 'yjsh',title : '原监室',width : 200,hidden:util.getArrayIndex(option.hidden,'yjsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yjsh==null?"":row.yjsh)+'>'+(row.yjsh==null?"":row.yjsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xjsh')>-1){
	            clumns.push({field : 'xjsh',title : '现监室',width : 200,hidden:util.getArrayIndex(option.hidden,'xjsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xjsh==null?"":row.xjsh)+'>'+(row.xjsh==null?"":row.xjsh)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'yy')>-1){
	            clumns.push({field : 'yy',title : '原因',width : 200,hidden:util.getArrayIndex(option.hidden,'yy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yy==null?"":row.yy)+'>'+(row.yy==null?"":row.yy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yyString')>-1){
	            clumns.push({field : 'yyString',title : '原因',width : 200,hidden:util.getArrayIndex(option.hidden,'yyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yyString==null?"":row.yyString)+'>'+(row.yyString==null?"":row.yyString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tjr')>-1){
	            clumns.push({field : 'tjr',title : '调监人',width : 200,hidden:util.getArrayIndex(option.hidden,'tjr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tjr==null?"":row.tjr)+'>'+(row.tjr==null?"":row.tjr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzyj')>-1){
	            clumns.push({field : 'zdzyj',title : '中队长意见',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzyj==null?"":row.zdzyj)+'>'+(row.zdzyj==null?"":row.zdzyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldxm')>-1){
	            clumns.push({field : 'ldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldxm==null?"":row.ldxm)+'>'+(row.ldxm==null?"":row.ldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldpssj')>-1){
	            clumns.push({field : 'ldpssj',title : '领导批示时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpssj==null?"":row.ldpssj)+'>'+(row.ldpssj==null?"":row.ldpssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyj')>-1){
	            clumns.push({field : 'ldyj',title : '领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyj==null?"":row.ldyj)+'>'+(row.ldyj==null?"":row.ldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'psbz')>-1){
	            clumns.push({field : 'psbz',title : '批示标识',width : 200,hidden:util.getArrayIndex(option.hidden,'psbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.psbz==null?"":row.psbz)+'>'+(row.psbz==null?"":row.psbz)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjxm')>-1){
	            clumns.push({field : 'gjxm',title : '管教姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'gjxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjxm==null?"":row.gjxm)+'>'+(row.gjxm==null?"":row.gjxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djsj')>-1){
	            clumns.push({field : 'djsj',title : '登记时间',width : 200,hidden:util.getArrayIndex(option.hidden,'djsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djsj==null?"":row.djsj)+'>'+(row.djsj==null?"":row.djsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzxm')>-1){
	            clumns.push({field : 'zdzxm',title : '中队长姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzxm==null?"":row.zdzxm)+'>'+(row.zdzxm==null?"":row.zdzxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzpssj')>-1){
	            clumns.push({field : 'zdzpssj',title : '中队长批示时间',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzpssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzpssj==null?"":row.zdzpssj)+'>'+(row.zdzpssj==null?"":row.zdzpssj)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});