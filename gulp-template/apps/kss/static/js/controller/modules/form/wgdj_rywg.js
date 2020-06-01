define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_wgdjRywg.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var common = require('common');
    var popwin;
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_wgdjRywg', data);
            popwin = utils.showWin({
                title: '在押人员违规',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function () {
                    setTimeout(function () {
                        $.parser.parse('#fm');
                    }, 0); main.bindEvent();
                },
                yes: function () {
                    main.submit(url, data, callback);
                }
            });
        },
        bindEvent: function () {
            combox.initBySelect('#fm .awdCombox', urls.getDictionary);
            var checkbox = document.querySelector('#ywyc');
            checkbox.addEventListener('change', function () {
                $('.elements-hidden').toggleClass('table-row-hidden');
                setTimeout(function () {
                    $.parser.parse('#fm');
                }, 0);
            });

            $('.easyui-combotree').combotree({
                prompt: '请选择违规类型',
                mode: 'remote',
                url: urls.wgTree,
                method: "POST",
                animate: true, //展开合并时动画
                editable: true,
                onlyLeafCheck: true,
                queryParams: { "id": '0103' },
                dnd: true,
                multiple: true,
                checkbox: true,
                onShowPanel: function () {
                    $('.extSelectTree').combotree("clear");
                },
            });

            var fieldName = $('#clqkfm_ry').prev().next().attr("code");
            if (fieldName == undefined) {
                fieldName = $('#clqkfm_ry').attr("code");
            }
            var url = $('#clqkfm_ry').attr("url");
            $('#clqkfm_ry').combobox({
                multiple: true,
                url: '',
                valueField: 'code',
                textField: 'content',
                formatter: function (rowr) {
                    //formatter方法就是实现了在每个下拉选项前面增加checkbox框的方法  
                    var opts = $(this).combobox('options');
                    return '<input type="checkbox" class="combobox-checkbox" name="checkbox" >' + rowr[opts.textField]
                },

                onSelect: function (rowr) { //选中一个选项时调用  
                    var opts = $(this).combobox('options');
                    //获取选中的值的values  
                    $('#clqkfm_ry').val($(this).combobox('getValues'));

                    //设置选中值所对应的复选框为选中状态  
                    var el = opts.finder.getEl(this, rowr[opts.valueField]);
                    el.find('input.combobox-checkbox')._propAttr('checked', true);

                },
                onUnselect: function (rowr) {//不选中一个选项时调用  
                    var opts = $(this).combobox('options');
                    //获取选中的值的values  
                    $('#clqkfm_ry').val($(this).combobox('getValues'));
                    var el = opts.finder.getEl(this, rowr[opts.valueField]);
                    el.find('input.combobox-checkbox')._propAttr('checked', false);

                },
                onLoadSuccess: function () {
                    $('#clqkfm_ry').next().find(".validatebox-text").css("width", "100%");
                    if ($("div").hasClass("combobox-item-selected")) {
                        $(".combobox-item-selected").children().addClass("xuanzhong");
                        $(".xuanzhong").prop('checked', true);
                    }
                    // kss.sbxt("ryjbxxId");
                },
                onShowPanel: function () {
                    if (url == "" || url == undefined || url == null) {
                        $('#clqkfm_ry').combobox('clear');
                        $('#clqkfm_ry').combobox('reload', urls.getDictionary + '?node=' + fieldName);
                    } else {
                        $('#clqkfm_ry').combobox('clear');
                        $('#clqkfm_ry').combobox('reload', url);
                    }
                }

            });

        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = $("#fm").serialize() + "&dxbh=" + data.rybh;
               postData.wglx = '3'
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
