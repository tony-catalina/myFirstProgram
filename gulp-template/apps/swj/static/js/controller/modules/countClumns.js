define(function () {
    'use strict';
    return {
        clumns: function () {
            return [
                {
                    field: 'jsbhString',
                    title: '监所名称',
                    width: 300,
                    hidden: false,
                    sortable: 'true',
                    formatter: function (value, row) {
                        return '<span title=' + (row.jsbhString == null ? '' : row.jsbhString) + '>' + (row.jsbhString == null ? '' : row.jsbhString) + '</span>';
                    }
                },
                {
                    field: 'count',
                    title: '统计数量',
                    width: 200,
                    hidden: false,
                    sortable: 'false',
                    formatter: function (value, row) {
                        return '<span title=' + (row.count == null ? '' : row.count) + '>' + (row.count == null ? '' : row.count) + '</span>';
                    }
                }
            ];
        }
    };
});