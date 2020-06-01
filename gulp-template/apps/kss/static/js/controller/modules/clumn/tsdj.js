/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Tsdj 数据列表
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
			    clumns.push({field : 'snbh',title : '所内编号',width : 200,hidden:util.getArrayIndex(option.hidden,'snbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.snbh==null?"":row.snbh)+'>'+(row.snbh==null?"":row.snbh)+'</span>'}});
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
			if(util.getArrayIndex(option.clumns,'jsh')>-1){
			    clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'csrq')>-1){
                clumns.push({field : 'csrq',title : '出生日期',width : 200,hidden:util.getArrayIndex(option.hidden,'csrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csrq==null?"":row.csrq)+'>'+(row.csrq==null?"":row.csrq)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dw')>-1){
	            clumns.push({field : 'dw',title : '办案机关',width : 200,hidden:util.getArrayIndex(option.hidden,'dw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dw==null?"":row.dw)+'>'+(row.dw==null?"":row.dw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'baryy')>-1){
	            clumns.push({field : 'baryy',title : '办案人员姓名1',width : 200,hidden:util.getArrayIndex(option.hidden,'baryy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.baryy==null?"":row.baryy)+'>'+(row.baryy==null?"":row.baryy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'barye')>-1){
	            clumns.push({field : 'barye',title : '办案人员姓名2',width : 200,hidden:util.getArrayIndex(option.hidden,'barye')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.barye==null?"":row.barye)+'>'+(row.barye==null?"":row.barye)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjh1')>-1){
	            clumns.push({field : 'zjh1',title : '办案人证件号1',width : 200,hidden:util.getArrayIndex(option.hidden,'zjh1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjh1==null?"":row.zjh1)+'>'+(row.zjh1==null?"":row.zjh1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjh2')>-1){
	            clumns.push({field : 'zjh2',title : '办案人证件号2',width : 200,hidden:util.getArrayIndex(option.hidden,'zjh2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjh2==null?"":row.zjh2)+'>'+(row.zjh2==null?"":row.zjh2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qtbar')>-1){
	            clumns.push({field : 'qtbar',title : '其他办案人',width : 200,hidden:util.getArrayIndex(option.hidden,'qtbar')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qtbar==null?"":row.qtbar)+'>'+(row.qtbar==null?"":row.qtbar)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qtzjh')>-1){
	            clumns.push({field : 'qtzjh',title : '其他办案人证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'qtzjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qtzjh==null?"":row.qtzjh)+'>'+(row.qtzjh==null?"":row.qtzjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wcnjhr')>-1){
	            clumns.push({field : 'wcnjhr',title : '未成年人监护人',width : 200,hidden:util.getArrayIndex(option.hidden,'wcnjhr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wcnjhr==null?"":row.wcnjhr)+'>'+(row.wcnjhr==null?"":row.wcnjhr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wcndlr')>-1){
	            clumns.push({field : 'wcndlr',title : '未成年人代理人',width : 200,hidden:util.getArrayIndex(option.hidden,'wcndlr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wcndlr==null?"":row.wcndlr)+'>'+(row.wcndlr==null?"":row.wcndlr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'kssj')>-1){
	            clumns.push({field : 'kssj',title : '开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'kssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kssj==null?"":row.kssj)+'>'+(row.kssj==null?"":row.kssj)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'kssjString')>-1){
			    clumns.push({field : 'kssjString',title : '开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'kssjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kssjString==null?"":row.kssjString)+'>'+(row.kssjString==null?"":row.kssjString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'jssj')>-1){
	            clumns.push({field : 'jssj',title : '结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jssj==null?"":row.jssj)+'>'+(row.jssj==null?"":row.jssj)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'jssjString')>-1){
			    clumns.push({field : 'jssjString',title : '结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jssjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jssjString==null?"":row.jssjString)+'>'+(row.jssjString==null?"":row.jssjString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'tszbr')>-1){
	            clumns.push({field : 'tszbr',title : '监区值班民警',width : 200,hidden:util.getArrayIndex(option.hidden,'tszbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tszbr==null?"":row.tszbr)+'>'+(row.tszbr==null?"":row.tszbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dcmj')>-1){
	            clumns.push({field : 'dcmj',title : '带出民警',width : 200,hidden:util.getArrayIndex(option.hidden,'dcmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dcmj==null?"":row.dcmj)+'>'+(row.dcmj==null?"":row.dcmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsr')>-1){
	            clumns.push({field : 'jsr',title : '收监民警',width : 200,hidden:util.getArrayIndex(option.hidden,'jsr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsr==null?"":row.jsr)+'>'+(row.jsr==null?"":row.jsr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywshwjwpqk')>-1){
	            clumns.push({field : 'ywshwjwpqk',title : '有无伤痕及违禁物品情况',width : 200,hidden:util.getArrayIndex(option.hidden,'ywshwjwpqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywshwjwpqk==null?"":row.ywshwjwpqk)+'>'+(row.ywshwjwpqk==null?"":row.ywshwjwpqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yccon')>-1){
	            clumns.push({field : 'yccon',title : '抄身检查情况说明',width : 200,hidden:util.getArrayIndex(option.hidden,'yccon')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yccon==null?"":row.yccon)+'>'+(row.yccon==null?"":row.yccon)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'flag')>-1){
	            clumns.push({field : 'flag',title : '完成状态',width : 200,hidden:util.getArrayIndex(option.hidden,'flag')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.flag==null?"":row.flag)+'>'+(row.flag==null?"":row.flag)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pastable')>-1){
	            clumns.push({field : 'pastable',title : '是否有效',width : 200,hidden:util.getArrayIndex(option.hidden,'pastable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pastable==null?"":row.pastable)+'>'+(row.pastable==null?"":row.pastable)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bllx')>-1){
	            clumns.push({field : 'bllx',title : '办理类型',width : 200,hidden:util.getArrayIndex(option.hidden,'bllx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bllx==null?"":row.bllx)+'>'+(row.bllx==null?"":row.bllx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sjzlJsbz')>-1){
	            clumns.push({field : 'sjzlJsbz',title : '及时标记',width : 200,hidden:util.getArrayIndex(option.hidden,'sjzlJsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjzlJsbz==null?"":row.sjzlJsbz)+'>'+(row.sjzlJsbz==null?"":row.sjzlJsbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程id',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tss')>-1){
	            clumns.push({field : 'tss',title : '提讯地点',width : 200,hidden:util.getArrayIndex(option.hidden,'tss')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tss==null?"":row.tss)+'>'+(row.tss==null?"":row.tss)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'tsdw')>-1){
                clumns.push({field : 'tsdw',title : '提讯单位',width : 200,hidden:util.getArrayIndex(option.hidden,'tsdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tsdj_dw==null?"":row.ldpsxx.tsdj_dw)+'>'+(row.ldpsxx.tsdj_dw==null?"":row.ldpsxx.tsdj_dw)+'</span>'}});
            }
             if(util.getArrayIndex(option.clumns,'tjry')>-1){
                clumns.push({field : 'tjry',title : '提讯人员',width : 200,hidden:util.getArrayIndex(option.hidden,'tjry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tsdj_lfrxm==null?"":row.ldpsxx.tsdj_lfrxm)+'>'+(row.ldpsxx.tsdj_lfrxm==null?"":row.ldpsxx.tsdj_lfrxm)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'tsry')>-1){
                clumns.push({field : 'tsry',title : '提审人员',width : 200,hidden:util.getArrayIndex(option.hidden,'tsry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lfrxm==null?"":row.lfrxm)+'>'+(row.lfrxm==null?"":row.lfrxm)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'dgnxwsycqk')>-1){
	            clumns.push({field : 'dgnxwsycqk',title : 'dgnxwsycqk',width : 200,hidden:util.getArrayIndex(option.hidden,'dgnxwsycqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dgnxwsycqk==null?"":row.dgnxwsycqk)+'>'+(row.dgnxwsycqk==null?"":row.dgnxwsycqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '存在状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'txsy')>-1){
	            clumns.push({field : 'txsy',title : '提讯事由',width : 200,hidden:util.getArrayIndex(option.hidden,'txsy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tsdj_txsy==null?"":row.ldpsxx.tsdj_txsy)+'>'+(row.ldpsxx.tsdj_txsy==null?"":row.ldpsxx.tsdj_txsy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'txlx')>-1){
	            clumns.push({field : 'txlx',title : '提讯类型',width : 200,hidden:util.getArrayIndex(option.hidden,'txlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.txlx==null?"":row.txlx)+'>'+(row.txlx==null?"":row.txlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcr')>-1){
	            clumns.push({field : 'jcr',title : '检查人',width : 200,hidden:util.getArrayIndex(option.hidden,'jcr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcr==null?"":row.jcr)+'>'+(row.jcr==null?"":row.jcr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcsj')>-1){
	            clumns.push({field : 'jcsj',title : '检查时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jcsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcsj==null?"":row.jcsj)+'>'+(row.jcsj==null?"":row.jcsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcjg')>-1){
	            clumns.push({field : 'jcjg',title : '检查结果',width : 200,hidden:util.getArrayIndex(option.hidden,'jcjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcjg==null?"":row.jcjg)+'>'+(row.jcjg==null?"":row.jcjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wjwpdj')>-1){
	            clumns.push({field : 'wjwpdj',title : '违禁物品登记',width : 200,hidden:util.getArrayIndex(option.hidden,'wjwpdj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wjwpdj==null?"":row.wjwpdj)+'>'+(row.wjwpdj==null?"":row.wjwpdj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'kysqdj')>-1){
	            clumns.push({field : 'kysqdj',title : '可疑伤情登记',width : 200,hidden:util.getArrayIndex(option.hidden,'kysqdj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kysqdj==null?"":row.kysqdj)+'>'+(row.kysqdj==null?"":row.kysqdj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zbmj')>-1){
	            clumns.push({field : 'zbmj',title : '值班民警',width : 200,hidden:util.getArrayIndex(option.hidden,'zbmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zbmj==null?"":row.zbmj)+'>'+(row.zbmj==null?"":row.zbmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'djsj')>-1){
	            clumns.push({field : 'djsj',title : '登记时间',width : 200,hidden:util.getArrayIndex(option.hidden,'djsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.djsj==null?"":row.djsj)+'>'+(row.djsj==null?"":row.djsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'txrq')>-1){
	            clumns.push({field : 'txrq',title : '提讯日期',width : 200,hidden:util.getArrayIndex(option.hidden,'txrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tsdj_txrq==null?"":row.ldpsxx.tsdj_txrq)+'>'+(row.ldpsxx.tsdj_txrq==null?"":row.ldpsxx.tsdj_txrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lfrzjh')>-1){
	            clumns.push({field : 'lfrzjh',title : '来访人证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'lfrzjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lfrzjh==null?"":row.lfrzjh)+'>'+(row.lfrzjh==null?"":row.lfrzjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lfrpzh')>-1){
	            clumns.push({field : 'lfrpzh',title : '来访人凭证文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'lfrpzh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lfrpzh==null?"":row.lfrpzh)+'>'+(row.lfrpzh==null?"":row.lfrpzh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lfsj')>-1){
	            clumns.push({field : 'lfsj',title : '来访时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lfsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lfsj==null?"":row.lfsj)+'>'+(row.lfsj==null?"":row.lfsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxdh')>-1){
	            clumns.push({field : 'lxdh',title : '联系电话',width : 200,hidden:util.getArrayIndex(option.hidden,'lxdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxdh==null?"":row.lxdh)+'>'+(row.lxdh==null?"":row.lxdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lfrxm')>-1){
	            clumns.push({field : 'lfrxm',title : '来访人姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'lfrxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lfrxm==null?"":row.lfrxm)+'>'+(row.lfrxm==null?"":row.lfrxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'txry')>-1){
	            clumns.push({field : 'txry',title : '退讯人员',width : 200,hidden:util.getArrayIndex(option.hidden,'txry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.txry==null?"":row.txry)+'>'+(row.txry==null?"":row.txry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'txsj')>-1){
	            clumns.push({field : 'txsj',title : '退讯时间',width : 200,hidden:util.getArrayIndex(option.hidden,'txsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.txsj==null?"":row.txsj)+'>'+(row.txsj==null?"":row.txsj)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});