requirejs.config({
  baseUrl: '/apps/example/static/js',
  shim: {
    'jsonEdit': ['jquery'],
  },
  map: {
    '*': {
      'example:': 'apps/example/static/js'
    }
  },
  paths: {
    'jquery': '../lib/jquery-2.1.3.min'
  }
});
