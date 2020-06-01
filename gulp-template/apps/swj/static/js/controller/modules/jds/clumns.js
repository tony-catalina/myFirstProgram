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
                title: '在戒人数',
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
                field: 'zdry',
                title: '重点人员',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zdbh == null ? '' : row.zdbh) + '>' + (row.zdbh == null ? '' : row.zdbh) + '</span>';
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
                field: 'bsh',
                title: '病室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bsh == null ? '' : row.bsh) + '>' + (row.bsh == null ? '' : row.bsh) + '</span>';
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
    };
});
