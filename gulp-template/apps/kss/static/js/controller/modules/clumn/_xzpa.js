/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Xzpa 数据列表
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
	        	clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'jsh')>-1){
				clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'lx')>-1){
	            clumns.push({field : 'lx',title : '类型',width : 200,hidden:util.getArrayIndex(option.hidden,'lx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lx==null?"":row.lx)+'>'+(row.lx==null?"":row.lx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfzdaj')>-1){
	            clumns.push({field : 'sfzdaj',title : '是否重大案件',width : 200,hidden:util.getArrayIndex(option.hidden,'sfzdaj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfzdaj==null?"":row.sfzdaj)+'>'+(row.sfzdaj==null?"":row.sfzdaj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sar')>-1){
				clumns.push({field : 'sar',title : '涉案人',width : 200,hidden:util.getArrayIndex(option.hidden,'sar')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sar==null?"":row.sar)+'>'+(row.sar==null?"":row.sar)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'xzpa_sar')>-1){
				clumns.push({field : 'xzpa_sar',title : '涉案人',width : 200,hidden:util.getArrayIndex(option.hidden,'xzpa_sar')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.xzpa_sar==null?"":row.ldpsxx.xzpa_sar)+'>'+(row.ldpsxx.xzpa_sar==null?"":row.ldpsxx.xzpa_sar)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'sars')>-1){
	            clumns.push({field : 'sars',title : '涉案人数',width : 200,hidden:util.getArrayIndex(option.hidden,'sars')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sars==null?"":row.sars)+'>'+(row.sars==null?"":row.sars)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'xzpa_sars')>-1){
				clumns.push({field : 'xzpa_sars',title : '涉案人数',width : 200,hidden:util.getArrayIndex(option.hidden,'xzpa_sars')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.xzpa_sars==null?"":row.ldpsxx.xzpa_sars)+'>'+(row.ldpsxx.xzpa_sars==null?"":row.ldpsxx.xzpa_sars)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'afsj')>-1){
	            clumns.push({field : 'afsj',title : '案发时间',width : 200,hidden:util.getArrayIndex(option.hidden,'afsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.afsj==null?"":row.afsj)+'>'+(row.afsj==null?"":row.afsj)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'afsjString')>-1){
				clumns.push({field : 'afsjString',title : '案发时间',width : 200,hidden:util.getArrayIndex(option.hidden,'afsjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.afsjString==null?"":row.afsjString)+'>'+(row.afsjString==null?"":row.afsjString)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'xzpa_afsj')>-1){
				clumns.push({field : 'xzpa_afsj',title : '案发时间',width : 200,hidden:util.getArrayIndex(option.hidden,'xzpa_afsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.xzpa_afsj==null?"":row.ldpsxx.xzpa_afsj)+'>'+(row.ldpsxx.xzpa_afsj==null?"":row.ldpsxx.xzpa_afsj)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'tbjurqString')>-1){
				clumns.push({field : 'tbjurqString',title : '检举日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbjurqString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbjurqString==null?"":row.tbjurqString)+'>'+(row.tbjurqString==null?"":row.tbjurqString)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'process_jjrq')>-1){
				clumns.push({field : 'process_jjrq',title : '检举日期',width : 200,hidden:util.getArrayIndex(option.hidden,'process_jjrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.xzpa_tbjurq==null?"":row.ldpsxx.xzpa_tbjurq)+'>'+(row.ldpsxx.xzpa_tbjurq==null?"":row.ldpsxx.xzpa_tbjurq)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'afdd')>-1){
	            clumns.push({field : 'afdd',title : '案发地点',width : 200,hidden:util.getArrayIndex(option.hidden,'afdd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.afdd==null?"":row.afdd)+'>'+(row.afdd==null?"":row.afdd)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'xzpa_afdd')>-1){
				clumns.push({field : 'xzpa_afdd',title : '案发地点',width : 200,hidden:util.getArrayIndex(option.hidden,'xzpa_afdd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.xzpa_afdd==null?"":row.ldpsxx.xzpa_afdd)+'>'+(row.ldpsxx.xzpa_afdd==null?"":row.ldpsxx.xzpa_afdd)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'saje')>-1){
	            clumns.push({field : 'saje',title : '涉案金额',width : 200,hidden:util.getArrayIndex(option.hidden,'saje')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.saje==null?"":row.saje)+'>'+(row.saje==null?"":row.saje)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xzpa_tbjurq')>-1){
	            clumns.push({field : 'xzpa_tbjurq',title : '坦白检举日期',width : 200,hidden:util.getArrayIndex(option.hidden,'xzpa_tbjurq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.xzpa_tbjurq==null?"":row.ldpsxx.xzpa_tbjurq)+'>'+(row.ldpsxx.xzpa_tbjurq==null?"":row.ldpsxx.xzpa_tbjurq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjqxz')>-1){
	            clumns.push({field : 'jjqxz',title : '检举案性质',width : 200,hidden:util.getArrayIndex(option.hidden,'jjqxz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjqxz==null?"":row.jjqxz)+'>'+(row.jjqxz==null?"":row.jjqxz)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'sldqmrq')>-1){
	            clumns.push({field : 'sldqmrq',title : '所领导签名日期',width : 200,hidden:util.getArrayIndex(option.hidden,'sldqmrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldqmrq==null?"":row.sldqmrq)+'>'+(row.sldqmrq==null?"":row.sldqmrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cdr')>-1){
	            clumns.push({field : 'cdr',title : '传递人',width : 200,hidden:util.getArrayIndex(option.hidden,'cdr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cdr==null?"":row.cdr)+'>'+(row.cdr==null?"":row.cdr)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'process_cdr')>-1){
				clumns.push({field : 'process_cdr',title : '传递人',width : 200,hidden:util.getArrayIndex(option.hidden,'process_cdr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.xzpa_cdr==null?"":row.ldpsxx.xzpa_cdr)+'>'+(row.ldpsxx.xzpa_cdr==null?"":row.ldpsxx.xzpa_cdr)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'cdrdh')>-1){
	            clumns.push({field : 'cdrdh',title : '传递人电话',width : 200,hidden:util.getArrayIndex(option.hidden,'cdrdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cdrdh==null?"":row.cdrdh)+'>'+(row.cdrdh==null?"":row.cdrdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cdrq')>-1){
	            clumns.push({field : 'cdrq',title : '传递日期',width : 200,hidden:util.getArrayIndex(option.hidden,'cdrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cdrq==null?"":row.cdrq)+'>'+(row.cdrq==null?"":row.cdrq)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'process_cdrq')>-1){
				clumns.push({field : 'process_cdrq',title : '传递日期',width : 200,hidden:util.getArrayIndex(option.hidden,'process_cdrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.xzpa_cdrq==null?"":row.ldpsxx.xzpa_cdrq)+'>'+(row.ldpsxx.xzpa_cdrq==null?"":row.ldpsxx.xzpa_cdrq)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'cddw')>-1){
	            clumns.push({field : 'cddw',title : '传递单位',width : 200,hidden:util.getArrayIndex(option.hidden,'cddw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cddw==null?"":row.cddw)+'>'+(row.cddw==null?"":row.cddw)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'process_cddw')>-1){
				clumns.push({field : 'process_cddw',title : '传递单位',width : 200,hidden:util.getArrayIndex(option.hidden,'process_cddw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.xzpa_cddw==null?"":row.ldpsxx.xzpa_cddw)+'>'+(row.ldpsxx.xzpa_cddw==null?"":row.ldpsxx.xzpa_cddw)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'jsr')>-1){
	            clumns.push({field : 'jsr',title : '接收人',width : 200,hidden:util.getArrayIndex(option.hidden,'jsr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsr==null?"":row.jsr)+'>'+(row.jsr==null?"":row.jsr)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'process_jsr')>-1){
				clumns.push({field : 'process_jsr',title : '接收人',width : 200,hidden:util.getArrayIndex(option.hidden,'process_jsr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.xzpa_jsr==null?"":row.ldpsxx.xzpa_jsr)+'>'+(row.ldpsxx.xzpa_jsr==null?"":row.ldpsxx.xzpa_jsr)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'jsrdh')>-1){
	            clumns.push({field : 'jsrdh',title : '接收人电话',width : 200,hidden:util.getArrayIndex(option.hidden,'jsrdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsrdh==null?"":row.jsrdh)+'>'+(row.jsrdh==null?"":row.jsrdh)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'process_jsrdh')>-1){
				clumns.push({field : 'process_jsrdh',title : '接收人电话',width : 200,hidden:util.getArrayIndex(option.hidden,'process_jsrdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.xzpa_jsrdh==null?"":row.ldpsxx.xzpa_jsrdh)+'>'+(row.ldpsxx.xzpa_jsrdh==null?"":row.ldpsxx.xzpa_jsrdh)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'cdbz')>-1){
	            clumns.push({field : 'cdbz',title : '传递备注',width : 200,hidden:util.getArrayIndex(option.hidden,'cdbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cdbz==null?"":row.cdbz)+'>'+(row.cdbz==null?"":row.cdbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czjg')>-1){
	            clumns.push({field : 'czjg',title : '查证结果',width : 200,hidden:util.getArrayIndex(option.hidden,'czjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czjg==null?"":row.czjg)+'>'+(row.czjg==null?"":row.czjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fkrq')>-1){
	            clumns.push({field : 'fkrq',title : '反馈日期',width : 200,hidden:util.getArrayIndex(option.hidden,'fkrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fkrq==null?"":row.fkrq)+'>'+(row.fkrq==null?"":row.fkrq)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'process_fkrq')>-1){
				clumns.push({field : 'process_fkrq',title : '反馈日期',width : 200,hidden:util.getArrayIndex(option.hidden,'process_fkrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.xzpa_fkrq==null?"":row.ldpsxx.xzpa_fkrq)+'>'+(row.ldpsxx.xzpa_fkrq==null?"":row.ldpsxx.xzpa_fkrq)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'phxsaj')>-1){
	            clumns.push({field : 'phxsaj',title : '破获刑事案件',width : 200,hidden:util.getArrayIndex(option.hidden,'phxsaj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.phxsaj==null?"":row.phxsaj)+'>'+(row.phxsaj==null?"":row.phxsaj)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'process_phxsaj')>-1){
				clumns.push({field : 'process_phxsaj',title : '破获刑事案件',width : 200,hidden:util.getArrayIndex(option.hidden,'process_phxsaj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.xzpa_phxsaj==null?"":row.ldpsxx.xzpa_phxsaj)+'>'+(row.ldpsxx.xzpa_phxsaj==null?"":row.ldpsxx.xzpa_phxsaj)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'phzaaj')>-1){
	            clumns.push({field : 'phzaaj',title : '破获治安案件',width : 200,hidden:util.getArrayIndex(option.hidden,'phzaaj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.phzaaj==null?"":row.phzaaj)+'>'+(row.phzaaj==null?"":row.phzaaj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xsjls')>-1){
	            clumns.push({field : 'xsjls',title : '刑事拘留人数',width : 200,hidden:util.getArrayIndex(option.hidden,'xsjls')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xsjls==null?"":row.xsjls)+'>'+(row.xsjls==null?"":row.xsjls)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbrs')>-1){
	            clumns.push({field : 'dbrs',title : '逮捕人数',width : 200,hidden:util.getArrayIndex(option.hidden,'dbrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbrs==null?"":row.dbrs)+'>'+(row.dbrs==null?"":row.dbrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ljrs')>-1){
	            clumns.push({field : 'ljrs',title : '劳教人数',width : 200,hidden:util.getArrayIndex(option.hidden,'ljrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ljrs==null?"":row.ljrs)+'>'+(row.ljrs==null?"":row.ljrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ysqss')>-1){
	            clumns.push({field : 'ysqss',title : '移送起诉人数',width : 200,hidden:util.getArrayIndex(option.hidden,'ysqss')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysqss==null?"":row.ysqss)+'>'+(row.ysqss==null?"":row.ysqss)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qtrs')>-1){
	            clumns.push({field : 'qtrs',title : '其他人数',width : 200,hidden:util.getArrayIndex(option.hidden,'qtrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qtrs==null?"":row.qtrs)+'>'+(row.qtrs==null?"":row.qtrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bdbtj')>-1){
	            clumns.push({field : 'bdbtj',title : '部督捕、通缉人数',width : 200,hidden:util.getArrayIndex(option.hidden,'bdbtj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bdbtj==null?"":row.bdbtj)+'>'+(row.bdbtj==null?"":row.bdbtj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sdbtj')>-1){
	            clumns.push({field : 'sdbtj',title : '省督捕、通缉人数',width : 200,hidden:util.getArrayIndex(option.hidden,'sdbtj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sdbtj==null?"":row.sdbtj)+'>'+(row.sdbtj==null?"":row.sdbtj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wszts')>-1){
	            clumns.push({field : 'wszts',title : '网上追逃人数',width : 200,hidden:util.getArrayIndex(option.hidden,'wszts')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wszts==null?"":row.wszts)+'>'+(row.wszts==null?"":row.wszts)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zzjehj')>-1){
	            clumns.push({field : 'zzjehj',title : '追赃金额合计（万元）',width : 200,hidden:util.getArrayIndex(option.hidden,'zzjehj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzjehj==null?"":row.zzjehj)+'>'+(row.zzjehj==null?"":row.zzjehj)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'process_zzjehj')>-1){
				clumns.push({field : 'process_zzjehj',title : '追赃金额合计（万元）',width : 200,hidden:util.getArrayIndex(option.hidden,'process_zzjehj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.xzpa_zzjehj==null?"":row.ldpsxx.xzpa_zzjehj)+'>'+(row.ldpsxx.xzpa_zzjehj==null?"":row.ldpsxx.xzpa_zzjehj)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'clcdsj')>-1){
	            clumns.push({field : 'clcdsj',title : '材料传递时间',width : 200,hidden:util.getArrayIndex(option.hidden,'clcdsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.clcdsj==null?"":row.clcdsj)+'>'+(row.clcdsj==null?"":row.clcdsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zwdw')>-1){
	            clumns.push({field : 'zwdw',title : '转往单位',width : 200,hidden:util.getArrayIndex(option.hidden,'zwdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zwdw==null?"":row.zwdw)+'>'+(row.zwdw==null?"":row.zwdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态(YWSTATE)',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'pastable')>-1){
	            clumns.push({field : 'pastable',title : '是否有效',width : 200,hidden:util.getArrayIndex(option.hidden,'pastable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pastable==null?"":row.pastable)+'>'+(row.pastable==null?"":row.pastable)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程id',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});