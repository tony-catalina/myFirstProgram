define( function(require) {    
    'use strict';
    require('jquery');
    require('easyui');
    require('sha1');
    require('cookie');
    var menu=require('modules/menu');
    
  var main = {
    init: function() {
      document.getElementsByTagName('body')[0].style.zoom=1;
      $.parser.parse();

      menu.init();
      menu.initTopMenu();
      menu.initLeftMenu('0');
      menu.addFristPage();
    }
  };
  $(main.init);
  return main;

});
