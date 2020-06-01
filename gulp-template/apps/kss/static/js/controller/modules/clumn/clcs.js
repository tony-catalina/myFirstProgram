/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Clcs 数据列表
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
	            clumns.push({field : 'jsbh',title : '监所编号 ',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'snbh')>-1){
			    clumns.push({field : 'snbh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'snbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.snbh==null?"":row.snbh)+'>'+(row.snbh==null?"":row.snbh)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'xm')>-1){
			    clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jsh')>-1){
			    clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'csyy')>-1){
	            clumns.push({field : 'csyy',title : '出所原因',width : 200,hidden:util.getArrayIndex(option.hidden,'csyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csyy==null?"":row.csyy)+'>'+(row.csyy==null?"":row.csyy)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'csyyString')>-1){
			    clumns.push({field : 'csyyString',title : '出所原因',width : 200,hidden:util.getArrayIndex(option.hidden,'csyyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csyyString==null?"":row.csyyString)+'>'+(row.csyyString==null?"":row.csyyString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'cssj')>-1){
	            clumns.push({field : 'cssj',title : '出所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cssj==null?"":row.cssj)+'>'+(row.cssj==null?"":row.cssj)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'cssjString')>-1){
			    clumns.push({field : 'cssjString',title : '出所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cssjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cssjString==null?"":row.cssjString)+'>'+(row.cssjString==null?"":row.cssjString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'csqx')>-1){
	            clumns.push({field : 'csqx',title : '出所去向',width : 200,hidden:util.getArrayIndex(option.hidden,'csqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csqx==null?"":row.csqx)+'>'+(row.csqx==null?"":row.csqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzdw')>-1){
	            clumns.push({field : 'pzdw',title : '批准单位',width : 200,hidden:util.getArrayIndex(option.hidden,'pzdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzdw==null?"":row.pzdw)+'>'+(row.pzdw==null?"":row.pzdw)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'usefinger')>-1){
			    clumns.push({field : 'usefinger',title : '是否使用指纹比对',width : 200,hidden:util.getArrayIndex(option.hidden,'usefinger')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.usefinger==null?"":row.usefinger)+'>'+(row.usefinger==null?"":row.usefinger)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'pzr')>-1){
	            clumns.push({field : 'pzr',title : '批准人',width : 200,hidden:util.getArrayIndex(option.hidden,'pzr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzr==null?"":row.pzr)+'>'+(row.pzr==null?"":row.pzr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blr')>-1){
	            clumns.push({field : 'blr',title : '办理人',width : 200,hidden:util.getArrayIndex(option.hidden,'blr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blr==null?"":row.blr)+'>'+(row.blr==null?"":row.blr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blrzjh')>-1){
	            clumns.push({field : 'blrzjh',title : '办理人证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'blrzjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blrzjh==null?"":row.blrzjh)+'>'+(row.blrzjh==null?"":row.blrzjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blrlxdh')>-1){
	            clumns.push({field : 'blrlxdh',title : '办理人联系电话',width : 200,hidden:util.getArrayIndex(option.hidden,'blrlxdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blrlxdh==null?"":row.blrlxdh)+'>'+(row.blrlxdh==null?"":row.blrlxdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzws')>-1){
	            clumns.push({field : 'pzws',title : '凭证文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'pzws')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzws==null?"":row.pzws)+'>'+(row.pzws==null?"":row.pzws)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blsj')>-1){
	            clumns.push({field : 'blsj',title : '办理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'blsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blsj==null?"":row.blsj)+'>'+(row.blsj==null?"":row.blsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbr')>-1){
	            clumns.push({field : 'dbr',title : '担保人',width : 200,hidden:util.getArrayIndex(option.hidden,'dbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbr==null?"":row.dbr)+'>'+(row.dbr==null?"":row.dbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbdw')>-1){
	            clumns.push({field : 'dbdw',title : '担保单位',width : 200,hidden:util.getArrayIndex(option.hidden,'dbdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbdw==null?"":row.dbdw)+'>'+(row.dbdw==null?"":row.dbdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jddw')>-1){
	            clumns.push({field : 'jddw',title : '监督单位',width : 200,hidden:util.getArrayIndex(option.hidden,'jddw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jddw==null?"":row.jddw)+'>'+(row.jddw==null?"":row.jddw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zcdwszd')>-1){
	            clumns.push({field : 'zcdwszd',title : '转出单位所在地',width : 200,hidden:util.getArrayIndex(option.hidden,'zcdwszd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zcdwszd==null?"":row.zcdwszd)+'>'+(row.zcdwszd==null?"":row.zcdwszd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qzcs')>-1){
	            clumns.push({field : 'qzcs',title : '强制措施',width : 200,hidden:util.getArrayIndex(option.hidden,'qzcs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qzcs==null?"":row.qzcs)+'>'+(row.qzcs==null?"":row.qzcs)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'tzdw')>-1){
	            clumns.push({field : 'tzdw',title : '通知单位',width : 200,hidden:util.getArrayIndex(option.hidden,'tzdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tzdw==null?"":row.tzdw)+'>'+(row.tzdw==null?"":row.tzdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbrhxyrgx')>-1){
	            clumns.push({field : 'dbrhxyrgx',title : '担保人和嫌疑人关系',width : 200,hidden:util.getArrayIndex(option.hidden,'dbrhxyrgx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbrhxyrgx==null?"":row.dbrhxyrgx)+'>'+(row.dbrhxyrgx==null?"":row.dbrhxyrgx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dbrdz')>-1){
	            clumns.push({field : 'dbrdz',title : '担保人地址',width : 200,hidden:util.getArrayIndex(option.hidden,'dbrdz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dbrdz==null?"":row.dbrdz)+'>'+(row.dbrdz==null?"":row.dbrdz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'snbx')>-1){
	            clumns.push({field : 'snbx',title : '所内表现',width : 200,hidden:util.getArrayIndex(option.hidden,'snbx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.snbx==null?"":row.snbx)+'>'+(row.snbx==null?"":row.snbx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});