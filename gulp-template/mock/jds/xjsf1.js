module.exports = {
    url: '/jds/datagrid/xjsf1',
    method: 'get',
    result: function (req, res) {
        const Mock = res.Mock
        const json = res.require('./json/jds.xjsf1.datagrid.json')
        // url 参数通过req.params获取，?xxx=xx参数通过req.query获取
        res.send(Mock.mock(json));
    }
}

/*
module.exports = {
    url: '/jds/datagrid/xjsf2',
    method: 'get',
    result: function (req, res) {
        const Mock = res.Mock
        const json = res.require('./json/jds.xjsf2.datagrid.json')
        // url 参数通过req.params获取，?xxx=xx参数通过req.query获取
        res.send(Mock.mock(json));
    }
}*/
