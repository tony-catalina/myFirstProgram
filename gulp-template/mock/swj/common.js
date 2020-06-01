module.exports = {
    url: '/swj/common/get',
    method: 'get',
    result: function (req, res) {
        const Mock = res.Mock
        const json = res.require('./json/swj.common.json')
        res.send(Mock.mock(json));
    }
}
module.exports = {
    url: '/swj/common/sjzl',
    method: 'get',
    result: function (req, res) {
        const Mock = res.Mock
        const json = res.require('./json/swj.sjzl.json')
        res.send(Mock.mock(json));
    }
}

module.exports = {
    url: '/swj/common/count',
    method: 'get',
    result: function (req, res) {
        const Mock = res.Mock
        const json = res.require('./json/swj.count.json')
        res.send(Mock.mock(json));
    }
}

