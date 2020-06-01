define( function(require) {
  'use strict';
  require('jquery');
  require('easyui');
  return {
    init: function(opt) {
      var id=opt.id;
      $('#' + id).datalist({
        url: 'datalist_data1.json',
        checkbox: true,
        lines: true
      });
    }
  };
});
