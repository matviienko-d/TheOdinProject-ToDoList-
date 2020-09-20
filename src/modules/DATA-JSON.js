import {events} from './pubSub.js';
import {userListsPrototype} from './userListsPrototype.js';
import {Task} from './taskConstructor.js';

const defaultLists = {
	'Daily Plans': {
		'Wash my car': new Task(
			null, 
			[
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	3,
		   	new Date(Date.now() + 24 * 3600 * 1000),
			false
		),
		'Something else':  new Task(
			'blblblblbl', 
			[
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	1,
		   	new Date(Date.now() + 24 * 3600 * 1000),
		   	true
		)
	},
	'Tomorrow': {
		'Something tomorrow': new Task(
			'blblblblbl', 
			[
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	2,
		   	new Date(Date.now() + 100 * 24 * 3600 * 1000),
		   	true
		),
		'Something else tomorrow': new Task(
			'blblblblbl', 
			[
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	2,
		   	null,
		   	true
		)
	},
	'Buy list': {
		'Apple': new Task(
			null, 
			[
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	2,
		   	new Date(Date.now() + 24 * 3600 * 1000),
		   	true
		),
		'Other stuff': new Task(
			'blblblblbl', 
			[
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	2,
		   	new Date(Date.now() + 100 * 24 * 3600 * 1000),
		   	false
		)
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
export {
	saveList,
	userLists
};