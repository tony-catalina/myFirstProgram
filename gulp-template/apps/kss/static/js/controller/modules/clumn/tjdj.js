/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Tjdj 数据列表
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
             if(util.getArrayIndex(option.clumns,'ayString')>-1){
                clumns.push({field : 'ayString',title : '涉嫌罪名',width : 200,hidden:util.getArrayIndex(option.hidden,'ayString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ayString==null?"":row.ayString)+'>'+(row.ayString==null?"":row.ayString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'jsbh')>-1){
	            clumns.push({field : 'jsbh',title : '监所编号',width : 200,hidden:util.getArrayIndex(option.hidden,'jsbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsbh==null?"":row.jsbh)+'>'+(row.jsbh==null?"":row.jsbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rybh')>-1){
	            clumns.push({field : 'rybh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'rybh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rybh==null?"":row.rybh)+'>'+(row.rybh==null?"":row.rybh)+'</span>'}});
	        }
	         if(util.getArrayIndex(option.clumns,'csrq')>-1){
                clumns.push({field : 'csrq',title : '出生日期',width : 200,hidden:util.getArrayIndex(option.hidden,'csrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.csrq==null?"":row.csrq)+'>'+(row.csrq==null?"":row.csrq)+'</span>'}});
            }
             if(util.getArrayIndex(option.clumns,'rsrq')>-1){
                clumns.push({field : 'rsrq',title : '入所日期',width : 200,hidden:util.getArrayIndex(option.hidden,'rsrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rsrq==null?"":row.rsrq)+'>'+(row.rsrq==null?"":row.rsrq)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'tjdw')>-1){
	            clumns.push({field : 'tjdw',title : '提解单位',width : 200,hidden:util.getArrayIndex(option.hidden,'tjdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tjdw==null?"":row.ldpsxx.tjdw)+'>'+(row.ldpsxx.tjdw==null?"":row.ldpsxx.tjdw)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tjry')>-1){
                clumns.push({field : 'tjry1',title : '提解人员',width : 200,hidden:util.getArrayIndex(option.hidden,'tjry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tjry1==null?"":row.ldpsxx.tjry1)+'>'+(row.ldpsxx.tjry1==null?"":row.ldpsxx.tjry1)+'</span>'}});
            }
             if(util.getArrayIndex(option.clumns,'tjrq')>-1){
                clumns.push({field : 'tjrq',title : '提解日期',width : 200,hidden:util.getArrayIndex(option.hidden,'tjrq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tjrq==null?"":row.ldpsxx.tjrq)+'>'+(row.ldpsxx.tjrq==null?"":row.ldpsxx.tjrq)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'tjsj')>-1){
	            clumns.push({field : 'tjsj',title : '提解时间',width : 200,hidden:util.getArrayIndex(option.hidden,'tjsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tjsj==null?"":row.ldpsxx.tjsj)+'>'+(row.ldpsxx.tjsj==null?"":row.ldpsxx.tjsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tjyy')>-1){
	            clumns.push({field : 'tjyy',title : '提解原因',width : 200,hidden:util.getArrayIndex(option.hidden,'tjyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tjyy==null?"":row.ldpsxx.tjyy)+'>'+(row.ldpsxx.tjyy==null?"":row.ldpsxx.tjyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tjyyString')>-1){
                clumns.push({field : 'tjyyString',title : '提解原因',width : 200,hidden:util.getArrayIndex(option.hidden,'tjyyString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tjyyString==null?"":row.ldpsxx.tjyyString)+'>'+(row.ldpsxx.tjyyString==null?"":row.ldpsxx.tjyyString)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'tjjtyy')>-1){
	            clumns.push({field : 'tjjtyy',title : '提解具体原因',width : 200,hidden:util.getArrayIndex(option.hidden,'tjjtyy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tjjtyy==null?"":row.tjjtyy)+'>'+(row.ldpsxx.tjjtyy==null?"":row.ldpsxx.tjjtyy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tjry1')>-1){
	            clumns.push({field : 'tjry1',title : '提解人员1',width : 200,hidden:util.getArrayIndex(option.hidden,'tjry1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tjry1==null?"":row.ldpsxx.tjry1)+'>'+(row.ldpsxx.tjry1==null?"":row.ldpsxx.tjry1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tjry2')>-1){
	            clumns.push({field : 'tjry2',title : '提解人员2',width : 200,hidden:util.getArrayIndex(option.hidden,'tjry2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tjry2==null?"":row.ldpsxx.tjry2)+'>'+(row.ldpsxx.tjry2==null?"":row.ldpsxx.tjry2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tjkh1')>-1){
	            clumns.push({field : 'tjkh1',title : '提解卡号1',width : 200,hidden:util.getArrayIndex(option.hidden,'tjkh1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tjkh1==null?"":row.ldpsxx.tjkh1)+'>'+(row.ldpsxx.tjkh1==null?"":row.ldpsxx.tjkh1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tjkh2')>-1){
	            clumns.push({field : 'tjkh2',title : '提解卡号2',width : 200,hidden:util.getArrayIndex(option.hidden,'tjkh2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tjkh2==null?"":row.ldpsxx.tjkh2)+'>'+(row.ldpsxx.tjkh2==null?"":row.ldpsxx.tjkh2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qttjry')>-1){
	            clumns.push({field : 'qttjry',title : '其他提解人员',width : 200,hidden:util.getArrayIndex(option.hidden,'qttjry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.qttjry==null?"":row.ldpsxx.qttjry)+'>'+(row.ldpsxx.qttjry==null?"":row.ldpsxx.qttjry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tjkssj')>-1){
                clumns.push({field : 'tjkssj',title : '提解开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'tjkssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tjkssj==null?"":row.ldpsxx.tjkssj)+'>'+(row.ldpsxx.tjkssj==null?"":row.ldpsxx.tjkssj)+'</span>'}});
            }
	        if(util.getArrayIndex(option.clumns,'pzr')>-1){
	            clumns.push({field : 'pzr',title : '批准人',width : 200,hidden:util.getArrayIndex(option.hidden,'pzr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.pzr==null?"":row.ldpsxx.pzr)+'>'+(row.pzr==null?"":row.ldpsxx.pzr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lxdh')>-1){
	            clumns.push({field : 'lxdh',title : '联系电话',width : 200,hidden:util.getArrayIndex(option.hidden,'lxdh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.lxdh==null?"":row.ldpsxx.lxdh)+'>'+(row.ldpsxx.lxdh==null?"":row.ldpsxx.lxdh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zbmj')>-1){
	            clumns.push({field : 'zbmj',title : '值班民警',width : 200,hidden:util.getArrayIndex(option.hidden,'zbmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.zbmj==null?"":row.ldpsxx.zbmj)+'>'+(row.ldpsxx.zbmj==null?"":row.ldpsxx.zbmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tjkssj')>-1){
	            clumns.push({field : 'tjkssj',title : '提解开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'tjkssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tjkssj==null?"":row.ldpsxx.tjkssj)+'>'+(row.ldpsxx.tjkssj==null?"":row.ldpsxx.tjkssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcry')>-1){
	            clumns.push({field : 'jcry',title : '检查人员',width : 200,hidden:util.getArrayIndex(option.hidden,'jcry')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcry==null?"":row.jcry)+'>'+(row.ldpsxx.jcry==null?"":row.ldpsxx.jcry)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcsj')>-1){
	            clumns.push({field : 'jcsj',title : '检查时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jcsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jcsj==null?"":row.jcsj)+'>'+(row.jcsj==null?"":row.ldpsxx.jcsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jcjg')>-1){
	            clumns.push({field : 'jcjg',title : '检查结果',width : 200,hidden:util.getArrayIndex(option.hidden,'jcjg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.jcjg==null?"":row.ldpsxx.jcjg)+'>'+(row.ldpsxx.jcjg==null?"":row.ldpsxx.jcjg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tjjssj')>-1){
	            clumns.push({field : 'tjjssj',title : '提解结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'tjjssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.tjjssj==null?"":row.ldpsxx.tjjssj)+'>'+(row.ldpsxx.tjjssj==null?"":row.ldpsxx.tjjssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ycqkdj')>-1){
	            clumns.push({field : 'ycqkdj',title : '异常情况登记',width : 200,hidden:util.getArrayIndex(option.hidden,'ycqkdj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldpsxx.ycqkdj==null?"":row.ldpsxx.ycqkdj)+'>'+(row.ldpsxx.ycqkdj==null?"":row.ldpsxx.ycqkdj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bz')>-1){
	            clumns.push({field : 'bz',title : '备注',width : 200,hidden:util.getArrayIndex(option.hidden,'bz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'state')>-1){
	            clumns.push({field : 'state',title : '存在状态',width : 200,hidden:util.getArrayIndex(option.hidden,'state')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.state==null?"":row.state)+'>'+(row.state==null?"":row.state)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'lfrzjh')>-1){
	            clumns.push({field : 'lfrzjh',title : '来访人证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'lfrzjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lfrzjh==null?"":row.lfrzjh)+'>'+(row.lfrzjh==null?"":row.lfrzjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lfrpzh')>-1){
	            clumns.push({field : 'lfrpzh',title : '来访人凭证文书号',width : 200,hidden:util.getArrayIndex(option.hidden,'lfrpzh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lfrpzh==null?"":row.lfrpzh)+'>'+(row.lfrpzh==null?"":row.lfrpzh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lfsj')>-1){
	            clumns.push({field : 'lfsj',title : '来访时间',width : 200,hidden:util.getArrayIndex(option.hidden,'lfsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lfsj==null?"":row.lfsj)+'>'+(row.lfsj==null?"":row.lfsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lfrxm')>-1){
	            clumns.push({field : 'lfrxm',title : '来访人姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'lfrxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lfrxm==null?"":row.lfrxm)+'>'+(row.lfrxm==null?"":row.lfrxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywlcid')>-1){
	            clumns.push({field : 'ywlcid',title : '业务流程ID',width : 200,hidden:util.getArrayIndex(option.hidden,'ywlcid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywlcid==null?"":row.ywlcid)+'>'+(row.ywlcid==null?"":row.ywlcid)+'</span>'}});
	        }
			if(util.getArrayIndex(option.clumns,'tjdws')>-1){
				clumns.push({field : 'tjdw',title : '提解单位',width : 200,hidden:util.getArrayIndex(option.hidden,'tjdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tjdw==null?"":row.tjdw)+'>'+(row.tjdw==null?"":row.tjdw)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'tjsjs')>-1){
				clumns.push({field : 'tjsj',title : '提解时间',width : 200,hidden:util.getArrayIndex(option.hidden,'tjsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tjsj==null?"":row.tjsj)+'>'+(row.tjsj==null?"":row.tjsj)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'pzrs')>-1){
				clumns.push({field : 'pzr',title : '批准人',width : 200,hidden:util.getArrayIndex(option.hidden,'pzr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.pzr==null?"":row.pzr)+'>'+(row.pzr==null?"":row.pzr)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'tjkssjs')>-1){
				clumns.push({field : 'tjkssj',title : '提解开始时间',width : 200,hidden:util.getArrayIndex(option.hidden,'tjkssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tjkssj==null?"":row.tjkssj)+'>'+(row.tjkssj==null?"":row.tjkssj)+'</span>'}});
			}
			if(util.getArrayIndex(option.clumns,'tjjssjs')>-1){
				clumns.push({field : 'tjjssj',title : '提解结束时间',width : 200,hidden:util.getArrayIndex(option.hidden,'tjjssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tjjssj==null?"":row.tjjssj)+'>'+(row.tjjssj==null?"":row.tjjssj)+'</span>'}});
			}
	        return clumns;
	    };
	    return main;
	});
