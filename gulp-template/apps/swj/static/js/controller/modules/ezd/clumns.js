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
                    width: 200,
                    hidden: true,
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

        //监所医疗信息
        jsylxx: function (option) {
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
                field: 'rstj',
                title: '入所体检',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.rstj == null ? '' : row.rstj) + '>' + (row.rstj == null ? '' : row.rstj) + '</span>';
                }
            },
            {
                field: 'zdbr',
                title: '重点病人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zdbr == null ? '' : row.zdbr) + '>' + (row.zdbr == null ? '' : row.zdbr) + '</span>';
                }
            },
            {
                field: 'crbr',
                title: '传染病人',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.crbr == null ? '' : row.crbr) + '>' + (row.crbr == null ? '' : row.crbr) + '</span>';
                }
            },
            {
                field: 'ylxz',
                title: '医疗巡诊',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ylxz == null ? '' : row.ylxz) + '>' + (row.ylxz == null ? '' : row.ylxz) + '</span>';
                }
            },
            {
                field: 'snjy',
                title: '所内就医',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.snjy == null ? '' : row.snjy) + '>' + (row.snjy == null ? '' : row.snjy) + '</span>';
                }
            },
            {
                field: 'csjy',
                title: '出所就医',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.csjy == null ? '' : row.csjy) + '>' + (row.csjy == null ? '' : row.csjy) + '</span>';
                }
            },
            {
                field: 'cyhsbrhxqk',
                title: '出院回所病人后续情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.cyhsbrhxqk == null ? '' : row.cyhsbrhxqk) + '>' + (row.cyhsbrhxqk == null ? '' : row.cyhsbrhxqk) + '</span>';
                }
            }
            ];
            return clumns;
        },
        jsylxxtj: function (option) {
            var clumns = [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            },
            {
                field: 'zyhbrs',
                title: '在押患病人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zyhbrs == null ? '' : row.zyhbrs) + '>' + (row.zyhbrs == null ? '' : row.zyhbrs) + '</span>';
                }
            },
            {
                field: 'zbhrs',
                title: '重病号人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zbhrs == null ? '' : row.zbhrs) + '>' + (row.zbhrs == null ? '' : row.zbhrs) + '</span>';
                }
            },
            {
                field: 'gayyzyrs',
                title: '公安医院住院人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.gayyzyrs == null ? '' : row.gayyzyrs) + '>' + (row.gayyzyrs == null ? '' : row.gayyzyrs) + '</span>';
                }
            },
            {
                field: 'wyzyrs',
                title: '外院住院人数',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.wyzyrs == null ? '' : row.wyzyrs) + '>' + (row.wyzyrs == null ? '' : row.wyzyrs) + '</span>';
                }
            }
            ];
            return clumns;
        },
        rstjxx: function (option) {
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
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
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
                field: 'jkzk',
                title: '健康状况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jkzk == null ? '' : row.jkzk) + '>' + (row.jkzk == null ? '' : row.jkzk) + '</span>';
                }
            },
            {
                field: 'zsjb',
                title: '自述疾病',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zsjb == null ? '' : row.zsjb) + '>' + (row.zsjb == null ? '' : row.zsjb) + '</span>';
                }
            },
            {
                field: 'fzjc',
                title: '辅助检查',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.fzjc == null ? '' : row.fzjc) + '>' + (row.fzjc == null ? '' : row.fzjc) + '</span>';
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
                field: 'jcrq',
                title: '检查日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jcrq == null ? '' : row.jcrq) + '>' + (row.jcrq == null ? '' : row.jcrq) + '</span>';
                }
            }

            ];
            return clumns;
        },
        zdbrxx: function (option) {
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
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
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
                field: 'bzmc',
                title: '病状名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bzmc == null ? '' : row.bzmc) + '>' + (row.bzmc == null ? '' : row.bzmc) + '</span>';
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
                field: 'lkcs',
                title: '列控措施',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.lkcs == null ? '' : row.lkcs) + '>' + (row.lkcs == null ? '' : row.lkcs) + '</span>';
                }
            }
            ];
            return clumns;
        },
        crbrxx: function (option) {
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
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
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
                field: 'crblx',
                title: '传染病类型',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.crblx == null ? '' : row.crblx) + '>' + (row.crblx == null ? '' : row.crblx) + '</span>';
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
                field: 'bqdj',
                title: '病情等级',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bqdj == null ? '' : row.bqdj) + '>' + (row.bqdj == null ? '' : row.bqdj) + '</span>';
                }
            }
            ];
            return clumns;
        },
        ylxzxx: function (option) {
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
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
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
                field: 'xzsj',
                title: '巡诊时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xzsj == null ? '' : row.xzsj) + '>' + (row.xzsj == null ? '' : row.xzsj) + '</span>';
                }
            },
            {
                field: 'xzys',
                title: '巡诊医生',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xzys == null ? '' : row.xzys) + '>' + (row.xzys == null ? '' : row.xzys) + '</span>';
                }
            },
            {
                field: 'bzmc',
                title: '病状名称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.bzmc == null ? '' : row.bzmc) + '>' + (row.bzmc == null ? '' : row.bzmc) + '</span>';
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
                field: 'zzqk',
                title: '诊治情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zzqk == null ? '' : row.zzqk) + '>' + (row.zzqk == null ? '' : row.zzqk) + '</span>';
                }
            }
            ];
            return clumns;
        },
        snjyxx: function (option) {
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
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
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
                field: 'jysj',
                title: '就医时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jysj == null ? '' : row.jysj) + '>' + (row.jysj == null ? '' : row.jysj) + '</span>';
                }
            },
            {
                field: 'ys',
                title: '医生',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ys == null ? '' : row.ys) + '>' + (row.ys == null ? '' : row.ys) + '</span>';
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
                field: 'zzqk',
                title: '诊治情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zzqk == null ? '' : row.zzqk) + '>' + (row.zzqk == null ? '' : row.zzqk) + '</span>';
                }
            },
            {
                field: 'clcs',
                title: '处理措施',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.clcs == null ? '' : row.clcs) + '>' + (row.clcs == null ? '' : row.clcs) + '</span>';
                }
            }
            ];
            return clumns;
        },
        csjyxx: function (option) {
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
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
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
                field: 'jysj',
                title: '就医时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jysj == null ? '' : row.jysj) + '>' + (row.jysj == null ? '' : row.jysj) + '</span>';
                }
            },
            {
                field: 'jydd',
                title: '就医地点',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jydd == null ? '' : row.jydd) + '>' + (row.jydd == null ? '' : row.jydd) + '</span>';
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
                field: 'ptys',
                title: '陪同医生',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ptys == null ? '' : row.ptys) + '>' + (row.ptys == null ? '' : row.ptys) + '</span>';
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
        hsbrhx: function (option) {
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
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
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
                field: 'jyyy',
                title: '就医原因',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jyyy == null ? '' : row.jyyy) + '>' + (row.jyyy == null ? '' : row.jyyy) + '</span>';
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
                field: 'brhshxqk',
                title: '病人回所后续情况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.brhshxqk == null ? '' : row.brhshxqk) + '>' + (row.brhshxqk == null ? '' : row.brhshxqk) + '</span>';
                }
            }
            ];
            return clumns;
        },
        //就诊辅助检查资料
        gayyjzfzjczl: function (option) {
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
                field: 'csjy',
                title: '出所就医(公安医院)',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.csjy == null ? '' : row.csjy) + '>' + (row.csjy == null ? '' : row.csjy) + '</span>';
                }
            },
            {
                field: 'snfzjc',
                title: '所内辅助检查',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.snfzjc == null ? '' : row.snfzjc) + '>' + (row.snfzjc == null ? '' : row.snfzjc) + '</span>';
                }
            }
            ];
            return clumns;
        },
        csjydj: function (option) {
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
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
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
                field: 'jysj',
                title: '就医时间',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jysj == null ? '' : row.jysj) + '>' + (row.jysj == null ? '' : row.jysj) + '</span>';
                }
            },
            {
                field: 'jydd',
                title: '就医地点',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jydd == null ? '' : row.jydd) + '>' + (row.jydd == null ? '' : row.jydd) + '</span>';
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
                field: 'snfzjczl',
                title: '所内辅助检查资料',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.snfzjczl == null ? '' : row.snfzjczl) + '>' + (row.snfzjczl == null ? '' : row.snfzjczl) + '</span>';
                }
            }
            ];
            return clumns;
        },
        snfzjcdj: function (option) {
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
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
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
                field: 'jclx',
                title: '检查类型',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jclx == null ? '' : row.jclx) + '>' + (row.jclx == null ? '' : row.jclx) + '</span>';
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
                field: 'jcys',
                title: '检查医生',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jcys == null ? '' : row.jcys) + '>' + (row.jcys == null ? '' : row.jcys) + '</span>';
                }
            },
            {
                field: 'jkzk',
                title: '健康状况',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.jkzk == null ? '' : row.jkzk) + '>' + (row.jkzk == null ? '' : row.jkzk) + '</span>';
                }
            },
            {
                field: 'snfzjczl',
                title: '所内辅助检查资料',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.snfzjczl == null ? '' : row.snfzjczl) + '>' + (row.snfzjczl == null ? '' : row.snfzjczl) + '</span>';
                }
            }
            ];
            return clumns;
        },
        //监所医务人员管理
        jsywrygl: function (option) {
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
                field: 'ys',
                title: '医生',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ys == null ? '' : row.ys) + '>' + (row.ys == null ? '' : row.ys) + '</span>';
                }
            },
            {
                field: 'hs',
                title: '护士',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.hs == null ? '' : row.hs) + '>' + (row.hs == null ? '' : row.hs) + '</span>';
                }
            }
            ];
            return clumns;
        },
        ywryxx: function (option) {
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
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
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
                field: 'csrq',
                title: '出生日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.csrq == null ? '' : row.csrq) + '>' + (row.csrq == null ? '' : row.csrq) + '</span>';
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
                field: 'zc',
                title: '职称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zc == null ? '' : row.zc) + '>' + (row.zc == null ? '' : row.zc) + '</span>';
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
        ywrydhsq: function (option) {
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
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
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
                field: 'csrq',
                title: '出生日期',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.csrq == null ? '' : row.csrq) + '>' + (row.csrq == null ? '' : row.csrq) + '</span>';
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
                field: 'zc',
                title: '职称',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.zc == null ? '' : row.zc) + '>' + (row.zc == null ? '' : row.zc) + '</span>';
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
        zdsp: function (option) {
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
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
                }
            },
            {
                field: 'xgzjs',
                title: '现工作监所',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xgzjs == null ? '' : row.xgzjs) + '>' + (row.xgzjs == null ? '' : row.xgzjs) + '</span>';
                }
            },
            {
                field: 'xzw',
                title: '现职位',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xzw == null ? '' : row.xzw) + '>' + (row.xzw == null ? '' : row.xzw) + '</span>';
                }
            },
            {
                field: 'ddhjs',
                title: '待调换监所',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ddhjs == null ? '' : row.ddhjs) + '>' + (row.ddhjs == null ? '' : row.ddhjs) + '</span>';
                }
            },
            {
                field: 'ddhzw',
                title: '待调换职位',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ddhzw == null ? '' : row.ddhzw) + '>' + (row.ddhzw == null ? '' : row.ddhzw) + '</span>';
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
            }
            ];
            return clumns;
        },
        ywrydh: function (option) {
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
                field: 'xb',
                title: '性别',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
                }
            },
            {
                field: 'xgzjs',
                title: '现工作监所',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xgzjs == null ? '' : row.xgzjs) + '>' + (row.xgzjs == null ? '' : row.xgzjs) + '</span>';
                }
            },
            {
                field: 'xzw',
                title: '现职位',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.xzw == null ? '' : row.xzw) + '>' + (row.xzw == null ? '' : row.xzw) + '</span>';
                }
            },
            {
                field: 'ddhjs',
                title: '待调换监所',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ddhjs == null ? '' : row.ddhjs) + '>' + (row.ddhjs == null ? '' : row.ddhjs) + '</span>';
                }
            },
            {
                field: 'ddhzw',
                title: '待调换职位',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ddhzw == null ? '' : row.ddhzw) + '>' + (row.ddhzw == null ? '' : row.ddhzw) + '</span>';
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
                field: 'ldyj',
                title: '领导意见',
                align: 'center',
                width: 150,
                formatter: function (value, row) {
                    return '<span title=' + (row.ldyj == null ? '' : row.ldyj) + '>' + (row.ldyj == null ? '' : row.ldyj) + '</span>';
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


    };
});