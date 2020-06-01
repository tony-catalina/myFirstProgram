define(function() {
  'use strict';
  return {
    'rsxx': function(multi){
      return [
        {
          field: 'oid',
          title: '序号',
          formatter: function(value, rowData, rowIndex) {
            if(multi){
              return '<input type="checkbox" class="checkSelect' + rowIndex + '" value="' + rowData.oid + '" />';
            }else{
              return '<input type="radio" class="radioSelect' + rowIndex + '" value="' + rowData.oid + '" />';
            }
          }
        },
        {
          field: 'xzdabh',
          width: 150,
          title: '行政档案编号',
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.xzdabh == null ? '' : row.xzdabh) + '>' + (row.xzdabh == null ? '' : row.xzdabh) + '</span>';
          }
        },
        {
          field: 'jdjg',
          title: '决定机关',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jdjg == null ? '' : row.jdjg) + '>' + (row.jdjg == null ? '' : row.jdjg) + '</span>';
          }
        },
        {
          field: 'jdjz',
          title: '戒毒决子',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jdjz == null ? '' : row.jdjz) + '>' + (row.jdjz == null ? '' : row.jdjz) + '</span>';
          }
        },
        {
          field: 'jdzh',
          title: '戒毒字号',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jdzh == null ? '' : row.jdzh) + '>' + (row.jdzh == null ? '' : row.jdzh) + '</span>';
          }
        },
        {
          field: 'flwsh',
          title: '法律文书号',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.flwsh == null ? '' : row.flwsh) + '>' + (row.flwsh == null ? '' : row.flwsh) + '</span>';
          }
        },
        {
          field: 'xm',
          title: '姓名',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
          }
        },
        {
          field: 'bm',
          title: '别名',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.bm == null ? '' : row.bm) + '>' + (row.bm == null ? '' : row.bm) + '</span>';
          }
        },
        {
          field: 'zjlx',
          title: '证件类型',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.zjlx == null ? '' : row.zjlx) + '>' + (row.zjlx == null ? '' : row.zjlx) + '</span>';
          }
        },
        {
          field: 'zjhm',
          title: '证件号码',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.zjhm == null ? '' : row.zjhm) + '>' + (row.zjhm == null ? '' : row.zjhm) + '</span>';
          }
        },
        {
          field: 'xb',
          title: '性别',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.xb == null ? '' : row.xb) + '>' + (row.xb == null ? '' : row.xb) + '</span>';
          }
        },
        {
          field: 'csrq',
          title: '出身日期',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.csrq == null ? '' : row.csrq) + '>' + (row.csrq == null ? '' : row.csrq) + '</span>';
          }
        },
        {
          field: 'mz',
          title: '民族',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.mz == null ? '' : row.mz) + '>' + (row.mz == null ? '' : row.mz) + '</span>';
          }
        },
        {
          field: 'zzmm',
          title: '政治面貌',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.zzmm == null ? '' : row.zzmm) + '>' + (row.zzmm == null ? '' : row.zzmm) + '</span>';
          }
        },
        {
          field: 'whcd',
          title: '文化程度',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.whcd == null ? '' : row.whcd) + '>' + (row.whcd == null ? '' : row.whcd) + '</span>';
          }
        },
        {
          field: 'hyzk',
          title: '婚姻状况',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.hyzk == null ? '' : row.hyzk) + '>' + (row.hyzk == null ? '' : row.hyzk) + '</span>';
          }
        },
        {
          field: 'sf',
          title: '身份',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.sf == null ? '' : row.sf) + '>' + (row.sf == null ? '' : row.sf) + '</span>';
          }
        },
        {
          field: 'tssf',
          title: '特殊身份',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.tssf == null ? '' : row.tssf) + '>' + (row.tssf == null ? '' : row.tssf) + '</span>';
          }
        },
        {
          field: 'gj',
          title: '国籍',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.gj == null ? '' : row.gj) + '>' + (row.gj == null ? '' : row.gj) + '</span>';
          }
        },
        {
          field: 'jg',
          title: '籍贯',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jg == null ? '' : row.jg) + '>' + (row.jg == null ? '' : row.jg) + '</span>';
          }
        },
        {
          field: 'zy',
          title: '职业',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.zy == null ? '' : row.zy) + '>' + (row.zy == null ? '' : row.zy) + '</span>';
          }
        },
        {
          field: 'hjd',
          title: '户籍所在地',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.hjd == null ? '' : row.hjd) + '>' + (row.hjd == null ? '' : row.hjd) + '</span>';
          }
        },
        {
          field: 'hjdxz',
          title: '户籍地祥址',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.hjdxz == null ? '' : row.hjdxz) + '>' + (row.hjdxz == null ? '' : row.hjdxz) + '</span>';
          }
        },
        {
          field: 'xzd',
          title: '现住址区划',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.xzd == null ? '' : row.xzd) + '>' + (row.xzd == null ? '' : row.xzd) + '</span>';
          }
        },
        {
          field: 'xzdxz',
          title: '现住址祥址',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.xzdxz == null ? '' : row.xzdxz) + '>' + (row.xzdxz == null ? '' : row.xzdxz) + '</span>';
          }
        },
        {
          field: 'zw',
          title: '职务',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.zw == null ? '' : row.zw) + '>' + (row.zw == null ? '' : row.zw) + '</span>';
          }
        },
        {
          field: 'gzdw',
          title: '工作单位',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.gzdw == null ? '' : row.gzdw) + '>' + (row.gzdw == null ? '' : row.gzdw) + '</span>';
          }
        },
        {
          field: 'rsrq',
          title: '入所日期',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.rsrq == null ? '' : row.rsrq) + '>' + (row.rsrq == null ? '' : row.rsrq) + '</span>';
          }
        },
        {
          field: 'rsyy',
          title: '入所原因',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.rsyy == null ? '' : row.rsyy) + '>' + (row.rsyy == null ? '' : row.rsyy) + '</span>';
          }
        },
        {
          field: 'badw',
          title: '办案单位',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.badw == null ? '' : row.badw) + '>' + (row.badw == null ? '' : row.badw) + '</span>';
          }
        },
        {
          field: 'bar',
          title: '办案人',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.bar == null ? '' : row.bar) + '>' + (row.bar == null ? '' : row.bar) + '</span>';
          }
        },
        {
          field: 'barlxdh',
          title: '办案人联系电话',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.barlxdh == null ? '' : row.barlxdh) + '>' + (row.barlxdh == null ? '' : row.barlxdh) + '</span>';
          }
        },
        {
          field: 'xds',
          title: '吸毒史',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.xds == null ? '' : row.xds) + '>' + (row.xds == null ? '' : row.xds) + '</span>';
          }
        },
        {
          field: 'dpzl1',
          title: '毒品种类1',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.dpzl1 == null ? '' : row.dpzl1) + '>' + (row.dpzl1 == null ? '' : row.dpzl1) + '</span>';
          }
        },
        {
          field: 'dpzl2',
          title: '毒品种类2',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.dpzl2 == null ? '' : row.dpzl2) + '>' + (row.dpzl2 == null ? '' : row.dpzl2) + '</span>';
          }
        },
        {
          field: 'dpzl3',
          title: '毒品种类3',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.dpzl3 == null ? '' : row.dpzl3) + '>' + (row.dpzl3 == null ? '' : row.dpzl3) + '</span>';
          }
        },
        {
          field: 'xdfs1',
          title: '吸毒方式1',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.xdfs1 == null ? '' : row.xdfs1) + '>' + (row.xdfs1 == null ? '' : row.xdfs1) + '</span>';
          }
        },
        {
          field: 'xdfs2',
          title: '吸毒方式2',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.xdfs2 == null ? '' : row.xdfs2) + '>' + (row.xdfs2 == null ? '' : row.xdfs2) + '</span>';
          }
        },
        {
          field: 'xdfs3',
          title: '吸毒方式3',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.xdfs3 == null ? '' : row.xdfs3) + '>' + (row.xdfs3 == null ? '' : row.xdfs3) + '</span>';
          }
        },
        {
          field: 'jsh',
          title: '戒室号',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jsh == null ? '' : row.jsh) + '>' + (row.jsh == null ? '' : row.jsh) + '</span>';
          }
        },
        {
          field: 'jdff',
          title: '戒毒方法',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jdff == null ? '' : row.jdff) + '>' + (row.jdff == null ? '' : row.jdff) + '</span>';
          }
        },
        {
          field: 'fxbz',
          title: '复吸标志',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.fxbz == null ? '' : row.fxbz) + '>' + (row.fxbz == null ? '' : row.fxbz) + '</span>';
          }
        },
        {
          field: 'jdqx',
          title: '戒毒期限',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jdqx == null ? '' : row.jdqx) + '>' + (row.jdqx == null ? '' : row.jdqx) + '</span>';
          }
        },
        {
          field: 'jdksrq',
          title: '戒毒开始日期',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jdksrq == null ? '' : row.jdksrq) + '>' + (row.jdksrq == null ? '' : row.jdksrq) + '</span>';
          }
        },
        {
          field: 'jdjzrq',
          title: '戒毒截止日期',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jdjzrq == null ? '' : row.jdjzrq) + '>' + (row.jdjzrq == null ? '' : row.jdjzrq) + '</span>';
          }
        },
        {
          field: 'jlts',
          title: '拘留天数',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jlts == null ? '' : row.jlts) + '>' + (row.jlts == null ? '' : row.jlts) + '</span>';
          }
        },
        {
          field: 'jlksrq',
          title: '拘留开始日期',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jlksrq == null ? '' : row.jlksrq) + '>' + (row.jlksrq == null ? '' : row.jlksrq) + '</span>';
          }
        },
        {
          field: 'jljzrq',
          title: '拘留截止日期',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jljzrq == null ? '' : row.jljzrq) + '>' + (row.jljzrq == null ? '' : row.jljzrq) + '</span>';
          }
        },
        {
          field: 'yjcsrq',
          title: '预计出所日期',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.yjcsrq == null ? '' : row.yjcsrq) + '>' + (row.yjcsrq == null ? '' : row.yjcsrq) + '</span>';
          }
        },
        {
          field: 'wffzjl',
          title: '违法犯罪经历',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.wffzjl == null ? '' : row.wffzjl) + '>' + (row.wffzjl == null ? '' : row.wffzjl) + '</span>';
          }
        },
        {
          field: 'qtbxcf',
          title: '其他并行处罚',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.qtbxcf == null ? '' : row.qtbxcf) + '>' + (row.qtbxcf == null ? '' : row.qtbxcf) + '</span>';
          }
        },
        {
          field: 'jyaq',
          title: '简要案情',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jyaq == null ? '' : row.jyaq) + '>' + (row.jyaq == null ? '' : row.jyaq) + '</span>';
          }
        },
        {
          field: 'bz',
          title: '备注',
          width: 150,
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.bz == null ? '' : row.bz) + '>' + (row.bz == null ? '' : row.bz) + '</span>';
          }
        }
      ];
    },
    'djzqz':function(multi){
      return [
        {
          field: 'oid',
          title: '序号',
          formatter: function(value, rowData, rowIndex) {
            if(multi){
              return '<input type="checkbox" class="checkSelect' + rowIndex + '" value="' + rowData.oid + '" />';
            }else{
              return '<input type="radio" class="radioSelect' + rowIndex + '" value="' + rowData.oid + '" />';
            }
          }
        },
        {
          field: 'jdqx',
          width: 150,
          title: '戒毒期限',
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jdqx == null ? '' : row.jdqx) + '>' + (row.jdqx == null ? '' : row.jdqx) + '</span>';
          }
        },
        {
          field: 'jdqx',
          width: 150,
          title: '戒毒期限',
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jdqx == null ? '' : row.jdqx) + '>' + (row.jdqx == null ? '' : row.jdqx) + '</span>';
          }
        },
        {
          field: 'jdjg',
          width: 150,
          title: '决定机关',
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jdjg == null ? '' : row.jdjg) + '>' + (row.jdjg == null ? '' : row.jdjg) + '</span>';
          }
        },
        {
          field: 'rsws',
          width: 150,
          title: '入所文书',
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.rsws == null ? '' : row.rsws) + '>' + (row.rsws == null ? '' : row.rsws) + '</span>';
          }
        },
        {
          field: 'jdqxqsrq',
          width: 150,
          title: '戒毒期限起始日期',
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jdqxqsrq == null ? '' : row.jdqxqsrq) + '>' + (row.jdqxqsrq == null ? '' : row.jdqxqsrq) + '</span>';
          }
        },
        {
          field: 'jdqxjzrq',
          width: 150,
          title: '戒毒期限截止日期',
          sortable: 'true',
          formatter: function(value, row) {
            return '<span title=' + (row.jdqxjzrq == null ? '' : row.jdqxjzrq) + '>' + (row.jdqxjzrq == null ? '' : row.jdqxjzrq) + '</span>';
          }
        }
      ];
    },
    'zdwd':function(multi){

    },
    'zpwh':function(multi){

    },
    'hs':function(multi){

    },
    'djst':function(multi){

    },
    'scth':function(multi){

    },
    'thjy':function(multi){

    },
    'xjsf':function(multi){

    },
    'txjl':function(multi){

    },
    'jstz':function(multi){

    },
    'jshj':function(multi){

    },
    'tary':function(multi){

    },
    'lscs':function(multi){

    },
    'jyxl':function(multi){

    },
    'shgx':function(multi){

    },
    'aqjc':function(multi){

    },
    'jjb':function(multi){

    },
    'xjry':function(multi){

    },
    'grjl':function(multi){

    },
    'yxjs':function(multi){

    },
    'yzxs':function(multi){

    },
    'xbcrjc':function(multi){

    },
    'bfgl':function(multi){

    },
    'rstj':function(multi){

    },
    'wpgl':function(multi){

    },
    'xjcr':function(multi){

    },
    'pgxm':function(multi){

    },
    'rcpg':function(multi){

    },
    'pggjcl':function(multi){

    },
    'pgfysp':function(multi){

    },
  };
});
