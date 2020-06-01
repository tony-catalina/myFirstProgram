module.exports = {
    url: '/jls/ywwsfy',
    method: 'post',
    result: function (req, res) {
        const Mock = res.Mock
        // url 参数通过req.params获取，?xxx=xx参数通过req.query获取
        res.send(Mock.mock({
            code: 0,
            msg: "查询成功",
            result: {
                total: "1",
                rows: {
                    "xdry": "@cname",
                    "xdrq": "@datetime",
                    "xdffString":"@ctitle(10)",
                }
            },
            success: true
        }));
    }
};
