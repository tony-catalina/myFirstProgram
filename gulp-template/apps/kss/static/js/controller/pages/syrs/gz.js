/**
模块名称： 出所管理
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var addForm = require('modules/form/syrsgz');
    var jbxxgrid = require('modules/jbxxgrid');
    var common=require('common');
    //界面控件
    var main = {
        init: function () {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () {
            /**布局初始化**/
            toolbar.init({
                buttons: [
                    {
                        id: 'add', name: '办理告知', icon: 'icon-jiahao', ryyw: true, fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = { kssj: currentTime, zbmj: common.info.user.loginname, thyy: '权利义务告知', gznr: '问：我们是北京市第一看守所民警，已依法完成对你的收押手续，现依法告知你如下事项：					 现在你的身份是犯罪嫌疑人，在我所统称为在押人员。关押在北京市第一看守所，责任民警是第一看守所，按规定仓内一切事项由责任民警负责安排；根据《中华人民共和国看守所条例》规定，在押人员必须遵守《看守所在押人员行为规范》和我所的各项管理制度，如实向管教民警反映个人基本情况和案情经过；《在押人员须知》读本里面有我所的各项管理制度和在押人员应知应会，你必须在24小时内熟悉《一日生活制度》，在过渡监室7至15天过渡期内，你必须按照《过渡监室管理规定》完成学习、训练任务；你的合法权益是受到保护的，如果你在仓内受到殴打、虐待、欺压、财物被抢劫和患重大疾病时可以通过受虐报警系统报警或向值班管教报告，报警装置装在小窗口上方的红色按钮；在所期间，如果你的合法权益受到侵害或对案件有疑问时，可以约见驻所检察官；你必须严格履行在押人员的法定义务、遵守监规、服管服教，如果有违反监规行为的，将视情节给予警告，具结悔过，加戴械具等处罚，有牢头狱霸行为的给予严管，构成犯罪的将依法追究刑事责任。以上告知事项是否明白？																				答：																									问：你还有何事要反映？																				答：' };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init(url.saveGz, addData, function () {
                                    grid.reload('table')
                                });
                            } else {
                                utils.alert('请选择要办理的人员!');
                            }
                        }
                    },
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } }
                ]
            });
            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_rsdj_gz',
                        'processDefinitionKey': 'kss_rsdj'
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initJbxxflow('table', false, 200, {
                'taskDefinitionKey': 'kss_rsdj_gz',
                'processDefinitionKey': 'kss_rsdj'
            }, function (rybh) {
                // console.log(rybh);
            });
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});