define(function () {
    'use strict';
    return {
        _menusOneLeve: function () {
            return [{
                    'menuid': '0',
                    'menuname': '首页',
                    'icon': 'fa-home'
                },
                {
                    'menuid': '1',
                    'menuname': '看守所',
                    'icon': 'fa-bank'
                },
                {
                    'menuid': '2',
                    'menuname': '拘留所',
                    'icon': 'fa-address-book'
                },
                {
                    'menuid': '3',
                    'menuname': '戒毒所',
                    'icon': 'fa-address-card'
                },
                {
                    'menuid': '4',
                    'menuname': '办公室',
                    'icon': 'fa-briefcase'
                },
                {
                    'menuid': '5',
                    'menuname': '鉴定中心',
                    'icon': 'fa-certificate'
                },
                {
                    'menuid': '6',
                    'menuname': '审计室',
                    'icon': 'fa-medium'
                },
                {
                    'menuid': '7',
                    'menuname': '政治处',
                    'icon': 'fa-bell'
                },
                {
                    'menuid': '8',
                    'menuname': '一支队',
                    'icon': 'fa-binoculars '
                },
                {
                    'menuid': '9',
                    'menuname': '二支队',
                    'icon': 'fa-deaf'
                },
                {
                    'menuid': '10',
                    'menuname': '监护医疗',
                    'icon': 'fa-headphones'
                },
                {
                    'menuid': '11',
                    'menuname': '强制医疗',
                    'icon': 'fa-hand-rock-o'
                }
            ];
        },
        _menus: function () {
            return [{
                    'menuid': '00',
                    'icon': 'fa-trophy',
                    'menuname': '业务动态',
                    'parentMenu': '0',
                    'menus': [{
                            'menuid': '000',
                            'menuname': '新收人员',
                            'icon': 'fa-dashboard',
                            'url': 'main/ywdt/xsry.html'
                        },
                        {
                            'menuid': '001',
                            'menuname': '人员出所',
                            'icon': 'fa-delicious',
                            'url': 'main/ywdt/rycs.html'
                        },
                        {
                            'menuid': '002',
                            'menuname': '提审',
                            'icon': 'fa-delicious',
                            'url': 'main/ywdt/ts.html'
                        },
                        {
                            'menuid': '003',
                            'menuname': '提解',
                            'icon': 'fa-delicious',
                            'url': 'main/ywdt/tj.html'
                        },
                        {
                            'menuid': '004',
                            'menuname': '律师会见',
                            'icon': 'fa-delicious',
                            'url': 'main/ywdt/lshj.html'
                        },
                        {
                            'menuid': '005',
                            'menuname': '家属会见',
                            'icon': 'fa-delicious',
                            'url': 'main/ywdt/jshj.html'
                        },
                        {
                            'menuid': '006',
                            'menuname': '临时出所',
                            'icon': 'fa-delicious',
                            'url': 'main/ywdt/lscs.html'
                        },
                        {
                            'menuid': '007',
                            'menuname': '所外就医',
                            'icon': 'fa-delicious',
                            'url': 'main/ywdt/swjy.html'
                        },
                        {
                            'menuid': '008',
                            'menuname': '暂予监外执行',
                            'icon': 'fa-delicious',
                            'url': 'main/ywdt/zyjwzx.html'
                        }
                    ]
                }, {
                    'menuid': '01',
                    'icon': 'fa-television',
                    'menuname': '业务分析',
                    'parentMenu': '0',
                    'menus': [{
                            'menuid': '010',
                            'menuname': '数据质量',
                            'icon': 'fa-tty',
                            'url': 'main/ywfx/sjzl.html'
                        },
                        {
                            'menuid': '011',
                            'menuname': '数据及时性',
                            'icon': 'fa-tty',
                            'url': 'main/ywfx/sjjsx.html'
                        },
                        {
                            'menuid': '012',
                            'menuname': '民警执法',
                            'icon': 'fa-tty',
                            'url': 'main/ywfx/mjzf.html'
                        }
                    ]
                }, {
                    'menuid': '02',
                    'icon': 'fa-television',
                    'menuname': '业务办理',
                    'parentMenu': '0',
                    'menus': [{
                            'menuid': '020',
                            'menuname': '检查督导',
                            'icon': 'fa-tty',
                            'url': 'main/ywbl/jcdd.html'
                        },
                        {
                            'menuid': '021',
                            'menuname': '公文管理',
                            'icon': 'fa-volume-up',
                            'url': 'main/ywbl/gwgl.html'
                        },
                        {
                            'menuid': '022',
                            'menuname': '消息管理',
                            'icon': 'fa-volume-up',
                            'url': 'main/ywbl/xxgl.html'
                        }
                    ]
                },{
                    'menuid': '03',
                    'icon': 'fa-television',
                    'menuname': '综合查询',
                    'parentMenu': '0',
                    'menus': [{
                        'menuid': '031',
                        'menuname': '民警信息查询',
                        'icon': 'fa-window-restore',
                        'url': 'kss/rycx/mjxxcx.html'
                    },
                    {
                        'menuid': '032',
                        'menuname': '工作人员查询',
                        'icon': 'fa-window-maximize',
                        'url': 'kss/rycx/gzrycx.html'
                    },
                    {
                        'menuid': '033',
                        'menuname': '办案人员查询',
                        'icon': 'fa-window-maximize',
                        'url': 'kss/rycx/barycx.html'
                    },
                    {
                        'menuid': '034',
                        'menuname': '律师信息查询',
                        'icon': 'fa-window-maximize',
                        'url': 'kss/rycx/lsxxcx.html'
                    }
                    ]
                },
                {
                    'menuid': '11',
                    'icon': 'fa-trophy',
                    'menuname': '人员查询',
                    'parentMenu': '1',
                    'menus': [{
                            'menuid': '110',
                            'menuname': '在押人员查询',
                            'icon': 'fa-window-restore',
                            'url': 'kss/rycx/zyrycx.html'
                        },    
                    ]
                }, {
                    'menuid': '12',
                    'icon': 'fa-television',
                    'menuname': '业务查询',
                    'parentMenu': '1',
                    'menus': [{
                            'menuid': '120',
                            'menuname': '加减刑情况',
                            'icon': 'fa-globe',
                            'url': 'kss/ywcx/jjxqk.html'
                        },
                        {
                            'menuid': '121',
                            'menuname': '社会关系',
                            'type':'kss',
                            'icon': 'fa-laptop',
                            'url': 'kss/ywcx/shgx.html'
                        },
                        {
                            'menuid': '122',
                            'menuname': '家属会见',
                            'type':'kss',
                            'icon': 'fa-laptop',
                            'url': 'kss/ywcx/jshj.html'
                        },
                        {
                            'menuid': '123',
                            'menuname': '戒具情况',
                            'icon': 'fa-laptop',
                            'url': 'kss/ywcx/jjqk.html'
                        },
                        {
                            'menuid': '124',
                            'menuname': '调监记录',
                            'type':'kss',
                            'icon': 'fa-laptop',
                            'url': 'kss/ywcx/tjjl.html'
                        },
                        {
                            'menuid': '125',
                            'menuname': '入所查询',
                            'type':'kss',
                            'icon': 'fa-laptop',
                            'url': 'kss/ywcx/rscx.html'
                        },
                        {
                            'menuid': '126',
                            'menuname': '提审查询',
                            'type':'kss',
                            'icon': 'fa-laptop',
                            'url': 'kss/ywcx/tscx.html'
                        },
                        {
                            'menuid': '127',
                            'menuname': '环节变动',
                            'icon': 'fa-laptop',
                            'url': 'kss/ywcx/hjbd.html'
                        },
                        {
                            'menuid': '128',
                            'menuname': '延期情况',
                            'icon': 'fa-laptop',
                            'url': 'kss/ywcx/yqqk.html'
                        },
                        {
                            'menuid': '129',
                            'menuname': '同案犯情况',
                            'icon': 'fa-laptop',
                            'url': 'kss/ywcx/tafqk.html'
                        },
                        {
                            'menuid': '130',
                            'menuname': '谈话教育',
                            'type':'kss',
                            'icon': 'fa-laptop',
                            'url': 'kss/ywcx/thjy.html'
                        },
                        {
                            'menuid': '131',
                            'menuname': '禁闭情况',
                            'icon': 'fa-laptop',
                            'url': 'kss/ywcx/jbqk.html'
                        },
                        {
                            'menuid': '132',
                            'menuname': '耳目情况',
                            'icon': 'fa-laptop',
                            'url': 'kss/ywcx/emqk.html'
                        },
                        {
                            'menuid': '133',
                            'menuname': '事故情况',
                            'icon': 'fa-laptop',
                            'url': 'kss/ywcx/sgqk.html'
                        },
                        {
                            'menuid': '134',
                            'menuname': '出所查询',
                            'type':'kss',
                            'icon': 'fa-laptop',
                            'url': 'kss/ywcx/cscx.html'
                        },
                        {
                            'menuid': '135',
                            'menuname': '律师会见',
                            'type':'kss',
                            'icon': 'fa-laptop',
                            'url': 'kss/ywcx/lshj.html'
                        },
                        {
                            'menuid': '136',
                            'menuname': '判决登记',
                            'icon': 'fa-laptop',
                            'url': 'kss/ywcx/pjdj.html'
                        }
                    ]
                }, {
                    'menuid': '16',
                    'icon': 'fa-television',
                    'menuname': '信息研判',
                    'parentMenu': '1',
                    'menus': [{
                            'menuid': '161',
                            'menuname': '超量羁押分析',
                            'icon': 'fa-globe',
                            'url': 'kss/xxyp/cljyfx.html'
                        },
                        {
                            'menuid': '162',
                            'menuname': '超期羁押情况分析',
                            'type':'kss',
                            'icon': 'fa-laptop',
                            'url': 'kss/xxyp/cqjyqkfx.html'
                        },
                        {
                            'menuid': '163',
                            'menuname': '重点人员分析',
                            'type':'kss',
                            'icon': 'fa-laptop',
                            'url': 'kss/xxyp/zdryfx.html'
                        },
                        {
                            'menuid': '164',
                            'menuname': '医疗情况分析',
                            'icon': 'fa-laptop',
                            'url': 'kss/xxyp/ylqkfx.html'
                        },
                        {
                            'menuid': '165',
                            'menuname': '人员分类分析',
                            'icon': 'fa-laptop',
                            'url': 'kss/xxyp/ryflfx.html'
                        },
                        {
                            'menuid': '166',
                            'menuname': '案件情况分析',
                            'icon': 'fa-laptop',
                            'url': 'kss/xxyp/ajqkfx.html'
                        },
                        {
                            'menuid': '167',
                            'menuname': '违规情况分析',
                            'type':'kss',
                            'icon': 'fa-laptop',
                            'url': 'kss/xxyp/wgqkfx.html'
                        },
                        {
                            'menuid': '168',
                            'menuname': '留所服刑分析',
                            'icon': 'fa-laptop',
                            'url': 'kss/xxyp/lsfxfx.html'
                        },
                        {
                            'menuid': '169',
                            'menuname': '临时离所分析',
                            'icon': 'fa-laptop',
                            'url': 'kss/xxyp/lslsfx.html'
                        },
                        {
                            'menuid': '170',
                            'menuname': '送监未收人员分析',
                            'icon': 'fa-laptop',
                            'url': 'kss/xxyp/sjwsryfx.html'
                        },
                        {
                            'menuid': '171',
                            'menuname': '吸毒人员分析',
                            'icon': 'fa-laptop',
                            'url': 'kss/xxyp/xdryfx.html'
                        },
                        {
                            'menuid': '172',
                            'menuname': '严重疾病人员分析',
                            'icon': 'fa-laptop',
                            'url': 'kss/xxyp/yzjbryfx.html'
                        },
                        {
                            'menuid': '173',
                            'menuname': '关押期限分析',
                            'type':'kss',
                            'icon': 'fa-laptop',
                            'url': 'kss/xxyp/gyqxfx.html'
                        },
                        {
                            'menuid': '174',
                            'menuname': '国籍分析',
                            'icon': 'fa-laptop',
                            'url': 'kss/xxyp/gjfx.html'
                        }
                    ]
                },
                {
                    'menuid': '21',
                    'icon': 'fa-plug',
                    'menuname': '人员查询',
                    'parentMenu': '2',
                    'menus': [{
                            'menuid': '210',
                            'menuname': '在拘人员查询',
                            'icon': 'fa-window-restore',
                            'url': 'jls/rycx/zyrycx.html'
                        }
                    ]
                },
                {
                    'menuid': '22',
                    'icon': 'fa-cubes',
                    'menuname': '业务查询',
                    'parentMenu': '2',
                    'menus': [{
                            'menuid': '220',
                            'menuname': '日均押量',
                            'type':'jls',
                            'icon': 'fa-dot-circle-o',
                            'url': 'jls/ywcx/rjyl.html'
                        },
                        {
                            'menuid': '221',
                            'menuname': '提审查询',
                            'type':'jls',
                            'icon': 'fa-window-maximize',
                            'url': 'jls/ywcx/tsdj.html'
                        },
                        {
                            'menuid': '222',
                            'menuname': '入所查询',
                            'type':'jls',
                            'icon': 'fa-window-maximize',
                            'url': 'jls/ywcx/rsjl.html'
                        },
                        {
                            'menuid': '223',
                            'menuname': '出所查询',
                            'type':'jls',
                            'icon': 'fa-window-maximize',
                            'url': 'jls/ywcx/csjl.html'
                        },
                        {
                            'menuid': '224',
                            'menuname': '律师会见',
                            'type':'jls',
                            'icon': 'fa-window-maximize',
                            'url': 'jls/ywcx/lshj.html'
                        },
                        {
                            'menuid': '225',
                            'menuname': '临时出所',
                            'type':'jls',
                            'icon': 'fa-window-maximize',
                            'url': 'jls/ywcx/lscs.html'
                        },
                        {
                            'menuid': '226',
                            'menuname': '社会关系',
                            'type':'jls',
                            'icon': 'fa-window-maximize',
                            'url': 'jls/ywcx/shgx.html'
                        },
                        {
                            'menuid': '227',
                            'menuname': '谈话教育',
                            'type':'jls',
                            'icon': 'fa-window-maximize',
                            'url': 'jls/ywcx/thjy.html'
                        },
                        {
                            'menuid': '228',
                            'menuname': '家属会见',
                            'type':'jls',
                            'icon': 'fa-window-maximize',
                            'url': 'jls/ywcx/jshj.html'
                        },
                        {
                            'menuid': '229',
                            'menuname': '信息员',
                            'icon': 'fa-window-maximize',
                            'url': 'jls/ywcx/xxy.html'
                        },
                        {
                            'menuid': '230',
                            'menuname': '流水牌',
                            'type':'jls',
                            'icon': 'fa-window-maximize',
                            'url': 'jls/ywcx/lsp.html'
                        },
                        {
                            'menuid': '231',
                            'menuname': '调监记录',
                            'type':'jls',
                            'icon': 'fa-window-maximize',
                            'url': 'jls/ywcx/tjjl.html'
                        },
                        {
                            'menuid': '232',
                            'menuname': '违规情况',
                            'icon': 'fa-window-maximize',
                            'url': 'jls/ywcx/wgjl.html'
                        },
                        {
                            'menuid': '233',
                            'menuname': '就医情况',
                            'icon': 'fa-window-maximize',
                            'url': 'jls/ywcx/jyqk.html'
                        }
                    ]
                }, {
                    'menuid': '25',
                    'icon': 'fa-television',
                    'menuname': '信息研判',
                    'parentMenu': '2',
                    'menus': [{
                            'menuid': '251',
                            'menuname': '关押期限分析',
                            'type':'jls',
                            'icon': 'fa-globe',
                            'url': 'jls/xxyp/gyxxfx.html'
                        },
                        {
                            'menuid': '252',
                            'menuname': '超期羁押情况分析',
                            'type':'jls',
                            'icon': 'fa-laptop',
                            'url': 'jls/xxyp/cqjyfx.html'
                        },
                        {
                            'menuid': '253',
                            'menuname': '违规情况分析',
                            'type':'jls',
                            'icon': 'fa-laptop',
                            'url': 'jls/xxyp/wgqkfx.html'
                        },
                        {
                            'menuid': '254',
                            'menuname': '重点人员分析',
                            'type':'jls',
                            'icon': 'fa-laptop',
                            'url': 'jls/xxyp/zdryfx.html'
                        },
                        {
                            'menuid': '255',
                            'menuname': '超额关押分析',
                            'icon': 'fa-laptop',
                            'url': 'jls/xxyp/cegyfx.html'
                        },
                        {
                            'menuid': '256',
                            'menuname': '人员情况分析',
                            'icon': 'fa-laptop',
                            'url': 'jls/xxyp/ryqkfx.html'
                        }
                    ]
                },
                {
                    'menuid': '31',
                    'icon': 'fa-suitcase',
                    'menuname': '人员查询',
                    'parentMenu': '3',
                    'menus': [{
                            'menuid': '310',
                            'menuname': '在戒人员查询',
                            'icon': 'fa-window-restore',
                            'url': 'jds/rycx/zyrycx.html'
                        }
                    ]
                }, {
                    'menuid': '32',
                    'icon': 'fa-suitcase',
                    'menuname': '业务查询',
                    'parentMenu': '3',
                    'menus': [{
                            'menuid': '350',
                            'menuname': '日均押量',
                            'type':'jds',
                            'icon': 'fa-window-restore',
                            'url': 'jds/ywcx/rjyl.html'
                        },
                        {
                            'menuid': '351',
                            'menuname': '流水牌',
                            'type':'jds',
                            'icon': 'fa-window-restore',
                            'url': 'jds/ywcx/lsp.html'
                        }
                    ]
                }, {
                    'menuid': '35',
                    'icon': 'fa-suitcase',
                    'menuname': '信息研判',
                    'parentMenu': '3',
                    'menus': [{
                            'menuid': '320',
                            'menuname': '在戒人数分析',
                            'icon': 'fa-window-restore',
                            'url': 'jds/xxyp/zjfx.html'
                        },
                        {
                            'menuid': '321',
                            'menuname': '出所人数分析',
                            'icon': 'fa-window-restore',
                            'url': 'jds/xxyp/csfx.html'
                        },
                        {
                            'menuid': '322',
                            'menuname': '人员年龄分析',
                            'icon': 'fa-window-restore',
                            'url': 'jds/xxyp/rynlfx.html'
                        },
                        {
                            'menuid': '323',
                            'menuname': '人员吸毒时间分析',
                            'icon': 'fa-window-restore',
                            'url': 'jds/xxyp/xdsjfx.html'
                        }
                    ]
                }, {
                    'menuid': '45',
                    'icon': 'fa-dashboard',
                    'menuname': '平台联动重点数据库',
                    'parentMenu': '4',
                    'menus': [{
                        'menuid': '450',
                        'menuname': '平台联动重点数据库',
                        'icon': 'fa-window-restore',
                        'url': 'bgs/ptldzdsjk/ptldzdsjk.html'
                    }]
                }, {
                    'menuid': '46',
                    'icon': 'fa-dashboard',
                    'menuname': '预警和情报分析研判',
                    'parentMenu': '4',
                    'menus': [{
                        'menuid': '460',
                        'menuname': '被监管人员分析研判',
                        'icon': 'fa-window-restore',
                        'url': 'bgs/yjhqb/bjgryfx.html'
                    },{
                        'menuid': '461',
                        'menuname': '监（拘）室（区）分析研判',
                        'icon': 'fa-window-restore',
                        'url': 'bgs/yjhqb/jsfx.html'
                    },{
                        'menuid': '462',
                        'menuname': '民警执法执勤分析研判',
                        'icon': 'fa-window-restore',
                        'url': 'bgs/yjhqb/mjzfzq.html'
                    },{
                        'menuid': '463',
                        'menuname': '重点管理数据分析研判',
                        'icon': 'fa-window-restore',
                        'url': 'bgs/yjhqb/zdglsjfx.html'
                    }]
                }, {
                    'menuid': '47',
                    'icon': 'fa-dashboard',
                    'menuname': '重点项目和信息流转',
                    'parentMenu': '4',
                    'menus': [{
                        'menuid': '470',
                        'menuname': '重点项目和信息流转查询',
                        'icon': 'fa-window-restore',
                        'url': 'bgs/zdxmhxx/zdxmhxx.html'
                    },{
                        'menuid': '471',
                        'menuname': '民警数量',
                        'icon': 'fa-window-restore',
                        'url': 'bgs/zdxmhxx/mjsl.html'
                    }
                    ] 
                },{
                    'menuid': '48',
                    'icon': 'fa-dashboard',
                    'menuname': '报送数据',
                    'parentMenu': '4',
                    'menus': [{
                        'menuid': '480',
                        'menuname': '监所基础数据',
                        'icon': 'fa-window-restore',
                        'url': 'bgs/bssj/jsjcsj.html'
                    },{
                        'menuid': '481',
                        'menuname': '监所押量变化情况',
                        'icon': 'fa-window-restore',
                        'url': 'bgs/bssj/jsylbhqk.html'
                    },{
                        'menuid': '482',
                        'menuname': '下月预释放人员数据',
                        'icon': 'fa-window-restore',
                        'url': 'bgs/bssj/xysfry.html'
                    },{
                        'menuid': '483',
                        'menuname': '余刑三个月以下在押人员',
                        'icon': 'fa-window-restore',
                        'url': 'bgs/bssj/yxsgy.html'
                    }]
                },{
                    'menuid': '49',
                    'icon': 'fa-dashboard',
                    'menuname': '执法质量考评',
                    'parentMenu': '4',
                    'menus': [{
                        'menuid': '490',
                        'menuname': '执法质量考评',
                        'type':'bgs',
                        'icon': 'fa-window-restore',
                        'url': 'bgs/zfzlkp/zfzlkp.html'
                    }]
                }
                ,
                // {
                //     'menuid': '41',
                //     'icon': 'fa-dashboard',
                //     'menuname': '每日上报',
                //     'parentMenu': '4',
                //     'menus': [{
                //             'menuid': '410',
                //             'menuname': '简单查询',
                //             'icon': 'fa-window-restore',
                //             'url': 'demo/form-success-popup1.html'
                //         },
                //         {
                //             'menuid': '411',
                //             'menuname': '高级查询',
                //             'icon': 'fa-window-restore',
                //             'url': 'demo/form-success-popup2.html'
                //         },
                //         {
                //             'menuid': '412',
                //             'menuname': '自定义查询',
                //             'icon': 'fa-window-maximize',
                //             'url': 'demo/form-success1.html'
                //         }
                //     ]
                // },
                // {
                //     'menuid': '42',
                //     'icon': 'fa-dashboard',
                //     'menuname': '网上巡查',
                //     'parentMenu': '4',
                //     'menus': [{
                //             'menuid': '420',
                //             'menuname': '简单查询',
                //             'icon': 'fa-window-restore',
                //             'url': 'demo/form-success-popup1.html'
                //         },
                //         {
                //             'menuid': '421',
                //             'menuname': '高级查询',
                //             'icon': 'fa-window-restore',
                //             'url': 'demo/form-success-popup2.html'
                //         },
                //         {
                //             'menuid': '422',
                //             'menuname': '自定义查询',
                //             'icon': 'fa-window-maximize',
                //             'url': 'demo/form-success1.html'
                //         }
                //     ]
                // },
                // {
                //     'menuid': '43',
                //     'icon': 'fa-dashboard',
                //     'menuname': '勤务报备',
                //     'parentMenu': '4',
                //     'menus': [{
                //             'menuid': '430',
                //             'menuname': '简单查询',
                //             'icon': 'fa-window-restore',
                //             'url': 'demo/form-success-popup1.html'
                //         },
                //         {
                //             'menuid': '431',
                //             'menuname': '高级查询',
                //             'icon': 'fa-window-restore',
                //             'url': 'demo/form-success-popup2.html'
                //         },
                //         {
                //             'menuid': '432',
                //             'menuname': '自定义查询',
                //             'icon': 'fa-window-maximize',
                //             'url': 'demo/form-success1.html'
                //         }
                //     ]
                // },
                // {
                //     'menuid': '44',
                //     'icon': 'fa-dashboard',
                //     'menuname': '晨会汇报',
                //     'parentMenu': '4',
                //     'menus': [{
                //             'menuid': '440',
                //             'menuname': '简单查询',
                //             'icon': 'fa-window-restore',
                //             'url': 'demo/form-success-popup1.html'
                //         },
                //         {
                //             'menuid': '441',
                //             'menuname': '高级查询',
                //             'icon': 'fa-window-restore',
                //             'url': 'demo/form-success-popup2.html'
                //         },
                //         {
                //             'menuid': '442',
                //             'menuname': '自定义查询',
                //             'icon': 'fa-window-maximize',
                //             'url': 'demo/form-success1.html'
                //         }
                //     ]
                // },
            {
                'menuid': '51',
                'icon': 'fa-dashboard',
                'menuname': '人员查询',
                'parentMenu': '5',
                'menus': [{
                        'menuid': '510',
                        'menuname': '简单查询',
                        'icon': 'fa-window-restore',
                        'url': 'jdzx/rycx/rycx_jdcx.html'
                        },
                    {
                        'menuid': '511',
                        'menuname': '高级查询',
                        'icon': 'fa-window-restore',
                        'url': 'jdzx/rycx/rycx_gjcx.html'
                        },
                    {
                        'menuid': '512',
                        'menuname': '自定义查询',
                        'icon': 'fa-window-maximize',
                        'url': 'jdzx/rycx/rycx_zdycx.html'
                        }
                    ]
                },
                {
                    'menuid': '52',
                    'icon': 'fa-dashboard',
                    'menuname': '业务查询',
                    'parentMenu': '5',
                    'menus': [{
                            'menuid': '520',
                            'menuname': '简单查询',
                            'icon': 'fa-window-restore',
                            'url': 'jdzx/ywcx/ywcx_jdcx.html'
                        },
                        {
                            'menuid': '521',
                            'menuname': '高级查询',
                            'icon': 'fa-window-restore',
                            'url': 'jdzx/ywcx/ywcx_gjcx.html'
                        },
                        {
                            'menuid': '522',
                            'menuname': '自定义查询',
                            'icon': 'fa-window-maximize',
                            'url': 'jdzx/ywcx/ywcx_zdycx.html'
            }
          ]
        },
        {
        'menuid': '81',
        'icon': 'fa-trophy',
        'menuname': '监所业务管理',
        'parentMenu': '8',
        'menus': [{
                    'menuid': '810',
                    'menuname': '监所情况查询',
                    'icon': 'fa-window-restore',
                    'url': 'yzd/jsyw/jsqkcx.html'
                },
                {
                    'menuid': '812',
                    'menuname': '领导变更查询',
                    'icon': 'fa-window-maximize',
                    'url': 'yzd/jsyw/ldbgcx.html'
                },
                {
                    'menuid': '813',
                    'menuname': '法律法规导入',
                    'icon': 'fa-window-maximize',
                    'url': 'yzd/jsyw/flfgdr.html'
                },
                {
                    'menuid': '814',
                    'menuname': '一级风险跟踪',
                    'icon': 'fa-window-maximize',
                    'url': 'yzd/jsyw/yjfxgz.html'
                },
                {
                    'menuid': '815',
                    'menuname': '异动报警查询',
                    'icon': 'fa-window-restore',
                    'url': 'yzd/jsyw/ydbjcx.html'
                },
                {
                    'menuid': '816',
                    'menuname': '情绪异常查询',
                    'icon': 'fa-window-maximize',
                    'url': 'yzd/jsyw/qxyccx.html'
                },
                {
                    'menuid': '817',
                    'menuname': '监所检查查询',
                    'icon': 'fa-window-maximize',
                    'url': 'yzd/jsyw/jsjccx.html'
                }
            ]
        },
            {
                'menuid': '82',
                'icon': 'fa-trophy',
                'menuname': '每日情况查询',
                'parentMenu': '8',
                'menus': [{
                    'menuid': '820',
                    'menuname': '自杀自残',
                    'icon': 'fa-window-restore',
                    'url': 'yzd/mrqkcx/zszc.html',
                },
                {
                    'menuid': '821',
                    'menuname': '打架斗殴',
                    'icon': 'fa-window-restore',
                    'url': 'yzd/mrqkcx/djdo.html',
                },
                {
                    'menuid': '822',
                    'menuname': '突发疾病',
                    'icon': 'fa-window-restore',
                    'url': 'yzd/mrqkcx/tfjb.html',
                },
                {
                    'menuid': '823',
                    'menuname': '矛盾化解',
                    'icon': 'fa-window-restore',
                    'url': 'yzd/mrqkcx/mdhj.html',
                },
                {
                    'menuid': '824',
                    'menuname': '深挖犯罪',
                    'icon': 'fa-window-restore',
                    'url': 'yzd/mrqkcx/swfz.html',
                },
                {
                    'menuid': '825',
                    'menuname': '核实身份',
                    'icon': 'fa-window-restore',
                    'url': 'yzd/mrqkcx/hssf.html',
                },
                {
                    'menuid': '826',
                    'menuname': '锦旗感谢信',
                    'icon': 'fa-window-restore',
                    'url': 'yzd/mrqkcx/jqgxx.html',
                },
            ]
            },
            {
                'menuid': '83',
                'icon': 'fa-trophy',
                'menuname': '医疗情况管理',
                'parentMenu': '8',
                'menus': [{
                            'menuid': '830',
                            'menuname': '入所体检查询',
                            'icon': 'fa-window-restore',
                            'url': 'yzd/ylqk/rstjcx.html'
                        },
                        {
                            'menuid': '831',
                            'menuname': '三级风险查询',
                            'icon': 'fa-window-restore',
                            'url': 'yzd/ylqk/sjfxcx.html'
                        },
                        {
                            'menuid': '832',
                            'menuname': '外出就医查询',
                            'icon': 'fa-window-maximize',
                            'url': 'yzd/ylqk/wcjycx.html'
                        },
                        {
                            'menuid': '833',
                            'menuname': '医疗数据统计',
                            'icon': 'fa-window-maximize',
                            'url': 'yzd/ylqk/ylsjtj.html'
                        }
                    ]
            },
            {
                'menuid': '84',
                'icon': 'fa-trophy',
                'menuname': '执法质量考评',
                'parentMenu': '8',
                'menus': [{
                            'menuid': '840',
                            'menuname': '执法质量考评',
                            'type':'yzd',
                            'icon': 'fa-window-restore',
                            'url': 'yzd/zfzl/zfzlkp.html'
                        },
                        {
                            'menuid': '841',
                            'menuname': '领导审核',
                            'icon': 'fa-window-restore',
                            'url': 'yzd/zfzl/ldsh.html'
                        },
                        {
                            'menuid': '842',
                            'menuname': '公示',
                            'icon': 'fa-window-restore',
                            'url': 'yzd/zfzl/gs.html'
                        }
                    ]
            },
            {
                'menuid': '85',
                'icon': 'fa-trophy',
                'menuname': '交付执行拒收',
                'parentMenu': '8',
                'menus': [{
                            'menuid': '850',
                            'menuname': '交付执行拒收',
                            'icon': 'fa-window-restore',
                            'url': 'yzd/jfzx/jfzxjs.html'
                        },
                    ]
            },
            {
                'menuid': '86',
                'icon': 'fa-trophy',
                'menuname': '监所拒收缓收',
                'parentMenu': '8',
                'menus': [{
                            'menuid': '860',
                            'menuname': '监所拒收缓收',
                            'icon': 'fa-window-restore',
                            'url': 'yzd/jsjs/jsjshs.html'
                        },
                    ]
            },
            {
                'menuid': '87',
                'icon': 'fa-trophy',
                'menuname': '暂予监外执行',
                'parentMenu': '8',
                'menus': [{
                            'menuid': '870',
                            'menuname': '监所所申请',
                            'icon': 'fa-window-restore',
                            'url': 'yzd/zyjw/jsssq.html'
                        },
                        {
                            'menuid': '871',
                            'menuname': '分局审批',
                            'icon': 'fa-window-restore',
                            'url': 'yzd/zyjw/fjsp.html'
                        },
                        {
                            'menuid': '872',
                            'menuname': '监所管理总队审批',
                            'icon': 'fa-window-restore',
                            'url': 'yzd/zyjw/jsglzdsp.html'
                        },
                        {
                            'menuid': '873',
                            'menuname': '市局审核盖章',
                            'icon': 'fa-window-restore',
                            'url': 'yzd/zyjw/sjshgz.html'
                        },
                        {
                            'menuid': '874',
                            'menuname': '监所管理总队开具文书',
                            'icon': 'fa-window-restore',
                            'url': 'yzd/zyjw/jsglzdkjws.html'
                        },
                        {
                            'menuid': '875',
                            'menuname': '反馈监所',
                            'icon': 'fa-window-restore',
                            'url': 'yzd/zyjw/fkjs.html'
                        },
                    ]
            },
            {
                'menuid': '88',
                'icon': 'fa-trophy',
                'menuname': '协助破案',
                'parentMenu': '8',
                'menus': [{
                            'menuid': '880',
                            'menuname': '协助破案查询',
                            'icon': 'fa-window-restore',
                            'url': 'yzd/xzpa/xzpacx.html'
                        }
                    ]
            },{
                'menuid': '53',
                'icon': 'fa-dashboard',
                'menuname': '监所医疗信息',
                'parentMenu': '9',
                'menus': [{
                        'menuid': '530',
                        'menuname': '监所医疗信息统计',
                        'icon': 'fa-window-restore',
                        'url': 'ezd/jsylxx/jsylxxtj.html'
                        },
                        {
                        'menuid': '531',
                        'menuname': '入所体检信息',
                        'icon': 'fa-window-restore',
                        'url': 'ezd/jsylxx/rstjxx.html'
                        },
                        {
                        'menuid': '532',
                        'menuname': '重点病人信息',
                        'icon': 'fa-window-maximize',
                        'url': 'ezd/jsylxx/zdbrxx.html'
                        },
                        {
                        'menuid': '533',
                        'menuname': '传染病人信息',
                        'icon': 'fa-window-maximize',
                        'url': 'ezd/jsylxx/crbrxx.html'
                        },
                        {
                        'menuid': '534',
                        'menuname': '医疗巡诊信息',
                        'icon': 'fa-window-maximize',
                        'url': 'ezd/jsylxx/ylxzxx.html'
                        },
                        {
                        'menuid': '535',
                        'menuname': '所内就医信息',
                        'icon': 'fa-window-maximize',
                        'url': 'ezd/jsylxx/snjyxx.html'
                        },
                        {
                        'menuid': '536',
                        'menuname': '出所就医信息',
                        'icon': 'fa-window-maximize',
                        'url': 'ezd/jsylxx/csjyxx.html'
                        }]
    },
    {
                'menuid': '54',
                'icon': 'fa-dashboard',
                'menuname': '就诊辅助检查资料',
                'parentMenu': '9',
                'menus': [{
                        'menuid': '540',
                        'menuname': '公安医院就诊辅助检查资料',
                        'icon': 'fa-window-restore',
                        'url': 'ezd/gayyjzxx/gayyjzfzjczl.html'
                        }]
    },
    {
        'menuid': '55',
        'icon': 'fa-dashboard',
        'menuname': '监所医务人员管理',
        'parentMenu': '9',
        'menus':[{
                    'menuid': '550',
                    'menuname': '医务人员信息',
                    'icon': 'fa-window-restore',
                    'url': 'ezd/jsywrygl/ywryxx.html'
                },{
                    'menuid': '551',
                    'menuname': '医务人员调换申请',
                    'icon': 'fa-window-restore',
                    'url': 'ezd/jsywrygl/ywrydhsq.html'
                },{
                    'menuid': '552',
                    'menuname': '总队审批',
                    'icon': 'fa-window-restore',
                    'url': 'ezd/jsywrygl/zdsp.html'
                },{
                    'menuid': '553',
                    'menuname': '医务人员调换',
                    'icon': 'fa-window-restore',
                    'url': 'ezd/jsywrygl/ywrydh.html'
                }]
    },

  ];
    },
        
    };
});