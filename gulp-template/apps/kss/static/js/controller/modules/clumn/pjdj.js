/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Pjdj 数据列表
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
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号 ',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pjrq')>-1){
	            clumns.push({field : 'pjrq',title : '判决日期',width : 200,hidden:util.getArrayIndex(option.hidden,'pjrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pjrq==null?"":row.pjrq)+'>'+(row.pjrq==null?"":row.pjrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pjdw')>-1){
	            clumns.push({field : 'pjdw',title : '判决单位',width : 200,hidden:util.getArrayIndex(option.hidden,'pjdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pjdw==null?"":row.pjdw)+'>'+(row.pjdw==null?"":row.pjdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wsh')>-1){
	            clumns.push({field : 'wsh',title : '文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'wsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wsh==null?"":row.wsh)+'>'+(row.wsh==null?"":row.wsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cljg')>-1){
	            clumns.push({field : 'cljg',title : '处理结果',width : 200,hidden:util.getArrayIndex(option.hidden,'cljg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cljg==null?"":row.cljg)+'>'+(row.cljg==null?"":row.cljg)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'cljgString')>-1){
	            clumns.push({field : 'cljgString',title : '处理结果',width : 200,hidden:util.getArrayIndex(option.hidden,'cljgString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cljgString==null?"":row.cljgString)+'>'+(row.cljgString==null?"":row.cljgString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xq')>-1){
	            clumns.push({field : 'xq',title : '刑期',width : 200,hidden:util.getArrayIndex(option.hidden,'xq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xq==null?"":row.xq)+'>'+(row.xq==null?"":row.xq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fjx')>-1){
	            clumns.push({field : 'fjx',title : '附加刑',width : 200,hidden:util.getArrayIndex(option.hidden,'fjx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fjx==null?"":row.fjx)+'>'+(row.fjx==null?"":row.fjx)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'fjxString')>-1){
	            clumns.push({field : 'fjxString',title : '附加刑',width : 200,hidden:util.getArrayIndex(option.hidden,'fjxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fjxString==null?"":row.fjxString)+'>'+(row.fjxString==null?"":row.fjxString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qsrq')>-1){
	            clumns.push({field : 'qsrq',title : '起始日期',width : 200,hidden:util.getArrayIndex(option.hidden,'qsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qsrq==null?"":row.qsrq)+'>'+(row.qsrq==null?"":row.qsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xmrq')>-1){
	            clumns.push({field : 'xmrq',title : '刑满日期',width : 200,hidden:util.getArrayIndex(option.hidden,'xmrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xmrq==null?"":row.xmrq)+'>'+(row.xmrq==null?"":row.xmrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jarq')>-1){
	            clumns.push({field : 'jarq',title : '结案日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jarq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jarq==null?"":row.jarq)+'>'+(row.jarq==null?"":row.jarq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hx')>-1){
	            clumns.push({field : 'hx',title : '缓刑',width : 200,hidden:util.getArrayIndex(option.hidden,'hx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hx==null?"":row.hx)+'>'+(row.hx==null?"":row.hx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hxqx')>-1){
	            clumns.push({field : 'hxqx',title : '缓刑刑期',width : 200,hidden:util.getArrayIndex(option.hidden,'hxqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hxqx==null?"":row.hxqx)+'>'+(row.hxqx==null?"":row.hxqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fjje')>-1){
	            clumns.push({field : 'fjje',title : '罚金金额',width : 200,hidden:util.getArrayIndex(option.hidden,'fjje')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fjje==null?"":row.fjje)+'>'+(row.fjje==null?"":row.fjje)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hxksrq')>-1){
	            clumns.push({field : 'hxksrq',title : '缓刑开始日期',width : 200,hidden:util.getArrayIndex(option.hidden,'hxksrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hxksrq==null?"":row.hxksrq)+'>'+(row.hxksrq==null?"":row.hxksrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hxjsrq')>-1){
	            clumns.push({field : 'hxjsrq',title : '缓刑结束日期',width : 200,hidden:util.getArrayIndex(option.hidden,'hxjsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hxjsrq==null?"":row.hxjsrq)+'>'+(row.hxjsrq==null?"":row.hxjsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bdzzqlsj')>-1){
	            clumns.push({field : 'bdzzqlsj',title : '剥夺政治权利时间',width : 200,hidden:util.getArrayIndex(option.hidden,'bdzzqlsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bdzzqlsj==null?"":row.bdzzqlsj)+'>'+(row.bdzzqlsj==null?"":row.bdzzqlsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bdzzqlkssj')>-1){
	            clumns.push({field : 'bdzzqlkssj',title : '剥夺政治权利开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'bdzzqlkssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bdzzqlkssj==null?"":row.bdzzqlkssj)+'>'+(row.bdzzqlkssj==null?"":row.bdzzqlkssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bdzzqljssj')>-1){
	            clumns.push({field : 'bdzzqljssj',title : '剥夺政治权利结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'bdzzqljssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bdzzqljssj==null?"":row.bdzzqljssj)+'>'+(row.bdzzqljssj==null?"":row.bdzzqljssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pjsxrq')>-1){
	            clumns.push({field : 'pjsxrq',title : '判决生效日期',width : 200,hidden:util.getArrayIndex(option.hidden,'pjsxrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pjsxrq==null?"":row.pjsxrq)+'>'+(row.pjsxrq==null?"":row.pjsxrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sdrq')>-1){
	            clumns.push({field : 'sdrq',title : '送达日期',width : 200,hidden:util.getArrayIndex(option.hidden,'sdrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sdrq==null?"":row.sdrq)+'>'+(row.sdrq==null?"":row.sdrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'jyqx')>-1){
	            clumns.push({field : 'jyqx',title : '羁押期限',width : 200,hidden:util.getArrayIndex(option.hidden,'jyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jyqx==null?"":row.jyqx)+'>'+(row.jyqx==null?"":row.jyqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ygyqx')>-1){
	            clumns.push({field : 'ygyqx',title : '原关押期限',width : 200,hidden:util.getArrayIndex(option.hidden,'ygyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ygyqx==null?"":row.ygyqx)+'>'+(row.ygyqx==null?"":row.ygyqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wspzlx')>-1){
	            clumns.push({field : 'wspzlx',title : '文书凭证类型',width : 200,hidden:util.getArrayIndex(option.hidden,'wspzlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wspzlx==null?"":row.wspzlx)+'>'+(row.wspzlx==null?"":row.wspzlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ycljg')>-1){
	            clumns.push({field : 'ycljg',title : '原处理结果',width : 200,hidden:util.getArrayIndex(option.hidden,'ycljg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ycljg==null?"":row.ycljg)+'>'+(row.ycljg==null?"":row.ycljg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qzcs')>-1){
	            clumns.push({field : 'qzcs',title : '强制措施',width : 200,hidden:util.getArrayIndex(option.hidden,'qzcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qzcs==null?"":row.qzcs)+'>'+(row.qzcs==null?"":row.qzcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pjzm')>-1){
	            clumns.push({field : 'pjzm',title : '判决罪名',width : 200,hidden:util.getArrayIndex(option.hidden,'pjzm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pjzm==null?"":row.pjzm)+'>'+(row.pjzm==null?"":row.pjzm)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});