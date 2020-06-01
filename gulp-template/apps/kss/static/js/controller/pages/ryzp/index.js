/**
模块名称： 出所管理
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layerui');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/ryzp');
    var url = require('modules/url');
    var jbxxgrid = require('modules/jbxxgrid');
    var utils= require('awd/layui/utils')
    //界面控件
    //人员照片查询
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

                ]
            });
            linkbar.init({
                links: [

                ]
            });
            searchform.init('search', {
                pageRender: {
                    primary: [
                        {
                            name: 'xm',
                            title: '姓名',
                            type: 'textbox'
                        },
                        {
                            name: 'kssj',
                            title: '入所日期',
                            type: 'datebox'
                        }, {
                            name: 'jssj',
                            title: '至',
                            type: 'datebox'
                        }]

                },
            });

            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            $('#query').on('click', function () {
                $('#blockphoto').empty();
                var obj = {};
                $('#search input').each(function () {
                    if ($(this).attr("name") && ($(this).val() != '')) {
                        obj[this.name] = this.value;
                    } else if ($(this).attr("name") && ($(this).val() == '')) {
                        obj[this.name] = this.value;
                    }
                })
                obj.page = '1'
                obj.rows = '18'
                $.ajax({
                    url: url.photosListTj,
                    method: "POST",
                    data: obj,
                    success: function (res) {
                        if(res.result.rows.length==0 || (res.result.rows.length==1 
                            && (res.result.rows.photoUrl=='' || res.result.rows.photoUrl==null))){
                            utils.alert('无照片查询');
                        }
                        
                        var result = res.result.rows
                        for (var i = 0; i < result.length; i++) {
                            if (result[i].photoUrl == '' || result[i].photoUrl == undefined || result[i].photoUrl == null) {
                                result[i].photoUrl = '/apps/kss/static/images/moren.jpg'
                            }
                            $('#blockphoto').append('<div>' +
                                '<img src="' + result[i].photoUrl + '" alt="">' +
                                '<p>姓名：' + result[i].xm +
                                '</p>' +
                                '<p>人员编号：' + result[i].snbh +
                                '</p>' +
                                '</div>'
                            )
                        }
                    }
                })
                //$('#query').on('click', function () {
                //                 $('#blockphoto').empty();
                //                 var obj = {};
                //                 $('#search input').each(function () {
                //                     if ($(this).attr("name") && ($(this).val() != '')) {
                //                         obj[this.name] = this.value;
                //                     } else if ($(this).attr("name") && ($(this).val() == '')) {
                //                         obj[this.name] = this.value;
                //                     }
                //                 })
            })
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
