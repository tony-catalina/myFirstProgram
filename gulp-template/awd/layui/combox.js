define(function(require){
    require('jquery');
    var tools=require('awd/jquery/tools');
    main={
        init:function(select,url){
            $(select).each(function(){
                var $this=$(this);
                var resultData=[];
                var htmls = '<option value="">请选择</option>'; //全局变量
                var _url=url+'?node='+(tools.isUndefined($this.attr('field'))?'':$this.attr('field'));
                var _text = $this.attr('value');
                $.ajax({
                    url: _url,
                    type: "post",
                    dataType : "json",
                    contentType : "application/json",
                    async: false,//这得注意是同步
                    success: function (result) {
                        if(result.length>0){
                            resultData = result;
                            for(var x in resultData){
                                htmls += '<option value = "' + resultData[x].code + '">' + resultData[x].content + '</option>'
                            }
                            $this.html(htmls);
                        }
                    }
                });
                if (!tools.isUndefined(_text)) {
                    $this.val(_text);
                }
            });
            layui.use('form', function () {
                var form = layui.form;
                form.render('select');
            });


        }
    };

    return main;

});