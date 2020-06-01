/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Yq 数据列表
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
	            clumns.push({field : 'jsbh',title : '监所编号 ',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'xm')>-1){
				clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'jsh')>-1){
			    clumns.push({field : 'jsh',title : '监室号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsh==null?"":row.jsh)+'>'+(row.jsh==null?"":row.jsh)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'ay')>-1){
			    clumns.push({field : 'ay',title : '主要案由',width : 200,hidden:util.getArrayIndex(option.hidden,'ay')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ay==null?"":row.ay)+'>'+(row.ay==null?"":row.ay)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'ayString')>-1){
				clumns.push({field : 'ayString',title : '主要案由',width : 200,hidden:util.getArrayIndex(option.hidden,'ayString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ayString==null?"":row.ayString)+'>'+(row.ayString==null?"":row.ayString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'ygyqx')>-1){
	            clumns.push({field : 'ygyqx',title : '原关押期限',width : 200,hidden:util.getArrayIndex(option.hidden,'ygyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ygyqx==null?"":row.ygyqx)+'>'+(row.ygyqx==null?"":row.ygyqx)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'ygyqxString')>-1){
			    clumns.push({field : 'ygyqxString',title : '原关押期限',width : 200,hidden:util.getArrayIndex(option.hidden,'ygyqxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ygyqxString==null?"":row.ygyqxString)+'>'+(row.ygyqxString==null?"":row.ygyqxString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'xgyqx')>-1){
	            clumns.push({field : 'xgyqx',title : '现关押期限',width : 200,hidden:util.getArrayIndex(option.hidden,'xgyqx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xgyqx==null?"":row.xgyqx)+'>'+(row.xgyqx==null?"":row.xgyqx)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'xgyqxString')>-1){
			    clumns.push({field : 'xgyqxString',title : '现关押期限',width : 200,hidden:util.getArrayIndex(option.hidden,'xgyqxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xgyqxString==null?"":row.xgyqxString)+'>'+(row.xgyqxString==null?"":row.xgyqxString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'yqyy')>-1){
	            clumns.push({field : 'yqyy',title : '延期原因',width : 200,hidden:util.getArrayIndex(option.hidden,'yqyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yqyy==null?"":row.yqyy)+'>'+(row.yqyy==null?"":row.yqyy)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'yqyyString')>-1){
			    clumns.push({field : 'yqyyString',title : '延期原因',width : 200,hidden:util.getArrayIndex(option.hidden,'yqyyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yqyyString==null?"":row.yqyyString)+'>'+(row.yqyyString==null?"":row.yqyyString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'blr')>-1){
	            clumns.push({field : 'blr',title : '办理人',width : 200,hidden:util.getArrayIndex(option.hidden,'blr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blr==null?"":row.blr)+'>'+(row.blr==null?"":row.blr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blrdh')>-1){
	            clumns.push({field : 'blrdh',title : '办理人电话',width : 200,hidden:util.getArrayIndex(option.hidden,'blrdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blrdh==null?"":row.blrdh)+'>'+(row.blrdh==null?"":row.blrdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blrq')>-1){
	            clumns.push({field : 'blrq',title : '办理日期',width : 200,hidden:util.getArrayIndex(option.hidden,'blrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blrq==null?"":row.blrq)+'>'+(row.blrq==null?"":row.blrq)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'blrqString')>-1){
			    clumns.push({field : 'blrqString',title : '办理日期',width : 200,hidden:util.getArrayIndex(option.hidden,'blrqString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blrqString==null?"":row.blrqString)+'>'+(row.blrqString==null?"":row.blrqString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'flwsh')>-1){
	            clumns.push({field : 'flwsh',title : '法律文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'flwsh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.flwsh==null?"":row.flwsh)+'>'+(row.flwsh==null?"":row.flwsh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzr')>-1){
	            clumns.push({field : 'pzr',title : '批准人',width : 200,hidden:util.getArrayIndex(option.hidden,'pzr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzr==null?"":row.pzr)+'>'+(row.pzr==null?"":row.pzr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzrq')>-1){
	            clumns.push({field : 'pzrq',title : '批准日期',width : 200,hidden:util.getArrayIndex(option.hidden,'pzrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzrq==null?"":row.pzrq)+'>'+(row.pzrq==null?"":row.pzrq)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'pzrqString')>-1){
			    clumns.push({field : 'pzrqString',title : '批准日期',width : 200,hidden:util.getArrayIndex(option.hidden,'pzrqString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzrqString==null?"":row.pzrqString)+'>'+(row.pzrqString==null?"":row.pzrqString)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'pzdw')>-1){
	            clumns.push({field : 'pzdw',title : '批准单位',width : 200,hidden:util.getArrayIndex(option.hidden,'pzdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzdw==null?"":row.pzdw)+'>'+(row.pzdw==null?"":row.pzdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'pzdwString')>-1){
                clumns.push({field : 'pzdwString',title : '批准单位',width : 200,hidden:util.getArrayIndex(option.hidden,'pzdwString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzdwString==null?"":row.pzdwString)+'>'+(row.pzdwString==null?"":row.pzdwString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '状态(YWSTATE)',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'stateString')>-1){
                clumns.push({field : 'stateString',title : '状态(YWSTATE)',width : 200,hidden:util.getArrayIndex(option.hidden,'stateString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.stateString==null?"":row.stateString)+'>'+(row.stateString==null?"":row.stateString)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'wspzlx')>-1){
	            clumns.push({field : 'wspzlx',title : '文书凭证类型',width : 200,hidden:util.getArrayIndex(option.hidden,'wspzlx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wspzlx==null?"":row.wspzlx)+'>'+(row.wspzlx==null?"":row.wspzlx)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wssdrq')>-1){
	            clumns.push({field : 'wssdrq',title : '文书送达日期',width : 200,hidden:util.getArrayIndex(option.hidden,'wssdrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wssdrq==null?"":row.wssdrq)+'>'+(row.wssdrq==null?"":row.wssdrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'blrzjh')>-1){
	            clumns.push({field : 'blrzjh',title : '办理人证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'blrzjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.blrzjh==null?"":row.blrzjh)+'>'+(row.blrzjh==null?"":row.blrzjh)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});