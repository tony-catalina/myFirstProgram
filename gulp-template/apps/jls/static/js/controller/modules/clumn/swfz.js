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
			if(util.getArrayIndex(option.clumns,'jbxx_xm')>-1){
	        	clumns.push({field : 'jbxx_xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_xm==null?"":row.jbxx_xm)+'>'+(row.jbxx_xm==null?"":row.jbxx_xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_bm')>-1){
	        	clumns.push({field : 'jbxx_bm',title : '别名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bm==null?"":row.jbxx_bm)+'>'+(row.jbxx_bm==null?"":row.jbxx_bm)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'xm')>-1){
			    clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jsh')>-1){
			    clumns.push({field : 'jsh',title : '拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'jbxx_xb')>-1){
	        	clumns.push({field : 'jbxx_xb',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_xb==null?"":row.jbxx_xb)+'>'+(row.jbxx_xb==null?"":row.jbxx_xb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_jsh')>-1){
	        	clumns.push({field : 'jbxx_jsh',title : '拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_jsh==null?"":row.jbxx_jsh)+'>'+(row.jbxx_jsh==null?"":row.jbxx_jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_rsrq')>-1){
	        	clumns.push({field : 'jbxx_rsrq',title : '入所日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_rsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_rsrq==null?"":row.jbxx_rsrq)+'>'+(row.jbxx_rsrq==null?"":row.jbxx_rsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_gyqx')>-1){
	        	clumns.push({field : 'jbxx_gyqx',title : '关押期限',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_gyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_gyqx==null?"":row.jbxx_gyqx)+'>'+(row.jbxx_gyqx==null?"":row.jbxx_gyqx)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jbxx_gyts')>-1){
	        	clumns.push({field : 'jbxx_gyts',title : '关押天数',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_gyts')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_gyts==null?"":row.jbxx_gyts)+'>'+(row.jbxx_gyts==null?"":row.jbxx_gyts)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_bahj')>-1){
	        	clumns.push({field : 'jbxx_bahj',title : '办案环节',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_bahj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_bahj==null?"":row.jbxx_bahj)+'>'+(row.jbxx_bahj==null?"":row.jbxx_bahj)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jbxx_badw')>-1){
	        	clumns.push({field : 'jbxx_badw',title : '办案单位',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_gyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_badw==null?"":row.jbxx_badw)+'>'+(row.jbxx_badw==null?"":row.jbxx_badw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxx_ay')>-1){
	        	clumns.push({field : 'jbxx_ay',title : '案别',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_ay')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_ay==null?"":row.jbxx_ay)+'>'+(row.jbxx_ay==null?"":row.jbxx_ay)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xslx')>-1){
	            clumns.push({field : 'xslx',title : '线索类型',width : 200,hidden:util.getArrayIndex(option.hidden,'xslx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xslx==null?"":row.xslx)+'>'+(row.xslx==null?"":row.xslx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfzdaj')>-1){
	            clumns.push({field : 'sfzdaj',title : '是否重大案件',width : 200,hidden:util.getArrayIndex(option.hidden,'sfzdaj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfzdaj==null?"":row.sfzdaj)+'>'+(row.sfzdaj==null?"":row.sfzdaj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sar')>-1){
	            clumns.push({field : 'sar',title : '涉案人',width : 200,hidden:util.getArrayIndex(option.hidden,'sar')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sar==null?"":row.sar)+'>'+(row.sar==null?"":row.sar)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sars')>-1){
	            clumns.push({field : 'sars',title : '涉案人数',width : 200,hidden:util.getArrayIndex(option.hidden,'sars')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sars==null?"":row.sars)+'>'+(row.sars==null?"":row.sars)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'afsjString')>-1){
	            clumns.push({field : 'afsjString',title : '案发时间',width : 200,hidden:util.getArrayIndex(option.hidden,'afsjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.afsjString==null?"":row.afsjString)+'>'+(row.afsjString==null?"":row.afsjString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'afdd')>-1){
	            clumns.push({field : 'afdd',title : '案发地点',width : 200,hidden:util.getArrayIndex(option.hidden,'afdd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.afdd==null?"":row.afdd)+'>'+(row.afdd==null?"":row.afdd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'saje')>-1){
	            clumns.push({field : 'saje',title : '涉案金额',width : 200,hidden:util.getArrayIndex(option.hidden,'saje')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.saje==null?"":row.saje)+'>'+(row.saje==null?"":row.saje)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjrqString')>-1){
	            clumns.push({field : 'jjrqString',title : '坦白/检举日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jjrqString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjrqString==null?"":row.jjrqString)+'>'+(row.jjrqString==null?"":row.jjrqString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjaxz')>-1){
	            clumns.push({field : 'jjaxz',title : '检举案性质',width : 200,hidden:util.getArrayIndex(option.hidden,'jjaxz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjaxz==null?"":row.jjaxz)+'>'+(row.jjaxz==null?"":row.jjaxz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'saqy')>-1){
	            clumns.push({field : 'saqy',title : '涉案区域',width : 200,hidden:util.getArrayIndex(option.hidden,'saqy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.saqy==null?"":row.saqy)+'>'+(row.saqy==null?"":row.saqy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djr')>-1){
	            clumns.push({field : 'djr',title : '登记人',width : 200,hidden:util.getArrayIndex(option.hidden,'djr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djr==null?"":row.djr)+'>'+(row.djr==null?"":row.djr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djrq')>-1){
	            clumns.push({field : 'djrq',title : '登记日期',width : 200,hidden:util.getArrayIndex(option.hidden,'djrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djrq==null?"":row.djrq)+'>'+(row.djrq==null?"":row.djrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jyjg')>-1){
	            clumns.push({field : 'jyjg',title : '简要经过',width : 200,hidden:util.getArrayIndex(option.hidden,'jyjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jyjg==null?"":row.jyjg)+'>'+(row.jyjg==null?"":row.jyjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sldyj')>-1){
	            clumns.push({field : 'sldyj',title : '所领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'sldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldyj==null?"":row.sldyj)+'>'+(row.sldyj==null?"":row.sldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sldyjnr')>-1){
	            clumns.push({field : 'sldyjnr',title : '所领导意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'sldyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldyjnr==null?"":row.sldyjnr)+'>'+(row.sldyjnr==null?"":row.sldyjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sldqm')>-1){
	            clumns.push({field : 'sldqm',title : '所领导签名',width : 200,hidden:util.getArrayIndex(option.hidden,'sldqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldqm==null?"":row.sldqm)+'>'+(row.sldqm==null?"":row.sldqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sldqmsj')>-1){
	            clumns.push({field : 'sldqmsj',title : '所领导签名日期',width : 200,hidden:util.getArrayIndex(option.hidden,'sldqmsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldqmsj==null?"":row.sldqmsj)+'>'+(row.sldqmsj==null?"":row.sldqmsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cdr')>-1){
	            clumns.push({field : 'cdr',title : '传递人',width : 200,hidden:util.getArrayIndex(option.hidden,'cdr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cdr==null?"":row.cdr)+'>'+(row.cdr==null?"":row.cdr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cdrdh')>-1){
	            clumns.push({field : 'cdrdh',title : '传递人电话',width : 200,hidden:util.getArrayIndex(option.hidden,'cdrdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cdrdh==null?"":row.cdrdh)+'>'+(row.cdrdh==null?"":row.cdrdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cdsj')>-1){
	            clumns.push({field : 'cdsj',title : '传递时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cdsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cdsj==null?"":row.cdsj)+'>'+(row.cdsj==null?"":row.cdsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cddw')>-1){
	            clumns.push({field : 'cddw',title : '传递单位',width : 200,hidden:util.getArrayIndex(option.hidden,'cddw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cddw==null?"":row.cddw)+'>'+(row.cddw==null?"":row.cddw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsr')>-1){
	            clumns.push({field : 'jsr',title : '接收人',width : 200,hidden:util.getArrayIndex(option.hidden,'jsr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsr==null?"":row.jsr)+'>'+(row.jsr==null?"":row.jsr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsrdh')>-1){
	            clumns.push({field : 'jsrdh',title : '接收人电话',width : 200,hidden:util.getArrayIndex(option.hidden,'jsrdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsrdh==null?"":row.jsrdh)+'>'+(row.jsrdh==null?"":row.jsrdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czqk')>-1){
	            clumns.push({field : 'czqk',title : '查证情况',width : 200,hidden:util.getArrayIndex(option.hidden,'czqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czqk==null?"":row.czqk)+'>'+(row.czqk==null?"":row.czqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fkrq')>-1){
	            clumns.push({field : 'fkrq',title : '反馈日期',width : 200,hidden:util.getArrayIndex(option.hidden,'fkrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fkrq==null?"":row.fkrq)+'>'+(row.fkrq==null?"":row.fkrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'phxsajs')>-1){
	            clumns.push({field : 'phxsajs',title : '破获刑事案件数',width : 200,hidden:util.getArrayIndex(option.hidden,'phxsajs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.phxsajs==null?"":row.phxsajs)+'>'+(row.phxsajs==null?"":row.phxsajs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'phzaajs')>-1){
	            clumns.push({field : 'phzaajs',title : '破获治安案件数',width : 200,hidden:util.getArrayIndex(option.hidden,'phzaajs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.phzaajs==null?"":row.phzaajs)+'>'+(row.phzaajs==null?"":row.phzaajs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xsjlrs')>-1){
	            clumns.push({field : 'xsjlrs',title : '刑事拘留人数',width : 200,hidden:util.getArrayIndex(option.hidden,'xsjlrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xsjlrs==null?"":row.xsjlrs)+'>'+(row.xsjlrs==null?"":row.xsjlrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbrs')>-1){
	            clumns.push({field : 'dbrs',title : '逮捕人数',width : 200,hidden:util.getArrayIndex(option.hidden,'dbrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbrs==null?"":row.dbrs)+'>'+(row.dbrs==null?"":row.dbrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ljrs')>-1){
	            clumns.push({field : 'ljrs',title : '劳教人数',width : 200,hidden:util.getArrayIndex(option.hidden,'ljrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ljrs==null?"":row.ljrs)+'>'+(row.ljrs==null?"":row.ljrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ysqsrs')>-1){
	            clumns.push({field : 'ysqsrs',title : '移送起诉人数',width : 200,hidden:util.getArrayIndex(option.hidden,'ysqsrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysqsrs==null?"":row.ysqsrs)+'>'+(row.ysqsrs==null?"":row.ysqsrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qtrs')>-1){
	            clumns.push({field : 'qtrs',title : '其它人数',width : 200,hidden:util.getArrayIndex(option.hidden,'qtrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qtrs==null?"":row.qtrs)+'>'+(row.qtrs==null?"":row.qtrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bdbtjrs')>-1){
	            clumns.push({field : 'bdbtjrs',title : '部督捕、通缉人数',width : 200,hidden:util.getArrayIndex(option.hidden,'bdbtjrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bdbtjrs==null?"":row.bdbtjrs)+'>'+(row.bdbtjrs==null?"":row.bdbtjrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sdbtjrs')>-1){
	            clumns.push({field : 'sdbtjrs',title : '省督捕、通缉人数',width : 200,hidden:util.getArrayIndex(option.hidden,'sdbtjrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sdbtjrs==null?"":row.sdbtjrs)+'>'+(row.sdbtjrs==null?"":row.sdbtjrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wsztrs')>-1){
	            clumns.push({field : 'wsztrs',title : '网上追逃人数',width : 200,hidden:util.getArrayIndex(option.hidden,'wsztrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wsztrs==null?"":row.wsztrs)+'>'+(row.wsztrs==null?"":row.wsztrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zzje')>-1){
	            clumns.push({field : 'zzje',title : '追赃金额（万元）',width : 200,hidden:util.getArrayIndex(option.hidden,'zzje')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzje==null?"":row.zzje)+'>'+(row.zzje==null?"":row.zzje)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zwdw')>-1){
	            clumns.push({field : 'zwdw',title : '转往单位',width : 200,hidden:util.getArrayIndex(option.hidden,'zwdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zwdw==null?"":row.zwdw)+'>'+(row.zwdw==null?"":row.zwdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'taskid')>-1){
	            clumns.push({field : 'taskid',title : '业务进程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'taskid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.taskid==null?"":row.taskid)+'>'+(row.taskid==null?"":row.taskid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pastable')>-1){
	            clumns.push({field : 'pastable',title : '有效状态',width : 200,hidden:util.getArrayIndex(option.hidden,'pastable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pastable==null?"":row.pastable)+'>'+(row.pastable==null?"":row.pastable)+'</span>'}});
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