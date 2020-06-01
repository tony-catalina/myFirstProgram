/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Tscl 数据列表
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
			if(util.getArrayIndex(option.clumns,'xm')>-1){
				clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jsh')>-1){
				clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'tsrxm')>-1){
	            clumns.push({field : 'tsrxm',title : '投诉人姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'tsrxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tsrxm==null?"":row.tsrxm)+'>'+(row.tsrxm==null?"":row.tsrxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gx')>-1){
	            clumns.push({field : 'gx',title : '与投诉人关系',width : 200,hidden:util.getArrayIndex(option.hidden,'gx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gx==null?"":row.gx)+'>'+(row.gx==null?"":row.gx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'btsdx')>-1){
	            clumns.push({field : 'btsdx',title : '被投诉对象(人或机关)',width : 200,hidden:util.getArrayIndex(option.hidden,'btsdx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.btsdx==null?"":row.btsdx)+'>'+(row.btsdx==null?"":row.btsdx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tsdx')>-1){
	            clumns.push({field : 'tsdx',title : '投诉对象(人或机关)',width : 200,hidden:util.getArrayIndex(option.hidden,'tsdx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tsdx==null?"":row.tsdx)+'>'+(row.tsdx==null?"":row.tsdx)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'tsdxString')>-1){
                clumns.push({field : 'tsdxString',title : '投诉对象(人或机关)',width : 200,hidden:util.getArrayIndex(option.hidden,'tsdxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tsdxString==null?"":row.tsdxString)+'>'+(row.tsdxString==null?"":row.tsdxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'tslx')>-1){
	            clumns.push({field : 'tslx',title : '投诉类型',width : 200,hidden:util.getArrayIndex(option.hidden,'tslx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tslx==null?"":row.tslx)+'>'+(row.tslx==null?"":row.tslx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tslxString')>-1){
                clumns.push({field : 'tslxString',title : '投诉类型',width : 200,hidden:util.getArrayIndex(option.hidden,'tslxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tslxString==null?"":row.tslxString)+'>'+(row.tslxString==null?"":row.tslxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'tsnr')>-1){
	            clumns.push({field : 'tsnr',title : '投诉内容',width : 200,hidden:util.getArrayIndex(option.hidden,'tsnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tsnr==null?"":row.tsnr)+'>'+(row.tsnr==null?"":row.tsnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tssj')>-1){
	            clumns.push({field : 'tssj',title : '投诉时间',width : 200,hidden:util.getArrayIndex(option.hidden,'tssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tssj==null?"":row.tssj)+'>'+(row.tssj==null?"":row.tssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'slr')>-1){
	            clumns.push({field : 'slr',title : '受理人',width : 200,hidden:util.getArrayIndex(option.hidden,'slr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.slr==null?"":row.slr)+'>'+(row.slr==null?"":row.slr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'slsj')>-1){
	            clumns.push({field : 'slsj',title : '受理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'slsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.slsj==null?"":row.slsj)+'>'+(row.slsj==null?"":row.slsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'spr')>-1){
	            clumns.push({field : 'spr',title : '审批人',width : 200,hidden:util.getArrayIndex(option.hidden,'spr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.spr==null?"":row.spr)+'>'+(row.spr==null?"":row.spr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'spyj')>-1){
	            clumns.push({field : 'spyj',title : '审批意见',width : 200,hidden:util.getArrayIndex(option.hidden,'spyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.spyj==null?"":row.spyj)+'>'+(row.spyj==null?"":row.spyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'spsj')>-1){
	            clumns.push({field : 'spsj',title : '审批时间',width : 200,hidden:util.getArrayIndex(option.hidden,'spsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.spsj==null?"":row.spsj)+'>'+(row.spsj==null?"":row.spsj)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'savetime')>-1){
	            clumns.push({field : 'savetime',title : '录入时间',width : 200,hidden:util.getArrayIndex(option.hidden,'savetime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.savetime==null?"":row.savetime)+'>'+(row.savetime==null?"":row.savetime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'saveuser')>-1){
	            clumns.push({field : 'saveuser',title : '录入人',width : 200,hidden:util.getArrayIndex(option.hidden,'saveuser')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.saveuser==null?"":row.saveuser)+'>'+(row.saveuser==null?"":row.saveuser)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clsj')>-1){
	            clumns.push({field : 'clsj',title : '处理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'clsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clsj==null?"":row.clsj)+'>'+(row.clsj==null?"":row.clsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cljg')>-1){
	            clumns.push({field : 'cljg',title : '处理结果',width : 200,hidden:util.getArrayIndex(option.hidden,'cljg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cljg==null?"":row.cljg)+'>'+(row.cljg==null?"":row.cljg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'clr')>-1){
	            clumns.push({field : 'clr',title : '处理人',width : 200,hidden:util.getArrayIndex(option.hidden,'clr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clr==null?"":row.clr)+'>'+(row.clr==null?"":row.clr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pastable')>-1){
	            clumns.push({field : 'pastable',title : '有效状态',width : 200,hidden:util.getArrayIndex(option.hidden,'pastable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pastable==null?"":row.pastable)+'>'+(row.pastable==null?"":row.pastable)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程id',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'psbz')>-1){
	            clumns.push({field : 'psbz',title : '批示标志',width : 200,hidden:util.getArrayIndex(option.hidden,'psbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.psbz==null?"":row.psbz)+'>'+(row.psbz==null?"":row.psbz)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});