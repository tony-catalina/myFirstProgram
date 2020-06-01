define(function (require) {
    var tools = require('awd/jquery/tools');
    return {
        jbxx: function (option) {

            var clumns = [
                {
                    field: 'ooid',
                    title: '单选',
                    align: 'center',
                    formatter: function (value, rowData, rowIndex) {
                        return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                    }
                },
                {
                    field: 'fxpgLastfxpgfz',
                    title: '风险趋势图',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '>' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '</span>';
                    }
                },
                {
                    field: 'snbh',
                    title: '人员编号',
                    align: 'center',
                    width: 100,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.snbh == null ? '' : row.snbh) + '>' + (row.snbh == null ? '' : row.snbh) + '</span>';
                    }
                },
                {
                    field: 'xm',
                    title: '姓名',
                    align: 'center',
                    width: 100,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                    }
                },
                {
                    field: 'sykzrq',
                    title: '收押开证日期',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.sykzrq == null ? '' : row.sykzrq) + '>' + (row.sykzrq == null ? '' : row.sykzrq) + '</span>';
                    }
                },
                {
                    field: 'jsh',
                    title: '监室号',
                    align: 'center',
                    width: 100,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                    }
                },
                {
                    field: 'bahjString',
                    title: '办案环节',
                    align: 'center',
                    width: 100,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.bahjString == null ? '' : row.bahjString) + '>' + (row.bahjString == null ? '' : row.bahjString) + '</span>';
                    }
                },
                {
                    field: 'rsrq',
                    title: '入所时间',
                    align: 'center',
                    width: 200,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.rsrq == null ? '' : row.rsrq) + '>' + (row.rsrq == null ? '' : row.rsrq) + '</span>';
                    }
                },
                {
                    field: 'gyqx',
                    title: '关押期限',
                    align: 'center',
                    width: 200,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.gyqx == null ? '' : row.gyqx) + '>' + (row.gyqx == null ? '' : row.gyqx) + '</span>';
                    }
                },
                {
                    field: 'badw',
                    title: '办案单位',
                    align: 'center',
                    width: 200,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.badw == null ? '' : row.badw) + '>' + (row.badw == null ? '' : row.badw) + '</span>';
                    }
                },
                {
                    field: 'xbString',
                    title: '性别',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.xbString == null ? '' : row.xbString) + '>' + (row.xbString == null ? '' : row.xbString) + '</span>';
                    }
                },
                {
                    field: 'dwlxString',
                    title: '单位类型',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.dwlxString == null ? '' : row.dwlxString) + '>' + (row.dwlxString == null ? '' : row.dwlxString) + '</span>';
                    }
                },
                {
                    field: 'rsxzString',
                    title: '入所性质',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.rsxzString == null ? '' : row.rsxzString) + '>' + (row.rsxzString == null ? '' : row.rsxzString) + '</span>';
                    }
                },
                {
                    field: 'csrq',
                    title: '出生日期',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.csrq == null ? '' : row.csrq) + '>' + (row.csrq == null ? '' : row.csrq) + '</span>';
                    }
                },
                {
                    field: 'zjlxString',
                    title: '证件类型',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title='
                            + (row.zjlxString == null ? '' : row.zjlxString) + '>' + (row.zjlxString == null ? '' : row.zjlxString) + '</span>';
                    }
                },
                {
                    field: 'gcbh',
                    title: '案件编号',
                    align: 'center',
                    width: 200, hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.gcbh == null ? '' : row.gcbh) + '>' + (row.gcbh == null ? '' : row.gcbh) + '</span>';
                    }
                },
                {
                    field: 'zjh',
                    title: '证件号',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.zjh == null ? '' : row.zjh) + '>' + (row.zjh == null ? '' : row.zjh) + '</span>';
                    }
                },
                {
                    field: 'hjdString',
                    title: '户籍地',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.hjdString == null ? '' : row.hjdString) + '>' + (row.hjdString == null ? '' : row.hjdString) + '</span>';
                    }
                },
                {
                    field: 'xzdString',
                    title: '现住地',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.xzdString == null ? '' : row.xzdString) + '>' + (row.xzdString == null ? '' : row.xzdString) + '</span>';
                    }
                },
                {
                    field: 'mzString',
                    title: '民族',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.mzString == null ? '' : row.mzString) + '>' + (row.mzString == null ? '' : row.mzString) + '</span>';
                    }
                },
                {
                    field: 'gjString',
                    title: '国籍',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.gjString == null ? '' : row.gjString) + '>' + (row.gjString == null ? '' : row.gjString) + '</span>';
                    }
                },
                {
                    field: 'whcdString',
                    title: '文化程度',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.whcdString == null ? '' : row.whcdString) + '>' + (row.whcdString == null ? '' : row.whcdString) + '</span>';
                    }
                },
                {
                    field: 'zyString',
                    title: '职业',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.zyString == null ? '' : row.zyString) + '>' + (row.zyString == null ? '' : row.zyString) + '</span>';
                    }
                },
                {
                    field: 'sfString',
                    title: '身份',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.sfString == null ? '' : row.sfString) + '>' + (row.sfString == null ? '' : row.sfString) + '</span>';
                    }
                },
                {
                    field: 'tssfString',
                    title: '特殊身份',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.tssfString == null ? '' : row.tssfString) + '>' + (row.tssfString == null ? '' : row.tssfString) + '</span>';
                    }
                },
                {
                    field: 'cypjfz',
                    title: '处遇评鉴分值',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.cypjfz == null ? '' : row.cypjfz) + '>' + (row.cypjfz == null ? '' : row.cypjfz) + '</span>';
                    }
                },
                {
                    field: 'jyrq',
                    title: '羁押日期',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.jyrq == null ? '' : row.jyrq) + '>' + (row.jyrq == null ? '' : row.jyrq) + '</span>';
                    }
                },
                {
                    field: 'ayString',
                    title: '主要案由',
                    align: 'center',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.ayString == null ? '' : row.ayString) + '>' + (row.ayString == null ? '' : row.ayString) + '</span>';
                    }
                }
            ];

            return clumns;
        },
        clcs: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '人员姓名',
                align: 'center',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'csyyString',
                title: '出所原因',
                align: 'center',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.csyyString == null ? '' : row.csyyString) + '>' + (row.csyyString == null ? '' : row.csyyString) + '</span>';
                }
            },
            {
                field: 'cssj',
                title: '出所时间',
                align: 'center',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.cssj == null ? '' : row.cssj) + '>' + (row.cssj == null ? '' : row.cssj) + '</span>';
                }
            },
            {
                field: 'csqx',
                title: '出所去向',
                align: 'center',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.csqx == null ? '' : row.csqx) + '>' + (row.csqx == null ? '' : row.csqx) + '</span>';
                }
            },
            {
                field: 'pzdw',
                title: '批准单位',
                align: 'center',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.pzdw == null ? '' : row.pzdw) + '>' + (row.pzdw == null ? '' : row.pzdw) + '</span>';
                }
            },
            {
                field: 'pzr',
                title: '批准人',
                align: 'center',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.pzr == null ? '' : row.pzr) + '>' + (row.pzr == null ? '' : row.pzr) + '</span>';
                }
            },
            {
                field: 'dbdw',
                title: '担保单位',
                align: 'center',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.dbdw == null ? '' : row.dbdw) + '>' + (row.dbdw == null ? '' : row.dbdw) + '</span>';
                }
            },
            {
                field: 'dbr',
                title: '担保人',
                align: 'center',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '>' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '</span>';
                }
            },
            {
                field: 'jddw',
                title: '监督单位',
                align: 'center',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '>' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '</span>';
                }
            },
            {
                field: 'zcdwszd',
                title: '转出单位所在地',
                align: 'center',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '>' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '备注',
                align: 'center',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '>' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '</span>';
                }
            }
            ];
            return clumns;
        },
        barycx: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            // {
            //     field: 'ooid',
            //     title: '',
            //     width: '',
            //     checkbox: Option == true ? false : true,
            //     formatter: function (value, rowData, rowIndex) {
            //         if (!option) {
            //             return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
            //         } else {
            //             return '<input type="checkbox" name="ryRadio" />';
            //         }

            //     }
            // },
            {
                field: 'jsbh',
                align: 'center',
                width: 150,
                title: '监所编号',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbh == null ? '' : row.jsbh) + '>' + (row.jsbh == null ? '' : row.jsbh) + '</span>';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'sqwp',
                title: '申请物品',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqwp == null ? '' : row.sqwp) + '>' + (row.sqwp == null ? '' : row.sqwp) + '</span>';
                }
            },
            {
                field: 'sqyy',
                title: '申请原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqyy == null ? '' : row.sqyy) + '>' + (row.sqyy == null ? '' : row.sqyy) + '</span>';
                }
            },
            {
                field: 'sqsj',
                title: '申请时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqsj == null ? '' : row.sqsj) + '>' + (row.sqsj == null ? '' : row.sqsj) + '</span>';
                }
            },
            {
                field: 'qtblr',
                title: '前台办理人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.qtblr == null ? '' : row.qtblr) + '>' + (row.qtblr == null ? '' : row.qtblr) + '</span>';
                }
            },
            {
                field: 'qtblsj',
                title: '前台办理时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.qtblsj == null ? '' : row.qtblsj) + '>' + (row.qtblsj == null ? '' : row.qtblsj) + '</span>';
                }
            }
            ];
            return clumns;
        },
        jsqkfx: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsmc',
                align: 'center',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'rq',
                title: '日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rq == null ? '' : row.rq) + '>' + (row.rq == null ? '' : row.rq) + '</span>';
                }
            },
            {
                field: 'jcsjyl',
                title: '基础设计押量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jcsjyl == null ? '' : row.jcsjyl) + '>' + (row.jcsjyl == null ? '' : row.jcsjyl) + '</span>';
                }
            },
            {
                field: 'zjyrs',
                title: '总羁押人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zjyrs == null ? '' : row.zjyrs) + '>' + (row.zjyrs == null ? '' : row.zjyrs) + '</span>';
                }
            },
            {
                field: 'drrsrs',
                title: '当日入所人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.drrsrs == null ? '' : row.drrsrs) + '>' + (row.drrsrs == null ? '' : row.drrsrs) + '</span>';
                }
            },
            {
                field: 'drcsrs',
                title: '当日出所人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.drcsrs == null ? '' : row.drcsrs) + '>' + (row.drcsrs == null ? '' : row.drcsrs) + '</span>';
                }
            },
            ];
            return clumns;
        },
        zszcdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsh',
                align: 'center',
                width: 150,
                title: '监室号',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'sjrq',
                title: '事件日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjrq == null ? '' : row.sjrq) + '>' + (row.sjrq == null ? '' : row.sjrq) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'sfzh',
                title: '身份证号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sfzh == null ? '' : row.sfzh) + '>' + (row.sfzh == null ? '' : row.sfzh) + '</span>';
                }
            },
            {
                field: 'zszcfs',
                title: '自杀自残方式',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zszcfs == null ? '' : row.zszcfs) + '>' + (row.zszcfs == null ? '' : row.zszcfs) + '</span>';
                }
            },
            {
                field: 'jyqk',
                title: '简要情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jyqk == null ? '' : row.jyqk) + '>' + (row.jyqk == null ? '' : row.jyqk) + '</span>';
                }
            },
            {
                field: 'bz',
                title: '备注',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bz == null ? '' : row.bz) + '>' + (row.bz == null ? '' : row.bz) + '</span>';
                }
            },
            ];
            return clumns;
        },
        djdodj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'sjrq',
                title: '事件日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjrq == null ? '' : row.sjrq) + '>' + (row.sjrq == null ? '' : row.sjrq) + '</span>';
                }
            },
            {
                field: 'jtsj',
                title: '具体时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jtsj == null ? '' : row.jtsj) + '>' + (row.jtsj == null ? '' : row.jtsj) + '</span>';
                }
            },
            {
                field: 'jsh',
                title: '监室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'wz',
                title: '位置',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wz == null ? '' : row.wz) + '>' + (row.wz == null ? '' : row.wz) + '</span>';
                }
            },
            {
                field: 'fxlk',
                title: '风险列控',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.fxlk == null ? '' : row.fxlk) + '>' + (row.fxlk == null ? '' : row.fxlk) + '</span>';
                }
            },
            {
                field: 'zggj',
                title: '主管管教',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zggj == null ? '' : row.zggj) + '>' + (row.zggj == null ? '' : row.zggj) + '</span>';
                }
            },
            {
                field: 'jyqk',
                title: '简要情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jyqk == null ? '' : row.jyqk) + '>' + (row.jyqk == null ? '' : row.jyqk) + '</span>';
                }
            },
            {
                field: 'zsqk',
                title: '致伤情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zsqk == null ? '' : row.zsqk) + '>' + (row.zsqk == null ? '' : row.zsqk) + '</span>';
                }
            },
            {
                field: 'djqk',
                title: '调监情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.djqk == null ? '' : row.djqk) + '>' + (row.djqk == null ? '' : row.djqk) + '</span>';
                }
            },
            {
                field: 'cfqk',
                title: '处罚情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.cfqk == null ? '' : row.cfqk) + '>' + (row.cfqk == null ? '' : row.cfqk) + '</span>';
                }
            },
            {
                field: 'sflacl',
                title: '是否立案处理',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sflacl == null ? '' : row.sflacl) + '>' + (row.sflacl == null ? '' : row.sflacl) + '</span>';
                }
            },
            {
                field: 'bz',
                title: '备注',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bz == null ? '' : row.bz) + '>' + (row.bz == null ? '' : row.bz) + '</span>';
                }
            }
            ];
            return clumns;
        },
        tfjbdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsh',
                title: '监室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'sjrq',
                title: '事件日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjrq == null ? '' : row.sjrq) + '>' + (row.sjrq == null ? '' : row.sjrq) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'sfzh',
                title: '身份证号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sfzh == null ? '' : row.sfzh) + '>' + (row.sfzh == null ? '' : row.sfzh) + '</span>';
                }
            },
            {
                field: 'qbrq',
                title: '取保日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.qbrq == null ? '' : row.qbrq) + '>' + (row.qbrq == null ? '' : row.qbrq) + '</span>';
                }
            },
            {
                field: 'jyqk',
                title: '简要情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jyqk == null ? '' : row.jyqk) + '>' + (row.jyqk == null ? '' : row.jyqk) + '</span>';
                }
            },
            {
                field: 'bz',
                title: '备注',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bz == null ? '' : row.bz) + '>' + (row.bz == null ? '' : row.bz) + '</span>';
                }
            },
            {
                field: 'bgcshswqk',
                title: '变更措施后死亡情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bgcshswqk == null ? '' : row.bgcshswqk) + '>' + (row.bgcshswqk == null ? '' : row.bgcshswqk) + '</span>';
                }
            }
            ];
            return clumns;
        },
        mdhjdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsh',
                title: '监室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'sjrq',
                title: '事件日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjrq == null ? '' : row.sjrq) + '>' + (row.sjrq == null ? '' : row.sjrq) + '</span>';
                }
            },
            {
                field: 'gjmj',
                title: '管教民警',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.gjmj == null ? '' : row.gjmj) + '>' + (row.gjmj == null ? '' : row.gjmj) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
                }
            },
            {
                field: 'sfzh',
                title: '身份证号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sfzh == null ? '' : row.sfzh) + '>' + (row.sfzh == null ? '' : row.sfzh) + '</span>';
                }
            },
            {
                field: 'jg',
                title: '籍贯',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jg == null ? '' : row.jg) + '>' + (row.jg == null ? '' : row.jg) + '</span>';
                }
            },
            {
                field: 'sbrq',
                title: '上报日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sbrq == null ? '' : row.sbrq) + '>' + (row.sbrq == null ? '' : row.sbrq) + '</span>';
                }
            },
            {
                field: 'zhbx',
                title: '转化表现',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zhbx == null ? '' : row.zhbx) + '>' + (row.zhbx == null ? '' : row.zhbx) + '</span>';
                }
            },
            {
                field: 'mdlx',
                title: '矛盾类型',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.mdlx == null ? '' : row.mdlx) + '>' + (row.mdlx == null ? '' : row.mdlx) + '</span>';
                }
            },
            {
                field: 'ghqk',
                title: '归坏欠款(万元)',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ghqk == null ? '' : row.ghqk) + '>' + (row.ghqk == null ? '' : row.ghqk) + '</span>';
                }
            },
            {
                field: 'jtnr',
                title: '具体内容',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jtnr == null ? '' : row.jtnr) + '>' + (row.jtnr == null ? '' : row.jtnr) + '</span>';
                }
            },
            {
                field: 'bz',
                title: '备注',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bz == null ? '' : row.bz) + '>' + (row.bz == null ? '' : row.bz) + '</span>';
                }
            }
            ];
            return clumns;
        },
        swfzdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'rq',
                title: '日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rq == null ? '' : row.rq) + '>' + (row.rq == null ? '' : row.rq) + '</span>';
                }
            },
            {
                field: 'ajlb',
                title: '案件类别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ajlb == null ? '' : row.ajlb) + '>' + (row.ajlb == null ? '' : row.ajlb) + '</span>';
                }
            },
            {
                field: 'zhry',
                title: '抓获人员',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zhry == null ? '' : row.zhry) + '>' + (row.zhry == null ? '' : row.zhry) + '</span>';
                }
            },
            {
                field: 'chwp',
                title: '查获物品',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.chwp == null ? '' : row.chwp) + '>' + (row.chwp == null ? '' : row.chwp) + '</span>';
                }
            },
            {
                field: 'jyqk',
                title: '简要情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jyqk == null ? '' : row.jyqk) + '>' + (row.jyqk == null ? '' : row.jyqk) + '</span>';
                }
            },
            {
                field: 'bz',
                title: '备注',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bz == null ? '' : row.bz) + '>' + (row.bz == null ? '' : row.bz) + '</span>';
                }
            },
            ];
            return clumns;
        },
        hssfdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'rq',
                title: '日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rq == null ? '' : row.rq) + '>' + (row.rq == null ? '' : row.rq) + '</span>';
                }
            },
            {
                field: 'sbrq',
                title: '上报日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sbrq == null ? '' : row.sbrq) + '>' + (row.sbrq == null ? '' : row.sbrq) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'sfzh',
                title: '身份证号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sfzh == null ? '' : row.sfzh) + '>' + (row.sfzh == null ? '' : row.sfzh) + '</span>';
                }
            },
            {
                field: 'hsjg',
                title: '核实经过',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hsjg == null ? '' : row.hsjg) + '>' + (row.hsjg == null ? '' : row.hsjg) + '</span>';
                }
            },
            {
                field: 'myxm',
                title: '冒用姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.myxm == null ? '' : row.myxm) + '>' + (row.myxm == null ? '' : row.myxm) + '</span>';
                }
            },
            {
                field: 'bz',
                title: '备注',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bz == null ? '' : row.bz) + '>' + (row.bz == null ? '' : row.bz) + '</span>';
                }
            }
            ];
            return clumns;
        },
        jqgxxdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'rq',
                title: '日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rq == null ? '' : row.rq) + '>' + (row.rq == null ? '' : row.rq) + '</span>';
                }
            },
            {
                field: 'lx',
                title: '类型',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.lx == null ? '' : row.lx) + '>' + (row.lx == null ? '' : row.lx) + '</span>';
                }
            },
            {
                field: 'sjqry',
                title: '送锦旗人员',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjqry == null ? '' : row.sjqry) + '>' + (row.sjqry == null ? '' : row.sjqry) + '</span>';
                }
            },
            {
                field: 'jysj',
                title: '简要事迹',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jysj == null ? '' : row.jysj) + '>' + (row.jysj == null ? '' : row.jysj) + '</span>';
                }
            },
            {
                field: 'bz',
                title: '备注',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bz == null ? '' : row.bz) + '>' + (row.bz == null ? '' : row.bz) + '</span>';
                }
            },
            ];
            return clumns;
        },
        ldbgcx: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'ldbgrs',
                title: '领导变更人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ldbgrs == null ? '' : row.ldbgrs) + '>' + (row.ldbgrs == null ? '' : row.ldbgrs) + '</span>';
                }
            }
            ];
            return clumns;
        },
        ldbgcxdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'xrzw',
                title: '现任职务',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xrzw == null ? '' : row.xrzw) + '>' + (row.xrzw == null ? '' : row.xrzw) + '</span>';
                }
            },
            {
                field: 'rzsj',
                title: '任职时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rzsj == null ? '' : row.rzsj) + '>' + (row.rzsj == null ? '' : row.rzsj) + '</span>';
                }
            },
            {
                field: 'bgdh',
                title: '办公电话',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bgdh == null ? '' : row.bgdh) + '>' + (row.bgdh == null ? '' : row.bgdh) + '</span>';
                }
            },
            {
                field: 'sjhm',
                title: '手机号码',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjhm == null ? '' : row.sjhm) + '>' + (row.sjhm == null ? '' : row.sjhm) + '</span>';
                }
            },
            {
                field: 'zfggz',
                title: '主分管工作',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zfggz == null ? '' : row.zfggz) + '>' + (row.zfggz == null ? '' : row.zfggz) + '</span>';
                }
            },
            {
                field: 'ygzdw',
                title: '原工作单位',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ygzdw == null ? '' : row.ygzdw) + '>' + (row.ygzdw == null ? '' : row.ygzdw) + '</span>';
                }
            },
            {
                field: 'yzw',
                title: '原职务',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yzw == null ? '' : row.yzw) + '>' + (row.yzw == null ? '' : row.yzw) + '</span>';
                }
            },
            {
                field: 'ywjggzjy',
                title: '有无监管工作经验',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ywjggzjy == null ? '' : row.ywjggzjy) + '>' + (row.ywjggzjy == null ? '' : row.ywjggzjy) + '</span>';
                }
            }
            ];
            return clumns;
        },
        flfgdr: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'fl',
                title: '法律',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.fl == null ? '' : row.fl) + '>' + (row.fl == null ? '' : row.fl) + '</span>';
                }
            },
            {
                field: 'fg',
                title: '法规',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.fg == null ? '' : row.fg) + '>' + (row.fg == null ? '' : row.fg) + '</span>';
                }
            },
            {
                field: 'gzgd',
                title: '工作规定',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.gzgd == null ? '' : row.gzgd) + '>' + (row.gzgd == null ? '' : row.gzgd) + '</span>';
                }
            }
            ];
            return clumns;
        },
        flfgdrdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'wjmc',
                align: 'center',
                width: 150,
                title: '文件名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.wjmc == null ? '' : row.wjmc) + '>' + (row.wjmc == null ? '' : row.wjmc) + '</span>';
                }
            },
            {
                field: 'wjlx',
                align: 'center',
                width: 150,
                title: '文件类型',
                formatter: function (value, row) {
                    return '<span title=' + (row.wjlx == null ? '' : row.wjlx) + '>' + (row.wjlx == null ? '' : row.wjlx) + '</span>';
                }
            },
            {
                field: 'wjms',
                title: '文件描述',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wjms == null ? '' : row.wjms) + '>' + (row.wjms == null ? '' : row.wjms) + '</span>';
                }
            },
            {
                field: 'drsj',
                title: '导入时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.drsj == null ? '' : row.drsj) + '>' + (row.drsj == null ? '' : row.drsj) + '</span>';
                }
            },
            {
                field: 'drr',
                title: '导入人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.drr == null ? '' : row.drr) + '>' + (row.drr == null ? '' : row.drr) + '</span>';
                }
            }
            ];
            return clumns;
        },
        yjfxgz: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'yjfxrs',
                title: '一级风险人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yjfxrs == null ? '' : row.yjfxrs) + '>' + (row.yjfxrs == null ? '' : row.yjfxrs) + '</span>';
                }
            }
            ];
            return clumns;
        },
        yjfxgzdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'jsh',
                title: '监室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'sj',
                title: '时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sj == null ? '' : row.sj) + '>' + (row.sj == null ? '' : row.sj) + '</span>';
                }
            },
            {
                field: 'wz',
                title: '位置',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wz == null ? '' : row.wz) + '>' + (row.wz == null ? '' : row.wz) + '</span>';
                }
            }
            ];
            return clumns;
        },
        ydbjcx: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsmc',
                align: 'center',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'ydbjsl',
                title: '异动报警数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ydbjsl == null ? '' : row.ydbjsl) + '>' + (row.ydbjsl == null ? '' : row.ydbjsl) + '</span>';
                }
            }
            ];
            return clumns;
        },
        ydbjcxdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsh',
                title: '监室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'sj',
                title: '时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sj == null ? '' : row.sj) + '>' + (row.sj == null ? '' : row.sj) + '</span>';
                }
            },
            {
                field: 'bjxq',
                title: '报警详情',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bjxq == null ? '' : row.bjxq) + '>' + (row.bjxq == null ? '' : row.bjxq) + '</span>';
                }
            },
            {
                field: 'bz',
                title: '备注',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bz == null ? '' : row.bz) + '>' + (row.bz == null ? '' : row.bz) + '</span>';
                }
            }
            ];
            return clumns;
        },
        qxyccx: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'thjyqxycqk',
                title: '谈话教育情绪异常情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.thjyqxycqk == null ? '' : row.thjyqxycqk) + '>' + (row.thjyqxycqk == null ? '' : row.thjyqxycqk) + '</span>';
                }
            },
            {
                field: 'txtjqxycqk',
                title: '提讯提解情绪异常情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.txtjqxycqk == null ? '' : row.txtjqxycqk) + '>' + (row.txtjqxycqk == null ? '' : row.txtjqxycqk) + '</span>';
                }
            },
            {
                field: 'lshjqxycqk',
                title: '律师会见情绪异常情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.lshjqxycqk == null ? '' : row.lshjqxycqk) + '>' + (row.lshjqxycqk == null ? '' : row.lshjqxycqk) + '</span>';
                }
            }
            ];
            return clumns;
        },
        qxyccxdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsmc',
                align: 'center',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'jsh',
                title: '监室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'sj',
                title: '时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sj == null ? '' : row.sj) + '>' + (row.sj == null ? '' : row.sj) + '</span>';
                }
            },
            {
                field: 'qxycqk',
                title: '情绪异常情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.qxycqk == null ? '' : row.qxycqk) + '>' + (row.qxycqk == null ? '' : row.qxycqk) + '</span>';
                }
            },
            {
                field: 'bz',
                title: '备注',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bz == null ? '' : row.bz) + '>' + (row.bz == null ? '' : row.bz) + '</span>';
                }
            }
            ];
            return clumns;
        },
        jsjccx: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsmc',
                align: 'center',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'jsjccs',
                title: '监所检察次数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsjccs == null ? '' : row.jsjccs) + '>' + (row.jsjccs == null ? '' : row.jsjccs) + '</span>';
                }
            }
            ];
            return clumns;
        },
        jsjccxdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jclx',
                title: '检查类型',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jclx == null ? '' : row.jclx) + '>' + (row.jclx == null ? '' : row.jclx) + '</span>';
                }
            },
            {
                field: 'jcsj',
                title: '检查时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jcsj == null ? '' : row.jcsj) + '>' + (row.jcsj == null ? '' : row.jcsj) + '</span>';
                }
            },
            {
                field: 'jcry',
                title: '检查人员',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jcry == null ? '' : row.jcry) + '>' + (row.jcry == null ? '' : row.jcry) + '</span>';
                }
            },
            {
                field: 'fxwt',
                title: '发现问题',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.fxwt == null ? '' : row.fxwt) + '>' + (row.fxwt == null ? '' : row.fxwt) + '</span>';
                }
            },
            {
                field: 'wtzg',
                title: '问题整改',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wtzg == null ? '' : row.wtzg) + '>' + (row.wtzg == null ? '' : row.wtzg) + '</span>';
                }
            },
            {
                field: 'bz',
                title: '备注',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bz == null ? '' : row.bz) + '>' + (row.bz == null ? '' : row.bz) + '</span>';
                }
            }
            ];
            return clumns;
        },
        rstjcx: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsmc',
                align: 'center',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'rstjrs',
                title: '入所体检人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rstjrs == null ? '' : row.rstjrs) + '>' + (row.rstjrs == null ? '' : row.rstjrs) + '</span>';
                }
            }
            ];
            return clumns;
        },
        rstjcxdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
                }
            },
            {
                field: 'jcrq',
                title: '检查日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jcrq == null ? '' : row.jcrq) + '>' + (row.jcrq == null ? '' : row.jcrq) + '</span>';
                }
            },
            {
                field: 'xy',
                title: '血压',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xy == null ? '' : row.xy) + '>' + (row.xy == null ? '' : row.xy) + '</span>';
                }
            },
            {
                field: 'xcg',
                title: '血常规',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xcg == null ? '' : row.xcg) + '>' + (row.xcg == null ? '' : row.xcg) + '</span>';
                }
            },
            {
                field: 'xdt',
                title: '心电图',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xdt == null ? '' : row.xdt) + '>' + (row.xdt == null ? '' : row.xdt) + '</span>';
                }
            },
            {
                field: 'xp',
                title: '胸片',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xp == null ? '' : row.xp) + '>' + (row.xp == null ? '' : row.xp) + '</span>';
                }
            },
            {
                field: 'bc',
                title: 'b超',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bc == null ? '' : row.bc) + '>' + (row.bc == null ? '' : row.bc) + '</span>';
                }
            },
            {
                field: 'jkqk',
                title: '健康情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jkqk == null ? '' : row.jkqk) + '>' + (row.jkqk == null ? '' : row.jkqk) + '</span>';
                }
            },
            {
                field: 'jcys',
                title: '检查医生',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jcys == null ? '' : row.jcys) + '>' + (row.jcys == null ? '' : row.jcys) + '</span>';
                }
            },
            ];
            return clumns;
        },
        sjfxcx: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsmc',
                align: 'center',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'sjfxpg',
                title: '三级风险评估',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjfxpg == null ? '' : row.sjfxpg) + '>' + (row.sjfxpg == null ? '' : row.sjfxpg) + '</span>';
                }
            }
            ];
            return clumns;
        },
        sjfxcxdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
                }
            },
            {
                field: 'jsh',
                title: '监室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'fxdj',
                title: '风险等级',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.fxdj == null ? '' : row.fxdj) + '>' + (row.fxdj == null ? '' : row.fxdj) + '</span>';
                }
            },
            {
                field: 'pgsj',
                title: '评估时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.pgsj == null ? '' : row.pgsj) + '>' + (row.pgsj == null ? '' : row.pgsj) + '</span>';
                }
            },
            {
                field: 'pgyy',
                title: '评估原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.pgyy == null ? '' : row.pgyy) + '>' + (row.pgyy == null ? '' : row.pgyy) + '</span>';
                }
            },
            {
                field: 'pgr',
                title: '评估人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.pgr == null ? '' : row.pgr) + '>' + (row.pgr == null ? '' : row.pgr) + '</span>';
                }
            },
            {
                field: 'bz',
                title: '备注',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bz == null ? '' : row.bz) + '>' + (row.bz == null ? '' : row.bz) + '</span>';
                }
            }
            ];
            return clumns;
        },
        wcjycx: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'xnxgjb',
                title: '心脑血管疾病',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xnxgjb == null ? '' : row.xnxgjb) + '>' + (row.xnxgjb == null ? '' : row.xnxgjb) + '</span>';
                }
            },
            {
                field: 'xhdjb',
                title: '消化道疾病',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xhdjb == null ? '' : row.xhdjb) + '>' + (row.xhdjb == null ? '' : row.xhdjb) + '</span>';
                }
            },
            {
                field: 'qtjb',
                title: '其他疾病',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.qtjb == null ? '' : row.qtjb) + '>' + (row.qtjb == null ? '' : row.qtjb) + '</span>';
                }
            }
            ];
            return clumns;
        },
        wcjycxdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
                }
            },
            {
                field: 'jsh',
                title: '监室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'jyyy',
                title: '就医原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jyyy == null ? '' : row.jyyy) + '>' + (row.jyyy == null ? '' : row.jyyy) + '</span>';
                }
            },
            {
                field: 'jysj',
                title: '就医时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jysj == null ? '' : row.jysj) + '>' + (row.jysj == null ? '' : row.jysj) + '</span>';
                }
            },
            {
                field: 'ysxm',
                title: '医生姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ysxm == null ? '' : row.ysxm) + '>' + (row.ysxm == null ? '' : row.ysxm) + '</span>';
                }
            },
            {
                field: 'bz',
                title: '备注',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bz == null ? '' : row.bz) + '>' + (row.bz == null ? '' : row.bz) + '</span>';
                }
            }
            ];
            return clumns;
        },
        ylsjtj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'dryl',
                title: '当日押量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.dryl == null ? '' : row.dryl) + '>' + (row.dryl == null ? '' : row.dryl) + '</span>';
                }
            },
            {
                field: 'nnyl',
                title: '男女押量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.nnyl == null ? '' : row.nnyl) + '>' + (row.nnyl == null ? '' : row.nnyl) + '</span>';
                }
            },
            {
                field: 'yzyzzzsywrysl',
                title: '有执业资质驻所医务人员数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yzyzzzsywrysl == null ? '' : row.yzyzzzsywrysl) + '>' + (row.yzyzzzsywrysl == null ? '' : row.yzyzzzsywrysl) + '</span>';
                }
            },
            {
                field: 'hbryzs',
                title: '患病人员总数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hbryzs == null ? '' : row.hbryzs) + '>' + (row.hbryzs == null ? '' : row.hbryzs) + '</span>';
                }
            },
            {
                field: 'yblkzdaqfxrysl',
                title: '因病列控重大安全风险人员数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yblkzdaqfxrysl == null ? '' : row.yblkzdaqfxrysl) + '>' + (row.yblkzdaqfxrysl == null ? '' : row.yblkzdaqfxrysl) + '</span>';
                }
            },
            {
                field: 'sjlkrs',
                title: '四级列控人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjlkrs == null ? '' : row.sjlkrs) + '>' + (row.sjlkrs == null ? '' : row.sjlkrs) + '</span>';
                }
            },
            {
                field: 'xnxgjbrs',
                title: '心脑血管疾病人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xnxgjbrs == null ? '' : row.xnxgjbrs) + '>' + (row.xnxgjbrs == null ? '' : row.xnxgjbrs) + '</span>';
                }
            },
            {
                field: 'tnbrs',
                title: '糖尿病人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.tnbrs == null ? '' : row.tnbrs) + '>' + (row.tnbrs == null ? '' : row.tnbrs) + '</span>';
                }
            },
            {
                field: 'yzd瘾jdzhzrs',
                title: '严重毒瘾戒断综合征人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yzd瘾jdzhzrs == null ? '' : row.yzd瘾jdzhzrs) + '>' + (row.yzd瘾jdzhzrs == null ? '' : row.yzd瘾jdzhzrs) + '</span>';
                }
            },
            {
                field: 'jsycrs',
                title: '精神异常人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsycrs == null ? '' : row.jsycrs) + '>' + (row.jsycrs == null ? '' : row.jsycrs) + '</span>';
                }
            },
            {
                field: 'crbrs',
                title: '传染病人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.crbrs == null ? '' : row.crbrs) + '>' + (row.crbrs == null ? '' : row.crbrs) + '</span>';
                }
            },
            {
                field: 'zdgz',
                title: '重点关注',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zdgz == null ? '' : row.zdgz) + '>' + (row.zdgz == null ? '' : row.zdgz) + '</span>';
                }
            },
            {
                field: 'rs',
                title: '人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rs == null ? '' : row.rs) + '>' + (row.rs == null ? '' : row.rs) + '</span>';
                }
            },
            {
                field: 'zyrs',
                title: '住院人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zyrs == null ? '' : row.zyrs) + '>' + (row.zyrs == null ? '' : row.zyrs) + '</span>';
                }
            }
            ];
            return clumns;
        },
        //有执业资质驻所医务人员
        yzyzzzsywrydj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'mz',
                title: '民族',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.mz == null ? '' : row.mz) + '>' + (row.mz == null ? '' : row.mz) + '</span>';
                }
            },
            {
                field: 'sjh',
                title: '手机号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjh == null ? '' : row.sjh) + '>' + (row.sjh == null ? '' : row.sjh) + '</span>';
                }
            },
            {
                field: 'ywrylb',
                title: '医务人员类别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ywrylb == null ? '' : row.ywrylb) + '>' + (row.ywrylb == null ? '' : row.ywrylb) + '</span>';
                }
            },
            {
                field: 'zyzbh',
                title: '执业证编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zyzbh == null ? '' : row.zyzbh) + '>' + (row.zyzbh == null ? '' : row.zyzbh) + '</span>';
                }
            },
            {
                field: 'zgzbh',
                title: '资格证编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zgzbh == null ? '' : row.zgzbh) + '>' + (row.zgzbh == null ? '' : row.zgzbh) + '</span>';
                }
            }
            ];
            return clumns;
        },
        //四级列控
        sjlkdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
                }
            },
            {
                field: 'jsh',
                title: '监室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'lkyy',
                title: '列控原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.lkyy == null ? '' : row.lkyy) + '>' + (row.lkyy == null ? '' : row.lkyy) + '</span>';
                }
            },
            {
                field: 'lksj',
                title: '列控时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.lksj == null ? '' : row.lksj) + '>' + (row.lksj == null ? '' : row.lksj) + '</span>';
                }
            },
            {
                field: 'lkjb',
                title: '列控级别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.lkjb == null ? '' : row.lkjb) + '>' + (row.lkjb == null ? '' : row.lkjb) + '</span>';
                }
            }
            ];
            return clumns;
        },
        //心脑血管疾病
        xnxgjbdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
                }
            },
            {
                field: 'jsh',
                title: '监室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'bqqk',
                title: '病情情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bqqk == null ? '' : row.bqqk) + '>' + (row.bqqk == null ? '' : row.bqqk) + '</span>';
                }
            },
            {
                field: 'sflkzdysbr',
                title: '是否列控重点医生病人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sflkzdysbr == null ? '' : row.sflkzdysbr) + '>' + (row.sflkzdysbr == null ? '' : row.sflkzdysbr) + '</span>';
                }
            }
            ];
            return clumns;
        },
        //糖尿病
        tnbdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
                }
            },
            {
                field: 'jsh',
                title: '监室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'bqqk',
                title: '病情情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bqqk == null ? '' : row.bqqk) + '>' + (row.bqqk == null ? '' : row.bqqk) + '</span>';
                }
            },
            {
                field: 'sflkzdysbr',
                title: '是否列控重点医生病人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sflkzdysbr == null ? '' : row.sflkzdysbr) + '>' + (row.sflkzdysbr == null ? '' : row.sflkzdysbr) + '</span>';
                }
            }
            ];
            return clumns;
        },
        //精神异常
        jsycdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
                }
            },
            {
                field: 'jsh',
                title: '监室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'jsycqk',
                title: '精神异常情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsycqk == null ? '' : row.jsycqk) + '>' + (row.jsycqk == null ? '' : row.jsycqk) + '</span>';
                }
            },
            {
                field: 'jsyclx',
                title: '精神异常类型',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsyclx == null ? '' : row.jsyclx) + '>' + (row.jsyclx == null ? '' : row.jsyclx) + '</span>';
                }
            }
            ];
            return clumns;
        },
        //传染病
        crbdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
                }
            },
            {
                field: 'jsh',
                title: '监室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'crbqk',
                title: '传染病情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.crbqk == null ? '' : row.crbqk) + '>' + (row.crbqk == null ? '' : row.crbqk) + '</span>';
                }
            },
            {
                field: 'crblx',
                title: '传染病类型',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.crblx == null ? '' : row.crblx) + '>' + (row.crblx == null ? '' : row.crblx) + '</span>';
                }
            }
            ];
            return clumns;
        },
        //重点关注
        zdgzdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
                }
            },
            {
                field: 'jsh',
                title: '监室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'zdgzqk',
                title: '重点关注情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zdgzqk == null ? '' : row.zdgzqk) + '>' + (row.zdgzqk == null ? '' : row.zdgzqk) + '</span>';
                }
            },
            {
                field: 'zdgzlx',
                title: '重点关注类型',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zdgzlx == null ? '' : row.zdgzlx) + '>' + (row.zdgzlx == null ? '' : row.zdgzlx) + '</span>';
                }
            }
            ];
            return clumns;
        },
        //住院人数
        zyrsdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
                }
            },
            {
                field: 'jsh',
                title: '监室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'zyyy',
                title: '住院原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zyyy == null ? '' : row.zyyy) + '>' + (row.zyyy == null ? '' : row.zyyy) + '</span>';
                }
            },
            {
                field: 'zyrq',
                title: '住院日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zyrq == null ? '' : row.zyrq) + '>' + (row.zyrq == null ? '' : row.zyrq) + '</span>';
                }
            },
            {
                field: 'yylx',
                title: '医院类型',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yylx == null ? '' : row.yylx) + '>' + (row.yylx == null ? '' : row.yylx) + '</span>';
                }
            }
            ];
            return clumns;
        },
        zfzlkpdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'wglx1',
                title: '违规类型一',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wglxy == null ? '' : row.wglxy) + '>' + (row.wglxy == null ? '' : row.wglxy) + '</span>';
                }
            },
            {
                field: 'wglx1',
                title: '违规类型二',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wglxe == null ? '' : row.wglxe) + '>' + (row.wglxe == null ? '' : row.wglxe) + '</span>';
                }
            },
            {
                field: 'wglx3',
                title: '违规类型三',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wglxs == null ? '' : row.wglxs) + '>' + (row.wglxs == null ? '' : row.wglxs) + '</span>';
                }
            }
            ];
            return clumns;
        },
        zfzlkpdjdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'mjxm',
                title: '民警姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.mjxm == null ? '' : row.mjxm) + '>' + (row.mjxm == null ? '' : row.mjxm) + '</span>';
                }
            },
            {
                field: 'wgsj',
                title: '违规时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgsj == null ? '' : row.wgsj) + '>' + (row.wgsj == null ? '' : row.wgsj) + '</span>';
                }
            },
            {
                field: 'dd',
                title: '地点',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.dd == null ? '' : row.dd) + '>' + (row.dd == null ? '' : row.dd) + '</span>';
                }
            },
            {
                field: 'wgwt',
                title: '违规问题',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgwt == null ? '' : row.wgwt) + '>' + (row.wgwt == null ? '' : row.wgwt) + '</span>';
                }
            },
            {
                field: 'ldyj',
                title: '领导意见',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ldyj == null ? '' : row.ldyj) + '>' + (row.ldyj == null ? '' : row.ldyj) + '</span>';
                }
            },
            {
                field: 'ldshsj',
                title: '领导审核时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ldshsj == null ? '' : row.ldshsj) + '>' + (row.ldshsj == null ? '' : row.ldshsj) + '</span>';
                }
            },
            {
                field: 'gssj',
                title: '公示时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.gssj == null ? '' : row.gssj) + '>' + (row.gssj == null ? '' : row.gssj) + '</span>';
                }
            },
            {
                field: 'bz',
                title: '备注',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bz == null ? '' : row.bz) + '>' + (row.bz == null ? '' : row.bz) + '</span>';
                }
            },
            {
                field: 'jsfk',
                title: '监所反馈',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsfk == null ? '' : row.jsfk) + '>' + (row.jsfk == null ? '' : row.jsfk) + '</span>';
                }
            }
            ];
            return clumns;
        },
        ldsh: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            // {
            //     field: 'ooid',
            //     title: '',
            //     width: '',
            //     checkbox: Option == true ? false : true,
            //     formatter: function (value, rowData, rowIndex) {
            //         if (!option) {
            //             return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
            //         } else {
            //             return '<input type="checkbox" name="ryRadio" />';
            //         }

            //     }
            // },
            {
                field: 'jsbh',
                align: 'center',
                width: 150,
                title: '监所编号',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbh == null ? '' : row.jsbh) + '>' + (row.jsbh == null ? '' : row.jsbh) + '</span>';
                }
            },
            {
                field: 'jsmc',
                align: 'center',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'mjxm',
                title: '民警姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.mjxm == null ? '' : row.mjxm) + '>' + (row.mjxm == null ? '' : row.mjxm) + '</span>';
                }
            },
            {
                field: 'sj',
                title: '时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sj == null ? '' : row.sj) + '>' + (row.sj == null ? '' : row.sj) + '</span>';
                }
            },
            {
                field: 'dd',
                title: '地点',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.dd == null ? '' : row.dd) + '>' + (row.dd == null ? '' : row.dd) + '</span>';
                }
            },
            {
                field: 'wt',
                title: '问题',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wt == null ? '' : row.wt) + '>' + (row.wt == null ? '' : row.wt) + '</span>';
                }
            },
            {
                field: 'zj',
                title: '证据',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zj == null ? '' : row.zj) + '>' + (row.zj == null ? '' : row.zj) + '</span>';
                }
            },
            {
                field: 'ldyj',
                title: '领导意见',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ldyj == null ? '' : row.ldyj) + '>' + (row.ldyj == null ? '' : row.ldyj) + '</span>';
                }
            },
            {
                field: 'ldshsj',
                title: '领导审核时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ldshsj == null ? '' : row.ldshsj) + '>' + (row.ldshsj == null ? '' : row.ldshsj) + '</span>';
                }
            },
            {
                field: 'ldyjxq',
                title: '领导意见详情',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ldyjxq == null ? '' : row.ldyjxq) + '>' + (row.ldyjxq == null ? '' : row.ldyjxq) + '</span>';
                }
            },
            {
                field: 'ldxm',
                title: '领导姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ldxm == null ? '' : row.ldxm) + '>' + (row.ldxm == null ? '' : row.ldxm) + '</span>';
                }
            }
            ];
            return clumns;
        },
        gs: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            // {
            //     field: 'ooid',
            //     title: '',
            //     width: '',
            //     checkbox: Option == true ? false : true,
            //     formatter: function (value, rowData, rowIndex) {
            //         if (!option) {
            //             return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
            //         } else {
            //             return '<input type="checkbox" name="ryRadio" />';
            //         }

            //     }
            // },
            {
                field: 'jsbh',
                align: 'center',
                width: 150,
                title: '监所编号',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbh == null ? '' : row.jsbh) + '>' + (row.jsbh == null ? '' : row.jsbh) + '</span>';
                }
            },
            {
                field: 'jsmc',
                align: 'center',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'mjxm',
                title: '民警姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.mjxm == null ? '' : row.mjxm) + '>' + (row.mjxm == null ? '' : row.mjxm) + '</span>';
                }
            },
            {
                field: 'sj',
                title: '时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sj == null ? '' : row.sj) + '>' + (row.sj == null ? '' : row.sj) + '</span>';
                }
            },
            {
                field: 'dd',
                title: '地点',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.dd == null ? '' : row.dd) + '>' + (row.dd == null ? '' : row.dd) + '</span>';
                }
            },
            {
                field: 'wt',
                title: '问题',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wt == null ? '' : row.wt) + '>' + (row.wt == null ? '' : row.wt) + '</span>';
                }
            },
            {
                field: 'zj',
                title: '证据',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zj == null ? '' : row.zj) + '>' + (row.zj == null ? '' : row.zj) + '</span>';
                }
            },
            {
                field: 'gsr',
                title: '公示人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.gsr == null ? '' : row.gsr) + '>' + (row.gsr == null ? '' : row.gsr) + '</span>';
                }
            },
            {
                field: 'gssj',
                title: '公示时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.gssj == null ? '' : row.gssj) + '>' + (row.gssj == null ? '' : row.gssj) + '</span>';
                }
            }
            ];
            return clumns;
        },
        jfzxjs: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'qtjbjs',
                title: '躯体疾病拒收',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.qtjbjs == null ? '' : row.qtjbjs) + '>' + (row.qtjbjs == null ? '' : row.qtjbjs) + '</span>';
                }
            },
            {
                field: 'crbjs',
                title: '传染病拒收',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.crbjs == null ? '' : row.crbjs) + '>' + (row.crbjs == null ? '' : row.crbjs) + '</span>';
                }
            },
            {
                field: 'qtyyjs',
                title: '其他原因拒收',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.qtyyjs == null ? '' : row.qtyyjs) + '>' + (row.qtyyjs == null ? '' : row.qtyyjs) + '</span>';
                }
            }
            ];
            return clumns;
        },
        jfzxjsdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'jssj',
                title: '拒收时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jssj == null ? '' : row.jssj) + '>' + (row.jssj == null ? '' : row.jssj) + '</span>';
                }
            },
            {
                field: 'jsyy',
                title: '拒收原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsyy == null ? '' : row.jsyy) + '>' + (row.jsyy == null ? '' : row.jsyy) + '</span>';
                }
            },
            {
                field: 'jsdw',
                title: '拒收单位',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsdw == null ? '' : row.jsdw) + '>' + (row.jsdw == null ? '' : row.jsdw) + '</span>';
                }
            },
            {
                field: 'yszdyj',
                title: '医生诊断意见',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yszdyj == null ? '' : row.yszdyj) + '>' + (row.yszdyj == null ? '' : row.yszdyj) + '</span>';
                }
            },
            {
                field: 'zdzm',
                title: '诊断证明(照片)',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zdzm == null ? '' : row.zdzm) + '>' + (row.zdzm == null ? '' : row.zdzm) + '</span>';
                }
            },
            {
                field: 'ysxm',
                title: '医生姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ysxm == null ? '' : row.ysxm) + '>' + (row.ysxm == null ? '' : row.ysxm) + '</span>';
                }
            },
            {
                field: 'blr',
                title: '办理人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.blr == null ? '' : row.blr) + '>' + (row.blr == null ? '' : row.blr) + '</span>';
                }
            }
            ];
            return clumns;
        },
        jsjshs: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'qtjbjs',
                title: '躯体疾病拒收',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.qtjbjs == null ? '' : row.qtjbjs) + '>' + (row.qtjbjs == null ? '' : row.qtjbjs) + '</span>';
                }
            },
            {
                field: 'crbjs',
                title: '传染病拒收',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.crbjs == null ? '' : row.crbjs) + '>' + (row.crbjs == null ? '' : row.crbjs) + '</span>';
                }
            },
            {
                field: 'qtyyjs',
                title: '其他原因拒收',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.qtyyjs == null ? '' : row.qtyyjs) + '>' + (row.qtyyjs == null ? '' : row.qtyyjs) + '</span>';
                }
            }
            ];
            return clumns;
        },
        jsjshsdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'jssj',
                title: '拒收时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jssj == null ? '' : row.jssj) + '>' + (row.jssj == null ? '' : row.jssj) + '</span>';
                }
            },
            {
                field: 'jsyy',
                title: '拒收原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsyy == null ? '' : row.jsyy) + '>' + (row.jsyy == null ? '' : row.jsyy) + '</span>';
                }
            },
            {
                field: 'ldsp',
                title: '领导审批',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ldsp == null ? '' : row.ldsp) + '>' + (row.ldsp == null ? '' : row.ldsp) + '</span>';
                }
            },
            {
                field: 'yszdyj',
                title: '医生诊断意见',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yszdyj == null ? '' : row.yszdyj) + '>' + (row.yszdyj == null ? '' : row.yszdyj) + '</span>';
                }
            },
            {
                field: 'zdzm',
                title: '诊断证明(照片)',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zdzm == null ? '' : row.zdzm) + '>' + (row.zdzm == null ? '' : row.zdzm) + '</span>';
                }
            },
            {
                field: 'ysxm',
                title: '医生姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ysxm == null ? '' : row.ysxm) + '>' + (row.ysxm == null ? '' : row.ysxm) + '</span>';
                }
            },
            {
                field: 'badw',
                title: '办案单位',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.badw == null ? '' : row.badw) + '>' + (row.badw == null ? '' : row.badw) + '</span>';
                }
            }
            ];
            return clumns;
        },
        jsssq: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            // {
            //     field: 'ooid',
            //     title: '',
            //     width: '',
            //     checkbox: Option == true ? false : true,
            //     formatter: function (value, rowData, rowIndex) {
            //         if (!option) {
            //             return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
            //         } else {
            //             return '<input type="checkbox" name="ryRadio" />';
            //         }

            //     }
            // },
            {
                field: 'jsbh',
                align: 'center',
                width: 150,
                title: '监所编号',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbh == null ? '' : row.jsbh) + '>' + (row.jsbh == null ? '' : row.jsbh) + '</span>';
                }
            },
            {
                field: 'jsmc',
                align: 'center',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'sqsj',
                title: '申请时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqsj == null ? '' : row.sqsj) + '>' + (row.sqsj == null ? '' : row.sqsj) + '</span>';
                }
            },
            {
                field: 'sqyy',
                title: '申请原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqyy == null ? '' : row.sqyy) + '>' + (row.sqyy == null ? '' : row.sqyy) + '</span>';
                }
            },
            {
                field: 'sqr',
                title: '申请人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqr == null ? '' : row.sqr) + '>' + (row.sqr == null ? '' : row.sqr) + '</span>';
                }
            },
            {
                field: 'bz',
                title: '备注',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bz == null ? '' : row.bz) + '>' + (row.bz == null ? '' : row.bz) + '</span>';
                }
            }
            ];
            return clumns;
        },
        fjsp: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            // {
            //     field: 'ooid',
            //     title: '',
            //     width: '',
            //     checkbox: Option == true ? false : true,
            //     formatter: function (value, rowData, rowIndex) {
            //         if (!option) {
            //             return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
            //         } else {
            //             return '<input type="checkbox" name="ryRadio" />';
            //         }

            //     }
            // },
            {
                field: 'jsbh',
                align: 'center',
                width: 150,
                title: '监所编号',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbh == null ? '' : row.jsbh) + '>' + (row.jsbh == null ? '' : row.jsbh) + '</span>';
                }
            },
            {
                field: 'jsmc',
                align: 'center',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'sqsj',
                title: '申请时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqsj == null ? '' : row.sqsj) + '>' + (row.sqsj == null ? '' : row.sqsj) + '</span>';
                }
            },
            {
                field: 'sqyy',
                title: '申请原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqyy == null ? '' : row.sqyy) + '>' + (row.sqyy == null ? '' : row.sqyy) + '</span>';
                }
            },
            {
                field: 'fjyj',
                title: '分局意见',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.fjyj == null ? '' : row.fjyj) + '>' + (row.fjyj == null ? '' : row.fjyj) + '</span>';
                }
            },
            {
                field: 'fjyjxq',
                title: '分局意见详情',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.fjyjxq == null ? '' : row.fjyjxq) + '>' + (row.fjyjxq == null ? '' : row.fjyjxq) + '</span>';
                }
            },
            {
                field: 'fjldxm',
                title: '分局领导姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.fjldxm == null ? '' : row.fjldxm) + '>' + (row.fjldxm == null ? '' : row.fjldxm) + '</span>';
                }
            },
            {
                field: 'fjspsj',
                title: '分局审批时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.fjspsj == null ? '' : row.fjspsj) + '>' + (row.fjspsj == null ? '' : row.fjspsj) + '</span>';
                }
            }
            ];
            return clumns;
        },
        jsglzdsp: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            // {
            //     field: 'ooid',
            //     title: '',
            //     width: '',
            //     checkbox: Option == true ? false : true,
            //     formatter: function (value, rowData, rowIndex) {
            //         if (!option) {
            //             return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
            //         } else {
            //             return '<input type="checkbox" name="ryRadio" />';
            //         }

            //     }
            // },
            {
                field: 'jsbh',
                align: 'center',
                width: 150,
                title: '监所编号',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbh == null ? '' : row.jsbh) + '>' + (row.jsbh == null ? '' : row.jsbh) + '</span>';
                }
            },
            {
                field: 'jsmc',
                align: 'center',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'sqsj',
                title: '申请时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqsj == null ? '' : row.sqsj) + '>' + (row.sqsj == null ? '' : row.sqsj) + '</span>';
                }
            },
            {
                field: 'sqyy',
                title: '申请原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqyy == null ? '' : row.sqyy) + '>' + (row.sqyy == null ? '' : row.sqyy) + '</span>';
                }
            },
            {
                field: 'zdyj',
                title: '总队意见',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zdyj == null ? '' : row.zdyj) + '>' + (row.zdyj == null ? '' : row.zdyj) + '</span>';
                }
            },
            {
                field: 'zdyjxq',
                title: '总队意见详情',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zdyjxq == null ? '' : row.zdyjxq) + '>' + (row.zdyjxq == null ? '' : row.zdyjxq) + '</span>';
                }
            },
            {
                field: 'zdldxm',
                title: '总队领导姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zdldxm == null ? '' : row.zdldxm) + '>' + (row.zdldxm == null ? '' : row.zdldxm) + '</span>';
                }
            },
            {
                field: 'zdspsj',
                title: '总队审批时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zdspsj == null ? '' : row.zdspsj) + '>' + (row.zdspsj == null ? '' : row.zdspsj) + '</span>';
                }
            }
            ];
            return clumns;
        },
        sjshgz: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            // {
            //     field: 'ooid',
            //     title: '',
            //     width: '',
            //     checkbox: Option == true ? false : true,
            //     formatter: function (value, rowData, rowIndex) {
            //         if (!option) {
            //             return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
            //         } else {
            //             return '<input type="checkbox" name="ryRadio" />';
            //         }

            //     }
            // },
            {
                field: 'jsbh',
                align: 'center',
                width: 150,
                title: '监所编号',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbh == null ? '' : row.jsbh) + '>' + (row.jsbh == null ? '' : row.jsbh) + '</span>';
                }
            },
            {
                field: 'jsmc',
                align: 'center',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'sqsj',
                title: '申请时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqsj == null ? '' : row.sqsj) + '>' + (row.sqsj == null ? '' : row.sqsj) + '</span>';
                }
            },
            {
                field: 'sqyy',
                title: '申请原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqyy == null ? '' : row.sqyy) + '>' + (row.sqyy == null ? '' : row.sqyy) + '</span>';
                }
            },
            {
                field: 'sjyj',
                title: '市局意见',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjyj == null ? '' : row.sjyj) + '>' + (row.sjyj == null ? '' : row.sjyj) + '</span>';
                }
            },
            {
                field: 'sjyjxq',
                title: '市局意见详情',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjyjxq == null ? '' : row.sjyjxq) + '>' + (row.sjyjxq == null ? '' : row.sjyjxq) + '</span>';
                }
            },
            {
                field: 'sjldxm',
                title: '市局领导姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjldxm == null ? '' : row.sjldxm) + '>' + (row.sjldxm == null ? '' : row.sjldxm) + '</span>';
                }
            },
            {
                field: 'sjspsj',
                title: '市局审批时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjspsj == null ? '' : row.sjspsj) + '>' + (row.sjspsj == null ? '' : row.sjspsj) + '</span>';
                }
            }
            ];
            return clumns;
        },
        jsglzdkjws: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            // {
            //     field: 'ooid',
            //     title: '',
            //     width: '',
            //     checkbox: Option == true ? false : true,
            //     formatter: function (value, rowData, rowIndex) {
            //         if (!option) {
            //             return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
            //         } else {
            //             return '<input type="checkbox" name="ryRadio" />';
            //         }

            //     }
            // },
            {
                field: 'jsbh',
                align: 'center',
                width: 150,
                title: '监所编号',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbh == null ? '' : row.jsbh) + '>' + (row.jsbh == null ? '' : row.jsbh) + '</span>';
                }
            },
            {
                field: 'jsmc',
                align: 'center',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'sqsj',
                title: '申请时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqsj == null ? '' : row.sqsj) + '>' + (row.sqsj == null ? '' : row.sqsj) + '</span>';
                }
            },
            {
                field: 'sqyy',
                title: '申请原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqyy == null ? '' : row.sqyy) + '>' + (row.sqyy == null ? '' : row.sqyy) + '</span>';
                }
            },
            {
                field: 'wsbh',
                title: '文书编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wsbh == null ? '' : row.wsbh) + '>' + (row.wsbh == null ? '' : row.wsbh) + '</span>';
                }
            }
            ];
            return clumns;
        },
        fkjs: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            // {
            //     field: 'ooid',
            //     title: '',
            //     width: '',
            //     checkbox: Option == true ? false : true,
            //     formatter: function (value, rowData, rowIndex) {
            //         if (!option) {
            //             return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
            //         } else {
            //             return '<input type="checkbox" name="ryRadio" />';
            //         }

            //     }
            // },
            {
                field: 'jsbh',
                align: 'center',
                width: 150,
                title: '监所编号',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbh == null ? '' : row.jsbh) + '>' + (row.jsbh == null ? '' : row.jsbh) + '</span>';
                }
            },
            {
                field: 'jsmc',
                align: 'center',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'sqsj',
                title: '申请时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqsj == null ? '' : row.sqsj) + '>' + (row.sqsj == null ? '' : row.sqsj) + '</span>';
                }
            },
            {
                field: 'sqyy',
                title: '申请原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqyy == null ? '' : row.sqyy) + '>' + (row.sqyy == null ? '' : row.sqyy) + '</span>';
                }
            },
            {
                field: 'blsj',
                title: '办理时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.blsj == null ? '' : row.blsj) + '>' + (row.blsj == null ? '' : row.blsj) + '</span>';
                }
            },
            {
                field: 'blr',
                title: '办理人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.blr == null ? '' : row.blr) + '>' + (row.blr == null ? '' : row.blr) + '</span>';
                }
            }
            ];
            return clumns;
        },
        xzpacx: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            // {
            //     field: 'ooid',
            //     title: '',
            //     width: '',
            //     checkbox: Option == true ? false : true,
            //     formatter: function (value, rowData, rowIndex) {
            //         if (!option) {
            //             return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
            //         } else {
            //             return '<input type="checkbox" name="ryRadio" />';
            //         }

            //     }
            // },
            {
                field: 'jsbh',
                align: 'center',
                width: 150,
                title: '监所编号',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbh == null ? '' : row.jsbh) + '>' + (row.jsbh == null ? '' : row.jsbh) + '</span>';
                }
            },
            {
                field: 'jsmc',
                align: 'center',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'jsh',
                title: '监室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'lx',
                title: '类型',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.lx == null ? '' : row.lx) + '>' + (row.lx == null ? '' : row.lx) + '</span>';
                }
            },
            {
                field: 'sfzdaj',
                title: '是否重大案件',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sfzdaj == null ? '' : row.sfzdaj) + '>' + (row.sfzdaj == null ? '' : row.sfzdaj) + '</span>';
                }
            },
            {
                field: 'sar',
                title: '涉案人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sar == null ? '' : row.sar) + '>' + (row.sar == null ? '' : row.sar) + '</span>';
                }
            },
            {
                field: 'sars',
                title: '涉案人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sars == null ? '' : row.sars) + '>' + (row.sars == null ? '' : row.sars) + '</span>';
                }
            },
            {
                field: 'afdd',
                title: '案发地点',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.afdd == null ? '' : row.afdd) + '>' + (row.afdd == null ? '' : row.afdd) + '</span>';
                }
            },
            {
                field: 'afsj',
                title: '案发时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.afsj == null ? '' : row.afsj) + '>' + (row.afsj == null ? '' : row.afsj) + '</span>';
                }
            },
            {
                field: 'saje',
                title: '涉案金额',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.saje == null ? '' : row.saje) + '>' + (row.saje == null ? '' : row.saje) + '</span>';
                }
            }
            ];
            return clumns;
        },
        mrqkcx: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'rq',
                title: '日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rq == null ? '' : row.rq) + '>' + (row.rq == null ? '' : row.rq) + '</span>';
                }
            },
            {
                field: 'zszc',
                title: '自杀自残',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zszc == null ? '' : row.zszc) + '>' + (row.zszc == null ? '' : row.zszc) + '</span>';
                }
            },
            {
                field: 'djdo',
                title: '打架斗殴',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.djdo == null ? '' : row.djdo) + '>' + (row.djdo == null ? '' : row.djdo) + '</span>';
                }
            },
            {
                field: 'tfjb',
                title: '突发疾病',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.tfjb == null ? '' : row.tfjb) + '>' + (row.tfjb == null ? '' : row.tfjb) + '</span>';
                }
            },
            {
                field: 'mdhj',
                title: '矛盾化解',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.mdhj == null ? '' : row.mdhj) + '>' + (row.mdhj == null ? '' : row.mdhj) + '</span>';
                }
            },
            {
                field: 'swfz',
                title: '深挖犯罪',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.swfz == null ? '' : row.swfz) + '>' + (row.swfz == null ? '' : row.swfz) + '</span>';
                }
            },
            {
                field: 'hssf',
                title: '核实身份',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hssf == null ? '' : row.hssf) + '>' + (row.hssf == null ? '' : row.hssf) + '</span>';
                }
            },
            {
                field: 'jqgxx',
                title: '锦旗感谢信',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jqgxx == null ? '' : row.jqgxx) + '>' + (row.jqgxx == null ? '' : row.jqgxx) + '</span>';
                }
            }
            ];
            return clumns;
        }
    };
});