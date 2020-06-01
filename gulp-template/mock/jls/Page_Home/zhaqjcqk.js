module.exports = {
    url: '/jls/zhaqjcqk',
    method: 'post',
    result: function (req, res) {
        const Mock = res.Mock
        // url 参数通过req.params获取，?xxx=xx参数通过req.query获取
        res.send(Mock.mock({
            "jcsj": "@datetime",
            "jcr": "@cname",
            "jcjl": "@ctitle(8)"
        }));
    }
};
