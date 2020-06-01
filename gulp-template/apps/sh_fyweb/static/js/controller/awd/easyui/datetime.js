define( function(require) {
  'use strict';
  require('jquery');
  require('easyui');
  return {
    init: function() {
      $('.easyui-datetimebox').datetimebox({
        onSelect: function(date) {
          var time = $('.easyui-datetimebox').datetimebox('spinner').spinner('getValue');
          $('.easyui-datetimebox').datetimebox('setValue',
            date.getFullYear() + '-' +
            (date.getMonth() + 1) + '-' +
            date.getDate() + ' ' + time);
          $('.easyui-datetimebox').datetimebox('hidePanel');
        }

      });
    }
  };
});
