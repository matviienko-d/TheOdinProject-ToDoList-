const userListsPrototype = {
	addNewList: function(titleList) {
		this[titleList] = {};
	},
	isListUnique: function(titleList) {
		if(this[titleList] == null) {
			return true;
		}else {
			return false;
		}
	},
	isTaskUnique(listTitle, taskTitle) {
		if(this[listTitle][taskTitle] == null) {
			return true;
		}else {
			return false;
		}
	},
	changeListTitle: function(oldTitle, newTitle) {
		this[newTitle] = this[oldTitle];
		delete this[oldTitle];
	},
	removeList: function(title) {
		delete this[title];
	},
	toggleDoneTask(listTitle ,taskTitle) {
		this[listTitle][taskTitle].done = !this[listTitle][taskTitle].done;
	},
	removeTask(listTitle, taskTitle) {
		delete this[listTitle][taskTitle];
	},
	addNewTask(listTitle, taskTitle) {
		this[listTitle][taskTitle] = {
			description: null, 
			checklist: null,
		   	priority: null,
		   	dueDate: null,
		   	done: false
		};
	}

};

export {
	userListsPrototype
};