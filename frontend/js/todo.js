var newTask = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasks = document.getElementById("incomplete-tasks");
var completeTasks = document.getElementById("completed-tasks");
var removeButton = document.getElementsByClassName("delete");
var completedRemoveButton = completeTasks.getElementsByClassName("delete");

showIncomplete();
showComplete();


function createNewTaskElement(str,i) {
	console.log("1");
	var listItem = document.createElement("li");
	var label = document.createElement("label");
	var checkBox = document.createElement("input");
	var span = document.createElement("span");
	var deleteButton = document.createElement("button");
	label.className = "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect";
	label.setAttribute("for",(i+1));
	checkBox.type = "checkbox";
	checkBox.id = (i+1);
	checkBox.setAttribute("onclick","completed(this)");
	checkBox.className = "mdl-checkbox__input";
	span.className = "mdl-checkbox__label";
	span.id = "text-" + (Number(i)+1);
	span.innerText = str;
	deleteButton.className = "mdl-button mdl-js-button mdl-js-ripple-effect delete";
	deleteButton.innerText = "Delete";
	deleteButton.id = i+1;
	label.appendChild(checkBox);
  	label.appendChild(span);
  	listItem.appendChild(label);
  	listItem.appendChild(deleteButton);

  	return listItem;

};

function completedTaskElement(str, i){
	console.log("2");
	var listItem = document.createElement("li");
	var span = document.createElement("span");
	var icon = document.createElement("i");
	var deleteButton = document.createElement("button");
	listItem.className = "mdl-list";
	span.className = "mdl-list__item-primary-content";
	icon.className = "material-icons mdl-list__item-icon";
	icon.innerText = "done";
	str = document.createTextNode(str);
	span.appendChild(icon);
	span.appendChild(str);
	deleteButton.className = "mdl-button mdl-js-button mdl-js-ripple-effect delete";
	deleteButton.innerText = "Delete";
	deleteButton.id = i+1;
  	listItem.appendChild(span);
  	listItem.appendChild(deleteButton);

  	return listItem;

};

function completed(element){
	console.log("3");
	var id = element.getAttribute('id');
	var complete = getCompletedData();
	str = document.getElementById("text-" + Number(id)).innerText;
	complete.push(str);
	localStorage.setItem('complete',JSON.stringify(complete));
	completeTasks.appendChild(completedTaskElement(str,complete.length-1));
	completedRemoveButton[complete.length-1].addEventListener('click', deleteComplete);
	var data = getData();
	data.splice(id-1,1);
	localStorage.setItem('todo', JSON.stringify(data));
	incompleteTasks.innerHTML="";
	showIncomplete();
	componentHandler.upgradeDom();
};

function getData(){
	console.log("4");
	var data = new Array;
	var data_str = localStorage.getItem('todo');
	if (data_str != null){
		data = JSON.parse(data_str);
	}
	return data;
};

function getCompletedData(){
	console.log("5");
	var data = new Array;
	var data_str = localStorage.getItem('complete');
	if (data_str != null){
		data = JSON.parse(data_str);
	}
	return data;	
};


function addTask() {
	console.log("6");
	var data = getData();
	var task = newTask.value;
	if(task != "") {
		data.push(newTask.value);
		localStorage.setItem('todo', JSON.stringify(data));
		add(newTask.value,data.length-1);
		newTask.value="";
		componentHandler.upgradeDom();
	}
	return false;
};

function add(str,i){
	console.log("7");
	incompleteTasks.appendChild(createNewTaskElement(str,i));
	removeButton[i].addEventListener('click', deleteIncomplete);
};
function showIncomplete(){
	console.log("8");
	var data = getData();
	for(var i=0; i<data.length;i++){
		incompleteTasks.appendChild(createNewTaskElement(data[i],i));
		removeButton[i].addEventListener('click', deleteIncomplete);
	}
};

function showComplete(){
	console.log("9");
	var complete = getCompletedData();
	for(var i=0; i<complete.length;i++){
		completeTasks.appendChild(completedTaskElement(complete[i],i));
		completedRemoveButton[i].addEventListener('click', deleteComplete);
	}

};

function deleteIncomplete(){
	console.log("10");
	var id = this.getAttribute('id');
	var data = getData();
	data.splice(id-1,1);
	localStorage.setItem('todo', JSON.stringify(data));
	incompleteTasks.innerHTML="";
	showIncomplete();
	componentHandler.upgradeDom();
	return false;
};

function deleteComplete() {
	console.log("11");
	var id = this.getAttribute('id');
	var data = getCompletedData();
	data.splice(id-1,1);
	localStorage.setItem('complete', JSON.stringify(data));
	completeTasks.innerHTML="";
	showComplete();
	return false;
};

addButton.addEventListener("click",addTask);
