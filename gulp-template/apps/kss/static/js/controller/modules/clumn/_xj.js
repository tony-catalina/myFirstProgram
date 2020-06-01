/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Xj 数据列表
 */
define(function (require) {
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var main = function (option) {
		var clumns = [];
		if (tools.isTrue(option.check)) {
			clumns.push({ field: 'oid', title: '', formatter: function (value, rowData, rowIndex) { return '<input type="checkbox" name="selectCheckBox" id="selectCheckBox' + rowIndex + '" value="' + rowData.oid + '" />'; } });
		} else {
			clumns.push({ field: 'oid', title: '', formatter: function (value, rowData, rowIndex) { return '<input type="radio" name="selectRadio" id="selectRadio' + rowIndex + '" value="' + rowData.oid + '" />'; } });
		}
		if (util.getArrayIndex(option.clumns, 'id') > -1) {
			clumns.push({ field: 'id', title: 'id', width: 200, hidden: util.getArrayIndex(option.hidden, 'id') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.id == null ? "" : row.id) + '>' + (row.id == null ? "" : row.id) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jsbh') > -1) {
			clumns.push({ field: 'jsbh', title: '监所编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'jsbh') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jsbh == null ? "" : row.jsbh) + '>' + (row.jsbh == null ? "" : row.jsbh) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'rybh') > -1) {
			clumns.push({ field: 'rybh', title: '人员编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'rybh') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.rybh == null ? "" : row.rybh) + '>' + (row.rybh == null ? "" : row.rybh) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'snbh') > -1) {
			clumns.push({ field: 'snbh', title: '所内编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'snbh') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.snbh == null ? "" : row.snbh) + '>' + (row.snbh == null ? "" : row.snbh) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jbxx_xm') > -1) {
			clumns.push({ field: 'xm', title: '姓名', width: 200, hidden: util.getArrayIndex(option.hidden, 'xm') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.xm == null ? "" : row.xm) + '>' + (row.xm == null ? "" : row.xm) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jbxx_bm') > -1) {
			clumns.push({ field: 'jbxx_bm', title: '别名', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbxx_bm') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jbxx_bm == null ? "" : row.jbxx_bm) + '>' + (row.jbxx_bm == null ? "" : row.jbxx_bm) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jbxx_xb') > -1) {
			clumns.push({ field: 'jbxx_xb', title: '性别', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbxx_xb') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jbxx_xb == null ? "" : row.jbxx_xb) + '>' + (row.jbxx_xb == null ? "" : row.jbxx_xb) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jbxx_jsh') > -1) {
			clumns.push({ field: 'jsh', title: '监室号', width: 200, hidden: util.getArrayIndex(option.hidden, 'jsh') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jsh == null ? "" : row.jsh) + '>' + (row.jsh == null ? "" : row.jsh) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'dah') > -1) {
			clumns.push({ field: 'dah', title: '档案编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'dah') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.dah == null ? "" : row.dah) + '>' + (row.dah == null ? "" : row.dah) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jbxx_rsrq') > -1) {
			clumns.push({ field: 'jbxx_rsrq', title: '入所日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbxx_rsrq') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jbxx_rsrq == null ? "" : row.jbxx_rsrq) + '>' + (row.jbxx_rsrq == null ? "" : row.jbxx_rsrq) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'rsrqString') > -1) {
			clumns.push({ field: 'rsrqString', title: '入所日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'rsrqString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.rsrqString == null ? "" : row.rsrqString) + '>' + (row.rsrqString == null ? "" : row.rsrqString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jbxx_gyqx') > -1) {
			clumns.push({ field: 'jbxx_gyqx', title: '关押期限', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbxx_gyqx') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jbxx_gyqx == null ? "" : row.jbxx_gyqx) + '>' + (row.jbxx_gyqx == null ? "" : row.jbxx_gyqx) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jbxx_bahj') > -1) {
			clumns.push({ field: 'jbxx_bahj', title: '办案环节', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbxx_bahj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jbxx_bahj == null ? "" : row.jbxx_bahj) + '>' + (row.jbxx_bahj == null ? "" : row.jbxx_bahj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jbxx_bahjString') > -1) {
			clumns.push({ field: 'bahjString', title: '办案环节', width: 200, hidden: util.getArrayIndex(option.hidden, 'bahjString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.bahjString == null ? "" : row.bahjString) + '>' + (row.bahjString == null ? "" : row.bahjString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'lsh') > -1) {
			clumns.push({ field: 'lsh', title: '流水号', width: 200, hidden: util.getArrayIndex(option.hidden, 'lsh') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.lsh == null ? "" : row.lsh) + '>' + (row.lsh == null ? "" : row.lsh) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'szly') > -1) {
			clumns.push({ field: 'ly', title: '设置原因', width: 200, hidden: util.getArrayIndex(option.hidden, 'ly') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ly == null ? "" : row.ly) + '>' + (row.ly == null ? "" : row.ly) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'xjmc') > -1) {
			clumns.push({ field: 'xjmc', title: '戒具名称', width: 200, hidden: util.getArrayIndex(option.hidden, 'xjmc') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.xjmc == null ? "" : row.xjmc) + '>' + (row.xjmc == null ? "" : row.xjmc) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'xjmcString') > -1) {
			clumns.push({ field: 'xjmcString', title: '戒具名称', width: 200, hidden: util.getArrayIndex(option.hidden, 'xjmcString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.xjmcString == null ? "" : row.xjmcString) + '>' + (row.xjmcString == null ? "" : row.xjmcString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jjsl') > -1) {
			clumns.push({ field: 'jjsl', title: '戒具数量', width: 200, hidden: util.getArrayIndex(option.hidden, 'jjsl') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jjsl == null ? "" : row.jjsl) + '>' + (row.jjsl == null ? "" : row.jjsl) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'syts') > -1) {
			clumns.push({ field: 'syts', title: '使用天数', width: 200, hidden: util.getArrayIndex(option.hidden, 'syts') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.syts == null ? "" : row.syts) + '>' + (row.syts == null ? "" : row.syts) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'xj_syts') > -1) {
			clumns.push({ field: 'xj_syts', title: '使用天数', width: 200, hidden: util.getArrayIndex(option.hidden, 'xj_syts') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ldpsxx.xj_syts == null ? "" : row.ldpsxx.xj_syts) + '>' + (row.ldpsxx.xj_syts == null ? "" : row.ldpsxx.xj_syts) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ly') > -1) {
			clumns.push({ field: 'ly', title: '使用原因', width: 200, hidden: util.getArrayIndex(option.hidden, 'ly') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ly == null ? "" : row.ly) + '>' + (row.ly == null ? "" : row.ly) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'lyString') > -1) {
			clumns.push({ field: 'lyString', title: '使用原因', width: 200, hidden: util.getArrayIndex(option.hidden, 'lyString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.lyString == null ? "" : row.lyString) + '>' + (row.lyString == null ? "" : row.lyString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'xj_lyString') > -1) {
			clumns.push({ field: 'xj_lyString', title: '使用原因', width: 200, hidden: util.getArrayIndex(option.hidden, 'xj_lyString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ldpsxx.xj_lyString == null ? "" : row.ldpsxx.xj_lyString) + '>' + (row.ldpsxx.xj_lyString == null ? "" : row.ldpsxx.xj_lyString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'xj_xjmcString') > -1) {
			clumns.push({ field: 'xj_xjmcString', title: '械具种类', width: 200, hidden: util.getArrayIndex(option.hidden, 'xj_xjmcString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ldpsxx.xj_xjmcString == null ? "" : row.ldpsxx.xj_xjmcString) + '>' + (row.ldpsxx.xj_xjmcString == null ? "" : row.ldpsxx.xj_xjmcString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'kssj') > -1) {
			clumns.push({ field: 'kssj', title: '开始时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'kssj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.kssj == null ? "" : row.kssj) + '>' + (row.kssj == null ? "" : row.kssj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'kssjString') > -1) {
			clumns.push({ field: 'kssjString', title: '开始时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'kssjString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.kssjString == null ? "" : row.kssjString) + '>' + (row.kssjString == null ? "" : row.kssjString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jssj') > -1) {
			clumns.push({ field: 'jssj', title: '结束时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'jssj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jssj == null ? "" : row.jssj) + '>' + (row.jssj == null ? "" : row.jssj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jssjString') > -1) {
			clumns.push({ field: 'jssjString', title: '结束时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'jssj') > -1 ? true : false, sortable: 'jssjString', formatter: function (value, row, index) { return '<span title=' + (row.jssjString == null ? "" : row.jssjString) + '>' + (row.jssjString == null ? "" : row.jssjString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'blr') > -1) {
			clumns.push({ field: 'blr', title: '办理人', width: 200, hidden: util.getArrayIndex(option.hidden, 'blr') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.blr == null ? "" : row.blr) + '>' + (row.blr == null ? "" : row.blr) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'xj_blr') > -1) {
			clumns.push({ field: 'xj_blr', title: '办理人', width: 200, hidden: util.getArrayIndex(option.hidden, 'xj_blr') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ldpsxx.xj_blr == null ? "" : row.ldpsxx.xj_blr) + '>' + (row.ldpsxx.xj_blr == null ? "" : row.ldpsxx.xj_blr) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'blrq') > -1) {
			clumns.push({ field: 'blrq', title: '办理日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'blrq') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.blrq == null ? "" : row.blrq) + '>' + (row.blrq == null ? "" : row.blrq) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'zdzxm') > -1) {
			clumns.push({ field: 'zdzxm', title: '中队长姓名', width: 200, hidden: util.getArrayIndex(option.hidden, 'zdzxm') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.zdzxm == null ? "" : row.zdzxm) + '>' + (row.zdzxm == null ? "" : row.zdzxm) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'zdzpssj') > -1) {
			clumns.push({ field: 'zdzpssj', title: '中队长批示时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'zdzpssj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.zdzpssj == null ? "" : row.zdzpssj) + '>' + (row.zdzpssj == null ? "" : row.zdzpssj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'zdzyj') > -1) {
			clumns.push({ field: 'zdzyj', title: '中队长意见', width: 200, hidden: util.getArrayIndex(option.hidden, 'zdzyj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.zdzyj == null ? "" : row.zdzyj) + '>' + (row.zdzyj == null ? "" : row.zdzyj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'zdzpsbz') > -1) {
			clumns.push({ field: 'zdzpsbz', title: '中队长批示标志(PSBZ)', width: 200, hidden: util.getArrayIndex(option.hidden, 'zdzpsbz') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.zdzpsbz == null ? "" : row.zdzpsbz) + '>' + (row.zdzpsbz == null ? "" : row.zdzpsbz) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ldxm') > -1) {
			clumns.push({ field: 'ldxm', title: '领导姓名', width: 200, hidden: util.getArrayIndex(option.hidden, 'ldxm') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ldxm == null ? "" : row.ldxm) + '>' + (row.ldxm == null ? "" : row.ldxm) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ldpssj') > -1) {
			clumns.push({ field: 'ldpssj', title: '领导批示时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'ldpssj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ldpssj == null ? "" : row.ldpssj) + '>' + (row.ldpssj == null ? "" : row.ldpssj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ldyj') > -1) {
			clumns.push({ field: 'ldyj', title: '领导意见', width: 200, hidden: util.getArrayIndex(option.hidden, 'ldyj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ldyj == null ? "" : row.ldyj) + '>' + (row.ldyj == null ? "" : row.ldyj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ldpsbz') > -1) {
			clumns.push({ field: 'ldpsbz', title: '领导批示标志(PSBZ)', width: 200, hidden: util.getArrayIndex(option.hidden, 'ldpsbz') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ldpsbz == null ? "" : row.ldpsbz) + '>' + (row.ldpsbz == null ? "" : row.ldpsbz) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'bz') > -1) {
			clumns.push({ field: 'bz', title: '备注', width: 200, hidden: util.getArrayIndex(option.hidden, 'bz') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.bz == null ? "" : row.bz) + '>' + (row.bz == null ? "" : row.bz) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'psbz') > -1) {
			clumns.push({ field: 'psbz', title: '批示标识(PSBZ)', width: 200, hidden: util.getArrayIndex(option.hidden, 'psbz') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.psbz == null ? "" : row.psbz) + '>' + (row.psbz == null ? "" : row.psbz) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ywlcid') > -1) {
			clumns.push({ field: 'ywlcid', title: '业务流程ID', width: 200, hidden: util.getArrayIndex(option.hidden, 'ywlcid') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ywlcid == null ? "" : row.ywlcid) + '>' + (row.ywlcid == null ? "" : row.ywlcid) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'state') > -1) {
			clumns.push({ field: 'state', title: '存在状态(YWSTATE)', width: 200, hidden: util.getArrayIndex(option.hidden, 'state') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.state == null ? "" : row.state) + '>' + (row.state == null ? "" : row.state) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'creator') > -1) {
			clumns.push({ field: 'creator', title: '创建人', width: 200, hidden: util.getArrayIndex(option.hidden, 'creator') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.creator == null ? "" : row.creator) + '>' + (row.creator == null ? "" : row.creator) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'createtime') > -1) {
			clumns.push({ field: 'createtime', title: '创建时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'createtime') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.createtime == null ? "" : row.createtime) + '>' + (row.createtime == null ? "" : row.createtime) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'updator') > -1) {
			clumns.push({ field: 'updator', title: '更新人', width: 200, hidden: util.getArrayIndex(option.hidden, 'updator') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.updator == null ? "" : row.updator) + '>' + (row.updator == null ? "" : row.updator) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'updatetime') > -1) {
			clumns.push({ field: 'updatetime', title: '更新时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'updatetime') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.updatetime == null ? "" : row.updatetime) + '>' + (row.updatetime == null ? "" : row.updatetime) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'pastable') > -1) {
			clumns.push({ field: 'pastable', title: '是否有效(SHFO)', width: 200, hidden: util.getArrayIndex(option.hidden, 'pastable') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.pastable == null ? "" : row.pastable) + '>' + (row.pastable == null ? "" : row.pastable) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'syqx') > -1) {
			clumns.push({ field: 'syqx', title: '使用情形', width: 200, hidden: util.getArrayIndex(option.hidden, 'syqx') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.syqx == null ? "" : row.syqx) + '>' + (row.syqx == null ? "" : row.syqx) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'xjsybz') > -1) {
			clumns.push({ field: 'xjsybz', title: '械具使用备注', width: 200, hidden: util.getArrayIndex(option.hidden, 'xjsybz') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.xjsybz == null ? "" : row.xjsybz) + '>' + (row.xjsybz == null ? "" : row.xjsybz) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'xjsyblr') > -1) {
			clumns.push({ field: 'xjsyblr', title: '械具使用办理人', width: 200, hidden: util.getArrayIndex(option.hidden, 'xjsyblr') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.xjsyblr == null ? "" : row.xjsyblr) + '>' + (row.xjsyblr == null ? "" : row.xjsyblr) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'xjsyblsj') > -1) {
			clumns.push({ field: 'xjsyblsj', title: '械具使用时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'xjsyblsj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.xjsyblsj == null ? "" : row.xjsyblsj) + '>' + (row.xjsyblsj == null ? "" : row.xjsyblsj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'bdlx') > -1) {
			clumns.push({ field: 'bdlx', title: '械具变动类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'bdlx') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.bdlx == null ? "" : row.bdlx) + '>' + (row.bdlx == null ? "" : row.bdlx) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'xjycly') > -1) {
			clumns.push({ field: 'xjycly', title: '械具使用变动理由(JJYCYY)', width: 200, hidden: util.getArrayIndex(option.hidden, 'xjycly') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.xjycly == null ? "" : row.xjycly) + '>' + (row.xjycly == null ? "" : row.xjycly) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'yxjsyqx') > -1) {
			clumns.push({ field: 'yxjsyqx', title: '原械具使用期限', width: 200, hidden: util.getArrayIndex(option.hidden, 'yxjsyqx') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.yxjsyqx == null ? "" : row.yxjsyqx) + '>' + (row.yxjsyqx == null ? "" : row.yxjsyqx) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ycjbmj') > -1) {
			clumns.push({ field: 'ycjbmj', title: '延长经办民警', width: 200, hidden: util.getArrayIndex(option.hidden, 'ycjbmj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ycjbmj == null ? "" : row.ycjbmj) + '>' + (row.ycjbmj == null ? "" : row.ycjbmj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ycjbrq') > -1) {
			clumns.push({ field: 'ycjbrq', title: '延长经办日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'ycjbrq') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ycjbrq == null ? "" : row.ycjbrq) + '>' + (row.ycjbrq == null ? "" : row.ycjbrq) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'yczdspr') > -1) {
			clumns.push({ field: 'yczdspr', title: '延长中队审批人', width: 200, hidden: util.getArrayIndex(option.hidden, 'yczdspr') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.yczdspr == null ? "" : row.yczdspr) + '>' + (row.yczdspr == null ? "" : row.yczdspr) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'yczdspsj') > -1) {
			clumns.push({ field: 'yczdspsj', title: '延长中队审批时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'yczdspsj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.yczdspsj == null ? "" : row.yczdspsj) + '>' + (row.yczdspsj == null ? "" : row.yczdspsj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'yczdpsbz') > -1) {
			clumns.push({ field: 'yczdpsbz', title: '延长中队批示标志（PSBZ）', width: 200, hidden: util.getArrayIndex(option.hidden, 'yczdpsbz') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.yczdpsbz == null ? "" : row.yczdpsbz) + '>' + (row.yczdpsbz == null ? "" : row.yczdpsbz) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'yczdspyj') > -1) {
			clumns.push({ field: 'yczdspyj', title: '延长中队审批意见内容', width: 200, hidden: util.getArrayIndex(option.hidden, 'yczdspyj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.yczdspyj == null ? "" : row.yczdspyj) + '>' + (row.yczdspyj == null ? "" : row.yczdspyj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ycldspsj') > -1) {
			clumns.push({ field: 'ycldspsj', title: '延长领导审批时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'ycldspsj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ycldspsj == null ? "" : row.ycldspsj) + '>' + (row.ycldspsj == null ? "" : row.ycldspsj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ycldspr') > -1) {
			clumns.push({ field: 'ycldspr', title: '延长领导审批人', width: 200, hidden: util.getArrayIndex(option.hidden, 'ycldspr') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ycldspr == null ? "" : row.ycldspr) + '>' + (row.ycldspr == null ? "" : row.ycldspr) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ycldpsbz') > -1) {
			clumns.push({ field: 'ycldpsbz', title: '延长领导批示标志（PSBZ）', width: 200, hidden: util.getArrayIndex(option.hidden, 'ycldpsbz') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ycldpsbz == null ? "" : row.ycldpsbz) + '>' + (row.ycldpsbz == null ? "" : row.ycldpsbz) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ycldspyj') > -1) {
			clumns.push({ field: 'ycldspyj', title: '延长领导审批意见内容', width: 200, hidden: util.getArrayIndex(option.hidden, 'ycldspyj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ycldspyj == null ? "" : row.ycldspyj) + '>' + (row.ycldspyj == null ? "" : row.ycldspyj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'xjjcsj') > -1) {
			clumns.push({ field: 'xjjcsj', title: '械具解除时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'xjjcsj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.xjjcsj == null ? "" : row.xjjcsj) + '>' + (row.xjjcsj == null ? "" : row.xjjcsj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jczxr') > -1) {
			clumns.push({ field: 'jczxr', title: '解除执行人', width: 200, hidden: util.getArrayIndex(option.hidden, 'jczxr') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jczxr == null ? "" : row.jczxr) + '>' + (row.jczxr == null ? "" : row.jczxr) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jczxqk') > -1) {
			clumns.push({ field: 'jczxqk', title: '解除执行时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'jczxqk') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jczxqk == null ? "" : row.jczxqk) + '>' + (row.jczxqk == null ? "" : row.jczxqk) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jcbz') > -1) {
			clumns.push({ field: 'jcbz', title: '解除备注', width: 200, hidden: util.getArrayIndex(option.hidden, 'jcbz') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jcbz == null ? "" : row.jcbz) + '>' + (row.jcbz == null ? "" : row.jcbz) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'xjsyzxqk') > -1) {
			clumns.push({ field: 'xjsyzxqk', title: '械具使用执行情况', width: 200, hidden: util.getArrayIndex(option.hidden, 'xjsyzxqk') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.xjsyzxqk == null ? "" : row.xjsyzxqk) + '>' + (row.xjsyzxqk == null ? "" : row.xjsyzxqk) + '</span>' } });
		}

		return clumns;
	};
	return main;
});
