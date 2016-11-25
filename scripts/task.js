'use strict';

/**
 * Ett Task-objekt
 * @constructor
 */
function Task(taskText) {
	this.taskText = taskText;
	this.isCompleted = false;
	this.template = '<li class="list-group-item todo-item"><div class="input-group input-group-lg"><span class="input-group-addon"> <input class="toggle-complete-task toggle" type="checkbox"> </span> <input type="text" class="form-control" aria-label="Text input" value="" readonly> <div class="input-group-btn"> <a href="#" class="remove-task btn btn-default" aria-label="Close">&times;</a> </div> </div> </li>';
}

/**
 * Skapar UI till Task-objektet och lägger till i DOM.
 * @param {object} target
 * @param {object} position 
 */
Task.prototype.addView = function (target, position) {
	var taskTemplate = this.template;
	var tempUl = document.createElement('ul');
	tempUl.innerHTML = taskTemplate;
	this.template = tempUl.childNodes[0];
	this.template.getElementsByClassName('form-control')[0].value = this.taskText;
	target.insertBefore(this.template, position);
	//console.log(this.template);
};

/**
 * ALt1. Tar bort ett list-item.
 */
Task.prototype.destroy = function () {
	var parent = findParentNode('UL', this.template);
	parent.removeChild(this.template);
	//this.template.remove();
};

/**
 * Lägger till controller för removeknapp.
 */
Task.prototype.addRemoveController = function () {
	var removeBtn = this.template.getElementsByClassName('remove-task')[0];
	var parent = findParentNode('UL', this.template);
	var listItem = this.template;
	removeBtn.addEventListener('click', function () {
		parent.removeChild(listItem);
	});
};

/**
 * Lägger till controller för checkboxar.
 */
Task.prototype.addToggleStateController = function () {
	var toggleCompleteBtn = this.template.getElementsByClassName('toggle-complete-task')[0];
	var classList = this.template.classList;
	var target = this.template;
	toggleCompleteBtn.addEventListener('click', function () {
		if (this.checked) {
			this.isCompleted = true;
			console.log('this completed');
			appendClass(target, classList, 'completed');
		} else {
			console.log('this open');
			removeClass(target, classList, 'completed');
		}
	});
};
//# sourceMappingURL=task.js.map
