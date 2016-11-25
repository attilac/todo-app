'use strict';

/**
 * EventHandler för addknappens klick-event. Lägger till ett task, skapar view och assignar controllers.
 */
function addTaskHandler() {
	var userInput = document.getElementsByClassName('input-add-task')[0];
	var todoHeader = document.getElementsByClassName('todo-header')[0];
	var classList = todoHeader.classList;
	//console.log(userInput);
	if (userInput.value) {
		var task = new Task(userInput.value);
		var target = findParentNode('UL', userInput);
		task.addView(target, target.childNodes[3]);
		//task.addRemoveController();
		//task.addToggleStateController();
		addRemoveController(task);
		addToggleStateController(task);
		todoList.addTask(task);
		printTaskCount();
		userInput.value = '';
		removeClass(todoHeader, classList, 'list-group-item-danger');
	} else {
		//console.log('Vänligen fyll i text till din syssla');
		appendClass(todoHeader, classList, 'list-group-item-danger');
	}
}

/**
 * 
 */
function printTaskCount() {
	console.log('Todo: ' + todoList.getLength());
	var todoCount = todoList.getLength();
	var target = document.getElementsByClassName('todo-count')[0];
	var taskName = 'task';
	if (todoCount > 1) {
		taskName = 'tasks';
	}
	target.innerHTML = todoCount + ' ' + taskName + ' left';
}

/**
 * Eventhandler för removeknapp.
 * @param {object} task - ett Taskobjekt
 */
function addRemoveController(task) {
	var removeBtn = task.template.getElementsByClassName('remove-task')[0];
	removeBtn.addEventListener('click', function () {
		completedList.removeTask(task);
		todoList.removeTask(task);
		task.destroy();
		//console.log(task);
		//console.log('Todo: ' + todoList.getLength());
		//console.log('Completed: ' + completedList.getLength());
		printTaskCount();
	});
}

/**
 * Eventhandler för checkboxar.
 * @param {object} task - ett Taskobjekt
 */
function addToggleStateController(task) {
	var toggleCompleteBtn = task.template.getElementsByClassName('toggle-complete-task')[0];
	toggleCompleteBtn.addEventListener('click', function () {
		var classList = task.template.classList;
		if (this.checked) {
			todoList.removeTask(task);
			task.isCompleted = true;
			if (!completedList.tasks.includes(task)) {
				completedList.addTask(task);
			}
			//console.log('task completed');
			appendClass(task.template, classList, 'completed');
		} else {
			completedList.removeTask(task);
			if (!todoList.tasks.includes(task)) {
				todoList.addTask(task);
				task.isCompleted = false;
			}
			//console.log('task open');
			removeClass(task.template, classList, 'completed');
		}
		//console.log('Todo: ' + todoList.getLength());
		//console.log('Completed: ' + completedList.getLength());
		printTaskCount();
	});
}

/**
 * Togglar mellan klasser på todo-listan för att filtrera öppna/stängda tasks.
 * @param {object} className
 * @param {object} dataList
 * @param {object} target 
 */
function taskFilterClassToggle(className, dataList, target) {
	var classList = target.classList;
	//console.log(target);
	for (var i = 0; i < dataList.length; i++) {
		removeClass(target, classList, dataList[i]);
	}
	appendClass(target, classList, className);
}

/**
 * EventHandler för filterknappars klick-event. Togglar active klass på vald filterknapp.
 */
function taskFilterBtnGroupHandler() {
	//console.log('Show ' + this.dataset.filter);	
	var taskFilterBtnGroup = document.getElementsByClassName('task-filter');
	var dataList = [];
	for (var i = 0; i < taskFilterBtnGroup.length; i++) {
		var classList = taskFilterBtnGroup[i].classList;
		dataList.push(taskFilterBtnGroup[i].dataset.filter);
		if (taskFilterBtnGroup[i] === this) {
			appendClass(this, classList, 'active');
		} else {
			removeClass(taskFilterBtnGroup[i], classList, 'active');
		}
	}
	var target = findParentNode('UL', this);
	taskFilterClassToggle(this.dataset.filter, dataList, target);
	//console.log(dataList);
}

/**
 * EventHandler för textfält vid tryck på enterknapp.
 */
function inputKeyHandler(event) {
	//console.log(event.keyCode);
	if (event.keyCode === 13) {
		addTaskHandler();
	}
}

// Listor
var todoList = new TodoList();
var completedList = new TodoList();
// Addknapp
var addTaskBtn = document.getElementsByClassName('btn-add-task')[0];
addTaskBtn.addEventListener('click', addTaskHandler);
var userInput = document.getElementsByClassName('input-add-task')[0];
userInput.addEventListener('keyup', inputKeyHandler);
// Filterknappar
var taskFilterBtnGroup = document.getElementsByClassName('task-filter');
for (var i = 0; i < taskFilterBtnGroup.length; i++) {
	taskFilterBtnGroup[i].addEventListener('click', taskFilterBtnGroupHandler);
}
//# sourceMappingURL=app.js.map
