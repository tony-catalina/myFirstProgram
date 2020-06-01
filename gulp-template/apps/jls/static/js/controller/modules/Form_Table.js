//  Form表单 表格数据遍历公共组件。

//  ****函数与参数说明
//  ** 需在页面生成标签 <table class="container-formtable Form_Table" border=1  id="" style="width:100%;"></table>
//  ** init(id,rowdata,Array[obj_title,obj_field]) 动态生成表格组件方法。
//   * id : 表格id
//   * rowdata : 人员基本信息数据，一般为选中表格的人员基本信息
//   * Array[ obj_title , obj_field ]  : 动态表格所需的标题与相应数据参数。

//   * init方法调用举例：
//     Obj.init("Table_ryxx",_jbxx,[
//     ['监室号','姓名','涉嫌罪名','出所时间','提解干警'],
//     ['jsh','xm','sxzm','cssj','cssj']]);

//   * PersoTable方法 弊端
//     1.仅作用于监听id=add的按钮。
//     2.数据获取由组件自行获取添加。

define(function(require){
    require('jquery');
    require('easyui');
    var grid=require('awd/easyui/grid');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var Table_jbxx = require('services/com/Form_jbxx.html');
    var main = {
        init:function(id,rowdata,ArrayRow){
            Array.transData(id,rowdata,ArrayRow);
        },
        Person:function(PersonData){
            Array.PersonTable(PersonData);
            Array.PersonTools();
        }
    };

    var Array = {
        transData:function(id,row,Array){
            Array.reduce(function(a,b){
               $("#Table_ryxx").prepend('<thead><tr id="FormTable_tr"></tr></thead><tbody id="FormTable_tbody"></tbody>');
               for(let i = a.length - 1; i >= 0 ; i--){
                $("#FormTable_tr").prepend('<th>'+a[i]+'</th>');
               };
                for(let num = 0 ; num < row.length ; num++){
                        let Alldata = row[num];
                        let strdata  = '';
                        let montdata = '';
                            for(let numdata in b){
                                let transnum = b[numdata];
                                montdata = Alldata[transnum];
                                strdata += '<td>'+montdata+'</td>';
                            }
                        $("#FormTable_tbody").append('<tr>'+strdata+'</tr>');
                    }
               });
            $("#"+id).height(70);   
        },
        PersonTable:function(result){
            var data = result ? result : grid.getSelected('table')[0];
            var jbxx = Table_jbxx('com/Form_jbxx',data);
            if($('#fm h2')[0].textContent == "基本信息"){
                let element = $('#fm h2')[0];
                if($(element).next().length < 1){
                     $(element).after(jbxx);
                     $.parser.parse('#fm');
                }else {
                      $(element).next().remove();
                      $(element).after(jbxx);
                      $.parser.parse('#fm');
                } 
            }
        },
        PersonTools:function(){
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
        }
    }

    return main;
})