define(function(require){
    var main={
        open:function(id,url){
            layui.use('transfer', function(){
                var transfer = layui.transfer;
                //渲染
                transfer.render({
                    elem: '#'+id , //绑定元素
                    data: main.getData(url),
                    id: 'demo1', //定义索引
                    parseData: function(res){
                    return {
                        "value": res.id //数据值
                        ,"title": res.name //数据标题
                        ,"disabled": res.disabled  //是否禁用
                        ,"checked": res.checked //是否选中
                    }},
                    onchange: function(data, index){
                        console.log(data); //得到当前被穿梭的数据
                        console.log(index); //如果数据来自左边，index 为 0，否则为 1
                    }
                });
            });
        },
        getData:function(url){

        }
    };

    return main;
});