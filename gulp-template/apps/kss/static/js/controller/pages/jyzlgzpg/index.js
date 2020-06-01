/**
模块名称： 教育质量改造评估
开始时间： 2020-2-29
*/
define(function (require) {
  //公共控件、组件、工具导入
  require("jquery");
  require("easyui");

  require("layer.config");
  var utils = require("awd/layui/utils");
  var hideshow = require("modules/showHideClumn");
  var tools = require("awd/jquery/tools");
  var util = require("awd/easyui/util");
  var grid = require("awd/easyui/grid");
  var tree = require("awd/easyui/tree");
  var toolbar = require("modules/toolbar");
  var linkbar = require("modules/linkbar");
  var searchform = require("modules/searchform");
  var clumn = require("modules/clumn/jbxx");
  var clumn1 = require("modules/clumn/jygzzlpg");
  var url = require("modules/url");
  var jyzlpggzForm = require("modules/form/jygzzlpg");
  var jbxxgrid = require("modules/jbxxgrid");
  var jqtree = require("modules/jqtree");
  var common = require("common");
  var rybh_ = "";
  var selectFun = function (rybh) {
    if (!rybh == rybh_) {
      $("#subtable").datagrid("reload", {
        rybh: rybh,
      });
      rybh_ = rybh;
    } else {
      rybh_ = "";
    }
  };
  //界面控件
  var main = {
    init: function () {
      //界面初始化
      main.layout();
      main.eventBind();
    },
    layout: function () {
      //布局初始化
      toolbar.init({
        buttons: [
          {
            id: "add",
            name: "新增",
            icon: "icon-jiahao",
            fun: function () {
              var data = grid.getSelected("table")[0];
              if (data) {
                var currentTime = new Date().Format("yyyy-MM-dd");
                var user = common.info.user.loginname;
                var addData = {
                  djrq: currentTime,
                  id: "",
                  snbh: data.snbh,
                  xm: data.xm,
                  jsh: data.jsh,
                  djr: user,
                  jsbh: data.jsbh,
                  rybh: data.rybh,
                };
                jyzlpggzForm.init(url.JygzzlpgAdd, addData, function () {
                  grid.reload("table");
                });
              } else {
                layer.alert("请选择要新增的记录!");
              }
            },
          },
          // {
          //     id: 'edit', name: '修改', icon: 'icon-jiahao', fun: function () {
          //         var data = grid.getSelected('subtable')[0];
          //         if (data) {
          //             var addData1 = grid.getSelected('table')[0]
          //             var addData2 = { id: data.id, };
          //             var addData = {};
          //             Object.assign(addData, addData1, addData2, data);
          //             jyzlpggzForm.init(url.JygzzlpgUpdate, addData, function () {
          //                 grid.reload('subtable');
          //             });
          //         } else {
          //             layer.alert('请选择要修改的记录!');
          //         }
          //     }
          // },
          {
            id: "print",
            name: "打印评估表",
            icon: "icon-jiahao",
            
          },
        ],
      });

      linkbar.init({
        links: [
          {
            id: "list",
            name: "数据列选择",
            icon: "icon-gengduo7",
            fun: function () {
              hideshow.show("table");
            },
          },
          {
            id: "return",
            name: "页面返回",
            icon: "icon-gengduo6",
            fun: function () {
              alert(3);
            },
          },
        ],
      });

      searchform.init("search", {
        primary: [
          {
            name: "jsh",
            title: "监室号",
            type: "awdCombotree",
            url: url.getJsCombotree,
          },
          {
            name: "xm",
            title: "姓名",
            type: "textbox",
          },
        ],
        query: function (param) {
          grid.query("table", param);
        },
      });

      jbxxgrid.initjbxx("table", false, 250, {}, function (rybh) {
        $("#subtable").datagrid("reload", {
          rybh: rybh,
        });
      }, [{
        id: 'ywmx', icon: '', name: '业务详情', fun: function (data) {
          layer.open({
            title: "业务信息",
            area: ['90%', '600px'],
            zIndex: 1000,
            type: 1,
            content: '<div class="section-container">' +
              '<div class="section-item section-item-one section-item-padding">' +
              '<div class="section-header" style="margin-bottom:1%;">' +
              '<div class="section-controls single-colors" id="tools">' +
              '<button type="button" id="edit">' +
              '<span class="iconfont icon-jiahao"></span>修改' +
              '</button>' +
              '</div>' +
              ' </div>' +
              ' <div class="section-item-content border-top">' +
              '<form id="search" class="search-form"></form>' +
              '<table id="subtable" ></table>' +
              '</div>' +
              '</div>' +
              ' </div> ',
            btn: ['取消'],
            success: function () {

              grid.init("subtable", {
                //暂无页面url
                url: url.JygzzlpgList,
                fit: false,
                width: "100%",
                height: "300",
                firstLoad: true,
                queryParams: { "rybh": data[0].rybh },
                columns: clumn1({
                  check: false,
                  clumns: ["wffzs", "jstc", "zyyx", "czwt", "tskn"],
                  hidden: [],
                }),
              });
              $("#edit").click(function () {
                var data = grid.getSelected('subtable')[0];
                if (data) {
                  var addData1 = grid.getSelected('table')[0]
                  var addData2 = { id: data.id, };
                  var addData = {};
                  Object.assign(addData, addData2, addData1, data);
                  jyzlpggzForm.init(url.JygzzlpgUpdate, addData, function () {
                    grid.reload('table');
                  });
                } else {
                  layer.alert('请选择要修改的记录!');
                }
              })

            }
          })
        }
      }
      ]);

      // grid.init("subtable", {
      //   //暂无页面url
      //   url: url.JygzzlpgList,
      //   fit: false,
      //   width: "100%",
      //   height: "300",
      //   firstLoad: false,
      //   columns: clumn1({
      //     check: false,
      //     clumns: ["wffzs", "jstc", "zyyx", "czwt", "tskn"],
      //     hidden: [],
      //   }),
      // });

      // 二栏变更右键弹窗
      // grid.init("table", {
      //   url: url.jbxx,
      //   fit: false,
      //   width: "100%",
      //   height: window.innerHeight - 200,
      //   firstLoad: false,
      //   columns: clumn({
      //     check: false,
      //     clumns: ["snbh", "xm", "jsh", "bahjString", "rsrq", "gyqx", "badw"],
      //     hidden: [
      //       "xbString",
      //       "dwlxString",
      //       "rsxzString",
      //       "csrq",
      //       "zjlxString",
      //       "zjh",
      //       "hjdString",
      //       "xzdString",
      //       "hyzkString",
      //       "mzString",
      //       "gjString",
      //       "whcdString",
      //       "zyString",
      //       "sfString",
      //       "tssfString",
      //       "jyrq",
      //       "ayString",
      //     ],
      //   }),
      //   onRowContextMenu: function (e, rowIndex, rowData) {
      //     e.preventDefault();
      //     var popwin = layer.open({
      //       title: "业务信息",
      //       area: ["90%", "600px"],
      //       content: '<table id="subtable"></table>',
      //       maxmin: true,

      //       btn: ["取消", "修改"],
      //       success: function () {
      //         grid.init("subtable", {
      //           url: url.ygryszList,
      //           fit: false,
      //           width: "100%",
      //           height: window.innerHeight - 300,
      //           firstLoad: false,
      //           columns: clumn1({
      //             check: false,
      //             clumns: ["wffzs", "jstc", "zyyx", "czwt", "tskn"],
      //             hidden: [],
      //           }),
      //         });
      //         $("#subtable").datagrid("reload", {
      //           rybh: rowData.rybh,
      //         });
      //       },
      //     });
      //   },
      // });

      jqtree.init("jqtree", "table"); //有监区树就加，没有不加
    },
    eventBind: function () {
      //事件绑定
    },
  };

  /**
   *运行入口
   */
  $(main.init);
});
