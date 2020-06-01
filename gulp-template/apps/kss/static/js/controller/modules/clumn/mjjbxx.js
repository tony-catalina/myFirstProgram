/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Mjjbxx 数据列表
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
	        if(util.getArrayIndex(option.clumns,'jh')>-1){
	            clumns.push({field : 'jh',title : '警号',width : 200,hidden:util.getArrayIndex(option.hidden,'jh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jh==null?"":row.jh)+'>'+(row.jh==null?"":row.jh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xm')>-1){
	            clumns.push({field : 'xm',title : '姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'xm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xm==null?"":row.xm)+'>'+(row.xm==null?"":row.xm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xb')>-1){
	            clumns.push({field : 'xbString',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xbString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xbString==null?"":row.xbString)+'>'+(row.xbString==null?"":row.xbString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mz')>-1){
	            clumns.push({field : 'mzString',title : '民族',width : 200,hidden:util.getArrayIndex(option.hidden,'mzString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mzString==null?"":row.mzString)+'>'+(row.mzString==null?"":row.mzString)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'xbString')>-1){
	            clumns.push({field : 'xbString',title : '性别',width : 200,hidden:util.getArrayIndex(option.hidden,'xbString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xbString==null?"":row.xbString)+'>'+(row.xbString==null?"":row.xbString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mzString')>-1){
	            clumns.push({field : 'mzString',title : '民族',width : 200,hidden:util.getArrayIndex(option.hidden,'mzString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mzString==null?"":row.mzString)+'>'+(row.mzString==null?"":row.mzString)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'csny')>-1){
	            clumns.push({field : 'csny',title : '出生年月',width : 200,hidden:util.getArrayIndex(option.hidden,'csny')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csny==null?"":row.csny)+'>'+(row.csny==null?"":row.csny)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jx')>-1){
	            clumns.push({field : 'jx',title : '警衔',width : 200,hidden:util.getArrayIndex(option.hidden,'jx')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jx==null?"":row.jx)+'>'+(row.jx==null?"":row.jx)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'jxString')>-1){
                clumns.push({field : 'jxString',title : '警衔',width : 200,hidden:util.getArrayIndex(option.hidden,'jxString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jxString==null?"":row.jxString)+'>'+(row.jxString==null?"":row.jxString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'xl')>-1){
	            clumns.push({field : 'xl',title : '学历',width : 200,hidden:util.getArrayIndex(option.hidden,'xl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xl==null?"":row.xl)+'>'+(row.xl==null?"":row.xl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xlString')>-1){
                clumns.push({field : 'xlString',title : '学历',width : 200,hidden:util.getArrayIndex(option.hidden,'xlString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xlString==null?"":row.xlString)+'>'+(row.xlString==null?"":row.xlString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'zzmm')>-1){
	            clumns.push({field : 'zzmm',title : '政治面貌',width : 200,hidden:util.getArrayIndex(option.hidden,'zzmm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzmm==null?"":row.zzmm)+'>'+(row.zzmm==null?"":row.zzmm)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'zzmmString')>-1){
                clumns.push({field : 'zzmmString',title : '政治面貌',width : 200,hidden:util.getArrayIndex(option.hidden,'zzmmString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zzmmString==null?"":row.zzmmString)+'>'+(row.zzmmString==null?"":row.zzmmString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'zpurl')>-1){
	            clumns.push({field : 'zpurl',title : '照片url',width : 200,hidden:util.getArrayIndex(option.hidden,'zpurl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zpurl==null?"":row.zpurl)+'>'+(row.zpurl==null?"":row.zpurl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cjgmgzsj')>-1){
	            clumns.push({field : 'cjgmgzsj',title : '参加革命时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cjgmgzsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cjgmgzsj==null?"":row.cjgmgzsj)+'>'+(row.cjgmgzsj==null?"":row.cjgmgzsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hyzk')>-1){
	            clumns.push({field : 'hyzk',title : '婚姻状况',width : 200,hidden:util.getArrayIndex(option.hidden,'hyzk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hyzk==null?"":row.hyzk)+'>'+(row.hyzk==null?"":row.hyzk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'hyzkString')>-1){
                clumns.push({field : 'hyzkString',title : '婚姻状况',width : 200,hidden:util.getArrayIndex(option.hidden,'hyzkString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hyzkString==null?"":row.hyzkString)+'>'+(row.hyzkString==null?"":row.hyzkString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'jtzz')>-1){
	            clumns.push({field : 'jtzz',title : '家庭住址',width : 200,hidden:util.getArrayIndex(option.hidden,'jtzz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jtzz==null?"":row.jtzz)+'>'+(row.jtzz==null?"":row.jtzz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cjgzsj')>-1){
	            clumns.push({field : 'cjgzsj',title : '参加工作时间',width : 200,hidden:util.getArrayIndex(option.hidden,'cjgzsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cjgzsj==null?"":row.cjgzsj)+'>'+(row.cjgzsj==null?"":row.cjgzsj)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'xlzxs')>-1){
				clumns.push({field : 'xlzxs',title : '是否有心理咨询师资格',width : 200,hidden:util.getArrayIndex(option.hidden,'xlzxs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xlzxs==null?"":row.xlzxs)+'>'+(row.xlzxs==null?"":row.xlzxs)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'xlzxsString')>-1){
                clumns.push({field : 'xlzxsString',title : '是否有心理咨询师资格',width : 200,hidden:util.getArrayIndex(option.hidden,'xlzxsString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xlzxsString==null?"":row.xlzxsString)+'>'+(row.xlzxsString==null?"":row.xlzxsString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'bm')>-1){
	            clumns.push({field : 'bm',title : '部门',width : 200,hidden:util.getArrayIndex(option.hidden,'bm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bm==null?"":row.bm)+'>'+(row.bm==null?"":row.bm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bmzw')>-1){
	            clumns.push({field : 'bmzw',title : '职位',width : 200,hidden:util.getArrayIndex(option.hidden,'bmzw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bmzw==null?"":row.bmzw)+'>'+(row.bmzw==null?"":row.bmzw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gbzwjb')>-1){
	            clumns.push({field : 'gbzwjb',title : '职位级别',width : 200,hidden:util.getArrayIndex(option.hidden,'gbzwjb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gbzwjb==null?"":row.gbzwjb)+'>'+(row.gbzwjb==null?"":row.gbzwjb)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'gbzwjbString')>-1){
                clumns.push({field : 'gbzwjbString',title : '职位级别',width : 200,hidden:util.getArrayIndex(option.hidden,'gbzwjbString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gbzwjbString==null?"":row.gbzwjbString)+'>'+(row.gbzwjbString==null?"":row.gbzwjbString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'lxdh')>-1){
	            clumns.push({field : 'lxdh',title : '联系电话',width : 200,hidden:util.getArrayIndex(option.hidden,'lxdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lxdh==null?"":row.lxdh)+'>'+(row.lxdh==null?"":row.lxdh)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'sfzh')>-1){
				clumns.push({field : 'sfzh',title : '身份证号',width : 200,hidden:util.getArrayIndex(option.hidden,'sfzh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sfzh==null?"":row.sfzh)+'>'+(row.sfzh==null?"":row.sfzh)+'</span>'}});
			}
	        if(util.getArrayIndex(option.clumns,'sjh')>-1){
	            clumns.push({field : 'sjh',title : '手机号',width : 200,hidden:util.getArrayIndex(option.hidden,'sjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sjh==null?"":row.sjh)+'>'+(row.sjh==null?"":row.sjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'flag')>-1){
	            clumns.push({field : 'flag',title : '是否在职',width : 200,hidden:util.getArrayIndex(option.hidden,'flag')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.flag==null?"":row.flag)+'>'+(row.flag==null?"":row.flag)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lkrq')>-1){
	            clumns.push({field : 'lkrq',title : '调动日期',width : 200,hidden:util.getArrayIndex(option.hidden,'lkrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lkrq==null?"":row.lkrq)+'>'+(row.lkrq==null?"":row.lkrq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lkyy')>-1){
	            clumns.push({field : 'lkyy',title : '调动原因',width : 200,hidden:util.getArrayIndex(option.hidden,'lkyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lkyy==null?"":row.lkyy)+'>'+(row.lkyy==null?"":row.lkyy)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'hjszd')>-1){
				clumns.push({field : 'hjszd',title : '户籍所在地',width : 200,hidden:util.getArrayIndex(option.hidden,'hjszd')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjszd==null?"":row.hjszd)+'>'+(row.hjszd==null?"":row.hjszd)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'hjszdString')>-1){
                clumns.push({field : 'hjszdString',title : '户籍所在地',width : 200,hidden:util.getArrayIndex(option.hidden,'hjszdString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.hjszdString==null?"":row.hjszdString)+'>'+(row.hjszdString==null?"":row.hjszdString)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'xmpy')>-1){
	            clumns.push({field : 'xmpy',title : '姓名拼音',width : 200,hidden:util.getArrayIndex(option.hidden,'xmpy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xmpy==null?"":row.xmpy)+'>'+(row.xmpy==null?"":row.xmpy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xkid')>-1){
	            clumns.push({field : 'xkid',title : '胸卡id',width : 200,hidden:util.getArrayIndex(option.hidden,'xkid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xkid==null?"":row.xkid)+'>'+(row.xkid==null?"":row.xkid)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});