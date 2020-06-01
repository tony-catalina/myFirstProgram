/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Lshj 数据列表
 */
define(function(require) {
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var main = function(option) {
        var clumns = [];
        if (tools.isTrue(option.check)) {
            clumns.push({ field: 'oid', title: '', formatter: function(value, rowData, rowIndex) { return '<input type="checkbox" name="selectCheckBox" id="selectCheckBox' + rowIndex + '" value="' + rowData.oid + '" />'; } });
        } else {
            clumns.push({ field: 'oid', title: '', formatter: function(value, rowData, rowIndex) { return '<input type="radio" name="selectRadio" id="selectRadio' + rowIndex + '" value="' + rowData.oid + '" />'; } });
        }
        if (util.getArrayIndex(option.clumns, 'id') > -1) {
            clumns.push({ field: 'id', title: 'ID', width: 200, hidden: util.getArrayIndex(option.hidden, 'id') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.id == null ? "" : row.id) + '>' + (row.id == null ? "" : row.id) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jsbh') > -1) {
            clumns.push({ field: 'jsbh', title: '监所编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'jsbh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jsbh == null ? "" : row.jsbh) + '>' + (row.jsbh == null ? "" : row.jsbh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'rybh') > -1) {
            clumns.push({ field: 'rybh', title: '人员编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'rybh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.rybh == null ? "" : row.rybh) + '>' + (row.rybh == null ? "" : row.rybh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jbxx_xm') > -1) {
            clumns.push({ field: 'xm', title: '姓名', width: 200, hidden: util.getArrayIndex(option.hidden, 'xm') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.xm == null ? "" : row.xm) + '>' + (row.xm == null ? "" : row.xm) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'xm') > -1) {
            clumns.push({ field: 'xm', title: '姓名', width: 200, hidden: util.getArrayIndex(option.hidden, 'xm') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.xm == null ? "" : row.xm) + '>' + (row.xm == null ? "" : row.xm) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jbxx_bm') > -1) {
            clumns.push({ field: 'jbxx_bm', title: '别名', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbxx_bm') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jbxx_bm == null ? "" : row.jbxx_bm) + '>' + (row.jbxx_bm == null ? "" : row.jbxx_bm) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'xbString') > -1) {
            clumns.push({ field: 'xbString', title: '性别', width: 200, hidden: util.getArrayIndex(option.hidden, 'xbString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.xbString == null ? "" : row.xbString) + '>' + (row.xbString == null ? "" : row.xbString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'ayString') > -1) {
            clumns.push({ field: 'ayString', title: '涉嫌罪名', width: 200, hidden: util.getArrayIndex(option.hidden, 'ayString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.ayString == null ? "" : row.ayString) + '>' + (row.ayString == null ? "" : row.ayString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jbxx_jsh') > -1) {
            clumns.push({ field: 'jbxx_jsh', title: '监室号', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbxx_jsh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jbxx_jsh == null ? "" : row.jbxx_jsh) + '>' + (row.jbxx_jsh == null ? "" : row.jbxx_jsh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jsh') > -1) {
            clumns.push({ field: 'jsh', title: '监室号', width: 200, hidden: util.getArrayIndex(option.hidden, 'jsh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jsh == null ? "" : row.jsh) + '>' + (row.jsh == null ? "" : row.jsh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jbxx_rsrq') > -1) {
            clumns.push({ field: 'jbxx_rsrq', title: '入所日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbxx_rsrq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jbxx_rsrq == null ? "" : row.jbxx_rsrq) + '>' + (row.jbxx_rsrq == null ? "" : row.jbxx_rsrq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jbxx_gyqx') > -1) {
            clumns.push({ field: 'jbxx_gyqx', title: '关押期限', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbxx_gyqx') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jbxx_gyqx == null ? "" : row.jbxx_gyqx) + '>' + (row.jbxx_gyqx == null ? "" : row.jbxx_gyqx) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jbxx_bahj') > -1) {
            clumns.push({ field: 'jbxx_bahj', title: '办案环节', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbxx_bahj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jbxx_bahj == null ? "" : row.jbxx_bahj) + '>' + (row.jbxx_bahj == null ? "" : row.jbxx_bahj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'tbr') > -1) {
            clumns.push({ field: 'tbr', title: '填表人', width: 200, hidden: util.getArrayIndex(option.hidden, 'tbr') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.tbr == null ? "" : row.tbr) + '>' + (row.tbr == null ? "" : row.tbr) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'tbrq') > -1) {
            clumns.push({ field: 'tbrq', title: '填表日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'tbrq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.tbrq == null ? "" : row.tbrq) + '>' + (row.tbrq == null ? "" : row.tbrq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'lsxm') > -1) {
            clumns.push({ field: 'lsxm', title: '律师代理人姓名', width: 200, hidden: util.getArrayIndex(option.hidden, 'lsxm') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.lsxm == null ? "" : row.lsxm) + '>' + (row.lsxm == null ? "" : row.lsxm) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zjlx') > -1) {
            clumns.push({ field: 'zjlx', title: '证件类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'zjlx') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zjlx == null ? "" : row.zjlx) + '>' + (row.zjlx == null ? "" : row.zjlx) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zjlxString') > -1) {
            clumns.push({ field: 'zjlxString', title: '证件类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'zjlxString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zjlxString == null ? "" : row.zjlxString) + '>' + (row.zjlxString == null ? "" : row.zjlxString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zjh') > -1) {
            clumns.push({ field: 'zjh', title: '律师/代理人证件号', width: 200, hidden: util.getArrayIndex(option.hidden, 'zjh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zjh == null ? "" : row.zjh) + '>' + (row.zjh == null ? "" : row.zjh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'dw') > -1) {
            clumns.push({ field: 'dw', title: '律师/代理人单位', width: 200, hidden: util.getArrayIndex(option.hidden, 'dw') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.dw == null ? "" : row.dw) + '>' + (row.dw == null ? "" : row.dw) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'lxfs') > -1) {
            clumns.push({ field: 'lxfs', title: '律师/代理人联系方式', width: 200, hidden: util.getArrayIndex(option.hidden, 'lxfs') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.lxfs == null ? "" : row.lxfs) + '>' + (row.lxfs == null ? "" : row.lxfs) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'lxdh') > -1) {
            clumns.push({ field: 'lxdh', title: '联系电话', width: 200, hidden: util.getArrayIndex(option.hidden, 'lxdh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.lxdh == null ? "" : row.lxdh) + '>' + (row.lxdh == null ? "" : row.lxdh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'pzdw') > -1) {
            clumns.push({ field: 'pzdw', title: '批准单位', width: 200, hidden: util.getArrayIndex(option.hidden, 'pzdw') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.pzdw == null ? "" : row.pzdw) + '>' + (row.pzdw == null ? "" : row.pzdw) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'pzdwlxfs') > -1) {
            clumns.push({ field: 'pzdwlxfs', title: '批准单位联系方式', width: 200, hidden: util.getArrayIndex(option.hidden, 'pzdwlxfs') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.pzdwlxfs == null ? "" : row.pzdwlxfs) + '>' + (row.pzdwlxfs == null ? "" : row.pzdwlxfs) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'lszyzm') > -1) {
            clumns.push({ field: 'lszyzm', title: '律师执业证明是否到期', width: 200, hidden: util.getArrayIndex(option.hidden, 'lszyzm') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.lszyzm == null ? "" : row.lszyzm) + '>' + (row.lszyzm == null ? "" : row.lszyzm) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'lszyzmyxq') > -1) {
            clumns.push({ field: 'lszyzmyxq', title: '律师执业证明有效期', width: 200, hidden: util.getArrayIndex(option.hidden, 'lszyzmyxq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.lszyzmyxq == null ? "" : row.lszyzmyxq) + '>' + (row.lszyzmyxq == null ? "" : row.lszyzmyxq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'lsswsbh') > -1) {
            clumns.push({ field: 'lsswsbh', title: '律师事务所介绍信编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'lsswsbh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.lsswsbh == null ? "" : row.lsswsbh) + '>' + (row.lsswsbh == null ? "" : row.lsswsbh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'swszjhm') > -1) {
            clumns.push({ field: 'swszjhm', title: '事务所证件号码', width: 200, hidden: util.getArrayIndex(option.hidden, 'swszjhm') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.swszjhm == null ? "" : row.swszjhm) + '>' + (row.swszjhm == null ? "" : row.swszjhm) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'swsdz') > -1) {
            clumns.push({ field: 'swsdz', title: '事务所地址', width: 200, hidden: util.getArrayIndex(option.hidden, 'swsdz') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.swsdz == null ? "" : row.swsdz) + '>' + (row.swsdz == null ? "" : row.swsdz) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'wtslx') > -1) {
            clumns.push({ field: 'wtslx', title: '委托书类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'wtslx') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.wtslx == null ? "" : row.wtslx) + '>' + (row.wtslx == null ? "" : row.wtslx) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'wtrxm') > -1) {
            clumns.push({ field: 'wtrxm', title: '委托人姓名', width: 200, hidden: util.getArrayIndex(option.hidden, 'wtrxm') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.wtrxm == null ? "" : row.wtrxm) + '>' + (row.wtrxm == null ? "" : row.wtrxm) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'rs') > -1) {
            clumns.push({ field: 'rs', title: '人数', width: 200, hidden: util.getArrayIndex(option.hidden, 'rs') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.rs == null ? "" : row.rs) + '>' + (row.rs == null ? "" : row.rs) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'hjyxq') > -1) {
            clumns.push({ field: 'hjyxq', title: '会见有效期', width: 200, hidden: util.getArrayIndex(option.hidden, 'hjyxq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.hjyxq == null ? "" : row.hjyxq) + '>' + (row.hjyxq == null ? "" : row.hjyxq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'qtry') > -1) {
            clumns.push({ field: 'qtry', title: '其他人员', width: 200, hidden: util.getArrayIndex(option.hidden, 'qtry') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.qtry == null ? "" : row.qtry) + '>' + (row.qtry == null ? "" : row.qtry) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zbmj') > -1) {
            clumns.push({ field: 'zbmj', title: '值班民警', width: 200, hidden: util.getArrayIndex(option.hidden, 'zbmj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zbmj == null ? "" : row.zbmj) + '>' + (row.zbmj == null ? "" : row.zbmj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'djsj') > -1) {
            clumns.push({ field: 'djsj', title: '登记时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'djsj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.djsj == null ? "" : row.djsj) + '>' + (row.djsj == null ? "" : row.djsj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'hjsString') > -1) {
            clumns.push({ field: 'hjsString', title: '会见地点', width: 200, hidden: util.getArrayIndex(option.hidden, 'hjsString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.hjsString == null ? "" : row.hjsString) + '>' + (row.hjsString == null ? "" : row.hjsString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'aphjsj') > -1) {
            clumns.push({ field: 'aphjsj', title: '安排会见时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'aphjsj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.aphjsj == null ? "" : row.aphjsj) + '>' + (row.aphjsj == null ? "" : row.aphjsj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'hjsj') > -1) {
            clumns.push({ field: 'hjsj', title: '会见开始时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'hjsj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.hjsj == null ? "" : row.hjsj) + '>' + (row.hjsj == null ? "" : row.hjsj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jssj') > -1) {
            clumns.push({ field: 'jssj', title: '结束结束时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'jssj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jssj == null ? "" : row.jssj) + '>' + (row.jssj == null ? "" : row.jssj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'hjsjString') > -1) {
            clumns.push({ field: 'hjsjString', title: '会见开始时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'hjsjString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.hjsjString == null ? "" : row.hjsjString) + '>' + (row.hjsjString == null ? "" : row.hjsjString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jssjString') > -1) {
            clumns.push({ field: 'jssjString', title: '结束结束时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'jssjString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jssjString == null ? "" : row.jssjString) + '>' + (row.jssjString == null ? "" : row.jssjString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'ywlcid') > -1) {
            clumns.push({ field: 'ywlcid', title: '业务流程ID', width: 200, hidden: util.getArrayIndex(option.hidden, 'ywlcid') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.ywlcid == null ? "" : row.ywlcid) + '>' + (row.ywlcid == null ? "" : row.ywlcid) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'taskid') > -1) {
            clumns.push({ field: 'taskid', title: '业务进程ID', width: 200, hidden: util.getArrayIndex(option.hidden, 'taskid') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.taskid == null ? "" : row.taskid) + '>' + (row.taskid == null ? "" : row.taskid) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'state') > -1) {
            clumns.push({ field: 'state', title: '删除状态(YWSTATE)', width: 200, hidden: util.getArrayIndex(option.hidden, 'state') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.state == null ? "" : row.state) + '>' + (row.state == null ? "" : row.state) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sjzljsbz') > -1) {
            clumns.push({ field: 'sjzljsbz', title: '数据质量—及时标记', width: 200, hidden: util.getArrayIndex(option.hidden, 'sjzljsbz') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sjzljsbz == null ? "" : row.sjzljsbz) + '>' + (row.sjzljsbz == null ? "" : row.sjzljsbz) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'scbz') > -1) {
            clumns.push({ field: 'scbz', title: '上传标志(SHFO)', width: 200, hidden: util.getArrayIndex(option.hidden, 'scbz') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.scbz == null ? "" : row.scbz) + '>' + (row.scbz == null ? "" : row.scbz) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'bz') > -1) {
            clumns.push({ field: 'bz', title: '备注', width: 200, hidden: util.getArrayIndex(option.hidden, 'bz') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.bz == null ? "" : row.bz) + '>' + (row.bz == null ? "" : row.bz) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'operator') > -1) {
            clumns.push({ field: 'operator', title: '操作人', width: 200, hidden: util.getArrayIndex(option.hidden, 'operator') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.operator == null ? "" : row.operator) + '>' + (row.operator == null ? "" : row.operator) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'creator') > -1) {
            clumns.push({ field: 'creator', title: '创建人', width: 200, hidden: util.getArrayIndex(option.hidden, 'creator') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.creator == null ? "" : row.creator) + '>' + (row.creator == null ? "" : row.creator) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'createtime') > -1) {
            clumns.push({ field: 'createtime', title: '创建时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'createtime') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.createtime == null ? "" : row.createtime) + '>' + (row.createtime == null ? "" : row.createtime) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'updator') > -1) {
            clumns.push({ field: 'updator', title: '更新人', width: 200, hidden: util.getArrayIndex(option.hidden, 'updator') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.updator == null ? "" : row.updator) + '>' + (row.updator == null ? "" : row.updator) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'updatetime') > -1) {
            clumns.push({ field: 'updatetime', title: '更新时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'updatetime') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.updatetime == null ? "" : row.updatetime) + '>' + (row.updatetime == null ? "" : row.updatetime) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'dwString') > -1) {
            clumns.push({ field: 'dwString', title: '律师单位', width: 200, hidden: util.getArrayIndex(option.hidden, 'dwString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.dwString == null ? "" : row.dwString) + '>' + (row.dwString == null ? "" : row.dwString) + '</span>' } });
        }

        return clumns;
    };
    return main;
});