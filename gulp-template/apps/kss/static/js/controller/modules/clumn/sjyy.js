/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Sjyy 数据列表
 */
define(function (require) {
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var main = function (option) {
		var clumns = [];
		if (tools.isTrue(option.check)) {
			clumns.push({
				field: 'oid',
				title: '',
				formatter: function (value, rowData, rowIndex) {
					return '<input type="checkbox" name="selectCheckBox" id="selectCheckBox' + rowIndex + '" value="' + rowData.oid + '" />';
				}
			});
		} else {
			clumns.push({
				field: 'oid',
				title: '',
				formatter: function (value, rowData, rowIndex) {
					return '<input type="radio" name="selectRadio" id="selectRadio' + rowIndex + '" value="' + rowData.oid + '" />';
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'id') > -1) {
			clumns.push({
				field: 'id',
				title: 'ID',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'id') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.id == null ? "" : row.id) + '>' + (row.id == null ? "" : row.id) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'rybh') > -1) {
			clumns.push({
				field: 'rybh',
				title: '人员编号  ',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'rybh') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.rybh == null ? "" : row.rybh) + '>' + (row.rybh == null ? "" : row.rybh) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'jbxxXm') > -1) {
			clumns.push({
				field: 'jbxxXm',
				title: '姓名',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'jbxxXm') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.jbxxXm == null ? "" : row.jbxxXm) + '>' + (row.jbxxXm == null ? "" : row.jbxxXm) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'asbh') > -1) {
			clumns.push({
				field: 'asbh',
				title: '移押所编号',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'asbh') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.asbh == null ? "" : row.asbh) + '>' + (row.asbh == null ? "" : row.asbh) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'asbhString') > -1) {
			clumns.push({
				field: 'asbhString',
				title: '移押监所',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'asbhString') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.asbhString == null ? "" : row.asbhString) + '>' + (row.asbhString == null ? "" : row.asbhString) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'bsbh') > -1) {
			clumns.push({
				field: 'bsbh',
				title: '接收所编号',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'bsbh') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.bsbh == null ? "" : row.bsbh) + '>' + (row.bsbh == null ? "" : row.bsbh) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'bsbhString') > -1) {
			clumns.push({
				field: 'bsbhString',
				title: '接收监所',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'bsbhString') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.bsbhString == null ? "" : row.bsbhString) + '>' + (row.bsbhString == null ? "" : row.bsbhString) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'ysyy') > -1) {
			clumns.push({
				field: 'ysyy',
				title: '移送原因',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'ysyy') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.ysyy == null ? "" : row.ysyy) + '>' + (row.ysyy == null ? "" : row.ysyy) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'psbz') > -1) {
			clumns.push({
				field: 'psbz',
				title: '批示标志',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'psbz') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.psbz == null ? "" : row.psbz) + '>' + (row.psbz == null ? "" : row.psbz) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'psbzString') > -1) {
			clumns.push({
				field: 'psbzString',
				title: '批示标志',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'psbzString') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.psbzString == null ? "" : row.psbzString) + '>' + (row.psbzString == null ? "" : row.psbzString) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'asblr') > -1) {
			clumns.push({
				field: 'asblr',
				title: '移押办理人',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'asblr') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.asblr == null ? "" : row.asblr) + '>' + (row.asblr == null ? "" : row.asblr) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'bz') > -1) {
			clumns.push({
				field: 'bz',
				title: '备注',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'bz') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.bz == null ? "" : row.bz) + '>' + (row.bz == null ? "" : row.bz) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'bsblr') > -1) {
			clumns.push({
				field: 'bsblr',
				title: 'B所办理人',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'bsblr') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.bsblr == null ? "" : row.bsblr) + '>' + (row.bsblr == null ? "" : row.bsblr) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'bsblsj') > -1) {
			clumns.push({
				field: 'bsblsj',
				title: 'B所办理时间',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'bsblsj') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.bsblsj == null ? "" : row.bsblsj) + '>' + (row.bsblsj == null ? "" : row.bsblsj) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'asblsj') > -1) {
			clumns.push({
				field: 'asblsj',
				title: '移押办理时间',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'asblsj') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.asblsj == null ? "" : row.asblsj) + '>' + (row.asblsj == null ? "" : row.asblsj) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'yyzt') > -1) {
			clumns.push({
				field: 'yyzt',
				title: '移押状态',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'yyzt') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.yyzt == null ? "" : row.yyzt) + '>' + (row.yyzt == null ? "" : row.yyzt) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'stateString') > -1) {
			clumns.push({
				field: 'stateString',
				title: '移押状态',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'stateString') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.stateString == null ? "" : row.stateString) + '>' + (row.stateString == null ? "" : row.stateString) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'ywlcid') > -1) {
			clumns.push({
				field: 'ywlcid',
				title: '业务流程ID',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'ywlcid') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.ywlcid == null ? "" : row.ywlcid) + '>' + (row.ywlcid == null ? "" : row.ywlcid) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'state') > -1) {
			clumns.push({
				field: 'state',
				title: '删除状态',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'state') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.state == null ? "" : row.state) + '>' + (row.state == null ? "" : row.state) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'stateString') > -1) {
			clumns.push({
				field: 'stateString',
				title: '删除状态',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'stateString') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.stateString == null ? "" : row.stateString) + '>' + (row.stateString == null ? "" : row.stateString) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'creator') > -1) {
			clumns.push({
				field: 'creator',
				title: '创建人',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'creator') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.creator == null ? "" : row.creator) + '>' + (row.creator == null ? "" : row.creator) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'createtime') > -1) {
			clumns.push({
				field: 'createtime',
				title: '创建时间',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'createtime') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.createtime == null ? "" : row.createtime) + '>' + (row.createtime == null ? "" : row.createtime) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'updator') > -1) {
			clumns.push({
				field: 'updator',
				title: '更新人',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'updator') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.updator == null ? "" : row.updator) + '>' + (row.updator == null ? "" : row.updator) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'updatetime') > -1) {
			clumns.push({
				field: 'updatetime',
				title: '更新时间',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'updatetime') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.updatetime == null ? "" : row.updatetime) + '>' + (row.updatetime == null ? "" : row.updatetime) + '</span>'
				}
			});
		}

		return clumns;
	};
	return main;
});