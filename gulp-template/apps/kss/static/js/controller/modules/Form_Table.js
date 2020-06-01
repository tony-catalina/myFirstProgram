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
//     ['data.jsh','data.xm','data.sxzm','cssj','cssj']]);

define(function(require) {
    const $ = require('jquery');
    require('easyui');
    var grid = require('awd/easyui/grid');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var Table_jbxx = require('services/com/Form_jbxx.html');
    var util = require('awd/easyui/util');
    var utils=require('awd/layui/utils');
    var main = {
        init: function(id, rowdata, ArrayRow) {
            Array.transData(id, rowdata, ArrayRow);
        },
        Person: function(PersonData) {
                Array.PersonTable(PersonData);
        }
    };

    var Array = {
        transData: function(id, row, Array) {
            Array.reduce(function(a, b) {
                $("#Table_ryxx").prepend('<thead><tr id="FormTable_tr"></tr></thead><tbody id="FormTable_tbody"></tbody>');
                for (let i = a.length - 1; i >= 0; i--) {
                    $("#FormTable_tr").prepend('<th>' + a[i] + '</th>');
                };
                if(row.length == undefined){  //此处用来判断单独条数据的渲染，并不是判断数据类型。
                    let Alldata = row;
                    let strdata = '';
                    let montdata = '';
                    for (let numdata in b) {
                        let transnum = b[numdata];
                        let Obj = transnum.split(".");
                        if(Obj.length > 1){
                            let Objdata = Alldata[Obj[0]][Obj[1]];
                            montdata = Objdata;
                        }else{
                        montdata = Alldata[transnum];
                        }
                        if(montdata==undefined||montdata==null){
                            montdata="";
                        }
                        strdata += '<td>' + montdata + '</td>';
                    }
                    $("#FormTable_tbody").append('<tr>' + strdata + '</tr>');
                }else {
                for (let num = 0; num < row.length; num++) {
                    let Alldata = row[num];
                    let strdata = '';
                    let montdata = '';
                    for (let numdata in b) {
                        let transnum = b[numdata];
                        let Obj = transnum.split(".");
                        if(Obj.length > 1){
                            let Objdata = Alldata[Obj[0]][Obj[1]];

                            montdata = Objdata;
                        }else{
                        montdata = Alldata[transnum];
                        }
                        if(montdata==undefined||montdata==null){
                            montdata="";
                        }
                        strdata += '<td>' + montdata + '</td>';
                    }
                    $("#FormTable_tbody").append('<tr>' + strdata + '</tr>');
                    }
                }
            });
            $("#" + id).height(70);
        },
        PersonTable: async (result) =>{
            try{
                util.loadProgress($,true);
                let data = result ? result : grid.getSelected('table')[0];
                await Array.PersonTools(data);
                let jbxx = Table_jbxx('com/Form_jbxx', data);
                if ($('#fm .form-jbxx')[0]) {
                    let element = $('#fm h2')[0];
                    if ($(element).next().length < 1) {
                        $(element).after(jbxx);
                        $.parser.parse('#fm');
                    } else {
                        $(element).next().remove();
                        $(element).after(jbxx);
                        $.parser.parse('#fm');
                    }
                };
                let initTable = new Promise((res,err)=>{
                    combox.initBySelect('#fm .awdCombox', url.getDictionary);
                    res();
                })
                initTable.then(res => util.clearProgress($))
                         .catch(err => {
                              util.clearProgress($);
                              utils.alert('基本信息加载失败，请稍后再试');
                        })
            }
            catch(error){
                util.clearProgress($);
            }
        },
        PersonTools: function(data) {
            return new Promise((resolve,err) => {
                $.ajax({
                    url:url.jbxxphoto,
                    type:'post',
                    data:{'rybh':data.rybh,'type':"1","flag":'1'},
                    success:(res)=>{
                        if(res.result){
                            data.image = res.result;
                        }else{
                            data.image = '../../../static/images/moren.jpg'
                        }
                        resolve(data);
                    },
                    error:(err)=>{
                        data.image = '../../../static/images/moren.jpg';
                        resolve(data);
                    }
                });
            });
        },
    }

    return main;
})