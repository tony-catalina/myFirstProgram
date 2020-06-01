/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Tmtz 数据列表
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
	        if(util.getArrayIndex(option.clumns,'gcbh')>-1){
	            clumns.push({field : 'gcbh',title : '人员编号',width : 200,hidden:util.getArrayIndex(option.hidden,'gcbh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.gcbh==null?"":row.gcbh)+'>'+(row.gcbh==null?"":row.gcbh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zjh')>-1){
	            clumns.push({field : 'zjh',title : '证件号',width : 200,hidden:util.getArrayIndex(option.hidden,'zjh')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zjh==null?"":row.zjh)+'>'+(row.zjh==null?"":row.zjh)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sg')>-1){
	            clumns.push({field : 'sg',title : '身高',width : 200,hidden:util.getArrayIndex(option.hidden,'sg')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sg==null?"":row.sg)+'>'+(row.sg==null?"":row.sg)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tz')>-1){
	            clumns.push({field : 'tz',title : '体重',width : 200,hidden:util.getArrayIndex(option.hidden,'tz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tz==null?"":row.tz)+'>'+(row.tz==null?"":row.tz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'zc')>-1){
	            clumns.push({field : 'zc',title : '足长',width : 200,hidden:util.getArrayIndex(option.hidden,'zc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.zc==null?"":row.zc)+'>'+(row.zc==null?"":row.zc)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tb')>-1){
	            clumns.push({field : 'tb',title : '头部',width : 200,hidden:util.getArrayIndex(option.hidden,'tb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tb==null?"":row.tb)+'>'+(row.tb==null?"":row.tb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'jb')>-1){
	            clumns.push({field : 'jb',title : '颈部',width : 200,hidden:util.getArrayIndex(option.hidden,'jb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jb==null?"":row.jb)+'>'+(row.jb==null?"":row.jb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xb')>-1){
	            clumns.push({field : 'xb',title : '胸部',width : 200,hidden:util.getArrayIndex(option.hidden,'xb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xb==null?"":row.xb)+'>'+(row.xb==null?"":row.xb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fb')>-1){
	            clumns.push({field : 'fb',title : '腹部',width : 200,hidden:util.getArrayIndex(option.hidden,'fb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fb==null?"":row.fb)+'>'+(row.fb==null?"":row.fb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'bb')>-1){
	            clumns.push({field : 'bb',title : '背部',width : 200,hidden:util.getArrayIndex(option.hidden,'bb')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bb==null?"":row.bb)+'>'+(row.bb==null?"":row.bb)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'db')>-1){
	            clumns.push({field : 'db',title : '臀部',width : 200,hidden:util.getArrayIndex(option.hidden,'db')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.db==null?"":row.db)+'>'+(row.db==null?"":row.db)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sz')>-1){
	            clumns.push({field : 'sz',title : '上肢',width : 200,hidden:util.getArrayIndex(option.hidden,'sz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sz==null?"":row.sz)+'>'+(row.sz==null?"":row.sz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'xz')>-1){
	            clumns.push({field : 'xz',title : '下肢',width : 200,hidden:util.getArrayIndex(option.hidden,'xz')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xz==null?"":row.xz)+'>'+(row.xz==null?"":row.xz)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tmtz1')>-1){
	            clumns.push({field : 'tmtz1',title : '体貌特征1(TSBJ)',width : 200,hidden:util.getArrayIndex(option.hidden,'tmtz1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tmtz1==null?"":row.tmtz1)+'>'+(row.tmtz1==null?"":row.tmtz1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rtbw1')>-1){
	            clumns.push({field : 'rtbw1',title : '体貌特征_人体部位1',width : 200,hidden:util.getArrayIndex(option.hidden,'rtbw1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rtbw1==null?"":row.rtbw1)+'>'+(row.rtbw1==null?"":row.rtbw1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fw1')>-1){
	            clumns.push({field : 'fw1',title : '体貌特征_方位1',width : 200,hidden:util.getArrayIndex(option.hidden,'fw1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fw1==null?"":row.fw1)+'>'+(row.fw1==null?"":row.fw1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sl1')>-1){
	            clumns.push({field : 'sl1',title : '体貌特征_数量1',width : 200,hidden:util.getArrayIndex(option.hidden,'sl1')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl1==null?"":row.sl1)+'>'+(row.sl1==null?"":row.sl1)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tmtz2')>-1){
	            clumns.push({field : 'tmtz2',title : '体貌特征2',width : 200,hidden:util.getArrayIndex(option.hidden,'tmtz2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tmtz2==null?"":row.tmtz2)+'>'+(row.tmtz2==null?"":row.tmtz2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rtbw2')>-1){
	            clumns.push({field : 'rtbw2',title : '体貌特征_人体部位2',width : 200,hidden:util.getArrayIndex(option.hidden,'rtbw2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rtbw2==null?"":row.rtbw2)+'>'+(row.rtbw2==null?"":row.rtbw2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fw2')>-1){
	            clumns.push({field : 'fw2',title : '体貌特征_方位2',width : 200,hidden:util.getArrayIndex(option.hidden,'fw2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fw2==null?"":row.fw2)+'>'+(row.fw2==null?"":row.fw2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sl2')>-1){
	            clumns.push({field : 'sl2',title : '体貌特征_数量2',width : 200,hidden:util.getArrayIndex(option.hidden,'sl2')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl2==null?"":row.sl2)+'>'+(row.sl2==null?"":row.sl2)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tmtz3')>-1){
	            clumns.push({field : 'tmtz3',title : '体貌特征3',width : 200,hidden:util.getArrayIndex(option.hidden,'tmtz3')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tmtz3==null?"":row.tmtz3)+'>'+(row.tmtz3==null?"":row.tmtz3)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rtbw3')>-1){
	            clumns.push({field : 'rtbw3',title : '体貌特征_人体部位3',width : 200,hidden:util.getArrayIndex(option.hidden,'rtbw3')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rtbw3==null?"":row.rtbw3)+'>'+(row.rtbw3==null?"":row.rtbw3)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fw3')>-1){
	            clumns.push({field : 'fw3',title : '体貌特征_方位3',width : 200,hidden:util.getArrayIndex(option.hidden,'fw3')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fw3==null?"":row.fw3)+'>'+(row.fw3==null?"":row.fw3)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sl3')>-1){
	            clumns.push({field : 'sl3',title : '体貌特征_数量3',width : 200,hidden:util.getArrayIndex(option.hidden,'sl3')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl3==null?"":row.sl3)+'>'+(row.sl3==null?"":row.sl3)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tmtz4')>-1){
	            clumns.push({field : 'tmtz4',title : '体貌特征4',width : 200,hidden:util.getArrayIndex(option.hidden,'tmtz4')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tmtz4==null?"":row.tmtz4)+'>'+(row.tmtz4==null?"":row.tmtz4)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rtbw4')>-1){
	            clumns.push({field : 'rtbw4',title : '体貌特征_人体部位4',width : 200,hidden:util.getArrayIndex(option.hidden,'rtbw4')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rtbw4==null?"":row.rtbw4)+'>'+(row.rtbw4==null?"":row.rtbw4)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fw4')>-1){
	            clumns.push({field : 'fw4',title : '体貌特征_方位4',width : 200,hidden:util.getArrayIndex(option.hidden,'fw4')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fw4==null?"":row.fw4)+'>'+(row.fw4==null?"":row.fw4)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sl4')>-1){
	            clumns.push({field : 'sl4',title : '体貌特征_数量4',width : 200,hidden:util.getArrayIndex(option.hidden,'sl4')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl4==null?"":row.sl4)+'>'+(row.sl4==null?"":row.sl4)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'tmtz5')>-1){
	            clumns.push({field : 'tmtz5',title : '体貌特征5',width : 200,hidden:util.getArrayIndex(option.hidden,'tmtz5')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tmtz5==null?"":row.tmtz5)+'>'+(row.tmtz5==null?"":row.tmtz5)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'rtbw5')>-1){
	            clumns.push({field : 'rtbw5',title : '体貌特征_人体部位5',width : 200,hidden:util.getArrayIndex(option.hidden,'rtbw5')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.rtbw5==null?"":row.rtbw5)+'>'+(row.rtbw5==null?"":row.rtbw5)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'fw5')>-1){
	            clumns.push({field : 'fw5',title : '体貌特征_方位5',width : 200,hidden:util.getArrayIndex(option.hidden,'fw5')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.fw5==null?"":row.fw5)+'>'+(row.fw5==null?"":row.fw5)+'</span>'}});
	        }
	        if(util.getArrayIndex(option.clumns,'sl5')>-1){
	            clumns.push({field : 'sl5',title : '体貌特征_数量5',width : 200,hidden:util.getArrayIndex(option.hidden,'sl5')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl5==null?"":row.sl5)+'>'+(row.sl5==null?"":row.sl5)+'</span>'}});
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
	        if(util.getArrayIndex(option.clumns,'jkqkid')>-1){
	            clumns.push({field : 'jkqkid',title : '健康情况ID',width : 200,hidden:util.getArrayIndex(option.hidden,'jkqkid')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.jkqkid==null?"":row.jkqkid)+'>'+(row.jkqkid==null?"":row.jkqkid)+'</span>'}});
	        }
	        
	        return clumns;
	    };
	    return main;
	});