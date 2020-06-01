define(function(require) {
  'use strict';
  require('jquery');
  require('easyui');
  require('watermark');
  var util = {
    watermark: function(text) {
      $('body').watermark({
        texts: text, //水印文字
        textColor: '#d2d2d2', //文字颜色
        textFont: '14px 微软雅黑', //字体
        width: 100, //水印文字的水平间距
        height: 100, //水印文字的高度间距（低于文字高度会被替代）
        textRotate: -30 //-90到0， 负数值，不包含-90
      });
    },
    /**
     * [alertProgress 操作进度条]
     *
     * @param {[Object]}
     *            progressObj [使用进度条的对象]
     * @param {Boolean}
     *            isOpen [是否为打开进度条]
     * @param {[String]}
     *            text [显示的文本]
     */
    alertProgress: function(progressObj, isOpen, text) {
      if (isOpen) {
        progressObj.messager.progress({
          text: text
        });
      } else {
        progressObj.messager.progress('close');
      }
    },
    /**
     * [loadProgress 数据加载进度条]
     *
     * @param {[Object]}
     *            progressObj [使用进度条的对象]
     * @param {Boolean}
     *            isOpen [是否为打开进度条]
     */
    loadProgress: function(progressObj, isOpen) {
      util.alertProgress(progressObj, isOpen, "数据加载中....");
    },
    /**
     * [saveProgress 数据保存进度条]
     *
     * @param {[Object]}
     *            progressObj [使用进度条的对象]
     * @param {Boolean}
     *            isOpen [是否为打开进度条]
     */
    saveProgress: function(progressObj, isOpen) {
      util.alertProgress(progressObj, isOpen, "数据处理中....");
    },
    /**
     *
     * @param progressObj
     */
    clearProgress:function(progressObj){
      progressObj.messager.progress('close');
    },


    /**
     * [getArrayIndex 获取值在数组中的位置]
     *
     * @param {[Array]}
     *            arr [数组]
     * @param {[Object]}
     *            o [要查找的对象]
     * @return {[Number]} [对象所在的下标,没有找到返回-1]
     */
    getArrayIndex: function(arr, o) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == o) {
          return i;
        }
      }
      return -1;
    },

    /**
     * [getChecked 获取选中的数据]
     *
     * @param {[datagrid]}
     *            grid [数据表格对象]
     * @param {[boolean]}
     *            single [是否为单选]
     * @return {[Array]} [选择的数据,如果没有选中或者不符合规则则返回null]
     */
    getChecked: function(grid, single) {
      var checked = grid.datagrid('getChecked');
      if (checked.length == 0) {
        $.messager.alert("错误", "尚未选择任何数据", "info");
        return null;
      }
      if (single && checked.length > 1) {
        $.messager.alert("错误", "该功能仅支持单笔操作,请勿多选", "info");
        return null;
      }
      return checked;
    },
    /**
     * [getSelections 获取选中的数据]
     *
     * @param {[datagrid]}
     *            grid [数据表格对象]
     * @param {[boolean]}
     *            single [是否为单选]
     * @return {[Array]} [选择的数据,如果没有选中或者不符合规则则返回null]
     */
    getSelections: function(grid, single) {
      var selections = grid.datagrid('getSelections');
      if (selections.length == 0) {
        $.messager.alert("错误", "尚未选择任何数据", "info");
        return null;
      }
      if (single && selections.length > 1) {
        $.messager.alert("错误", "该功能仅支持单笔操作,请勿多选", "info");
        return null;
      }
      return selections;
    },
    startEditing: function(grid, field) {
      var selections = getChecked(grid, false); // 获取到所有选中的行
      if (selections != undefined) {
        for (var i = 0, len = selections.length; i < len; i++) {
          var selection = selections[i];
          var index = grid.datagrid("getRowIndex", selection);
          grid.datagrid("beginEdit", index);
        }
        if (field != undefined) {
          var ed = grid.datagrid('getEditor', {
            index: index,
            field: field
          });
          $(ed.target).textbox('textbox').select().focus();
        }
      }
    },
    /**
     * [endEditing 结束grid所有行编辑状态]
     *
     * @param {[datagrid]}
     *            grid [数据表格对象]
     * @return {[boolean]} [所有行验证通过则结束所有行编辑状态]
     */
    endEditing: function(grid) {
      var rows = grid.datagrid('getRows');
      for (var i = 0; i < rows.length; i++) {
        if (grid.datagrid('validateRow', i)) { // 将保存ID与数组内id一一对比判断有无重复
          grid.datagrid('endEdit', i);
        } else {
          return false;
        }
      }
      return true;
    },
    /**
     * [checkChanges 验证是否有修改的数据]
     *
     * @param {[datagrid]}
     *            grid [数据表格对象]
     * @param {[boolean]}
     *            endEdit [是否自动结束编辑状态]
     * @return {[type]} [description]
     */
    checkChanges: function(grid, endEdit) {
      if (endEdit) {
        endEditing(grid);
      }
      var rows = getChanges(grid);
      if (rows.length > 0) {
        alert("有 " + rows.length + " 条已修改数据尚未保存,请保存或撤销后再试");
        return false;
      }
      return true;
    },
    /**
     * [getChanges 获取修改的数据行数]
     *
     * @param {[datagrid]}
     *            grid [数据表格对象]
     * @param {[String]}
     *            dataType [数据类型,取值inserted,deleted,updated]
     * @return {[Array]} [匹配的数组]
     */
    getChanges: function(grid, dataType) {
      if (dataType == undefined) {
        dataType = '';
      }
      var rows = grid.datagrid('getChanges', dataType);
      return rows;
    },
    /**
     * [reject 撤销grid未提交的修改]
     *
     * @param {[datagrid]}
     *            grid [数据表格对象]
     */
    reject: function(grid) {
      grid.datagrid('rejectChanges');
    },
    /**
     * [getGridRowById 获取grid行通过id]
     * @param  {[datagrid]} grid    [表格对象]
     * @param  {[String]} idField [id]
     * @return {[number]}         [row对应的下标,未找到返回-1]
     */
    getGridRowById: function(grid, idField) {
      if (grid) {
        var rows = grid.datagrid('getRows');
        var rowId = grid.datagrid('options').idField;
        for (var i = rows.length - 1; i >= 0; i--) {
          var row = rows[i];
          if (row[rowId] == idField) {
            return i;
          }
        };
      }
      return -1;
    },
    /**
     * [getDataGridNos 获取datagrid或datalist的id值集]
     * @param  {[Dom]} grid [datagrid或datalist对象]
     * @param  {[String]} type [grid的类型,如datagrid,datalist]
     * @param  {[Boolean]} selected [是否仅获取已选中的编号集]
     * @return {[String]}      [返回id,id,id...]
     */
    getDataGridNos: function(grid, type, selected) {
      var result = "";
      if (grid) {
        var rows = undefined;
        if (selected) {
          rows = grid[type]('getSelections');
        } else {
          rows = grid[type]('getRows');
        }
        var options = grid[type]('options');
        var col = options.dataNoField;
        $.each(rows, function(index, value) {
          result += value[col] + ',';
        });
        if (result.length > 0) {
          result = result.substring(0, result.length - 1);
        }
      }
      return result;
    },
    /**
     * 隐藏或显示列
     * @param grid
     * @param clumns
     * @param hide
     */
    showhideClumn:function(grid,clumns,hide){
      if(hide){
        clumns.each(function(){
          grid.datagrid('hideColumn', $(this));
        });
      }else{
        clumns.each(function(){
          grid.datagrid('showColumn', $(this));
        });
      }
    },

    /**
     * [getTreeChecked 获取选择的数据]
     *
     * @param {[tree]}
     *            tree [树控件对象]
     * @param {[boolean]}
     *            single [是否为单选]
     * @param {[String]}
     *            msg [提示信息]
     * @return {[Array]} [选择的数据,如果没有选中或者不符合规则则返回null]
     */
    getTreeChecked: function(tree, single, msg) {
      if (msg == undefined) {
        msg = "(树)";
      }
      var selections = tree.tree('getChecked');
      if (selections.length == 0) {
        $.messager.alert("错误", "尚未选择任何数据" + msg, "info");
        return null;
      }
      if (single && selections.length > 1) {
        $.messager.alert("错误", "该功能仅支持单笔操作,请勿多选" + msg, "info");
        return null;
      }
      return selections;
    },
    /**
     * [getTreeSelected 获取选择的数据]
     *
     * @param {[tree]}
     *            tree [树控件对象]
     * @param {[String]}
     *            msg [提示信息]
     * @return {[Node]} [选择的数据,如果没有选中则返回null]
     */
    getTreeSelected: function(tree, msg) {
      if (msg == undefined) {
        msg = "(树)";
      }
      var selected = tree.tree('getSelected');
      if (selected == null) {
        $.messager.alert("错误", "尚未选择任何数据" + msg, "info");
      }
      return selected;
    },
    /**
     * [getTreeSelectionNos 获取选中的tree节点no]
     *
     * @param {[tree]}
     *            tree [树控件对象]
     * @return {[String]} [节点的nos:no,no,no]
     */
    getTreeSelectionNos: function(tree) {
      var nodes = tree.tree('getChecked');
      var nos = '';
      if (nodes) {
        for (var i = 0, len = nodes.length; i < len;) {
          var node = nodes[i];
          i++;
          if (i == len) {
            nos += node.id;
          } else {
            nos += node.id + ',';
          }
        };
      };
      return nos;
    },
    /**
     * [startEditing 批量设置grid选中数据为修改状态]
     *
     * @return {[type]} [description]
     */
    /**
     * [addEnterEvent 添加回车事件]
     * @param {[String]}   id       [#id]
     * @param {[String]}   type     [easyuiType]
     * @param {Function} callback [回车调用事件]
     */
    addEnterEvent: function(id, type, callback) {
      $(id)[type]('textbox').bind('keydown', function(e) {
        if (e.keyCode == 13) {
          var nowTime = new Date().getTime();
          var clickTime = $(this).attr("ctime");
          if (clickTime != 'undefined' && (nowTime - clickTime < 1000)) {
            return false;
          } else {
            if ($(e.target).val().length > 0) {
              $(this).attr("ctime", nowTime);
              callback();
            }
          }
        };
      });
    },
    /**
     * [addTreeRoot 添加树的root节点]
     * @param {[Array]} data     [树数据]
     * @param {[String]} rootText [root节点名]
     * @return {[Array]} 返回添加root节点后的数据
     */
    addTreeRoot: function(data, rootText) {
      if (data != undefined) {
        var indexs = getTreeRootIndex(data);
        var root = {
          id: undefined,
          text: rootText,
          checked: false,
          child: [],
          iconCls: "ext-icon-group"
        };
        for (var i = indexs.length - 1; i >= 0; i--) {
          data[indexs[i]].pid = undefined;
        };
        data.unshift(root);
      };
      return data;
    },
    /**
     * [getTreeRootIndex 获取树所有root节点的index]
     * @param  {[Array]} data [树数据]
     * @return {[Array]}      [所有root节点的index]
     */
    getTreeRootIndex: function(data) {
      var rootIndex = [];
      if (data != undefined) {
        for (var i = 0; i < data.length; i++) {
          if (isRoot(data[i], data)) {
            rootIndex.push(i);
          }
        };

        function isRoot(d, ds) {
          if (ds != undefined && d != undefined) {
            for (var i = ds.length - 1; i >= 0; i--) {
              if (d.pid == ds[i].id) {
                return false;
              }
            };
            return true;
          };
          return false;
        }
      };
      return rootIndex;
    },

    /**
     * [addTooltip 添加提示]
     * @param {[String]} id       [对象id,#id]
     * @param {[String]} value    [显示的提示内容]
     * @param {[String]} position [显示的位置]
     */
    addTooltip: function(id, value, position) {
      if (value == undefined || value.length == 0) {
        value = '无';
      }
      if (value == undefined || value.length == 0) {
        position = 'bottom';
      }
      $(id).textbox('textbox').tooltip({
        position: position,
        content: '<span style="color:#fff">' + value + '</span>',
        showDelay: 0,
        hideDelay: 0,
        onShow: function() {
          $(this).tooltip('tip').css({
            backgroundColor: '#666',
            borderColor: '#666'
          });
        }
      });
    },


    ajax: function(obj) { //ajax请求数据
      $.ajax({
        url: obj.url,
        async: obj.noAsync == undefined ? !0 : !1,
        data: obj.data == undefined ? "" : obj.data,
        dataType: obj.dataType == undefined ? "json" : obj.dataType,
        type: obj.type == undefined ? "post" : obj.type,
        contentType: obj.contentType == undefined ? "application/x-www-form-urlencoded" : obj.contentType,
        traditional: obj.traditional == undefined ? false : obj.traditional,
        timeout: 30000,
        beforeSend: function(jqXHR, setting) { //数据查询过程中
          if (obj.noneOpen == undefined) {
            util.loadProgress($,true);
          }
        },
        complete: function(XMLHttpRequest, textStatus) { //数据查询超时
          if (textStatus == "timeout") {
            util.alertProgress($,true,'数据查询超时');
            util.clearProgress($);
          }
        },
        success: function(data) { //数据查询成功
          util.clearProgress($);
          if (obj.func != undefined) {
            obj.func(data);
          }
        },
        error: function(error) { //数据查询失败
          util.clearProgress($);
          if (obj.error != undefined) {
            obj.error(error);
          }
        }
      });
    },
    /**
     * 显示模态窗口
     *
     * @param {String}
     *            win 模态窗口ID
     * @param {String}
     *            options 模态窗口属性
     */
    showWindow: function(win, options) {
      $("#" + win).window(options);
    },
    /**
     * 关闭模态窗口
     *
     * @param {String}
     *            win 模态窗口ID
     */
    closeWindow: function(win) {
      $("#" + win).window('close');
    },
    /**
     * form表单属性转JSON格式
     *
     * @param {String}
     *            formId 当前表单的ID值
     * @return {String}
     */
    form2Json: function(formId) {
      var arr = $('#' + formId).serializeArray();
      var jsonStr = "";
      jsonStr += '{';
      for (var i = 0; i < arr.length; i++) {
        var jName = arr[i].name.replace(/\"/g, "'").replace(/\\/g, "\\\\");
        var jValue = arr[i].value.replace(/\"/g, "'").replace(/\\/g, "\\\\");
        jsonStr += '"' + jName.replace(/[\r\n]/g, "") + '":"' + jValue.replace(/[\r\n]/g, "") + '",';
      }
      jsonStr = jsonStr.substring(0, (jsonStr.length - 1));
      jsonStr += '}';
      var json = JSON.parse(jsonStr);

      return json;
    },
    /**
     * 字符串转JSON格式
     *
     * @param {String}
     *            str 字符串
     * @return {String}
     */
    str2Json: function(str) {
      return JSON.parse(str);
    },
    /**
     * Json转字符串
     *
     * @param {String}
     *            jsonStr json字符串
     * @return {String}
     */
    json2Str: function(jsonStr) {
      return JSON.stringify(jsonStr);
    },
    /**
     * EasyUi通用提示
     *
     * @param {String} msgType 类型
     * @return {String}
     */
    alert: function(msgType) {
      if (msgType.toLowerCase() == 'success') {
        $.messager.alert('提示', '操作成功', 'info');
      } else if (msgType.toLowerCase() == 'error') {
        $.messager.alert('提示', '操作失败', 'error');
      }
    }
  };
  return util;
});
