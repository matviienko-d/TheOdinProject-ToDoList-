//import Task contructor
import {Task} from './taskConstructor.js';

const defaultList = new Map([
	['Daily Plans', new Map([
		['Wash my car', new Task(
			null, 
			[
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	3,
		   	new Date(Date.now() + 24 * 3600 * 1000),
			false
		)],
		['Something else', new Task(
			'blblblblbl', 
			[
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	1,
		   	new Date(Date.now() + 24 * 3600 * 1000),
		   	true
		)]
	])],
	['Tomorrow', new Map([
		['Something tomorrow', new Task(
			null, 
			[
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	2,
		   	new Date(Date.now() + 24 * 3600 * 1000),
		   	false
		)],
		['Something tomorrow', new Task(
			'blblblblbl', 
			[
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	2,
		   	new Date(Date.now() + 100 * 24 * 3600 * 1000),
		   	true
		)]
	])],
	['Buy list', new Map([
		['Apple', new Task(
			null, 
			[
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	2,
		   	new Date(Date.now() + 24 * 3600 * 1000),
		   	true
		)],
		['Other stuff', new Task(
			'blblblblbl', 
			[
			 {title: 'find something', done: true},
		   	 {title: 'something else', done: false},
		   	 {title: 'find something', done: false}
		   	],
		   	2,
		   	new Date(Date.now() + 100 * 24 * 3600 * 1000),
		   	false
		)]
	])]
]);

export {
	defaultList
};