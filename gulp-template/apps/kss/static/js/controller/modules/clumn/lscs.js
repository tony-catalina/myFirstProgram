/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Lscs 数据列表
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
			if(util.getArrayIndex(option.clumns,'snbh')>-1){
			    clumns.push({field : 'snbh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'snbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.snbh==null?"":row.snbh)+'>'+(row.snbh==null?"":row.snbh)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'jsh')>-1){
			    clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'xm')>-1){
			    clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'xb')>-1){
			    clumns.push({field : 'xb',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xb==null?"":row.xb)+'>'+(row.xb==null?"":row.xb)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'xbString')>-1){
                clumns.push({field : 'xbString',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xbString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xbString==null?"":row.xbString)+'>'+(row.xbString==null?"":row.xbString)+'</span>'}});
            }
			if(util.getArrayIndex(option.clumns,'csrq')>-1){
			    clumns.push({field : 'csrq',title : '出生日期',width : 200,hidden:util.getArrayIndex(option.hidden,'csrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csrq==null?"":row.csrq)+'>'+(row.csrq==null?"":row.csrq)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'ay')>-1){
			    clumns.push({field : 'ay',title : '主要案由',width : 200,hidden:util.getArrayIndex(option.hidden,'ay')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ay==null?"":row.ay)+'>'+(row.ay==null?"":row.ay)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'blsj')>-1){
	            clumns.push({field : 'blsj',title : '办理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'blsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blsj==null?"":row.blsj)+'>'+(row.blsj==null?"":row.blsj)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'blsjString')>-1){
			    clumns.push({field : 'blsjString',title : '办理时间',width : 200,hidden:util.getArrayIndex(option.hidden,'blsjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blsjString==null?"":row.blsjString)+'>'+(row.blsjString==null?"":row.blsjString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'lrmj')>-1){
	            clumns.push({field : 'lrmj',title : '录入民警',width : 200,hidden:util.getArrayIndex(option.hidden,'lrmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lrmj==null?"":row.lrmj)+'>'+(row.lrmj==null?"":row.lrmj)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'hssj')>-1){
	            clumns.push({field : 'hssj',title : '回所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hssj==null?"":row.hssj)+'>'+(row.hssj==null?"":row.hssj)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'hssjString')>-1){
			    clumns.push({field : 'hssjString',title : '回所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hssjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hssjString==null?"":row.hssjString)+'>'+(row.hssjString==null?"":row.hssjString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'pzr')>-1){
	            clumns.push({field : 'pzr',title : '批准人',width : 200,hidden:util.getArrayIndex(option.hidden,'pzr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzr==null?"":row.pzr)+'>'+(row.pzr==null?"":row.pzr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'badw')>-1){
	            clumns.push({field : 'badw',title : '办案单位',width : 200,hidden:util.getArrayIndex(option.hidden,'badw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.badw==null?"":row.badw)+'>'+(row.badw==null?"":row.badw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dcmj')>-1){
	            clumns.push({field : 'dcmj',title : '带出民警',width : 200,hidden:util.getArrayIndex(option.hidden,'dcmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dcmj==null?"":row.dcmj)+'>'+(row.dcmj==null?"":row.dcmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sjmj')>-1){
	            clumns.push({field : 'sjmj',title : '收监民警',width : 200,hidden:util.getArrayIndex(option.hidden,'sjmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjmj==null?"":row.sjmj)+'>'+(row.sjmj==null?"":row.sjmj)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'wczt')>-1){
	            clumns.push({field : 'wczt',title : '完成状态',width : 200,hidden:util.getArrayIndex(option.hidden,'wczt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wczt==null?"":row.wczt)+'>'+(row.wczt==null?"":row.wczt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'psbz')>-1){
	            clumns.push({field : 'psbz',title : '批示标志',width : 200,hidden:util.getArrayIndex(option.hidden,'psbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.psbz==null?"":row.psbz)+'>'+(row.psbz==null?"":row.psbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pastable')>-1){
	            clumns.push({field : 'pastable',title : '是否有效',width : 200,hidden:util.getArrayIndex(option.hidden,'pastable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pastable==null?"":row.pastable)+'>'+(row.pastable==null?"":row.pastable)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '存在状态(STATE)',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'tbjcqk')>-1){
	            clumns.push({field : 'tbjcqk',title : '体表检查情况',width : 200,hidden:util.getArrayIndex(option.hidden,'tbjcqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbjcqk==null?"":row.tbjcqk)+'>'+(row.tbjcqk==null?"":row.tbjcqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wjpjcqk')>-1){
	            clumns.push({field : 'wjpjcqk',title : '违禁品检查情况',width : 200,hidden:util.getArrayIndex(option.hidden,'wjpjcqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wjpjcqk==null?"":row.wjpjcqk)+'>'+(row.wjpjcqk==null?"":row.wjpjcqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbryj')>-1){
	            clumns.push({field : 'jbryj',title : '经办人意见',width : 200,hidden:util.getArrayIndex(option.hidden,'jbryj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbryj==null?"":row.jbryj)+'>'+(row.jbryj==null?"":row.jbryj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csdriver')>-1){
	            clumns.push({field : 'csdriver',title : '出所司机',width : 200,hidden:util.getArrayIndex(option.hidden,'csdriver')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csdriver==null?"":row.csdriver)+'>'+(row.csdriver==null?"":row.csdriver)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ndcssj')>-1){
	            clumns.push({field : 'ndcssj',title : '拟定出所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ndcssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ndcssj==null?"":row.ndcssj)+'>'+(row.ndcssj==null?"":row.ndcssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hsdriver')>-1){
	            clumns.push({field : 'hsdriver',title : '回所司机',width : 200,hidden:util.getArrayIndex(option.hidden,'hsdriver')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hsdriver==null?"":row.hsdriver)+'>'+(row.hsdriver==null?"":row.hsdriver)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csqx')>-1){
	            clumns.push({field : 'csqx',title : '出所去向',width : 200,hidden:util.getArrayIndex(option.hidden,'csqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csqx==null?"":row.csqx)+'>'+(row.csqx==null?"":row.csqx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sldyjnr')>-1){
	            clumns.push({field : 'sldyjnr',title : '所领导意见内容',width : 200,hidden:util.getArrayIndex(option.hidden,'sldyjnr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sldyjnr==null?"":row.sldyjnr)+'>'+(row.sldyjnr==null?"":row.sldyjnr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csjbrq')>-1){
	            clumns.push({field : 'csjbrq',title : '出所经办日期',width : 200,hidden:util.getArrayIndex(option.hidden,'csjbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csjbrq==null?"":row.csjbrq)+'>'+(row.csjbrq==null?"":row.csjbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hsjbrq')>-1){
	            clumns.push({field : 'hsjbrq',title : '回所经办日期',width : 200,hidden:util.getArrayIndex(option.hidden,'hsjbrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hsjbrq==null?"":row.hsjbrq)+'>'+(row.hsjbrq==null?"":row.hsjbrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'flwsh')>-1){
	            clumns.push({field : 'flwsh',title : '法律文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'flwsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.flwsh==null?"":row.flwsh)+'>'+(row.flwsh==null?"":row.flwsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbsj')>-1){
	            clumns.push({field : 'jbsj',title : '经办时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jbsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbsj==null?"":row.jbsj)+'>'+(row.jbsj==null?"":row.jbsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csqrr')>-1){
	            clumns.push({field : 'csqrr',title : '出所确认人',width : 200,hidden:util.getArrayIndex(option.hidden,'csqrr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csqrr==null?"":row.csqrr)+'>'+(row.csqrr==null?"":row.csqrr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hsajr')>-1){
	            clumns.push({field : 'hsajr',title : '回所安检人',width : 200,hidden:util.getArrayIndex(option.hidden,'hsajr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hsajr==null?"":row.hsajr)+'>'+(row.hsajr==null?"":row.hsajr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hsajsj')>-1){
	            clumns.push({field : 'hsajsj',title : '回所安检时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hsajsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hsajsj==null?"":row.hsajsj)+'>'+(row.hsajsj==null?"":row.hsajsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ajqkjl')>-1){
	            clumns.push({field : 'ajqkjl',title : '安检情况记录',width : 200,hidden:util.getArrayIndex(option.hidden,'ajqkjl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ajqkjl==null?"":row.ajqkjl)+'>'+(row.ajqkjl==null?"":row.ajqkjl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lsajr')>-1){
	            clumns.push({field : 'lsajr',title : '离所安检人',width : 200,hidden:util.getArrayIndex(option.hidden,'lsajr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsajr==null?"":row.lsajr)+'>'+(row.lsajr==null?"":row.lsajr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lsajsj')>-1){
	            clumns.push({field : 'lsajsj',title : '离所安检时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lsajsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsajsj==null?"":row.lsajsj)+'>'+(row.lsajsj==null?"":row.lsajsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lsajycqk')>-1){
	            clumns.push({field : 'lsajycqk',title : '离所安检异常情况',width : 200,hidden:util.getArrayIndex(option.hidden,'lsajycqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsajycqk==null?"":row.lsajycqk)+'>'+(row.lsajycqk==null?"":row.lsajycqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lsajjg')>-1){
	            clumns.push({field : 'lsajjg',title : '离所安检结果',width : 200,hidden:util.getArrayIndex(option.hidden,'lsajjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsajjg==null?"":row.lsajjg)+'>'+(row.lsajjg==null?"":row.lsajjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bbjlh')>-1){
	            clumns.push({field : 'bbjlh',title : '办案记录号',width : 200,hidden:util.getArrayIndex(option.hidden,'bbjlh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bbjlh==null?"":row.bbjlh)+'>'+(row.bbjlh==null?"":row.bbjlh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hsdjr')>-1){
	            clumns.push({field : 'hsdjr',title : '回所登记人',width : 200,hidden:util.getArrayIndex(option.hidden,'hsdjr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hsdjr==null?"":row.hsdjr)+'>'+(row.hsdjr==null?"":row.hsdjr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hsdjsj')>-1){
	            clumns.push({field : 'hsdjsj',title : '回所登记时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hsdjsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hsdjsj==null?"":row.hsdjsj)+'>'+(row.hsdjsj==null?"":row.hsdjsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lssj')>-1){
	            clumns.push({field : 'lssj',title : '离所时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lssj==null?"":row.lssj)+'>'+(row.lssj==null?"":row.lssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lsdjr')>-1){
	            clumns.push({field : 'lsdjr',title : '离所登记人',width : 200,hidden:util.getArrayIndex(option.hidden,'lsdjr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsdjr==null?"":row.lsdjr)+'>'+(row.lsdjr==null?"":row.lsdjr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lsdjsj')>-1){
	            clumns.push({field : 'lsdjsj',title : '离所登记时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lsdjsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lsdjsj==null?"":row.lsdjsj)+'>'+(row.lsdjsj==null?"":row.lsdjsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yjmj')>-1){
	            clumns.push({field : 'yjmj',title : '押解民警',width : 200,hidden:util.getArrayIndex(option.hidden,'yjmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yjmj==null?"":row.yjmj)+'>'+(row.yjmj==null?"":row.yjmj)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jbxx_ay')>-1){
	        	clumns.push({field : 'jbxx_ay',title : '案由',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxx_ay')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbxx_ay==null?"":row.jbxx_ay)+'>'+(row.jbxx_ay==null?"":row.jbxx_ay)+'</span>'}});
	        }
	        return clumns;
	    };
	    return main;
	});