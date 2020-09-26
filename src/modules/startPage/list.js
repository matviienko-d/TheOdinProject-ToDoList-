import {checkUserInput} from './../addListMenu/addListMenuModule.js';
import {userLists} from './../DATA-JSON.js';
import {events} from './../pubSub.js';
//cache DOM
const listUl = document.querySelector('.tasks');
const taskLists = document.querySelector('.task-lists');

const showListContent = function(listDescription) {
	listDescription.querySelector('.list-description__expand-list-icon').
	classList.toggle('list-description__expand-list-icon_transition_rotate');

	listDescription.querySelector('.tasks').
	classList.toggle('tasks_content_show');
};

const handleListTitleInput = function(event) {
	if(event.code !== 'Enter') return;

	const input = event.target;
	if(checkUserInput(input) && 
		userLists.isListUnique(input.value)) {

		userLists.changeListTitle(
			    input.previousElementSibling.textContent.trim(), input.value);

		events.emit('changeListTitle', [userLists]);
	}else {
		input.blur();
	}
};

const hideListTitleInput = function() {
	this.classList.toggle('list-description__change-name-input_display_none');
	this.removeEventListener('keydown', handleListTitleInput);
};

const showListTitleInput = function(input) {
	input.classList.toggle('list-description__change-name-input_display_none');
	input.focus();
	input.addEventListener('keydown', handleListTitleInput);
	input.onblur = hideListTitleInput;
};

taskLists.addEventListener('click', function(event) {
	if(!(event.target.classList.contains('list-description__h1') ||
		!!event.target.closest('.list-description__expand-list-icon') ||
		event.target.classList.contains('list-description'))) return;

	const listDescription = event.target.closest('.task-lists__list');

	if(listDescription == null) return;

	showListContent(listDescription);
});

taskLists.addEventListener('click', function(event) {
	const editIcon = event.target.closest('.list-description__edit-title-icon');

	if(editIcon == null) return;
	const listDescription = editIcon.closest('.list-description');

	//show list title input
	showListTitleInput(listDescription.
		querySelector('.list-description__change-name-input'));
});
const removeList = function(listDescription) {
	userLists.removeList(listDescription.querySelector('.list-description__h1').
						  textContent.trim());
	events.emit('removeList', [userLists]);
};

taskLists.addEventListener('click', function(event) {
	const deleteIcon = event.target.closest('.list-description__delete-list-icon');

	if(deleteIcon == null) return;
	const listDescription = deleteIcon.closest('.list-description');

	removeList(listDescription);
});