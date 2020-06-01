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
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '>' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '</span>';
                    }
                },
                {
                    field: 'snbh',
                    title: '人员编号',
                    width: 100,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.snbh == null ? '' : row.snbh) + '>' + (row.snbh == null ? '' : row.snbh) + '</span>';
                    }
                },
                {
                    field: 'xm',
                    title: '姓名',
                    width: 100,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                    }
                },
                {
                    field: 'sykzrq',
                    title: '收押开证日期',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.sykzrq == null ? '' : row.sykzrq) + '>' + (row.sykzrq == null ? '' : row.sykzrq) + '</span>';
                    }
                },
                {
                    field: 'jsh',
                    title: '监室号',
                    width: 100,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
                    }
                },
                {
                    field: 'bahjString',
                    title: '办案环节',
                    width: 100,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.bahjString == null ? '' : row.bahjString) + '>' + (row.bahjString == null ? '' : row.bahjString) + '</span>';
                    }
                },
                {
                    field: 'rsrq',
                    title: '入所时间',
                    width: 200,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.rsrq == null ? '' : row.rsrq) + '>' + (row.rsrq == null ? '' : row.rsrq) + '</span>';
                    }
                },
                {
                    field: 'gyqx',
                    title: '关押期限',
                    width: 200,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.gyqx == null ? '' : row.gyqx) + '>' + (row.gyqx == null ? '' : row.gyqx) + '</span>';
                    }
                },
                {
                    field: 'badw',
                    title: '办案单位',
                    width: 200,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.badw == null ? '' : row.badw) + '>' + (row.badw == null ? '' : row.badw) + '</span>';
                    }
                },
                {
                    field: 'xbString',
                    title: '性别',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.xbString == null ? '' : row.xbString) + '>' + (row.xbString == null ? '' : row.xbString) + '</span>';
                    }
                },
                {
                    field: 'dwlxString',
                    title: '单位类型',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.dwlxString == null ? '' : row.dwlxString) + '>' + (row.dwlxString == null ? '' : row.dwlxString) + '</span>';
                    }
                },
                {
                    field: 'rsxzString',
                    title: '入所性质',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.rsxzString == null ? '' : row.rsxzString) + '>' + (row.rsxzString == null ? '' : row.rsxzString) + '</span>';
                    }
                },
                {
                    field: 'csrq',
                    title: '出生日期',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.csrq == null ? '' : row.csrq) + '>' + (row.csrq == null ? '' : row.csrq) + '</span>';
                    }
                },
                {
                    field: 'zjlxString',
                    title: '证件类型',
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
                    width: 200, hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.gcbh == null ? '' : row.gcbh) + '>' + (row.gcbh == null ? '' : row.gcbh) + '</span>';
                    }
                },
                {
                    field: 'zjh',
                    title: '证件号',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.zjh == null ? '' : row.zjh) + '>' + (row.zjh == null ? '' : row.zjh) + '</span>';
                    }
                },
                {
                    field: 'hjdString',
                    title: '户籍地',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.hjdString == null ? '' : row.hjdString) + '>' + (row.hjdString == null ? '' : row.hjdString) + '</span>';
                    }
                },
                {
                    field: 'xzdString',
                    title: '现住地',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.xzdString == null ? '' : row.xzdString) + '>' + (row.xzdString == null ? '' : row.xzdString) + '</span>';
                    }
                },
                {
                    field: 'mzString',
                    title: '民族',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.mzString == null ? '' : row.mzString) + '>' + (row.mzString == null ? '' : row.mzString) + '</span>';
                    }
                },
                {
                    field: 'gjString',
                    title: '国籍',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.gjString == null ? '' : row.gjString) + '>' + (row.gjString == null ? '' : row.gjString) + '</span>';
                    }
                },
                {
                    field: 'whcdString',
                    title: '文化程度',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.whcdString == null ? '' : row.whcdString) + '>' + (row.whcdString == null ? '' : row.whcdString) + '</span>';
                    }
                },
                {
                    field: 'zyString',
                    title: '职业',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.zyString == null ? '' : row.zyString) + '>' + (row.zyString == null ? '' : row.zyString) + '</span>';
                    }
                },
                {
                    field: 'sfString',
                    title: '身份',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.sfString == null ? '' : row.sfString) + '>' + (row.sfString == null ? '' : row.sfString) + '</span>';
                    }
                },
                {
                    field: 'tssfString',
                    title: '特殊身份',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.tssfString == null ? '' : row.tssfString) + '>' + (row.tssfString == null ? '' : row.tssfString) + '</span>';
                    }
                },
                {
                    field: 'cypjfz',
                    title: '处遇评鉴分值',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.cypjfz == null ? '' : row.cypjfz) + '>' + (row.cypjfz == null ? '' : row.cypjfz) + '</span>';
                    }
                },
                {
                    field: 'jyrq',
                    title: '羁押日期',
                    width: 200,
                    hidden: true,
                    formatter: function (value, row) {
                        return '<span title=' + (row.jyrq == null ? '' : row.jyrq) + '>' + (row.jyrq == null ? '' : row.jyrq) + '</span>';
                    }
                },
                {
                    field: 'ayString',
                    title: '主要案由',
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
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '人员姓名',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'csyyString',
                title: '出所原因',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.csyyString == null ? '' : row.csyyString) + '>' + (row.csyyString == null ? '' : row.csyyString) + '</span>';
                }
            },
            {
                field: 'cssj',
                title: '出所时间',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.cssj == null ? '' : row.cssj) + '>' + (row.cssj == null ? '' : row.cssj) + '</span>';
                }
            },
            {
                field: 'csqx',
                title: '出所去向',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.csqx == null ? '' : row.csqx) + '>' + (row.csqx == null ? '' : row.csqx) + '</span>';
                }
            },
            {
                field: 'pzdw',
                title: '批准单位',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.pzdw == null ? '' : row.pzdw) + '>' + (row.pzdw == null ? '' : row.pzdw) + '</span>';
                }
            },
            {
                field: 'pzr',
                title: '批准人',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.pzr == null ? '' : row.pzr) + '>' + (row.pzr == null ? '' : row.pzr) + '</span>';
                }
            },
            {
                field: 'dbdw',
                title: '担保单位',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.dbdw == null ? '' : row.dbdw) + '>' + (row.dbdw == null ? '' : row.dbdw) + '</span>';
                }
            },
            {
                field: 'dbr',
                title: '担保人',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '>' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '</span>';
                }
            },
            {
                field: 'jddw',
                title: '监督单位',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '>' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '</span>';
                }
            },
            {
                field: 'zcdwszd',
                title: '转出单位所在地',
                width: 200,
                hidden: true,
                formatter: function (value, row) {
                    return '<span title=' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '>' + (row.fxpgLastfxpgfz == null ? '' : row.fxpgLastfxpgfz) + '</span>';
                }
            },
            {
                field: 'jsbhString',
                title: '备注',
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
                width: 150,
                title: '监所编号',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbh == null ? '' : row.jsbh) + '>' + (row.jsbh == null ? '' : row.jsbh) + '</span>';
                }
            },
            {
                field: 'rybh',
                title: '人员编号',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                }
            },
            {
                field: 'xm',
                title: '姓名',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                }
            },
            {
                field: 'sqwp',
                title: '申请物品',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqwp == null ? '' : row.sqwp) + '>' + (row.sqwp == null ? '' : row.sqwp) + '</span>';
                }
            },
            {
                field: 'sqyy',
                title: '申请原因',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqyy == null ? '' : row.sqyy) + '>' + (row.sqyy == null ? '' : row.sqyy) + '</span>';
                }
            },
            {
                field: 'sqsj',
                title: '申请时间',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sqsj == null ? '' : row.sqsj) + '>' + (row.sqsj == null ? '' : row.sqsj) + '</span>';
                }
            },
            {
                field: 'qtblr',
                title: '前台办理人',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.qtblr == null ? '' : row.qtblr) + '>' + (row.qtblr == null ? '' : row.qtblr) + '</span>';
                }
            },
            {
                field: 'qtblsj',
                title: '前台办理时间',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.qtblsj == null ? '' : row.qtblsj) + '>' + (row.qtblsj == null ? '' : row.qtblsj) + '</span>';
                }
            }
            ];
            return clumns;
        },
        ptldzdsjk: function (option) {
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
                field: 'jsbhString',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'hhry',
                title: '黑户人员',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hhry == null ? '' : row.hhry) + '>' + (row.hhry == null ? '' : row.hhry) + '</span>';
                }
            },
            {
                field: 'ztry',
                title: '在逃人员',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ztry == null ? '' : row.ztry) + '>' + (row.ztry == null ? '' : row.ztry) + '</span>';
                }
            },
            {
                field: 'jsbr',
                title: '精神病人',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbr == null ? '' : row.jsbr) + '>' + (row.jsbr == null ? '' : row.jsbr) + '</span>';
                }
            },
            {
                field: 'zsry',
                title: '走失人员',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zsry == null ? '' : row.zsry) + '>' + (row.zsry == null ? '' : row.zsry) + '</span>';
                }
            },
            {
                field: 'sfry',
                title: '上访人员',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sfry == null ? '' : row.sfry) + '>' + (row.sfry == null ? '' : row.sfry) + '</span>';
                }
            },
            {
                field: 'skry',
                title: '涉恐人员',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.skry == null ? '' : row.skry) + '>' + (row.skry == null ? '' : row.skry) + '</span>';
                }
            }
            ];
            return clumns;
        },
        bjgryfxyp: function (option) {
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
                field: 'jsbhString',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'xsajrs',
                title: '刑事案件人数',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xsajrs == null ? '' : row.xsajrs) + '>' + (row.xsajrs == null ? '' : row.xsajrs) + '</span>';
                }
            },
            {
                field: 'zaajrs',
                title: '治安案件人数',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zaajrs == null ? '' : row.zaajrs) + '>' + (row.zaajrs == null ? '' : row.zaajrs) + '</span>';
                }
            },
            {
                field: 'wgqkrs',
                title: '有违规情况人数',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wgqkrs == null ? '' : row.wgqkrs) + '>' + (row.wgqkrs == null ? '' : row.wgqkrs) + '</span>';
                }
            },
            {
                field: 'stjkrs',
                title: '身体健康人数',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.stjkrs == null ? '' : row.stjkrs) + '>' + (row.stjkrs == null ? '' : row.stjkrs) + '</span>';
                }
            },
            {
                field: 'stfjkrs',
                title: '身体非健康人数',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.stfjkrs == null ? '' : row.stfjkrs) + '>' + (row.stfjkrs == null ? '' : row.stfjkrs) + '</span>';
                }
            },
            {
                field: 'ssyljzrs',
                title: '实施医疗救助人数',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ssyljzrs == null ? '' : row.ssyljzrs) + '>' + (row.ssyljzrs == null ? '' : row.ssyljzrs) + '</span>';
                }
            },
            {
                field: 'snbxlhrs',
                title: '所内表现良好人数',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.snbxlhrs == null ? '' : row.snbxlhrs) + '>' + (row.snbxlhrs == null ? '' : row.snbxlhrs) + '</span>';
                }
            },
            {
                field: 'ypjrs',
                title: '已判决人数',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ypjrs == null ? '' : row.ypjrs) + '>' + (row.ypjrs == null ? '' : row.ypjrs) + '</span>';
                }
            },
            {
                field: 'wpjrs',
                title: '未判决人数',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wpjrs == null ? '' : row.wpjrs) + '>' + (row.wpjrs == null ? '' : row.wpjrs) + '</span>';
                }
            }
            ];
            return clumns;
        },
        jjsqfxyp: function (option) {
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
                field: 'jsmc',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'zdyjrs',
                title: '重大一级人数',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zdyjrs == null ? '' : row.zdyjrs) + '>' + (row.zdyjrs == null ? '' : row.zdyjrs) + '</span>';
                }
            },
            {
                field: 'zbhrs',
                title: '重病号人数',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zbhrs == null ? '' : row.zbhrs) + '>' + (row.zbhrs == null ? '' : row.zbhrs) + '</span>';
                }
            },
            {
                field: 'jsgzsl',
                title: '监室（拘室）设备故障数量',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsgzsl == null ? '' : row.jsgzsl) + '>' + (row.jsgzsl == null ? '' : row.jsgzsl) + '</span>';
                }
            },
            {
                field: 'sxjssl',
                title: '年久失修监室数量',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sxjssl == null ? '' : row.sxjssl) + '>' + (row.sxjssl == null ? '' : row.sxjssl) + '</span>';
                }
            },
            ];
            return clumns;
        },
        mjzfzqfxyp: function (option) {
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
                field: 'jsmc',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'wayqjxth',
                title: '未按要求进行谈话',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wayqjxth == null ? '' : row.wayqjxth) + '>' + (row.wayqjxth == null ? '' : row.wayqjxth) + '</span>';
                }
            },
            {
                field: 'wlsgkcs',
                title: '未落实管控措施',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wlsgkcs == null ? '' : row.wlsgkcs) + '>' + (row.wlsgkcs == null ? '' : row.wlsgkcs) + '</span>';
                }
            },

            {
                field: 'wjslrsj',
                title: '未及时录入数据',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wjslrsj == null ? '' : row.wjslrsj) + '>' + (row.wjslrsj == null ? '' : row.wjslrsj) + '</span>';
                }
            },
            {
                field: 'wjscldb',
                title: '未及时处理待办',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wjscldb == null ? '' : row.wjscldb) + '>' + (row.wjscldb == null ? '' : row.wjscldb) + '</span>';
                }
            }
            ];
            return clumns;
        },
        zdglsjcx: function (option) {
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
                field: 'jsmc',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'zjxj',
                title: '加载械具',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zjxj == null ? '' : row.zjxj) + '>' + (row.zjxj == null ? '' : row.zjxj) + '</span>';
                }
            },
            {
                field: 'djdo',
                title: '打架斗殴',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.djdo == null ? '' : row.djdo) + '>' + (row.djdo == null ? '' : row.djdo) + '</span>';
                }
            },

            {
                field: 'zszc',
                title: '自伤自残',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zszc == null ? '' : row.zszc) + '>' + (row.zszc == null ? '' : row.zszc) + '</span>';
                }
            },
            {
                field: 'tsyw',
                title: '吞食异物',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.tsyw == null ? '' : row.tsyw) + '>' + (row.tsyw == null ? '' : row.tsyw) + '</span>';
                }
            },
            {
                field: 'lkyj',
                title: '列控一级',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.lkyj == null ? '' : row.lkyj) + '>' + (row.lkyj == null ? '' : row.lkyj) + '</span>';
                }
            },
            {
                field: 'gjth',
                title: '管教谈话',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.gjth == null ? '' : row.gjth) + '>' + (row.gjth == null ? '' : row.gjth) + '</span>';
                }
            },
            {
                field: 'mjxs',
                title: '民警巡视',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.mjxs == null ? '' : row.mjxs) + '>' + (row.mjxs == null ? '' : row.mjxs) + '</span>';
                }
            },
            ];
            return clumns;
        },
        zdxmhxxlzcx: function (option) {
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
                field: 'jsmc',
                width: 150,
                title: '监所名称',
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'tsyw',
                title: '吞食异物',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.tsyw == null ? '' : row.tsyw) + '>' + (row.tsyw == null ? '' : row.tsyw) + '</span>';
                }
            },
            {
                field: 'hycrb',
                title: '患有传染病',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hycrb == null ? '' : row.hycrb) + '>' + (row.hycrb == null ? '' : row.hycrb) + '</span>';
                }
            },
            {
                field: 'jsyc',
                title: '精神异常',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsyc == null ? '' : row.jsyc) + '>' + (row.jsyc == null ? '' : row.jsyc) + '</span>';
                }
            }
            ];
            return clumns;
        },
        mjsl: function (option) {
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
                field: 'jsmc',
                title: '监所名称',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'jsmjsl',
                title: '监所民警数量',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmjsl == null ? '' : row.jsmjsl) + '>' + (row.jsmjsl == null ? '' : row.jsmjsl) + '</span>';
                }
            }

            ];
            return clumns;
        },
        jsjcsj: function (option) {
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
                field: 'jsmc',
                title: '监所名称',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'yf',
                title: '月份',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yf == null ? '' : row.yf) + '>' + (row.yf == null ? '' : row.yf) + '</span>';
                }
            },
            {
                field: 'sjzyl',
                title: '设计在押量',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.sjzyl == null ? '' : row.sjzyl) + '>' + (row.sjzyl == null ? '' : row.sjzyl) + '</span>';
                }
            },
            {
                field: 'ymzyzl',
                title: '月末在押总量',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ymzyzl == null ? '' : row.ymzyzl) + '>' + (row.ymzyzl == null ? '' : row.ymzyzl) + '</span>';
                }
            }

            ];
            return clumns;
        },
        jsylbhqk: function (option) {
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
                field: 'jsmc',
                title: '监所名称',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'yf',
                title: '月份',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yf == null ? '' : row.yf) + '>' + (row.yf == null ? '' : row.yf) + '</span>';
                }
            },
            {
                field: 'symzyl',
                title: '上月末在押量',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.symzyl == null ? '' : row.symzyl) + '>' + (row.symzyl == null ? '' : row.symzyl) + '</span>';
                }
            },
            {
                field: 'byzjl',
                title: '本月增加量',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.byzjl == null ? '' : row.byzjl) + '>' + (row.byzjl == null ? '' : row.byzjl) + '</span>';
                }
            },
            {
                field: 'ymzyl',
                title: '月末在押量',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ymzyl == null ? '' : row.ymzyl) + '>' + (row.ymzyl == null ? '' : row.ymzyl) + '</span>';
                }
            }

            ];
            return clumns;
        },
        xyysfrysj: function (option) {
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
                field: 'jsmc',
                title: '监所名称',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'ysfrysl',
                title: '预释放人员数量',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ysfrysl == null ? '' : row.ysfrysl) + '>' + (row.ysfrysl == null ? '' : row.ysfrysl) + '</span>';
                }
            }

            ];
            return clumns;
        },
        yxsgyyxzyry: function (option) {
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
                field: 'jsmc',
                title: '监所名称',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'yxsgyyxrs',
                title: '余刑三个月以下人数',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.yxsgyyxrs == null ? '' : row.yxsgyyxrs) + '>' + (row.yxsgyyxrs == null ? '' : row.yxsgyyxrs) + '</span>';
                }
            }

            ];
            return clumns;
        },
        zfzlkp: function (option) {
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
                field: 'jsmc',
                title: '监所名称',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsmc == null ? '' : row.jsmc) + '>' + (row.jsmc == null ? '' : row.jsmc) + '</span>';
                }
            },
            {
                field: 'bbtxmth',
                title: '“八必谈”项目谈话',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bbtxmth == null ? '' : row.bbtxmth) + '>' + (row.bbtxmth == null ? '' : row.bbtxmth) + '</span>';
                }
            },
            {
                field: 'xrswth',
                title: '新入所24小时未谈话',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xrswth == null ? '' : row.xrswth) + '>' + (row.xrswth == null ? '' : row.xrswth) + '</span>';
                }
            },
            {
                field: 'mythsylc',
                title: '每月谈话少于两次',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.mythsylc == null ? '' : row.mythsylc) + '>' + (row.mythsylc == null ? '' : row.mythsylc) + '</span>';
                }
            },
            {
                field: 'thsjxysfz',
                title: '谈话时间小于3分钟',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.thsjxysfz == null ? '' : row.thsjxysfz) + '>' + (row.thsjxysfz == null ? '' : row.thsjxysfz) + '</span>';
                }
            },
            {
                field: 'cqjy',
                title: '超期羁押',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.cqjy == null ? '' : row.cqjy) + '>' + (row.cqjy == null ? '' : row.cqjy) + '</span>';
                }
            },
            {
                field: 'wagdtzjs',
                title: '未按规定调整监室',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wagdtzjs == null ? '' : row.wagdtzjs) + '>' + (row.wagdtzjs == null ? '' : row.wagdtzjs) + '</span>';
                }
            }

            ];
            return clumns;
        },
    };
});
