/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * MjJbxx 数据列表
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
		if (util.getArrayIndex(option.clumns, 'jsbh') > -1) {
			clumns.push({
				field: 'jsbh',
				title: '拘所编号',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'jsbh') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.jsbh == null ? "" : row.jsbh) + '>' + (row.jsbh == null ? "" : row.jsbh) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'jh') > -1) {
			clumns.push({
				field: 'jh',
				title: '警号',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'jh') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.jh == null ? "" : row.jh) + '>' + (row.jh == null ? "" : row.jh) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'xm') > -1) {
			clumns.push({
				field: 'xm',
				title: '姓名',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'xm') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.xm == null ? "" : row.xm) + '>' + (row.xm == null ? "" : row.xm) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'xbString') > -1) {
			clumns.push({
				field: 'xbString',
				title: '性别',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'xbString') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.xbString == null ? "" : row.xbString) + '>' + (row.xbString == null ? "" : row.xbString) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'mz') > -1) {
			clumns.push({
				field: 'mz',
				title: '民族',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'mz') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.mz == null ? "" : row.mz) + '>' + (row.mz == null ? "" : row.mz) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'sfzh') > -1) {
			clumns.push({
				field: 'sfzh',
				title: '身份证号',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'sfzh') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.sfzh == null ? "" : row.sfzh) + '>' + (row.sfzh == null ? "" : row.sfzh) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'csny') > -1) {
			clumns.push({
				field: 'csny',
				title: '出生年月',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'csny') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.csny == null ? "" : row.csny) + '>' + (row.csny == null ? "" : row.csny) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'jx') > -1) {
			clumns.push({
				field: 'jx',
				title: '警衔',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'jx') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.jx == null ? "" : row.jx) + '>' + (row.jx == null ? "" : row.jx) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'xl') > -1) {
			clumns.push({
				field: 'xl',
				title: '学历',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'xl') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.xl == null ? "" : row.xl) + '>' + (row.xl == null ? "" : row.xl) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'zzmm') > -1) {
			clumns.push({
				field: 'zzmm',
				title: '政治面貌',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'zzmm') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.zzmm == null ? "" : row.zzmm) + '>' + (row.zzmm == null ? "" : row.zzmm) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'cjgmgzsj') > -1) {
			clumns.push({
				field: 'cjgmgzsj',
				title: '参加革命时间',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'cjgmgzsj') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.cjgmgzsj == null ? "" : row.cjgmgzsj) + '>' + (row.cjgmgzsj == null ? "" : row.cjgmgzsj) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'hyzk') > -1) {
			clumns.push({
				field: 'hyzk',
				title: '婚姻状况',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'hyzk') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.hyzk == null ? "" : row.hyzk) + '>' + (row.hyzk == null ? "" : row.hyzk) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'jtzz') > -1) {
			clumns.push({
				field: 'jtzz',
				title: '家庭住址',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'jtzz') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.jtzz == null ? "" : row.jtzz) + '>' + (row.jtzz == null ? "" : row.jtzz) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'hjszd') > -1) {
			clumns.push({
				field: 'hjszd',
				title: '户籍所在地',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'hjszd') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.hjszd == null ? "" : row.hjszd) + '>' + (row.hjszd == null ? "" : row.hjszd) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'cjgzsj') > -1) {
			clumns.push({
				field: 'cjgzsj',
				title: '参加工作时间',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'cjgzsj') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.cjgzsj == null ? "" : row.cjgzsj) + '>' + (row.cjgzsj == null ? "" : row.cjgzsj) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'bm') > -1) {
			clumns.push({
				field: 'bm',
				title: '部门',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'bm') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.bm == null ? "" : row.bm) + '>' + (row.bm == null ? "" : row.bm) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'bmzw') > -1) {
			clumns.push({
				field: 'bmzw',
				title: '部门职务',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'bmzw') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.bmzw == null ? "" : row.bmzw) + '>' + (row.bmzw == null ? "" : row.bmzw) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'gbzwjb') > -1) {
			clumns.push({
				field: 'gbzwjb',
				title: '职务级别',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'gbzwjb') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.gbzwjb == null ? "" : row.gbzwjb) + '>' + (row.gbzwjb == null ? "" : row.gbzwjb) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'lxdh') > -1) {
			clumns.push({
				field: 'lxdh',
				title: '联系电话',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'lxdh') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.lxdh == null ? "" : row.lxdh) + '>' + (row.lxdh == null ? "" : row.lxdh) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'flag') > -1) {
			clumns.push({
				field: 'flag',
				title: '标志',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'flag') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.flag == null ? "" : row.flag) + '>' + (row.flag == null ? "" : row.flag) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'sjh') > -1) {
			clumns.push({
				field: 'sjh',
				title: '手机号',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'sjh') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.sjh == null ? "" : row.sjh) + '>' + (row.sjh == null ? "" : row.sjh) + '</span>'
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
		if (util.getArrayIndex(option.clumns, 'lkrq') > -1) {
			clumns.push({
				field: 'lkrq',
				title: '调动日期',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'lkrq') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.lkrq == null ? "" : row.lkrq) + '>' + (row.lkrq == null ? "" : row.lkrq) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'lkyy') > -1) {
			clumns.push({
				field: 'lkyy',
				title: '调动原因',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'lkyy') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.lkyy == null ? "" : row.lkyy) + '>' + (row.lkyy == null ? "" : row.lkyy) + '</span>'
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
		if (util.getArrayIndex(option.clumns, 'scbz') > -1) {
			clumns.push({
				field: 'scbz',
				title: '上传标志',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'scbz') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.scbz == null ? "" : row.scbz) + '>' + (row.scbz == null ? "" : row.scbz) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'operator') > -1) {
			clumns.push({
				field: 'operator',
				title: '操作人',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'operator') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.operator == null ? "" : row.operator) + '>' + (row.operator == null ? "" : row.operator) + '</span>'
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
		if (util.getArrayIndex(option.clumns, 'sfzz') > -1) {
			clumns.push({
				field: 'sfzz',
				title: '是否在职',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'sfzz') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.sfzz == null ? "" : row.sfzz) + '>' + (row.sfzz == null ? "" : row.sfzz) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'rtsj') > -1) {
			clumns.push({
				field: 'rtsj',
				title: '入团时间',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'rtsj') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.rtsj == null ? "" : row.rtsj) + '>' + (row.rtsj == null ? "" : row.rtsj) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'rdsj') > -1) {
			clumns.push({
				field: 'rdsj',
				title: '入党时间',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'rdsj') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.rdsj == null ? "" : row.rdsj) + '>' + (row.rdsj == null ? "" : row.rdsj) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'jggzsj') > -1) {
			clumns.push({
				field: 'jggzsj',
				title: '从事监管工作时间',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'jggzsj') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.jggzsj == null ? "" : row.jggzsj) + '>' + (row.jggzsj == null ? "" : row.jggzsj) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'jszc') > -1) {
			clumns.push({
				field: 'jszc',
				title: '技术职称',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'jszc') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.jszc == null ? "" : row.jszc) + '>' + (row.jszc == null ? "" : row.jszc) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'kh') > -1) {
			clumns.push({
				field: 'kh',
				title: '使用卡号',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'kh') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.kh == null ? "" : row.kh) + '>' + (row.kh == null ? "" : row.kh) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'fzjs') > -1) {
			clumns.push({
				field: 'fzjs',
				title: '负责拘室',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'fzjs') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.fzjs == null ? "" : row.fzjs) + '>' + (row.fzjs == null ? "" : row.fzjs) + '</span>'
				}
			});
		}
		if (util.getArrayIndex(option.clumns, 'yhssjs') > -1) {
			clumns.push({
				field: 'yhssjs',
				title: '用户所属角色',
				width: 200,
				hidden: util.getArrayIndex(option.hidden, 'yhssjs') > -1 ? true : false,
				sortable: 'true',
				formatter: function (value, row, index) {
					return '<span title=' + (row.yhssjs == null ? "" : row.yhssjs) + '>' + (row.yhssjs == null ? "" : row.yhssjs) + '</span>'
				}
			});
		}

		return clumns;
	};
	return main;
});