Package.describe({
  summary: "UX/UI framework from Twitter extended by jasny"
});

Package.on_use(function (api) {
  api.add_files('css/bootstrap.css', 'client');
  api.add_files('css/bootstrap-responsive.css', 'client');
  api.add_files('js/bootstrap.js', 'client');
  api.add_files('img/glyphicons-halflings.png', 'client');
  api.add_files('img/glyphicons-halflings-white.png', 'client');

  api.add_files('fonts/iconic_fill.eot', 'client');
  api.add_files('fonts/iconic_fill.otf', 'client');
  api.add_files('fonts/iconic_fill.svg', 'client');
  api.add_files('fonts/iconic_fill.ttf', 'client');
  api.add_files('fonts/iconic_fill.woff', 'client');
  api.add_files('fonts/iconic_stroke.eot', 'client');
  api.add_files('fonts/iconic_stroke.otf', 'client');
  api.add_files('fonts/iconic_stroke.svg', 'client');
  api.add_files('fonts/iconic_stroke.ttf', 'client');
  api.add_files('fonts/iconic_stroke.woff', 'client');

  // XXX this makes the paths to the icon sets absolute. it needs
  // to be included _after_ the standard bootstrap css so
  // that its styles take precedence.
  api.add_files('css/bootstrap-override.css', 'client');
});
