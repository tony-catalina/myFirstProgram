/**
 * 工具栏
 * {
 *     buttons:[
 *     {id:'',name:'',icon:'',fun:function(){}}
 *     ]
 * }
 */
define(function(require){
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var button = require('services/com/links.html');
    var color = require('services/com/color.html');
    var main={
        init:function(option) {
            var buttonhtml = button('com/links', option);
            $('#links').html(buttonhtml);
            option.links.forEach(function(target){
                if(target.id=="color"){
                    var colorhtml=color('com/color',{});
                    $('#color').tooltip({
                        position: 'right',
                        content: colorhtml,
                        onShow: function(){
                            var t = $(this);
                            t.tooltip('tip').unbind().bind('mouseenter', function(){
                                t.tooltip('show');
                            }).bind('mouseleave', function(){
                                t.tooltip('hide');
                            });
                        }
                    });
                }
                $('#'+target.id).on('click',function(){
                    if(tools.isFunction(target.fun)){
                        target.fun();
                    }
                });
            });
        }
    };
    return main;

});