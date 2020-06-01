define(function () {
	'use strict';
	var product = false;
	var main = {
		getMenus: (product ? '' : '/mock/jls') + '/menus/list',
		jsComboxTree: (product ? '' : '/jls') + '/jls_jq/getJqCombotree?sort=jqh&order=asc',
		jsBySexComboxTree: (product ? '' : '/jls') + '/jls_js/jsCombotree?sort=jqh&order=asc',
		jbxxList: (product ? '' : '/jls') + '/jbxx/list',
		xyrList: (product ? '' : '/jls') + '/xyr/list',
		processTaskList: (product ? '' : '/jls') + '/jls_process/getProcessTaskList',
		getProcessTaskList: (product ? '' : '/jls') + '/jls_process/getProcessTaskList',
		listByPhoto: (product ? '' : '/jls')+'/jbxx/listByPhoto',
		jbxxUpdate: (product ? '' : '/jls')+'/jbxx/update',

		//字典查询
		getDictionary: (product ? '' : '/jls') + '/jls_dictionary/getDictionary',
		getDictionaryPage: (product ? '' : '/jls') + '/jls_dictionary/getDictionaryPage', //律师单位
		//出入所
		//社会关系
		shgxList2jbxx: (product ? '' : '/jls') + '/shgx/list2jbxx',
		shgxList: (product ? '' : '/jls') + '/shgx/list',
		shgxSave: (product ? '' : '/jls') + '/shgx/saveorupdate',
		clcslist: (product ? '' : '/jls') +'/clcs/list',

		//正常入所
		zcrsCount: (product ? '' : '/jls') + '/jbxx/ZcrsCount',
		saveByZcrs: (product ? '' : '/jls') + '/xyr/saveByZcrs',
		xyrSaveByJypz: (product ? '' : '/jls') + '/xyr/xyrSaveByJypz',
		xyrSave: (product ? '' : '/jls') +'/xyr/xyrSave',
		wpglSaveByZrs: (product ? '' : '/jls') +'/jbxx/wpglSaveByZrs',
		noFwdjFlow: (product ? '' : '/jls') +'/xyr/noFwdjFlow',
		//请假回所
		qjhsList2jbxx: (product ? '' : '/jls') + '/qjhs/list2jbxx',
		qjhsYwtz: (product ? '' : '/jls') + '/qjhs/list2Byywtz',
		qjhsFwdj: (product ? '' : '/jls') + '/qjhs/wpglSave',
		qjhsHsdj: (product ? '' : '/jls') + '/qjhs/qjhsHsdj',
		//期满出所
		qmcsYwdt: (product ? '' : '/jls') + '/qmcs/qmcsYwdt',
		qmcsList2jbxx: (product ? '' : '/jls') + '/qmcs/list2jbxx',
		qmcsFwfh: (product ? '' : '/jls') + '/qmcs/plFlowwpgl',
		qmcswpglList: (product ? '' : '/jls') + '/jls_wpgl/wpglList',
		qmcsZxflow: (product ? '' : '/jls') + '/qmcs/qmcsZxflow',
		qmcsGjhd: (product ? '' : '/jls') +'/qmcs/qmcsGjhd',
		qmcsClcsSpAdd: (product ? '' : '/jls') +'/qmcs/clcsSpAdd',
		//提前解除
		tqjcSave: (product ? '' : '/jls') + '/tqjc/save',

		tqjcYwdt: (product ? '' : '/jls') + '/tqjc/tqjcYwdt',
		tqjcList2jvxx: (product ? '' : '/jls') + '/tqjc/list2jbxx',
		tqjcWpglList: (product ? '' : '/jls') + '/jls_wpgl/wpglList',
		tqjcGjyj: (product ? '' : '/jls') + '/tqjc/tqjcGjyj',
		tqjcJzSzFgsh:(product ? '' : '/jls') +'/tqjc/tqjcJzyj',//提前解除 警组、领导、分管领导审批
		tqjcDjlsSave: (product ? '' : '/jls') + '/tqjc/tqjcDjls',//提前解除 登记离所
		tqjcaddFlowWfwth: (product ? '' : '/jls') +'/tqjc/tqjcFwth',//提前解除 附物退还
		//快速入所
		ksrsSave: (product ? '' : '/jls') +'/xyr/ksrsSave',
		ksrsLdspAdd: (product ? '' : '/jls') +'/jbxx/ldspAdd',
		xyrSaveAsLycl: (product ? '' : '/jls') +'/xyr/xyrSaveAsLycl',
		zcrssaveForRsdj: (product ? '' : '/jls') +'/jbxx/saveForRsdj',
		
		//变更处理
		bgclList: (product ? '' : '/jls') + '/bgcl/list',
		bgclList2jbxx: (product ? '' : '/jls') + '/bgcl/list2jbxx',


		bgclGjhd: (product ? '' : '/jls') +'/bgcl/bgclGjhd',
		bgclplFlow: (product ? '' : '/jls') +'/bgcl/plFlowwpgl',
		clcsSpAdd:(product ? '' : '/jls') +'/bgcl/clcsSpAdd',
		bgclZxflow:(product ? '' : '/jls') +'/bgcl/bgclZxflow',
		bgclSave:(product ? '' : '/jls') +'/bgcl/save',
		bgclLs:(product ? '' : '/jls') +'/bgcl/bjcsLs',
		bglcplFlowwpgl: (product ? '' : '/jls') +'/bgcl/plFlowwpgl',
		bgcladdFlowWfwth: (product ? '' : '/jls') +'/bgcl/addFlowWfwth',
		//请假回所
		qjhsDrjs: (product ? '' : '/jls')+'/qjhs/qjhsDrjs',
		qjhsJkqkSave: (product ? '' : '/jls')+'/jkqk/save',
		//请假出所
		dqwgList: (product ? '' : '/jls') + '/qjcs/dqwgList',
		qjcsDqwgclUpdate: (product ? '' : '/jls') + '/qjcs/update',
		qjcsList2jbxx: (product ? '' : '/jls') + '/qjcs/list2jbxx',
		qjcsYwdt: (product ? '' : '/jls') + '/qjcs/qjcsYwdt',
		wpglList: (product ? '' : '/jls') + '/jls_wpgl/wpglList',
		qjcsSqdb: (product ? '' : '/jls') + '/qjcs/qjcsSqdb',
		qjcsCwfh: (product ? '' : '/jls') + '/qjcs/addFlowWfwth',
		Cwfh: (product ? '' : '/jls') + '/qjcs/addFlowWfwth',
		qjcsLsdj: (product ? '' : '/jls') + '/qjcs/qjcsZxflow',
		qjcsSpAdd: (product ? '' : '/jls') + '/qjcs/qjcsSpAdd',
		//临时离所
		lscsList: (product ? '' : '/jls') + '/lscs/list',
		lscsList2jbxx: (product ? '' : '/jls') + '/lscs/list2jbxx',
		lscsZxflow: (product ? '' : '/jls') +'/lscs/lscsZxflow',
		lscsSaveZjhd: (product ? '' : '/jls') +'/lscs/saveZjhd',

		//窗口服务
		//亲属会见
		jshjYwdt: (product ? '' : '/jls') + '/jshj/listByywdt',
		jshjList2jbxx: (product ? '' : '/jls') + '/jshj/list2jbxx',
		AphjAndHbdjByJshj: (product ? '' : '/jls') +'/jshj/AphjAndHbdjByJshj',
		qshjaddflow: (product ? '' : '/jls') +'/jshj/qshjaddflow',
		ldspByJshj: (product ? '' : '/jls') +'/jshj/ldspByJshj',

		//律师会见
		lshjList: (product ? '' : '/jls') + '/lshj/list',
		lshjList2jbxx: (product ? '' : '/jls') + '/lshj/list2jbxx',
		lshjsaveByJqtrAndAqjc: (product ? '' : '/jls') + '/lshj/saveByJqtrAndAqjc',
		lshjaddflow: (product ? '' : '/jls') + '/lshj/lshjaddflow',
		lshjSaveByDjcpAndJqtr: (product ? '' : '/jls') +'/lshj/saveByDjcpAndJqtr',
		//外来人员登记
		wlrydjList: (product ? '' : '/jls') + '/wlrydj/list',
		wlrydjCount: (product ? '' : '/jls') + '/wlrydj/WlrydjCount',
		wlrydjSave: (product ? '' : '/jls') + '/wlrydj/save',
		//领导接访
		szjdjllist: (product ? '' : '/jls') + '/szjdjl/list',
		szjdjlCount: (product ? '' : '/jls') + '/szjdjl/szjdjlCount',
		ldjfSave: (product ? '' : '/jls') +'/szjdjl/save',
		ldjfUpdate: (product ? '' : '/jls') +'/szjdjl/update',
		//检查视察
		scqkList: (product ? '' : '/jls') + '/scqk/list',
		listByscdb: (product ? '' : '/jls') + '/scqk/listByscdb',
		scqkCount: (product ? '' : '/jls') + '/scqk/scqkCount',
		scqkUpdate: (product ? '' : '/jls') + '/scqk/update',
		scqkSave: (product ? '' : '/jls') +'/scqk/save',
		//提讯
		tsdjAndJbxxList: (product ? '' : '/jls') + '/tsdj/tsdjAndJbxxList',
		xwdjSave: (product ? '' : '/jls') + '/tsdj/xwdjSave',
		aptxSave: (product ? '' : '/jls') + '/tsdj/aptxSave',
		djcpSave: (product ? '' : '/jls') + '/tsdj/djcpSave',
		hdpzSave: (product ? '' : '/jls') + '/tsdj/hdpzSave',
		szyjSave: (product ? '' : '/jls') + '/tsdj/szyjSave',
		tqjcFwfhplFlowwpgl: (product ? '' : '/jls') + '/tqjcFwfh/plFlowwpgl',
		jbxxgz:(product ? '' : '/jls') + '/jbxx/gz',
		jbxxOutRsdj: (product ? '' : '/jls') + '/jbxx/OutRsdj',
		//送物
		wpjsCount: (product ? '' : '/jls') + '/wpjs/wpjsCount',
		wpjsList2jbxx: (product ? '' : '/jls') + '/wpjs/list2jbxx',
		wpjslist:	(product ? '' : '/jls') + '/wpjs/list',
		saveSwjs: (product ? '' : '/jls') +'/wpjs/saveSwjs',
		pfwpSave: (product ? '' : '/jls') +'/wpjs/pfwpSave',
		songwdjSave: (product ? '' : '/jls') +'/wpjs/swdjSave',
		//对外开放
		dwkfList: (product ? '' : '/jls') + '/dwkf/list',
		dwkfCount: (product ? '' : '/jls') + '/dwkf/dwkfCount',
		dwkfSaveBySzyj: (product ? '' : '/jls') + '/dwkf/saveBySzyj',
		saveBySqdj: (product ? '' : '/jls') + '/dwkf/saveBySqdj',
		//亲情电话
		qqdhdt: (product ? '' : '/jls') + '/txth/qqdhdt',
		qqdhList2jbxx: (product ? '' : '/jls') + '/txth/list2jbxx',
		qqdhSaveByGjcp: (product ? '' : '/jls') +'/txth/saveByGjcp',
		qqdhSldyjSave: (product ? '' : '/jls') +'/txth/sldyjsave',
		xyrgetDabh: (product ? '' : '/jls') +'/xyr/getDabh',

		//信息维护
		//信息发布
		xxfbList: (product ? '' : '/jls') + '/xxfb/list',
		xxfbSave: (product ? '' : '/jls') + '/xxfb/save',
		//CCIC维护
		ccicwhList: (product ? '' : '/jls') + '/ccicwh/list',
		//CCIC查询
		ccicList: (product ? '' : '/jls') + '/ccic/list',
		//临控人员维护
		lkrywhList: (product ? '' : '/jls') + '/lkrywh/list',
		lkrywhSave: (product ? '' : '/jls') + '/lkrywh/save',
		//法律手续变更
		flsxbgList2jbxx: (product ? '' : '/jls') + '/flsxbg/list2jbxx',
		flsxbgSave: (product ? '' : '/jls') + '/flsxbg/save',

		//值班管理
		//巡视情况登记
		xsjlList: (product ? '' : '/jls') + '/xsjl/list',
		xsjlSave:(product ? '' : '/jls') +'/xsjl/save',
		xsjlUpdate:(product ? '' : '/jls') +'/xsjl/update',
		//总交接班
		jbjlList: (product ? '' : '/jls') + '/jbjl/list',
		zjjbJbldqr:(product ? '' : '/jls') + '/jbjl/saveByJb',
		saveByJbdj: (product ? '' : '/jls') + '/jbjl/saveByJbdj',
		jbjlJbdj: (product ? '' : '/jls') + '/jbjl/jbdj',
		jbjlSaveByJb: (product ? '' : '/jls') + '/jbjl/saveByJb',


		//岗位交接班
		gwjjbList: (product ? '' : '/jls') + '/gwjjb/list',
		gwjjbSave: (product ? '' : '/jls') +'/gwjjb/save',
		gwjjbUpdate: (product ? '' : '/jls') +'/gwjjb/update',

		//拘室调整
		jstzaddflow:(product ? '' : '/jls') + '/jstz/jstzaddflow',
		//奖励管理
		jcjlList: (product ? '' : '/jls') + '/jcjl/list',
		jcjlList2jbxx: (product ? '' : '/jls') + '/jcjl/list2jbxx',
		jcjlByJzyjAndQk: (product ? '' : '/jls') + '/jcjl/jcjlByJzyjAndQk',
		jcjladdflow: (product ? '' : '/jls') +'/jcjl/jcjladdflow',

		//衣服号管理
		yfhglSaveAndJbxx: (product ? '' : '/jls') +'/yfhgl/saveAndJbxx',

		//心理咨询
		xlzxSave: (product ? '' : '/jls') + '/xlzx/save',
		xlzxList2jbxx: (product ? '' : '/jls') + '/xlzx/list2jbxx',
		xlzxUpdate: (product ? '' : '/jls') + '/xlzx/update',
		xlzxCount: (product ? '' : '/jls') + '/xlzx/xlzxCount',

		//卫生防疫
		wsfyList: (product ? '' : '/jls') + '/wsfy/list',
		wsfyCount: (product ? '' : '/jls') + '/wsfy/wsfyCount',
		wsfySave: (product ? '' : '/jls') + '/wsfy/save',

		//文明评比
		wmpbList: (product ? '' : '/jls') + '/wmpb/list',
		wmpbList2jbxx: (product ? '' : '/jls') + '/wmpb/list2jbxx',
		wmpbCount: (product ? '' : '/jls') +'/wmpb/wmpbCount',
		//深挖犯罪
		swfzList2jbxx: (product ? '' : '/jls') + '/swfz/list2jbxx',
		swfzCount: (product ? '' : '/jls') + '/swfz/swfzCount',
		swfzExecuteflow: (product ? '' : '/jls') + '/swfz/swfzExecuteflow',
		swfzaddflow: (product ? '' : '/jls') + '/swfz/swfzaddflow',
		//照片管理
		ryzpglSave: (product ? '' : '/jls') + '/ryzpgl/save',

		//所内就医
		snjyaddfolw: (product ? '' : '/jls') + '/snjy/snjyaddfolw',
		snjyexecutefolw: (product ? '' : '/jls') + '/snjy/snjyexecutefolw',
		snjyList: (product ? '' : '/jls') + '/snjy/list2jbxx',
		snjyCount: (product ? '' : '/jls') + '/snjy/snjyCount',

		//所外就医
		swjyaddflow: (product ? '' : '/jls') + '/swjy/swjyaddflow',
		swjyexecuteflow: (product ? '' : '/jls') + '/swjy/swjyexecuteflow',
		swjyCount: (product ? '' : '/jls') + '/swjy/swjyCount',
		swjyList: (product ? '' : '/jls') + '/swjy/list2jbxx',

		//医生巡诊
		ysxzList: (product ? '' : '/jls') + '/ysxz/list2jbxx',
		ysxzSave: (product ? '' : '/jls') + '/ysxz/save',
		ysxzCount: (product ? '' : '/jls') + '/ysxz/ysxzCount',

		//死亡登记
		swdjSave: (product ? '' : '/jls') + '/swdj/save',
		sqblList: (product ? '' : '/jls') + '/sqbl/list2jbxx',

		//伤情补录
		sqblSave: (product ? '' : '/jls') + '/sqbl/save',
		swdjList: (product ? '' : '/jls') + '/swdj/list2jbxx',
		swdjUpdate: (product ? '' : '/jls') + '/swdj/update',

		//重病号登记
		zbhdjSave: (product ? '' : '/jls') + '/zbhdj/saveAndJbxx',
		zbhdjUpdate: (product ? '' : '/jls') + '/zbhdj/saveAndUpdate',
		zbhdjList: (product ? '' : '/jls') + '/zbhdj/list2jbxx',
		zbhdjlist: (product ? '' : '/jls') + '/zbhdj/list',
		zbhdjCount: (product ? '' : '/jls') + '/zbhdj/zbhdjCount',

		//械具使用
		jjCount: (product ? '' : '/jls') + '/jj/jjCount',
		jjList2jbxx: (product ? '' : '/jls') + '/jj/list2jbxx',


		jjaddflow: (product ? '' : '/jls') + '/jj/jjaddflow',
		jjycAndjcByLdsp: (product ? '' : '/jls') +'/jj/jjycAndjcByLdsp',
		jjList: (product ? '' : '/jls') +'/jj/list',
		jjExecuteflow: (product ? '' : '/jls') +'/jj/jjExecuteflow',
		jjycAndjc: (product ? '' : '/jls') +'/jj/jjycAndjc',


		//信件管理
		xjglList: (product ? '' : '/jls') + '/xjgl/list',
		xjglList2jbxx: (product ? '' : '/jls') + '/xjgl/list2jbxx',
		xjgladdflow: (product ? '' : '/jls') + '/xjgl/xjgladdflow',
		ecuteflow: (product ? '' : '/jls') + '/xjgl/xjglexecuteflow',

		//申诉复议
		ssfyListJbxx: (product ? '' : '/jls') + '/ssfy/list_jbxx',
		ssfySave: (product ? '' : '/jls') + '/ssfy/save',
		ssfyUpdate: (product ? '' : '/jls') + '/ssfy/update',

		//安全信息员管理
		emCount: (product ? '' : '/jls') + '/emdj/emCount',
		emdjList: (product ? '' : '/jls') + '/emdj/list',
		emdjExecuteflow: (product ? '' : '/jls') + '/emdj/emdjExecuteflow',
		emdjAndXxygl: (product ? '' : '/jls') + '/emdj/emdjAndXxygl',
		emdjaddflow: (product ? '' : '/jls') + '/emdj/emdjaddflow',

		//人力情报线索
		xsdjCount: (product ? '' : '/jls') + '/rlqbxs/xsdjCount',
		rlqbxsList: (product ? '' : '/jls') + '/rlqbxs/list',
		xsdjexecuteflow: (product ? '' : '/jls') +'/rlqbxs/xsdjexecuteflow',
		xsdjaddflow: (product ? '' : '/jls') +'/rlqbxs/xsdjaddflow',
		//重点人员
		zdryList: (product ? '' : '/jls') + '/zdry/list',
		zdryList2jbxx: (product ? '' : '/jls') + '/zdry/list2jbxx',
		zdryJcsldyj: (product ? '' : '/jls') + '/zdry/zdryjcsldyj',
		zzdryjcaddflow: (product ? '' : '/jls') + '/zdry/zdryjcaddflow',
		zdryaddflow:(product?'':'/jls') +'/zdry/zdryaddflow',
		zdryjczdyj:(product?'':'/jls') +'/zdry/zdryjczdyj',
		zdrysldyj:(product?'':'/jls') +'/zdry/zdrysldyj',
		zdryzdyj:(product?'':'/jls') +'/zdry/zdryzdyj',
		//拘室调整
		jstzCount: (product ? '' : '/jls') + '/jstz/jstzCount',
		jstzList2jbxx: (product ? '' : '/jls') + '/jstz/list2jbxx',
		jstzexecuteflow: (product ? '' : '/jls') + '/jstz/jstzexecuteflow',
		//严管人员
		ygryCount: (product ? '' : '/jls') + '/ygry/ygryCount',
		ygryList2jbxx: (product ? '' : '/jls') + '/ygry/list2jbxx',
		ygrylist: (product ? '' : '/jls') +'/ygry/list',
		ygryexecuteflow: (product ? '' : '/jls') +'/ygry/ygryexecuteflow',
		ygryaddflow: (product ? '' : '/jls') +'/ygry/ygryaddflow',
		//个别教育
		thjyList2jbxx: (product ? '' : '/jls') + '/thjy/list2jbxx',
		thjylist: (product ? '' : '/jls') + '/thjy/list',
		gbjyThjySave: (product ? '' : '/jls') +'/thjy/save',
		zztxhjhjsCombotree: (product ? '' : '/jls') +'/zztxhj/hjsCombotree',
		fjrymdlistByRs: (product ? '' : '/jls') +'/fjrymd/listByRs',
		qjcsplFlowwpgl: (product ? '' : '/jls') +'/qjcs/plFlowwpgl',
		jkqklist: (product ? '' : '/jls') +'/jkqk/list',
		//集体教育
		jtjyList: (product ? '' : '/jls') + '/jtjy/list',
		jtjyCount: (product ? '' : '/jls') + '/jtjy/jtjyCount',
		jtjySave: (product ? '' : '/jls') +'/jtjy/save',

		wmpbSave: (product ? '' : '/jls') + '/wmpb/save',
		wmpbUpdate: (product ? '' : '/jls') + '/wmpb/update',
		//当日动态
		jqAndList: (product ? '' : '/jls') + '/jls_js/jqAndList',
		//关押动态
		//到期出所人员
		//严管人员分布图
		//病号动态
		swjyList2jbxx: (product ? '' : '/jls') + '/swjy/list2jbxx',
		zbhdjSaveAndJbxx: (product ? '' : '/jls') + '/zbhdj/saveAndJbxx',
		
		photosList: (product ? '' : '/jls') +'/jls_photos/photosList',
		getDictionaryContent: (product ? '' : '/jls') +'/jls_dictionary/getDictionaryContent',

		//正在提讯会见
		zztxhjList: (product ? '' : '/jls') + '/zztxhj/list',
		//拘室分布
		//风险评估
		fxpglistjbxx: (product ? '' : '/jls') + '/fxpg/listjbxx',
		fxpgaddflow: (product ? '' : '/jls') + '/fxpg/fxpgaddflow',//风险评估,风险评估登记
		fxpgldsp: (product ? '' : '/jls') + '/fxpg/fxpgldsp',
		fxpgYwdt: (product ? '' : '/jls') +'/fxpg/fxpgYwdt',

		//安全管理
		dtfxlist: (product ? '' : '/jls') + '/dtfx/list', //动态分析
		dtfxSave: (product ? '' : '/jls') + '/dtfx/save',
		aqjclist: (product ? '' : '/jls') + '/aqjc/list', //安全检查
		fssglist: (product ? '' : '/jls') + '/fssg/list', //事故处理
		fssgSave: (product ? '' : '/jls') + '/fssg/save',
		fssgUpdate: (product ? '' : '/jls') + '/fssg/update',
		saveByRcqj: (product ? '' : '/jls') + '/aqjc/saveByRcqj',
		aqjcUpdate: (product ? '' : '/jls') +'/aqjc/update',
		aqjcCount: (product ? '' : '/jls') +'/aqjc/aqjcCount',

		

		yjyllist: (product ? '' : '/jls') + '/yjyl/list', //应急演练
		yjylUpdate: (product ? '' : '/jls') + '/yjyl/update',
		yjylSave: (product ? '' : '/jls') + '/yjyl/save',

		//统计查询
		//人员信息查询
		//人员信息补录
		saveByryxxbl: (product ? '' : '/jls') +'/jkqk/saveByryxxbl',
		ryxxblUpdate: (product ? '' : '/jls') +'/jkqk/update',
		//人员信息维护
		ryxxblSave: (product ? '' : '/jls') +'/ryxxwh/save',
		//高级查询
		wpgl2jbxx: (product ? '' : '/jls') + '/jls_wpgl/wpgl2jbxx', //保管物品查询
		//关押量统计
		getGyl: (product ? '' : '/jls') + '/gyltj/getGyl',
		//报表
		//在逃比对

		//数据质量
		//不合格数据查询

		//档案管理
		//指纹管理
		//文书扫描
		fileUpload: (product ? '' : '/jls') + '/wssm/fileUpload',
		//工作台账
		//电子档案
		//床位管理
		cwglSaveAndJbxx: (product ? '' : '/jls') +'/cwgl/saveAndJbxx',
		//队伍管理
		mjdjlist: (product ? '' : '/jls') + '/mjdj/list', //民警登记
		mjdjSave: (product ? '' : '/jls') +'/mjdj/save',
		mjdjSaveAndUpdate: (product ? '' : '/jls') +'/mjdj/saveAndUpdate',
		//CCIC
		ccicSave: (product ? '' : '/jls') + '/ccicwh/save',

		//数据考核
		//及时性考核
		//完整性考核
		//流程count
		getFlowNodeCount: (product ? '' : '/jls') + '/jls_process/getFlowNodeCount',

		//首页
		syJs: (product ? '' : '/jls') + '/tsdj/syJs',
		syjrcrs:(product ? '' : '/jls') + '/jls_Count/sy_jrcrs',//今日出入所统计
		syJrcrsQuery:(product ? '' : '/jls') + '/sy/syJrcrsQuery',//今日出入所弹出框
		syjrhjqk:(product ? '' : '/jls') + '/jls_Count/sy_jrhjqk',//今日会见情况统计
		syJrhjqkQuery:(product ? '' : '/jls') + '/sy/syJrhjqkQuery',//今日会见情况弹出框
		sydbsx:(product ? '' : '/jls') + '/jls_Count/sy_dbsx',//收据待办事项统计
		syDbsxQuery:(product ? '' : '/jls') + '/sy/syDbsxQuery',//收据待办事项弹出框
		sybyrsryxzQuery:(product ? '' : '/jls') + '/jls_Count/sy_byrsryxz',//收据入所性质查询统计
		sybzcrsQuery:(product ? '' : '/jls') + '/jls_Count/sy_bzcrs',//收据入所性质查询统计
		syBzCrsList:(product ? '' : '/jls') + '/sy/syBzCrs',//收据入所性质查询弹出框
		gjbyywtj:(product ? '' : '/jls') + '/jls_Count/gj_byywtj',//本月业务统计
		byYwtjQuery:(product ? '' : '/jls') + '/gj/byYwtj',//本月业务统计弹出框
		syGwjjb:(product ? '':'/jls') + '/gwjjb/syGwjjb', //首页交接班人员,
		syDycrsrs:(product ? '':'/jls') + '/sy/dycrsrs',//本月出入所人数统计,
		syDyrsyytj:(product ? '':'/jls') + '/sy/dyrsyytj',//本月入所原因统计,
		syGzqk:(product ? '':'/jls') + '/sy/syGzqk',//今日谈话教育、会见情况,
        syZyryqk:(product ? '':'/jls') + '/sy/syZyryqk',//在押人员出入所情况,
		syDwcgzqk: (product ? '' : '/jls') + '/sy/syDwcgzqk',//本月械具待解除情况,
		allModules: (product ? '' : '/jls') + '/jls_homepage/allModules', //用户首页自定义模块配置接口
        customizeSave: (product ? '' : '/jls') + '/jls_homepage/customizeSave', //用户首页自定义模块保存接口
        deleteModule: (product ? '' : '/jls') + '/jls_homepage/deleteModule', //用户首页自定义模块删除接口
		customizeQuery: (product ? '' : '/jls') + '/jls_homepage/customizeQuery', //查询用户自定义的所有模块
		zhQwbzQuery: (product ? '' : '/jls') + '/zh/zhQwbzQuery',//综合勤务保障查询接口
		zhQwbzCount: (product ? '' : '/jls') +'/jls_Count/zh_qwbz',//综合勤务保障-数量查询
		customizeQuery: (product ? '' : '/jls') + '/jls_homepage/customizeQuery', //查询用户自定义的所有模块
		zhjxglCount: (product ? '' : '/jls') + '/jls_Count/zh_jxgl',//综合绩效管理count查询
		zhJxglQuery: (product ? '' : '/jls') + '/zh/zhJxglQuery',//综合绩效管理弹出,
		zhaqjcqkQuery: (product ? '' : '/jls') + '/zh/zh_aqjcqkQuery',//综合安全检查情况查询
		zhjszkCount: (product ? '' : '/jls') + '/jls_Count/zh_jszk',//综合监所总控count查询
		zhJszkQuery: (product ? '' : '/jls') +'/zh/zhJszkQuery',//综合监所总控明细查询

		zhdrjlQuery: (product ? '' : '/jls') +'/zh/zh_drjlQuery',//综合当日民警警力查询
		zhWgsjQuery: (product ? '' : '/jls') +'/zh/zhWgsjQuery',//综合违规处理查询
		zhDbsxQuery: (product ? '' : '/jls') +'/zh/zhDbsxQuery',//综合今日代办事项查询
		zhMjcjQuery: (product ? '' : '/jls') +'/zh/zhMjcjQuery',//综合奖惩情况查询
		zhDwglQuery: (product ? '' : '/jls') +'/zh/zhDwglQuery',//综合队伍管理查询
		ywgwBzxzjlQuery: (product ? '' : '/jls') +'/ywgw/ywgwBzxzjlQuery',//医务巡诊记录查询
		ywjkjc: (product ? '' : '/jls') +'/jls_Count/yw_jkjc',//医务健康检查人数查询
		ywjkjcQuery: (product ? '' : '/jls') +'/yw/yw_jkjc',//医务健康检查弹出框
		ywjyxxQuery: (product ? '' : '/jls') +'/yw/ywgw_jyxx',//医务就医管理弹出框
		ywgwWsfyQuery : (product ? '' : '/jls') +'/ywgw/ywgwWsfyQuery ',//卫生防疫
		ywgwYtjryQuery: (product ? '' : '/jls') +'/ywgw/ywgwYtjryQuery',//医务已体检人员查询
		ywgwWtjryQuery: (product ? '' : '/jls') +'/ywgw/ywgwWtjryQuery',//医务未体检人员查询
		ywjyxxCount: (product ? '' : '/jls') +'/jls_Count/yw_jyxx',//医务就医信息查询
		ywjbqkCount: (product ? '' : '/jls') +'/jls_Count/yw_jbqk',//医务疾病情况数量查询
		jbqkQuery: (product ? '' : '/jls') +'/yw/jbqkQuery',//医务疾病情况弹出框
		ywzbhQuery: (product ? '' : '/jls') +'/jls_Count/yw_zbh',//医务重病号统计
		ywzbhList: (product ? '' : '/jls') +'/jbxx/list2jbxx',//医务重病号弹出框
		ywgwQbypkcQuery: (product ? '' : '/jls') +'/ywgw/ywgwQbypkcQuery',//医务药品库存
		ywgwYpjhjlQuery: (product ? '' : '/jls') +'/ywgw/ywgwYpjhjlQuery',//医务药品进货记录查询
		// 管教首页
		bzXsjlList:(product ? '':'/jls') + '/gj/bzXsjlList',//本周巡视记录,
		gjQybz:(product ? '':'/jls') + '/gj/gjQybz',//权益保障,
		bzXjsyList:(product ? '':'/jls') + '/gj/bzXjsyList',//本周械具使用,
		wmjsList:(product ? '':'/jls') + '/gj/wmjsList',//文明监室/严管监室,
		bzJstzList:(product ? '':'/jls') + '/gj/bzJstzList',//本周拘室调整记录
		ygjsList:(product ? '':'/jls') + '/gj/ygjsList',//严管监室详细信息

		// 财务首页
		bzcwqk:(product ? '':'/jls') + '/jls_Count/cw_bzcwqk',//文明监室/严管监室,
        cwBzWpjjQuery: (product ? '' : '/jls') + '/cw/cwBzWpjjQuery', //首页财务岗位本周物品接济
		bzxjjjlist: (product ? '' : '/jls') + '/cw/cwBzxjjjQuery', //首页财务岗位本周现金接济
		SzjdQuery: (product ? '' : '/jls') + '/cw/cwSzjdQuery', //所长接待
		StcgQuery: (product ? '' : '/jls') + '/cw/cwStcgQuery', //食堂采购
		JfjdQuer: (product ? '' : '/jls') + '/cw/cwJfjdQuery', //食堂采购
		sqswList: (product ? '' : '/jls') + '/jls_sqsw/sqswList',//送钱送物
		swQuery: (product ? '' : '/jls') + '/cw/swQuery',//送钱送物
		
		//所领导首页
		sldjqss:(product ? '':'/jls') + '/jls_Count/sld_jqss',//监区设施统计
		jqssQuery:(product ? '':'/jls') + '/sld/jqssQuery',//监区设施弹出框
		slddbsx:(product ? '':'/jls') + '/jls_Count/sld_dbsx',//所领导待办事项统计
		sldSzcxqQuery:(product ? '':'/jls') + '/sld/sldSzcxqQuery',//所长查询区

	};
	return main;
});
