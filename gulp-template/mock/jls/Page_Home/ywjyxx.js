module.exports = {
    url: '/jls/ywjyxx',
    method: 'post',
    result: function (req, res) {
        const Mock = res.Mock
        // url 参数通过req.params获取，?xxx=xx参数通过req.query获取
        res.send(Mock.mock({
            code: 0,
            msg: "查询成功",
            result: {"swjy|1-100": 0, "snjy|1-100": 0, "djy|1-100": 0, "dgc|1-100": 0},
            success: true
        }));
    }
};
