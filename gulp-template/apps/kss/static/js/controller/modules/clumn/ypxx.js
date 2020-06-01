/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Ypxx 数据列表
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
	            clumns.push({field : 'jsbh',title : '监所编号 ',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ypmc')>-1){
	            clumns.push({field : 'ypmc',title : '药品名称',width : 200,hidden:util.getArrayIndex(option.hidden,'ypmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypmc==null?"":row.ypmc)+'>'+(row.ypmc==null?"":row.ypmc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tm')>-1){
	            clumns.push({field : 'tm',title : '条码',width : 200,hidden:util.getArrayIndex(option.hidden,'tm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tm==null?"":row.tm)+'>'+(row.tm==null?"":row.tm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fydw')>-1){
	            clumns.push({field : 'fydw',title : '发药单位',width : 200,hidden:util.getArrayIndex(option.hidden,'fydw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fydw==null?"":row.fydw)+'>'+(row.fydw==null?"":row.fydw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fydwString')>-1){
                clumns.push({field : 'fydwString',title : '发药单位',width : 200,hidden:util.getArrayIndex(option.hidden,'fydwString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fydwString==null?"":row.fydwString)+'>'+(row.fydwString==null?"":row.fydwString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'ypdw')>-1){
	            clumns.push({field : 'ypdw',title : '药品单位',width : 200,hidden:util.getArrayIndex(option.hidden,'ypdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypdw==null?"":row.ypdw)+'>'+(row.ypdw==null?"":row.ypdw)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'ypdwString')>-1){
                clumns.push({field : 'ypdwString',title : '药品单位',width : 200,hidden:util.getArrayIndex(option.hidden,'ypdwString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypdwString==null?"":row.ypdwString)+'>'+(row.ypdwString==null?"":row.ypdwString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'jg')>-1){
	            clumns.push({field : 'jg',title : '价格',width : 200,hidden:util.getArrayIndex(option.hidden,'jg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jg==null?"":row.jg)+'>'+(row.jg==null?"":row.jg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gg')>-1){
	            clumns.push({field : 'gg',title : '规格',width : 200,hidden:util.getArrayIndex(option.hidden,'gg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gg==null?"":row.gg)+'>'+(row.gg==null?"":row.gg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sccj')>-1){
	            clumns.push({field : 'sccj',title : '生产厂家',width : 200,hidden:util.getArrayIndex(option.hidden,'sccj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sccj==null?"":row.sccj)+'>'+(row.sccj==null?"":row.sccj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfcfy')>-1){
	            clumns.push({field : 'sfcfy',title : '是否处方药',width : 200,hidden:util.getArrayIndex(option.hidden,'sfcfy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfcfy==null?"":row.sfcfy)+'>'+(row.sfcfy==null?"":row.sfcfy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfcfyString')>-1){
                clumns.push({field : 'sfcfyString',title : '是否处方药',width : 200,hidden:util.getArrayIndex(option.hidden,'sfcfyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfcfyString==null?"":row.sfcfyString)+'>'+(row.sfcfyString==null?"":row.sfcfyString)+'</span>'}});
            }
			if(util.getArrayIndex(option.clumns,'syff')>-1){
				clumns.push({field : 'syff',title : '使用方法',width : 200,hidden:util.getArrayIndex(option.hidden,'syff')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.syff==null?"":row.syff)+'>'+(row.syff==null?"":row.syff)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'syffString')>-1){
                clumns.push({field : 'syffString',title : '使用方法',width : 200,hidden:util.getArrayIndex(option.hidden,'syffString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.syffString==null?"":row.syffString)+'>'+(row.syffString==null?"":row.syffString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'dzkcl')>-1){
	            clumns.push({field : 'dzkcl',title : '最低库存量',width : 200,hidden:util.getArrayIndex(option.hidden,'dzkcl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dzkcl==null?"":row.dzkcl)+'>'+(row.dzkcl==null?"":row.dzkcl)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'ypkc')>-1){
				clumns.push({field : 'ypkc',title : '药品库存',width : 200,hidden:util.getArrayIndex(option.hidden,'ypkc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypkc==null?"":row.ypkc)+'>'+(row.ypkc==null?"":row.ypkc)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'smszp')>-1){
	            clumns.push({field : 'smszp',title : '说明书照片',width : 200,hidden:util.getArrayIndex(option.hidden,'smszp')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.smszp==null?"":row.smszp)+'>'+(row.smszp==null?"":row.smszp)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ypbzzp')>-1){
	            clumns.push({field : 'ypbzzp',title : '药品包装照片',width : 200,hidden:util.getArrayIndex(option.hidden,'ypbzzp')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypbzzp==null?"":row.ypbzzp)+'>'+(row.ypbzzp==null?"":row.ypbzzp)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sypl')>-1){
	            clumns.push({field : 'sypl',title : '使用频率',width : 200,hidden:util.getArrayIndex(option.hidden,'sypl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sypl==null?"":row.sypl)+'>'+(row.sypl==null?"":row.sypl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'createtime')>-1){
	            clumns.push({field : 'createtime',title : '创建时间',width : 200,hidden:util.getArrayIndex(option.hidden,'createtime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.createtime==null?"":row.createtime)+'>'+(row.createtime==null?"":row.createtime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'creator')>-1){
	            clumns.push({field : 'creator',title : '创建人',width : 200,hidden:util.getArrayIndex(option.hidden,'creator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.creator==null?"":row.creator)+'>'+(row.creator==null?"":row.creator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'updator')>-1){
	            clumns.push({field : 'updator',title : '更新人',width : 200,hidden:util.getArrayIndex(option.hidden,'updator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.updator==null?"":row.updator)+'>'+(row.updator==null?"":row.updator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'updatetime')>-1){
	            clumns.push({field : 'updatetime',title : '更新时间',width : 200,hidden:util.getArrayIndex(option.hidden,'updatetime')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.updatetime==null?"":row.updatetime)+'>'+(row.updatetime==null?"":row.updatetime)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'smsurl')>-1){
	            clumns.push({field : 'smsurl',title : '说明书照片URL',width : 200,hidden:util.getArrayIndex(option.hidden,'smsurl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.smsurl==null?"":row.smsurl)+'>'+(row.smsurl==null?"":row.smsurl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ypbzurl')>-1){
	            clumns.push({field : 'ypbzurl',title : '药品包装照片URL',width : 200,hidden:util.getArrayIndex(option.hidden,'ypbzurl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ypbzurl==null?"":row.ypbzurl)+'>'+(row.ypbzurl==null?"":row.ypbzurl)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});