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
        rjyl: function (option) {
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
                field: 'rq',
                align: 'center',
                width: 150,
                title: '日期',
                formatter: function (value, row) {
                    return '<span title=' + (row.rq == null ? '' : row.rq) + '>' + (row.rq == null ? '' : row.rq) + '</span>';
                }
            },
            {
                field: 'rzjl',
                title: '日在拘量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rzjl == null ? '' : row.rzjl) + '>' + (row.rzjl == null ? '' : row.rzjl) + '</span>';
                }
            },
            {
                field: 'rjjl',
                title: '日均拘量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rjjl == null ? '' : row.rjjl) + '>' + (row.rjjl == null ? '' : row.rjjl) + '</span>';
                }
            }
            ];
            return clumns;
        },
        tscx: function (option) {
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
                field: 'dz',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dz == null ? '' : row.dz) + '>' + (row.dz == null ? '' : row.dz) + '</span>';
                }
            },
            {
                field: 'jlsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jlsmc == null ? '' : row.jlsmc) + '>' + (row.jlsmc == null ? '' : row.jlsmc) + '</span>';
                }
            },
            {
                field: 'tsscount',
                title: '提审室数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.tsscount == null ? '' : row.tsscount) + '>' + (row.tsscount == null ? '' : row.tsscount) + '</span>';
                }
            },
            {
                field: 'count',
                title: '数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.count == null ? '' : row.count) + '>' + (row.count == null ? '' : row.count) + '</span>';
                }
            }
            ];
            return clumns;
        },
        tscxdj: function (option) {
            var clumns = [{
                field: 'oid',
                title: '序号',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
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
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'tsdw',
                title: '提审单位',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.tsdw == null ? '' : row.tsdw) + '>' + (row.tsdw == null ? '' : row.tsdw) + '</span>';
                }
            },
            {
                field: 'tsry',
                title: '提审人员',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.tsry == null ? '' : row.tsry) + '>' + (row.tsry == null ? '' : row.tsry) + '</span>';
                }
            },
            {
                field: 'zjh',
                title: '证件号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zjh == null ? '' : row.zjh) + '>' + (row.zjh == null ? '' : row.zjh) + '</span>';
                }
            },
            {
                field: 'kssj',
                title: '开始时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.kssj == null ? '' : row.kssj) + '>' + (row.kssj == null ? '' : row.kssj) + '</span>';
                }
            },
            {
                field: 'jssj',
                title: '结束时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jssj == null ? '' : row.jssj) + '>' + (row.jssj == null ? '' : row.jssj) + '</span>';
                }
            },
            {
                field: 'tszbr',
                title: '提审值班人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.tszbr == null ? '' : row.tszbr) + '>' + (row.tszbr == null ? '' : row.tszbr) + '</span>';
                }
            },
            {
                field: 'dcmj',
                title: '带出民警',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.dcmj == null ? '' : row.dcmj) + '>' + (row.dcmj == null ? '' : row.dcmj) + '</span>';
                }
            },
            {
                field: 'sjmj',
                title: '收监民警',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjmj == null ? '' : row.sjmj) + '>' + (row.sjmj == null ? '' : row.sjmj) + '</span>';
                }
            }
            ];
            return clumns;
        },
        rscx: function (option) {
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
                field: 'dz',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dz == null ? '' : row.dz) + '>' + (row.dz == null ? '' : row.dz) + '</span>';
                }
            },
            {
                field: 'jlsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jlsmc == null ? '' : row.jlsmc) + '>' + (row.jlsmc == null ? '' : row.jlsmc) + '</span>';
                }
            },
            {
                field: 'count',
                title: '数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.count == null ? '' : row.count) + '>' + (row.count == null ? '' : row.count) + '</span>';
                }
            }
            ];
            return clumns;
        },
        rscxdj: function (option) {
            var clumns = [{
                field: 'oid',
                title: '序号',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
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
                field: 'bahj',
                title: '办案环节',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bahj == null ? '' : row.bahj) + '>' + (row.bahj == null ? '' : row.bahj) + '</span>';
                }
            },
            {
                field: 'rsrq',
                title: '入所日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rsrq == null ? '' : row.rsrq) + '>' + (row.rsrq == null ? '' : row.rsrq) + '</span>';
                }
            },
            {
                field: 'gyqx',
                title: '关押期限',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.gyqx == null ? '' : row.gyqx) + '>' + (row.gyqx == null ? '' : row.gyqx) + '</span>';
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
        cscx: function (option) {
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
                field: 'dz',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dz == null ? '' : row.dz) + '>' + (row.dz == null ? '' : row.dz) + '</span>';
                }
            },
            {
                field: 'jlsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jlsmc == null ? '' : row.jlsmc) + '>' + (row.jlsmc == null ? '' : row.jlsmc) + '</span>';
                }
            },
            {
                field: 'count',
                title: '数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.count == null ? '' : row.count) + '>' + (row.count == null ? '' : row.count) + '</span>';
                }
            }
            ];
            return clumns;
        },
        cscxdj: function (option) {
            var clumns = [{
                field: 'oid',
                title: '序号',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
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
                field: 'csyy',
                title: '出所原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.csyy == null ? '' : row.csyy) + '>' + (row.csyy == null ? '' : row.csyy) + '</span>';
                }
            },
            {
                field: 'csrq',
                title: '出所日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.csrq == null ? '' : row.csrq) + '>' + (row.csrq == null ? '' : row.csrq) + '</span>';
                }
            },
            {
                field: 'csqx',
                title: '出所去向',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.csqx == null ? '' : row.csqx) + '>' + (row.csqx == null ? '' : row.csqx) + '</span>';
                }
            },
            {
                field: 'pzr',
                title: '批准人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.pzr == null ? '' : row.pzr) + '>' + (row.pzr == null ? '' : row.pzr) + '</span>';
                }
            }
            ];
            return clumns;
        },
        lshj: function (option) {
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
                field: 'dz',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dz == null ? '' : row.dz) + '>' + (row.dz == null ? '' : row.dz) + '</span>';
                }
            },
            {
                field: 'jlsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jlsmc == null ? '' : row.jlsmc) + '>' + (row.jlsmc == null ? '' : row.jlsmc) + '</span>';
                }
            },
            {
                field: 'hjscount',
                title: '会见室数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hjscount == null ? '' : row.hjscount) + '>' + (row.hjscount == null ? '' : row.hjscount) + '</span>';
                }
            },
            {
                field: 'count',
                title: '数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.count == null ? '' : row.count) + '>' + (row.count == null ? '' : row.count) + '</span>';
                }
            }
            ];
            return clumns;
        },
        lshjdj: function (option) {
            var clumns = [{
                field: 'oid',
                title: '序号',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
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
                field: 'lsxm',
                title: '律师姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.lsxm == null ? '' : row.lsxm) + '>' + (row.lsxm == null ? '' : row.lsxm) + '</span>';
                }
            },
            {
                field: 'zjh',
                title: '证件号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zjh == null ? '' : row.zjh) + '>' + (row.zjh == null ? '' : row.zjh) + '</span>';
                }
            },
            {
                field: 'lsdw',
                title: '律师单位',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.lsdw == null ? '' : row.lsdw) + '>' + (row.lsdw == null ? '' : row.lsdw) + '</span>';
                }
            },
            {
                field: 'hjsy',
                title: '会见事由',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hjsy == null ? '' : row.hjsy) + '>' + (row.hjsy == null ? '' : row.hjsy) + '</span>';
                }
            },
            {
                field: 'hjsj',
                title: '会见时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hjsj == null ? '' : row.hjsj) + '>' + (row.hjsj == null ? '' : row.hjsj) + '</span>';
                }
            },
            {
                field: 'jssj',
                title: '结束时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jssj == null ? '' : row.jssj) + '>' + (row.jssj == null ? '' : row.jssj) + '</span>';
                }
            },
            {
                field: 'dcmj',
                title: '带出民警',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.dcmj == null ? '' : row.dcmj) + '>' + (row.dcmj == null ? '' : row.dcmj) + '</span>';
                }
            },
            {
                field: 'sjmj',
                title: '收监民警',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjmj == null ? '' : row.sjmj) + '>' + (row.sjmj == null ? '' : row.sjmj) + '</span>';
                }
            }
            ];
            return clumns;
        },
        lscs: function (option) {
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
                field: 'dz',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dz == null ? '' : row.dz) + '>' + (row.dz == null ? '' : row.dz) + '</span>';
                }
            },
            {
                field: 'jlsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jlsmc == null ? '' : row.jlsmc) + '>' + (row.jlsmc == null ? '' : row.jlsmc) + '</span>';
                }
            },
            {
                field: 'hjscount',
                title: '会见室数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hjscount == null ? '' : row.hjscount) + '>' + (row.hjscount == null ? '' : row.hjscount) + '</span>';
                }
            },
            {
                field: 'count',
                title: '数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.count == null ? '' : row.count) + '>' + (row.count == null ? '' : row.count) + '</span>';
                }
            }
            ];
            return clumns;
        },
        lscsdj: function (option) {
            var clumns = [{
                field: 'oid',
                title: '序号',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
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
                title: '拘室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'csyy',
                title: '出所原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.csyy == null ? '' : row.csyy) + '>' + (row.csyy == null ? '' : row.csyy) + '</span>';
                }
            },
            {
                field: 'cssj',
                title: '出所时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.cssj == null ? '' : row.cssj) + '>' + (row.cssj == null ? '' : row.cssj) + '</span>';
                }
            },
            {
                field: 'hssj',
                title: '回所时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hssj == null ? '' : row.hssj) + '>' + (row.hssj == null ? '' : row.hssj) + '</span>';
                }
            },
            {
                field: 'dcmj',
                title: '带出民警',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.dcmj == null ? '' : row.dcmj) + '>' + (row.dcmj == null ? '' : row.dcmj) + '</span>';
                }
            },
            {
                field: 'sjmj',
                title: '收监民警',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjmj == null ? '' : row.sjmj) + '>' + (row.sjmj == null ? '' : row.sjmj) + '</span>';
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
            }
            ];
            return clumns;
        },
        shgx: function (option) {
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
                field: 'dz',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dz == null ? '' : row.dz) + '>' + (row.dz == null ? '' : row.dz) + '</span>';
                }
            },
            {
                field: 'jlsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jlsmc == null ? '' : row.jlsmc) + '>' + (row.jlsmc == null ? '' : row.jlsmc) + '</span>';
                }
            },
            {
                field: 'hjscount',
                title: '会见室数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hjscount == null ? '' : row.hjscount) + '>' + (row.hjscount == null ? '' : row.hjscount) + '</span>';
                }
            },
            {
                field: 'count',
                title: '数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.count == null ? '' : row.count) + '>' + (row.count == null ? '' : row.count) + '</span>';
                }
            }
            ];
            return clumns;
        },
        shgxdj: function (option) {
            var clumns = [{
                field: 'oid',
                title: '序号',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
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
                title: '拘室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
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
                field: 'nl',
                title: '年龄',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.nl == null ? '' : row.nl) + '>' + (row.nl == null ? '' : row.nl) + '</span>';
                }
            },
            {
                field: 'yzyrygx',
                title: '与在押人员关系',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yzyrygx == null ? '' : row.yzyrygx) + '>' + (row.yzyrygx == null ? '' : row.yzyrygx) + '</span>';
                }
            },
            {
                field: 'gzdw',
                title: '工作单位',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.gzdw == null ? '' : row.gzdw) + '>' + (row.gzdw == null ? '' : row.gzdw) + '</span>';
                }
            },
            {
                field: 'lxdh',
                title: '联系电话',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.lxdh == null ? '' : row.lxdh) + '>' + (row.lxdh == null ? '' : row.lxdh) + '</span>';
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
        thjy: function (option) {
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
                field: 'dz',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dz == null ? '' : row.dz) + '>' + (row.dz == null ? '' : row.dz) + '</span>';
                }
            },
            {
                field: 'jlsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jlsmc == null ? '' : row.jlsmc) + '>' + (row.jlsmc == null ? '' : row.jlsmc) + '</span>';
                }
            },
            {
                field: 'count',
                title: '数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.count == null ? '' : row.count) + '>' + (row.count == null ? '' : row.count) + '</span>';
                }
            }
            ];
            return clumns;
        },
        thjydj: function (option) {
            var clumns = [{
                field: 'oid',
                title: '序号',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
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
                field: 'kssj',
                title: '开始时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.kssj == null ? '' : row.kssj) + '>' + (row.kssj == null ? '' : row.kssj) + '</span>';
                }
            },
            {
                field: 'jssj',
                title: '结束时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jssj == null ? '' : row.jssj) + '>' + (row.jssj == null ? '' : row.jssj) + '</span>';
                }
            },
            {
                field: 'thyy',
                title: '谈话原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.thyy == null ? '' : row.thyy) + '>' + (row.thyy == null ? '' : row.thyy) + '</span>';
                }
            },
            {
                field: 'fzmj',
                title: '负责民警',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.fzmj == null ? '' : row.fzmj) + '>' + (row.fzmj == null ? '' : row.fzmj) + '</span>';
                }
            },
            {
                field: 'thnr',
                title: '谈话内容',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.thnr == null ? '' : row.thnr) + '>' + (row.thnr == null ? '' : row.thnr) + '</span>';
                }
            }
            ];
            return clumns;
        },
        jshj: function (option) {
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
                field: 'dz',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dz == null ? '' : row.dz) + '>' + (row.dz == null ? '' : row.dz) + '</span>';
                }
            },
            {
                field: 'jlsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jlsmc == null ? '' : row.jlsmc) + '>' + (row.jlsmc == null ? '' : row.jlsmc) + '</span>';
                }
            },
            {
                field: 'count',
                title: '数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.count == null ? '' : row.count) + '>' + (row.count == null ? '' : row.count) + '</span>';
                }
            }
            ];
            return clumns;
        },
        jshjdj: function (option) {
            var clumns = [{
                field: 'oid',
                title: '序号',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
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
                title: '拘室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'hjsy',
                title: '会见事由',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hjsy == null ? '' : row.hjsy) + '>' + (row.hjsy == null ? '' : row.hjsy) + '</span>';
                }
            },
            {
                field: 'hjsj',
                title: '会见时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hjsj == null ? '' : row.hjsj) + '>' + (row.hjsj == null ? '' : row.hjsj) + '</span>';
                }
            },
            {
                field: 'jssj',
                title: '结束时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jssj == null ? '' : row.jssj) + '>' + (row.jssj == null ? '' : row.jssj) + '</span>';
                }
            },
            {
                field: 'dcmj',
                title: '带出民警',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.dcmj == null ? '' : row.dcmj) + '>' + (row.dcmj == null ? '' : row.dcmj) + '</span>';
                }
            },
            {
                field: 'sjmj',
                title: '收监民警',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjmj == null ? '' : row.sjmj) + '>' + (row.sjmj == null ? '' : row.sjmj) + '</span>';
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
                field: 'hjsjcd',
                title: '会见时间长度',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hjsjcd == null ? '' : row.hjsjcd) + '>' + (row.hjsjcd == null ? '' : row.hjsjcd) + '</span>';
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
                field: 'sqsj',
                title: '申请时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqsj == null ? '' : row.sqsj) + '>' + (row.sqsj == null ? '' : row.sqsj) + '</span>';
                }
            },
            {
                field: 'hjrxm',
                title: '会见人姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hjrxm == null ? '' : row.hjrxm) + '>' + (row.hjrxm == null ? '' : row.hjrxm) + '</span>';
                }
            },
            {
                field: 'gx',
                title: '关系',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.gx == null ? '' : row.gx) + '>' + (row.gx == null ? '' : row.gx) + '</span>';
                }
            },
            {
                field: 'zjh',
                title: '证件号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zjh == null ? '' : row.zjh) + '>' + (row.zjh == null ? '' : row.zjh) + '</span>';
                }
            }
            ];
            return clumns;
        },
        xxy: function (option) {
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
                field: 'dz',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dz == null ? '' : row.dz) + '>' + (row.dz == null ? '' : row.dz) + '</span>';
                }
            },
            {
                field: 'jlsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jlsmc == null ? '' : row.jlsmc) + '>' + (row.jlsmc == null ? '' : row.jlsmc) + '</span>';
                }
            },
            {
                field: 'count',
                title: '数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.count == null ? '' : row.count) + '>' + (row.count == null ? '' : row.count) + '</span>';
                }
            }
            ];
            return clumns;
        },
        xxydj: function (option) {
            var clumns = [{
                field: 'oid',
                title: '序号',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
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
                field: 'szly',
                title: '设置理由',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.szly == null ? '' : row.szly) + '>' + (row.szly == null ? '' : row.szly) + '</span>';
                }
            },
            {
                field: 'gjyj',
                title: '管教意见',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.gjyj == null ? '' : row.gjyj) + '>' + (row.gjyj == null ? '' : row.gjyj) + '</span>';
                }
            },
            {
                field: 'emlx',
                title: '耳目类型',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.emlx == null ? '' : row.emlx) + '>' + (row.emlx == null ? '' : row.emlx) + '</span>';
                }
            },
            {
                field: 'szrq',
                title: '设置日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.szrq == null ? '' : row.szrq) + '>' + (row.szrq == null ? '' : row.szrq) + '</span>';
                }
            },
            {
                field: 'zjzsjgjjqk',
                title: '自觉遵守监规监纪情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zjzsjgjjqk == null ? '' : row.zjzsjgjjqk) + '>' + (row.zjzsjgjjqk == null ? '' : row.zjzsjgjjqk) + '</span>';
                }
            },
            {
                field: 'khdj',
                title: '考核等级',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.khdj == null ? '' : row.khdj) + '>' + (row.khdj == null ? '' : row.khdj) + '</span>';
                }
            },
            {
                field: 'bllx',
                title: '办理类型',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bllx == null ? '' : row.bllx) + '>' + (row.bllx == null ? '' : row.bllx) + '</span>';
                }
            }
            ];
            return clumns;
        },
        lsp: function (option) {
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
                field: 'dz',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dz == null ? '' : row.dz) + '>' + (row.dz == null ? '' : row.dz) + '</span>';
                }
            },
            {
                field: 'jlsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jlsmc == null ? '' : row.jlsmc) + '>' + (row.jlsmc == null ? '' : row.jlsmc) + '</span>';
                }
            },
            {
                field: 'zjrs',
                title: '在拘人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zjrs == null ? '' : row.zjrs) + '>' + (row.zjrs == null ? '' : row.zjrs) + '</span>';
                }
            },
            {
                field: 'zs',
                title: '总数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zs == null ? '' : row.zs) + '>' + (row.zs == null ? '' : row.zs) + '</span>';
                }
            },
            {
                field: 'zdbh',
                title: '重点病号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zdbh == null ? '' : row.zdbh) + '>' + (row.zdbh == null ? '' : row.zdbh) + '</span>';
                }
            },
            {
                field: 'zdry',
                title: '重点人员',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zdry == null ? '' : row.zdry) + '>' + (row.zdry == null ? '' : row.zdry) + '</span>';
                }
            },
            {
                field: 'zzts',
                title: '正在提审',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zzts == null ? '' : row.zzts) + '>' + (row.zzts == null ? '' : row.zzts) + '</span>';
                }
            },
            {
                field: 'zzlshj',
                title: '正在律师会见',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zzlshj == null ? '' : row.zzlshj) + '>' + (row.zzlshj == null ? '' : row.zzlshj) + '</span>';
                }
            },
            {
                field: 'zzjshj',
                title: '正在家属会见',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zzjshj == null ? '' : row.zzjshj) + '>' + (row.zzjshj == null ? '' : row.zzjshj) + '</span>';
                }
            },
            {
                field: 'lscs',
                title: '临时出所',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.lscs == null ? '' : row.lscs) + '>' + (row.lscs == null ? '' : row.lscs) + '</span>';
                }
            },
            {
                field: 'cqjy',
                title: '超期羁押',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.cqjy == null ? '' : row.cqjy) + '>' + (row.cqjy == null ? '' : row.cqjy) + '</span>';
                }
            }
            ];
            return clumns;
        },
        lspdj: function (option) {
            var clumns = [{
                field: 'oid',
                title: '序号',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
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
                field: 'bahj',
                title: '办案环节',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bahj == null ? '' : row.bahj) + '>' + (row.bahj == null ? '' : row.bahj) + '</span>';
                }
            },
            {
                field: 'rsrq',
                title: '入所日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rsrq == null ? '' : row.rsrq) + '>' + (row.rsrq == null ? '' : row.rsrq) + '</span>';
                }
            },
            {
                field: 'gyqx',
                title: '关押期限',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.gyqx == null ? '' : row.gyqx) + '>' + (row.gyqx == null ? '' : row.gyqx) + '</span>';
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
        tjjl: function (option) {
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
                field: 'dz',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dz == null ? '' : row.dz) + '>' + (row.dz == null ? '' : row.dz) + '</span>';
                }
            },
            {
                field: 'jlsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jlsmc == null ? '' : row.jlsmc) + '>' + (row.jlsmc == null ? '' : row.jlsmc) + '</span>';
                }
            },
            {
                field: 'count',
                title: '数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.count == null ? '' : row.count) + '>' + (row.count == null ? '' : row.count) + '</span>';
                }
            }
            ];
            return clumns;
        },
        tjjldj: function (option) {
            var clumns = [{
                field: 'oid',
                title: '序号',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
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
                field: 'rybh',
                title: '人员编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'dzsj',
                title: '调整时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.dzsj == null ? '' : row.dzsj) + '>' + (row.dzsj == null ? '' : row.dzsj) + '</span>';
                }
            },
            {
                field: 'yjs',
                title: '原监室',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yjs == null ? '' : row.yjs) + '>' + (row.yjs == null ? '' : row.yjs) + '</span>';
                }
            },
            {
                field: 'xjs',
                title: '现监室',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xjs == null ? '' : row.xjs) + '>' + (row.xjs == null ? '' : row.xjs) + '</span>';
                }
            },
            {
                field: 'yy',
                title: '原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yy == null ? '' : row.yy) + '>' + (row.yy == null ? '' : row.yy) + '</span>';
                }
            },
            {
                field: 'djr',
                title: '调监人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.djr == null ? '' : row.djr) + '>' + (row.djr == null ? '' : row.djr) + '</span>';
                }
            }
            ];
            return clumns;
        },
        wgqk: function (option) {
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
                field: 'dz',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dz == null ? '' : row.dz) + '>' + (row.dz == null ? '' : row.dz) + '</span>';
                }
            },
            {
                field: 'jlsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jlsmc == null ? '' : row.jlsmc) + '>' + (row.jlsmc == null ? '' : row.jlsmc) + '</span>';
                }
            },
            {
                field: 'count',
                title: '数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.count == null ? '' : row.count) + '>' + (row.count == null ? '' : row.count) + '</span>';
                }
            }
            ];
            return clumns;
        },
        wgqkdj: function (option) {
            var clumns = [{
                field: 'oid',
                title: '序号',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
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
                field: 'xsr',
                title: '巡视人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xsr == null ? '' : row.xsr) + '>' + (row.xsr == null ? '' : row.xsr) + '</span>';
                }
            },
            {
                field: 'jlsj',
                title: '记录时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jlsj == null ? '' : row.jlsj) + '>' + (row.jlsj == null ? '' : row.jlsj) + '</span>';
                }
            },
            {
                field: 'wglx',
                title: '违规类型',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wglx == null ? '' : row.wglx) + '>' + (row.wglx == null ? '' : row.wglx) + '</span>';
                }
            },
            {
                field: 'wgqk',
                title: '违规情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgqk == null ? '' : row.wgqk) + '>' + (row.wgqk == null ? '' : row.wgqk) + '</span>';
                }
            },
            {
                field: 'clr',
                title: '处理人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.clr == null ? '' : row.clr) + '>' + (row.clr == null ? '' : row.clr) + '</span>';
                }
            },
            {
                field: 'clqk',
                title: '处理情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.clqk == null ? '' : row.clqk) + '>' + (row.clqk == null ? '' : row.clqk) + '</span>';
                }
            }
            ];
            return clumns;
        },
        jyqk: function (option) {
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
                field: 'dz',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dz == null ? '' : row.dz) + '>' + (row.dz == null ? '' : row.dz) + '</span>';
                }
            },
            {
                field: 'jlsmc',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jlsmc == null ? '' : row.jlsmc) + '>' + (row.jlsmc == null ? '' : row.jlsmc) + '</span>';
                }
            },
            {
                field: 'count',
                title: '数量',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.count == null ? '' : row.count) + '>' + (row.count == null ? '' : row.count) + '</span>';
                }
            }
            ];
            return clumns;
        },
        jyqkdj: function (option) {
            var clumns = [{
                field: 'oid',
                title: '序号',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
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
                field: 'zdrq',
                title: '诊断日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zdrq == null ? '' : row.zdrq) + '>' + (row.zdrq == null ? '' : row.zdrq) + '</span>';
                }
            },
            {
                field: 'sfswjy',
                title: '是否所外就医',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sfswjy == null ? '' : row.sfswjy) + '>' + (row.sfswjy == null ? '' : row.sfswjy) + '</span>';
                }
            },
            {
                field: 'brzs',
                title: '病人自述',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.brzs == null ? '' : row.brzs) + '>' + (row.brzs == null ? '' : row.brzs) + '</span>';
                }
            },
            {
                field: 'cljg',
                title: '处理结果',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.cljg == null ? '' : row.cljg) + '>' + (row.cljg == null ? '' : row.cljg) + '</span>';
                }
            },
            {
                field: 'yyzdsj',
                title: '医院诊断时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yyzdsj == null ? '' : row.yyzdsj) + '>' + (row.yyzdsj == null ? '' : row.yyzdsj) + '</span>';
                }
            },
            {
                field: 'yyzdjg',
                title: '医院诊断结果',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yyzdjg == null ? '' : row.yyzdjg) + '>' + (row.yyzdjg == null ? '' : row.yyzdjg) + '</span>';
                }
            },
            {
                field: 'yyzlcs',
                title: '医院治疗措施',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yyzlcs == null ? '' : row.yyzlcs) + '>' + (row.yyzlcs == null ? '' : row.yyzlcs) + '</span>';
                }
            },
            {
                field: 'ptmj',
                title: '陪同民警',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ptmj == null ? '' : row.ptmj) + '>' + (row.ptmj == null ? '' : row.ptmj) + '</span>';
                }
            }
            ];
            return clumns;
        },
    };
});
