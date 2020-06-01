define(function (require, exports, module) {
  var ObjectUtil = {
    mergeObjDeep: function (tarObj, obj) {
      for (var property in obj) {
        if (obj[property] && obj[property].constructor &&
          obj[property].constructor === Object) {
          tarObj[property] = tarObj[property] || {};
          arguments.callee(tarObj[property], obj[property]);
        } else {
          tarObj[property] = obj[property];
        }
      }
      return tarObj;
    }
  };

  module.exports = ObjectUtil;
});
