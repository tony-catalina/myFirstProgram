/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jypz 数据列表
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
	        if(util.getArrayIndex(option.clumns,'xm')>-1){
	            clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdrq')>-1){
	            clumns.push({field : 'zdrq',title : '诊断日期',width : 200,hidden:util.getArrayIndex(option.hidden,'zdrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdrq==null?"":row.zdrq)+'>'+(row.zdrq==null?"":row.zdrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ys')>-1){
	            clumns.push({field : 'ys',title : '医生',width : 200,hidden:util.getArrayIndex(option.hidden,'ys')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ys==null?"":row.ys)+'>'+(row.ys==null?"":row.ys)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ly')>-1){
	            clumns.push({field : 'ly',title : '来源',width : 200,hidden:util.getArrayIndex(option.hidden,'ly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ly==null?"":row.ly)+'>'+(row.ly==null?"":row.ly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zs')>-1){
	            clumns.push({field : 'zs',title : '自述',width : 200,hidden:util.getArrayIndex(option.hidden,'zs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zs==null?"":row.zs)+'>'+(row.zs==null?"":row.zs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zd')>-1){
	            clumns.push({field : 'zd',title : '诊断',width : 200,hidden:util.getArrayIndex(option.hidden,'zd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zd==null?"":row.zd)+'>'+(row.zd==null?"":row.zd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzyy')>-1){
	            clumns.push({field : 'jzyy',title : '就诊医院',width : 200,hidden:util.getArrayIndex(option.hidden,'jzyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzyy==null?"":row.jzyy)+'>'+(row.jzyy==null?"":row.jzyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cljg')>-1){
	            clumns.push({field : 'cljg',title : '处理结果',width : 200,hidden:util.getArrayIndex(option.hidden,'cljg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cljg==null?"":row.cljg)+'>'+(row.cljg==null?"":row.cljg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swjy')>-1){
	            clumns.push({field : 'swjy',title : '所外就医',width : 200,hidden:util.getArrayIndex(option.hidden,'swjy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swjy==null?"":row.swjy)+'>'+(row.swjy==null?"":row.swjy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'psbz')>-1){
	            clumns.push({field : 'psbz',title : '批示标识',width : 200,hidden:util.getArrayIndex(option.hidden,'psbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.psbz==null?"":row.psbz)+'>'+(row.psbz==null?"":row.psbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yyzdsj')>-1){
	            clumns.push({field : 'yyzdsj',title : '医院诊断时间',width : 200,hidden:util.getArrayIndex(option.hidden,'yyzdsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yyzdsj==null?"":row.yyzdsj)+'>'+(row.yyzdsj==null?"":row.yyzdsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yyzdjg')>-1){
	            clumns.push({field : 'yyzdjg',title : '医院诊断结果',width : 200,hidden:util.getArrayIndex(option.hidden,'yyzdjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yyzdjg==null?"":row.yyzdjg)+'>'+(row.yyzdjg==null?"":row.yyzdjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yyzlcs')>-1){
	            clumns.push({field : 'yyzlcs',title : '医院治疗措施',width : 200,hidden:util.getArrayIndex(option.hidden,'yyzlcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yyzlcs==null?"":row.yyzlcs)+'>'+(row.yyzlcs==null?"":row.yyzlcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csjylx')>-1){
	            clumns.push({field : 'csjylx',title : '出所就医类型',width : 200,hidden:util.getArrayIndex(option.hidden,'csjylx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csjylx==null?"":row.csjylx)+'>'+(row.csjylx==null?"":row.csjylx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ptmj')>-1){
	            clumns.push({field : 'ptmj',title : '陪同民警',width : 200,hidden:util.getArrayIndex(option.hidden,'ptmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ptmj==null?"":row.ptmj)+'>'+(row.ptmj==null?"":row.ptmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fy')>-1){
	            clumns.push({field : 'fy',title : '费用',width : 200,hidden:util.getArrayIndex(option.hidden,'fy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fy==null?"":row.fy)+'>'+(row.fy==null?"":row.fy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pastable')>-1){
	            clumns.push({field : 'pastable',title : '过期标志',width : 200,hidden:util.getArrayIndex(option.hidden,'pastable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pastable==null?"":row.pastable)+'>'+(row.pastable==null?"":row.pastable)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hssj')>-1){
	            clumns.push({field : 'hssj',title : '回所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hssj==null?"":row.hssj)+'>'+(row.hssj==null?"":row.hssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bhlx')>-1){
	            clumns.push({field : 'bhlx',title : '病号类型',width : 200,hidden:util.getArrayIndex(option.hidden,'bhlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bhlx==null?"":row.bhlx)+'>'+(row.bhlx==null?"":row.bhlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyj')>-1){
	            clumns.push({field : 'ldyj',title : '领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyj==null?"":row.ldyj)+'>'+(row.ldyj==null?"":row.ldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ypff')>-1){
	            clumns.push({field : 'ypff',title : '药品发放',width : 200,hidden:util.getArrayIndex(option.hidden,'ypff')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypff==null?"":row.ypff)+'>'+(row.ypff==null?"":row.ypff)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fyksrq')>-1){
	            clumns.push({field : 'fyksrq',title : '服药开始日期',width : 200,hidden:util.getArrayIndex(option.hidden,'fyksrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fyksrq==null?"":row.fyksrq)+'>'+(row.fyksrq==null?"":row.fyksrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fyjsrq')>-1){
	            clumns.push({field : 'fyjsrq',title : '服药结束日期',width : 200,hidden:util.getArrayIndex(option.hidden,'fyjsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fyjsrq==null?"":row.fyjsrq)+'>'+(row.fyjsrq==null?"":row.fyjsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sjzljsbz')>-1){
	            clumns.push({field : 'sjzljsbz',title : '及时标志',width : 200,hidden:util.getArrayIndex(option.hidden,'sjzljsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjzljsbz==null?"":row.sjzljsbz)+'>'+(row.sjzljsbz==null?"":row.sjzljsbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
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