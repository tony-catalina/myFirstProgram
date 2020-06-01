requirejs.config({
  baseUrl: '/apps/sh_fyweb/static/js/controller',
  shim: {
    'bootstrap': ['jquery'],
    'echarts': ['jquery'],
    'layui':{
      init:function(){
      return this.layui.config({dir:'../../lib/layui/dist/layui.all'});
      }
    }
  },
  paths: {
    'jquery': '../../lib/jquery/dist/jquery.min',
    'echarts': '../../lib/echarts.min',
    'bootstrap': '../../lib/bootstrap/dist/js/bootstrap.min',
    'popper': '../../lib/popper',
    'swiper': '../../lib/swiper.min',
    'respond': '../../lib/respond',
    'layui': '../../lib/layui/dist/layui.all'
  },
  map: {
    '*': {
      'popper.js': 'popper'
    }
  }
});
