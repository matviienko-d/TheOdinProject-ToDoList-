//style assets
import './assets/stylesheets/style.scss';
import './modules/assets.js';
//pubSub(mediator)
import {evnents} from './modules/pubSub.js';
//build start page
import './modules/buildStart.js';
if (process.env.NODE_ENV === 'development') {
  require('./index.html');
}
if (module.hot) {
   module.hot.accept();
}


