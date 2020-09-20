//style assets
import './assets/stylesheets/style.scss';
import './modules/assets.js';
//pubSub(mediator)
import {evnents} from './modules/pubSub.js';
//build start page
import {userLists} from './modules/DATA-JSON.js';
import {buildList} from './modules/buildStart.js';
//functionality for adding task holder
import './modules/addListMenuModule.js';

import './modules/list.js';

//build start page
buildList(userLists);

if (process.env.NODE_ENV === 'development') {
  require('./index.html');
}
if (module.hot) {
   module.hot.accept();
}


