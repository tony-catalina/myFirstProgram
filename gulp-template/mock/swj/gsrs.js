module.exports = {
    url: '/swj/xsrs/data',
    method: 'get',
    result: function (req, res) {
        const Mock = res.Mock
        const json = res.require('./json/swj.xsrs.json')
        res.send(Mock.mock(json));
    }
}