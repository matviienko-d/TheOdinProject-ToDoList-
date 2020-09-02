import {defaultList} from './defaultList.js';
import moment from 'moment';
import 'moment-precise-range-plugin';

//cache DOM
const listHolder = document.querySelector('.task-lists');

const restTime = function(dueDate) {
  let dateNow = moment();
  dueDate = moment(dueDate);
  if(dateNow.isAfter(dueDate)) {
    return 'deprecated';
  }else {
    return moment.preciseDiff(dateNow, dueDate);
  }
};

const buildList = function(mapList) {
	for(let [listTitle, tasks] of mapList) {
		let list = document.createElement('div');
		list.classList.add('task-lists__list');

    let taskList = document.createElement('ul');
    taskList.classList.add('tasks');

    let addTaskForm = document.createElement('form');
    addTaskForm.classList.add('add-task');
    addTaskForm.innerHTML = `
        <fielset class="add-task__fields">
          <input type="text" class="add-task__name-input" placeholder="Click to add task"><button class="add-task__add-button">
            <svg class="add-task__button-icon">
              <use xlink:href="#arrow_up"></use>
            </svg>
          </button>
        </fielset>
    `;
		list.innerHTML = `
		    <div class="list-description">
		      <h1 class="list-description__h1">
		        ${listTitle}
		        <svg class="list-description__edit-title-icon">
		          <use xlink:href="#edit"></use>
		        </svg>
		      </h1>
		      <input type="text" class="list-description__change-name-input list-description__change-name-input_display_none">
		      <svg class="list-description__delete-list-icon">
		        <use xlink:href="#delete_forever"></use>
		      </svg>
		      <svg class="list-description__expand-list-icon">
		        <use xlink:href='#arrow_expand'></use>
		      </svg>
		    </div>  
		`;
		for(let [taskName, taskProperties] of tasks) {
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
		list.append(taskList, addTaskForm);
		listHolder.append(list);
	}
};	

buildList(defaultList);











const inner = `
	<main class="main">
    <div class="main__container">

      <button class="add-list-button">
        <svg class="add-list-button__icon">
          <use xlink:href="#plus_simple"></use> 
        </svg>
        <span class="add-list-button__text">Add new list</span>
      </button>
    
    <section class="task-lists">

      <div class="task-lists__list">

        <div class="list-description">
          <h1 class="list-description__h1">
            Daily plans
            <svg class="list-description__edit-title-icon">
              <use xlink:href="#edit"></use>
            </svg>
          </h1>
          <input type="text" class="list-description__change-name-input list-description__change-name-input_display_none">
          <svg class="list-description__delete-list-icon">
            <use xlink:href="#delete_forever"></use>
          </svg>
          <svg class="list-description__expand-list-icon">
            <use xlink:href='#arrow_expand'></use>
          </svg>
        </div>

        <ul class="tasks">

          <li class="tasks__task-item">
            <div class="tasks__task-elements">
              <svg class="tasks__radio-button">
                <use xlink:href="#radio_button_unchecked"></use>
              </svg>
              <h2 class="tasks__h2">Prepare a dish</h2>
              <div class="tasks__priority"></div>
              <time class="tasks__rest-time">1 day left</time>
              <svg class="tasks__delete-task-icon">
                <use xlink:href="#close_x"></use>
              </svg>
            </div>
          </li>
          <li class="tasks__task-item">
            <div class="tasks__task-elements">
              <svg class="tasks__radio-button">
                <use xlink:href="#radio_button_unchecked"></use>
              </svg>
              <h2 class="tasks__h2">Prepare a dish</h2>
              <div class="tasks__priority"></div>
              <time class="tasks__rest-time">1 day left</time>
              <svg class="tasks__delete-task-icon">
                <use xlink:href="#close_x"></use>
              </svg>
            </div>
          </li>

        </ul>

        <form class="add-task" tabindex="0">
          <fielset class="add-task__fields">
            <input type="text" class="add-task__name-input" placeholder="Click to add task"><button class="add-task__add-button">
              <svg class="add-task__button-icon">
                <use xlink:href="#arrow_up"></use>
              </svg>
            </button>
          </fielset>
        </form>

      </div>


    </section>

    </div>
  </main>
`;