module.exports = {
	    url: '/jds/datagrid/txjl',
	    method: 'get',
	    result: function (req, res) {
	        const Mock = res.Mock
	        const json = res.require('./json/jds.txjl.datagrid.json')
	        // url 参数通过req.params获取，?xxx=xx参数通过req.query获取
	        res.send(Mock.mock(json));
	    }
	}