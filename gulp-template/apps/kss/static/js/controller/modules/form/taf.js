define(function (require) {
  require("modules/commFun");
  require('easyui')
  var tools = require("awd/jquery/tools");
  var util = require("awd/easyui/util");
  var utils = require("awd/layui/utils");
  var formtpl = require("services/form/_taf.html");
  var combox = require("awd/easyui/combox");
  var comboxtree = require("awd/easyui/comboxtree");
  var url = require("modules/url");
  var grid = require("awd/easyui/grid");
  var clumn = require("modules/clumn/jbxx");
  var url = require("modules/url");
  var popwin,
    message = 0;
  var main = {
    init: function (url, data, callback) {
      var html = formtpl("form/_taf", data);
      popwin = utils.showWin({
        title: "同案犯",
        area: ["90%", "600px"],
        content: html,
        maxmin: true,
        zIndex: 19891014,
        buttons: ["保存", "取消"],
        success: function () {
          $.parser.parse("#fm");
          main.bindEvent();
        },
        yes: function () {
          main.submit(url, data, callback);
        },
      });

    },
    bindEvent: function () {
      $("#xzjaj").on("click", () => {
        layer.open({
          type: 1,
          title: "添加案件",
          area: ["50%", "600px"],
          maxmin: true,
          btn: ["添加案件"],
          content:
            '<div class="easyui-layout" id="searchForm" style="width:100%;height:100%; text-align:center">' +
            '<input  id="searchName" "panelHeight="auto" class="easyui-textbox" />' +
            '<button class="layui-btn layui-btn-normal lay-btn-xs search" id="search">搜索</button>' +
            '<table id="ajlb"></table>' +
            "</div>",

          success: () => {
            $.parser.parse('#searchForm');
            grid.init("ajlb", {
              url: url.jbxx,
              fit: false,
              width: "98%",
              height: "85%",
              firstLoad: true,
              singleSelect: false,
              columns: clumn({
                check: true,
                clumns: [
                  "rybh",
                  "xm",
                  "jsh",
                  "ayString",
                  "rsrq",
                  "gyqx",
                  "badw",
                ],
                hidden: [
                  "xbString",
                  "csrq",
                  "rsxzString",
                  "dwlxString",
                  "zjlxString",
                  "zjh",
                  "hjdString",
                  "xzdString",
                  "mzString",
                  "gjString",
                  "whcdString",
                  "zyString",
                  "sfString",
                  "tssfString",
                  "ayString",
                  "jyrq",
                ],
              }),
            });
            console.log("添加案件窗口打开");
            $(".search").on("click", function () {
              console.log("click me ");
              grid.query("ajlb", {
                xm_like: $("#searchName").textbox("getValue"),
              });
            });

            combox.initBySelect(".awdCombox", url.getDictionary);
            ListenChange.Add_Person();
          },
          yes: () => {
            let Ajlb = $("#ajlb").datagrid("getSelections"),
              AjlbList = new Array();
            if (Ajlb) {
              Ajlb.forEach((item, index) => AjlbList.push(item.ayString));
            }
            console.log(AjlbList);
            // layer.close(layer.index);
            for (let i in AjlbList) {
              let MessageId = "inputMessage_" + message,
                InputName = "inputName_" + message;
              let SubmiText = AjlbList[i];
              console.log(AjlbList[i]);
              $("#pushnr").append(
                '<div style="margin-top:20px !important"><h2 style="display: block; ; font-size: 100%;">' +
                SubmiText +
                "</h2>" +
                '<span style=" margin-left:5%;width:50%"><input class="easyui-tagbox" style="margin-buttom:20px" id=' +
                MessageId +
                ' style="min-width:350px;" name=' +
                InputName +
                "></input></span>" +
                '<span class="tjtar">+ 添加同案人</span>' +
                "</div>"
              );
              $.parser.parse();
              ListenChange.Add_ContentPerson(MessageId);
              layer.close(layer.index);
              message++;
            }
          },
        });
      });
    },

    submit: function (url, data, callback) {
      /**先校验form */
      if ($('#fm').form('validate')) {
        var postData = util.form2Json('fm');
        postData.id = data.id;
        util.ajax({
          url: url,
          data: postData,
          func: function (data) {
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
  var ListenChange = {
    Add_Person: () => {
      $(".addtj").on("click", () => {
        // let MessageId = "inputMessage_" + message,
        //   InputName = "inputName_" + message;
        // let SubmiText = $("#Aj_Data").combobox("getText");
        // $("#pushnr").append(
        //   '<div><h2 style="display: inline-block;font-size: 100%;">' +
        //     SubmiText +
        //     "</h2>" +
        //     '<span style="margin-left:5%;width:50%"><input class="easyui-tagbox" id=' +
        //     MessageId +
        //     ' style="min-width:350px;" name=' +
        //     InputName +
        //     "></input></span>" +
        //     '<span class="tjtar">+ 添加同案人</span>' +
        //     "</div>"
        // );
        // $.parser.parse();
        // ListenChange.Add_ContentPerson(MessageId);
        // layer.close(layer.index);
        // message++;
      });
    },
    Add_ContentPerson: (id) => {
      let ListClick = document.getElementsByClassName("tjtar"),
        transData = id;
      (name_message = "name_" + message), (jsh_message = "jsh_" + message);
      for (let i = 0; i < ListClick.length; i++) {
        ((transData) => {
          let item = ListClick[i];
          item.onclick = () => {
            layer.open({
              type: 1,
              title: "同案人员",
              area: ["75%", "90%"],
              closeBtn: 1,
              maxmin: true,
              btn: ["添加同案犯", "关闭"],
              content: `<div class="easyui-layout" style="width:100%;height:100%">
                  <div class="layui-row" style="margin:2% 0;text-align:right;">
                    <div class="layui-col-md2" class="easyui-textbox" >姓名：</div>
                    <div class="layui-col-md3" id="searchName2" style="text-align:left;">
                      <input class="easyui-textbox" id="${name_message}"
                        style="min-width:180px;float:left;">
                </div>
                      <div class="layui-col-md2">监室号：</div>
                      <div class="layui-col-md3" style="text-align:left;">
                        <input class="easyui-textbox" id="${jsh_message}"
                          style="min-width:180px;float:left;">
                </div>
                        <div class="layui-col-md2" style="text-align:left;">
                          <div id="searchBtn" style="cursor:pointer">
                            <span class="iconfont icon-icon-chaxun"></span>&nbsp;&nbsp;查询</div>
                        </div>
                      </div>
                      <table id="tjtable"></table>
                    </div>`,
              success: () => {
                comboxtree.initBySelect("#" + jsh_message, url.getJsCombotree);
                $.parser.parse('#searchName2');
                grid.init("tjtable", {
                  url: url.jbxx,
                  fit: false,
                  width: "98%",
                  height: "85%",
                  firstLoad: true,
                  singleSelect: false,
                  columns: clumn({
                    check: true,
                    clumns: [
                      "rybh",
                      "xm",
                      "jsh",
                      "bahjString",
                      "rsrq",
                      "gyqx",
                      "badw",
                    ],
                    hidden: [
                      "xbString",
                      "csrq",
                      "rsxzString",
                      "dwlxString",
                      "zjlxString",
                      "zjh",
                      "hjdString",
                      "xzdString",
                      "mzString",
                      "gjString",
                      "whcdString",
                      "zyString",
                      "sfString",
                      "tssfString",
                      "ayString",
                      "jyrq",
                    ],
                  }),
                });
                ListenChange.Add_SearchJbxx(name_message, jsh_message);
              },
              yes: () => {
                let ryxx = $("#tjtable").datagrid("getSelections"),
                  RyxxList = new Array();
                if (ryxx) {
                  ryxx.forEach((item, index) => RyxxList.push(item.xm));
                }
                console.log(RyxxList);
                $("#inputMessage_" + i).combobox("setValues", RyxxList);
                layer.close(layer.index);
              },
            });
          };
        })(transData);
      }
    },
    Add_SearchJbxx: (name, jsh) => {
      let SearchClick = document.getElementById("searchBtn");
      SearchClick.onclick = () => {
        grid.query("tjtable", {
          xm_like: $("#" + name).textbox("getValue"),
          jsh: $("#" + jsh).textbox("getValue"),
        });
      };
    },
  };
  return main;
});
