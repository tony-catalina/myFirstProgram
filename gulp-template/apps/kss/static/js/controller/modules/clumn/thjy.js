/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Thjy 数据列表
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
			clumns.push({ field: 'snbh', title: '人员编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'snbh') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.snbh == null ? "" : row.snbh) + '>' + (row.snbh == null ? "" : row.snbh) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'xm') > -1) {
			clumns.push({ field: 'xm', title: '姓名', width: 200, hidden: util.getArrayIndex(option.hidden, 'xm') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.xm == null ? "" : row.xm) + '>' + (row.xm == null ? "" : row.xm) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'jsh') > -1) {
			clumns.push({ field: 'jsh', title: '监室号', width: 200, hidden: util.getArrayIndex(option.hidden, 'jsh') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jsh == null ? "" : row.jsh) + '>' + (row.jsh == null ? "" : row.jsh) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'rsxzString') > -1) {
			clumns.push({ field: 'rsxzString', title: '入所性质', width: 200, hidden: util.getArrayIndex(option.hidden, 'rsxzString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.rsxzString == null ? "" : row.rsxzString) + '>' + (row.rsxzString == null ? "" : row.rsxzString) + '</span>' } });
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
			clumns.push({ field: 'jssjString', title: '结束时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'jssjString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.jssjString == null ? "" : row.jssjString) + '>' + (row.jssjString == null ? "" : row.jssjString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'createtimeString') > -1) {
			clumns.push({ field: 'createtimeString', title: '录入时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'createtimeString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.createtimeString == null ? "" : row.createtimeString) + '>' + (row.createtimeString == null ? "" : row.createtimeString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'thyy') > -1) {
			clumns.push({ field: 'thyy', title: '谈话原因', width: 200, hidden: util.getArrayIndex(option.hidden, 'thyy') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.thyy == null ? "" : row.thyy) + '>' + (row.thyy == null ? "" : row.thyy) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'thyyString') > -1) {
			clumns.push({ field: 'thyyString', title: '谈话原因', width: 200, hidden: util.getArrayIndex(option.hidden, 'thyyString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.thyyString == null ? "" : row.thyyString) + '>' + (row.thyyString == null ? "" : row.thyyString) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'thnr') > -1) {
			clumns.push({ field: 'thnr', title: '谈话内容', width: 200, hidden: util.getArrayIndex(option.hidden, 'thnr') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.thnr == null ? "" : row.thnr) + '>' + (row.thnr == null ? "" : row.thnr) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'fzmj') > -1) {
			clumns.push({ field: 'fzmj', title: '负责民警', width: 200, hidden: util.getArrayIndex(option.hidden, 'fzmj') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.fzmj == null ? "" : row.fzmj) + '>' + (row.fzmj == null ? "" : row.fzmj) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ywqxyc') > -1) {
			clumns.push({ field: 'ywqxyc', title: '有无情绪异常', width: 200, hidden: util.getArrayIndex(option.hidden, 'ywqxyc') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ywqxyc == null ? "" : row.ywqxyc) + '>' + (row.ywqxyc == null ? "" : row.ywqxyc) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'qxycqk') > -1) {
			clumns.push({ field: 'qxycqk', title: '情绪异常情况', width: 200, hidden: util.getArrayIndex(option.hidden, 'qxycqk') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.qxycqk == null ? "" : row.qxycqk) + '>' + (row.qxycqk == null ? "" : row.qxycqk) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ywzssb') > -1) {
			clumns.push({ field: 'ywzssb', title: '有无自述伤病', width: 200, hidden: util.getArrayIndex(option.hidden, 'ywzssb') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ywzssb == null ? "" : row.ywzssb) + '>' + (row.ywzssb == null ? "" : row.ywzssb) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'sbqk') > -1) {
			clumns.push({ field: 'sbqk', title: '伤病情况', width: 200, hidden: util.getArrayIndex(option.hidden, 'sbqk') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.sbqk == null ? "" : row.sbqk) + '>' + (row.sbqk == null ? "" : row.sbqk) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'sfljjs') > -1) {
			clumns.push({ field: 'sfljjs', title: '是否理解接受', width: 200, hidden: util.getArrayIndex(option.hidden, 'sfljjs') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.sfljjs == null ? "" : row.sfljjs) + '>' + (row.sfljjs == null ? "" : row.sfljjs) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'bljjsyy') > -1) {
			clumns.push({ field: 'bljjsyy', title: '不理解接受原因', width: 200, hidden: util.getArrayIndex(option.hidden, 'bljjsyy') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.bljjsyy == null ? "" : row.bljjsyy) + '>' + (row.bljjsyy == null ? "" : row.bljjsyy) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'bllbz') > -1) {
			clumns.push({ field: 'bllbz', title: '补录入标志', width: 200, hidden: util.getArrayIndex(option.hidden, 'bllbz') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.bllbz == null ? "" : row.bllbz) + '>' + (row.bllbz == null ? "" : row.bllbz) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'sjzlJsbz') > -1) {
			clumns.push({ field: 'sjzlJsbz', title: '及时标记', width: 200, hidden: util.getArrayIndex(option.hidden, 'sjzlJsbz') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.sjzlJsbz == null ? "" : row.sjzlJsbz) + '>' + (row.sjzlJsbz == null ? "" : row.sjzlJsbz) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'barcode') > -1) {
			clumns.push({ field: 'barcode', title: '条码', width: 200, hidden: util.getArrayIndex(option.hidden, 'barcode') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.barcode == null ? "" : row.barcode) + '>' + (row.barcode == null ? "" : row.barcode) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'usefinger') > -1) {
			clumns.push({ field: 'usefinger', title: '使用指纹标记', width: 200, hidden: util.getArrayIndex(option.hidden, 'usefinger') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.usefinger == null ? "" : row.usefinger) + '>' + (row.usefinger == null ? "" : row.usefinger) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'nozhiwenyy') > -1) {
			clumns.push({ field: 'nozhiwenyy', title: '未使用指纹原因', width: 200, hidden: util.getArrayIndex(option.hidden, 'nozhiwenyy') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.nozhiwenyy == null ? "" : row.nozhiwenyy) + '>' + (row.nozhiwenyy == null ? "" : row.nozhiwenyy) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'skth') > -1) {
			clumns.push({ field: 'skth', title: '涉恐谈话', width: 200, hidden: util.getArrayIndex(option.hidden, 'skth') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.skth == null ? "" : row.skth) + '>' + (row.skth == null ? "" : row.skth) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'skthString') > -1) {
			clumns.push({ field: 'skthString', title: '涉恐谈话', width: 200, hidden: util.getArrayIndex(option.hidden, 'skthString') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.skthString == null ? "" : row.skthString) + '>' + (row.skthString == null ? "" : row.skthString) + '</span>' } });
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
		if (util.getArrayIndex(option.clumns, 'thdd') > -1) {
			clumns.push({ field: 'thdd', title: '谈话地点', width: 200, hidden: util.getArrayIndex(option.hidden, 'thdd') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.thdd == null ? "" : row.thdd) + '>' + (row.thdd == null ? "" : row.thdd) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'sfls') > -1) {
			clumns.push({ field: 'sfls', title: '是否遵守监规服从管教', width: 200, hidden: util.getArrayIndex(option.hidden, 'sfls') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.sfls == null ? "" : row.sfls) + '>' + (row.sfls == null ? "" : row.sfls) + '</span>' } });
		}
		if (util.getArrayIndex(option.clumns, 'ywqyxx') > -1) {
			clumns.push({ field: 'ywqyxx', title: '有无欺压现象', width: 200, hidden: util.getArrayIndex(option.hidden, 'ywqyxx') > -1 ? true : false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ywqyxx == null ? "" : row.ywqyxx) + '>' + (row.ywqyxx == null ? "" : row.ywqyxx) + '</span>' } });
		}

		return clumns;
	};
	return main;
});