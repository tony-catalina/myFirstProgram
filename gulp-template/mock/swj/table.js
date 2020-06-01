module.exports = {
    url: '/table/query',
    method: 'get',
    result: function (req, res) {
        const Mock = res.Mock
        const json = res.require('./json/d.json')
        res.send(Mock.mock(json));
    }
}
