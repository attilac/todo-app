"use strict";

/**
 * Hitta närmaste förälder med en given tag
 * @param {string} tag
 * @param {object} element
 */
function findParentNode(tag, element) {
	var parent = element.parentNode;
	var count = 1;
	while (parent.tagName != tag) {
		//console.log('My name is ' + parent.tagName + '. Let\'s try moving up one level to see what we get.');
		parent = parent.parentNode;
		count++;
	}
	// now you have the object you are looking for - do something with it
	//console.log('Finally found ' + parent.tagName + ' after going up ' + count + ' level(s) through the DOM tree');
	return parent;
}

/**
 * Lägg till en CSS-klass till ett element
 * @param {object} element
 * @param {array} classList
 * @param {string} className
 */
function appendClass(element, classList, className) {
	element.classList.add(className);
	/*
 if(classList.length){
 	if(! classList.includes(className)){
 		classList.unshift(className);
 	}
 	var joinedList = classList.join(' ');
 	element.className = joinedList;
 }
 return false;
 */
}

/**
 * Tar bort en CSS-klass från ett element
 * @param {object} element
 * @param {array} classList
 * @param {string} className
 */
function removeClass(element, classList, className) {
	element.classList.remove(className);
	/*
 if(classList.length){
 	if(classList.includes(className)){
 		for (var i = 0; i < classList.length; i++) {
 			if(classList[i] === className){
 				//console.log(classList[i]);
 				classList.splice(i, 1);
 			}
 		}
 	}
 	var splicedList = classList.join(' ');
 	element.className = splicedList;
 }
 return false;
 */
}
//# sourceMappingURL=helper-functions.js.map
