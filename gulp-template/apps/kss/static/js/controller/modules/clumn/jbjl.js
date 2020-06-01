/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jbjl 数据列表
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
	        if(util.getArrayIndex(option.clumns,'sid')>-1){
	            clumns.push({field : 'sid',title : '管理ID',width : 200,hidden:util.getArrayIndex(option.hidden,'sid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sid==null?"":row.sid)+'>'+(row.sid==null?"":row.sid)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jq')>-1){
	            clumns.push({field : 'jq',title : '监区',width : 200,hidden:util.getArrayIndex(option.hidden,'jq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jq==null?"":row.jq)+'>'+(row.jq==null?"":row.jq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbr')>-1){
	            clumns.push({field : 'jbr',title : '交班人',width : 200,hidden:util.getArrayIndex(option.hidden,'jbr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbr==null?"":row.jbr)+'>'+(row.jbr==null?"":row.jbr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsr')>-1){
	            clumns.push({field : 'jsr',title : '接班人',width : 200,hidden:util.getArrayIndex(option.hidden,'jsr')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsr==null?"":row.jsr)+'>'+(row.jsr==null?"":row.jsr)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjbsj')>-1){
	            clumns.push({field : 'jjbsj',title : '交接班时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jjbsj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjbsj==null?"":row.jjbsj)+'>'+(row.jjbsj==null?"":row.jjbsj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbqk')>-1){
	            clumns.push({field : 'jbqk',title : '接班情况',width : 200,hidden:util.getArrayIndex(option.hidden,'jbqk')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbqk==null?"":row.jbqk)+'>'+(row.jbqk==null?"":row.jbqk)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gjly')>-1){
	            clumns.push({field : 'gjly',title : '管教留言',width : 200,hidden:util.getArrayIndex(option.hidden,'gjly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gjly==null?"":row.gjly)+'>'+(row.gjly==null?"":row.gjly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ysly')>-1){
	            clumns.push({field : 'ysly',title : '医生留言',width : 200,hidden:util.getArrayIndex(option.hidden,'ysly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysly==null?"":row.ysly)+'>'+(row.ysly==null?"":row.ysly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdzly')>-1){
	            clumns.push({field : 'zdzly',title : '中队长留言',width : 200,hidden:util.getArrayIndex(option.hidden,'zdzly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdzly==null?"":row.zdzly)+'>'+(row.zdzly==null?"":row.zdzly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbly')>-1){
	            clumns.push({field : 'jbly',title : '交班留言',width : 200,hidden:util.getArrayIndex(option.hidden,'jbly')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbly==null?"":row.jbly)+'>'+(row.jbly==null?"":row.jbly)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lastnum')>-1){
	            clumns.push({field : 'lastnum',title : '上次交班人数',width : 200,hidden:util.getArrayIndex(option.hidden,'lastnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lastnum==null?"":row.lastnum)+'>'+(row.lastnum==null?"":row.lastnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'mustnum')>-1){
	            clumns.push({field : 'mustnum',title : '当前应有人数',width : 200,hidden:util.getArrayIndex(option.hidden,'mustnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mustnum==null?"":row.mustnum)+'>'+(row.mustnum==null?"":row.mustnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'currnum')>-1){
	            clumns.push({field : 'currnum',title : '当前实际人数',width : 200,hidden:util.getArrayIndex(option.hidden,'currnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.currnum==null?"":row.currnum)+'>'+(row.currnum==null?"":row.currnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'todayinnum')>-1){
	            clumns.push({field : 'todayinnum',title : '今天入所人数',width : 200,hidden:util.getArrayIndex(option.hidden,'todayinnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.todayinnum==null?"":row.todayinnum)+'>'+(row.todayinnum==null?"":row.todayinnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'todayoutnum')>-1){
	            clumns.push({field : 'todayoutnum',title : '今天出所人数',width : 200,hidden:util.getArrayIndex(option.hidden,'todayoutnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.todayoutnum==null?"":row.todayoutnum)+'>'+(row.todayoutnum==null?"":row.todayoutnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jstzinnum')>-1){
	            clumns.push({field : 'jstzinnum',title : '监室调整进入人数',width : 200,hidden:util.getArrayIndex(option.hidden,'jstzinnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jstzinnum==null?"":row.jstzinnum)+'>'+(row.jstzinnum==null?"":row.jstzinnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jstzoutnum')>-1){
	            clumns.push({field : 'jstzoutnum',title : '监室调整出去人数',width : 200,hidden:util.getArrayIndex(option.hidden,'jstzoutnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jstzoutnum==null?"":row.jstzoutnum)+'>'+(row.jstzoutnum==null?"":row.jstzoutnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tsnum')>-1){
	            clumns.push({field : 'tsnum',title : '办理提审人数',width : 200,hidden:util.getArrayIndex(option.hidden,'tsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tsnum==null?"":row.tsnum)+'>'+(row.tsnum==null?"":row.tsnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lshjnum')>-1){
	            clumns.push({field : 'lshjnum',title : '办理律师会见人数',width : 200,hidden:util.getArrayIndex(option.hidden,'lshjnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lshjnum==null?"":row.lshjnum)+'>'+(row.lshjnum==null?"":row.lshjnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jshjnum')>-1){
	            clumns.push({field : 'jshjnum',title : '家属会见',width : 200,hidden:util.getArrayIndex(option.hidden,'jshjnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jshjnum==null?"":row.jshjnum)+'>'+(row.jshjnum==null?"":row.jshjnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lslsnum')>-1){
	            clumns.push({field : 'lslsnum',title : '临时离所',width : 200,hidden:util.getArrayIndex(option.hidden,'lslsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lslsnum==null?"":row.lslsnum)+'>'+(row.lslsnum==null?"":row.lslsnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'swjynum')>-1){
	            clumns.push({field : 'swjynum',title : '所外就医',width : 200,hidden:util.getArrayIndex(option.hidden,'swjynum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swjynum==null?"":row.swjynum)+'>'+(row.swjynum==null?"":row.swjynum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'todaypjnum')>-1){
	            clumns.push({field : 'todaypjnum',title : '今天判决人数',width : 200,hidden:util.getArrayIndex(option.hidden,'todaypjnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.todaypjnum==null?"":row.todaypjnum)+'>'+(row.todaypjnum==null?"":row.todaypjnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdrynum')>-1){
	            clumns.push({field : 'zdrynum',title : '重点人员人数',width : 200,hidden:util.getArrayIndex(option.hidden,'zdrynum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdrynum==null?"":row.zdrynum)+'>'+(row.zdrynum==null?"":row.zdrynum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zdbhnum')>-1){
	            clumns.push({field : 'zdbhnum',title : '重点病号人数',width : 200,hidden:util.getArrayIndex(option.hidden,'zdbhnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zdbhnum==null?"":row.zdbhnum)+'>'+(row.zdbhnum==null?"":row.zdbhnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'syjjnum')>-1){
	            clumns.push({field : 'syjjnum',title : '使用戒具人数',width : 200,hidden:util.getArrayIndex(option.hidden,'syjjnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.syjjnum==null?"":row.syjjnum)+'>'+(row.syjjnum==null?"":row.syjjnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jbnum')>-1){
	            clumns.push({field : 'jbnum',title : '禁闭人数',width : 200,hidden:util.getArrayIndex(option.hidden,'jbnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jbnum==null?"":row.jbnum)+'>'+(row.jbnum==null?"":row.jbnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ygnum')>-1){
	            clumns.push({field : 'ygnum',title : '严管人数',width : 200,hidden:util.getArrayIndex(option.hidden,'ygnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ygnum==null?"":row.ygnum)+'>'+(row.ygnum==null?"":row.ygnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sknum')>-1){
	            clumns.push({field : 'sknum',title : '剩余手铐数量',width : 200,hidden:util.getArrayIndex(option.hidden,'sknum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sknum==null?"":row.sknum)+'>'+(row.sknum==null?"":row.sknum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jlnum')>-1){
	            clumns.push({field : 'jlnum',title : '剩余脚镣数量',width : 200,hidden:util.getArrayIndex(option.hidden,'jlnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jlnum==null?"":row.jlnum)+'>'+(row.jlnum==null?"":row.jlnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsnum')>-1){
	            clumns.push({field : 'jsnum',title : '剩余警绳数量',width : 200,hidden:util.getArrayIndex(option.hidden,'jsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsnum==null?"":row.jsnum)+'>'+(row.jsnum==null?"":row.jsnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ysnum')>-1){
	            clumns.push({field : 'ysnum',title : '交班时钥匙数量',width : 200,hidden:util.getArrayIndex(option.hidden,'ysnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ysnum==null?"":row.ysnum)+'>'+(row.ysnum==null?"":row.ysnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ssdnum')>-1){
	            clumns.push({field : 'ssdnum',title : '交班时搜索灯数量',width : 200,hidden:util.getArrayIndex(option.hidden,'ssdnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ssdnum==null?"":row.ssdnum)+'>'+(row.ssdnum==null?"":row.ssdnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dtnum')>-1){
	            clumns.push({field : 'dtnum',title : '交班时电台数量',width : 200,hidden:util.getArrayIndex(option.hidden,'dtnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dtnum==null?"":row.dtnum)+'>'+(row.dtnum==null?"":row.dtnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jjnum')>-1){
	            clumns.push({field : 'jjnum',title : '警戒数量',width : 200,hidden:util.getArrayIndex(option.hidden,'jjnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jjnum==null?"":row.jjnum)+'>'+(row.jjnum==null?"":row.jjnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'flag')>-1){
	            clumns.push({field : 'flag',title : '交接班标记',width : 200,hidden:util.getArrayIndex(option.hidden,'flag')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.flag==null?"":row.flag)+'>'+(row.flag==null?"":row.flag)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ywyc')>-1){
	            clumns.push({field : 'ywyc',title : '有无异常',width : 200,hidden:util.getArrayIndex(option.hidden,'ywyc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ywyc==null?"":row.ywyc)+'>'+(row.ywyc==null?"":row.ywyc)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'jh')>-1){
	            clumns.push({field : 'jh',title : '警号',width : 200,hidden:util.getArrayIndex(option.hidden,'jh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jh==null?"":row.jh)+'>'+(row.jh==null?"":row.jh)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});