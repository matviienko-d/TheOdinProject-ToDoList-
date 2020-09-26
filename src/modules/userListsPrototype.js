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
	changeTaskTitle: function(listTitle, oldTaskTitle, newTaskTitle) {
		this[listTitle][newTaskTitle] = this[listTitle][oldTaskTitle];
		this[listTitle][newTaskTitle].title = newTaskTitle;
		delete this[listTitle][oldTaskTitle];
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
			checklist: [],
		   	priority: null,
		   	dueDate: null,
		   	done: false,
		   	title: taskTitle
		};
	},
	setTaskDescription: function(listTitle, taskTitle, description) {
		this[listTitle][taskTitle].description = description;
	},
	toggleDoneChecklistItem: function(listTitle, taskTitle, checklistItemTitle) {
		this[listTitle][taskTitle].checklist.map((obj) => {
			if(obj.title === checklistItemTitle) {
				obj.done = !obj.done;
			}
			return obj;
		});
	},
	deleteChecklistItem: function(listTitle, taskTitle, checklistItemTitle) {
		this[listTitle][taskTitle].checklist.forEach((checklistItem, index, array) => {
			if(checklistItem.title === checklistItemTitle) {
				array.splice(index, 1);
			}
		});
	},
	isChecklistItemUnique: function(listTitle,taskTitle,checklistItemTitle) {
		for(let checklistItem of this[listTitle][taskTitle].checklist) {
			if(checklistItem.title === checklistItemTitle) {
				return false;
			}
		}
		return true;
	},
	addChecklistItem: function(listTitle,taskTitle,checklistItemTitle) {
		this[listTitle][taskTitle].checklist.push({
			title: checklistItemTitle,
			done: false
		});
	},
	setTaskPriority: function(listTitle, taskTitle, pickedPriorityNumber) {
		this[listTitle][taskTitle].priority = pickedPriorityNumber;
	},
	setDueDate: function(listTitle, taskTitle, dueDate) {
		this[listTitle][taskTitle].dueDate = dueDate;
	}

};

export {
	userListsPrototype
};