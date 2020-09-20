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
	changeListTitle: function(oldTitle, newTitle) {
		this[newTitle] = this[oldTitle];
		delete this[oldTitle];
	},
	removeList: function(title) {
		delete this[title];
	}

};

export {
	userListsPrototype
};