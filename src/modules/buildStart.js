import moment from 'moment';
import 'moment-precise-range-plugin';
import {events} from './pubSub.js';

//cache DOM
const listHolder = document.querySelector('.task-lists');

const restTime = function(dueDate) {
  let dateNow = moment();
  dueDate = moment(dueDate);
  if(dateNow.isAfter(dueDate)) {
    return 'deprecated';
  }else if(dueDate == null) {
  	return '';
  }else {
    return moment.preciseDiff(dateNow, dueDate);
  }
};

const sortEntries = function(entries) {
	return entries.sort((a,b) => a[0].localeCompare(b[0]));
};

const buildList = function(userLists) {
  if(!!listHolder.firstElementChild) {
    listHolder.innerHTML = '';
  }
  	const sortedUserListsEntries = sortEntries(Object.entries(userLists));
	for(let [listTitle, tasks] of sortedUserListsEntries) {
		let list = document.createElement('div');
		list.classList.add('task-lists__list');

    let taskList = document.createElement('ul');
    taskList.classList.add('tasks');

    let addTaskForm = document.createElement('li');
    addTaskForm.classList.add('tasks__task-item-form');
    addTaskForm.innerHTML = `
    	<form class="add-task">
		    <fielset class="add-task__fields">
		      <input type="text" class="add-task__name-input" placeholder="Click to add task"><button class="add-task__add-button">
		        <svg class="add-task__button-icon">
		          <use xlink:href="#arrow_up"></use>
		        </svg>
		      </button>
		    </fielset>
        </form>
    `;
		list.innerHTML = `
		    <div class="list-description">
		      <h1 class="list-description__h1">
		        ${listTitle}
		        <svg class="list-description__edit-title-icon">
		          <use xlink:href="#edit"></use>
		        </svg>
		      </h1>
		      <input type="text" class="list-description__change-name-input
		       list-description__change-name-input_display_none" placeholder="Title">
		      <svg class="list-description__delete-list-icon">
		        <use xlink:href="#delete_forever"></use>
		      </svg>
		      <svg class="list-description__expand-list-icon">
		        <use xlink:href='#arrow_expand'></use>
		      </svg>
		    </div>  
		`;
		const sortedTaskEntries = sortEntries(Object.entries(tasks));
		for(let [taskName, taskProperties] of sortedTaskEntries) {
			let listItem = document.createElement('li');
			listItem.classList.add('tasks__task-item');

			listItem.innerHTML = `
	            <div class="task-elements ${taskProperties.done ? 'task-elements_state_done' : '\'\''}">
	              <svg class="task-elements__radio-button">
	                <use xlink:href="#${taskProperties.done ? 'radio_button_checked' : 'radio_button_unchecked'}"></use>
	              </svg>
	              <h2 class="task-elements__h2">${taskName}</h2>
	              <div class="task-elements__priority task-elements__priority_color_${taskProperties.priority}"></div>
	              <time class="task-elements__rest-time">${restTime(taskProperties.dueDate)}</time>
	              <svg class="task-elements__delete-task-icon">
	                <use xlink:href="#close_x"></use>
	              </svg>
	            </div>
			`;
			taskList.append(listItem);
		}
		taskList.append(addTaskForm);
		list.append(taskList);
		listHolder.append(list);
	}
};	

events.on('addNewList', buildList);
events.on('changeListTitle', buildList);
events.on('removeList', buildList);
export {
  buildList
};