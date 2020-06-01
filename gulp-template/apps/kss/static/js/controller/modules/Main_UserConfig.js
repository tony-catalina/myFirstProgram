define(function(require) {
    const $ = require('jquery');
    require('layerui');
    require('layui');
    var utils = require('awd/layui/utils');
    var util = require('awd/easyui/util');
    var tools = require('awd/jquery/tools');
    const SyMainTempl = require('services/com/Sy_Main.html');
    var main = {
        PageChooes:(id,url)=>{
            const ControlPromise =  new Promise((resolve,reject)=>{
                $.ajax({url:url,type:"POST",data:{},
                beforeSend:()=>util.loadProgress($,true),
                success:res=>{const ResData = res.result.rows;
                    layer.open({
                        title:'模块选择',
                        area:['50%','50%'],
                        btn:[],
                        id:"layerOpen"+1,
                        content:'<table class="PageChoose_Table"></table>',
                        success:()=>{
                         let tdString = '<tr class="list">';
                         ResData.forEach((item,index)=>{
                         tdString += '<td id="'+item.id+'" name="'+item.module+'" moduleid="'+item.module+'"><img src="'+item.imageurl+'"/><p>'+item.modulename+'</p></td>'
                         if((index+1) % 4 == 0 && index !=0){
                           tdString += '</tr>'
                           $('.PageChoose_Table').append(tdString);
                           tdString = '<tr class="list">';
                         }else if((index+1) % 4 != 0){
                            if((index+1) == ResData.length){
                                tdString += '</tr>'
                                $('.PageChoose_Table').append(tdString);
                                tdString = '<tr class="list">';
                            }}
                         })
                         const Table_Tds = $('.PageChoose_Table').find('td');
                         resolve(Table_Tds);
                        }
                    })
                },
                complete:()=>{util.clearProgress($)}        
                })
            })
            return ControlPromise;
        },
        PageChoose_Function:(id,res,data,url)=>{
            return new Promise((resolve,reject)=>{
                try{
                    res.each(function(index,item){
                        const name  = $(this).attr('id'),CardNum = $(this).attr('name');
                        let Htmldata = {value:CardNum};
                        $(this).click(()=>{
                            let ErrorSwitch = false;
                            data.forEach((item,index)=>{
                                if(item.value == CardNum){
                                    layer.alert('已存在该模块！');
                                         $("#"+id).empty();
                                    let Html = SyMainTempl('com/Sy_Main',{"value":""});
                                    $("#"+id).prepend(Html);
                                    ErrorSwitch =true;
                                    resolve();
                                } 
                            })
                            if(ErrorSwitch == false){
                                $.ajax({url:url,type:'POST',data:{"moduleId":name,"location":id},
                                beforeSend:()=>layer.load(0,{shade: [0.7, '#fff']}),
                                success:res=>{
                                     $("#"+id).empty();
                                     let Html = SyMainTempl('com/Sy_Main',Htmldata);
                                     $("#"+id).prepend(Html);
                                     resolve(CardNum);
                                },
                                complete:()=>{layer.closeAll();layer.alert('配置成功！')}
                                })
                            }
                        })  
                    })
                }catch(err){
                    console.log(err)
                }
            })
        }
    };
    return main;
});
