/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jy 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jsh')>-1){
	            clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'snbh')>-1){
	            clumns.push({field : 'snbh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'snbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.snbh==null?"":row.snbh)+'>'+(row.snbh==null?"":row.snbh)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'jbxxXm')>-1){
				clumns.push({field : 'jbxxXm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxxXm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxxJsh')>-1){
				clumns.push({field : 'jbxxJsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxxJsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxxJsh==null?"":row.jbxxJsh)+'>'+(row.jbxxJsh==null?"":row.jbxxJsh)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'ly')>-1){
	            clumns.push({field : 'ly',title : '来源(LY)',width : 200,hidden:util.getArrayIndex(option.hidden,'ly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ly==null?"":row.ly)+'>'+(row.ly==null?"":row.ly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lyString')>-1){
                clumns.push({field : 'lyString',title : '来源',width : 200,hidden:util.getArrayIndex(option.hidden,'lyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lyString==null?"":row.lyString)+'>'+(row.lyString==null?"":row.lyString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'xl')>-1){
	            clumns.push({field : 'xl',title : '心率',width : 200,hidden:util.getArrayIndex(option.hidden,'xl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xl==null?"":row.xl)+'>'+(row.xl==null?"":row.xl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xy')>-1){
	            clumns.push({field : 'xy',title : '血压',width : 200,hidden:util.getArrayIndex(option.hidden,'xy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xy==null?"":row.xy)+'>'+(row.xy==null?"":row.xy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'brbq')>-1){
	            clumns.push({field : 'brbq',title : '病人病情',width : 200,hidden:util.getArrayIndex(option.hidden,'brbq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.jy_brbq==null?"":row.ldpsxx.jy_brbq)+'>'+(row.ldpsxx.jy_brbq==null?"":row.ldpsxx.jy_brbq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdqk')>-1){
	            clumns.push({field : 'zdqk',title : '医生诊断情况',width : 200,hidden:util.getArrayIndex(option.hidden,'zdqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdqk==null?"":row.zdqk)+'>'+(row.zdqk==null?"":row.zdqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdrq')>-1){
	            clumns.push({field : 'zdrq',title : '诊断日期',width : 200,hidden:util.getArrayIndex(option.hidden,'zdrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.jy_zdrq==null?"":row.ldpsxx.jy_zdrq)+'>'+(row.ldpsxx.jy_zdrq==null?"":row.ldpsxx.jy_zdrq)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'zdrqString')>-1){
	            clumns.push({field : 'zdrqString',title : '诊断日期',width : 200,hidden:util.getArrayIndex(option.hidden,'zdrqString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdrq==null?"":row.zdrq)+'>'+(row.zdrq==null?"":row.zdrq)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'ysxm')>-1){
				clumns.push({field : 'ysxm',title : '医生姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ysxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.jy_ysxm==null?"":row.ldpsxx.jy_ysxm)+'>'+(row.ldpsxx.jy_ysxm==null?"":row.ldpsxx.jy_ysxm)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'ysxmString')>-1){
				clumns.push({field : 'ysxmString',title : '医生姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ysxmString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysxm==null?"":row.ysxm)+'>'+(row.ysxm==null?"":row.ysxm)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'cljg')>-1){
	            clumns.push({field : 'cljg',title : '处理结果',width : 200,hidden:util.getArrayIndex(option.hidden,'cljg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cljg==null?"":row.cljg)+'>'+(row.cljg==null?"":row.cljg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bhlx')>-1){
	            clumns.push({field : 'bhlx',title : '病号类型',width : 200,hidden:util.getArrayIndex(option.hidden,'bhlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bhlx==null?"":row.bhlx)+'>'+(row.bhlx==null?"":row.bhlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ptmj')>-1){
	            clumns.push({field : 'ptmj',title : '陪同民警',width : 200,hidden:util.getArrayIndex(option.hidden,'ptmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.jy_ptmj==null?"":row.ldpsxx.jy_ptmj)+'>'+(row.ldpsxx.jy_ptmj==null?"":row.ldpsxx.jy_ptmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzyy')>-1){
	            clumns.push({field : 'jzyy',title : '就诊医院',width : 200,hidden:util.getArrayIndex(option.hidden,'jzyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.jy_jzyy==null?"":row.ldpsxx.jy_jzyy)+'>'+(row.ldpsxx.jy_jzyy==null?"":row.ldpsxx.jy_jzyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'brzs')>-1){
	            clumns.push({field : 'brzs',title : '病人自述',width : 200,hidden:util.getArrayIndex(option.hidden,'brzs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.brzs==null?"":row.brzs)+'>'+(row.brzs==null?"":row.brzs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swjy')>-1){
	            clumns.push({field : 'swjy',title : '所外就医',width : 200,hidden:util.getArrayIndex(option.hidden,'swjy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swjy==null?"":row.swjy)+'>'+(row.swjy==null?"":row.swjy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yyzdsj')>-1){
	            clumns.push({field : 'yyzdsj',title : '医院诊断时间',width : 200,hidden:util.getArrayIndex(option.hidden,'yyzdsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yyzdsj==null?"":row.yyzdsj)+'>'+(row.yyzdsj==null?"":row.yyzdsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yyzdjg')>-1){
	            clumns.push({field : 'yyzdjg',title : '医院诊断结果',width : 200,hidden:util.getArrayIndex(option.hidden,'yyzdjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yyzdjg==null?"":row.yyzdjg)+'>'+(row.yyzdjg==null?"":row.yyzdjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yyzlcs')>-1){
	            clumns.push({field : 'yyzlcs',title : '医院治疗措施',width : 200,hidden:util.getArrayIndex(option.hidden,'yyzlcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yyzlcs==null?"":row.yyzlcs)+'>'+(row.yyzlcs==null?"":row.yyzlcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csjylx')>-1){
	            clumns.push({field : 'csjylx',title : '出所就医类型',width : 200,hidden:util.getArrayIndex(option.hidden,'csjylx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csjylx==null?"":row.csjylx)+'>'+(row.csjylx==null?"":row.csjylx)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'csjylxString')>-1){
	            clumns.push({field : 'csjylxString',title : '出所就医类型',width : 200,hidden:util.getArrayIndex(option.hidden,'csjylxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csjylxString==null?"":row.csjylxString)+'>'+(row.csjylxString==null?"":row.csjylxString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zlfy')>-1){
	            clumns.push({field : 'zlfy',title : '治疗费用',width : 200,hidden:util.getArrayIndex(option.hidden,'zlfy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zlfy==null?"":row.zlfy)+'>'+(row.zlfy==null?"":row.zlfy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hssj')>-1){
	            clumns.push({field : 'hssj',title : '回所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hssj==null?"":row.hssj)+'>'+(row.hssj==null?"":row.hssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldxm')>-1){
	            clumns.push({field : 'ldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldxm==null?"":row.ldxm)+'>'+(row.ldxm==null?"":row.ldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyj')>-1){
	            clumns.push({field : 'ldyj',title : '领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldyj==null?"":row.ldyj)+'>'+(row.ldyj==null?"":row.ldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldpssj')>-1){
	            clumns.push({field : 'ldpssj',title : '领导批示时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpssj==null?"":row.ldpssj)+'>'+(row.ldpssj==null?"":row.ldpssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfffyp')>-1){
	            clumns.push({field : 'sfffyp',title : '是否发放药品',width : 200,hidden:util.getArrayIndex(option.hidden,'sfffyp')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfffyp==null?"":row.sfffyp)+'>'+(row.sfffyp==null?"":row.sfffyp)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fyksrq')>-1){
	            clumns.push({field : 'fyksrq',title : '发药开始日期',width : 200,hidden:util.getArrayIndex(option.hidden,'fyksrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fyksrq==null?"":row.fyksrq)+'>'+(row.fyksrq==null?"":row.fyksrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fyjsrq')>-1){
	            clumns.push({field : 'fyjsrq',title : '发药结束日期',width : 200,hidden:util.getArrayIndex(option.hidden,'fyjsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fyjsrq==null?"":row.fyjsrq)+'>'+(row.fyjsrq==null?"":row.fyjsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfyxxx')>-1){
	            clumns.push({field : 'sfyxxx',title : '是否允许休息',width : 200,hidden:util.getArrayIndex(option.hidden,'sfyxxx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfyxxx==null?"":row.sfyxxx)+'>'+(row.sfyxxx==null?"":row.sfyxxx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xxkssj')>-1){
	            clumns.push({field : 'xxkssj',title : '休息开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'xxkssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xxkssj==null?"":row.xxkssj)+'>'+(row.xxkssj==null?"":row.xxkssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xxjssj')>-1){
	            clumns.push({field : 'xxjssj',title : '休息结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'xxjssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xxjssj==null?"":row.xxjssj)+'>'+(row.xxjssj==null?"":row.xxjssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfjs')>-1){
	            clumns.push({field : 'sfjs',title : '是否及时',width : 200,hidden:util.getArrayIndex(option.hidden,'sfjs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfjs==null?"":row.sfjs)+'>'+(row.sfjs==null?"":row.sfjs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'psbz')>-1){
	            clumns.push({field : 'psbz',title : '批示标识',width : 200,hidden:util.getArrayIndex(option.hidden,'psbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.psbz==null?"":row.psbz)+'>'+(row.psbz==null?"":row.psbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'cssj')>-1){
	            clumns.push({field : 'cssj',title : '出所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cssj==null?"":row.cssj)+'>'+(row.cssj==null?"":row.cssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'shjb')>-1){
	            clumns.push({field : 'shjb',title : '所患疾病',width : 200,hidden:util.getArrayIndex(option.hidden,'shjb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.shjb==null?"":row.shjb)+'>'+(row.shjb==null?"":row.shjb)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});
