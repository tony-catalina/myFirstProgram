/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jbjl 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jq')>-1){
	            clumns.push({field : 'jq',title : '拘区',width : 200,hidden:util.getArrayIndex(option.hidden,'jq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jq==null?"":row.jq)+'>'+(row.jq==null?"":row.jq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbgw')>-1){
	            clumns.push({field : 'jbgw',title : '交班岗位',width : 200,hidden:util.getArrayIndex(option.hidden,'jbgw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbgw==null?"":row.jbgw)+'>'+(row.jbgw==null?"":row.jbgw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbr')>-1){
	            clumns.push({field : 'jbr',title : '交班人员',width : 200,hidden:util.getArrayIndex(option.hidden,'jbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbr==null?"":row.jbr)+'>'+(row.jbr==null?"":row.jbr)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'ldpsxx.jjb_jbr')>-1){
	            clumns.push({field : 'ldpsxx.jjb_jbr',title : '交班人员',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpsxx.jjb_jbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.jjb_jbr==null?"":row.ldpsxx.jjb_jbr)+'>'+(row.ldpsxx.jjb_jbr==null?"":row.ldpsxx.jjb_jbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jiaobzz')>-1){
	            clumns.push({field : 'jiaobzz',title : '交班组长',width : 200,hidden:util.getArrayIndex(option.hidden,'jiaobzz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jiaobzz==null?"":row.jiaobzz)+'>'+(row.jiaobzz==null?"":row.jiaobzz)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'ldpsxx.jjb_jiaobzz')>-1){
	            clumns.push({field : 'ldpsxx.jjb_jiaobzz',title : '交班组长',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpsxx.jjb_jiaobzz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.jjb_jiaobzz==null?"":row.ldpsxx.jjb_jiaobzz)+'>'+(row.ldpsxx.jjb_jiaobzz==null?"":row.ldpsxx.jjb_jiaobzz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jiaobsj')>-1){
	            clumns.push({field : 'jiaobsj',title : '交班时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jiaobsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jiaobsj==null?"":row.jiaobsj)+'>'+(row.jiaobsj==null?"":row.jiaobsj)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'ldpsxx.jjb_jiaobsj')>-1){
	            clumns.push({field : 'ldpsxx.jjb_jiaobsj',title : '交班时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpsxx.jjb_jiaobsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.jjb_jiaobsj==null?"":row.ldpsxx.jjb_jiaobsj)+'>'+(row.ldpsxx.jjb_jiaobsj==null?"":row.ldpsxx.jjb_jiaobsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jiaobld')>-1){
	            clumns.push({field : 'jiaobld',title : '交班领导',width : 200,hidden:util.getArrayIndex(option.hidden,'jiaobld')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jiaobld==null?"":row.jiaobld)+'>'+(row.jiaobld==null?"":row.jiaobld)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jiaobldyj')>-1){
	            clumns.push({field : 'jiaobldyj',title : '交班领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'jiaobldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jiaobldyj==null?"":row.jiaobldyj)+'>'+(row.jiaobldyj==null?"":row.jiaobldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldqmsj')>-1){
	            clumns.push({field : 'ldqmsj',title : '领导签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ldqmsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldqmsj==null?"":row.ldqmsj)+'>'+(row.ldqmsj==null?"":row.ldqmsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jiaobzzyj')>-1){
	            clumns.push({field : 'jiaobzzyj',title : '交班组长意见',width : 200,hidden:util.getArrayIndex(option.hidden,'jiaobzzyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jiaobzzyj==null?"":row.jiaobzzyj)+'>'+(row.jiaobzzyj==null?"":row.jiaobzzyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jiaobzysx')>-1){
	            clumns.push({field : 'jiaobzysx',title : '交班注意事项',width : 200,hidden:util.getArrayIndex(option.hidden,'jiaobzysx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jiaobzysx==null?"":row.jiaobzysx)+'>'+(row.jiaobzysx==null?"":row.jiaobzysx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjbsj')>-1){
	            clumns.push({field : 'jjbsj',title : '交接班时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jjbsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjbsj==null?"":row.jjbsj)+'>'+(row.jjbsj==null?"":row.jjbsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsr')>-1){
	            clumns.push({field : 'jsr',title : '接收人员',width : 200,hidden:util.getArrayIndex(option.hidden,'jsr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsr==null?"":row.jsr)+'>'+(row.jsr==null?"":row.jsr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jiebzz')>-1){
	            clumns.push({field : 'jiebzz',title : '接班组长',width : 200,hidden:util.getArrayIndex(option.hidden,'jiebzz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jiebzz==null?"":row.jiebzz)+'>'+(row.jiebzz==null?"":row.jiebzz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jiebsj')>-1){
	            clumns.push({field : 'jiebsj',title : '接班时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jiebsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jiebsj==null?"":row.jiebsj)+'>'+(row.jiebsj==null?"":row.jiebsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jiebld')>-1){
	            clumns.push({field : 'jiebld',title : '接班领导',width : 200,hidden:util.getArrayIndex(option.hidden,'jiebld')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jiebld==null?"":row.jiebld)+'>'+(row.jiebld==null?"":row.jiebld)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jiebzzyj')>-1){
	            clumns.push({field : 'jiebzzyj',title : '接班组长意见',width : 200,hidden:util.getArrayIndex(option.hidden,'jiebzzyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jiebzzyj==null?"":row.jiebzzyj)+'>'+(row.jiebzzyj==null?"":row.jiebzzyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jiebldyj')>-1){
	            clumns.push({field : 'jiebldyj',title : '接班领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'jiebldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jiebldyj==null?"":row.jiebldyj)+'>'+(row.jiebldyj==null?"":row.jiebldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zsrynum')>-1){
	            clumns.push({field : 'zsrynum',title : '在所人员数量',width : 200,hidden:util.getArrayIndex(option.hidden,'zsrynum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zsrynum==null?"":row.zsrynum)+'>'+(row.zsrynum==null?"":row.zsrynum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nannum')>-1){
	            clumns.push({field : 'nannum',title : '男性数量',width : 200,hidden:util.getArrayIndex(option.hidden,'nannum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nannum==null?"":row.nannum)+'>'+(row.nannum==null?"":row.nannum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nvnum')>-1){
	            clumns.push({field : 'nvnum',title : '女性数量',width : 200,hidden:util.getArrayIndex(option.hidden,'nvnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nvnum==null?"":row.nvnum)+'>'+(row.nvnum==null?"":row.nvnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wgjnum')>-1){
	            clumns.push({field : 'wgjnum',title : '外国籍数量',width : 200,hidden:util.getArrayIndex(option.hidden,'wgjnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgjnum==null?"":row.wgjnum)+'>'+(row.wgjnum==null?"":row.wgjnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xzjlnum')>-1){
	            clumns.push({field : 'xzjlnum',title : '行政拘留数量',width : 200,hidden:util.getArrayIndex(option.hidden,'xzjlnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xzjlnum==null?"":row.xzjlnum)+'>'+(row.xzjlnum==null?"":row.xzjlnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfjlnum')>-1){
	            clumns.push({field : 'sfjlnum',title : '司法拘留数量',width : 200,hidden:util.getArrayIndex(option.hidden,'sfjlnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfjlnum==null?"":row.sfjlnum)+'>'+(row.sfjlnum==null?"":row.sfjlnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlscnum')>-1){
	            clumns.push({field : 'jlscnum',title : '拘留审查数量',width : 200,hidden:util.getArrayIndex(option.hidden,'jlscnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlscnum==null?"":row.jlscnum)+'>'+(row.jlscnum==null?"":row.jlscnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qtnum')>-1){
	            clumns.push({field : 'qtnum',title : '其他数量',width : 200,hidden:util.getArrayIndex(option.hidden,'qtnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qtnum==null?"":row.qtnum)+'>'+(row.qtnum==null?"":row.qtnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbrsnum')>-1){
	            clumns.push({field : 'dbrsnum',title : '当班入所总人数',width : 200,hidden:util.getArrayIndex(option.hidden,'dbrsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbrsnum==null?"":row.dbrsnum)+'>'+(row.dbrsnum==null?"":row.dbrsnum)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'ldpsxx.jjb_dbrsnum')>-1){
	            clumns.push({field : 'ldpsxx.jjb_dbrsnum',title : '当班入所总人数',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpsxx.jjb_dbrsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.jjb_dbrsnum==null?"":row.ldpsxx.jjb_dbrsnum)+'>'+(row.ldpsxx.jjb_dbrsnum==null?"":row.ldpsxx.jjb_dbrsnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'todayinnum')>-1){
	            clumns.push({field : 'todayinnum',title : '今天入所人数',width : 200,hidden:util.getArrayIndex(option.hidden,'todayinnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.todayinnum==null?"":row.todayinnum)+'>'+(row.todayinnum==null?"":row.todayinnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbcsnum')>-1){
	            clumns.push({field : 'dbcsnum',title : '当班出所总人数',width : 200,hidden:util.getArrayIndex(option.hidden,'dbcsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbcsnum==null?"":row.dbcsnum)+'>'+(row.dbcsnum==null?"":row.dbcsnum)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'ldpsxx.jjb_dbcsnum')>-1){
	            clumns.push({field : 'ldpsxx.jjb_dbcsnum',title : '当班出所总人数',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpsxx.jjb_dbcsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.jjb_dbcsnum==null?"":row.ldpsxx.jjb_dbcsnum)+'>'+(row.ldpsxx.jjb_dbcsnum==null?"":row.ldpsxx.jjb_dbcsnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'todayoutnum')>-1){
	            clumns.push({field : 'todayoutnum',title : '今天出所人数',width : 200,hidden:util.getArrayIndex(option.hidden,'todayoutnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.todayoutnum==null?"":row.todayoutnum)+'>'+(row.todayoutnum==null?"":row.todayoutnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lslsnum')>-1){
	            clumns.push({field : 'lslsnum',title : '临时离所数量',width : 200,hidden:util.getArrayIndex(option.hidden,'lslsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lslsnum==null?"":row.lslsnum)+'>'+(row.lslsnum==null?"":row.lslsnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'byjlnum')>-1){
	            clumns.push({field : 'byjlnum',title : '不宜拘留数量',width : 200,hidden:util.getArrayIndex(option.hidden,'byjlnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.byjlnum==null?"":row.byjlnum)+'>'+(row.byjlnum==null?"":row.byjlnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qmnum')>-1){
	            clumns.push({field : 'qmnum',title : '期满数量',width : 200,hidden:util.getArrayIndex(option.hidden,'qmnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qmnum==null?"":row.qmnum)+'>'+(row.qmnum==null?"":row.qmnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qjnum')>-1){
	            clumns.push({field : 'qjnum',title : '请假数量',width : 200,hidden:util.getArrayIndex(option.hidden,'qjnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qjnum==null?"":row.qjnum)+'>'+(row.qjnum==null?"":row.qjnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bgcsnum')>-1){
	            clumns.push({field : 'bgcsnum',title : '变更措施数量',width : 200,hidden:util.getArrayIndex(option.hidden,'bgcsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bgcsnum==null?"":row.bgcsnum)+'>'+(row.bgcsnum==null?"":row.bgcsnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'whsnum')>-1){
	            clumns.push({field : 'whsnum',title : '未回所数量',width : 200,hidden:util.getArrayIndex(option.hidden,'whsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.whsnum==null?"":row.whsnum)+'>'+(row.whsnum==null?"":row.whsnum)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'ldpsxx.jjb_whsnum')>-1){
	            clumns.push({field : 'ldpsxx.jjb_whsnum',title : '未回所数量',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpsxx.jjb_whsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.jjb_whsnum==null?"":row.ldpsxx.jjb_whsnum)+'>'+(row.ldpsxx.jjb_whsnum==null?"":row.ldpsxx.jjb_whsnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yhsnum')>-1){
	            clumns.push({field : 'yhsnum',title : '已回所数量',width : 200,hidden:util.getArrayIndex(option.hidden,'yhsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yhsnum==null?"":row.yhsnum)+'>'+(row.yhsnum==null?"":row.yhsnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlqnnum')>-1){
	            clumns.push({field : 'jlqnnum',title : '拘留区内数量',width : 200,hidden:util.getArrayIndex(option.hidden,'jlqnnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlqnnum==null?"":row.jlqnnum)+'>'+(row.jlqnnum==null?"":row.jlqnnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlqwnum')>-1){
	            clumns.push({field : 'jlqwnum',title : '拘留区外数量',width : 200,hidden:util.getArrayIndex(option.hidden,'jlqwnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlqwnum==null?"":row.jlqwnum)+'>'+(row.jlqwnum==null?"":row.jlqwnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdbhnum')>-1){
	            clumns.push({field : 'zdbhnum',title : '重点病号数量',width : 200,hidden:util.getArrayIndex(option.hidden,'zdbhnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdbhnum==null?"":row.zdbhnum)+'>'+(row.zdbhnum==null?"":row.zdbhnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swjynum')>-1){
	            clumns.push({field : 'swjynum',title : '所外就医数量',width : 200,hidden:util.getArrayIndex(option.hidden,'swjynum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swjynum==null?"":row.swjynum)+'>'+(row.swjynum==null?"":row.swjynum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'snjynum')>-1){
	            clumns.push({field : 'snjynum',title : '所内就医数量',width : 200,hidden:util.getArrayIndex(option.hidden,'snjynum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.snjynum==null?"":row.snjynum)+'>'+(row.snjynum==null?"":row.snjynum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ygnum')>-1){
	            clumns.push({field : 'ygnum',title : '严管人数',width : 200,hidden:util.getArrayIndex(option.hidden,'ygnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ygnum==null?"":row.ygnum)+'>'+(row.ygnum==null?"":row.ygnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'aqxxynum')>-1){
	            clumns.push({field : 'aqxxynum',title : '安全信息员数量',width : 200,hidden:util.getArrayIndex(option.hidden,'aqxxynum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.aqxxynum==null?"":row.aqxxynum)+'>'+(row.aqxxynum==null?"":row.aqxxynum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wgnum')>-1){
	            clumns.push({field : 'wgnum',title : '违规数量',width : 200,hidden:util.getArrayIndex(option.hidden,'wgnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wgnum==null?"":row.wgnum)+'>'+(row.wgnum==null?"":row.wgnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'syjjnum')>-1){
	            clumns.push({field : 'syjjnum',title : '使用戒具人数',width : 200,hidden:util.getArrayIndex(option.hidden,'syjjnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.syjjnum==null?"":row.syjjnum)+'>'+(row.syjjnum==null?"":row.syjjnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tsnum')>-1){
	            clumns.push({field : 'tsnum',title : '办理提询人数',width : 200,hidden:util.getArrayIndex(option.hidden,'tsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tsnum==null?"":row.tsnum)+'>'+(row.tsnum==null?"":row.tsnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jshjnum')>-1){
	            clumns.push({field : 'jshjnum',title : '家属会见数量',width : 200,hidden:util.getArrayIndex(option.hidden,'jshjnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jshjnum==null?"":row.jshjnum)+'>'+(row.jshjnum==null?"":row.jshjnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lshjnum')>-1){
	            clumns.push({field : 'lshjnum',title : '律师会见数量',width : 200,hidden:util.getArrayIndex(option.hidden,'lshjnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lshjnum==null?"":row.lshjnum)+'>'+(row.lshjnum==null?"":row.lshjnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jtdqnum')>-1){
	            clumns.push({field : 'jtdqnum',title : '今天到期数量',width : 200,hidden:util.getArrayIndex(option.hidden,'jtdqnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jtdqnum==null?"":row.jtdqnum)+'>'+(row.jtdqnum==null?"":row.jtdqnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mtdqnum')>-1){
	            clumns.push({field : 'mtdqnum',title : '明天到期数量',width : 200,hidden:util.getArrayIndex(option.hidden,'mtdqnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mtdqnum==null?"":row.mtdqnum)+'>'+(row.mtdqnum==null?"":row.mtdqnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'htdqnum')>-1){
	            clumns.push({field : 'htdqnum',title : '后天到期数量',width : 200,hidden:util.getArrayIndex(option.hidden,'htdqnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.htdqnum==null?"":row.htdqnum)+'>'+(row.htdqnum==null?"":row.htdqnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cqnum')>-1){
	            clumns.push({field : 'cqnum',title : '超期数量',width : 200,hidden:util.getArrayIndex(option.hidden,'cqnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cqnum==null?"":row.cqnum)+'>'+(row.cqnum==null?"":row.cqnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lastnum')>-1){
	            clumns.push({field : 'lastnum',title : '上次交班人数',width : 200,hidden:util.getArrayIndex(option.hidden,'lastnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lastnum==null?"":row.lastnum)+'>'+(row.lastnum==null?"":row.lastnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mustnum')>-1){
	            clumns.push({field : 'mustnum',title : '当前应有人数',width : 200,hidden:util.getArrayIndex(option.hidden,'mustnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mustnum==null?"":row.mustnum)+'>'+(row.mustnum==null?"":row.mustnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'currnum')>-1){
	            clumns.push({field : 'currnum',title : '当前实际人数',width : 200,hidden:util.getArrayIndex(option.hidden,'currnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.currnum==null?"":row.currnum)+'>'+(row.currnum==null?"":row.currnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jstzinnum')>-1){
	            clumns.push({field : 'jstzinnum',title : '拘室调整进入人数',width : 200,hidden:util.getArrayIndex(option.hidden,'jstzinnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jstzinnum==null?"":row.jstzinnum)+'>'+(row.jstzinnum==null?"":row.jstzinnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jstzoutnum')>-1){
	            clumns.push({field : 'jstzoutnum',title : '拘室调整出去人数',width : 200,hidden:util.getArrayIndex(option.hidden,'jstzoutnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jstzoutnum==null?"":row.jstzoutnum)+'>'+(row.jstzoutnum==null?"":row.jstzoutnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'todaypjnum')>-1){
	            clumns.push({field : 'todaypjnum',title : '今天判决人数',width : 200,hidden:util.getArrayIndex(option.hidden,'todaypjnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.todaypjnum==null?"":row.todaypjnum)+'>'+(row.todaypjnum==null?"":row.todaypjnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdrynum')>-1){
	            clumns.push({field : 'zdrynum',title : '重点人员数量',width : 200,hidden:util.getArrayIndex(option.hidden,'zdrynum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdrynum==null?"":row.zdrynum)+'>'+(row.zdrynum==null?"":row.zdrynum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbnum')>-1){
	            clumns.push({field : 'jbnum',title : '禁闭人数',width : 200,hidden:util.getArrayIndex(option.hidden,'jbnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbnum==null?"":row.jbnum)+'>'+(row.jbnum==null?"":row.jbnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sknum')>-1){
	            clumns.push({field : 'sknum',title : '剩余手铐数量',width : 200,hidden:util.getArrayIndex(option.hidden,'sknum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sknum==null?"":row.sknum)+'>'+(row.sknum==null?"":row.sknum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlnum')>-1){
	            clumns.push({field : 'jlnum',title : '剩余脚镣数量',width : 200,hidden:util.getArrayIndex(option.hidden,'jlnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlnum==null?"":row.jlnum)+'>'+(row.jlnum==null?"":row.jlnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsnum')>-1){
	            clumns.push({field : 'jsnum',title : '剩余警绳数量',width : 200,hidden:util.getArrayIndex(option.hidden,'jsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsnum==null?"":row.jsnum)+'>'+(row.jsnum==null?"":row.jsnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ysnum')>-1){
	            clumns.push({field : 'ysnum',title : '交班时钥匙数量',width : 200,hidden:util.getArrayIndex(option.hidden,'ysnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysnum==null?"":row.ysnum)+'>'+(row.ysnum==null?"":row.ysnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ssdnum')>-1){
	            clumns.push({field : 'ssdnum',title : '交班时搜索灯数量',width : 200,hidden:util.getArrayIndex(option.hidden,'ssdnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ssdnum==null?"":row.ssdnum)+'>'+(row.ssdnum==null?"":row.ssdnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dtnum')>-1){
	            clumns.push({field : 'dtnum',title : '交班时电台数量',width : 200,hidden:util.getArrayIndex(option.hidden,'dtnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dtnum==null?"":row.dtnum)+'>'+(row.dtnum==null?"":row.dtnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjnum')>-1){
	            clumns.push({field : 'jjnum',title : '警戒数量',width : 200,hidden:util.getArrayIndex(option.hidden,'jjnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjnum==null?"":row.jjnum)+'>'+(row.jjnum==null?"":row.jjnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzly')>-1){
	            clumns.push({field : 'zdzly',title : '中队长留言',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzly==null?"":row.zdzly)+'>'+(row.zdzly==null?"":row.zdzly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbly')>-1){
	            clumns.push({field : 'jbly',title : '交班留言(工作记录)',width : 200,hidden:util.getArrayIndex(option.hidden,'jbly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbly==null?"":row.jbly)+'>'+(row.jbly==null?"":row.jbly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'flag')>-1){
	            clumns.push({field : 'flag',title : '标志',width : 200,hidden:util.getArrayIndex(option.hidden,'flag')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.flag==null?"":row.flag)+'>'+(row.flag==null?"":row.flag)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'operator')>-1){
	            clumns.push({field : 'operator',title : '操作人',width : 200,hidden:util.getArrayIndex(option.hidden,'operator')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.operator==null?"":row.operator)+'>'+(row.operator==null?"":row.operator)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjly')>-1){
	            clumns.push({field : 'gjly',title : '管教留言',width : 200,hidden:util.getArrayIndex(option.hidden,'gjly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjly==null?"":row.gjly)+'>'+(row.gjly==null?"":row.gjly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ysly')>-1){
	            clumns.push({field : 'ysly',title : '医生留言',width : 200,hidden:util.getArrayIndex(option.hidden,'ysly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysly==null?"":row.ysly)+'>'+(row.ysly==null?"":row.ysly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywyc')>-1){
	            clumns.push({field : 'ywyc',title : '有无异常',width : 200,hidden:util.getArrayIndex(option.hidden,'ywyc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywyc==null?"":row.ywyc)+'>'+(row.ywyc==null?"":row.ywyc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbqk')>-1){
	            clumns.push({field : 'jbqk',title : '交班情况',width : 200,hidden:util.getArrayIndex(option.hidden,'jbqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbqk==null?"":row.jbqk)+'>'+(row.jbqk==null?"":row.jbqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sid')>-1){
	            clumns.push({field : 'sid',title : '管理ID',width : 200,hidden:util.getArrayIndex(option.hidden,'sid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sid==null?"":row.sid)+'>'+(row.sid==null?"":row.sid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sldly')>-1){
	            clumns.push({field : 'sldly',title : '所领导留言',width : 200,hidden:util.getArrayIndex(option.hidden,'sldly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldly==null?"":row.sldly)+'>'+(row.sldly==null?"":row.sldly)+'</span>'}});
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