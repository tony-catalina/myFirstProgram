/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Shff 数据列表
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
			clumns.push({ field: 'id', title: 'ID', width: 200, hidden: util.getArrayIndex(option.hidden, 'id') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.id == null ? "" : row.id) + '>' + (row.id == null ? "" : row.id) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'rybh') > -1) {
			clumns.push({ field: 'rybh', title: '人员编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'rybh') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.rybh == null ? "" : row.rybh) + '>' + (row.rybh == null ? "" : row.rybh) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jsbh') > -1) {
			clumns.push({ field: 'jsbh', title: '监所编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'jsbh') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jsbh == null ? "" : row.jsbh) + '>' + (row.jsbh == null ? "" : row.jsbh) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jsh') > -1) {
			clumns.push({ field: 'jsh', title: '监室号', width: 200, hidden: util.getArrayIndex(option.hidden, 'jsh') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jsh == null ? "" : row.jsh) + '>' + (row.jsh == null ? "" : row.jsh) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'shid') > -1) {
			clumns.push({ field: 'shid', title: '手环ID', width: 200, hidden: util.getArrayIndex(option.hidden, 'shid') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.shid == null ? "" : row.shid) + '>' + (row.shid == null ? "" : row.shid) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'bdzt') > -1) {
			clumns.push({
				field: 'bdzt', title: '绑定状态', width: 200, hidden: util.getArrayIndex(option.hidden, 'bdzt') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) {
					var bdzts = "";
					if (row.bdzt == 1) {
						bdzts = "绑定申请";
					} else if (row.bdzt == 2) {
						bdzts = "已绑定";
					} else {
						bdzts = "已解绑";
					}
					return '<span title=' + bdzts + '>' + bdzts + '</span>'				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'bdztString') > -1) {
			clumns.push({ field: 'bdztString', title: '绑定状态', width: 200, hidden: util.getArrayIndex(option.hidden, 'bdztString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.bdztString == null ? "" : row.bdztString) + '>' + (row.bdztString == null ? "" : row.bdztString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'bdsj') > -1) {
			clumns.push({ field: 'bdsj', title: '绑定时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'bdsj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.bdsj == null ? "" : row.bdsj) + '>' + (row.bdsj == null ? "" : row.bdsj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'bdr') > -1) {
			clumns.push({ field: 'bdr', title: '绑定人', width: 200, hidden: util.getArrayIndex(option.hidden, 'bdr') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.bdr == null ? "" : row.bdr) + '>' + (row.bdr == null ? "" : row.bdr) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jbsj') > -1) {
			clumns.push({ field: 'jbsj', title: '解绑时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbsj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jbsj == null ? "" : row.jbsj) + '>' + (row.jbsj == null ? "" : row.jbsj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jbyy') > -1) {
			clumns.push({ field: 'jbyy', title: '解绑原因', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbyy') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jbyy == null ? "" : row.jbyy) + '>' + (row.jbyy == null ? "" : row.jbyy) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jbr') > -1) {
			clumns.push({ field: 'jbr', title: '解绑人', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbr') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jbr == null ? "" : row.jbr) + '>' + (row.jbr == null ? "" : row.jbr) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'xgqk') > -1) {
			clumns.push({ field: 'xgqk', title: '补发时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'xgqk') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.xgqk == null ? "" : row.xgqk) + '>' + (row.xgqk == null ? "" : row.xgqk) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'bfyy') > -1) {
			clumns.push({ field: 'bfyy', title: '补发原因', width: 200, hidden: util.getArrayIndex(option.hidden, 'bfyy') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.bfyy == null ? "" : row.bfyy) + '>' + (row.bfyy == null ? "" : row.bfyy) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'bz') > -1) {
			clumns.push({ field: 'bz', title: '备注', width: 200, hidden: util.getArrayIndex(option.hidden, 'bz') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.bz == null ? "" : row.bz) + '>' + (row.bz == null ? "" : row.bz) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'state') > -1) {
			clumns.push({ field: 'state', title: '状态', width: 200, hidden: util.getArrayIndex(option.hidden, 'state') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.state == null ? "" : row.state) + '>' + (row.state == null ? "" : row.state) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'stateString') > -1) {
			clumns.push({ field: 'stateString', title: '状态', width: 200, hidden: util.getArrayIndex(option.hidden, 'stateString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.stateString == null ? "" : row.stateString) + '>' + (row.stateString == null ? "" : row.stateString) + '</span>' } });
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