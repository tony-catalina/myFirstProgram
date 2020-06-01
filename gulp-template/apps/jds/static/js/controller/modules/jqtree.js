define(function(require, exports, module) {
  var tree = require('awd/easyui/tree');
  'use strict';

  return {
    init: function(id, option) {

      $('#'+id).tree({
        url: "/kss_jq/getJqTree",
        method: "get",
        loadFilter: function(data) {
          if (data.success) {
            return data.result;
          } else {
            $.messager.alert("提示", "数据获取失败", "info");
            return {};
          }

        },

        //鼠标移上事件获取获取监区人数
        onLoadSuccess: function(node, data) {
          $(".tree-hit").parent().addClass("treet");
          $(".tree-indent").parent().addClass("treet1");
          var rows = $('#jqjsTree').tree('getRoots');
          var row = $('#jqjsTree').tree('getRoot');
          var childrenNodes = $('#jqjsTree').tree('getChildren', row.target);
          var trId;
          var trrId;
          $(".treet").bind("mouseover", function() {
            trId = $(this).attr("id");
            trId = trId.replace("_easyui_tree_", "");
            for (i = 0; i < rows.length; i++) {

              if (trId == i) {
                var text1 = rows[i - 1].text;
                var num = text1.substring(text1.length - 3, text1.length - 2);

                $('.treet').tooltip({
                  trackMouse: 'true',
                  content: '<div style="height: 50px;width:100px">' +
                    '<div class="top" style="font-size: 12px;margin-bottom: 5px;"></div>' +
                    '<div>人数:' + num + '人</div></div>'
                });

              }
            }
          });

          $(".treet1").bind("mouseover", function() {
            trrId = $(this).attr("id");
            trrId = trrId.replace(trrId, "");
            for (i = 0; i < rows.length; i++) {

              if (trId == i) {
                var text1 = rows[i - 1].text;
                var num = text1.substring(text1.length - 3, text1.length - 2);

                $('.treet1').tooltip({
                  trackMouse: 'true',
                  content: '<div style="height: 50px;width:100px">' +
                    '<div class="top" style="font-size: 12px;margin-bottom: 5px;"></div>' +
                    '<div>人数:' + num + '人</div></div>'
                });

              }
            }


          });
        },


        onClick: function(node) {

          var data = {};
          var pageSize = $('#' + id).datagrid("getPager").pagination("options").pageSize;
          var pageIndex = $('#' + id).datagrid("getPager").pagination("options").pageNumber;
          if (node.id.length == "2") {
            data = {
              "jsh$rightlike": node.id,
            };

          } else {
            data = {
              "jsh$eq": node.id,
            }
          }

          $('#' + id).datagrid('clearSelections');
          $('#' + idu).datagrid('clearSelections');
          $('#' + idu).datagrid('loadData', {
            total: 0,
            rows: []
          });
          $('#' + idu).datagrid("selectRow", 0);
          $('#' + id).datagrid('load', data);

        }
      });
    }
  }

});
