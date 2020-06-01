define(function (require) {
    var commFun = require('modules/commFun');
    var isOpen = false;//弹框默认不打开
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var formtpl = require('services/form/_jtjyCx.html');
    var popwin;
    var main = {

        init: function (url, data, row, callback) {
            var dataall = {};
            Object.assign(dataall, data, row);
            var html = formtpl('form/_jtjyCx', dataall);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '所内教育集体教育',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: [ '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,  .easyui-combobox'),function(el){
                                    $.parser.parse(el.parentElement);
                                });
                            // }).then(function () {
                            //     return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                            //         combox.initBySelect(el,urls.getDictionary);
                            //     });
                            // }).then(function(){
                            //     return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
                            //         comboxtree.initBySelect(el,urls.getJsCombotree);
                            //     });
                            }).then(function () {
                                var len = document.querySelectorAll('.timeline-item').length -1;
                                if (idx === len) {
                                    main.bindEvent(data);
                                }
                            });
                        }, Promise.resolve());
                    },
                    yes: function() {
                        main.submit(url, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function () {
            // combox.initBySelect('#fm .awdCombox', url.getDictionary);
        },
        submit: function (url, row, callback) {
            utils.closeWin(popwin);

         }
    };
    return main;
});