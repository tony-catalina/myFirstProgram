module.exports = {
    url: '/jls/zhjszc',
    method: 'post',
    result: function (req, res) {
        const Mock = res.Mock
        // url 参数通过req.params获取，?xxx=xx参数通过req.query获取
        res.send(Mock.mock({
            code: 0,
            msg: "查询成功",
            result: {"clgl|1-100": 0, "dsjy|1-100": 0, "txzh|1-100": 0, "ejjk|1-100": 0},
            success: true
        }));
    }
};
