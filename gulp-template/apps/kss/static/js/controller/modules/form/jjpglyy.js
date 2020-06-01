define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jjpglyy.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var common=require('common');
    var popwin;
    var comboxtree = require('awd/easyui/comboxtree');
    var isOpen=false;
    var combogrid = require('awd/easyui/combogrid');
    var commFun = require('modules/commFun');
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_jjpglyy',data);
         if(!isOpen){
             popwin = utils.showWin({
                 title: '救济物品管理',
                 area: ['90%', '600px'],
                 content: html,
                 maxmin: true,
                 buttons: ['保存', '取消'],
                 success: function() {
                     isOpen = true;
                     Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                         return p.then(function () {
                             return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-datebox, .easyui-combobox,.easyui-numberbox'),function(el){
                                 $.parser.parse(el.parentElement);
                             });
                         }).then(function () {
                             return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                 combox.initBySelect(el,urls.getDictionary);
                             });
                         }).then(function(){
                             return commFun.processQueued(el.querySelectorAll('.awdCombogrid'),function(el) {
                                 combogrid.initPageClass(el,urls.getDictionaryPage);
                             });
                         }).then(function(){
                             return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
                                 comboxtree.initBySelect(el,urls.getJsCombotree);
                             });
                         }).then(function(){
                             return commFun.processQueued(el.querySelectorAll('.awdTagbox'),function(el) {
                                 comboxtree.initTagBox(el,urls.getDictionary);
                             });
                         }).then(function () {
                             var len = document.querySelectorAll('.timeline-item').length -1;
                             if (idx === len) {
                                 main.bindEvent(data);
                             }
                         });
                     }, Promise.resolve());
                 },
                 yes: function() {
                     main.submit(url,data, callback);
                 }
             },function(){
                 isOpen=false;
             });
         }
        },
        bindEvent: function() {
            $("#djr").textbox().textbox('setValue',common.info.user.loginname); 
            var nowDate=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
            $("#jjrq").datetimebox().datetimebox("setValue",nowDate);
            $("#djsj").datetimebox().datetimebox("setValue",nowDate);
            
            // $("sptpfm").change(function(){
            //     var imgReader = new FileReader();
            //     //图片文件过滤
            //     regexImageFilter = /^(?:image\/bmp|image\/gif|image\/jpg|image\/jpeg|image\/png)$/i;
            //     var files = $(this).prop("files");
            //     if(files.length>0){
            //         var file = files[0];
            //         if(regexImageFilter.test(file.type)){
            //             imgReader.readAsDataURL(file);
            //         }else{
            //             layer.alert("只能选择图片")
            //         }
            //     }else{
            //         layer.alert("请选择图片")
            //     }
            // })
            // imgReader.onload = function(evt){
            //     console.log(evt);
            //     $("#imghead").prop("src",evt.target.result);
            // }
            $("#sptpfm").on("change",function(){
                var file = document.getElementById('sptpfm');
                console.log(file)
                if (file.files && file.files[0]){
                    var img = document.getElementById('imghead');
                    console.log("=="+img);
                    img.onload = function(){
                        img.width  =  90;
                        img.height = 70;
                    }
                    var reader = new FileReader();
                    reader.onload = function(evt){img.src = evt.target.result;}
                    reader.readAsDataURL(file.files[0]);
                }
            })
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.id=data.id;
                postData.rybh=data.rybh;
                //postData.ywlcid=data.ywlcid;
                //postData.taskid=data.taskid;
                //postData.processName='kss_emsz';
                //postData.processNode='kss_emsz_emszcb';
                util.ajax({
                    url: url,
                    data: postData,
                    func: function(data) {
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