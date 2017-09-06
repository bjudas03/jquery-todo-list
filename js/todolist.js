//var addToList = $("#input").val();
//var list = $("#toDoList");
var todolist = []


//get todolist into array
$("")

//function below adding extra check-boxes to existing elements; why??
$("#test").on("click", function() {
	console.log("we are def in here");
	var newItemText = $('#input').val();
	
	var newItem = $('<li>').append(newItemText);
	$("#todolist").append(newItem);

	var checkbox = $('<input type="checkbox" value="1" class="newcheckbox">').prependTo('li');
	// function to end checkbox duplications??
		checkbox.type = "checkbox";
	//$("#form").append("<checkbox>");
	$("checkbox").push('todolist');
	console.log('todolist');
	
	$("#input").val("");
	$("#input").focus();
});


//removal function
//this one works, but removes all elements: use as base!
function remove() {
	$('#todolist').children('li').filter(function() {
		return(this.firstChild.checked);
	}).remove();
}

//remove only the checked elements!!! All elements in LI getting removed.







//removal function
//function remove() {
	//$('#todolist').filter(this.'.newcheckbox') => true;
//	remove();
	

/*function remove() {
	$(document).ready(function() {
		$('button').click(function() {
			$("ul").remove(".newcheckbox");
		})
	})
}*/
// function Remove() {
// 	$("#delete").on("click", function() {
// 		for (var i; i <= todolist.length; i++) {
// 		  if $(".todolist"[i].val() === true) {
// 		  	$(".todolist").remove(this.[i]);
// 		  }
// 		}
// //	$('.todolist li').has('checkbox:checked').remove();
// 	console.log('box is checked');
// })};


// Remove();

// function addToList() {
// 	var entry = $("#input). = 
// }

// function remove() {
// 	&('ul').on('click', 'span', function(e) {
// 		&(e.target).parent().remove();
// });