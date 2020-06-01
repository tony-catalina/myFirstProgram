define(function () {
    'use strict';
    return {
        sjzl: function () {
            return [
                {
                    field: '',
                    title: '序号',
                    align: 'center',
                    width: 50,
                    hidden: false,
                    checkbox: true,
                },
                {
                    field: 'jsbhString',
                    title: '监所名称',
                    align: 'center',
                    width: 100,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                    }
                },
                {
                    field: 'dddx',
                    title: '数据量',
                    align: 'center',
                    width: 200,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.sjl == null ? '' : row.sjl) + '>' + (row.sjl == null ? '' : row.sjl) + '</span>';
                    }
                },
                {
                    field: 'ddnr',
                    title: '不合格数',
                    align: 'center',
                    width: 200,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.bhg == null ? '' : row.bhg) + '>' + (row.bhg == null ? '' : row.bhg) + '</span>';
                    }
                },
                {
                    field: 'ddsj',
                    title: '合格率',
                    align: 'center',
                    width: 200,
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.hgl == null ? '' : row.hgl) + '>' + (row.hgl == null ? '' : row.hgl) + '</span>';
                    }
                }
            ];
        },
        sjjsx: function () {
            return [
                {
                    field: '',
                    title: '',
                    align: 'center',
                    width: '10%',
                    hidden: false,
                    checkbox: true,
                },
                {
                    field: 'jsbhString',
                    title: '监所名称',
                    align: 'center',
                    width: '19%',
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                    }
                },
                {
                    field: 'sjl',
                    title: '表名称',
                    align: 'center',
                    width: '20%',
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.sjl == null ? '' : row.sjl) + '>' + (row.sjl == null ? '' : row.sjl) + '</span>';
                    }
                },
                {
                    field: 'sjl',
                    title: '数据量',
                    align: 'center',
                    width: '20%',
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.sjl == null ? '' : row.sjl) + '>' + (row.sjl == null ? '' : row.sjl) + '</span>';
                    }
                },
                {
                    field: 'bhg',
                    title: '不及时量',
                    align: 'center',
                    width: '20%',
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.bhg == null ? '' : row.bhg) + '>' + (row.bhg == null ? '' : row.bhg) + '</span>';
                    }
                },
                {
                    field: 'hgl',
                    title: '及时率',
                    align: 'center',
                    width: '20%',
                    hidden: false,
                    formatter: function (value, row) {
                        return '<span title=' + (row.hgl == null ? '' : row.hgl) + '>' + (row.hgl == null ? '' : row.hgl) + '</span>';
                    }
                }
            ];
        },
        mjzf: function () {
            return [{
                field: '',
                title: '序号',
                align: 'center',
                width: 300,
                hidden: false,
                checkbox: true,
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
        jcdd: function (multil) {
            return [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
            }, {
                field: 'jsbhString',
                title: '监所名称',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                }
            },
            {
                field: 'dddx',
                title: '督导对象',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.dddx == null ? '' : row.dddx) + '>' + (row.dddx == null ? '' : row.dddx) + '</span>';
                }
            },
            {
                field: 'ddnr',
                title: '督导内容',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.ddnr == null ? '' : row.ddnr) + '>' + (row.ddnr == null ? '' : row.ddnr) + '</span>';
                }
            },
            {
                field: 'ddsj',
                title: '督导时间',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.ddsj == null ? '' : row.ddsj) + '>' + (row.ddsj == null ? '' : row.ddsj) + '</span>';
                }
            },
            {
                field: 'hfsj',
                title: '回复时间',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.hfsj == null ? '' : row.hfsj) + '>' + (row.hfsj == null ? '' : row.hfsj) + '</span>';
                }
            },
            {
                field: 'zgfk',
                title: '整改反馈',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.zgfk == null ? '' : row.zgfk) + '>' + (row.zgfk == null ? '' : row.zgfk) + '</span>';
                }
            }
            ];
        },
        gwgl: function (multil) {
            return [{
                field: 'ooid',
                title: '单选',
                align: 'center',
                formatter: function (value, rowData, rowIndex) {
                    return '<input type="radio" name="ryRadio" class="ryRadio" id="ryRadio"' + rowIndex + 'value="' + rowData.ooid + '" />';
                }
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
                field: 'gwmc',
                title: '公文名称',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.gwmc == null ? '' : row.gwmc) + '>' + (row.gwmc == null ? '' : row.gwmc) + '</span>';
                }
            },
            {
                field: 'gwnr',
                title: '公文内容',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.gwnr == null ? '' : row.gwnr) + '>' + (row.gwnr == null ? '' : row.gwnr) + '</span>';
                }
            },
            {
                field: 'fssj',
                title: '发送时间',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.fssj == null ? '' : row.fssj) + '>' + (row.fssj == null ? '' : row.fssj) + '</span>';
                }
            },
            {
                field: 'fsr',
                title: '发送人',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.fsr == null ? '' : row.fsr) + '>' + (row.fsr == null ? '' : row.fsr) + '</span>';
                }
            }
            ];
        },
        xxgl: function (multil) {
            return [{
                field: '',
                title: '序号',
                align: 'center',
                width: 300,
                hidden: false,
                checkbox: true,
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
                field: 'xxmc',
                title: '消息名称',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.xxmc == null ? '' : row.xxmc) + '>' + (row.xxmc == null ? '' : row.xxmc) + '</span>';
                }
            },
            {
                field: 'xxnr',
                title: '消息内容',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.xxnr == null ? '' : row.xxnr) + '>' + (row.xxnr == null ? '' : row.xxnr) + '</span>';
                }
            },
            {
                field: 'fssj',
                title: '发送时间',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.fssj == null ? '' : row.fssj) + '>' + (row.fssj == null ? '' : row.ddsj) + '</span>';
                }
            },
            {
                field: 'fsr',
                title: '发送人',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.fsr == null ? '' : row.fsr) + '>' + (row.fsr == null ? '' : row.fsr) + '</span>';
                }
            },
            {
                field: 'fsbm',
                title: '发送部门',
                align: 'center',
                width: 100,
                hidden: false,
                formatter: function (value, row) {
                    return '<span title=' + (row.fsbm == null ? '' : row.fsbm) + '>' + (row.fsbm == null ? '' : row.fsbm) + '</span>';
                }
            }
            ];
        }
    };
});