/*---------------------------------------------------------------------

File: background.js

Notes: This file is to take data from the content.js and route it accordingly.

-----------------------------------------------------------------------*/

// request: data coming from content's sendMessage to background's onMessage
// response: data sent back from the Python to the content.js
chrome.runtime.onMessage.addListener(
	function(request, sender, response){
	
	// The items in the AJAX call vary based on the Flask methods.
	$.ajax({
		type: 'POST',
		url: 'http://127.0.0.1:5000/example',
		data: JSON.stringify({'msg':request}),
		encoding: 'UTF-8',
		success: function (resp) {
			response(resp);
		},
		error: function(er,a,b){
			console.log("error");
		}
	});
	return true;
});