/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Dxsphj 数据列表
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
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjrid')>-1){
	            clumns.push({field : 'hjrid',title : '会见人ID',width : 200,hidden:util.getArrayIndex(option.hidden,'hjrid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjrid==null?"":row.hjrid)+'>'+(row.hjrid==null?"":row.hjrid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjly')>-1){
	            clumns.push({field : 'hjly',title : '会见理由',width : 200,hidden:util.getArrayIndex(option.hidden,'hjly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjly==null?"":row.hjly)+'>'+(row.hjly==null?"":row.hjly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jyqjbx')>-1){
	            clumns.push({field : 'jyqjbx',title : '羁押期间表现',width : 200,hidden:util.getArrayIndex(option.hidden,'jyqjbx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jyqjbx==null?"":row.jyqjbx)+'>'+(row.jyqjbx==null?"":row.jyqjbx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfhcqk')>-1){
	            clumns.push({field : 'sfhcqk',title : '身份核查情况',width : 200,hidden:util.getArrayIndex(option.hidden,'sfhcqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfhcqk==null?"":row.sfhcqk)+'>'+(row.sfhcqk==null?"":row.sfhcqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjlx')>-1){
	            clumns.push({field : 'hjlx',title : '会见类型',width : 200,hidden:util.getArrayIndex(option.hidden,'hjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjlx==null?"":row.hjlx)+'>'+(row.hjlx==null?"":row.hjlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjkssj')>-1){
	            clumns.push({field : 'hjkssj',title : '会见开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hjkssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjkssj==null?"":row.hjkssj)+'>'+(row.hjkssj==null?"":row.hjkssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjjssj')>-1){
	            clumns.push({field : 'hjjssj',title : '会见结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hjjssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjjssj==null?"":row.hjjssj)+'>'+(row.hjjssj==null?"":row.hjjssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bhjrdd')>-1){
	            clumns.push({field : 'bhjrdd',title : '被会见人地点',width : 200,hidden:util.getArrayIndex(option.hidden,'bhjrdd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bhjrdd==null?"":row.bhjrdd)+'>'+(row.bhjrdd==null?"":row.bhjrdd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bhjrbx')>-1){
	            clumns.push({field : 'bhjrbx',title : '被会见人表现',width : 200,hidden:util.getArrayIndex(option.hidden,'bhjrbx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bhjrbx==null?"":row.bhjrbx)+'>'+(row.bhjrbx==null?"":row.bhjrbx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjrdd')>-1){
	            clumns.push({field : 'hjrdd',title : '会见人地点',width : 200,hidden:util.getArrayIndex(option.hidden,'hjrdd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjrdd==null?"":row.hjrdd)+'>'+(row.hjrdd==null?"":row.hjrdd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjrbx')>-1){
	            clumns.push({field : 'hjrbx',title : '会见人表现',width : 200,hidden:util.getArrayIndex(option.hidden,'hjrbx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjrbx==null?"":row.hjrbx)+'>'+(row.hjrbx==null?"":row.hjrbx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsyy')>-1){
	            clumns.push({field : 'jsyy',title : '结束原因',width : 200,hidden:util.getArrayIndex(option.hidden,'jsyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsyy==null?"":row.jsyy)+'>'+(row.jsyy==null?"":row.jsyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swhzksj')>-1){
	            clumns.push({field : 'swhzksj',title : '所务会召开时间',width : 200,hidden:util.getArrayIndex(option.hidden,'swhzksj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swhzksj==null?"":row.swhzksj)+'>'+(row.swhzksj==null?"":row.swhzksj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxrid')>-1){
	            clumns.push({field : 'lxrid',title : '联系人',width : 200,hidden:util.getArrayIndex(option.hidden,'lxrid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxrid==null?"":row.lxrid)+'>'+(row.lxrid==null?"":row.lxrid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxsj')>-1){
	            clumns.push({field : 'lxsj',title : '联系时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lxsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxsj==null?"":row.lxsj)+'>'+(row.lxsj==null?"":row.lxsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxdh')>-1){
	            clumns.push({field : 'lxdh',title : '联系电话',width : 200,hidden:util.getArrayIndex(option.hidden,'lxdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxdh==null?"":row.lxdh)+'>'+(row.lxdh==null?"":row.lxdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxqk')>-1){
	            clumns.push({field : 'lxqk',title : '联系情况',width : 200,hidden:util.getArrayIndex(option.hidden,'lxqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxqk==null?"":row.lxqk)+'>'+(row.lxqk==null?"":row.lxqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nhjsj')>-1){
	            clumns.push({field : 'nhjsj',title : '拟会见时间',width : 200,hidden:util.getArrayIndex(option.hidden,'nhjsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nhjsj==null?"":row.nhjsj)+'>'+(row.nhjsj==null?"":row.nhjsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cjry')>-1){
	            clumns.push({field : 'cjry',title : '参加人员',width : 200,hidden:util.getArrayIndex(option.hidden,'cjry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cjry==null?"":row.cjry)+'>'+(row.cjry==null?"":row.cjry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzxm')>-1){
	            clumns.push({field : 'zdzxm',title : '中队长姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzxm==null?"":row.zdzxm)+'>'+(row.zdzxm==null?"":row.zdzxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzyj')>-1){
	            clumns.push({field : 'zdzyj',title : '中队长意见',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzyj==null?"":row.zdzyj)+'>'+(row.zdzyj==null?"":row.zdzyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzpssj')>-1){
	            clumns.push({field : 'zdzpssj',title : '中队长批示时间',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzpssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzpssj==null?"":row.zdzpssj)+'>'+(row.zdzpssj==null?"":row.zdzpssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldxm')>-1){
	            clumns.push({field : 'ldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldxm==null?"":row.ldxm)+'>'+(row.ldxm==null?"":row.ldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyj')>-1){
	            clumns.push({field : 'ldyj',title : '领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyj==null?"":row.ldyj)+'>'+(row.ldyj==null?"":row.ldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldpssj')>-1){
	            clumns.push({field : 'ldpssj',title : '领导批示时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpssj==null?"":row.ldpssj)+'>'+(row.ldpssj==null?"":row.ldpssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'psbz')>-1){
	            clumns.push({field : 'psbz',title : '批示标志',width : 200,hidden:util.getArrayIndex(option.hidden,'psbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.psbz==null?"":row.psbz)+'>'+(row.psbz==null?"":row.psbz)+'</span>'}});
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