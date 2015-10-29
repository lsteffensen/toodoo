// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on("ready", ready);

function ready() {
	$(document).on("ready page:load", ready);
	$('#new_task').on('ajax:success', newTask);

	function ready() {
	window.location.reload();
		
	}
}


function newTask(event, data) {
  $('#tasks').append(data);
  $('#task_name').val('');
  // $('body').append(data);
  // console.log(arguments);
}

