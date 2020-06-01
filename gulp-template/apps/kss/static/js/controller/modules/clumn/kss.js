/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Kss 数据列表
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
	        if(util.getArrayIndex(option.clumns,'kssmc')>-1){
	            clumns.push({field : 'kssmc',title : '看守所名称',width : 200,hidden:util.getArrayIndex(option.hidden,'kssmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kssmc==null?"":row.kssmc)+'>'+(row.kssmc==null?"":row.kssmc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'kssmcpy')>-1){
	            clumns.push({field : 'kssmcpy',title : '名称拼音',width : 200,hidden:util.getArrayIndex(option.hidden,'kssmcpy')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kssmcpy==null?"":row.kssmcpy)+'>'+(row.kssmcpy==null?"":row.kssmcpy)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dz')>-1){
	            clumns.push({field : 'dz',title : '地址',width : 200,hidden:util.getArrayIndex(option.hidden,'dz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dz==null?"":row.dz)+'>'+(row.dz==null?"":row.dz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dq')>-1){
	            clumns.push({field : 'dq',title : '详细地址',width : 200,hidden:util.getArrayIndex(option.hidden,'dq')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dq==null?"":row.dq)+'>'+(row.dq==null?"":row.dq)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dh')>-1){
	            clumns.push({field : 'dh',title : '电话',width : 200,hidden:util.getArrayIndex(option.hidden,'dh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dh==null?"":row.dh)+'>'+(row.dh==null?"":row.dh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'cz')>-1){
	            clumns.push({field : 'cz',title : '传真',width : 200,hidden:util.getArrayIndex(option.hidden,'cz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.cz==null?"":row.cz)+'>'+(row.cz==null?"":row.cz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'yzbm')>-1){
	            clumns.push({field : 'yzbm',title : '邮政编码',width : 200,hidden:util.getArrayIndex(option.hidden,'yzbm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.yzbm==null?"":row.yzbm)+'>'+(row.yzbm==null?"":row.yzbm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'email')>-1){
	            clumns.push({field : 'email',title : 'EMAIl',width : 200,hidden:util.getArrayIndex(option.hidden,'email')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.email==null?"":row.email)+'>'+(row.email==null?"":row.email)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'net')>-1){
	            clumns.push({field : 'net',title : '网址',width : 200,hidden:util.getArrayIndex(option.hidden,'net')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.net==null?"":row.net)+'>'+(row.net==null?"":row.net)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ldxm')>-1){
	            clumns.push({field : 'ldxm',title : '领导姓名',width : 200,hidden:util.getArrayIndex(option.hidden,'ldxm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ldxm==null?"":row.ldxm)+'>'+(row.ldxm==null?"":row.ldxm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'dj')>-1){
	            clumns.push({field : 'dj',title : '等级(DJ)',width : 200,hidden:util.getArrayIndex(option.hidden,'dj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.dj==null?"":row.dj)+'>'+(row.dj==null?"":row.dj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gm')>-1){
	            clumns.push({field : 'gm',title : '规模(GM)',width : 200,hidden:util.getArrayIndex(option.hidden,'gm')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gm==null?"":row.gm)+'>'+(row.gm==null?"":row.gm)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rs')>-1){
	            clumns.push({field : 'rs',title : '民警人数',width : 200,hidden:util.getArrayIndex(option.hidden,'rs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rs==null?"":row.rs)+'>'+(row.rs==null?"":row.rs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bzrs')>-1){
	            clumns.push({field : 'bzrs',title : '编制人数',width : 200,hidden:util.getArrayIndex(option.hidden,'bzrs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bzrs==null?"":row.bzrs)+'>'+(row.bzrs==null?"":row.bzrs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jss')>-1){
	            clumns.push({field : 'jss',title : '监室数',width : 200,hidden:util.getArrayIndex(option.hidden,'jss')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jss==null?"":row.jss)+'>'+(row.jss==null?"":row.jss)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rl')>-1){
	            clumns.push({field : 'rl',title : '设计容量',width : 200,hidden:util.getArrayIndex(option.hidden,'rl')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rl==null?"":row.rl)+'>'+(row.rl==null?"":row.rl)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'version')>-1){
	            clumns.push({field : 'version',title : '版本号',width : 200,hidden:util.getArrayIndex(option.hidden,'version')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.version==null?"":row.version)+'>'+(row.version==null?"":row.version)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'kssjc')>-1){
	            clumns.push({field : 'kssjc',title : '简称',width : 200,hidden:util.getArrayIndex(option.hidden,'kssjc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.kssjc==null?"":row.kssjc)+'>'+(row.kssjc==null?"":row.kssjc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'enable')>-1){
	            clumns.push({field : 'enable',title : '是否使用',width : 200,hidden:util.getArrayIndex(option.hidden,'enable')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.enable==null?"":row.enable)+'>'+(row.enable==null?"":row.enable)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'maxsnbh')>-1){
	            clumns.push({field : 'maxsnbh',title : '当前最大所内编号',width : 200,hidden:util.getArrayIndex(option.hidden,'maxsnbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.maxsnbh==null?"":row.maxsnbh)+'>'+(row.maxsnbh==null?"":row.maxsnbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xjnum')>-1){
	            clumns.push({field : 'xjnum',title : '协警数量',width : 200,hidden:util.getArrayIndex(option.hidden,'xjnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xjnum==null?"":row.xjnum)+'>'+(row.xjnum==null?"":row.xjnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zgnum')>-1){
	            clumns.push({field : 'zgnum',title : '职工数量',width : 200,hidden:util.getArrayIndex(option.hidden,'zgnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zgnum==null?"":row.zgnum)+'>'+(row.zgnum==null?"":row.zgnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'wznum')>-1){
	            clumns.push({field : 'wznum',title : '文职数量',width : 200,hidden:util.getArrayIndex(option.hidden,'wznum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wznum==null?"":row.wznum)+'>'+(row.wznum==null?"":row.wznum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'syjb')>-1){
	            clumns.push({field : 'syjb',title : '使用级别',width : 200,hidden:util.getArrayIndex(option.hidden,'syjb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.syjb==null?"":row.syjb)+'>'+(row.syjb==null?"":row.syjb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jsxzjb')>-1){
	            clumns.push({field : 'jsxzjb',title : '监所行政级别',width : 200,hidden:util.getArrayIndex(option.hidden,'jsxzjb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jsxzjb==null?"":row.jsxzjb)+'>'+(row.jsxzjb==null?"":row.jsxzjb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jssj')>-1){
	            clumns.push({field : 'jssj',title : '建设时间',width : 200,hidden:util.getArrayIndex(option.hidden,'jssj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jssj==null?"":row.jssj)+'>'+(row.jssj==null?"":row.jssj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'qysj')>-1){
	            clumns.push({field : 'qysj',title : '启用时间',width : 200,hidden:util.getArrayIndex(option.hidden,'qysj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.qysj==null?"":row.qysj)+'>'+(row.qysj==null?"":row.qysj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'drjsnum')>-1){
	            clumns.push({field : 'drjsnum',title : '单人监室数量',width : 200,hidden:util.getArrayIndex(option.hidden,'drjsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.drjsnum==null?"":row.drjsnum)+'>'+(row.drjsnum==null?"":row.drjsnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjzmj')>-1){
	            clumns.push({field : 'zjzmj',title : '总建筑面积',width : 200,hidden:util.getArrayIndex(option.hidden,'zjzmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjzmj==null?"":row.zjzmj)+'>'+(row.zjzmj==null?"":row.zjzmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jqmj')>-1){
	            clumns.push({field : 'jqmj',title : '监区面积',width : 200,hidden:util.getArrayIndex(option.hidden,'jqmj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jqmj==null?"":row.jqmj)+'>'+(row.jqmj==null?"":row.jqmj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bqszxs')>-1){
	            clumns.push({field : 'bqszxs',title : '病区设置形式',width : 200,hidden:util.getArrayIndex(option.hidden,'bqszxs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bqszxs==null?"":row.bqszxs)+'>'+(row.bqszxs==null?"":row.bqszxs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zswjnum')>-1){
	            clumns.push({field : 'zswjnum',title : '驻所武警数量',width : 200,hidden:util.getArrayIndex(option.hidden,'zswjnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zswjnum==null?"":row.zswjnum)+'>'+(row.zswjnum==null?"":row.zswjnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'ssxs')>-1){
	            clumns.push({field : 'ssxs',title : '上哨形式',width : 200,hidden:util.getArrayIndex(option.hidden,'ssxs')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.ssxs==null?"":row.ssxs)+'>'+(row.ssxs==null?"":row.ssxs)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'abdoor')>-1){
	            clumns.push({field : 'abdoor',title : '监区出入口AB门',width : 200,hidden:util.getArrayIndex(option.hidden,'abdoor')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.abdoor==null?"":row.abdoor)+'>'+(row.abdoor==null?"":row.abdoor)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bhfcrj')>-1){
	            clumns.push({field : 'bhfcrj',title : '不含风场人均',width : 200,hidden:util.getArrayIndex(option.hidden,'bhfcrj')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bhfcrj==null?"":row.bhfcrj)+'>'+(row.bhfcrj==null?"":row.bhfcrj)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xwsnum')>-1){
	            clumns.push({field : 'xwsnum',title : '讯问室',width : 200,hidden:util.getArrayIndex(option.hidden,'xwsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xwsnum==null?"":row.xwsnum)+'>'+(row.xwsnum==null?"":row.xwsnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'lshjsnum')>-1){
	            clumns.push({field : 'lshjsnum',title : '律师会见室数量',width : 200,hidden:util.getArrayIndex(option.hidden,'lshjsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.lshjsnum==null?"":row.lshjsnum)+'>'+(row.lshjsnum==null?"":row.lshjsnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jshjsnum')>-1){
	            clumns.push({field : 'jshjsnum',title : '家属会见室数量',width : 200,hidden:util.getArrayIndex(option.hidden,'jshjsnum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jshjsnum==null?"":row.jshjsnum)+'>'+(row.jshjsnum==null?"":row.jshjsnum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'doctornum')>-1){
	            clumns.push({field : 'doctornum',title : '医生数量',width : 200,hidden:util.getArrayIndex(option.hidden,'doctornum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.doctornum==null?"":row.doctornum)+'>'+(row.doctornum==null?"":row.doctornum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'nursenum')>-1){
	            clumns.push({field : 'nursenum',title : '护士数量',width : 200,hidden:util.getArrayIndex(option.hidden,'nursenum')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.nursenum==null?"":row.nursenum)+'>'+(row.nursenum==null?"":row.nursenum)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'longitude')>-1){
	            clumns.push({field : 'longitude',title : '经度',width : 200,hidden:util.getArrayIndex(option.hidden,'longitude')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.longitude==null?"":row.longitude)+'>'+(row.longitude==null?"":row.longitude)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'latitude')>-1){
	            clumns.push({field : 'latitude',title : '纬度',width : 200,hidden:util.getArrayIndex(option.hidden,'latitude')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.latitude==null?"":row.latitude)+'>'+(row.latitude==null?"":row.latitude)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'gatephoto')>-1){
	            clumns.push({field : 'gatephoto',title : '大门照片',width : 200,hidden:util.getArrayIndex(option.hidden,'gatephoto')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gatephoto==null?"":row.gatephoto)+'>'+(row.gatephoto==null?"":row.gatephoto)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});