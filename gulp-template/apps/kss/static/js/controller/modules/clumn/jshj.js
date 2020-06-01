/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jshj 数据列表
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
	        if(util.getArrayIndex(option.clumns,'xm')>-1){
                clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'xb')>-1){
                clumns.push({field : 'xb',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xb==null?"":row.xb)+'>'+(row.xb==null?"":row.xb)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'gx')>-1){
                clumns.push({field : 'gx',title : '关系',width : 200,hidden:util.getArrayIndex(option.hidden,'gx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gx==null?"":row.gx)+'>'+(row.gx==null?"":row.gx)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'snbh')>-1){
	            clumns.push({field : 'snbh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'snbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.snbh==null?"":row.snbh)+'>'+(row.snbh==null?"":row.snbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jszjh')>-1){
	            clumns.push({field : 'jszjh',title : '家属证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'jszjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jszjh==null?"":row.jszjh)+'>'+(row.jszjh==null?"":row.jszjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yyhjsj')>-1){
	            clumns.push({field : 'yyhjsj',title : '预约会见时间',width : 200,hidden:util.getArrayIndex(option.hidden,'yyhjsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yyhjsj==null?"":row.yyhjsj)+'>'+(row.yyhjsj==null?"":row.yyhjsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsh')>-1){
                clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'hjsj')>-1){
	            clumns.push({field : 'hjsj',title : '会见时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hjsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjsj==null?"":row.hjsj)+'>'+(row.hjsj==null?"":row.hjsj)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'hjsjString')>-1){
                clumns.push({field : 'hjsjString',title : '会见时间',width : 200,hidden:util.getArrayIndex(option.hidden,'hjsjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjsjString==null?"":row.hjsjString)+'>'+(row.hjsjString==null?"":row.hjsjString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'hjsjcd')>-1){
	            clumns.push({field : 'hjsjcd',title : '会见时间长度',width : 200,hidden:util.getArrayIndex(option.hidden,'hjsjcd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjsjcd==null?"":row.hjsjcd)+'>'+(row.hjsjcd==null?"":row.hjsjcd)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jssj')>-1){
	            clumns.push({field : 'jssj',title : '结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jssj==null?"":row.jssj)+'>'+(row.jssj==null?"":row.jssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jssjString')>-1){
                clumns.push({field : 'jssjString',title : '结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jssjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jssjString==null?"":row.jssjString)+'>'+(row.jssjString==null?"":row.jssjString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'ly')>-1){
	            clumns.push({field : 'ly',title : '会见事由',width : 200,hidden:util.getArrayIndex(option.hidden,'ly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ly==null?"":row.ly)+'>'+(row.ly==null?"":row.ly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lyString')>-1){
                clumns.push({field : 'lyString',title : '会见事由',width : 200,hidden:util.getArrayIndex(option.hidden,'lyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lyString==null?"":row.lyString)+'>'+(row.lyString==null?"":row.lyString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'rs')>-1){
	            clumns.push({field : 'rs',title : '人数',width : 200,hidden:util.getArrayIndex(option.hidden,'rs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rs==null?"":row.rs)+'>'+(row.rs==null?"":row.rs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dcmj')>-1){
	            clumns.push({field : 'dcmj',title : '带出民警',width : 200,hidden:util.getArrayIndex(option.hidden,'dcmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dcmj==null?"":row.dcmj)+'>'+(row.dcmj==null?"":row.dcmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sjmj')>-1){
	            clumns.push({field : 'sjmj',title : '收监民警',width : 200,hidden:util.getArrayIndex(option.hidden,'sjmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjmj==null?"":row.sjmj)+'>'+(row.sjmj==null?"":row.sjmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bllx')>-1){
	            clumns.push({field : 'bllx',title : '家属会见报审',width : 200,hidden:util.getArrayIndex(option.hidden,'bllx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bllx==null?"":row.bllx)+'>'+(row.bllx==null?"":row.bllx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bllxString')>-1){
                clumns.push({field : 'bllxString',title : '家属会见报审',width : 200,hidden:util.getArrayIndex(option.hidden,'bllxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bllxString==null?"":row.bllxString)+'>'+(row.bllxString==null?"":row.bllxString)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'cxly')>-1){
	            clumns.push({field : 'cxly',title : '撤销理由',width : 200,hidden:util.getArrayIndex(option.hidden,'cxly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cxly==null?"":row.cxly)+'>'+(row.cxly==null?"":row.cxly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cxr')>-1){
	            clumns.push({field : 'cxr',title : '撤销人',width : 200,hidden:util.getArrayIndex(option.hidden,'cxr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cxr==null?"":row.cxr)+'>'+(row.cxr==null?"":row.cxr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cxsj')>-1){
	            clumns.push({field : 'cxsj',title : '撤销时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cxsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cxsj==null?"":row.cxsj)+'>'+(row.cxsj==null?"":row.cxsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsbz')>-1){
	            clumns.push({field : 'jsbz',title : '及时标记',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbz==null?"":row.jsbz)+'>'+(row.jsbz==null?"":row.jsbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pastable')>-1){
	            clumns.push({field : 'pastable',title : '是否有效',width : 200,hidden:util.getArrayIndex(option.hidden,'pastable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pastable==null?"":row.pastable)+'>'+(row.pastable==null?"":row.pastable)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pastableString')>-1){
                clumns.push({field : 'pastableString',title : '是否有效',width : 200,hidden:util.getArrayIndex(option.hidden,'pastableString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pastableString==null?"":row.pastableString)+'>'+(row.pastableString==null?"":row.pastableString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'stateString')>-1){
                clumns.push({field : 'stateString',title : '删除状态',width : 200,hidden:util.getArrayIndex(option.hidden,'stateString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.stateString==null?"":row.stateString)+'>'+(row.stateString==null?"":row.stateString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注  ',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'psbz')>-1){
	            clumns.push({field : 'psbz',title : '批示标志',width : 200,hidden:util.getArrayIndex(option.hidden,'psbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.psbz==null?"":row.psbz)+'>'+(row.psbz==null?"":row.psbz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'psbzString')>-1){
                clumns.push({field : 'psbzString',title : '批示标志',width : 200,hidden:util.getArrayIndex(option.hidden,'psbzString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.psbzString==null?"":row.psbzString)+'>'+(row.psbzString==null?"":row.psbzString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'hjs')>-1){
	            clumns.push({field : 'hjs',title : '会见室',width : 200,hidden:util.getArrayIndex(option.hidden,'hjs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjs==null?"":row.hjs)+'>'+(row.hjs==null?"":row.hjs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tbjcjg')>-1){
	            clumns.push({field : 'tbjcjg',title : '体表检查结果',width : 200,hidden:util.getArrayIndex(option.hidden,'tbjcjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tbjcjg==null?"":row.tbjcjg)+'>'+(row.tbjcjg==null?"":row.tbjcjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wjpjcjg')>-1){
	            clumns.push({field : 'wjpjcjg',title : '违禁品检查结果',width : 200,hidden:util.getArrayIndex(option.hidden,'wjpjcjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wjpjcjg==null?"":row.wjpjcjg)+'>'+(row.wjpjcjg==null?"":row.wjpjcjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjlx')>-1){
	            clumns.push({field : 'zjlx',title : '证件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'zjlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjlx==null?"":row.zjlx)+'>'+(row.zjlx==null?"":row.zjlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjlxString')>-1){
                clumns.push({field : 'zjlxString',title : '证件类型',width : 200,hidden:util.getArrayIndex(option.hidden,'zjlxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjlxString==null?"":row.zjlxString)+'>'+(row.zjlxString==null?"":row.zjlxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'bhjrgx')>-1){
	            clumns.push({field : 'bhjrgx',title : '被会见人关系',width : 200,hidden:util.getArrayIndex(option.hidden,'bhjrgx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bhjrgx==null?"":row.bhjrgx)+'>'+(row.bhjrgx==null?"":row.bhjrgx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bhjrgxString')>-1){
                clumns.push({field : 'bhjrgxString',title : '被会见人关系',width : 200,hidden:util.getArrayIndex(option.hidden,'bhjrgxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bhjrgxString==null?"":row.bhjrgxString)+'>'+(row.bhjrgxString==null?"":row.bhjrgxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'lxfs')>-1){
	            clumns.push({field : 'lxfs',title : '联系方式',width : 200,hidden:util.getArrayIndex(option.hidden,'lxfs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxfs==null?"":row.lxfs)+'>'+(row.lxfs==null?"":row.lxfs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsxm')>-1){
                clumns.push({field : 'jsxm',title : '姓名（家属）',width : 200,hidden:util.getArrayIndex(option.hidden,'jsxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsxm==null?"":row.jsxm)+'>'+(row.jsxm==null?"":row.jsxm)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'detfrxm')>-1){
	            clumns.push({field : 'detfrxm',title : '第二探访人姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'detfrxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.detfrxm==null?"":row.detfrxm)+'>'+(row.detfrxm==null?"":row.detfrxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'detfrgx')>-1){
	            clumns.push({field : 'detfrgx',title : '第二探访人关系',width : 200,hidden:util.getArrayIndex(option.hidden,'detfrgx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.detfrgx==null?"":row.detfrgx)+'>'+(row.detfrgx==null?"":row.detfrgx)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'detfrgxString')>-1){
                clumns.push({field : 'detfrgxString',title : '第二探访人关系',width : 200,hidden:util.getArrayIndex(option.hidden,'detfrgxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.detfrgxString==null?"":row.detfrgxString)+'>'+(row.detfrgxString==null?"":row.detfrgxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'detfrsfsw')>-1){
	            clumns.push({field : 'detfrsfsw',title : '第二探访人是否涉维',width : 200,hidden:util.getArrayIndex(option.hidden,'detfrsfsw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.detfrsfsw==null?"":row.detfrsfsw)+'>'+(row.detfrsfsw==null?"":row.detfrsfsw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dstfrxm')>-1){
	            clumns.push({field : 'dstfrxm',title : '第三探访人姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'dstfrxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dstfrxm==null?"":row.dstfrxm)+'>'+(row.dstfrxm==null?"":row.dstfrxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dstfrgx')>-1){
	            clumns.push({field : 'dstfrgx',title : '第三探访人关系',width : 200,hidden:util.getArrayIndex(option.hidden,'dstfrgx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dstfrgx==null?"":row.dstfrgx)+'>'+(row.dstfrgx==null?"":row.dstfrgx)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'dstfrgxString')>-1){
                clumns.push({field : 'dstfrgxString',title : '第三探访人关系',width : 200,hidden:util.getArrayIndex(option.hidden,'dstfrgxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dstfrgxString==null?"":row.dstfrgxString)+'>'+(row.dstfrgxString==null?"":row.dstfrgxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'dstfrsfsw')>-1){
	            clumns.push({field : 'dstfrsfsw',title : '第三探访人是否涉维',width : 200,hidden:util.getArrayIndex(option.hidden,'dstfrsfsw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dstfrsfsw==null?"":row.dstfrsfsw)+'>'+(row.dstfrsfsw==null?"":row.dstfrsfsw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tfrs')>-1){
	            clumns.push({field : 'tfrs',title : '探访人数',width : 200,hidden:util.getArrayIndex(option.hidden,'tfrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tfrs==null?"":row.tfrs)+'>'+(row.tfrs==null?"":row.tfrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'badwyj')>-1){
	            clumns.push({field : 'badwyj',title : '办案单位意见',width : 200,hidden:util.getArrayIndex(option.hidden,'badwyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.badwyj==null?"":row.badwyj)+'>'+(row.badwyj==null?"":row.badwyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zxtzssdsj')>-1){
	            clumns.push({field : 'zxtzssdsj',title : '执行通知书送达时间',width : 200,hidden:util.getArrayIndex(option.hidden,'zxtzssdsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zxtzssdsj==null?"":row.zxtzssdsj)+'>'+(row.zxtzssdsj==null?"":row.zxtzssdsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cbjcjg')>-1){
	            clumns.push({field : 'cbjcjg',title : '初步检查结果',width : 200,hidden:util.getArrayIndex(option.hidden,'cbjcjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cbjcjg==null?"":row.cbjcjg)+'>'+(row.cbjcjg==null?"":row.cbjcjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcr')>-1){
	            clumns.push({field : 'jcr',title : '检查人',width : 200,hidden:util.getArrayIndex(option.hidden,'jcr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcr==null?"":row.jcr)+'>'+(row.jcr==null?"":row.jcr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcsj')>-1){
	            clumns.push({field : 'jcsj',title : '检查时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jcsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcsj==null?"":row.jcsj)+'>'+(row.jcsj==null?"":row.jcsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ycqksm')>-1){
	            clumns.push({field : 'ycqksm',title : '异常情况说明',width : 200,hidden:util.getArrayIndex(option.hidden,'ycqksm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ycqksm==null?"":row.ycqksm)+'>'+(row.ycqksm==null?"":row.ycqksm)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'ay')>-1){
                clumns.push({field : 'ay',title : '主要案由',width : 200,hidden:util.getArrayIndex(option.hidden,'ay')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ay==null?"":row.ay)+'>'+(row.ay==null?"":row.ay)+'</span>'}});
            }
            if(util.getArrayIndex(option.clumns,'ayString')>-1){
                clumns.push({field : 'ayString',title : '涉嫌罪名',width : 200,hidden:util.getArrayIndex(option.hidden,'ayString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ayString==null?"":row.ayString)+'>'+(row.ayString==null?"":row.ayString)+'</span>'}});
            }
	        
	        return clumns;
	    };
	    return main;
	});