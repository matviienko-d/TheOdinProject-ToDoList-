/*jshint esversion:6*/
import './assets/stylesheets/style.scss';
import './modules/assets.js';
if (process.env.NODE_ENV === 'development') {
  require('./index.html');
}

if (module.hot) {
   module.hot.accept();
}
