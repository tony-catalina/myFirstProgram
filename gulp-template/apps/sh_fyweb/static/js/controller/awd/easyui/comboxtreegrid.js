define(function(require) {
  'use strict';
  require('jquery');
  require('easyui');
  return {
    initPageId: function(id) {
      var getData = function(_this, page, rows, fieldName, queryParams, location, alike) {
        location = location == '' ? '/kss_dictionary/getDictionaryPage' : location;

        var pager = $(_this).combogrid('grid').datagrid('getPager');
        queryParams = queryParams == undefined ? '' : queryParams;
        $.ajax({
          type: 'POST',
          url: location,
          data: 'pageIndex=' + page + '&pageSize=' + rows + '&fieldname=' + fieldName + '&queryParams=' + queryParams,
          error: function() {
            $.messager.progress('close');
          },
          success: function(data) {
            if (alike != '' && alike != undefined && alike != null) {
              $('input[alike="' + alike + '"]').combogrid('grid').datagrid('loadData', {
                rows: data.data,
                total: data.total
              });
            } else {
              $('input[code="' + fieldName + '"]').combogrid('grid').datagrid('loadData', {
                rows: data.data,
                total: data.total
              });
            }
            pager.pagination('refresh', { // 改变选项，并刷新分页栏信息
              total: data.total,
              pageNumber: page,

            });

          }
        });
      };
      var _this = $('#'+id);
      var fieldName = '';
      var url = '';
      var alike = '';
      var querydata = '';
      var biaoti = $(this).prev().combobox().prevObject.attr('biaoti');
      biaoti = biaoti == undefined ? '内容' : biaoti;
      var maxselect = $(this).prev().combobox().prevObject.attr('max') == undefined ? 5 : $(this).prev().combobox().prevObject.attr('max');
      var combogrid = $(this).combogrid({
        panelWidth: 450,
        panelHeight: 300,
        idField: 'code', //ID字段
        textField: 'content', //显示的字段
        mode: 'remote',
        url: '',
        fitColumns: true,
        striped: true,
        editable: true,
        multiple: $(this).attr('checkBox') == 'true',
        pagination: true, //是否分页
        loading: true,
        rownumbers: true, //序号
        collapsible: false, //是否可折叠的
        fit: true, //自动大小
        method: 'post',
        delay: 250,
        columns: [
          [{
              field: 'ck',
              checkbox: $(this).attr('checkBox') == 'true'
            },
            {
              field: 'fieldName',
              title: 'xx',
              width: 80,
              hidden: true
            },
            {
              field: 'code',
              title: '代码',
              width: 40
            },
            {
              field: 'content',
              title: biaoti,
              width: 150
            },
            {
              field: 'py',
              title: '拼音',
              width: 80
            }
          ]
        ],
        onShowPanel: function() {
          //console.log($(this).prev());
          $(this).prev().combobox('showPanel');
          fieldName = $(this).prev().combobox().prevObject.attr('code');
          url = $(this).prev().combobox().prevObject.attr('url');
          url = url == undefined ? '' : url;
          alike = $(this).prev().combobox().prevObject.attr('alike');
          getData(_this, 1, 20, fieldName, '', url, alike);
        },
        onLoadSuccess: function() {
          $('input[name="ck"]').each(function() {
            $(this).keydown(function(event) {
              if (event.keyCode == 13) {
                combogrid.combogrid('hidePanel');
                $(combogrid).next('span').find('input.textbox-text').focus();
              }
            });
          });
        },
        keyHandler: {
          left: function() {},
          right: function() {},
          up: function() { //【向上键】押下处理
            //取得选中行
            if ($(this).attr('checkBox') == undefined && $(this).combobox('panel').is(':visible')) {
              var selected = $(this).combogrid('grid').datagrid('getSelected');
              if (selected) {
                //取得选中行的rowIndex
                var index = $(this).combogrid('grid').datagrid('getRowIndex', selected);
                //向上移动到第一行为止
                if (index > 0) {
                  $(this).combogrid('grid').datagrid('selectRow', index - 1);
                }
              } else {
                var rows = $(this).combogrid('grid').datagrid('getRows');
                $(this).combogrid('grid').datagrid('selectRow', rows.length - 1);
              }
            } else {
              $('input[name="ck"]:first').focus();
            }
          },
          down: function() { //【向下键】押下处理
            //取得选中行
            if ($(this).attr('checkBox') == undefined && $(this).combobox('panel').is(':visible')) {
              var selected = $(this).combogrid('grid').datagrid('getSelected');
              if (selected) {
                //取得选中行的rowIndex
                var index = $(this).combogrid('grid').datagrid('getRowIndex', selected);
                //向下移动到当页最后一行为止
                if (index < $(this).combogrid('grid').datagrid('getData').rows.length - 1) {
                  $(this).combogrid('grid').datagrid('selectRow', index + 1);
                }
              } else {
                $(this).combogrid('grid').datagrid('selectRow', 0);
              }
            } else {
              $('input[name="ck"]:first').focus();
            }
          },
          enter: function() { //【回车键】押下处理
            if ($(this).attr('checkBox') == undefined && $(this).combobox('panel').is(':visible')) {
              //设置【性别】文本框的内容为选中行的的性别字段内容
              $('#' + fieldName + '_select').val($('input[code="' + fieldName + '"]').combogrid('getValues'));
              //选中后让下拉表格消失
              $(this).combogrid('hidePanel');
            }
          },
          query: function(keyword) { //【动态搜索】处理
            //设置查询参数
            //获取查询参数
            var queryParams = $('input[code="' + fieldName + '"]').combogrid('grid').datagrid('options').queryParams;
            queryParams.keyword = keyword;
            querydata = queryParams.keyword;

            getData(_this, 1, 20, fieldName, queryParams.keyword, url, alike);
            $('input[code="' + fieldName + '"]').combogrid('grid').datagrid('options').queryParams = queryParams;
            //重新加载
            $('input[code="' + fieldName + '"]').combogrid('grid').datagrid('reload');

            $('input[code="' + fieldName + '"]').combogrid('setValue', keyword);
            //将查询条件存入隐藏域
            $('#selectKeyWord').val(keyword);
          }
        },
        onSelect: function() {//选中处理
          if (alike != '' && alike != undefined && alike != null) {
            $('#' + fieldName + '_select_alike').val($('input[alike="' + alike + '"]').combogrid('getValues'));
          } else {
            $('#' + fieldName + '_select').val($('input[code="' + fieldName + '"]').combogrid('getValues'));
          }
          $('#selectKeyWord').val('');
        }
      });
      //取得分页组件对象
      var grid = $(this).combogrid('grid');
      grid.datagrid({
        onCheck: function(index) {
          if (grid.datagrid('getSelections').length > maxselect) {
            grid.datagrid('unselectRow', index);
            //$.messager.alert("提示", '超出最大选择数!');
            $(combogrid).next('span').find('input.textbox-text').focus();
          }
        }
      });
      var pager = $(this).combogrid('grid').datagrid('getPager');
      if (pager) {
        $(pager).pagination({
          pageSize: 20,//每页显示的记录条数,默认为20
          //pageList: [100, 50, 20],       //可以设置每页记录条数的列表
          beforePageText: '第', //页数文本框前显示的汉字
          //showPageList:false,
          afterPageText: '页,共 {pages} 页',
          displayMsg: '', //'当前显示 {from} - {to} 条记录   共 {total} 条记录',
          //选择页的处理
          onSelectPage: function(pageNumber, pageSize) {
            //按分页的设置取数据
            getData(_this, pageNumber, pageSize, fieldName, querydata, url, alike);
            //设置表格的pageSize属性，表格变化时按分页组件设置的pageSize显示数据

            $(_this).combogrid('grid').datagrid('options').pageSize = pageSize;

            //将隐藏域中存放的查询条件显示在combogrid的文本框中
            $(_this).combogrid('setValue', querydata);

            //$('#selectKeyWord').val('');
          },

          //点击刷新的处理
          onRefresh: function(pageNumber, pageSize) {
            //按分页的设置取数据
            getData(_this, pageNumber, pageSize, fieldName, '', '', alike);
            $(_this).combogrid('setValue', '');
            $('#selectKeyWord').val('');

          }
        });
      }
    },
    initPageClass:function(classid){
      var getData = function(_this, page, rows, fieldName, queryParams, location, alike) {
        location = location == '' ? '/kss_dictionary/getDictionaryPage' : location;

        var pager = $(_this).combogrid('grid').datagrid('getPager');
        queryParams = queryParams == undefined ? '' : queryParams;
        $.ajax({
          type: 'POST',
          url: location,
          data: 'pageIndex=' + page + '&pageSize=' + rows + '&fieldname=' + fieldName + '&queryParams=' + queryParams,
          error: function() {
            $.messager.progress('close');
          },
          success: function(data) {
            if (alike != '' && alike != undefined && alike != null) {
              $('input[alike="' + alike + '"]').combogrid('grid').datagrid('loadData', {
                rows: data.data,
                total: data.total
              });
            } else {
              $('input[code="' + fieldName + '"]').combogrid('grid').datagrid('loadData', {
                rows: data.data,
                total: data.total
              });
            }
            pager.pagination('refresh', { // 改变选项，并刷新分页栏信息
              total: data.total,
              pageNumber: page,

            });

          }
        });
      };
      var select;
      if (classid != undefined) {
        select = '.' + classid;
      } else {
        select = '.awdSelectPage';
      }
      $(select).each(function() {
        var _this = $(this);
        var fieldName = '';
        var url = '';
        var alike = '';
        var querydata = '';
        var biaoti = $(this).prev().combobox().prevObject.attr('biaoti');
        biaoti = biaoti == undefined ? '内容' : biaoti;
        var maxselect = $(this).prev().combobox().prevObject.attr('max') == undefined ? 5 : $(this).prev().combobox().prevObject.attr('max');
        var combogrid = $(this).combogrid({
          panelWidth: 450,
          panelHeight: 300,
          idField: 'code', //ID字段
          textField: 'content', //显示的字段
          mode: 'remote',
          url: '',
          fitColumns: true,
          striped: true,
          editable: true,
          multiple: $(this).attr('checkBox') == 'true',
          pagination: true, //是否分页
          loading: true,
          rownumbers: true, //序号
          collapsible: false, //是否可折叠的
          fit: true, //自动大小
          method: 'post',
          delay: 250,
          columns: [
            [{
                field: 'ck',
                checkbox: $(this).attr('checkBox') == 'true'
              },
              {
                field: 'fieldName',
                title: 'xx',
                width: 80,
                hidden: true
              },
              {
                field: 'code',
                title: '代码',
                width: 40
              },
              {
                field: 'content',
                title: biaoti,
                width: 150
              },
              {
                field: 'py',
                title: '拼音',
                width: 80
              }
            ]
          ],
          onShowPanel: function() {
            //console.log($(this).prev());
            $(this).prev().combobox('showPanel');
            fieldName = $(this).prev().combobox().prevObject.attr('code');
            url = $(this).prev().combobox().prevObject.attr('url');
            url = url == undefined ? '' : url;
            alike = $(this).prev().combobox().prevObject.attr('alike');
            getData(_this, 1, 20, fieldName, '', url, alike);
          },
          onLoadSuccess: function() {
            $('input[name="ck"]').each(function() {
              $(this).keydown(function(event) {
                if (event.keyCode == 13) {
                  combogrid.combogrid('hidePanel');
                  $(combogrid).next('span').find('input.textbox-text').focus();
                }
              });
            });
          },
          keyHandler: {
            left: function() {},
            right: function() {},
            up: function() { //【向上键】押下处理
              //取得选中行
              if ($(this).attr('checkBox') == undefined && $(this).combobox('panel').is(':visible')) {
                var selected = $(this).combogrid('grid').datagrid('getSelected');
                if (selected) {
                  //取得选中行的rowIndex
                  var index = $(this).combogrid('grid').datagrid('getRowIndex', selected);
                  //向上移动到第一行为止
                  if (index > 0) {
                    $(this).combogrid('grid').datagrid('selectRow', index - 1);
                  }
                } else {
                  var rows = $(this).combogrid('grid').datagrid('getRows');
                  $(this).combogrid('grid').datagrid('selectRow', rows.length - 1);
                }
              } else {
                $('input[name="ck"]:first').focus();
              }
            },
            down: function() { //【向下键】押下处理
              //取得选中行
              if ($(this).attr('checkBox') == undefined && $(this).combobox('panel').is(':visible')) {
                var selected = $(this).combogrid('grid').datagrid('getSelected');
                if (selected) {
                  //取得选中行的rowIndex
                  var index = $(this).combogrid('grid').datagrid('getRowIndex', selected);
                  //向下移动到当页最后一行为止
                  if (index < $(this).combogrid('grid').datagrid('getData').rows.length - 1) {
                    $(this).combogrid('grid').datagrid('selectRow', index + 1);
                  }
                } else {
                  $(this).combogrid('grid').datagrid('selectRow', 0);
                }
              } else {
                $('input[name="ck"]:first').focus();
              }
            },
            enter: function() { //【回车键】押下处理
              if ($(this).attr('checkBox') == undefined && $(this).combobox('panel').is(':visible')) {
                //设置【性别】文本框的内容为选中行的的性别字段内容
                $('#' + fieldName + '_select').val($('input[code="' + fieldName + '"]').combogrid('getValues'));
                //选中后让下拉表格消失
                $(this).combogrid('hidePanel');
              }
            },
            query: function(keyword) { //【动态搜索】处理
              //设置查询参数
              //获取查询参数
              var queryParams = $('input[code="' + fieldName + '"]').combogrid('grid').datagrid('options').queryParams;
              queryParams.keyword = keyword;
              querydata = queryParams.keyword;

              getData(_this, 1, 20, fieldName, queryParams.keyword, url, alike);
              $('input[code="' + fieldName + '"]').combogrid('grid').datagrid('options').queryParams = queryParams;
              //重新加载
              $('input[code="' + fieldName + '"]').combogrid('grid').datagrid('reload');

              $('input[code="' + fieldName + '"]').combogrid('setValue', keyword);
              //将查询条件存入隐藏域
              $('#selectKeyWord').val(keyword);
            }
          },
          onSelect: function() {
            //选中处理
            if (alike != '' && alike != undefined && alike != null) {
              $('#' + fieldName + '_select_alike').val($('input[alike="' + alike + '"]').combogrid('getValues'));
            } else {
              $('#' + fieldName + '_select').val($('input[code="' + fieldName + '"]').combogrid('getValues'));
            }
            $('#selectKeyWord').val('');
          }
        });
        //取得分页组件对象
        var grid = $(this).combogrid('grid');
        grid.datagrid({
          onCheck: function(index, row) {
            //console.log(index);
            //console.log(grid.datagrid("getSelections"));
            if (grid.datagrid('getSelections').length > maxselect) {
              grid.datagrid('unselectRow', index);
              //$.messager.alert("提示", '超出最大选择数!');
              $(combogrid).next('span').find('input.textbox-text').focus();
            }
          }
        });
        var pager = $(this).combogrid('grid').datagrid('getPager');
        if (pager) {
          $(pager).pagination({
            pageSize: 20, //每页显示的记录条数，默认为20
            //pageList: [100, 50, 20],       //可以设置每页记录条数的列表
            beforePageText: '第', //页数文本框前显示的汉字
            //showPageList:false,
            afterPageText: '页,共 {pages} 页',
            displayMsg: '', //'当前显示 {from} - {to} 条记录   共 {total} 条记录',
            //选择页的处理
            onSelectPage: function(pageNumber, pageSize) {
              //按分页的设置取数据
              getData(_this, pageNumber, pageSize, fieldName, querydata, url, alike);
              //设置表格的pageSize属性，表格变化时按分页组件设置的pageSize显示数据

              $(_this).combogrid('grid').datagrid('options').pageSize = pageSize;

              //将隐藏域中存放的查询条件显示在combogrid的文本框中
              $(_this).combogrid('setValue', querydata);

              //$('#selectKeyWord').val('');
            },

            //点击刷新的处理
            onRefresh: function(pageNumber, pageSize) {
              //按分页的设置取数据
              getData(_this, pageNumber, pageSize, fieldName, '', '', alike);
              $(_this).combogrid('setValue', '');
              $('#selectKeyWord').val('');

            }
          });
        }
      });
    }
  };
});
