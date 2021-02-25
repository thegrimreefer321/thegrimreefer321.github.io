let adder = document.getElementById("add");
let list = document.getElementById("list");
let completed = document.querySelectorAll(".complete");
let textBox = document.querySelector("#textInput");

adder.onclick = function(){
	if(document.getElementById("textInput").value == ""){
		alert("Unable to add an empty todo item");
	}else{
		let todoLine = document.createElement("li");
		let todoSpan = document.createElement("span");
		let todoButt = document.createElement("button");
		//append and add
		todoButt.classList.add("complete");
		todoSpan.innerHTML = textBox.value;
		todoButt.innerHTML = "Completed";
		todoLine.appendChild(todoSpan);
		todoLine.appendChild(todoButt);
		list.appendChild(todoLine);
		//reset
		textBox.value = "";
		//update complete button
		completed = document.querySelectorAll(".complete");
		for(let x = 0;x < completed.length;x++){
			completed[x].addEventListener("click", function(events){
				events.path[1].classList.add("unload");
				setTimeout(function(){ events.path[1].remove(); }, 1000);
				//events.path[1].remove();
			})
		}

	}

}
textBox.addEventListener("keyup", function(event){
	if(event.keyCode === 13){
		adder.click();	
	}
})
if(list.childElementCount == 0){

}else if(list.childElementCount > 0){
	
}