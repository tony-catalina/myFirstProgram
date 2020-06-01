/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Emdj 数据列表
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
		if (util.getArrayIndex(option.clumns, 'jbxxSnbh') > -1) {
			clumns.push({ field: 'jbxxSnbh', title: '人员编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbxxSnbh') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jbxxSnbh == null ? "" : row.jbxxSnbh) + '>' + (row.jbxxSnbh == null ? "" : row.jbxxSnbh) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jbxxXm') > -1) {
			clumns.push({ field: 'jbxxXm', title: '姓名', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbxxXm') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jbxxXm == null ? "" : row.jbxxXm) + '>' + (row.jbxxXm == null ? "" : row.jbxxXm) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jbxx_xb') > -1) {
			clumns.push({ field: 'jbxx_xb', title: '性别', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbxx_xb') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jbxx_xb == null ? "" : row.jbxx_xb) + '>' + (row.jbxx_xb == null ? "" : row.jbxx_xb) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'xb') > -1) {
			clumns.push({ field: 'xbString', title: '性别', width: 200, hidden: util.getArrayIndex(option.hidden, 'xbString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.xbString == null ? "" : row.xbString) + '>' + (row.xbString == null ? "" : row.xbString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jbxx_bahj') > -1) {
			clumns.push({ field: 'jbxx_bahj', title: '办案环节', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbxx_bahj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jbxx_bahj == null ? "" : row.jbxx_bahj) + '>' + (row.jbxx_bahj == null ? "" : row.jbxx_bahj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'bahj') > -1) {
			clumns.push({ field: 'bahjString', title: '办案环节', width: 200, hidden: util.getArrayIndex(option.hidden, 'bahjString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.bahjString == null ? "" : row.bahjString) + '>' + (row.bahjString == null ? "" : row.bahjString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jbxx_rsrq') > -1) {
			clumns.push({ field: 'jbxx_rsrq', title: '入所时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbxx_rsrq') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jbxx_rsrq == null ? "" : row.jbxx_rsrq) + '>' + (row.jbxx_rsrq == null ? "" : row.jbxx_rsrq) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'rsrqString') > -1) {
			clumns.push({ field: 'rsrqString', title: '入所日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'rsrqString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.rsrqString == null ? "" : row.rsrqString) + '>' + (row.rsrqString == null ? "" : row.rsrqString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jbxx_sxzm') > -1) {
			clumns.push({ field: 'jbxx_sxzm', title: '涉嫌罪名', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbxx_sxzm') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jbxx_sxzm == null ? "" : row.jbxx_sxzm) + '>' + (row.jbxx_sxzm == null ? "" : row.jbxx_sxzm) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ayString') > -1) {
			clumns.push({ field: 'ayString', title: '涉嫌罪名', width: 200, hidden: util.getArrayIndex(option.hidden, 'ayString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ayString == null ? "" : row.ayString) + '>' + (row.ayString == null ? "" : row.ayString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jsh') > -1) {
			clumns.push({ field: 'jsh', title: '监室号', width: 200, hidden: util.getArrayIndex(option.hidden, 'jsh') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jsh == null ? "" : row.jsh) + '>' + (row.jsh == null ? "" : row.jsh) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'bllx') > -1) {
			clumns.push({ field: 'bllx', title: '耳目办理类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'bllx') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.bllx == null ? "" : row.bllx) + '>' + (row.bllx == null ? "" : row.bllx) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ly') > -1) {
			clumns.push({ field: 'ly', title: '设置理由', width: 200, hidden: util.getArrayIndex(option.hidden, 'ly') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ly == null ? "" : row.ly) + '>' + (row.ly == null ? "" : row.ly) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'lyString') > -1) {
			clumns.push({ field: 'lyString', title: '设置理由', width: 200, hidden: util.getArrayIndex(option.hidden, 'lyString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.lyString == null ? "" : row.lyString) + '>' + (row.lyString == null ? "" : row.lyString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jbr') > -1) {
			clumns.push({ field: 'jbr', title: '经办人', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbr') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jbr == null ? "" : row.jbr) + '>' + (row.jbr == null ? "" : row.jbr) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'szrq') > -1) {
			clumns.push({ field: 'szrq', title: '设置日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'szrq') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.szrq == null ? "" : row.szrq) + '>' + (row.szrq == null ? "" : row.szrq) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'szrqString') > -1) {
			clumns.push({ field: 'szrqString', title: '设置日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'szrqString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.szrqString == null ? "" : row.szrqString) + '>' + (row.szrqString == null ? "" : row.szrqString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'emlxString') > -1) {
			clumns.push({ field: 'emlxString', title: '耳目类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'emlxString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.emlxString == null ? "" : row.emlxString) + '>' + (row.emlxString == null ? "" : row.emlxString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jnbx') > -1) {
			clumns.push({ field: 'jnbx', title: '自觉遵守监规监纪情况', width: 200, hidden: util.getArrayIndex(option.hidden, 'jnbx') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jnbx == null ? "" : row.jnbx) + '>' + (row.jnbx == null ? "" : row.jnbx) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'xlzy') > -1) {
			clumns.push({ field: 'xlzy', title: '反映监室动态情况', width: 200, hidden: util.getArrayIndex(option.hidden, 'xlzy') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.xlzy == null ? "" : row.xlzy) + '>' + (row.xlzy == null ? "" : row.xlzy) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'khpj') > -1) {
			clumns.push({ field: 'khpj', title: '考核等级', width: 200, hidden: util.getArrayIndex(option.hidden, 'khpj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.khpj == null ? "" : row.khpj) + '>' + (row.khpj == null ? "" : row.khpj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'khpjString') > -1) {
			clumns.push({ field: 'khpjString', title: '考核等级', width: 200, hidden: util.getArrayIndex(option.hidden, 'khpjString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.khpjString == null ? "" : row.khpjString) + '>' + (row.khpjString == null ? "" : row.khpjString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'gjxm') > -1) {
			clumns.push({ field: 'gjxm', title: '管教姓名', width: 200, hidden: util.getArrayIndex(option.hidden, 'gjxm') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.gjxm == null ? "" : row.gjxm) + '>' + (row.gjxm == null ? "" : row.gjxm) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'gjyj') > -1) {
			clumns.push({ field: 'gjyj', title: '管教意见', width: 200, hidden: util.getArrayIndex(option.hidden, 'gjyj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.gjyj == null ? "" : row.gjyj) + '>' + (row.gjyj == null ? "" : row.gjyj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'gjpssj') > -1) {
			clumns.push({ field: 'gjpssj', title: '管教批示时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'gjpssj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.gjpssj == null ? "" : row.gjpssj) + '>' + (row.gjpssj == null ? "" : row.gjpssj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ldxm') > -1) {
			clumns.push({ field: 'ldxm', title: '领导姓名', width: 200, hidden: util.getArrayIndex(option.hidden, 'ldxm') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ldxm == null ? "" : row.ldxm) + '>' + (row.ldxm == null ? "" : row.ldxm) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ldyj') > -1) {
			clumns.push({ field: 'ldyj', title: '领导意见', width: 200, hidden: util.getArrayIndex(option.hidden, 'ldyj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ldyj == null ? "" : row.ldyj) + '>' + (row.ldyj == null ? "" : row.ldyj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ldpssj') > -1) {
			clumns.push({ field: 'ldpssj', title: '领导批示时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'ldpssj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ldpssj == null ? "" : row.ldpssj) + '>' + (row.ldpssj == null ? "" : row.ldpssj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'qtqk') > -1) {
			clumns.push({ field: 'qtqk', title: '其他耳目工作完成情况', width: 200, hidden: util.getArrayIndex(option.hidden, 'qtqk') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.qtqk == null ? "" : row.qtqk) + '>' + (row.qtqk == null ? "" : row.qtqk) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'zdzxm') > -1) {
			clumns.push({ field: 'zdzxm', title: '中队长姓名', width: 200, hidden: util.getArrayIndex(option.hidden, 'zdzxm') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.zdzxm == null ? "" : row.zdzxm) + '>' + (row.zdzxm == null ? "" : row.zdzxm) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'zdzyj') > -1) {
			clumns.push({ field: 'zdzyj', title: '中队长意见', width: 200, hidden: util.getArrayIndex(option.hidden, 'zdzyj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.zdzyj == null ? "" : row.zdzyj) + '>' + (row.zdzyj == null ? "" : row.zdzyj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'zdzpssj') > -1) {
			clumns.push({ field: 'zdzpssj', title: '中队长批示时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'zdzpssj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.zdzpssj == null ? "" : row.zdzpssj) + '>' + (row.zdzpssj == null ? "" : row.zdzpssj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'bz') > -1) {
			clumns.push({ field: 'bz', title: '备注', width: 200, hidden: util.getArrayIndex(option.hidden, 'bz') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.bz == null ? "" : row.bz) + '>' + (row.bz == null ? "" : row.bz) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ywlcid') > -1) {
			clumns.push({ field: 'ywlcid', title: '业务流程使用', width: 200, hidden: util.getArrayIndex(option.hidden, 'ywlcid') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ywlcid == null ? "" : row.ywlcid) + '>' + (row.ywlcid == null ? "" : row.ywlcid) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'psbz') > -1) {
			clumns.push({ field: 'psbz', title: '批示标志', width: 200, hidden: util.getArrayIndex(option.hidden, 'psbz') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.psbz == null ? "" : row.psbz) + '>' + (row.psbz == null ? "" : row.psbz) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'state') > -1) {
			clumns.push({ field: 'state', title: '存在状态', width: 200, hidden: util.getArrayIndex(option.hidden, 'state') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.state == null ? "" : row.state) + '>' + (row.state == null ? "" : row.state) + '</span>' } });
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

		return clumns;
	};
	return main;
});