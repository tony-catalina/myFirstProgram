/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jssw 数据列表
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
	        if(util.getArrayIndex(option.clumns,'snbh')>-1){
	            clumns.push({field : 'snbh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'snbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.snbh==null?"":row.snbh)+'>'+(row.snbh==null?"":row.snbh)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jbxx_xm')>-1){
	        	clumns.push({field : 'jbxx_xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_xm==null?"":row.jbxx_xm)+'>'+(row.jbxx_xm==null?"":row.jbxx_xm)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'xm')>-1){
				clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'jbxx_bm')>-1){
	        	clumns.push({field : 'jbxx_bm',title : '别名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bm==null?"":row.jbxx_bm)+'>'+(row.jbxx_bm==null?"":row.jbxx_bm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_xb')>-1){
	        	clumns.push({field : 'jbxx_xb',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_xb==null?"":row.jbxx_xb)+'>'+(row.jbxx_xb==null?"":row.jbxx_xb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_jsh')>-1){
	        	clumns.push({field : 'jbxx_jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_jsh==null?"":row.jbxx_jsh)+'>'+(row.jbxx_jsh==null?"":row.jbxx_jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_rsrq')>-1){
	        	clumns.push({field : 'jbxx_rsrq',title : '入所日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_rsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_rsrq==null?"":row.jbxx_rsrq)+'>'+(row.jbxx_rsrq==null?"":row.jbxx_rsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_gyqx')>-1){
	        	clumns.push({field : 'jbxx_gyqx',title : '关押期限',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_gyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_gyqx==null?"":row.jbxx_gyqx)+'>'+(row.jbxx_gyqx==null?"":row.jbxx_gyqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_bahj')>-1){
	        	clumns.push({field : 'jbxx_bahj',title : '办案环节',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bahj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bahj==null?"":row.jbxx_bahj)+'>'+(row.jbxx_bahj==null?"":row.jbxx_bahj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jszjh')>-1){
	            clumns.push({field : 'jszjh',title : '家属证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'jszjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jszjh==null?"":row.jszjh)+'>'+(row.jszjh==null?"":row.jszjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqyy')>-1){
	            clumns.push({field : 'sqyy',title : '申请原因',width : 200,hidden:util.getArrayIndex(option.hidden,'sqyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqyy==null?"":row.sqyy)+'>'+(row.sqyy==null?"":row.sqyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqsj')>-1){
	            clumns.push({field : 'sqsj',title : '申请时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sqsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqsj==null?"":row.sqsj)+'>'+(row.sqsj==null?"":row.sqsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqwp')>-1){
	            clumns.push({field : 'sqwp',title : '申请物品',width : 200,hidden:util.getArrayIndex(option.hidden,'sqwp')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqwp==null?"":row.sqwp)+'>'+(row.sqwp==null?"":row.sqwp)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'spr')>-1){
	            clumns.push({field : 'spr',title : '管教审批人',width : 200,hidden:util.getArrayIndex(option.hidden,'spr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.spr==null?"":row.spr)+'>'+(row.spr==null?"":row.spr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'spnr')>-1){
	            clumns.push({field : 'spnr',title : '审批内容',width : 200,hidden:util.getArrayIndex(option.hidden,'spnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.spnr==null?"":row.spnr)+'>'+(row.spnr==null?"":row.spnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'spbz')>-1){
	            clumns.push({field : 'spbz',title : '审批标志',width : 200,hidden:util.getArrayIndex(option.hidden,'spbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.spbz==null?"":row.spbz)+'>'+(row.spbz==null?"":row.spbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'spsj')>-1){
	            clumns.push({field : 'spsj',title : '审批时间',width : 200,hidden:util.getArrayIndex(option.hidden,'spsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.spsj==null?"":row.spsj)+'>'+(row.spsj==null?"":row.spsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjqrr')>-1){
	            clumns.push({field : 'gjqrr',title : '管教确认人',width : 200,hidden:util.getArrayIndex(option.hidden,'gjqrr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjqrr==null?"":row.gjqrr)+'>'+(row.gjqrr==null?"":row.gjqrr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjqrsj')>-1){
	            clumns.push({field : 'gjqrsj',title : '管教确认时间',width : 200,hidden:util.getArrayIndex(option.hidden,'gjqrsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjqrsj==null?"":row.gjqrsj)+'>'+(row.gjqrsj==null?"":row.gjqrsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yjjsr')>-1){
	            clumns.push({field : 'yjjsr',title : '邮寄家属人',width : 200,hidden:util.getArrayIndex(option.hidden,'yjjsr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yjjsr==null?"":row.yjjsr)+'>'+(row.yjjsr==null?"":row.yjjsr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yjjssj')>-1){
	            clumns.push({field : 'yjjssj',title : '邮寄家属时间',width : 200,hidden:util.getArrayIndex(option.hidden,'yjjssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yjjssj==null?"":row.yjjssj)+'>'+(row.yjjssj==null?"":row.yjjssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qtblsj')>-1){
	            clumns.push({field : 'qtblsj',title : '前台办理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'qtblsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qtblsj==null?"":row.qtblsj)+'>'+(row.qtblsj==null?"":row.qtblsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qtblr')>-1){
	            clumns.push({field : 'qtblr',title : '前台办理人',width : 200,hidden:util.getArrayIndex(option.hidden,'qtblr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qtblr==null?"":row.qtblr)+'>'+(row.qtblr==null?"":row.qtblr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qtwpqr')>-1){
	            clumns.push({field : 'qtwpqr',title : '前台确认寄回物品是否与申请物品一致',width : 200,hidden:util.getArrayIndex(option.hidden,'qtwpqr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qtwpqr==null?"":row.qtwpqr)+'>'+(row.qtwpqr==null?"":row.qtwpqr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ajsj')>-1){
	            clumns.push({field : 'ajsj',title : '安检时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ajsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ajsj==null?"":row.ajsj)+'>'+(row.ajsj==null?"":row.ajsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ajr')>-1){
	            clumns.push({field : 'ajr',title : '安检人',width : 200,hidden:util.getArrayIndex(option.hidden,'ajr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ajr==null?"":row.ajr)+'>'+(row.ajr==null?"":row.ajr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ajqk')>-1){
	            clumns.push({field : 'ajqk',title : '安检是否异常（YWYC）',width : 200,hidden:util.getArrayIndex(option.hidden,'ajqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ajqk==null?"":row.ajqk)+'>'+(row.ajqk==null?"":row.ajqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ajycqk')>-1){
	            clumns.push({field : 'ajycqk',title : '安检异常情况',width : 200,hidden:util.getArrayIndex(option.hidden,'ajycqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ajycqk==null?"":row.ajycqk)+'>'+(row.ajycqk==null?"":row.ajycqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjswsj')>-1){
	            clumns.push({field : 'gjswsj',title : '管教送物时间',width : 200,hidden:util.getArrayIndex(option.hidden,'gjswsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjswsj==null?"":row.gjswsj)+'>'+(row.gjswsj==null?"":row.gjswsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjswr')>-1){
	            clumns.push({field : 'gjswr',title : '管教送物人',width : 200,hidden:util.getArrayIndex(option.hidden,'gjswr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjswr==null?"":row.gjswr)+'>'+(row.gjswr==null?"":row.gjswr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qrbz')>-1){
	            clumns.push({field : 'qrbz',title : '在押人员确认领取标志',width : 200,hidden:util.getArrayIndex(option.hidden,'qrbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qrbz==null?"":row.qrbz)+'>'+(row.qrbz==null?"":row.qrbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywzt')>-1){
	            clumns.push({field : 'ywzt',title : '业务状态',width : 200,hidden:util.getArrayIndex(option.hidden,'ywzt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywzt==null?"":row.ywzt)+'>'+(row.ywzt==null?"":row.ywzt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lqsj')>-1){
	            clumns.push({field : 'lqsj',title : '领取时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lqsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lqsj==null?"":row.lqsj)+'>'+(row.lqsj==null?"":row.lqsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lqbz')>-1){
	            clumns.push({field : 'lqbz',title : '领取标志',width : 200,hidden:util.getArrayIndex(option.hidden,'lqbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lqbz==null?"":row.lqbz)+'>'+(row.lqbz==null?"":row.lqbz)+'</span>'}});
	        }
			
			
			if(util.getArrayIndex(option.clumns,'lxfs')>-1){
	            clumns.push({field : 'lxfs',title : '联系方式',width : 200,hidden:util.getArrayIndex(option.hidden,'lxfs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxfs==null?"":row.lxfs)+'>'+(row.lxfs==null?"":row.lxfs)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'dz')>-1){
	            clumns.push({field : 'dz',title : '地址',width : 200,hidden:util.getArrayIndex(option.hidden,'dz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dz==null?"":row.dz)+'>'+(row.dz==null?"":row.dz)+'</span>'}});
	        }
	        return clumns;
	    };
	    return main;
	});