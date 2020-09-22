class Task {
	constructor(description, checklist, priority, dueDate, done) {
		this.description = description;
		this.checklist = checklist;
		this.priority = priority;
		this.dueDate = dueDate;
		this.done = done;
	}
	toggleDone() {
		this.done = !this.done;
	}
}

export {
	Task
};