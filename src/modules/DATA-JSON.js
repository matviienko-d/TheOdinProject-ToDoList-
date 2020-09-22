import {events} from './pubSub.js';
import {userListsPrototype} from './userListsPrototype.js';
import {Task} from './taskConstructor.js';

const defaultLists = {
	'Daily Plans': {
		'Wash my car': {
			description: null, 
			checklist: [
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	priority: 3,
		   	dueDate: new Date(Date.now() + 24 * 3600 * 1000),
			done: false
		},
		'Something else':  {
			description: 'blblblbl', 
			checklist: [
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	priority: 1,
		   	dueDate: new Date(Date.now() + 24 * 3600 * 1000),
		   	done: true
		}
	},
	'Tomorrow': {
		'Something tomorrow': {
			description: 'blblbllbl', 
			checklist: [
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	priority: 2,
		   	dueDate: new Date(Date.now() + 100 * 24 * 3600 * 1000),
		   	done: true
		},
		'Something else tomorrow': {
			description: 'lblblbl', 
			checklist: [
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	priority: 2,
		   	dueDate: null,
		   	done: true
		}
	},
	'Buy list': {
		'Apple': {
			description: null, 
			checklist: [
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	priority: 2,
		   	dueDate: new Date(Date.now() + 24 * 3600 * 1000),
		   	done: true
		},
		'Other stuff': {
			description: 'blblblblbl', 
			checklist: [
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	priority: 2,
		   	dueDate: new Date(Date.now() + 100 * 24 * 3600 * 1000),
		   	done: false
		}
	}
};

const createDefaultLists = function() {
	let userLists = Object.create(userListsPrototype);
	userLists = Object.assign(userLists, defaultLists);
	return userLists;
};
const createLists = function(jsonLists) {
	let userLists = Object.create(userListsPrototype);
	userLists = Object.assign(userLists, JSON.parse(jsonLists));
	return userLists;
};

const saveList = function(list) {
	localStorage.setItem('userList', JSON.stringify(list));
};

const findList = function(listName) {
	const jsonLists = localStorage.getItem(listName);
	if(!!jsonLists) {
		return createLists(jsonLists);
	}else {
		return createDefaultLists();
	}
};
let userLists = findList('userList');
events.on('addNewList', saveList);
events.on('changeListTitle', saveList);
events.on('removeList', saveList);
events.on('toggleDone', saveList);
events.on('removeTask', saveList);
events.on('addNewTask', saveList);

export {
	saveList,
	userLists
};