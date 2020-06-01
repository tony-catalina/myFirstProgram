/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Photos 数据列表
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
		if (util.getArrayIndex(option.clumns, 'jsbh') > -1) {
			clumns.push({ field: 'jsbh', title: '监所编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'jsbh') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jsbh == null ? "" : row.jsbh) + '>' + (row.jsbh == null ? "" : row.jsbh) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'rybh') > -1) {
			clumns.push({ field: 'rybh', title: '人员编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'rybh') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.rybh == null ? "" : row.rybh) + '>' + (row.rybh == null ? "" : row.rybh) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'photo') > -1) {
			clumns.push({ field: 'photo', title: '照片', width: 200, hidden: util.getArrayIndex(option.hidden, 'photo') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.photo == null ? "" : row.photo) + '>' + (row.photo == null ? "" : row.photo) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'type') > -1) {
			clumns.push({
				field: 'type', title: '位置', width: 200, hidden: util.getArrayIndex(option.hidden, 'type') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) {
					if (row.type == '1') {
						return '正面照'
					} else if (row.type == '2') {
						return '侧面照一'
					} else if (row.type == '3') {
						return '侧面照二'
					}
					// return '<span title=' + (row.type == null ? "" : row.type) + '>' + (row.type == null ? "" : row.type) + '</span>'
				}
			}
			);
		}
		if (util.getArrayIndex(option.clumns, 'ywzp') > -1) {
			clumns.push({
				field: 'ywzp', title: '有无照片', width: 200, hidden: util.getArrayIndex(option.hidden, 'ywzp') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) {
					if (row.ywzp == '1') {
						return '有'
					} else if (row.ywzp == '0') {
						return '无'
					}
					// return '<span title=' + (row.ywzp == null ? "" : row.ywzp) + '>' + (row.ywzp == null ? "" : row.ywzp) + '</span>'
				}
			}
			);
		}
		if (util.getArrayIndex(option.clumns, 'typetemp') > -1) {
			clumns.push({ field: 'typetemp', title: '临时照片', width: 200, hidden: util.getArrayIndex(option.hidden, 'typetemp') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.typetemp == null ? "" : row.typetemp) + '>' + (row.typetemp == null ? "" : row.typetemp) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'state') > -1) {
			clumns.push({ field: 'state', title: '删除状态', width: 200, hidden: util.getArrayIndex(option.hidden, 'state') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.state == null ? "" : row.state) + '>' + (row.state == null ? "" : row.state) + '</span>' } });
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
		if (util.getArrayIndex(option.clumns, 'photoUrl') > -1) {
			clumns.push({
				field: 'photoUrl', title: '照片URL', width: 200, hidden: util.getArrayIndex(option.hidden, 'photoUrl') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) {
					return '<span title=“双击查看图片">' + (row.photoUrl == null ? "" : "双击查看图片") + '</span>'
				}
			}
			);
		}

		return clumns;
	};
	return main;
});