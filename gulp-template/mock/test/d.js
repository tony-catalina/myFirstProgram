module.exports = {
    url: '/test/d/:id',
    method: 'get',
    result: function (req, res) {
        const Mock = res.Mock
        const json = res.require('./json/d.json')
        // url 参数通过req.params获取，?xxx=xx参数通过req.query获取
        if (req.params.id === '1') {
            // res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true });
            res.send({
                "msg": "获取用户" + req.params.id + "信息成功"
            });
        } else {
            res.send(Mock.mock(json));
        }
    }
}