module.exports = {
    url: '/jls/mjdrjxkh',
    method: 'post',
    result: function (req, res) {
        const Mock = res.Mock
        const json = res.require('./jls/json/mjdrjxkh.json')
        // url 参数通过req.params获取，?xxx=xx参数通过req.query获取
        res.send(Mock.mock(json));
    }
};