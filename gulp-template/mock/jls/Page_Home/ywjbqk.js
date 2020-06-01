module.exports = {
    url: '/jls/ywjbqk',
    method: 'post',
    result: function (req, res) {
        const Mock = res.Mock
        // url 参数通过req.params获取，?xxx=xx参数通过req.query获取
        res.send(Mock.mock({
            code: 0,
            msg: "查询成功",
            result: {
                result: {
                    "xzb|1-100": 0,
                    "gxy|1-100": 0,
                    "tnb|1-100": 0,
                    "ptgm|1-100": 0,    
                    "crxjb|1-100": 0,
                    "zdjb|1-100": 0
                }
            },
            success: true
        }));
    }
};
