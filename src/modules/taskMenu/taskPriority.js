import {events} from './../pubSub.js';
import {userLists} from './../DATA-JSON.js';

const priorityHandler = function(args) {
	let [listTitle, taskTitle] = args;

	const priorityList = document.querySelector('.priority__list-colors');

	const pickPriorityHandler = function(event) {
		if(!event.target.closest('.priority__list-colors-item')) return;
		const liPicked = event.target.closest('.priority__list-colors-item');

		const liAlreadySelected = document.querySelector('.priority__list-colors-item_state_selected');

		if(liPicked === liAlreadySelected) {
			liAlreadySelected.classList.toggle('priority__list-colors-item_state_selected');
			userLists.setTaskPriority(listTitle, taskTitle, null);
		}else {
			liPicked.classList.toggle('priority__list-colors-item_state_selected');
			const pickedPriorityNumber = parseInt(liPicked.dataset.priority);
			userLists.setTaskPriority(listTitle, taskTitle, pickedPriorityNumber);
			if(!!liAlreadySelected) {
				liAlreadySelected.classList.toggle('priority__list-colors-item_state_selected');
			}
		}
		events.emit('taskPriorityChanged', [userLists]);
	};
	priorityList.addEventListener('click', pickPriorityHandler);	
};

events.on('taskMenuBuilded', priorityHandler);