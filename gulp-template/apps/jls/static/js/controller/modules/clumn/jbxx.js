/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jbxx 数据列表
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
	        if(util.getArrayIndex(option.clumns,'tbr')>-1){
	            clumns.push({field : 'tbr',title : '填表人',width : 200,hidden:util.getArrayIndex(option.hidden,'tbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbr==null?"":row.tbr)+'>'+(row.tbr==null?"":row.tbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbrq')>-1){
	            clumns.push({field : 'tbrq',title : '填表日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbrq==null?"":row.tbrq)+'>'+(row.tbrq==null?"":row.tbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wbrybh')>-1){
	            clumns.push({field : 'wbrybh',title : '网办人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'wbrybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wbrybh==null?"":row.wbrybh)+'>'+(row.wbrybh==null?"":row.wbrybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gcbh')>-1){
	            clumns.push({field : 'gcbh',title : '过程编号',width : 200,hidden:util.getArrayIndex(option.hidden,'gcbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gcbh==null?"":row.gcbh)+'>'+(row.gcbh==null?"":row.gcbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'taskid')>-1){
	            clumns.push({field : 'taskid',title : '业务进程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'taskid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.taskid==null?"":row.taskid)+'>'+(row.taskid==null?"":row.taskid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'snbh')>-1){
	            clumns.push({field : 'snbh',title : '所内编号',width : 200,hidden:util.getArrayIndex(option.hidden,'snbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.snbh==null?"":row.snbh)+'>'+(row.snbh==null?"":row.snbh)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'xm')>-1){
			    clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'jsh')>-1){
	            clumns.push({field : 'jsh',title : '拘室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xmpy')>-1){
	            clumns.push({field : 'xmpy',title : '姓名拼音',width : 200,hidden:util.getArrayIndex(option.hidden,'xmpy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xmpy==null?"":row.xmpy)+'>'+(row.xmpy==null?"":row.xmpy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xmpyszm')>-1){
	            clumns.push({field : 'xmpyszm',title : '姓名拼音首字母',width : 200,hidden:util.getArrayIndex(option.hidden,'xmpyszm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xmpyszm==null?"":row.xmpyszm)+'>'+(row.xmpyszm==null?"":row.xmpyszm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bm')>-1){
	            clumns.push({field : 'bm',title : '别名',width : 200,hidden:util.getArrayIndex(option.hidden,'bm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bm==null?"":row.bm)+'>'+(row.bm==null?"":row.bm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bmty')>-1){
	            clumns.push({field : 'bmty',title : '别名同音',width : 200,hidden:util.getArrayIndex(option.hidden,'bmty')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bmty==null?"":row.bmty)+'>'+(row.bmty==null?"":row.bmty)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xb')>-1){
	            clumns.push({field : 'xb',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xb==null?"":row.xb)+'>'+(row.xb==null?"":row.xb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xbString')>-1){
                clumns.push({field : 'xbString',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xbString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xbString==null?"":row.xbString)+'>'+(row.xbString==null?"":row.xbString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'rsrq')>-1){
	            clumns.push({field : 'rsrq',title : '入所日期',width : 200,hidden:util.getArrayIndex(option.hidden,'rsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsrq==null?"":row.rsrq)+'>'+(row.rsrq==null?"":row.rsrq)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'jbmc')>-1){
				clumns.push({field : 'jbmc',title : '疾病名称',width : 200,hidden:util.getArrayIndex(option.hidden,'jbmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbmc==null?"":row.jbmc)+'>'+(row.jbmc==null?"":row.jbmc)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'ysyj')>-1){
				clumns.push({field : 'ysyj',title : '医生意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ysyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysyj==null?"":row.ysyj)+'>'+(row.ysyj==null?"":row.ysyj)+'</span>'}});
			}
			// if(util.getArrayIndex(option.clumns,'csqx')>-1){
			// 	clumns.push({field : 'csqx',title : '出所去向',width : 200,hidden:util.getArrayIndex(option.hidden,'csqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csqx==null?"":row.csqx)+'>'+(row.csqx==null?"":row.csqx)+'</span>'}});
			// }
	        if(util.getArrayIndex(option.clumns,'zjlx')>-1){
	            clumns.push({field : 'zjlx',title : '证件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'zjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjlx==null?"":row.zjlx)+'>'+(row.zjlx==null?"":row.zjlx)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'zjlxString')>-1){
                clumns.push({field : 'zjlxString',title : '证件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'zjlxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjlxString==null?"":row.zjlxString)+'>'+(row.zjlxString==null?"":row.zjlxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'zjh')>-1){
	            clumns.push({field : 'zjh',title : '证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'zjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjh==null?"":row.zjh)+'>'+(row.zjh==null?"":row.zjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gj')>-1){
	            clumns.push({field : 'gj',title : '国籍',width : 200,hidden:util.getArrayIndex(option.hidden,'gj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gj==null?"":row.gj)+'>'+(row.gj==null?"":row.gj)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'gjString')>-1){
                clumns.push({field : 'gjString',title : '国籍',width : 200,hidden:util.getArrayIndex(option.hidden,'gjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjString==null?"":row.gjString)+'>'+(row.gjString==null?"":row.gjString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'whcd')>-1){
	            clumns.push({field : 'whcd',title : '文化程度',width : 200,hidden:util.getArrayIndex(option.hidden,'whcd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.whcd==null?"":row.whcd)+'>'+(row.whcd==null?"":row.whcd)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'whcdString')>-1){
                clumns.push({field : 'whcdString',title : '文化程度',width : 200,hidden:util.getArrayIndex(option.hidden,'whcdString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.whcdString==null?"":row.whcdString)+'>'+(row.whcdString==null?"":row.whcdString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'sf')>-1){
	            clumns.push({field : 'sf',title : '身份',width : 200,hidden:util.getArrayIndex(option.hidden,'sf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sf==null?"":row.sf)+'>'+(row.sf==null?"":row.sf)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfString')>-1){
                clumns.push({field : 'sfString',title : '身份',width : 200,hidden:util.getArrayIndex(option.hidden,'sfString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfString==null?"":row.sfString)+'>'+(row.sfString==null?"":row.sfString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'tssf')>-1){
	            clumns.push({field : 'tssf',title : '特殊身份',width : 200,hidden:util.getArrayIndex(option.hidden,'tssf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tssf==null?"":row.tssf)+'>'+(row.tssf==null?"":row.tssf)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'tssfString')>-1){
                clumns.push({field : 'tssfString',title : '特殊身份',width : 200,hidden:util.getArrayIndex(option.hidden,'tssfString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tssfString==null?"":row.tssfString)+'>'+(row.tssfString==null?"":row.tssfString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'mz')>-1){
	            clumns.push({field : 'mz',title : '民族',width : 200,hidden:util.getArrayIndex(option.hidden,'mz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mz==null?"":row.mz)+'>'+(row.mz==null?"":row.mz)+'</span>'}});
	        }
            if(util.getArrayIndex(option.clumns,'mzString')>-1){
                clumns.push({field : 'mzString',title : '民族',width : 200,hidden:util.getArrayIndex(option.hidden,'mzString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mzString==null?"":row.mzString)+'>'+(row.mzString==null?"":row.mzString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'zzmm')>-1){
	            clumns.push({field : 'zzmm',title : '政治面貌',width : 200,hidden:util.getArrayIndex(option.hidden,'zzmm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzmm==null?"":row.zzmm)+'>'+(row.zzmm==null?"":row.zzmm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zzmmString')>-1){
                clumns.push({field : 'zzmmString',title : '政治面貌',width : 200,hidden:util.getArrayIndex(option.hidden,'zzmmString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzmmString==null?"":row.zzmmString)+'>'+(row.zzmmString==null?"":row.zzmmString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'csrq')>-1){
	            clumns.push({field : 'csrq',title : '出生日期',width : 200,hidden:util.getArrayIndex(option.hidden,'csrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csrq==null?"":row.csrq)+'>'+(row.csrq==null?"":row.csrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hyzk')>-1){
	            clumns.push({field : 'hyzk',title : '婚姻状况',width : 200,hidden:util.getArrayIndex(option.hidden,'hyzk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hyzk==null?"":row.hyzk)+'>'+(row.hyzk==null?"":row.hyzk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hyzkString')>-1){
                clumns.push({field : 'hyzkString',title : '婚姻状况',width : 200,hidden:util.getArrayIndex(option.hidden,'hyzkString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hyzkString==null?"":row.hyzkString)+'>'+(row.hyzkString==null?"":row.hyzkString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'hjd')>-1){
	            clumns.push({field : 'hjd',title : '户籍地',width : 200,hidden:util.getArrayIndex(option.hidden,'hjd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjd==null?"":row.hjd)+'>'+(row.hjd==null?"":row.hjd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjdString')>-1){
                clumns.push({field : 'hjdString',title : '户籍地',width : 200,hidden:util.getArrayIndex(option.hidden,'hjdString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjdString==null?"":row.hjdString)+'>'+(row.hjdString==null?"":row.hjdString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'hjdxz')>-1){
	            clumns.push({field : 'hjdxz',title : '户籍地详址',width : 200,hidden:util.getArrayIndex(option.hidden,'hjdxz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjdxz==null?"":row.hjdxz)+'>'+(row.hjdxz==null?"":row.hjdxz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jg')>-1){
	            clumns.push({field : 'jg',title : '籍贯',width : 200,hidden:util.getArrayIndex(option.hidden,'jg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jg==null?"":row.jg)+'>'+(row.jg==null?"":row.jg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jgString')>-1){
                clumns.push({field : 'jgString',title : '籍贯',width : 200,hidden:util.getArrayIndex(option.hidden,'jgString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jgString==null?"":row.jgString)+'>'+(row.jgString==null?"":row.jgString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'xzd')>-1){
	            clumns.push({field : 'xzd',title : '现住地',width : 200,hidden:util.getArrayIndex(option.hidden,'xzd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xzd==null?"":row.xzd)+'>'+(row.xzd==null?"":row.xzd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xzdString')>-1){
                clumns.push({field : 'xzdString',title : '现住地',width : 200,hidden:util.getArrayIndex(option.hidden,'xzdString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xzdString==null?"":row.xzdString)+'>'+(row.xzdString==null?"":row.xzdString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'xzdxz')>-1){
	            clumns.push({field : 'xzdxz',title : '现住地详址',width : 200,hidden:util.getArrayIndex(option.hidden,'xzdxz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xzdxz==null?"":row.xzdxz)+'>'+(row.xzdxz==null?"":row.xzdxz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gzdw')>-1){
	            clumns.push({field : 'gzdw',title : '工作单位',width : 200,hidden:util.getArrayIndex(option.hidden,'gzdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gzdw==null?"":row.gzdw)+'>'+(row.gzdw==null?"":row.gzdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zy')>-1){
	            clumns.push({field : 'zy',title : '职业',width : 200,hidden:util.getArrayIndex(option.hidden,'zy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zy==null?"":row.zy)+'>'+(row.zy==null?"":row.zy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zyString')>-1){
                clumns.push({field : 'zyString',title : '职业',width : 200,hidden:util.getArrayIndex(option.hidden,'zyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zyString==null?"":row.zyString)+'>'+(row.zyString==null?"":row.zyString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'jljdjg')>-1){
	            clumns.push({field : 'jljdjg',title : '拘留决定机关',width : 200,hidden:util.getArrayIndex(option.hidden,'jljdjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jljdjg==null?"":row.jljdjg)+'>'+(row.jljdjg==null?"":row.jljdjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'badw')>-1){
	            clumns.push({field : 'badw',title : '办案单位（送案单位）',width : 200,hidden:util.getArrayIndex(option.hidden,'badw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.badw==null?"":row.badw)+'>'+(row.badw==null?"":row.badw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bar')>-1){
	            clumns.push({field : 'bar',title : '办案人',width : 200,hidden:util.getArrayIndex(option.hidden,'bar')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bar==null?"":row.bar)+'>'+(row.bar==null?"":row.bar)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rsxz')>-1){
	            clumns.push({field : 'rsxz',title : '入所性质（收拘类别）',width : 200,hidden:util.getArrayIndex(option.hidden,'rsxz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsxz==null?"":row.rsxz)+'>'+(row.rsxz==null?"":row.rsxz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rsxzString')>-1){
                clumns.push({field : 'rsxzString',title : '入所性质',width : 200,hidden:util.getArrayIndex(option.hidden,'rsxzString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsxzString==null?"":row.rsxzString)+'>'+(row.rsxzString==null?"":row.rsxzString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'syr')>-1){
	            clumns.push({field : 'syr',title : '收拘民警',width : 200,hidden:util.getArrayIndex(option.hidden,'syr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.syr==null?"":row.syr)+'>'+(row.syr==null?"":row.syr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sypz')>-1){
	            clumns.push({field : 'sypz',title : '收押凭证',width : 200,hidden:util.getArrayIndex(option.hidden,'sypz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sypz==null?"":row.sypz)+'>'+(row.sypz==null?"":row.sypz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sypzString')>-1){
                clumns.push({field : 'sypzString',title : '收押凭证',width : 200,hidden:util.getArrayIndex(option.hidden,'sypzString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sypzString==null?"":row.sypzString)+'>'+(row.sypzString==null?"":row.sypzString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'sypzwsh')>-1){
	            clumns.push({field : 'sypzwsh',title : '收押凭证文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'sypzwsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sypzwsh==null?"":row.sypzwsh)+'>'+(row.sypzwsh==null?"":row.sypzwsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ay')>-1){
	            clumns.push({field : 'ay',title : '案由',width : 200,hidden:util.getArrayIndex(option.hidden,'ay')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ay==null?"":row.ay)+'>'+(row.ay==null?"":row.ay)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'ayString')>-1){
			    clumns.push({field : 'ayString',title : '案由',width : 200,hidden:util.getArrayIndex(option.hidden,'ayString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ayString==null?"":row.ayString)+'>'+(row.ayString==null?"":row.ayString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'barjh')>-1){
	            clumns.push({field : 'barjh',title : '办案人警号',width : 200,hidden:util.getArrayIndex(option.hidden,'barjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.barjh==null?"":row.barjh)+'>'+(row.barjh==null?"":row.barjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bardh')>-1){
	            clumns.push({field : 'bardh',title : '办案民警电话',width : 200,hidden:util.getArrayIndex(option.hidden,'bardh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bardh==null?"":row.bardh)+'>'+(row.bardh==null?"":row.bardh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czdh')>-1){
	            clumns.push({field : 'czdh',title : '办案传真电话',width : 200,hidden:util.getArrayIndex(option.hidden,'czdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czdh==null?"":row.czdh)+'>'+(row.czdh==null?"":row.czdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gyts')>-1){
	            clumns.push({field : 'gyts',title : '关押天数（日）',width : 200,hidden:util.getArrayIndex(option.hidden,'gyts')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gyts==null?"":row.gyts)+'>'+(row.gyts==null?"":row.gyts)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlrq')>-1){
	            clumns.push({field : 'jlrq',title : '拘留日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jlrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlrq==null?"":row.jlrq)+'>'+(row.jlrq==null?"":row.jlrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gyqx')>-1){
	            clumns.push({field : 'gyqx',title : '关押期限',width : 200,hidden:util.getArrayIndex(option.hidden,'gyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gyqx==null?"":row.gyqx)+'>'+(row.gyqx==null?"":row.gyqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sdnjccjg')>-1){
	            clumns.push({field : 'sdnjccjg',title : '涉毒尿检初查结果',width : 200,hidden:util.getArrayIndex(option.hidden,'sdnjccjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sdnjccjg==null?"":row.sdnjccjg)+'>'+(row.sdnjccjg==null?"":row.sdnjccjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sdnjdw')>-1){
	            clumns.push({field : 'sdnjdw',title : '涉毒尿检单位',width : 200,hidden:util.getArrayIndex(option.hidden,'sdnjdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sdnjdw==null?"":row.sdnjdw)+'>'+(row.sdnjdw==null?"":row.sdnjdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sdnjcjsj')>-1){
	            clumns.push({field : 'sdnjcjsj',title : '涉毒尿检初检时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sdnjcjsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sdnjcjsj==null?"":row.sdnjcjsj)+'>'+(row.sdnjcjsj==null?"":row.sdnjcjsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sdnjjcr')>-1){
	            clumns.push({field : 'sdnjjcr',title : '涉毒尿检检查人',width : 200,hidden:util.getArrayIndex(option.hidden,'sdnjjcr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sdnjjcr==null?"":row.sdnjjcr)+'>'+(row.sdnjjcr==null?"":row.sdnjjcr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jyaq')>-1){
	            clumns.push({field : 'jyaq',title : '简要案情',width : 200,hidden:util.getArrayIndex(option.hidden,'jyaq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jyaq==null?"":row.jyaq)+'>'+(row.jyaq==null?"":row.jyaq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dah')>-1){
	            clumns.push({field : 'dah',title : '档案号',width : 200,hidden:util.getArrayIndex(option.hidden,'dah')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dah==null?"":row.dah)+'>'+(row.dah==null?"":row.dah)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hzflwsh')>-1){
	            clumns.push({field : 'hzflwsh',title : '回执文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'hzflwsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hzflwsh==null?"":row.hzflwsh)+'>'+(row.hzflwsh==null?"":row.hzflwsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzrybh')>-1){
	            clumns.push({field : 'pzrybh',title : '派综人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'pzrybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzrybh==null?"":row.pzrybh)+'>'+(row.pzrybh==null?"":row.pzrybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzajbh')>-1){
	            clumns.push({field : 'pzajbh',title : '派综案件编号',width : 200,hidden:util.getArrayIndex(option.hidden,'pzajbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzajbh==null?"":row.pzajbh)+'>'+(row.pzajbh==null?"":row.pzajbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzflwsh')>-1){
	            clumns.push({field : 'pzflwsh',title : '派综法律文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'pzflwsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzflwsh==null?"":row.pzflwsh)+'>'+(row.pzflwsh==null?"":row.pzflwsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czzt')>-1){
	            clumns.push({field : 'czzt',title : '操作状态',width : 200,hidden:util.getArrayIndex(option.hidden,'czzt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czzt==null?"":row.czzt)+'>'+(row.czzt==null?"":row.czzt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'czztString')>-1){
                clumns.push({field : 'czztString',title : '操作状态',width : 200,hidden:util.getArrayIndex(option.hidden,'czztString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.czztString==null?"":row.czztString)+'>'+(row.czztString==null?"":row.czztString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'jsly')>-1){
	            clumns.push({field : 'jsly',title : '拒收理由（健康检查结果）',width : 200,hidden:util.getArrayIndex(option.hidden,'jsly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsly==null?"":row.jsly)+'>'+(row.jsly==null?"":row.jsly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'byjswsh')>-1){
	            clumns.push({field : 'byjswsh',title : '不宜拘留文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'byjswsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.byjswsh==null?"":row.byjswsh)+'>'+(row.byjswsh==null?"":row.byjswsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsrq')>-1){
	            clumns.push({field : 'jsrq',title : '拒收日期',width : 200,hidden:util.getArrayIndex(option.hidden,'jsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsrq==null?"":row.jsrq)+'>'+(row.jsrq==null?"":row.jsrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zxf')>-1){
	            clumns.push({field : 'zxf',title : '重刑犯',width : 200,hidden:util.getArrayIndex(option.hidden,'zxf')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zxf==null?"":row.zxf)+'>'+(row.zxf==null?"":row.zxf)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zxfString')>-1){
                clumns.push({field : 'zxfString',title : '重刑犯',width : 200,hidden:util.getArrayIndex(option.hidden,'zxfString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zxfString==null?"":row.zxfString)+'>'+(row.zxfString==null?"":row.zxfString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'aqdj')>-1){
	            clumns.push({field : 'aqdj',title : '安全等级',width : 200,hidden:util.getArrayIndex(option.hidden,'aqdj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.aqdj==null?"":row.aqdj)+'>'+(row.aqdj==null?"":row.aqdj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'aqdjString')>-1){
                clumns.push({field : 'aqdjString',title : '安全等级',width : 200,hidden:util.getArrayIndex(option.hidden,'aqdjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.aqdjString==null?"":row.aqdjString)+'>'+(row.aqdjString==null?"":row.aqdjString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'rygllb')>-1){
	            clumns.push({field : 'rygllb',title : '人员管理类别',width : 200,hidden:util.getArrayIndex(option.hidden,'rygllb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rygllb==null?"":row.rygllb)+'>'+(row.rygllb==null?"":row.rygllb)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'rygllbString')>-1){
                clumns.push({field : 'rygllbString',title : '人员管理类别',width : 200,hidden:util.getArrayIndex(option.hidden,'rygllbString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rygllbString==null?"":row.rygllbString)+'>'+(row.rygllbString==null?"":row.rygllbString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'lscsyy')>-1){
	            clumns.push({field : 'lscsyy',title : '临时出所原因',width : 200,hidden:util.getArrayIndex(option.hidden,'lscsyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lscsyy==null?"":row.lscsyy)+'>'+(row.lscsyy==null?"":row.lscsyy)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'lscsyyString')>-1){
                clumns.push({field : 'lscsyyString',title : '临时出所原因',width : 200,hidden:util.getArrayIndex(option.hidden,'lscsyyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lscsyyString==null?"":row.lscsyyString)+'>'+(row.lscsyyString==null?"":row.lscsyyString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'lscssj')>-1){
	            clumns.push({field : 'lscssj',title : '上一次临时出所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lscssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lscssj==null?"":row.lscssj)+'>'+(row.lscssj==null?"":row.lscssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lscshssj')>-1){
	            clumns.push({field : 'lscshssj',title : '上一次临时出所回所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lscshssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lscshssj==null?"":row.lscshssj)+'>'+(row.lscshssj==null?"":row.lscshssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'crjbj')>-1){
	            clumns.push({field : 'crjbj',title : '出入监标记',width : 200,hidden:util.getArrayIndex(option.hidden,'crjbj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.crjbj==null?"":row.crjbj)+'>'+(row.crjbj==null?"":row.crjbj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'crjbjString')>-1){
                clumns.push({field : 'crjbjString',title : '出入监标记',width : 200,hidden:util.getArrayIndex(option.hidden,'crjbjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.crjbjString==null?"":row.crjbjString)+'>'+(row.crjbjString==null?"":row.crjbjString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'rkbhgbj')>-1){
	            clumns.push({field : 'rkbhgbj',title : '入库合格不合格标记',width : 200,hidden:util.getArrayIndex(option.hidden,'rkbhgbj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rkbhgbj==null?"":row.rkbhgbj)+'>'+(row.rkbhgbj==null?"":row.rkbhgbj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rkbhgbjString')>-1){
                clumns.push({field : 'rkbhgbjString',title : '入库合格不合格标记',width : 200,hidden:util.getArrayIndex(option.hidden,'rkbhgbjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rkbhgbjString==null?"":row.rkbhgbjString)+'>'+(row.rkbhgbjString==null?"":row.rkbhgbjString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'rkbhgyy')>-1){
	            clumns.push({field : 'rkbhgyy',title : '不合格入库原因',width : 200,hidden:util.getArrayIndex(option.hidden,'rkbhgyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rkbhgyy==null?"":row.rkbhgyy)+'>'+(row.rkbhgyy==null?"":row.rkbhgyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lrsfjs')>-1){
	            clumns.push({field : 'lrsfjs',title : '是否及时录入标记',width : 200,hidden:util.getArrayIndex(option.hidden,'lrsfjs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lrsfjs==null?"":row.lrsfjs)+'>'+(row.lrsfjs==null?"":row.lrsfjs)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'lrsfjsString')>-1){
                clumns.push({field : 'lrsfjsString',title : '是否及时录入标记',width : 200,hidden:util.getArrayIndex(option.hidden,'lrsfjsString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lrsfjsString==null?"":row.lrsfjsString)+'>'+(row.lrsfjsString==null?"":row.lrsfjsString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'cssj')>-1){
	            clumns.push({field : 'cssj',title : '出所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cssj==null?"":row.cssj)+'>'+(row.cssj==null?"":row.cssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csyy')>-1){
	            clumns.push({field : 'csyy',title : '出所原因',width : 200,hidden:util.getArrayIndex(option.hidden,'csyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csyy==null?"":row.csyy)+'>'+(row.csyy==null?"":row.csyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csyyString')>-1){
                clumns.push({field : 'csyyString',title : '出所原因',width : 200,hidden:util.getArrayIndex(option.hidden,'csyyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csyyString==null?"":row.csyyString)+'>'+(row.csyyString==null?"":row.csyyString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'csqx')>-1){
	            clumns.push({field : 'csqx',title : '出所去向',width : 200,hidden:util.getArrayIndex(option.hidden,'csqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csqx==null?"":row.csqx)+'>'+(row.csqx==null?"":row.csqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csqxString')>-1){
                clumns.push({field : 'csqxString',title : '出所去向',width : 200,hidden:util.getArrayIndex(option.hidden,'csqxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csqxString==null?"":row.csqxString)+'>'+(row.csqxString==null?"":row.csqxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'jj')>-1){
	            clumns.push({field : 'jj',title : '戒具标志位',width : 200,hidden:util.getArrayIndex(option.hidden,'jj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jj==null?"":row.jj)+'>'+(row.jj==null?"":row.jj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjString')>-1){
                clumns.push({field : 'jjString',title : '戒具标志位',width : 200,hidden:util.getArrayIndex(option.hidden,'jjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjString==null?"":row.jjString)+'>'+(row.jjString==null?"":row.jjString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'jb')>-1){
	            clumns.push({field : 'jb',title : '禁闭标志位',width : 200,hidden:util.getArrayIndex(option.hidden,'jb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jb==null?"":row.jb)+'>'+(row.jb==null?"":row.jb)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'jbString')>-1){
                clumns.push({field : 'jbString',title : '禁闭标志位',width : 200,hidden:util.getArrayIndex(option.hidden,'jbString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbString==null?"":row.jbString)+'>'+(row.jbString==null?"":row.jbString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'zdzy')>-1){
	            clumns.push({field : 'zdzy',title : '重点在押',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzy==null?"":row.zdzy)+'>'+(row.zdzy==null?"":row.zdzy)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'zdzyString')>-1){
                clumns.push({field : 'zdzyString',title : '重点在押',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzyString==null?"":row.zdzyString)+'>'+(row.zdzyString==null?"":row.zdzyString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'ygry')>-1){
	            clumns.push({field : 'ygry',title : '严管人员标志位',width : 200,hidden:util.getArrayIndex(option.hidden,'ygry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ygry==null?"":row.ygry)+'>'+(row.ygry==null?"":row.ygry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ygryString')>-1){
                clumns.push({field : 'ygryString',title : '严管人员标志位',width : 200,hidden:util.getArrayIndex(option.hidden,'ygryString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ygryString==null?"":row.ygryString)+'>'+(row.ygryString==null?"":row.ygryString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'yfh')>-1){
	            clumns.push({field : 'yfh',title : '衣服号',width : 200,hidden:util.getArrayIndex(option.hidden,'yfh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yfh==null?"":row.yfh)+'>'+(row.yfh==null?"":row.yfh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cwh')>-1){
	            clumns.push({field : 'cwh',title : '床位号',width : 200,hidden:util.getArrayIndex(option.hidden,'cwh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cwh==null?"":row.cwh)+'>'+(row.cwh==null?"":row.cwh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fwh')>-1){
	            clumns.push({field : 'fwh',title : '附物号',width : 200,hidden:util.getArrayIndex(option.hidden,'fwh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fwh==null?"":row.fwh)+'>'+(row.fwh==null?"":row.fwh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rsldsp')>-1){
	            clumns.push({field : 'rsldsp',title : '入所领导审批',width : 200,hidden:util.getArrayIndex(option.hidden,'rsldsp')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsldsp==null?"":row.rsldsp)+'>'+(row.rsldsp==null?"":row.rsldsp)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rsldspString')>-1){
                clumns.push({field : 'rsldspString',title : '入所领导审批',width : 200,hidden:util.getArrayIndex(option.hidden,'rsldspString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsldspString==null?"":row.rsldspString)+'>'+(row.rsldspString==null?"":row.rsldspString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'rsldspnr')>-1){
	            clumns.push({field : 'rsldspnr',title : '入所领导审批内容',width : 200,hidden:util.getArrayIndex(option.hidden,'rsldspnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsldspnr==null?"":row.rsldspnr)+'>'+(row.rsldspnr==null?"":row.rsldspnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rsldqm')>-1){
	            clumns.push({field : 'rsldqm',title : '入所领导签名',width : 200,hidden:util.getArrayIndex(option.hidden,'rsldqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsldqm==null?"":row.rsldqm)+'>'+(row.rsldqm==null?"":row.rsldqm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rsldqmsj')>-1){
	            clumns.push({field : 'rsldqmsj',title : '入所领导签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'rsldqmsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsldqmsj==null?"":row.rsldqmsj)+'>'+(row.rsldqmsj==null?"":row.rsldqmsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '人员状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'stateString')>-1){
                clumns.push({field : 'stateString',title : '人员状态',width : 200,hidden:util.getArrayIndex(option.hidden,'stateString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.stateString==null?"":row.stateString)+'>'+(row.stateString==null?"":row.stateString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'scbz')>-1){
	            clumns.push({field : 'scbz',title : '上传标志',width : 200,hidden:util.getArrayIndex(option.hidden,'scbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scbz==null?"":row.scbz)+'>'+(row.scbz==null?"":row.scbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'scbzString')>-1){
                clumns.push({field : 'scbzString',title : '上传标志',width : 200,hidden:util.getArrayIndex(option.hidden,'scbzString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.scbzString==null?"":row.scbzString)+'>'+(row.scbzString==null?"":row.scbzString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'dwlx')>-1){
	            clumns.push({field : 'dwlx',title : '单位类型',width : 200,hidden:util.getArrayIndex(option.hidden,'dwlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dwlx==null?"":row.dwlx)+'>'+(row.dwlx==null?"":row.dwlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dwlxString')>-1){
                clumns.push({field : 'dwlxString',title : '单位类型',width : 200,hidden:util.getArrayIndex(option.hidden,'dwlxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dwlxString==null?"":row.dwlxString)+'>'+(row.dwlxString==null?"":row.dwlxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'wfdd')>-1){
	            clumns.push({field : 'wfdd',title : '违法地点',width : 200,hidden:util.getArrayIndex(option.hidden,'wfdd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wfdd==null?"":row.wfdd)+'>'+(row.wfdd==null?"":row.wfdd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sydw')>-1){
	            clumns.push({field : 'sydw',title : '收押单位',width : 200,hidden:util.getArrayIndex(option.hidden,'sydw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sydw==null?"":row.sydw)+'>'+(row.sydw==null?"":row.sydw)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'bhlx')>-1){
	            clumns.push({field : 'bhlx',title : '病号类型',width : 200,hidden:util.getArrayIndex(option.hidden,'bhlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bhlx==null?"":row.bhlx)+'>'+(row.bhlx==null?"":row.bhlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bhlxString')>-1){
                clumns.push({field : 'bhlxString',title : '病号类型',width : 200,hidden:util.getArrayIndex(option.hidden,'bhlxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bhlxString==null?"":row.bhlxString)+'>'+(row.bhlxString==null?"":row.bhlxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'csd')>-1){
	            clumns.push({field : 'csd',title : '出生地',width : 200,hidden:util.getArrayIndex(option.hidden,'csd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csd==null?"":row.csd)+'>'+(row.csd==null?"":row.csd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ky')>-1){
	            clumns.push({field : 'ky',title : '口音',width : 200,hidden:util.getArrayIndex(option.hidden,'ky')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ky==null?"":row.ky)+'>'+(row.ky==null?"":row.ky)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxdh')>-1){
	            clumns.push({field : 'lxdh',title : '联系电话',width : 200,hidden:util.getArrayIndex(option.hidden,'lxdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxdh==null?"":row.lxdh)+'>'+(row.lxdh==null?"":row.lxdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hjdszpcs')>-1){
	            clumns.push({field : 'hjdszpcs',title : '户籍地所在派出所',width : 200,hidden:util.getArrayIndex(option.hidden,'hjdszpcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjdszpcs==null?"":row.hjdszpcs)+'>'+(row.hjdszpcs==null?"":row.hjdszpcs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tmtbtz')>-1){
	            clumns.push({field : 'tmtbtz',title : '体貌体表特征',width : 200,hidden:util.getArrayIndex(option.hidden,'tmtbtz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tmtbtz==null?"":row.tmtbtz)+'>'+(row.tmtbtz==null?"":row.tmtbtz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dwdz')>-1){
	            clumns.push({field : 'dwdz',title : '单位地址',width : 200,hidden:util.getArrayIndex(option.hidden,'dwdz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dwdz==null?"":row.dwdz)+'>'+(row.dwdz==null?"":row.dwdz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bjlrjl')>-1){
	            clumns.push({field : 'bjlrjl',title : '被拘留人简历',width : 200,hidden:util.getArrayIndex(option.hidden,'bjlrjl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bjlrjl==null?"":row.bjlrjl)+'>'+(row.bjlrjl==null?"":row.bjlrjl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bjlrjscfqk')>-1){
	            clumns.push({field : 'bjlrjscfqk',title : '被拘留人接受处罚情况',width : 200,hidden:util.getArrayIndex(option.hidden,'bjlrjscfqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bjlrjscfqk==null?"":row.bjlrjscfqk)+'>'+(row.bjlrjscfqk==null?"":row.bjlrjscfqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wfsj')>-1){
	            clumns.push({field : 'wfsj',title : '违法时间',width : 200,hidden:util.getArrayIndex(option.hidden,'wfsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wfsj==null?"":row.wfsj)+'>'+(row.wfsj==null?"":row.wfsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fxdj')>-1){
	            clumns.push({field : 'fxdj',title : '风险等级（FXDJ）',width : 200,hidden:util.getArrayIndex(option.hidden,'fxdj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fxdj==null?"":row.fxdj)+'>'+(row.fxdj==null?"":row.fxdj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fxdjString')>-1){
                clumns.push({field : 'fxdjString',title : '风险等级',width : 200,hidden:util.getArrayIndex(option.hidden,'fxdjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fxdjString==null?"":row.fxdjString)+'>'+(row.fxdjString==null?"":row.fxdjString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'tpsj')>-1){
	            clumns.push({field : 'tpsj',title : '逃跑时间',width : 200,hidden:util.getArrayIndex(option.hidden,'tpsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tpsj==null?"":row.tpsj)+'>'+(row.tpsj==null?"":row.tpsj)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'bdsj')>-1){
			    clumns.push({field : 'bdsj',title : '比对时间',width : 200,hidden:util.getArrayIndex(option.hidden,'bdsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bdsj==null?"":row.bdsj)+'>'+(row.bdsj==null?"":row.bdsj)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'sdm')>-1){
			    clumns.push({field : 'sdm',title : '所代码',width : 200,hidden:util.getArrayIndex(option.hidden,'sdm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sdm==null?"":row.sdm)+'>'+(row.sdm==null?"":row.sdm)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'ztrqString')>-1){
			    clumns.push({field : 'ztrqString',title : '在逃日期',width : 200,hidden:util.getArrayIndex(option.hidden,'ztrqString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ztrqString==null?"":row.ztrqString)+'>'+(row.ztrqString==null?"":row.ztrqString)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'sqsy')>-1){
			    clumns.push({field : 'sqsy',title : '申请事由',width : 200,hidden:util.getArrayIndex(option.hidden,'sqsy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqsy==null?"":row.sqsy)+'>'+(row.sqsy==null?"":row.sqsy)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'ncsrqString')>-1){
			    clumns.push({field : 'ncsrqString',title : '拟出所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ncsrqString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ncsrqString==null?"":row.ncsrqString)+'>'+(row.ncsrqString==null?"":row.ncsrqString)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'gjyj')>-1){
			    clumns.push({field : 'gjyj',title : '管教意见',width : 200,hidden:util.getArrayIndex(option.hidden,'gjyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjyj==null?"":row.gjyj)+'>'+(row.gjyj==null?"":row.gjyj)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'gjqm')>-1){
			    clumns.push({field : 'gjqm',title : '管教签名',width : 200,hidden:util.getArrayIndex(option.hidden,'gjqm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjqm==null?"":row.gjqm)+'>'+(row.gjqm==null?"":row.gjqm)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'gjqmrqString')>-1){
			    clumns.push({field : 'gjqmrqString',title : '管教签名时间',width : 200,hidden:util.getArrayIndex(option.hidden,'gjqmrqStringy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjqmrqString==null?"":row.gjqmrqString)+'>'+(row.gjqmrqString==null?"":row.gjqmrqString)+'</span>'}});
			}
	        return clumns;
	    };
	    return main;
	});