import {userLists} from './../DATA-JSON.js';
import {events} from './../pubSub.js';
import {checkUserInput} from './../addListMenu/addListMenuModule.js';
//cache DOM
const taskLists = document.querySelector('.task-lists');

const UItoggleDoneTask = function(taskElements) {
	const uncheckedRadioHref = '#radio_button_unchecked';
	const checkedRadioHref = '#radio_button_checked';
	const useElem = taskElements.querySelector('.task-elements__radio-button use');

	taskElements.classList.toggle('task-elements_state_done');

	if(useElem.getAttribute('xlink:href') === uncheckedRadioHref) {
		useElem.setAttributeNS('http://www.w3.org/1999/xlink', 
			'xlink:href', '#radio_button_checked');
	}else {
		useElem.setAttributeNS('http://www.w3.org/1999/xlink', 
			'xlink:href', '#radio_button_unchecked');		
	}
};
const showInputWarning = function(fieldset) {
	fieldset.classList.add('add-task__fields_content_empty');

	fieldset.querySelector('input').onfocus = function() {
		fieldset.classList.remove('add-task__fields_content_empty');
	};
};

const addNewTask = function(event) {
	const userInput = event.target.closest('.add-task__add-button').
		previousElementSibling;
	const listTitle = userInput.closest('.task-lists__list').
		querySelector('.list-description__h1').textContent.trim();
	userInput.removeEventListener('click', addNewTask);
	if(checkUserInput(userInput) && userLists.isTaskUnique(listTitle ,userInput.value)) {
		userLists.addNewTask(listTitle, userInput.value);
		events.emit('addNewTask', [userLists]);
	}else {
		showInputWarning(userInput.closest('.add-task__fields'));
	}
	
};

taskLists.addEventListener('click', function(event) {
	if(!event.target.closest('.tasks')) return;
	
	let target = event.target;
	if(target.tagName === 'use') {
		target = target.closest('svg');
	}
	//done/undone button
	if(target.classList.contains('task-elements__radio-button')) {
		const taskTitle = target.nextElementSibling.textContent.trim();
		const listTitle = target.closest('.task-lists__list').
		querySelector('.list-description__h1').textContent.trim();

		UItoggleDoneTask(target.closest('.task-elements'));
		userLists.toggleDoneTask(listTitle, taskTitle);
		events.emit('toggleDone', [userLists]);
	}else if(target.classList.contains('task-elements__delete-task-icon')) {
		//delete task(handle x-button)
		const taskTitle = target.parentElement.
			querySelector('.task-elements__h2').textContent.trim();
		const listTitle = target.closest('.task-lists__list').
			querySelector('.list-description__h1').textContent.trim();

		userLists.removeTask(listTitle, taskTitle);
		events.emit('removeTask', [userLists]);
	}else if(!!event.target.closest('.add-task__name-input')) {
		//add new task
		event.target.nextElementSibling.addEventListener('click', addNewTask);
	}else if(!event.target.closest('.add-task')) {
		//create task-menu for item
		const taskTitle = target.closest('.task-elements ').querySelector('.task-elements__h2').
			textContent.trim();
		const listTitle = target.closest('.task-lists__list').
			querySelector('.list-description__h1').textContent.trim();
		events.emit('userOpenTaskMenu', [userLists ,userLists[listTitle][taskTitle], listTitle, taskTitle]);
	}
});