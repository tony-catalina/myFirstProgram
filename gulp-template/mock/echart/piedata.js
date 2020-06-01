module.exports = {
    url: '/echart/piedata',
    method: 'post',
    result: function (req, res) {
        const Mock = res.Mock
        const json = res.require('./json/echart.pie.data.json')
        // url 参数通过req.params获取，?xxx=xx参数通过req.query获取
        res.send(Mock.mock(json));
    }
}