define(function (require) {
    var tools=require('awd/jquery/tools');
    var tmpl=require('services/toolbar.html');
    var _options;
    var main={
        getToolBar:function(options){
            if(tools.isUndefined(options.searchname)){
                options.searchname='search';
            }
            _options=options;
            var toolbarhtml=tmpl('toolbar',options);
            main.bindEvent(options);
            return  toolbarhtml;
        },
        bindEvent:function(){
            setTimeout(function(){
                $('#searchBtn').on('click',function(){
                    _options.search();
                });
                $('#searchform button').each(function(index){
                    $(this).on('click',function(){
                        var buttonname=$(this).html();
                        _options.groups.map(function(group,goupindex,groups){
                            group.buttons.map(function(button,buttonindex,buttons){
                                if(button.name==buttonname){
                                    button.fun();
                                }
                            });
                        });

                    });
                });
            },50);
        },
        getParams:function(){
            return  tools.getJsonByForm('searchform');
        }
    };

    return main;

});