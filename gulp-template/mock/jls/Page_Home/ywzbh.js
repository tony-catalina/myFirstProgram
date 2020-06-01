module.exports = {
    url: '/jls/ywzbh',
    method: 'post',
    result: function (req, res) {
        const Mock = res.Mock
        // url 参数通过req.params获取，?xxx=xx参数通过req.query获取
        res.send(Mock.mock({
            code: 0,
            msg: "查询成功",
            result: {"zbh|1-1000": 0, "ptbh|1-1000": 0, "zyry|1-1000": 0},
            success: true
        }));
    }
};
