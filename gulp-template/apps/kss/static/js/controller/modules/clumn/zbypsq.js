/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Zbypsq 数据列表
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
	        if(util.getArrayIndex(option.clumns,'sqr')>-1){
				clumns.push({field : 'sqr',title : '申请人',width : 200,hidden:util.getArrayIndex(option.hidden,'sqr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqr==null?"":row.sqr)+'>'+(row.sqr==null?"":row.sqr)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jbxxXm')>-1){
				clumns.push({field : 'jbxxXm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxxXm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxxXm==null?"":row.jbxxXm)+'>'+(row.jbxxXm==null?"":row.jbxxXm)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jbxxJsh')>-1){
				clumns.push({field : 'jbxxJsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxxJsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxxJsh==null?"":row.jbxxJsh)+'>'+(row.jbxxJsh==null?"":row.jbxxJsh)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'ypbh')>-1){
	            clumns.push({field : 'ypbh',title : '药品编号',width : 200,hidden:util.getArrayIndex(option.hidden,'ypbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypbh==null?"":row.ypbh)+'>'+(row.ypbh==null?"":row.ypbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ypmc')>-1){
				clumns.push({field : 'ypmc',title : '药品名称',width : 200,hidden:util.getArrayIndex(option.hidden,'ypmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypmc==null?"":row.ypmc)+'>'+(row.ypmc==null?"":row.ypmc)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'sl')>-1){
	            clumns.push({field : 'sl',title : '数量',width : 200,hidden:util.getArrayIndex(option.hidden,'sl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl==null?"":row.sl)+'>'+(row.sl==null?"":row.sl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqyy')>-1){
	            clumns.push({field : 'sqyy',title : '申请原因',width : 200,hidden:util.getArrayIndex(option.hidden,'sqyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqyy==null?"":row.sqyy)+'>'+(row.sqyy==null?"":row.sqyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqsj')>-1){
	            clumns.push({field : 'sqsj',title : '申请时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sqsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqsj==null?"":row.sqsj)+'>'+(row.sqsj==null?"":row.sqsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blr')>-1){
	            clumns.push({field : 'blr',title : '办理人',width : 200,hidden:util.getArrayIndex(option.hidden,'blr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blr==null?"":row.blr)+'>'+(row.blr==null?"":row.blr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjpsbz')>-1){
	            clumns.push({field : 'gjpsbz',title : '管教批示标志',width : 200,hidden:util.getArrayIndex(option.hidden,'gjpsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjpsbz==null?"":row.gjpsbz)+'>'+(row.gjpsbz==null?"":row.gjpsbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjyj')>-1){
	            clumns.push({field : 'gjyj',title : '管教意见',width : 200,hidden:util.getArrayIndex(option.hidden,'gjyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjyj==null?"":row.gjyj)+'>'+(row.gjyj==null?"":row.gjyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjblsj')>-1){
	            clumns.push({field : 'gjblsj',title : '管教办理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'gjblsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjblsj==null?"":row.gjblsj)+'>'+(row.gjblsj==null?"":row.gjblsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjxm')>-1){
	            clumns.push({field : 'gjxm',title : '管教姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'gjxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjxm==null?"":row.gjxm)+'>'+(row.gjxm==null?"":row.gjxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ypcz')>-1){
	            clumns.push({field : 'ypcz',title : '药品是否充足',width : 200,hidden:util.getArrayIndex(option.hidden,'ypcz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypcz==null?"":row.ypcz)+'>'+(row.ypcz==null?"":row.ypcz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ysxm')>-1){
	            clumns.push({field : 'ysxm',title : '医生姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ysxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysxm==null?"":row.ysxm)+'>'+(row.ysxm==null?"":row.ysxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfgy')>-1){
	            clumns.push({field : 'sfgy',title : '是否购药（SHFO）',width : 200,hidden:util.getArrayIndex(option.hidden,'sfgy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfgy==null?"":row.sfgy)+'>'+(row.sfgy==null?"":row.sfgy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gysl')>-1){
	            clumns.push({field : 'gysl',title : '购药数量',width : 200,hidden:util.getArrayIndex(option.hidden,'gysl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gysl==null?"":row.gysl)+'>'+(row.gysl==null?"":row.gysl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ysblsj')>-1){
	            clumns.push({field : 'ysblsj',title : '医生办理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ysblsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysblsj==null?"":row.ysblsj)+'>'+(row.ysblsj==null?"":row.ysblsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldpsbz')>-1){
	            clumns.push({field : 'ldpsbz',title : '领导批示标志',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsbz==null?"":row.ldpsbz)+'>'+(row.ldpsbz==null?"":row.ldpsbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyj')>-1){
	            clumns.push({field : 'ldyj',title : '领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyj==null?"":row.ldyj)+'>'+(row.ldyj==null?"":row.ldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldxm')>-1){
	            clumns.push({field : 'ldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldxm==null?"":row.ldxm)+'>'+(row.ldxm==null?"":row.ldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldpssj')>-1){
	            clumns.push({field : 'ldpssj',title : '领导批示时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpssj==null?"":row.ldpssj)+'>'+(row.ldpssj==null?"":row.ldpssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sysfyz')>-1){
	            clumns.push({field : 'sysfyz',title : '送药是否一致',width : 200,hidden:util.getArrayIndex(option.hidden,'sysfyz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sysfyz==null?"":row.sysfyz)+'>'+(row.sysfyz==null?"":row.sysfyz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'byzxq')>-1){
	            clumns.push({field : 'byzxq',title : '不一致详情',width : 200,hidden:util.getArrayIndex(option.hidden,'byzxq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.byzxq==null?"":row.byzxq)+'>'+(row.byzxq==null?"":row.byzxq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'syblr')>-1){
	            clumns.push({field : 'syblr',title : '送药办理人',width : 200,hidden:util.getArrayIndex(option.hidden,'syblr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.syblr==null?"":row.syblr)+'>'+(row.syblr==null?"":row.syblr)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态(YWSTATE)',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程id',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});