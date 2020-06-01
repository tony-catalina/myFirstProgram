/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Hjbd 数据列表
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
	        if(util.getArrayIndex(option.clumns,'sfslaj')>-1){
	            clumns.push({field : 'sfslaj',title : '是否三类案件',width : 200,hidden:util.getArrayIndex(option.hidden,'sfslaj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfslaj==null?"":row.sfslaj)+'>'+(row.sfslaj==null?"":row.sfslaj)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'sfslajString')>-1){
                clumns.push({field : 'sfslajString',title : '是否三类案件',width : 200,hidden:util.getArrayIndex(option.hidden,'sfslajString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfslajString==null?"":row.sfslajString)+'>'+(row.sfslajString==null?"":row.sfslajString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'sfjdwm')>-1){
	            clumns.push({field : 'sfjdwm',title : '是否戒毒期未满',width : 200,hidden:util.getArrayIndex(option.hidden,'sfjdwm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfjdwm==null?"":row.sfjdwm)+'>'+(row.sfjdwm==null?"":row.sfjdwm)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'sfjdwmString')>-1){
                clumns.push({field : 'sfjdwmString',title : '是否戒毒期未满',width : 200,hidden:util.getArrayIndex(option.hidden,'sfjdwmString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfjdwmString==null?"":row.sfjdwmString)+'>'+(row.sfjdwmString==null?"":row.sfjdwmString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'bdrq')>-1){
	            clumns.push({field : 'bdrq',title : '变动日期',width : 200,hidden:util.getArrayIndex(option.hidden,'bdrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bdrq==null?"":row.bdrq)+'>'+(row.bdrq==null?"":row.bdrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bahj')>-1){
	            clumns.push({field : 'bahj',title : '办案环节',width : 200,hidden:util.getArrayIndex(option.hidden,'bahj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bahj==null?"":row.bahj)+'>'+(row.bahj==null?"":row.bahj)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'bahjString')>-1){
			    clumns.push({field : 'bahjString',title : '办案环节',width : 200,hidden:util.getArrayIndex(option.hidden,'bahjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bahjString==null?"":row.bahjString)+'>'+(row.bahjString==null?"":row.bahjString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'yssjd')>-1){
	            clumns.push({field : 'yssjd',title : '原诉讼阶段',width : 200,hidden:util.getArrayIndex(option.hidden,'yssjd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yssjd==null?"":row.yssjd)+'>'+(row.yssjd==null?"":row.yssjd)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'yssjdString')>-1){
                clumns.push({field : 'yssjdString',title : '原诉讼阶段',width : 200,hidden:util.getArrayIndex(option.hidden,'yssjdString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yssjdString==null?"":row.yssjdString)+'>'+(row.yssjdString==null?"":row.yssjdString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'dwlx')>-1){
	            clumns.push({field : 'dwlx',title : '办案单位类型',width : 200,hidden:util.getArrayIndex(option.hidden,'dwlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dwlx==null?"":row.dwlx)+'>'+(row.dwlx==null?"":row.dwlx)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'dwlxString')>-1){
			    clumns.push({field : 'dwlxString',title : '办案单位类型',width : 200,hidden:util.getArrayIndex(option.hidden,'dwlxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dwlxString==null?"":row.dwlxString)+'>'+(row.dwlxString==null?"":row.dwlxString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'badw')>-1){
	            clumns.push({field : 'badw',title : '办案单位',width : 200,hidden:util.getArrayIndex(option.hidden,'badw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.badw==null?"":row.badw)+'>'+(row.badw==null?"":row.badw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bar')>-1){
	            clumns.push({field : 'bar',title : '办案人',width : 200,hidden:util.getArrayIndex(option.hidden,'bar')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bar==null?"":row.bar)+'>'+(row.bar==null?"":row.bar)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bardh')>-1){
	            clumns.push({field : 'bardh',title : '办案人电话',width : 200,hidden:util.getArrayIndex(option.hidden,'bardh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bardh==null?"":row.bardh)+'>'+(row.bardh==null?"":row.bardh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ybadwlx')>-1){
	            clumns.push({field : 'ybadwlx',title : '原办案单位类型',width : 200,hidden:util.getArrayIndex(option.hidden,'ybadwlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ybadwlx==null?"":row.ybadwlx)+'>'+(row.ybadwlx==null?"":row.ybadwlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ybadwlxString')>-1){
                clumns.push({field : 'ybadwlxString',title : '原办案单位类型',width : 200,hidden:util.getArrayIndex(option.hidden,'ybadwlxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ybadwlxString==null?"":row.ybadwlxString)+'>'+(row.ybadwlxString==null?"":row.ybadwlxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'ybadw')>-1){
	            clumns.push({field : 'ybadw',title : '原办案单位',width : 200,hidden:util.getArrayIndex(option.hidden,'ybadw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ybadw==null?"":row.ybadw)+'>'+(row.ybadw==null?"":row.ybadw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ybar')>-1){
	            clumns.push({field : 'ybar',title : '原办案人',width : 200,hidden:util.getArrayIndex(option.hidden,'ybar')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ybar==null?"":row.ybar)+'>'+(row.ybar==null?"":row.ybar)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ybardh')>-1){
	            clumns.push({field : 'ybardh',title : '原办案人电话',width : 200,hidden:util.getArrayIndex(option.hidden,'ybardh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ybardh==null?"":row.ybardh)+'>'+(row.ybardh==null?"":row.ybardh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wsh')>-1){
	            clumns.push({field : 'wsh',title : '文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'wsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wsh==null?"":row.wsh)+'>'+(row.wsh==null?"":row.wsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gyqx')>-1){
	            clumns.push({field : 'gyqx',title : '关押期限',width : 200,hidden:util.getArrayIndex(option.hidden,'gyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gyqx==null?"":row.gyqx)+'>'+(row.gyqx==null?"":row.gyqx)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'yjyqx')>-1){
	            clumns.push({field : 'yjyqx',title : '原羁押期限',width : 200,hidden:util.getArrayIndex(option.hidden,'yjyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yjyqx==null?"":row.yjyqx)+'>'+(row.yjyqx==null?"":row.yjyqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qsrq')>-1){
	            clumns.push({field : 'qsrq',title : '起始日期 ',width : 200,hidden:util.getArrayIndex(option.hidden,'qsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qsrq==null?"":row.qsrq)+'>'+(row.qsrq==null?"":row.qsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zzrq')>-1){
	            clumns.push({field : 'zzrq',title : '终止日期',width : 200,hidden:util.getArrayIndex(option.hidden,'zzrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzrq==null?"":row.zzrq)+'>'+(row.zzrq==null?"":row.zzrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wspzlx')>-1){
	            clumns.push({field : 'wspzlx',title : '文书凭证类型',width : 200,hidden:util.getArrayIndex(option.hidden,'wspzlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wspzlx==null?"":row.wspzlx)+'>'+(row.wspzlx==null?"":row.wspzlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wssdrq')>-1){
	            clumns.push({field : 'wssdrq',title : '文书送达日期',width : 200,hidden:util.getArrayIndex(option.hidden,'wssdrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wssdrq==null?"":row.wssdrq)+'>'+(row.wssdrq==null?"":row.wssdrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzdw')>-1){
	            clumns.push({field : 'pzdw',title : '批准单位',width : 200,hidden:util.getArrayIndex(option.hidden,'pzdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzdw==null?"":row.pzdw)+'>'+(row.pzdw==null?"":row.pzdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcsyid')>-1){
	            clumns.push({field : 'ywlcsyid',title : '业务流程使用',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcsyid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcsyid==null?"":row.ywlcsyid)+'>'+(row.ywlcsyid==null?"":row.ywlcsyid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '存在状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'stateString')>-1){
                clumns.push({field : 'stateString',title : '存在状态',width : 200,hidden:util.getArrayIndex(option.hidden,'stateString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.stateString==null?"":row.stateString)+'>'+(row.stateString==null?"":row.stateString)+'</span>'}});
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
	            clumns.push({field : 'updatetime',title : '更新时间 ',width : 200,hidden:util.getArrayIndex(option.hidden,'updatetime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.updatetime==null?"":row.updatetime)+'>'+(row.updatetime==null?"":row.updatetime)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});