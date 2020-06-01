module.exports = {
	    url: '/jds/datagrid/bfgl',
	    method: 'get',
	    result: function (req, res) {
	        const Mock = res.Mock
	        const json = res.require('./json/jds.bfgl.datagrid.json')
	        // url 参数通过req.params获取，?xxx=xx参数通过req.query获取
	        res.send(Mock.mock(json));
	    }
	}