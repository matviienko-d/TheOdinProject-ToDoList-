//style assets
import './assets/stylesheets/style.scss';
import './modules/assets.js';
//pubSub(mediator)
import {evnents} from './modules/pubSub.js';
//build start page
import {userLists} from './modules/DATA-JSON.js';
import {buildList} from './modules/startPage/buildStart.js';
//functionality for adding task holder
import './modules/addListMenu/addListMenuModule.js';

import './modules/startPage/list.js';
//Module for start page tasks
import './modules/startPage/taskOnStartPage.js';
//module for task menu building
import './modules/taskMenu/buildTaskMenu.js';
//handle taskMenuClose
import './modules/taskMenu/removeTaskMenu.js';
//change task name in menu
import './modules/taskMenu/taskTitle.js';
//change task description from menu
import './modules/taskMenu/taskDescription.js';
//checklist from task menu
import './modules/taskMenu/taskChecklist.js';
//change task priority
import './modules/taskMenu/taskPriority.js';
//set/delete date for task
import './modules/taskMenu/taskDate.js';
//build start page
buildList([userLists]);

if (process.env.NODE_ENV === 'development') {
  require('./index.html');
}
if (module.hot) {
   module.hot.accept();
}


