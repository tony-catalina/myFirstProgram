/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jygzzlpg 数据列表
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
	        if(util.getArrayIndex(option.clumns,'cjhywzs')>-1){
	            clumns.push({field : 'cjhywzs',title : '岀监后有无住所',width : 200,hidden:util.getArrayIndex(option.hidden,'cjhywzs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cjhywzs==null?"":row.cjhywzs)+'>'+(row.cjhywzs==null?"":row.cjhywzs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cjhknjzd')>-1){
	            clumns.push({field : 'cjhknjzd',title : '岀监后可能居住地',width : 200,hidden:util.getArrayIndex(option.hidden,'cjhknjzd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cjhknjzd==null?"":row.cjhknjzd)+'>'+(row.cjhknjzd==null?"":row.cjhknjzd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rzrcqk')>-1){
	            clumns.push({field : 'rzrcqk',title : '认罪认错情况',width : 200,hidden:util.getArrayIndex(option.hidden,'rzrcqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rzrcqk==null?"":row.rzrcqk)+'>'+(row.rzrcqk==null?"":row.rzrcqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsnbx')>-1){
	            clumns.push({field : 'jsnbx',title : '监所内表现',width : 200,hidden:util.getArrayIndex(option.hidden,'jsnbx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsnbx==null?"":row.jsnbx)+'>'+(row.jsnbx==null?"":row.jsnbx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wffzs')>-1){
	            clumns.push({field : 'wffzs',title : '违法犯罪史',width : 200,hidden:util.getArrayIndex(option.hidden,'wffzs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wffzs==null?"":row.wffzs)+'>'+(row.wffzs==null?"":row.wffzs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jstc')>-1){
	            clumns.push({field : 'jstc',title : '技术特长',width : 200,hidden:util.getArrayIndex(option.hidden,'jstc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jstc==null?"":row.jstc)+'>'+(row.jstc==null?"":row.jstc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zyyx')>-1){
	            clumns.push({field : 'zyyx',title : '择业意向',width : 200,hidden:util.getArrayIndex(option.hidden,'zyyx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zyyx==null?"":row.zyyx)+'>'+(row.zyyx==null?"":row.zyyx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czwt')>-1){
	            clumns.push({field : 'czwt',title : '存在问题',width : 200,hidden:util.getArrayIndex(option.hidden,'czwt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czwt==null?"":row.czwt)+'>'+(row.czwt==null?"":row.czwt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tskn')>-1){
	            clumns.push({field : 'tskn',title : '特殊困难',width : 200,hidden:util.getArrayIndex(option.hidden,'tskn')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tskn==null?"":row.tskn)+'>'+(row.tskn==null?"":row.tskn)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mxfzqx')>-1){
	            clumns.push({field : 'mxfzqx',title : '有无犯罪倾向',width : 200,hidden:util.getArrayIndex(option.hidden,'mxfzqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mxfzqx==null?"":row.mxfzqx)+'>'+(row.mxfzqx==null?"":row.mxfzqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sjry')>-1){
	            clumns.push({field : 'sjry',title : '“三假”人员',width : 200,hidden:util.getArrayIndex(option.hidden,'sjry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjry==null?"":row.sjry)+'>'+(row.sjry==null?"":row.sjry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swry')>-1){
	            clumns.push({field : 'swry',title : '“三无”人员',width : 200,hidden:util.getArrayIndex(option.hidden,'swry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swry==null?"":row.swry)+'>'+(row.swry==null?"":row.swry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ybbjdx')>-1){
	            clumns.push({field : 'ybbjdx',title : '一般帮教对象',width : 200,hidden:util.getArrayIndex(option.hidden,'ybbjdx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ybbjdx==null?"":row.ybbjdx)+'>'+(row.ybbjdx==null?"":row.ybbjdx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfylrhlw')>-1){
	            clumns.push({field : 'sfylrhlw',title : '是否已录入互联网',width : 200,hidden:util.getArrayIndex(option.hidden,'sfylrhlw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfylrhlw==null?"":row.sfylrhlw)+'>'+(row.sfylrhlw==null?"":row.sfylrhlw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'azbjgzjy')>-1){
	            clumns.push({field : 'azbjgzjy',title : '安置帮教工作建议',width : 200,hidden:util.getArrayIndex(option.hidden,'azbjgzjy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.azbjgzjy==null?"":row.azbjgzjy)+'>'+(row.azbjgzjy==null?"":row.azbjgzjy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djrq')>-1){
	            clumns.push({field : 'djrq',title : '登记日期',width : 200,hidden:util.getArrayIndex(option.hidden,'djrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djrq==null?"":row.djrq)+'>'+(row.djrq==null?"":row.djrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djr')>-1){
	            clumns.push({field : 'djr',title : '登记人',width : 200,hidden:util.getArrayIndex(option.hidden,'djr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djr==null?"":row.djr)+'>'+(row.djr==null?"":row.djr)+'</span>'}});
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
	        
	        return clumns;
	    };
	    return main;
	});