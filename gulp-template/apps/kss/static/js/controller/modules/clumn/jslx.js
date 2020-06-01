/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jslx 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbxxXm')>-1){
				clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxxXm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jbxxJsh')>-1){
				clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxxJsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jbxxBm')>-1){
				clumns.push({field : 'bm',title : '别名',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxxBm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bm==null?"":row.bm)+'>'+(row.bm==null?"":row.bm)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jbxxXb')>-1){
				clumns.push({field : 'xbString',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'jbxxXb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xbString==null?"":row.xbString)+'>'+(row.xbString==null?"":row.xbString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'sqr')>-1){
	            clumns.push({field : 'sqr',title : '申请人',width : 200,hidden:util.getArrayIndex(option.hidden,'sqr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.sqr==null?"":row.ldpsxx.sqr)+'>'+(row.ldpsxx.sqr==null?"":row.ldpsxx.sqr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sqsj')>-1){
	            clumns.push({field : 'sqsj',title : '申请时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sqsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqsj==null?"":row.sqsj)+'>'+(row.sqsj==null?"":row.sqsj)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'sqsjString')>-1){
			    clumns.push({field : 'sqsjString',title : '申请时间',width : 200,hidden:util.getArrayIndex(option.hidden,'sqsjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqsjString==null?"":row.sqsjString)+'>'+(row.sqsjString==null?"":row.sqsjString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'lyjsx')>-1){
	            clumns.push({field : 'sqyy',title : '理由及事项',width : 200,hidden:util.getArrayIndex(option.hidden,'lyjsx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.sqyy==null?"":row.ldpsxx.sqyy)+'>'+(row.ldpsxx.sqyy==null?"":row.ldpsxx.sqyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxr')>-1){
	            clumns.push({field : 'lxr',title : '联系人',width : 200,hidden:util.getArrayIndex(option.hidden,'lxr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxr==null?"":row.lxr)+'>'+(row.lxr==null?"":row.lxr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxsj')>-1){
	            clumns.push({field : 'lxsj',title : '联系时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lxsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxsj==null?"":row.lxsj)+'>'+(row.lxsj==null?"":row.lxsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxqk')>-1){
	            clumns.push({field : 'lxqk',title : '联系情况',width : 200,hidden:util.getArrayIndex(option.hidden,'lxqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxqk==null?"":row.lxqk)+'>'+(row.lxqk==null?"":row.lxqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxzt')>-1){
	            clumns.push({field : 'lxzt',title : '联系状态',width : 200,hidden:util.getArrayIndex(option.hidden,'lxzt')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxzt==null?"":row.lxzt)+'>'+(row.lxzt==null?"":row.lxzt)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rsqsfyjb')>-1){
	            clumns.push({field : 'rsqsfyjb',title : '入所前是否有疾病',width : 200,hidden:util.getArrayIndex(option.hidden,'rsqsfyjb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsqsfyjb==null?"":row.rsqsfyjb)+'>'+(row.rsqsfyjb==null?"":row.rsqsfyjb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rsqjbxxqk')>-1){
	            clumns.push({field : 'rsqjbxxqk',title : '入所前疾病详细情况',width : 200,hidden:util.getArrayIndex(option.hidden,'rsqjbxxqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsqjbxxqk==null?"":row.rsqjbxxqk)+'>'+(row.rsqjbxxqk==null?"":row.rsqjbxxqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfyjzbs')>-1){
	            clumns.push({field : 'sfyjzbs',title : '是否有家族病史',width : 200,hidden:util.getArrayIndex(option.hidden,'sfyjzbs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfyjzbs==null?"":row.sfyjzbs)+'>'+(row.sfyjzbs==null?"":row.sfyjzbs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jzbsxxqk')>-1){
	            clumns.push({field : 'jzbsxxqk',title : '家族病史详细情况',width : 200,hidden:util.getArrayIndex(option.hidden,'jzbsxxqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jzbsxxqk==null?"":row.jzbsxxqk)+'>'+(row.jzbsxxqk==null?"":row.jzbsxxqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sfcqfyhfyzmyw')>-1){
	            clumns.push({field : 'sfcqfyhfyzmyw',title : '是否长期服药或服用专门药物',width : 200,hidden:util.getArrayIndex(option.hidden,'sfcqfyhfyzmyw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfcqfyhfyzmyw==null?"":row.sfcqfyhfyzmyw)+'>'+(row.sfcqfyhfyzmyw==null?"":row.sfcqfyhfyzmyw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cqfyhfyzmywxxqk')>-1){
	            clumns.push({field : 'cqfyhfyzmywxxqk',title : '长期服药或服用专门药物详细情况',width : 200,hidden:util.getArrayIndex(option.hidden,'cqfyhfyzmywxxqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cqfyhfyzmywxxqk==null?"":row.cqfyhfyzmywxxqk)+'>'+(row.cqfyhfyzmywxxqk==null?"":row.cqfyhfyzmywxxqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzxm')>-1){
	            clumns.push({field : 'zdzxm',title : '中队长姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzxm==null?"":row.zdzxm)+'>'+(row.zdzxm==null?"":row.zdzxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzyj')>-1){
	            clumns.push({field : 'zdzyj',title : '中队长意见',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzyj==null?"":row.zdzyj)+'>'+(row.zdzyj==null?"":row.zdzyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzpssj')>-1){
	            clumns.push({field : 'zdzpssj',title : '中队长审批时间',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzpssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzpssj==null?"":row.zdzpssj)+'>'+(row.zdzpssj==null?"":row.zdzpssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldxm')>-1){
	            clumns.push({field : 'ldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.sldxm==null?"":row.ldpsxx.sldxm)+'>'+(row.ldpsxx.sldxm==null?"":row.ldpsxx.sldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldyj')>-1){
	            clumns.push({field : 'ldyj',title : '领导意见',width : 200,hidden:util.getArrayIndex(option.hidden,'ldyj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.sldyj==null?"":row.ldpsxx.sldyj)+'>'+(row.ldpsxx.sldyj==null?"":row.ldpsxx.sldyj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldpssj')>-1){
	            clumns.push({field : 'ldpssj',title : '领导批示时间',width : 200,hidden:util.getArrayIndex(option.hidden,'ldpssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpssj==null?"":row.ldpssj)+'>'+(row.ldpssj==null?"":row.ldpssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'psbz')>-1){
	            clumns.push({field : 'psbz',title : '批示标志',width : 200,hidden:util.getArrayIndex(option.hidden,'psbz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.psbz==null?"":row.psbz)+'>'+(row.psbz==null?"":row.psbz)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pastable')>-1){
	            clumns.push({field : 'pastable',title : '是否有效',width : 200,hidden:util.getArrayIndex(option.hidden,'pastable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pastable==null?"":row.pastable)+'>'+(row.pastable==null?"":row.pastable)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsxm1')>-1){
	            clumns.push({field : 'jsxm1',title : '家属姓名1',width : 200,hidden:util.getArrayIndex(option.hidden,'jsxm1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsxm1==null?"":row.jsxm1)+'>'+(row.jsxm1==null?"":row.jsxm1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gx1')>-1){
	            clumns.push({field : 'gx1',title : '关系1(GX)',width : 200,hidden:util.getArrayIndex(option.hidden,'gx1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gx1==null?"":row.gx1)+'>'+(row.gx1==null?"":row.gx1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jslxdh1')>-1){
	            clumns.push({field : 'jslxdh1',title : '家属联系电话1',width : 200,hidden:util.getArrayIndex(option.hidden,'jslxdh1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jslxdh1==null?"":row.jslxdh1)+'>'+(row.jslxdh1==null?"":row.jslxdh1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsxm2')>-1){
	            clumns.push({field : 'jsxm2',title : '家属姓名2',width : 200,hidden:util.getArrayIndex(option.hidden,'jsxm2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsxm2==null?"":row.jsxm2)+'>'+(row.jsxm2==null?"":row.jsxm2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gx2')>-1){
	            clumns.push({field : 'gx2',title : '关系2(GX)',width : 200,hidden:util.getArrayIndex(option.hidden,'gx2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gx2==null?"":row.gx2)+'>'+(row.gx2==null?"":row.gx2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jslxdh2')>-1){
	            clumns.push({field : 'jslxdh2',title : '家属联系电话2',width : 200,hidden:util.getArrayIndex(option.hidden,'jslxdh2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jslxdh2==null?"":row.jslxdh2)+'>'+(row.jslxdh2==null?"":row.jslxdh2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsxm3')>-1){
	            clumns.push({field : 'jsxm3',title : '家属姓名3',width : 200,hidden:util.getArrayIndex(option.hidden,'jsxm3')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsxm3==null?"":row.jsxm3)+'>'+(row.jsxm3==null?"":row.jsxm3)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gx3')>-1){
	            clumns.push({field : 'gx3',title : '关系3',width : 200,hidden:util.getArrayIndex(option.hidden,'gx3')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gx3==null?"":row.gx3)+'>'+(row.gx3==null?"":row.gx3)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jslxdh3')>-1){
	            clumns.push({field : 'jslxdh3',title : '家属联系电话3',width : 200,hidden:util.getArrayIndex(option.hidden,'jslxdh3')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jslxdh3==null?"":row.jslxdh3)+'>'+(row.jslxdh3==null?"":row.jslxdh3)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});
