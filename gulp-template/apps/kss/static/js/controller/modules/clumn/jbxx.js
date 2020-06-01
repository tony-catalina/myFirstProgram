/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Jbxx 数据列表
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
            clumns.push({ field: 'id', title: 'id', width: 200, hidden: util.getArrayIndex(option.hidden, 'id') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.id == null ? "" : row.id) + '>' + (row.id == null ? "" : row.id) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'gcbh') > -1) {
            clumns.push({ field: 'gcbh', title: '过程编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'gcbh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.gcbh == null ? "" : row.gcbh) + '>' + (row.gcbh == null ? "" : row.gcbh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'wbrybh') > -1) {
            clumns.push({ field: 'wbrybh', title: '网办人员编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'wbrybh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.wbrybh == null ? "" : row.wbrybh) + '>' + (row.wbrybh == null ? "" : row.wbrybh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'fxzs') > -1) {
            clumns.push({ field: 'fxzs', title: '风险指数', width: 200, hidden: util.getArrayIndex(option.hidden, 'fxzs') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.fxzs == null ? "" : row.fxzs) + '>' + (row.fxzs == null ? "" : row.fxzs) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'xwfx') > -1) {
            clumns.push({ field: 'xwfx', title: '行为风险', width: 200, hidden: util.getArrayIndex(option.hidden, 'xwfx') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.xwfx == null ? "" : row.xwfx) + '>' + (row.xwfx == null ? "" : row.xwfx) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'fxqst') > -1) {
            clumns.push({ field: 'fxqst', title: '风险趋势图', width: 200, hidden: util.getArrayIndex(option.hidden, 'fxqst') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.fxqst == null ? "" : row.fxqst) + '>' + (row.fxqst == null ? "" : row.fxqst) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'rybh') > -1) {
            clumns.push({ field: 'rybh', title: '人员编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'rybh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.rybh == null ? "" : row.rybh) + '>' + (row.rybh == null ? "" : row.rybh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'dah') > -1) {
            clumns.push({ field: 'dah', title: '档案编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'dah') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.dah == null ? "" : row.dah) + '>' + (row.dah == null ? "" : row.dah) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jsbh') > -1) {
            clumns.push({ field: 'jsbh', title: '监所编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'jsbh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jsbh == null ? "" : row.jsbh) + '>' + (row.jsbh == null ? "" : row.jsbh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'snbh') > -1) {
            clumns.push({ field: 'snbh', title: '人员编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'snbh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.snbh == null ? "" : row.snbh) + '>' + (row.snbh == null ? "" : row.snbh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'xm') > -1) {
            clumns.push({ field: 'xm', title: '姓名', width: 200, hidden: util.getArrayIndex(option.hidden, 'xm') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.xm == null ? "" : row.xm) + '>' + (row.xm == null ? "" : row.xm) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jsh') > -1) {
            clumns.push({ field: 'jsh', title: '监室号', width: 200, hidden: util.getArrayIndex(option.hidden, 'jsh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jsh == null ? "" : row.jsh) + '>' + (row.jsh == null ? "" : row.jsh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'bahj') > -1) {
            clumns.push({ field: 'bahj', title: '办案环节', width: 200, hidden: util.getArrayIndex(option.hidden, 'bahj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.bahj == null ? "" : row.bahj) + '>' + (row.bahj == null ? "" : row.bahj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'bahjString') > -1) {
            clumns.push({ field: 'bahjString', title: '办案环节', width: 200, hidden: util.getArrayIndex(option.hidden, 'bahjString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.bahjString == null ? "" : row.bahjString) + '>' + (row.bahjString == null ? "" : row.bahjString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'rsrq') > -1) {
            clumns.push({ field: 'rsrq', title: '入所日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'rsrq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.rsrq == null ? "" : row.rsrq) + '>' + (row.rsrq == null ? "" : row.rsrq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'rsrqString') > -1) {
            clumns.push({ field: 'rsrqString', title: '入所日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'rsrqString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.rsrqString == null ? "" : row.rsrqString) + '>' + (row.rsrqString == null ? "" : row.rsrqString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'gyqx') > -1) {
            clumns.push({ field: 'gyqx', title: '关押期限', width: 200, hidden: util.getArrayIndex(option.hidden, 'gyqx') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.gyqx == null ? "" : row.gyqx) + '>' + (row.gyqx == null ? "" : row.gyqx) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'badw') > -1) {
            clumns.push({ field: 'badw', title: '办案单位', width: 200, hidden: util.getArrayIndex(option.hidden, 'badw') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.badw == null ? "" : row.badw) + '>' + (row.badw == null ? "" : row.badw) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'badwString') > -1) {
            clumns.push({ field: 'badwString', title: '办案单位', width: 200, hidden: util.getArrayIndex(option.hidden, 'badwString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.badwString == null ? "" : row.badwString) + '>' + (row.badwString == null ? "" : row.badwString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'ybadw') > -1) {
            clumns.push({ field: 'ybadw', title: '原办案单位', width: 200, hidden: util.getArrayIndex(option.hidden, 'ybadw') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.ybadw == null ? "" : row.ybadw) + '>' + (row.ybadw == null ? "" : row.ybadw) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'pzdw') > -1) {
            clumns.push({ field: 'pzdw', title: '批准单位', width: 200, hidden: util.getArrayIndex(option.hidden, 'pzdw') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.pzdw == null ? "" : row.pzdw) + '>' + (row.pzdw == null ? "" : row.pzdw) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'xmpy') > -1) {
            clumns.push({ field: 'xmpy', title: '姓名拼音', width: 200, hidden: util.getArrayIndex(option.hidden, 'xmpy') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.xmpy == null ? "" : row.xmpy) + '>' + (row.xmpy == null ? "" : row.xmpy) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'xmpyszm') > -1) {
            clumns.push({ field: 'xmpyszm', title: '姓名拼音', width: 200, hidden: util.getArrayIndex(option.hidden, 'xmpyszm') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.xmpyszm == null ? "" : row.xmpyszm) + '>' + (row.xmpyszm == null ? "" : row.xmpyszm) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'bm') > -1) {
            clumns.push({ field: 'bm', title: '别名', width: 200, hidden: util.getArrayIndex(option.hidden, 'bm') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.bm == null ? "" : row.bm) + '>' + (row.bm == null ? "" : row.bm) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'bmty') > -1) {
            clumns.push({ field: 'bmty', title: '别名同音', width: 200, hidden: util.getArrayIndex(option.hidden, 'bmty') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.bmty == null ? "" : row.bmty) + '>' + (row.bmty == null ? "" : row.bmty) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'mzString') > -1) {
            clumns.push({ field: 'mzString', title: '民族', width: 200, hidden: util.getArrayIndex(option.hidden, 'mzString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.mzString == null ? "" : row.mzString) + '>' + (row.mzString == null ? "" : row.mzString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'mz') > -1) {
            clumns.push({ field: 'mz', title: '民族', width: 200, hidden: util.getArrayIndex(option.hidden, 'mz') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.mz == null ? "" : row.mz) + '>' + (row.mz == null ? "" : row.mz) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'gj') > -1) {
            clumns.push({ field: 'gj', title: '国籍', width: 200, hidden: util.getArrayIndex(option.hidden, 'gj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.gj == null ? "" : row.gj) + '>' + (row.gj == null ? "" : row.gj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'gjString') > -1) {
            clumns.push({ field: 'gjString', title: '国籍', width: 200, hidden: util.getArrayIndex(option.hidden, 'gjString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.gjString == null ? "" : row.gjString) + '>' + (row.gjString == null ? "" : row.gjString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'xb') > -1) {
            clumns.push({ field: 'xb', title: '性别', width: 200, hidden: util.getArrayIndex(option.hidden, 'xb') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.xb == null ? "" : row.xb) + '>' + (row.xb == null ? "" : row.xb) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'xbString') > -1) {
            clumns.push({ field: 'xbString', title: '性别', width: 200, hidden: util.getArrayIndex(option.hidden, 'xbString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.xbString == null ? "" : row.xbString) + '>' + (row.xbString == null ? "" : row.xbString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'csrq') > -1) {
            clumns.push({ field: 'csrq', title: '出生日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'csrq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.csrq == null ? "" : row.csrq) + '>' + (row.csrq == null ? "" : row.csrq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zjlx') > -1) {
            clumns.push({ field: 'zjlx', title: '证件类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'zjlx') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zjlx == null ? "" : row.zjlx) + '>' + (row.zjlx == null ? "" : row.zjlx) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zjlxString') > -1) {
            clumns.push({ field: 'zjlxString', title: '证件类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'zjlxString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zjlxString == null ? "" : row.zjlxString) + '>' + (row.zjlxString == null ? "" : row.zjlxString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zjh') > -1) {
            clumns.push({ field: 'zjh', title: '证件号', width: 200, hidden: util.getArrayIndex(option.hidden, 'zjh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zjh == null ? "" : row.zjh) + '>' + (row.zjh == null ? "" : row.zjh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zzmm') > -1) {
            clumns.push({ field: 'zzmm', title: '政治面貌', width: 200, hidden: util.getArrayIndex(option.hidden, 'zzmm') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zzmm == null ? "" : row.zzmm) + '>' + (row.zzmm == null ? "" : row.zzmm) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zzmmString') > -1) {
            clumns.push({ field: 'zzmmString', title: '政治面貌', width: 200, hidden: util.getArrayIndex(option.hidden, 'zzmmString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zzmmString == null ? "" : row.zzmmString) + '>' + (row.zzmmString == null ? "" : row.zzmmString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'hyzk') > -1) {
            clumns.push({ field: 'hyzk', title: '婚姻状况', width: 200, hidden: util.getArrayIndex(option.hidden, 'hyzk') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.hyzk == null ? "" : row.hyzk) + '>' + (row.hyzk == null ? "" : row.hyzk) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'hyzkString') > -1) {
            clumns.push({ field: 'hyzkString', title: '婚姻状况', width: 200, hidden: util.getArrayIndex(option.hidden, 'hyzkString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.hyzkString == null ? "" : row.hyzkString) + '>' + (row.hyzkString == null ? "" : row.hyzkString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zuc') > -1) {
            clumns.push({ field: 'zuc', title: '足长', width: 200, hidden: util.getArrayIndex(option.hidden, 'zuc') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zuc == null ? "" : row.zuc) + '>' + (row.zuc == null ? "" : row.zuc) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sg') > -1) {
            clumns.push({ field: 'sg', title: '身高', width: 200, hidden: util.getArrayIndex(option.hidden, 'sg') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sg == null ? "" : row.sg) + '>' + (row.sg == null ? "" : row.sg) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jg') > -1) {
            clumns.push({ field: 'jg', title: '籍贯', width: 200, hidden: util.getArrayIndex(option.hidden, 'jg') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jg == null ? "" : row.jg) + '>' + (row.jg == null ? "" : row.jg) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jgString') > -1) {
            clumns.push({ field: 'jgString', title: '籍贯', width: 200, hidden: util.getArrayIndex(option.hidden, 'jgString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jgString == null ? "" : row.jgString) + '>' + (row.jgString == null ? "" : row.jgString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'hjd') > -1) {
            clumns.push({ field: 'hjd', title: '户籍地', width: 200, hidden: util.getArrayIndex(option.hidden, 'hjd') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.hjd == null ? "" : row.hjd) + '>' + (row.hjd == null ? "" : row.hjd) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'hjdString') > -1) {
            clumns.push({ field: 'hjdString', title: '户籍地', width: 200, hidden: util.getArrayIndex(option.hidden, 'hjdString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.hjdString == null ? "" : row.hjdString) + '>' + (row.hjdString == null ? "" : row.hjdString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'hjdxz') > -1) {
            clumns.push({ field: 'hjdxz', title: '户籍地详址', width: 200, hidden: util.getArrayIndex(option.hidden, 'hjdxz') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.hjdxz == null ? "" : row.hjdxz) + '>' + (row.hjdxz == null ? "" : row.hjdxz) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'xzd') > -1) {
            clumns.push({ field: 'xzd', title: '现住地', width: 200, hidden: util.getArrayIndex(option.hidden, 'xzd') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.xzd == null ? "" : row.xzd) + '>' + (row.xzd == null ? "" : row.xzd) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'xzdString') > -1) {
            clumns.push({ field: 'xzdString', title: '现住地', width: 200, hidden: util.getArrayIndex(option.hidden, 'xzdString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.xzdString == null ? "" : row.xzdString) + '>' + (row.xzdString == null ? "" : row.xzdString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'xzdxz') > -1) {
            clumns.push({ field: 'xzdxz', title: '现住地详址', width: 200, hidden: util.getArrayIndex(option.hidden, 'xzdxz') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.xzdxz == null ? "" : row.xzdxz) + '>' + (row.xzdxz == null ? "" : row.xzdxz) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'whcd') > -1) {
            clumns.push({ field: 'whcd', title: '文化程度', width: 200, hidden: util.getArrayIndex(option.hidden, 'whcd') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.whcd == null ? "" : row.whcd) + '>' + (row.whcd == null ? "" : row.whcd) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'whcdString') > -1) {
            clumns.push({ field: 'whcdString', title: '文化程度', width: 200, hidden: util.getArrayIndex(option.hidden, 'whcdString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.whcdString == null ? "" : row.whcdString) + '>' + (row.whcdString == null ? "" : row.whcdString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zc') > -1) {
            clumns.push({ field: 'zc', title: '专长', width: 200, hidden: util.getArrayIndex(option.hidden, 'zc') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zc == null ? "" : row.zc) + '>' + (row.zc == null ? "" : row.zc) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zcString') > -1) {
            clumns.push({ field: 'zcString', title: '专长', width: 200, hidden: util.getArrayIndex(option.hidden, 'zcString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zcString == null ? "" : row.zcString) + '>' + (row.zcString == null ? "" : row.zcString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sf') > -1) {
            clumns.push({ field: 'sf', title: '身份', width: 200, hidden: util.getArrayIndex(option.hidden, 'sf') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sf == null ? "" : row.sf) + '>' + (row.sf == null ? "" : row.sf) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sfString') > -1) {
            clumns.push({ field: 'sfString', title: '身份', width: 200, hidden: util.getArrayIndex(option.hidden, 'sfString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sfString == null ? "" : row.sfString) + '>' + (row.sfString == null ? "" : row.sfString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'tssf') > -1) {
            clumns.push({ field: 'tssf', title: '特殊身份', width: 200, hidden: util.getArrayIndex(option.hidden, 'tssf') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.tssf == null ? "" : row.tssf) + '>' + (row.tssf == null ? "" : row.tssf) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'tssfString') > -1) {
            clumns.push({ field: 'tssfString', title: '特殊身份', width: 200, hidden: util.getArrayIndex(option.hidden, 'tssfString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.tssfString == null ? "" : row.tssfString) + '>' + (row.tssfString == null ? "" : row.tssfString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zyString') > -1) {
            clumns.push({ field: 'zyString', title: '职业', width: 200, hidden: util.getArrayIndex(option.hidden, 'zyString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zyString == null ? "" : row.zyString) + '>' + (row.zyString == null ? "" : row.zyString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zy') > -1) {
            clumns.push({ field: 'zy', title: '职业', width: 200, hidden: util.getArrayIndex(option.hidden, 'zy') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zy == null ? "" : row.zy) + '>' + (row.zy == null ? "" : row.zy) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'gzdw') > -1) {
            clumns.push({ field: 'gzdw', title: '(原)工作单位', width: 200, hidden: util.getArrayIndex(option.hidden, 'gzdw') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.gzdw == null ? "" : row.gzdw) + '>' + (row.gzdw == null ? "" : row.gzdw) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jkzk') > -1) {
            clumns.push({ field: 'jkzk', title: '健康情况', width: 200, hidden: util.getArrayIndex(option.hidden, 'jkzk') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jkzk == null ? "" : row.jkzk) + '>' + (row.jkzk == null ? "" : row.jkzk) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jkzkString') > -1) {
            clumns.push({ field: 'jkzkString', title: '健康情况', width: 200, hidden: util.getArrayIndex(option.hidden, 'jkzkString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.xbString == null ? "" : row.jkzkString) + '>' + (row.xbString == null ? "" : row.jkzkString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'bhlx') > -1) {
            clumns.push({ field: 'bhlx', title: '病号类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'bhlx') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.bhlx == null ? "" : row.bhlx) + '>' + (row.bhlx == null ? "" : row.bhlx) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'bhlxString') > -1) {
            clumns.push({ field: 'bhlxString', title: '病号类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'bhlxString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.bhlxString == null ? "" : row.bhlxString) + '>' + (row.bhlxString == null ? "" : row.bhlxString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'azb') > -1) {
            clumns.push({ field: 'azb', title: '艾滋病', width: 200, hidden: util.getArrayIndex(option.hidden, 'azb') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.azb == null ? "" : row.azb) + '>' + (row.azb == null ? "" : row.azb) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'azbString') > -1) {
            clumns.push({ field: 'azbString', title: '艾滋病', width: 200, hidden: util.getArrayIndex(option.hidden, 'azbString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.azbString == null ? "" : row.azbString) + '>' + (row.azbString == null ? "" : row.azbString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'rsxz') > -1) {
            clumns.push({ field: 'rsxz', title: '入所性质', width: 200, hidden: util.getArrayIndex(option.hidden, 'rsxz') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.rsxz == null ? "" : row.rsxz) + '>' + (row.rsxz == null ? "" : row.rsxz) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'rsxzString') > -1) {
            clumns.push({ field: 'rsxzString', title: '入所性质', width: 200, hidden: util.getArrayIndex(option.hidden, 'rsxzString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.rsxzString == null ? "" : row.rsxzString) + '>' + (row.rsxzString == null ? "" : row.rsxzString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zrdw') > -1) {
            clumns.push({ field: 'zrdw', title: '转入单位', width: 200, hidden: util.getArrayIndex(option.hidden, 'zrdw') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zrdw == null ? "" : row.zrdw) + '>' + (row.zrdw == null ? "" : row.zrdw) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'shid') > -1) {
            clumns.push({ field: 'shid', title: '手环ID', width: 200, hidden: util.getArrayIndex(option.hidden, 'shid') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.shid == null ? "" : row.shid) + '>' + (row.shid == null ? "" : row.shid) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sydw') > -1) {
            clumns.push({ field: 'sydw', title: '送押单位', width: 200, hidden: util.getArrayIndex(option.hidden, 'sydw') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sydw == null ? "" : row.sydw) + '>' + (row.sydw == null ? "" : row.sydw) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'syr') > -1) {
            clumns.push({ field: 'syr', title: '送押人', width: 200, hidden: util.getArrayIndex(option.hidden, 'syr') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.syr == null ? "" : row.syr) + '>' + (row.syr == null ? "" : row.syr) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sy') > -1) {
            clumns.push({ field: 'sy', title: '收押人', width: 200, hidden: util.getArrayIndex(option.hidden, 'sy') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sy == null ? "" : row.sy) + '>' + (row.sy == null ? "" : row.sy) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'byzd') > -1) {
            clumns.push({ field: 'byzd', title: '收押非拘捕人员', width: 200, hidden: util.getArrayIndex(option.hidden, 'byzd') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.byzd == null ? "" : row.byzd) + '>' + (row.byzd == null ? "" : row.byzd) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sypzwsh') > -1) {
            clumns.push({ field: 'sypzwsh', title: '收押凭证文书号', width: 200, hidden: util.getArrayIndex(option.hidden, 'sypzwsh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sypzwsh == null ? "" : row.sypzwsh) + '>' + (row.sypzwsh == null ? "" : row.sypzwsh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sypz') > -1) {
            clumns.push({ field: 'sypz', title: '收押凭证', width: 200, hidden: util.getArrayIndex(option.hidden, 'sypz') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sypz == null ? "" : row.sypz) + '>' + (row.sypz == null ? "" : row.sypz) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sypzString') > -1) {
            clumns.push({ field: 'sypzString', title: '收押凭证', width: 200, hidden: util.getArrayIndex(option.hidden, 'sypzString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sypzString == null ? "" : row.sypzString) + '>' + (row.sypzString == null ? "" : row.sypzString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jyrq') > -1) {
            clumns.push({ field: 'jyrq', title: '羁押日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'jyrq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jyrq == null ? "" : row.jyrq) + '>' + (row.jyrq == null ? "" : row.jyrq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'ay') > -1) {
            clumns.push({ field: 'ay', title: '主要案由', width: 200, hidden: util.getArrayIndex(option.hidden, 'ay') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.ay == null ? "" : row.ay) + '>' + (row.ay == null ? "" : row.ay) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'ayString') > -1) {
            clumns.push({ field: 'ayString', title: '主要案由', width: 200, hidden: util.getArrayIndex(option.hidden, 'ayString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.ayString == null ? "" : row.ayString) + '>' + (row.ayString == null ? "" : row.ayString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'xhay') > -1) {
            clumns.push({ field: 'xhay', title: '细化案由', width: 200, hidden: util.getArrayIndex(option.hidden, 'xhay') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.xhay == null ? "" : row.xhay) + '>' + (row.xhay == null ? "" : row.xhay) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'xhayString') > -1) {
            clumns.push({ field: 'xhayString', title: '细化案由', width: 200, hidden: util.getArrayIndex(option.hidden, 'xhayString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.xhayString == null ? "" : row.xhayString) + '>' + (row.xhayString == null ? "" : row.xhayString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'fzjl') > -1) {
            clumns.push({ field: 'fzjl', title: '犯罪经历', width: 200, hidden: util.getArrayIndex(option.hidden, 'fzjl') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.fzjl == null ? "" : row.fzjl) + '>' + (row.fzjl == null ? "" : row.fzjl) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jyaq') > -1) {
            clumns.push({ field: 'jyaq', title: '简要案情', width: 200, hidden: util.getArrayIndex(option.hidden, 'jyaq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jyaq == null ? "" : row.jyaq) + '>' + (row.jyaq == null ? "" : row.jyaq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zxf') > -1) {
            clumns.push({ field: 'zxf', title: '重刑犯', width: 200, hidden: util.getArrayIndex(option.hidden, 'zxf') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zxf == null ? "" : row.zxf) + '>' + (row.zxf == null ? "" : row.zxf) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zxfString') > -1) {
            clumns.push({ field: 'zxfString', title: '重刑犯', width: 200, hidden: util.getArrayIndex(option.hidden, 'zxfString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zxfString == null ? "" : row.zxfString) + '>' + (row.zxfString == null ? "" : row.zxfString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'wxdj') > -1) {
            clumns.push({ field: 'wxdj', title: '危险等级', width: 200, hidden: util.getArrayIndex(option.hidden, 'wxdj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.wxdj == null ? "" : row.wxdj) + '>' + (row.wxdj == null ? "" : row.wxdj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'wxdjString') > -1) {
            clumns.push({ field: 'wxdjString', title: '危险等级', width: 200, hidden: util.getArrayIndex(option.hidden, 'wxdjString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.wxdjString == null ? "" : row.wxdjString) + '>' + (row.wxdjString == null ? "" : row.wxdjString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'caaj') > -1) {
            clumns.push({ field: 'caaj', title: '从案类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'caaj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.caaj == null ? "" : row.caaj) + '>' + (row.caaj == null ? "" : row.caaj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'caajString') > -1) {
            clumns.push({ field: 'caajString', title: '从案类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'caajString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.caajString == null ? "" : row.caajString) + '>' + (row.caajString == null ? "" : row.caajString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'cylx') > -1) {
            clumns.push({ field: 'cylx', title: '成员类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'cylx') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.cylx == null ? "" : row.cylx) + '>' + (row.cylx == null ? "" : row.cylx) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'cylxString') > -1) {
            clumns.push({ field: 'cylxString', title: '成员类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'cylxString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.cylxString == null ? "" : row.cylxString) + '>' + (row.cylxString == null ? "" : row.cylxString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'bar') > -1) {
            clumns.push({ field: 'bar', title: '办案人', width: 200, hidden: util.getArrayIndex(option.hidden, 'bar') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.bar == null ? "" : row.bar) + '>' + (row.bar == null ? "" : row.bar) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'barjh') > -1) {
            clumns.push({ field: 'barjh', title: '办案人警号', width: 200, hidden: util.getArrayIndex(option.hidden, 'barjh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.barjh == null ? "" : row.barjh) + '>' + (row.barjh == null ? "" : row.barjh) + '</span>' } });
        }

        if (util.getArrayIndex(option.clumns, 'bardh') > -1) {
            clumns.push({ field: 'bardh', title: '办案民警电话', width: 200, hidden: util.getArrayIndex(option.hidden, 'bardh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.bardh == null ? "" : row.bardh) + '>' + (row.bardh == null ? "" : row.bardh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'czdh') > -1) {
            clumns.push({ field: 'czdh', title: '办案传真电话', width: 200, hidden: util.getArrayIndex(option.hidden, 'czdh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.czdh == null ? "" : row.czdh) + '>' + (row.czdh == null ? "" : row.czdh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zzqsrq') > -1) {
            clumns.push({ field: 'zzqsrq', title: '暂住起始日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'zzqsrq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zzqsrq == null ? "" : row.zzqsrq) + '>' + (row.zzqsrq == null ? "" : row.zzqsrq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jlrq') > -1) {
            clumns.push({ field: 'jlrq', title: '拘留日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'jlrq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jlrq == null ? "" : row.jlrq) + '>' + (row.jlrq == null ? "" : row.jlrq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'dbrq') > -1) {
            clumns.push({ field: 'dbrq', title: '逮捕日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'dbrq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.dbrq == null ? "" : row.dbrq) + '>' + (row.dbrq == null ? "" : row.dbrq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'scqsrq') > -1) {
            clumns.push({ field: 'scqsrq', title: '审查起诉日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'scqsrq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.scqsrq == null ? "" : row.scqsrq) + '>' + (row.scqsrq == null ? "" : row.scqsrq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'ysfyrq') > -1) {
            clumns.push({ field: 'ysfyrq', title: '移送法院日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'ysfyrq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.ysfyrq == null ? "" : row.ysfyrq) + '>' + (row.ysfyrq == null ? "" : row.ysfyrq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'dwlx') > -1) {
            clumns.push({ field: 'dwlx', title: '办案单位类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'dwlx') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.dwlx == null ? "" : row.dwlx) + '>' + (row.dwlx == null ? "" : row.dwlx) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'dwlxString') > -1) {
            clumns.push({ field: 'dwlxString', title: '办案单位类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'dwlxString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.dwlxString == null ? "" : row.dwlxString) + '>' + (row.dwlxString == null ? "" : row.dwlxString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'hx') > -1) {
            clumns.push({ field: 'hx', title: '缓刑', width: 200, hidden: util.getArrayIndex(option.hidden, 'hx') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.hx == null ? "" : row.hx) + '>' + (row.hx == null ? "" : row.hx) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'hxqx') > -1) {
            clumns.push({ field: 'hxqx', title: '缓刑期限', width: 200, hidden: util.getArrayIndex(option.hidden, 'hxqx') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.hxqx == null ? "" : row.hxqx) + '>' + (row.hxqx == null ? "" : row.hxqx) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'csyy') > -1) {
            clumns.push({ field: 'csyy', title: '出所原因', width: 200, hidden: util.getArrayIndex(option.hidden, 'csyy') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.csyy == null ? "" : row.csyy) + '>' + (row.csyy == null ? "" : row.csyy) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'csyyString') > -1) {
            clumns.push({ field: 'csyyString', title: '出所原因', width: 200, hidden: util.getArrayIndex(option.hidden, 'csyyString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.csyyString == null ? "" : row.csyyString) + '>' + (row.csyyString == null ? "" : row.csyyString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'csqx') > -1) {
            clumns.push({ field: 'csqx', title: '出所去向', width: 200, hidden: util.getArrayIndex(option.hidden, 'csqx') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.csqx == null ? "" : row.csqx) + '>' + (row.csqx == null ? "" : row.csqx) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'cszwyz') > -1) {
            clumns.push({ field: 'cszwyz', title: '出所指纹验证', width: 200, hidden: util.getArrayIndex(option.hidden, 'cszwyz') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.cszwyz == null ? "" : row.cszwyz) + '>' + (row.cszwyz == null ? "" : row.cszwyz) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'cszwyzString') > -1) {
            clumns.push({ field: 'cszwyzString', title: '出所指纹验证', width: 200, hidden: util.getArrayIndex(option.hidden, 'cszwyzString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.cszwyzString == null ? "" : row.cszwyzString) + '>' + (row.cszwyzString == null ? "" : row.cszwyzString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'cssj') > -1) {
            clumns.push({ field: 'cssj', title: '出所时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'cssj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.cssj == null ? "" : row.cssj) + '>' + (row.cssj == null ? "" : row.cssj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'cssjString') > -1) {
            clumns.push({ field: 'cssjString', title: '出所时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'cssjString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.cssjString == null ? "" : row.cssjString) + '>' + (row.cssjString == null ? "" : row.cssjString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'xq') > -1) {
            clumns.push({ field: 'xq', title: '刑期', width: 200, hidden: util.getArrayIndex(option.hidden, 'xq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.xq == null ? "" : row.xq) + '>' + (row.xq == null ? "" : row.xq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'cljg') > -1) {
            clumns.push({ field: 'cljg', title: '处理结果', width: 200, hidden: util.getArrayIndex(option.hidden, 'cljg') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.cljg == null ? "" : row.cljg) + '>' + (row.cljg == null ? "" : row.cljg) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'cljgString') > -1) {
            clumns.push({ field: 'cljgString', title: '处理结果', width: 200, hidden: util.getArrayIndex(option.hidden, 'cljgString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.cljgString == null ? "" : row.cljgString) + '>' + (row.cljgString == null ? "" : row.cljgString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'fjx') > -1) {
            clumns.push({ field: 'fjx', title: '附加刑', width: 200, hidden: util.getArrayIndex(option.hidden, 'fjx') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.fjx == null ? "" : row.fjx) + '>' + (row.fjx == null ? "" : row.fjx) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'fjxString') > -1) {
            clumns.push({ field: 'fjxString', title: '附加刑', width: 200, hidden: util.getArrayIndex(option.hidden, 'fjxString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.fjxString == null ? "" : row.fjxString) + '>' + (row.fjxString == null ? "" : row.fjxString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zwbh') > -1) {
            clumns.push({ field: 'zwbh', title: '指纹编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'zwbh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zwbh == null ? "" : row.zwbh) + '>' + (row.zwbh == null ? "" : row.zwbh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jcqk') > -1) {
            clumns.push({ field: 'jcqk', title: '奖惩情况', width: 200, hidden: util.getArrayIndex(option.hidden, 'jcqk') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jcqk == null ? "" : row.jcqk) + '>' + (row.jcqk == null ? "" : row.jcqk) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'ykss') > -1) {
            clumns.push({ field: 'ykss', title: '原看守所', width: 200, hidden: util.getArrayIndex(option.hidden, 'ykss') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.ykss == null ? "" : row.ykss) + '>' + (row.ykss == null ? "" : row.ykss) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'lsyy') > -1) {
            clumns.push({ field: 'lsyy', title: '留所原因', width: 200, hidden: util.getArrayIndex(option.hidden, 'lsyy') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.lsyy == null ? "" : row.lsyy) + '>' + (row.lsyy == null ? "" : row.lsyy) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'lsyyString') > -1) {
            clumns.push({ field: 'lsyyString', title: '留所原因', width: 200, hidden: util.getArrayIndex(option.hidden, 'lsyyString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.lsyyString == null ? "" : row.lsyyString) + '>' + (row.lsyyString == null ? "" : row.lsyyString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'rygllb') > -1) {
            clumns.push({ field: 'rygllb', title: '人员管理类别', width: 200, hidden: util.getArrayIndex(option.hidden, 'rygllb') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.rygllb == null ? "" : row.rygllb) + '>' + (row.rygllb == null ? "" : row.rygllb) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'rygllbString') > -1) {
            clumns.push({ field: 'rygllbString', title: '人员管理类别', width: 200, hidden: util.getArrayIndex(option.hidden, 'rygllbString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.rygllbString == null ? "" : row.rygllbString) + '>' + (row.rygllbString == null ? "" : row.rygllbString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zszt') > -1) {
            clumns.push({ field: 'zszt', title: '在所状态', width: 200, hidden: util.getArrayIndex(option.hidden, 'zszt') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zszt == null ? "" : row.zszt) + '>' + (row.zszt == null ? "" : row.zszt) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zsztString') > -1) {
            clumns.push({ field: 'zsztString', title: '在所状态', width: 200, hidden: util.getArrayIndex(option.hidden, 'zsztString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zsztString == null ? "" : row.zsztString) + '>' + (row.zsztString == null ? "" : row.zsztString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'lscsyy') > -1) {
            clumns.push({ field: 'lscsyy', title: '临时出所原因', width: 200, hidden: util.getArrayIndex(option.hidden, 'lscsyy') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.lscsyy == null ? "" : row.lscsyy) + '>' + (row.lscsyy == null ? "" : row.lscsyy) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'lscsyyString') > -1) {
            clumns.push({ field: 'lscsyyString', title: '临时出所原因', width: 200, hidden: util.getArrayIndex(option.hidden, 'lscsyyString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.lscsyyString == null ? "" : row.lscsyyString) + '>' + (row.lscsyyString == null ? "" : row.lscsyyString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'lscssj') > -1) {
            clumns.push({ field: 'lscssj', title: '上一次临时出所时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'lscssj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.lscssj == null ? "" : row.lscssj) + '>' + (row.lscssj == null ? "" : row.lscssj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'lscshssj') > -1) {
            clumns.push({ field: 'lscshssj', title: '上一次临时出所回所时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'lscshssj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.lscshssj == null ? "" : row.lscshssj) + '>' + (row.lscshssj == null ? "" : row.lscshssj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'crjbj') > -1) {
            clumns.push({ field: 'crjbj', title: '出入监标记', width: 200, hidden: util.getArrayIndex(option.hidden, 'crjbj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.crjbj == null ? "" : row.crjbj) + '>' + (row.crjbj == null ? "" : row.crjbj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'crjbjString') > -1) {
            clumns.push({ field: 'crjbjString', title: '出入监标记', width: 200, hidden: util.getArrayIndex(option.hidden, 'crjbjString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.crjbjString == null ? "" : row.crjbjString) + '>' + (row.crjbjString == null ? "" : row.crjbjString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'rkbhgbj') > -1) {
            clumns.push({ field: 'rkbhgbj', title: '入库合格不合格标记', width: 200, hidden: util.getArrayIndex(option.hidden, 'rkbhgbj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.rkbhgbj == null ? "" : row.rkbhgbj) + '>' + (row.rkbhgbj == null ? "" : row.rkbhgbj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'rkbhgbjString') > -1) {
            clumns.push({ field: 'rkbhgbjString', title: '入库合格不合格标记', width: 200, hidden: util.getArrayIndex(option.hidden, 'rkbhgbjString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.rkbhgbjString == null ? "" : row.rkbhgbjString) + '>' + (row.rkbhgbjString == null ? "" : row.rkbhgbjString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'rkbhgyy') > -1) {
            clumns.push({ field: 'rkbhgyy', title: '不合格入库原因', width: 200, hidden: util.getArrayIndex(option.hidden, 'rkbhgyy') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.rkbhgyy == null ? "" : row.rkbhgyy) + '>' + (row.rkbhgyy == null ? "" : row.rkbhgyy) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'lrsfjs') > -1) {
            clumns.push({ field: 'lrsfjs', title: '是否及时录入标记', width: 200, hidden: util.getArrayIndex(option.hidden, 'lrsfjs') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.lrsfjs == null ? "" : row.lrsfjs) + '>' + (row.lrsfjs == null ? "" : row.lrsfjs) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'lrsfjsString') > -1) {
            clumns.push({ field: 'lrsfjsString', title: '是否及时录入标记', width: 200, hidden: util.getArrayIndex(option.hidden, 'lrsfjsString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.lrsfjsString == null ? "" : row.lrsfjsString) + '>' + (row.lrsfjsString == null ? "" : row.lrsfjsString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zyryxgqk') > -1) {
            clumns.push({ field: 'zyryxgqk', title: '在押人员相关情况', width: 200, hidden: util.getArrayIndex(option.hidden, 'zyryxgqk') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zyryxgqk == null ? "" : row.zyryxgqk) + '>' + (row.zyryxgqk == null ? "" : row.zyryxgqk) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zyryxgqkString') > -1) {
            clumns.push({ field: 'zyryxgqkString', title: '在押人员相关情况', width: 200, hidden: util.getArrayIndex(option.hidden, 'zyryxgqkString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zyryxgqkString == null ? "" : row.zyryxgqkString) + '>' + (row.zyryxgqkString == null ? "" : row.zyryxgqkString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'emlx') > -1) {
            clumns.push({ field: 'emlx', title: '耳目类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'emlx') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.emlx == null ? "" : row.emlx) + '>' + (row.emlx == null ? "" : row.emlx) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'emlxString') > -1) {
            clumns.push({ field: 'emlxString', title: '耳目类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'emlxString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.emlxString == null ? "" : row.emlxString) + '>' + (row.emlxString == null ? "" : row.emlxString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'rsjclx') > -1) {
            clumns.push({ field: 'rsjclx', title: '妊娠检测类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'rsjclx') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.rsjclx == null ? "" : row.rsjclx) + '>' + (row.rsjclx == null ? "" : row.rsjclx) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'rsjclxString') > -1) {
            clumns.push({ field: 'rsjclxString', title: '妊娠检测类型', width: 200, hidden: util.getArrayIndex(option.hidden, 'rsjclxString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.rsjclxString == null ? "" : row.rsjclxString) + '>' + (row.rsjclxString == null ? "" : row.rsjclxString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jj') > -1) {
            clumns.push({ field: 'jj', title: '戒具标志位', width: 200, hidden: util.getArrayIndex(option.hidden, 'jj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jj == null ? "" : row.jj) + '>' + (row.jj == null ? "" : row.jj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jjString') > -1) {
            clumns.push({ field: 'jjString', title: '戒具标志位', width: 200, hidden: util.getArrayIndex(option.hidden, 'jjString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jjString == null ? "" : row.jjString) + '>' + (row.jjString == null ? "" : row.jjString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jb') > -1) {
            clumns.push({ field: 'jb', title: '禁闭标志位', width: 200, hidden: util.getArrayIndex(option.hidden, 'jb') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jb == null ? "" : row.jb) + '>' + (row.jb == null ? "" : row.jb) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jbString') > -1) {
            clumns.push({ field: 'jbString', title: '禁闭标志位', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jbString == null ? "" : row.jbString) + '>' + (row.jbString == null ? "" : row.jbString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'ldf') > -1) {
            clumns.push({ field: 'ldf', title: '劳动犯标志位', width: 200, hidden: util.getArrayIndex(option.hidden, 'ldf') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.ldf == null ? "" : row.ldf) + '>' + (row.ldf == null ? "" : row.ldf) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'ldfString') > -1) {
            clumns.push({ field: 'ldfString', title: '劳动犯标志位', width: 200, hidden: util.getArrayIndex(option.hidden, 'ldfString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.ldfString == null ? "" : row.ldfString) + '>' + (row.ldfString == null ? "" : row.ldfString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'ygry') > -1) {
            clumns.push({ field: 'ygry', title: '严管人员标志位', width: 200, hidden: util.getArrayIndex(option.hidden, 'ygry') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.ygry == null ? "" : row.ygry) + '>' + (row.ygry == null ? "" : row.ygry) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'ygryString') > -1) {
            clumns.push({ field: 'ygryString', title: '严管人员标志位', width: 200, hidden: util.getArrayIndex(option.hidden, 'ygryString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.ygryString == null ? "" : row.ygryString) + '>' + (row.ygryString == null ? "" : row.ygryString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zdry') > -1) {
            clumns.push({ field: 'zdry', title: '重点人员', width: 200, hidden: util.getArrayIndex(option.hidden, 'zdry') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zdry == null ? "" : row.zdry) + '>' + (row.zdry == null ? "" : row.zdry) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zdryString') > -1) {
            clumns.push({ field: 'zdryString', title: '重点人员', width: 200, hidden: util.getArrayIndex(option.hidden, 'zdryString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zdryString == null ? "" : row.zdryString) + '>' + (row.zdryString == null ? "" : row.zdryString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'slaj') > -1) {
            clumns.push({ field: 'slaj', title: '是否属于三类案件', width: 200, hidden: util.getArrayIndex(option.hidden, 'slaj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.slaj == null ? "" : row.slaj) + '>' + (row.slaj == null ? "" : row.slaj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'slajString') > -1) {
            clumns.push({ field: 'slajString', title: '是否属于三类案件', width: 200, hidden: util.getArrayIndex(option.hidden, 'slajString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.slajString == null ? "" : row.slajString) + '>' + (row.slajString == null ? "" : row.slajString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sykzrq') > -1) {
            clumns.push({ field: 'sykzrq', title: '收押开证日期(经办日期)', width: 200, hidden: util.getArrayIndex(option.hidden, 'sykzrq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sykzrq == null ? "" : row.sykzrq) + '>' + (row.sykzrq == null ? "" : row.sykzrq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'isjdwm') > -1) {
            clumns.push({ field: 'isjdwm', title: '是否戒毒未满', width: 200, hidden: util.getArrayIndex(option.hidden, 'isjdwm') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.isjdwm == null ? "" : row.isjdwm) + '>' + (row.isjdwm == null ? "" : row.isjdwm) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'isjdwmString') > -1) {
            clumns.push({ field: 'isjdwmString', title: '是否戒毒未满', width: 200, hidden: util.getArrayIndex(option.hidden, 'isjdwmString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.isjdwmString == null ? "" : row.isjdwmString) + '>' + (row.isjdwmString == null ? "" : row.isjdwmString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'cypjfz') > -1) {
            clumns.push({ field: 'cypjfz', title: '处遇评鉴分值', width: 200, hidden: util.getArrayIndex(option.hidden, 'cypjfz') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.cypjfz == null ? "" : row.cypjfz) + '>' + (row.cypjfz == null ? "" : row.cypjfz) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sfypj') > -1) {
            clumns.push({ field: 'sfypj', title: '是否已评鉴', width: 200, hidden: util.getArrayIndex(option.hidden, 'sfypj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sfypj == null ? "" : row.sfypj) + '>' + (row.sfypj == null ? "" : row.sfypj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sfypjString') > -1) {
            clumns.push({ field: 'sfypjString', title: '是否已评鉴', width: 200, hidden: util.getArrayIndex(option.hidden, 'sfypjString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sfypjString == null ? "" : row.sfypjString) + '>' + (row.sfypjString == null ? "" : row.sfypjString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sfrz') > -1) {
            clumns.push({ field: 'sfrz', title: '是否认罪', width: 200, hidden: util.getArrayIndex(option.hidden, 'sfrz') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sfrz == null ? "" : row.sfrz) + '>' + (row.sfrz == null ? "" : row.sfrz) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sfrzString') > -1) {
            clumns.push({ field: 'sfrzString', title: '是否认罪', width: 200, hidden: util.getArrayIndex(option.hidden, 'sfrzString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sfrzString == null ? "" : row.sfrzString) + '>' + (row.sfrzString == null ? "" : row.sfrzString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sfyxjslx') > -1) {
            clumns.push({ field: 'sfyxjslx', title: '是否允许家属联系', width: 200, hidden: util.getArrayIndex(option.hidden, 'sfyxjslx') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sfyxjslx == null ? "" : row.sfyxjslx) + '>' + (row.sfyxjslx == null ? "" : row.sfyxjslx) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sfyxjslxString') > -1) {
            clumns.push({ field: 'sfyxjslxString', title: '是否允许家属联系', width: 200, hidden: util.getArrayIndex(option.hidden, 'sfyxjslxString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sfyxjslxString == null ? "" : row.sfyxjslxString) + '>' + (row.sfyxjslxString == null ? "" : row.sfyxjslxString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'dagdbj') > -1) {
            clumns.push({ field: 'dagdbj', title: '档案归案标记', width: 200, hidden: util.getArrayIndex(option.hidden, 'dagdbj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.dagdbj == null ? "" : row.dagdbj) + '>' + (row.dagdbj == null ? "" : row.dagdbj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'clsypzr') > -1) {
            clumns.push({ field: 'clsypzr', title: '超龄收押批准人', width: 200, hidden: util.getArrayIndex(option.hidden, 'clsypzr') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.clsypzr == null ? "" : row.clsypzr) + '>' + (row.clsypzr == null ? "" : row.clsypzr) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'ryzwbj') > -1) {
            clumns.push({ field: 'ryzwbj', title: '人员指纹标记', width: 200, hidden: util.getArrayIndex(option.hidden, 'ryzwbj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.ryzwbj == null ? "" : row.ryzwbj) + '>' + (row.ryzwbj == null ? "" : row.ryzwbj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'ryzwbjString') > -1) {
            clumns.push({ field: 'ryzwbjString', title: '人员指纹标记', width: 200, hidden: util.getArrayIndex(option.hidden, 'ryzwbjString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.ryzwbjString == null ? "" : row.ryzwbjString) + '>' + (row.ryzwbjString == null ? "" : row.ryzwbjString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'wcnbj') > -1) {
            clumns.push({ field: 'wcnbj', title: '未成年标记', width: 200, hidden: util.getArrayIndex(option.hidden, 'wcnbj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.wcnbj == null ? "" : row.wcnbj) + '>' + (row.wcnbj == null ? "" : row.wcnbj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'wcnbjString') > -1) {
            clumns.push({ field: 'wcnbjString', title: '未成年标记', width: 200, hidden: util.getArrayIndex(option.hidden, 'wcnbjString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.wcnbjString == null ? "" : row.wcnbjString) + '>' + (row.wcnbjString == null ? "" : row.wcnbjString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'grjl') > -1) {
            clumns.push({ field: 'grjl', title: '个人经历', width: 200, hidden: util.getArrayIndex(option.hidden, 'grjl') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.grjl == null ? "" : row.grjl) + '>' + (row.grjl == null ? "" : row.grjl) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'drjsr') > -1) {
            clumns.push({ field: 'drjsr', title: '带入监室人', width: 200, hidden: util.getArrayIndex(option.hidden, 'drjsr') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.drjsr == null ? "" : row.drjsr) + '>' + (row.drjsr == null ? "" : row.drjsr) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'drjssj') > -1) {
            clumns.push({ field: 'drjssj', title: '带入监室时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'drjssj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.drjssj == null ? "" : row.drjssj) + '>' + (row.drjssj == null ? "" : row.drjssj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'lastfxpgfz') > -1) {
            clumns.push({ field: 'lastfxpgfz', title: '最后一次风险评估分值', width: 200, hidden: util.getArrayIndex(option.hidden, 'lastfxpgfz') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.lastfxpgfz == null ? "" : row.lastfxpgfz) + '>' + (row.lastfxpgfz == null ? "" : row.lastfxpgfz) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'state') > -1) {
            clumns.push({ field: 'state', title: '状态', width: 200, hidden: util.getArrayIndex(option.hidden, 'state') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.state == null ? "" : row.state) + '>' + (row.state == null ? "" : row.state) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'stateString') > -1) {
            clumns.push({ field: 'stateString', title: '状态', width: 200, hidden: util.getArrayIndex(option.hidden, 'stateString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.stateString == null ? "" : row.stateString) + '>' + (row.stateString == null ? "" : row.stateString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'bz') > -1) {
            clumns.push({ field: 'bz', title: '备注', width: 200, hidden: util.getArrayIndex(option.hidden, 'bz') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.bz == null ? "" : row.bz) + '>' + (row.bz == null ? "" : row.bz) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jsly') > -1) {
            clumns.push({ field: 'jsly', title: '拒收理由(入所健康检查结果)', width: 200, hidden: util.getArrayIndex(option.hidden, 'jsly') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jsly == null ? "" : row.jsly) + '>' + (row.jsly == null ? "" : row.jsly) + '</span>' } });
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
        if (util.getArrayIndex(option.clumns, 'jygzzlpg') > -1) {
            clumns.push({ field: 'jygzzlpg', title: '教育质量改造评估', width: 200, hidden: util.getArrayIndex(option.hidden, 'jygzzlpg') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jygzzlpg == null ? "" : row.jygzzlpg) + '>' + (row.jygzzlpg == null ? "" : row.jygzzlpg) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jygzzlpgString') > -1) {
            clumns.push({ field: 'jygzzlpgString', title: '教育质量改造评估', width: 200, hidden: util.getArrayIndex(option.hidden, 'jygzzlpgString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jygzzlpgString == null ? "" : row.jygzzlpgString) + '>' + (row.jygzzlpgString == null ? "" : row.jygzzlpgString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'flws') > -1) {
            clumns.push({ field: 'flws', title: '法律文书打印', width: 200, hidden: util.getArrayIndex(option.hidden, 'flws') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.flws == null ? "" : row.flws) + '>' + (row.flws == null ? "" : row.flws) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zyaf') > -1) {
            clumns.push({ field: 'zyaf', title: '重要案犯', width: 200, hidden: util.getArrayIndex(option.hidden, 'zyaf') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zyaf == null ? "" : row.zyaf) + '>' + (row.zyaf == null ? "" : row.zyaf) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zyafString') > -1) {
            clumns.push({ field: 'zyafString', title: '重要案犯', width: 200, hidden: util.getArrayIndex(option.hidden, 'zyafString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zyafString == null ? "" : row.zyafString) + '>' + (row.zyafString == null ? "" : row.zyafString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sfcxcy') > -1) {
            clumns.push({ field: 'sfcxcy', title: '是否抽血采样', width: 200, hidden: util.getArrayIndex(option.hidden, 'sfcxcy') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sfcxcy == null ? "" : row.sfcxcy) + '>' + (row.sfcxcy == null ? "" : row.sfcxcy) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sfcxcyString') > -1) {
            clumns.push({ field: 'sfcxcyString', title: '是否抽血采样', width: 200, hidden: util.getArrayIndex(option.hidden, 'sfcxcyString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sfcxcyString == null ? "" : row.sfcxcyString) + '>' + (row.sfcxcyString == null ? "" : row.sfcxcyString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sffy') > -1) {
            clumns.push({ field: 'sffy', title: '是否需要发药', width: 200, hidden: util.getArrayIndex(option.hidden, 'sffy') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sffy == null ? "" : row.sffy) + '>' + (row.sffy == null ? "" : row.sffy) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sffyString') > -1) {
            clumns.push({ field: 'sffyString', title: '是否需要发药', width: 200, hidden: util.getArrayIndex(option.hidden, 'sffyString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sffyString == null ? "" : row.sffyString) + '>' + (row.sffyString == null ? "" : row.sffyString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'fyksrq') > -1) {
            clumns.push({ field: 'fyksrq', title: '发药开始日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'fyksrq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.fyksrq == null ? "" : row.fyksrq) + '>' + (row.fyksrq == null ? "" : row.fyksrq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'fyjsrq') > -1) {
            clumns.push({ field: 'fyjsrq', title: '发药结束日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'fyjsrq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.fyjsrq == null ? "" : row.fyjsrq) + '>' + (row.fyjsrq == null ? "" : row.fyjsrq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'wpsflq') > -1) {
            clumns.push({ field: 'wpsflq', title: '物品是否领取完', width: 200, hidden: util.getArrayIndex(option.hidden, 'wpsflq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.wpsflq == null ? "" : row.wpsflq) + '>' + (row.wpsflq == null ? "" : row.wpsflq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'wpsflqString') > -1) {
            clumns.push({ field: 'wpsflqString', title: '物品是否领取完', width: 200, hidden: util.getArrayIndex(option.hidden, 'wpsflqString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.wpsflqString == null ? "" : row.wpsflqString) + '>' + (row.wpsflqString == null ? "" : row.wpsflqString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sfwxjc') > -1) {
            clumns.push({ field: 'sfwxjc', title: '五项检查是否及时', width: 200, hidden: util.getArrayIndex(option.hidden, 'sfwxjc') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sfwxjc == null ? "" : row.sfwxjc) + '>' + (row.sfwxjc == null ? "" : row.sfwxjc) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sfwxjcString') > -1) {
            clumns.push({ field: 'sfwxjcString', title: '五项检查是否及时', width: 200, hidden: util.getArrayIndex(option.hidden, 'sfwxjcString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sfwxjcString == null ? "" : row.sfwxjcString) + '>' + (row.sfwxjcString == null ? "" : row.sfwxjcString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'ywlcid') > -1) {
            clumns.push({ field: 'ywlcid', title: '业务流程ID', width: 200, hidden: util.getArrayIndex(option.hidden, 'ywlcid') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.ywlcid == null ? "" : row.ywlcid) + '>' + (row.ywlcid == null ? "" : row.ywlcid) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'syrdh') > -1) {
            clumns.push({ field: 'syrdh', title: '送押人电话', width: 200, hidden: util.getArrayIndex(option.hidden, 'syrdh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.syrdh == null ? "" : row.syrdh) + '>' + (row.syrdh == null ? "" : row.syrdh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'tabh') > -1) {
            clumns.push({ field: 'tabh', title: '同案编号', width: 200, hidden: util.getArrayIndex(option.hidden, 'tabh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.tabh == null ? "" : row.tabh) + '>' + (row.tabh == null ? "" : row.tabh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'za') > -1) {
            clumns.push({ field: 'za', title: '专案', width: 200, hidden: util.getArrayIndex(option.hidden, 'za') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.za == null ? "" : row.za) + '>' + (row.za == null ? "" : row.za) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'yfh') > -1) {
            clumns.push({ field: 'yfh', title: '衣服号', width: 200, hidden: util.getArrayIndex(option.hidden, 'yfh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.yfh == null ? "" : row.yfh) + '>' + (row.yfh == null ? "" : row.yfh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zw') > -1) {
            clumns.push({ field: 'zw', title: '职务', width: 200, hidden: util.getArrayIndex(option.hidden, 'zw') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zw == null ? "" : row.zw) + '>' + (row.zw == null ? "" : row.zw) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zwString') > -1) {
            clumns.push({ field: 'zwString', title: '职务', width: 200, hidden: util.getArrayIndex(option.hidden, 'zwString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zwString == null ? "" : row.zwString) + '>' + (row.zwString == null ? "" : row.zwString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zwjb') > -1) {
            clumns.push({ field: 'zwjb', title: '职务级别', width: 200, hidden: util.getArrayIndex(option.hidden, 'zwjb') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zwjb == null ? "" : row.zwjb) + '>' + (row.zwjb == null ? "" : row.zwjb) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zwjbString') > -1) {
            clumns.push({ field: 'zwjbString', title: '职务级别', width: 200, hidden: util.getArrayIndex(option.hidden, 'zwjbString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zwjbString == null ? "" : row.zwjbString) + '>' + (row.zwjbString == null ? "" : row.zwjbString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'tz') > -1) {
            clumns.push({ field: 'tz', title: '体重', width: 200, hidden: util.getArrayIndex(option.hidden, 'tz') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.tz == null ? "" : row.tz) + '>' + (row.tz == null ? "" : row.tz) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'cwh') > -1) {
            clumns.push({ field: 'cwh', title: '床位号', width: 200, hidden: util.getArrayIndex(option.hidden, 'cwh') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.cwh == null ? "" : row.cwh) + '>' + (row.cwh == null ? "" : row.cwh) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'tbtsbj') > -1) {
            clumns.push({ field: 'tbtsbj', title: '体表特殊标记', width: 200, hidden: util.getArrayIndex(option.hidden, 'tbtsbj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.tbtsbj == null ? "" : row.tbtsbj) + '>' + (row.tbtsbj == null ? "" : row.tbtsbj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'cljgrq') > -1) {
            clumns.push({ field: 'cljgrq', title: '处理结果日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'cljgrq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.cljgrq == null ? "" : row.cljgrq) + '>' + (row.cljgrq == null ? "" : row.cljgrq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'pjrqString') > -1) {
            clumns.push({ field: 'pjrqString', title: '判决日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'pjrqString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.pjrqString == null ? "" : row.pjrqString) + '>' + (row.pjrqString == null ? "" : row.pjrqString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'pjzm') > -1) {
            clumns.push({ field: 'pjzm', title: '判决罪名', width: 200, hidden: util.getArrayIndex(option.hidden, 'pjzm') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.pjzm == null ? "" : row.pjzm) + '>' + (row.pjzm == null ? "" : row.pjzm) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'pjdw') > -1) {
            clumns.push({ field: 'pjdw', title: '判决单位', width: 200, hidden: util.getArrayIndex(option.hidden, 'pjdw') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.pjdw == null ? "" : row.pjdw) + '>' + (row.pjdw == null ? "" : row.pjdw) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'zxtzssdrq') > -1) {
            clumns.push({ field: 'zxtzssdrq', title: '执行通知书送达日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'zxtzssdrq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.zxtzssdrq == null ? "" : row.zxtzssdrq) + '>' + (row.zxtzssdrq == null ? "" : row.zxtzssdrq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'tzcsbz') > -1) {
            clumns.push({ field: 'tzcsbz', title: '通知出所标志', width: 200, hidden: util.getArrayIndex(option.hidden, 'tzcsbz') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.tzcsbz == null ? "" : row.tzcsbz) + '>' + (row.tzcsbz == null ? "" : row.tzcsbz) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'tzcsbzString') > -1) {
            clumns.push({ field: 'tzcsbzString', title: '通知出所标志', width: 200, hidden: util.getArrayIndex(option.hidden, 'tzcsbzString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.tzcsbzString == null ? "" : row.tzcsbzString) + '>' + (row.tzcsbzString == null ? "" : row.tzcsbzString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'je') > -1) {
            clumns.push({ field: 'je', title: '金额', width: 200, hidden: util.getArrayIndex(option.hidden, 'je') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.je == null ? "" : row.je) + '>' + (row.je == null ? "" : row.je) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jbr') > -1) {
            clumns.push({ field: 'jbr', title: '经办人', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbr') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jbr == null ? "" : row.jbr) + '>' + (row.jbr == null ? "" : row.jbr) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jbrq') > -1) {
            clumns.push({ field: 'jbrq', title: '经办日期', width: 200, hidden: util.getArrayIndex(option.hidden, 'jbrq') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jbrq == null ? "" : row.jbrq) + '>' + (row.jbrq == null ? "" : row.jbrq) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sfswry') > -1) {
            clumns.push({ field: 'sfswry', title: '是否涉维人员', width: 200, hidden: util.getArrayIndex(option.hidden, 'sfswry') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sfswry == null ? "" : row.sfswry) + '>' + (row.sfswry == null ? "" : row.sfswry) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sfswryString') > -1) {
            clumns.push({ field: 'sfswryString', title: '是否涉维人员', width: 200, hidden: util.getArrayIndex(option.hidden, 'sfswryString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sfswryString == null ? "" : row.sfswryString) + '>' + (row.sfswryString == null ? "" : row.sfswryString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'swpgzb') > -1) {
            clumns.push({ field: 'swpgzb', title: '涉维评估指标', width: 200, hidden: util.getArrayIndex(option.hidden, 'swpgzb') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.swpgzb == null ? "" : row.swpgzb) + '>' + (row.swpgzb == null ? "" : row.swpgzb) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'swpgr') > -1) {
            clumns.push({ field: 'swpgr', title: '涉维评估人', width: 200, hidden: util.getArrayIndex(option.hidden, 'swpgr') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.swpgr == null ? "" : row.swpgr) + '>' + (row.swpgr == null ? "" : row.swpgr) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'swpgsj') > -1) {
            clumns.push({ field: 'swpgsj', title: '涉维评估时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'swpgsj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.swpgsj == null ? "" : row.swpgsj) + '>' + (row.swpgsj == null ? "" : row.swpgsj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jsycbz') > -1) {
            clumns.push({ field: 'jsycbz', title: '精神异常标志', width: 200, hidden: util.getArrayIndex(option.hidden, 'jsycbz') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jsycbz == null ? "" : row.jsycbz) + '>' + (row.jsycbz == null ? "" : row.jsycbz) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'jsycbzString') > -1) {
            clumns.push({ field: 'jsycbzString', title: '精神异常标志', width: 200, hidden: util.getArrayIndex(option.hidden, 'jsycbzString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.jsycbzString == null ? "" : row.jsycbzString) + '>' + (row.jsycbzString == null ? "" : row.jsycbzString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'ddgy') > -1) {
            clumns.push({ field: 'ddgy', title: '单独关押标志位', width: 200, hidden: util.getArrayIndex(option.hidden, 'ddgy') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.ddgy == null ? "" : row.ddgy) + '>' + (row.ddgy == null ? "" : row.ddgy) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'ddgyString') > -1) {
            clumns.push({ field: 'ddgyString', title: '单独关押标志位', width: 200, hidden: util.getArrayIndex(option.hidden, 'ddgyString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.ddgyString == null ? "" : row.ddgyString) + '>' + (row.ddgyString == null ? "" : row.ddgyString) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'sfswsy') > -1) {
            clumns.push({ field: 'sfswsy', title: '是否是卫生员', width: 200, hidden: util.getArrayIndex(option.hidden, 'sfswsy') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.sfswsy == null ? "" : row.sfswsy) + '>' + (row.sfswsy == null ? "" : row.sfswsy) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'ywzp') > -1) {
            clumns.push({ field: 'ywzp', title: '有无照片', width: 200, hidden: util.getArrayIndex(option.hidden, 'ywzp') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.ywzp == null ? "" : row.ywzp) + '>' + (row.ywzp == null ? "" : row.ywzp) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'type') > -1) {
            clumns.push({ field: 'type', title: '照片位置', width: 200, hidden: util.getArrayIndex(option.hidden, 'type') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.type == null ? "" : row.type) + '>' + (row.type == null ? "" : row.type) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'photoUrl') > -1) {
            clumns.push({ field: 'photoUrl', title: '照片查看', width: 200, hidden: util.getArrayIndex(option.hidden, 'photoUrl') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.photoUrl == null ? "" : row.photoUrl) + '>' + (row.photoUrl == null ? "" : row.photoUrl) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'lssj') > -1) {
            clumns.push({ field: 'lssj', title: '离所时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'lssj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.lssj == null ? "" : row.lssj) + '>' + (row.lssj == null ? "" : row.lssj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'hssj') > -1) {
            clumns.push({ field: 'hssj', title: '回所时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'hssj') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.hssj == null ? "" : row.hssj) + '>' + (row.hssj == null ? "" : row.hssj) + '</span>' } });
        }
        if (util.getArrayIndex(option.clumns, 'hssjString') > -1) {
            clumns.push({ field: 'hssjString', title: '回所时间', width: 200, hidden: util.getArrayIndex(option.hidden, 'hssjString') > -1 ? true : false, sortable: 'true', formatter: function(value, row, index) { return '<span title=' + (row.hssjString == null ? "" : row.hssjString) + '>' + (row.hssjString == null ? "" : row.hssjString) + '</span>' } });
        }
        return clumns;
    };
    return main;
});