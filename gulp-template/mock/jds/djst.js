module.exports = {
    url: '/jds/datagrid/list',
    method: 'get',
    result: function (req, res) {
        const Mock = res.Mock
        const json = res.require('./json/jds.djst.datagrid.json')

        // 若 rows 为 0 则返回所有数据，否则返回指定页数的数据
        let rows = Math.max(+req.query.rows, 0) || 0;
        let page = Math.max(+req.query.page, 1) || 1;
        let pageData = rows === 0 ? json : json.slice((page - 1) * rows, page * rows);

        res.send(Mock.mock({ total: json.length, rows: pageData }));
    }
}


