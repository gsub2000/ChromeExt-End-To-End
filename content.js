/*---------------------------------------------------------------------

File: content.js

Notes: This file is to capture any data on the current tab open on the browser.

-----------------------------------------------------------------------*/

// The chrome.runtime.sendMessage method will send a request to the
// background which will be then routed to a URL in the Flask server.

chrome.runtime.sendMessage("Data to send to python.", function(response){
	// This will output the response from the Python method.
	console.log(response);
});