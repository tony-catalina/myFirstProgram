module.exports = {
    url: '/jls/zhjxgl',
    method: 'post',
    result: function (req, res) {
        const Mock = res.Mock
        // url 参数通过req.params获取，?xxx=xx参数通过req.query获取
        res.send(Mock.mock({
            code: 0,
            msg: "查询成功",
            result: {"shyp|1-100": 0, "xsyp|1-100": 0, "gjyp|1-100": 0, "zw|1-100": 0, "qtyp|1-100": 0},
            success: true
        }));
    }
};
