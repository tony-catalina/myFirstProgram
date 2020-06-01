define(function (require) {
    var commFun=require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_csrywh.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var addDeleteEvent = require('modules/addDeleteColumn');
    var popwin;
    var isOpen=false;
  // var comboxtree = require('awd/easyui/comboxtreegrid');
    var addDeleColumn = {
        title: ['姓名', '关系', '工作单位', '职业', '住所' , '联系电话'],
        width:"100%",
        options: [
            [
                { type: 'easyui-textbox' },
                { type: 'awdCombox' },
                { type: 'easyui-textbox' },
                { type: 'awdCombox' },
                { type: 'easyui-textbox' },
                { type: 'easyui-textbox' }
                

            ]
        ]

    };
    
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_csrywh', data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '出所人员维护',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        var $timeLineTabControl = $('.timeline-content2').tabs({ border: false });
                        addDeleteEvent.init($timeLineTabControl, 2, addDeleColumn);
                        isOpen = true;
                        $.parser.parse('#fm');
                        main.bindEvent(data);
                    },
                    yes: function() {
                        main.submit(url,data, callback);
                    }
                },function() {
                    isOpen = false;
                });
            }
        },
        bindEvent: function (data) {
           combox.initBySelect('#fm .awdCombox', urls.getDictionary);
            // console.log('comboname')
            $('#fm .awdCombox').each(function() {
                var $this = $(this);
                var value = $this.attr('comboname');
                if(data[value+'String']) {
                    $this.combobox().combobox('setValue', data[value]);
                    $this.combobox().combobox('setText', data[value+'String']);
                }

            })
            $(".tab-item").click(function () {
                $(this).addClass("active").css("background", "#0069f6").siblings().removeClass("active").css("background", "#5191f0");
                $(".products .mainCont").eq($(this).index()).show().siblings().hide();
                // $.parser.parse('#fm');
                // combox.initBySelect('#fm .awdCombox', urls.shgxList);
            });
            // $('input[type=radio][name=xzysz]').on('click', function () {
            //     layer.alert("选择左手指")
            // })

        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh = data.rybh;
                postData.id = data.id;
                util.ajax({
                    url: url,
                    data: postData,
                    func: function (data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                                utils.closeWin(popwin);
                            }
                        } else {
                            utils.alert(data.msg);
                        }
                    }
                });
            } else {
                utils.alert('表单数据格式不对！');
            }

        }
    };
    return main;
});