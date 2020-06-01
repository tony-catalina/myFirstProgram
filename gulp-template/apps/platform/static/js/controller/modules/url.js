define(function () {
	'use strict';
	var product = false;
	var main = {
		getWebURL:(product ? '' : '/platform')+'/getWebURL',

		getGroup:(product ? '' : '/platform')+'/system_group/get',//获取分组信息
		addGroup:(product ? '' : '/platform')+'/system_group/add',//新增分组信息
		editGroup:(product ? '' : '/platform')+'/system_group/edit',//修改分组信息
		deleteGroup:(product ? '' : '/platform')+'/system_group/del',//删除分组信息
		rolesGroup:(product ? '' : '/platform')+'/system_role/get',//编辑用户获取用户组信息
		removeRole:(product ? '' : '/platform')+'/system_member/do_action?action=role_remove_from',//移除角色
		addRole:(product ? '' : '/platform')+'/system_member/do_action?action=role_add',//添加到角色
		addYhz:(product ? '' : '/platform')+'/system_member/do_action?action=group_set',//
		newaddYhz:(product ? '' : '/platform')+'/system_member/userGroupSave',//添加到用户组
		removeYhz:(product ? '' : '/platform')+'/system_member/removeGroup',//移除用户组

		getMember:(product ? '' : '/platform')+'/system_member/get',//用户列表
		addMember:(product ? '' : '/platform')+'/system_member/add',//添加用户
		addMembers:(product ? '' : '/platform')+'/system_member/add?isImport=1',//批量添加用户

		memberStatusChange:(product ? '' : '/platform')+'/system_member/do_action?action=status_set',//用户禁用/启用
		getJsApp:(product ? '' : '/platform')+'/app/getJsApp',//获取可禁用应用列表
		getForbidApp:(product ? '' : '/platform')+'/app/getforbidApp',//获取已禁用应用列表

		saveForbidApp:(product ? '' : '/platform')+'/system_member/do_action?action=forbidapp',//APP禁用保存
		getMenusForbidList:(product ? '' : '/platform')+'/app/getJsApp?menu=1',//获取可禁菜单列表
		getForbidMenu:(product ? '' : '/platform')+'/app/getforbidMenu',//获取已禁菜单列表
		saveForbidMenu:(product ? '' : '/platform')+'/system_member/do_action?action=forbidmenu',//菜单禁用保存

		getRoleFlowMenus:(product ? '' : '/platform')+'/system_role/roleflow',//获取角色范围内的流程菜单
		saveRoleFlowMenus:(product ? '' : '/platform')+'/system_role/roleNodeSet',//角色流程菜单保存
		//--------------------------------------------------------------------------------------------------------
		getClassficAll:(product ? '' : '/platform')+'/system_classfic/getAll',//分类管理-获取所有分类列表
		getClassficPage:(product ? '' : '/platform')+'/system_classfic/getPage',//分类管理-获取具体内容
		saveClassfic:(product ? '' : '/platform')+'/system_classfic/save',//分类管理-分类管理保存
		deleteClassfic:(product ? '' : '/platform')+'/system_classfic/delete',//分类管理-分类管理删除
		dictionaryGetType:(product ? '' : '/platform')+'/system_dictionary/getType',//数据字典管理-获取所有分类
		dictionaryGetPage:(product ? '' : '/platform')+'/system_dictionary/getPage',//数据字典管理-获取分类详细
		saveDictionary:(product ? '' : '/platform')+'/system_dictionary/save',//数据字典管理-修改
		wgzdGetType:(product ? '' : '/platform')+'/system_wgzd/getType',//违规字典管理-获取所有分类
		wgzdGetPage:(product ? '' : '/platform')+'/system_wgzd/getPage',//违规字典管理-获取分类详细
		saveWgzd:(product ? '' : '/platform')+'/system_wgzd/save',//违规字典管理-修改
		flowmapGetPage:(product ? '' : '/platform')+'/system_flowmap/getPage',//业务流程设置-查询
		saveFlowmapTime:(product ? '' : '/platform')+'/system_flowmap/action?field=timelimit',//业务流程设置-间隔时间设置
		saveFlowmapMonth:(product ? '' : '/platform')+'/system_flowmap/action?field=monthlylimit',//业务流程设置-月互斥次数设置
		ywzdSave:(product ? '' : '/platform')+'/ywzd/ywzdSave',//业务指导-新增、修改
		ywzdQuery:(product ? '' : '/platform')+'/ywzd/ywzdQuery',//业务指导-查询
		ywzdDelete:(product ? '' : '/platform')+'/ywzd/ywzdDelete',//业务指导-删除
		xwywQuery:(product ? '' : '/platform')+'/xwyw/xwywQuery',//新闻要问-查询
		xwywSave:(product ? '' : '/platform')+'/xwyw/xwywSave',//新闻要问-新增、修改
		xwywDelete:(product ? '' : '/platform')+'/xwyw/xwywDelete',//新闻要问-删除
		whggSave:(product ? '' : '/platform')+'/whgg/whggSave',//维护公告-新增、修改
		whggQuery:(product ? '' : '/platform')+'/whgg/whggQuery',//维护公告-查询
		whggDelete:(product ? '' : '/platform')+'/whgg/whggDelete',//维护公告-删除
		tzggQuery:(product ? '' : '/platform')+'/tzgg/tzggQuery',//通知公告-查询
		tzggSave:(product ? '' : '/platform')+'/tzgg/tzggSave',//通知公告-新增、修改
		tzggDelete:(product ? '' : '/platform')+'/tzgg/tzggDelete',//通知公告-删除
		getDictionary:(product ? '' : '/platform')+'/dictionary/getDictionary',//获取字典
		getDictionaryPage:(product ? '' : '/platform')+'/dictionary/getDictionaryPage',//获取字典分页

		attachmentQuery:(product ? '' : '/platform')+'/attachment/attachmentQuery',//附件-查询
		attachmentSave:(product ? '' : '/platform')+'/attachment/attachmentSave',//附件-新增
		attachmentDelete:(product ? '' : '/platform')+'/attachment/attachmentDelete',//附件-删除

		// -- 以下接口后续会调整为看守所、拘留所、戒毒所通用，但是目前后台只做了看守所的部分，其余部分未实现 --

		jqGetPage:(product ? '' : '/platform')+'/system_jq/getPage',//获取监区信息
		saveOrUpdateJq:(product ? '' : '/platform')+'/system_jq/save',//保存或更新监区信息
		deleteJq:(product ? '' : '/platform')+'/system_jq/delete',//删除监区信息

		jsGetPage:(product ? '' : '/platform')+'/system_js/getPage',//获取监室信息
		saveOrUpdateJs:(product ? '' : '/platform')+'/system_js/save',//保存或更新监室
		deleteJs:(product ? '' : '/platform')+'/system_js/delete',//删除监室

		fjGetPage:(product ? '' : '/platform')+'/system_fjsz/getPage',//获取房间列表信息
		saveOrUpdateFj:(product ? '' : '/platform')+'/system_fjsz/save',//保存或更新房间信息
		deleteFj:(product ? '' : '/platform')+'/system_fjsz/delete',//删除房间信息
		wgzdPage:(product ? '' : '/platform')+'/system_wgzd/getPage',//违规字典列表信息

		// -- 以上接口后续会调整为看守所、拘留所、戒毒所通用，但是目前后台只做了看守所的部分，其余部分未实现 --

		barGetPage:(product ? '' : '/platform')+'/system_bar/getPage',//获取办案人信息
		saveOrUpdateBar:(product ? '' : '/platform')+'/system_bar/save',//保存或更新房间信息
		deleteBar:(product ? '' : '/platform')+'/system_bar/delete',//删除办案人信息

		lsGetPage:(product ? '' : '/platform')+'/system_lsgl/getPage',//获取律师信息
		saveOrUpdateLs:(product ? '' : '/platform')+'/system_ls/save',//更新修改律师信息
		deleteLs:(product ? '' : '/platform')+'/system_ls/delete',//删除律师信息

		changePassword:(product ? '' : '/platform')+'/user/changePassword',//密码修改
	};
	return main;
});
