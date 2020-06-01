module.exports = {
    url: '/test/c',
    method: 'post',
    contentType: 'multipart/form-data',
    result: function (req, res) {
        // POST方法req.body获取请求信息
        if (req.body.name === 'admin' && req.body.password === 'admin') {
            res.send({
                "msg": "登录成功！",
                "code": 0,
                "authorization": "fdjflsjflfds4f5df5s4f5d4f5s"
            });
        } else {
            res.send({
                "msg": "账号或者密码错误！",
                "code": 1
            });
        }
    }
}