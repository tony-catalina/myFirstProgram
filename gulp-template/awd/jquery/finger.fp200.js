define(function(require) {
  require('jquery');
  'use strict';
  var finger;
  return {
    init: function(id, result) {
      finger = document.getElementById(id);
      if (finger) {
        this.addEvent(finger, 'returnresult', function(msg) {
          if ($.isFunction(result)) {
            result(msg);
          }
        });
      }
    },
    start: function() {
      return finger.fp200c_init() == 1;
    },
    addEvent: function(obj, name, func) {
      if (obj.attachEvent) {
        obj.attachEvent('on' + name, func);
      } else {
        obj.addEventListener(name, func, false);
      }
    },
    getVersion: function() {

    },
    getMap: function() {
      return finger.fp200c_getmap();
    },
    getFeature: function() {
      return finger.fp200c_getfeature();
    },
    setOperator: function(opt) {
      finger.setopreator(opt);
    },
    preview: function(opt) {
      finger.setopreator(opt);
    },
    setMatchData: function(data) {
      finger.fp200c_setmatch(data);
    },
    setScore: function(score) {
      finger.fp200c_setscore(score);
    },
    getScore: function() {
      return finger.fp200c_getscore();
    },
    setMatchVal: function(data) {
      finger.fp200c_setmatcval(data);
    },
    end: function() {
      finger.fp200c_close();
    }
  };
});
