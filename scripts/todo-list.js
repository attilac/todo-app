"use strict";

/**
 * En Todo-lista
 * @constructor
 */
function TodoList() {
  this.tasks = [];
}

/**
 * Lägger till ett task till listan.
 * @param {object} ett Taskobjekt
 */
TodoList.prototype.addTask = function (task) {
  this.tasks.push(task);
};

/**
 * Tar bort ett task från listan.
 * @param {object} ett Taskobjekt
 */
TodoList.prototype.removeTask = function (task) {
  var index = this.tasks.indexOf(task);
  if (index > -1) {
    this.tasks.splice(index, 1);
  }
};

/**
 * Lägger till ett task till listan.
 * @return {number} 
 */
TodoList.prototype.getLength = function () {
  return this.tasks.length;
};
//# sourceMappingURL=todo-list.js.map
