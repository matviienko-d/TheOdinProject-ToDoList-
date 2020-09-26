import {userLists} from './../DATA-JSON.js';
import {events} from './../pubSub.js';
//cache DOM
const addListMenu = document.querySelector('.add-list-wrapper');
const showMenuButton = document.querySelector('.add-list-button');
const cancelButton = document.querySelector('.add-list-menu__button_action_cancel');
const createButton = document.querySelector('.add-list-menu__button_action_create');
const userInput = document.querySelector('.add-list-menu__input');

cancelButton.addEventListener('click', function() {
	addListMenu.classList.add('add-list-wrapper_display_none');
});
showMenuButton.addEventListener('click', function() {
	addListMenu.classList.remove('add-list-wrapper_display_none');
});


const addTaskHolder = function() {
	if(checkUserInput(userInput) && userLists.isListUnique(userInput.value)) {
		addNewListItem();
		events.emit('addNewList', [userLists]);
	}else {
		showInputWarning(userInput, 'add-list-menu__input_content_empty');
	}
};

const addNewListItem = function() {
	userLists.addNewList(userInput.value);
	userInput.value = '';
	cancelButton.click();
};

const checkUserInput = function(userInput) {
	let isCorrectInput = true;

	if(userInput.value === '') {
		isCorrectInput = false;
	}

	return isCorrectInput;

};

const showInputWarning = function(userInput, warningClass) {
	userInput.classList.add(warningClass);

	userInput.onfocus = function() {
		userInput.classList.remove(warningClass);
	};
};

createButton.addEventListener('click', addTaskHolder);

export {
	checkUserInput,
	showInputWarning
};