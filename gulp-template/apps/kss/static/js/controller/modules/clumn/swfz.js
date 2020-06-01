/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Swfz 数据列表
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
	        if(util.getArrayIndex(option.clumns,'tgxsbm')>-1){
	            clumns.push({field : 'tgxsbm',title : '提供线索部门',width : 200,hidden:util.getArrayIndex(option.hidden,'tgxsbm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tgxsbm==null?"":row.tgxsbm)+'>'+(row.tgxsbm==null?"":row.tgxsbm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tgrq')>-1){
	            clumns.push({field : 'tgrq',title : '提供日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tgrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tgrq==null?"":row.tgrq)+'>'+(row.tgrq==null?"":row.tgrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xslx')>-1){
	            clumns.push({field : 'xslx',title : '线索类型',width : 200,hidden:util.getArrayIndex(option.hidden,'xslx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xslx==null?"":row.xslx)+'>'+(row.xslx==null?"":row.xslx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zyrxm')>-1){
	            clumns.push({field : 'zyrxm',title : '在押人姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'zyrxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zyrxm==null?"":row.zyrxm)+'>'+(row.zyrxm==null?"":row.zyrxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xb')>-1){
	            clumns.push({field : 'xb',title : '性别(XB)',width : 200,hidden:util.getArrayIndex(option.hidden,'xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xb==null?"":row.xb)+'>'+(row.xb==null?"":row.xb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ay')>-1){
	            clumns.push({field : 'ay',title : '案由',width : 200,hidden:util.getArrayIndex(option.hidden,'ay')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ay==null?"":row.ay)+'>'+(row.ay==null?"":row.ay)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gycs')>-1){
	            clumns.push({field : 'gycs',title : '关押措施',width : 200,hidden:util.getArrayIndex(option.hidden,'gycs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gycs==null?"":row.gycs)+'>'+(row.gycs==null?"":row.gycs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xsnrzy')>-1){
	            clumns.push({field : 'xsnrzy',title : '线索内容摘要',width : 200,hidden:util.getArrayIndex(option.hidden,'xsnrzy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xsnrzy==null?"":row.xsnrzy)+'>'+(row.xsnrzy==null?"":row.xsnrzy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sdxsrq')>-1){
	            clumns.push({field : 'sdxsrq',title : '收到线索日期',width : 200,hidden:util.getArrayIndex(option.hidden,'sdxsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sdxsrq==null?"":row.sdxsrq)+'>'+(row.sdxsrq==null?"":row.sdxsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tjbm')>-1){
	            clumns.push({field : 'tjbm',title : '提交部门',width : 200,hidden:util.getArrayIndex(option.hidden,'tjbm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tjbm==null?"":row.tjbm)+'>'+(row.tjbm==null?"":row.tjbm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tjsj')>-1){
	            clumns.push({field : 'tjsj',title : '提交时间',width : 200,hidden:util.getArrayIndex(option.hidden,'tjsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tjsj==null?"":row.tjsj)+'>'+(row.tjsj==null?"":row.tjsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czqk')>-1){
	            clumns.push({field : 'czqk',title : '查证情况',width : 200,hidden:util.getArrayIndex(option.hidden,'czqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czqk==null?"":row.czqk)+'>'+(row.czqk==null?"":row.czqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cyca')>-1){
	            clumns.push({field : 'cyca',title : '查有此案',width : 200,hidden:util.getArrayIndex(option.hidden,'cyca')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cyca==null?"":row.cyca)+'>'+(row.cyca==null?"":row.cyca)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ladw')>-1){
	            clumns.push({field : 'ladw',title : '立案单位',width : 200,hidden:util.getArrayIndex(option.hidden,'ladw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ladw==null?"":row.ladw)+'>'+(row.ladw==null?"":row.ladw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lah')>-1){
	            clumns.push({field : 'lah',title : '立案号',width : 200,hidden:util.getArrayIndex(option.hidden,'lah')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lah==null?"":row.lah)+'>'+(row.lah==null?"":row.lah)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yzhbjjrjzhrq')>-1){
	            clumns.push({field : 'yzhbjjrjzhrq',title : '已抓获被检举人及抓获日期',width : 200,hidden:util.getArrayIndex(option.hidden,'yzhbjjrjzhrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yzhbjjrjzhrq==null?"":row.yzhbjjrjzhrq)+'>'+(row.yzhbjjrjzhrq==null?"":row.yzhbjjrjzhrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czcs')>-1){
	            clumns.push({field : 'czcs',title : '处置措施',width : 200,hidden:util.getArrayIndex(option.hidden,'czcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czcs==null?"":row.czcs)+'>'+(row.czcs==null?"":row.czcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'flzmws')>-1){
	            clumns.push({field : 'flzmws',title : '法律证明文书',width : 200,hidden:util.getArrayIndex(option.hidden,'flzmws')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.flzmws==null?"":row.flzmws)+'>'+(row.flzmws==null?"":row.flzmws)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'padw')>-1){
	            clumns.push({field : 'padw',title : '破案单位',width : 200,hidden:util.getArrayIndex(option.hidden,'padw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.padw==null?"":row.padw)+'>'+(row.padw==null?"":row.padw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'parq')>-1){
	            clumns.push({field : 'parq',title : '破案日期',width : 200,hidden:util.getArrayIndex(option.hidden,'parq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.parq==null?"":row.parq)+'>'+(row.parq==null?"":row.parq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pabh')>-1){
	            clumns.push({field : 'pabh',title : '破案表号',width : 200,hidden:util.getArrayIndex(option.hidden,'pabh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pabh==null?"":row.pabh)+'>'+(row.pabh==null?"":row.pabh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cbdw')>-1){
	            clumns.push({field : 'cbdw',title : '承办单位',width : 200,hidden:util.getArrayIndex(option.hidden,'cbdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cbdw==null?"":row.cbdw)+'>'+(row.cbdw==null?"":row.cbdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clqk')>-1){
	            clumns.push({field : 'clqk',title : '处理情况',width : 200,hidden:util.getArrayIndex(option.hidden,'clqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clqk==null?"":row.clqk)+'>'+(row.clqk==null?"":row.clqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfycd')>-1){
	            clumns.push({field : 'sfycd',title : '是否有此地',width : 200,hidden:util.getArrayIndex(option.hidden,'sfycd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfycd==null?"":row.sfycd)+'>'+(row.sfycd==null?"":row.sfycd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfycr')>-1){
	            clumns.push({field : 'sfycr',title : '是否有此人',width : 200,hidden:util.getArrayIndex(option.hidden,'sfycr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfycr==null?"":row.sfycr)+'>'+(row.sfycr==null?"":row.sfycr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wlcx')>-1){
	            clumns.push({field : 'wlcx',title : '网络查询',width : 200,hidden:util.getArrayIndex(option.hidden,'wlcx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wlcx==null?"":row.wlcx)+'>'+(row.wlcx==null?"":row.wlcx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cydk')>-1){
	            clumns.push({field : 'cydk',title : '查阅挡卡',width : 200,hidden:util.getArrayIndex(option.hidden,'cydk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cydk==null?"":row.cydk)+'>'+(row.cydk==null?"":row.cydk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sdfc')>-1){
	            clumns.push({field : 'sdfc',title : '实地访查',width : 200,hidden:util.getArrayIndex(option.hidden,'sdfc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sdfc==null?"":row.sdfc)+'>'+(row.sdfc==null?"":row.sdfc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qknr')>-1){
	            clumns.push({field : 'qknr',title : '情况内容',width : 200,hidden:util.getArrayIndex(option.hidden,'qknr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qknr==null?"":row.qknr)+'>'+(row.qknr==null?"":row.qknr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czbm')>-1){
	            clumns.push({field : 'czbm',title : '查证部门',width : 200,hidden:util.getArrayIndex(option.hidden,'czbm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czbm==null?"":row.czbm)+'>'+(row.czbm==null?"":row.czbm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fksj')>-1){
	            clumns.push({field : 'fksj',title : '反馈日期',width : 200,hidden:util.getArrayIndex(option.hidden,'fksj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fksj==null?"":row.fksj)+'>'+(row.fksj==null?"":row.fksj)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'pastable')>-1){
	            clumns.push({field : 'pastable',title : '是否有效',width : 200,hidden:util.getArrayIndex(option.hidden,'pastable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pastable==null?"":row.pastable)+'>'+(row.pastable==null?"":row.pastable)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程id',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});