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
        gzryxx: function (option) {
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

        lsxx: function (option) {
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

        //业务查询
        jjxqk: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'dq',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dq == null ? '' : row.dq) + '>' + (row.dq == null ? '' : row.dq) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
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
        jjxqkdj: function (option) {
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
                field: 'yxmrq',
                title: '原刑满日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yxmrq == null ? '' : row.yxmrq) + '>' + (row.yxmrq == null ? '' : row.yxmrq) + '</span>';
                }
            },
            {
                field: 'jjxq',
                title: '加减刑期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jjxq == null ? '' : row.jjxq) + '>' + (row.jjxq == null ? '' : row.jjxq) + '</span>';
                }
            },
            {
                field: 'xmsfrq',
                title: '刑满释放日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xmsfrq == null ? '' : row.xmsfrq) + '>' + (row.xmsfrq == null ? '' : row.xmsfrq) + '</span>';
                }
            },
            {
                field: 'pzwh',
                title: '批准文号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.pzwh == null ? '' : row.pzwh) + '>' + (row.pzwh == null ? '' : row.pzwh) + '</span>';
                }
            },
            {
                field: 'blrq',
                title: '办理日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.blrq == null ? '' : row.blrq) + '>' + (row.blrq == null ? '' : row.blrq) + '</span>';
                }
            },
            {
                field: 'jxhjx',
                title: '加刑或减刑',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jxhjx == null ? '' : row.jxhjx) + '>' + (row.jxhjx == null ? '' : row.jxhjx) + '</span>';
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
                field: 'dzString',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dzString == null ? '' : row.dzString) + '>' + (row.dzString == null ? '' : row.dzString) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
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
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'jsxm',
                title: '家属姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsxm == null ? '' : row.jsxm) + '>' + (row.jsxm == null ? '' : row.jsxm) + '</span>';
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
                field: 'yb',
                title: '邮编',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yb == null ? '' : row.yb) + '>' + (row.yb == null ? '' : row.yb) + '</span>';
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
                field: 'nl',
                title: '年龄',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.nl == null ? '' : row.nl) + '>' + (row.nl == null ? '' : row.nl) + '</span>';
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
                field: 'dzString',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dzString == null ? '' : row.dzString) + '>' + (row.dzString == null ? '' : row.dzString) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
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
                field: 'hjsj',
                title: '会见时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hjsj == null ? '' : row.hjsj) + '>' + (row.hjsj == null ? '' : row.hjsj) + '</span>';
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
            }

            ];
            return clumns;
        },
        jjqk: function (option) {
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
                field: 'dzString',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dzString == null ? '' : row.dzString) + '>' + (row.dzString == null ? '' : row.dzString) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
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
        jjqkdj: function (option) {
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
                field: 'szyc',
                title: '设置/延长',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.szyc == null ? '' : row.szyc) + '>' + (row.szyc == null ? '' : row.szyc) + '</span>';
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
            },
            {
                field: 'blrq',
                title: '办理日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.blrq == null ? '' : row.blrq) + '>' + (row.blrq == null ? '' : row.blrq) + '</span>';
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
                field: 'syts',
                title: '使用天数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.syts == null ? '' : row.syts) + '>' + (row.syts == null ? '' : row.syts) + '</span>';
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
                field: 'ysyj',
                title: '医生意见',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ysyj == null ? '' : row.ysyj) + '>' + (row.ysyj == null ? '' : row.ysyj) + '</span>';
                }
            },
            {
                field: 'zdzyj',
                title: '中队长意见',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zdzyj == null ? '' : row.zdzyj) + '>' + (row.zdzyj == null ? '' : row.zdzyj) + '</span>';
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
                field: 'dzString',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dzString == null ? '' : row.dzString) + '>' + (row.dzString == null ? '' : row.dzString) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
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
                field: 'psbz',
                title: '批示标志',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.psbz == null ? '' : row.psbz) + '>' + (row.psbz == null ? '' : row.psbz) + '</span>';
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
                field: 'dzString',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dzString == null ? '' : row.dzString) + '>' + (row.dzString == null ? '' : row.dzString) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
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
            },
            {
                field: 'ajxz',
                title: '案件性质',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ajxz == null ? '' : row.ajxz) + '>' + (row.ajxz == null ? '' : row.ajxz) + '</span>';
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
                field: 'dzString',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dzString == null ? '' : row.dzString) + '>' + (row.dzString == null ? '' : row.dzString) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
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
            },
                // {
                //     field: 'tsssl',
                //     title: '提审室数量',
                //     align: 'center',
                //     width: 150,
                //     formatter: function (value, row) {
                //         return '<span title=' + (row.tsssl == null ? '' : row.tsssl) + '>' + (row.tsssl == null ? '' : row.tsssl) + '</span>';
                //     }
                // }

            ];
            return clumns;
        },
        tscxdj: function (option) {
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
        hjbd: function (option) {
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
                field: 'dzString',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dzString == null ? '' : row.dzString) + '>' + (row.dzString == null ? '' : row.dzString) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
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
        hjbddj: function (option) {
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
                field: 'bdrq',
                title: '变动日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bdrq == null ? '' : row.bdrq) + '>' + (row.bdrq == null ? '' : row.bdrq) + '</span>';
                }
            },
            {
                field: 'bajd',
                title: '办案阶段',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bajd == null ? '' : row.bajd) + '>' + (row.bajd == null ? '' : row.bajd) + '</span>';
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
            },
            {
                field: 'bar',
                title: '办案人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bar == null ? '' : row.bar) + '>' + (row.bar == null ? '' : row.bar) + '</span>';
                }
            },
            {
                field: 'wsh',
                title: '文书号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wsh == null ? '' : row.wsh) + '>' + (row.wsh == null ? '' : row.wsh) + '</span>';
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
            }

            ];
            return clumns;
        },
        yqqk: function (option) {
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
                field: 'dzString',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dzString == null ? '' : row.dzString) + '>' + (row.dzString == null ? '' : row.dzString) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
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
        yqqkdj: function (option) {
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
                field: 'ygyqx',
                title: '原关押期限',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ygyqx == null ? '' : row.ygyqx) + '>' + (row.ygyqx == null ? '' : row.ygyqx) + '</span>';
                }
            },
            {
                field: 'xgyqx',
                title: '现关押期限',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xgyqx == null ? '' : row.xgyqx) + '>' + (row.xgyqx == null ? '' : row.xgyqx) + '</span>';
                }
            },
            {
                field: 'yqyy',
                title: '延期原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yqyy == null ? '' : row.yqyy) + '>' + (row.yqyy == null ? '' : row.yqyy) + '</span>';
                }
            },
            {
                field: 'blrq',
                title: '办理日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.blrq == null ? '' : row.blrq) + '>' + (row.blrq == null ? '' : row.blrq) + '</span>';
                }
            },
            {
                field: 'flwsh',
                title: '法律文书号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.flwsh == null ? '' : row.flwsh) + '>' + (row.flwsh == null ? '' : row.flwsh) + '</span>';
                }
            }

            ];
            return clumns;
        },
        tafqk: function (option) {
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
                field: 'dzString',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dzString == null ? '' : row.dzString) + '>' + (row.dzString == null ? '' : row.dzString) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
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
        tafqkdj: function (option) {
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
                field: 'xm',
                title: '姓名',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
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
                field: 'jsh',
                title: '监室号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                }
            },
            {
                field: 'tafh',
                title: '同案犯号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.tafh == null ? '' : row.tafh) + '>' + (row.tafh == null ? '' : row.tafh) + '</span>';
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
                field: 'lah',
                title: '立案号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.lah == null ? '' : row.lah) + '>' + (row.lah == null ? '' : row.lah) + '</span>';
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
                field: 'dzString',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dzString == null ? '' : row.dzString) + '>' + (row.dzString == null ? '' : row.dzString) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
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
        jbqk: function (option) {
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
                field: 'dzString',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dzString == null ? '' : row.dzString) + '>' + (row.dzString == null ? '' : row.dzString) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
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
        jbqkdj: function (option) {
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
                field: 'jbyy',
                title: '禁闭原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jbyy == null ? '' : row.jbyy) + '>' + (row.jbyy == null ? '' : row.jbyy) + '</span>';
                }
            },
            {
                field: 'jbqx',
                title: '禁闭期限',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jbqx == null ? '' : row.jbqx) + '>' + (row.jbqx == null ? '' : row.jbqx) + '</span>';
                }
            },
            {
                field: 'jbr',
                title: '经办人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jbr == null ? '' : row.jbr) + '>' + (row.jbr == null ? '' : row.jbr) + '</span>';
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
                field: 'ts',
                title: '天数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ts == null ? '' : row.ts) + '>' + (row.ts == null ? '' : row.ts) + '</span>';
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
        emqk: function (option) {
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
                field: 'dzString',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dzString == null ? '' : row.dzString) + '>' + (row.dzString == null ? '' : row.dzString) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
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
        emqkdj: function (option) {
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
            },
            {
                field: 'sfygq',
                title: '是否已过期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sfygq == null ? '' : row.sfygq) + '>' + (row.sfygq == null ? '' : row.sfygq) + '</span>';
                }
            }

            ];
            return clumns;
        },
        sgqk: function (option) {
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
                field: 'dzString',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dzString == null ? '' : row.dzString) + '>' + (row.dzString == null ? '' : row.dzString) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
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
        sgqkdj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'jsbh',
                title: '监所编号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbh == null ? '' : row.jsbh) + '>' + (row.jsbh == null ? '' : row.jsbh) + '</span>';
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
                field: 'qklx',
                title: '情况类型',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.qklx == null ? '' : row.qklx) + '>' + (row.qklx == null ? '' : row.qklx) + '</span>';
                }
            },
            {
                field: 'sglx',
                title: '事故类型',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sglx == null ? '' : row.sglx) + '>' + (row.sglx == null ? '' : row.sglx) + '</span>';
                }
            },
            {
                field: 'ttsg',
                title: '逃脱事故',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ttsg == null ? '' : row.ttsg) + '>' + (row.ttsg == null ? '' : row.ttsg) + '</span>';
                }
            },
            {
                field: 'fzcswsg',
                title: '非正常死亡事故',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.fzcswsg == null ? '' : row.fzcswsg) + '>' + (row.fzcswsg == null ? '' : row.fzcswsg) + '</span>';
                }
            },
            {
                field: 'sgxz',
                title: '事故性质',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sgxz == null ? '' : row.sgxz) + '>' + (row.sgxz == null ? '' : row.sgxz) + '</span>';
                }
            },
            {
                field: 'sglx',
                title: '事故类型',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sglx == null ? '' : row.sglx) + '>' + (row.sglx == null ? '' : row.sglx) + '</span>';
                }
            },
            {
                field: 'sgsj',
                title: '事故时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sgsj == null ? '' : row.sgsj) + '>' + (row.sgsj == null ? '' : row.sgsj) + '</span>';
                }
            },
            {
                field: 'sgdd',
                title: '事故地点',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sgdd == null ? '' : row.sgdd) + '>' + (row.sgdd == null ? '' : row.sgdd) + '</span>';
                }
            },
            {
                field: 'sjry',
                title: '设计人员',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjry == null ? '' : row.sjry) + '>' + (row.sjry == null ? '' : row.sjry) + '</span>';
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
                field: 'cljg',
                title: '处理结果',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.cljg == null ? '' : row.cljg) + '>' + (row.cljg == null ? '' : row.cljg) + '</span>';
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
                field: 'dzString',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dzString == null ? '' : row.dzString) + '>' + (row.dzString == null ? '' : row.dzString) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
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
                field: 'dzString',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dzString == null ? '' : row.dzString) + '>' + (row.dzString == null ? '' : row.dzString) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
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
                field: 'lszjh',
                title: '律师证件号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.lszjh == null ? '' : row.lszjh) + '>' + (row.lszjh == null ? '' : row.lszjh) + '</span>';
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
        pjdj: function (option) {
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
                field: 'dzString',
                align: 'center',
                width: 150,
                title: '地区名',
                formatter: function (value, row) {
                    return '<span title=' + (row.dzString == null ? '' : row.dzString) + '>' + (row.dzString == null ? '' : row.dzString) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
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
        pjdjdj: function (option) {
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
                field: 'pjrq',
                title: '判决日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.pjrq == null ? '' : row.pjrq) + '>' + (row.pjrq == null ? '' : row.pjrq) + '</span>';
                }
            },
            {
                field: 'pjdw',
                title: '判决单位',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.pjdw == null ? '' : row.pjdw) + '>' + (row.pjdw == null ? '' : row.pjdw) + '</span>';
                }
            },
            {
                field: 'wsh',
                title: '文书号',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wsh == null ? '' : row.wsh) + '>' + (row.wsh == null ? '' : row.wsh) + '</span>';
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
                field: 'xq',
                title: '刑期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xq == null ? '' : row.xq) + '>' + (row.xq == null ? '' : row.xq) + '</span>';
                }
            },
            {
                field: 'fjx',
                title: '附加刑',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.fjx == null ? '' : row.fjx) + '>' + (row.fjx == null ? '' : row.fjx) + '</span>';
                }
            },
            {
                field: 'qsrq',
                title: '起始日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.qsrq == null ? '' : row.qsrq) + '>' + (row.qsrq == null ? '' : row.qsrq) + '</span>';
                }
            },
            {
                field: 'xmrq',
                title: '刑满日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xmrq == null ? '' : row.xmrq) + '>' + (row.xmrq == null ? '' : row.xmrq) + '</span>';
                }
            },
            {
                field: 'jarq',
                title: '结案日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jarq == null ? '' : row.jarq) + '>' + (row.jarq == null ? '' : row.jarq) + '</span>';
                }
            },
            {
                field: 'hxxq',
                title: '缓刑刑期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hxxq == null ? '' : row.hxxq) + '>' + (row.hxxq == null ? '' : row.hxxq) + '</span>';
                }
            }

            ];
            return clumns;
        },

        //信息研判
        cljyfx: function () {
            return [{
                field: '',
                title: '序号',
                align: 'center',
                width: 300,
                hidden: false,
                // checkbox:true,
            }, {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 200,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'sjl',
                title: '',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjl == null ? '' : row.sjl) + '>' + (row.sjl == null ? '' : row.sjl) + '</span>';
                }
            },
            {
                field: 'wgcs',
                title: '违规次数',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgcs == null ? '' : row.wgcs) + '>' + (row.v == null ? '' : row.wgcs) + '</span>';
                }
            }
            ];
        },
        cqjyqkfx: function () {
            return [{
                field: '',
                title: '序号',
                align: 'center',
                width: 300,
                hidden: false,
                // checkbox:true,
            }, {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 200,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'sjl',
                title: '',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjl == null ? '' : row.sjl) + '>' + (row.sjl == null ? '' : row.sjl) + '</span>';
                }
            },
            {
                field: 'wgcs',
                title: '违规次数',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgcs == null ? '' : row.wgcs) + '>' + (row.v == null ? '' : row.wgcs) + '</span>';
                }
            }
            ];
        },
        zdryfx: function () {
            return [{
                field: '',
                title: '序号',
                align: 'center',
                width: 300,
                hidden: false,
                // checkbox:true,
            }, {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 200,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'sjl',
                title: '',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjl == null ? '' : row.sjl) + '>' + (row.sjl == null ? '' : row.sjl) + '</span>';
                }
            },
            {
                field: 'wgcs',
                title: '违规次数',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgcs == null ? '' : row.wgcs) + '>' + (row.v == null ? '' : row.wgcs) + '</span>';
                }
            }
            ];
        },
        ylqkfx: function () {
            return [{
                field: '',
                title: '序号',
                align: 'center',
                width: 300,
                hidden: false,
                // checkbox:true,
            }, {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 200,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'sjl',
                title: '',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjl == null ? '' : row.sjl) + '>' + (row.sjl == null ? '' : row.sjl) + '</span>';
                }
            },
            {
                field: 'wgcs',
                title: '违规次数',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgcs == null ? '' : row.wgcs) + '>' + (row.v == null ? '' : row.wgcs) + '</span>';
                }
            }
            ];
        },
        ryflfx: function () {
            return [{
                field: '',
                title: '序号',
                align: 'center',
                width: 300,
                hidden: false,
                // checkbox:true,
            }, {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 200,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'sjl',
                title: '',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjl == null ? '' : row.sjl) + '>' + (row.sjl == null ? '' : row.sjl) + '</span>';
                }
            },
            {
                field: 'wgcs',
                title: '违规次数',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgcs == null ? '' : row.wgcs) + '>' + (row.v == null ? '' : row.wgcs) + '</span>';
                }
            }
            ];
        },
        ajqkfx: function () {
            return [{
                field: '',
                title: '序号',
                align: 'center',
                width: 300,
                hidden: false,
                // checkbox:true,
            }, {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 200,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'sjl',
                title: '',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjl == null ? '' : row.sjl) + '>' + (row.sjl == null ? '' : row.sjl) + '</span>';
                }
            },
            {
                field: 'wgcs',
                title: '违规次数',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgcs == null ? '' : row.wgcs) + '>' + (row.v == null ? '' : row.wgcs) + '</span>';
                }
            }
            ];
        },
        wgqkfx: function () {
            return [{
                field: '',
                title: '序号',
                align: 'center',
                width: 300,
                hidden: false,
                // checkbox:true,
            }, {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 200,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'sjl',
                title: '',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjl == null ? '' : row.sjl) + '>' + (row.sjl == null ? '' : row.sjl) + '</span>';
                }
            },
            {
                field: 'wgcs',
                title: '违规次数',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgcs == null ? '' : row.wgcs) + '>' + (row.v == null ? '' : row.wgcs) + '</span>';
                }
            }
            ];
        },
        lsfxfx: function () {
            return [{
                field: '',
                title: '序号',
                align: 'center',
                width: 300,
                hidden: false,
                // checkbox:true,
            }, {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 200,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'sjl',
                title: '',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjl == null ? '' : row.sjl) + '>' + (row.sjl == null ? '' : row.sjl) + '</span>';
                }
            },
            {
                field: 'wgcs',
                title: '违规次数',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgcs == null ? '' : row.wgcs) + '>' + (row.v == null ? '' : row.wgcs) + '</span>';
                }
            }
            ];
        },
        lslsfx: function () {
            return [{
                field: '',
                title: '序号',
                align: 'center',
                width: 300,
                hidden: false,
                // checkbox:true,
            }, {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 200,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'sjl',
                title: '',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjl == null ? '' : row.sjl) + '>' + (row.sjl == null ? '' : row.sjl) + '</span>';
                }
            },
            {
                field: 'wgcs',
                title: '违规次数',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgcs == null ? '' : row.wgcs) + '>' + (row.v == null ? '' : row.wgcs) + '</span>';
                }
            }
            ];
        },
        sjwslryfx: function () {
            return [{
                field: '',
                title: '序号',
                align: 'center',
                width: 300,
                hidden: false,
                // checkbox:true,
            }, {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 200,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'sjl',
                title: '',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjl == null ? '' : row.sjl) + '>' + (row.sjl == null ? '' : row.sjl) + '</span>';
                }
            },
            {
                field: 'wgcs',
                title: '违规次数',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgcs == null ? '' : row.wgcs) + '>' + (row.v == null ? '' : row.wgcs) + '</span>';
                }
            }
            ];
        },
        xdryfx: function () {
            return [{
                field: '',
                title: '序号',
                align: 'center',
                width: 300,
                hidden: false,
                // checkbox:true,
            }, {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 200,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'sjl',
                title: '',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjl == null ? '' : row.sjl) + '>' + (row.sjl == null ? '' : row.sjl) + '</span>';
                }
            },
            {
                field: 'wgcs',
                title: '违规次数',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgcs == null ? '' : row.wgcs) + '>' + (row.v == null ? '' : row.wgcs) + '</span>';
                }
            }
            ];
        },
        yzjbryfx: function () {
            return [{
                field: '',
                title: '序号',
                align: 'center',
                width: 300,
                hidden: false,
                // checkbox:true,
            }, {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 200,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'sjl',
                title: '',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjl == null ? '' : row.sjl) + '>' + (row.sjl == null ? '' : row.sjl) + '</span>';
                }
            },
            {
                field: 'wgcs',
                title: '违规次数',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgcs == null ? '' : row.wgcs) + '>' + (row.v == null ? '' : row.wgcs) + '</span>';
                }
            }
            ];
        },
        gyqxfx: function () {
            return [{
                field: '',
                title: '序号',
                align: 'center',
                width: 300,
                hidden: false,
                // checkbox:true,
            }, {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 200,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'sjl',
                title: '',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjl == null ? '' : row.sjl) + '>' + (row.sjl == null ? '' : row.sjl) + '</span>';
                }
            },
            {
                field: 'wgcs',
                title: '违规次数',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgcs == null ? '' : row.wgcs) + '>' + (row.v == null ? '' : row.wgcs) + '</span>';
                }
            }
            ];
        },
        gjfx: function () {
            return [{
                field: '',
                title: '序号',
                align: 'center',
                width: 300,
                hidden: false,
                // checkbox:true,
            }, {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 200,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'sjl',
                title: '',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjl == null ? '' : row.sjl) + '>' + (row.sjl == null ? '' : row.sjl) + '</span>';
                }
            },
            {
                field: 'wgcs',
                title: '违规次数',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgcs == null ? '' : row.wgcs) + '>' + (row.v == null ? '' : row.wgcs) + '</span>';
                }
            }
            ];
        },


    };
});
