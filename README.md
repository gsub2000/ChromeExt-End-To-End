# ChromeExt-End-To-End

This is a demo for connecting the JS frontend and Python Flask backend for a Chrome extension. Feel free to fork the repository and/or download the zip file to test out the code. 

## How to run this demo:

1. Download this repo and unzip it onto a folder on your computer.
2. Open the Extension Management page by navigating to chrome://extensions.
  - Alternatively, open this page by clicking on the Extensions menu button and selecting Manage Extensions at the bottom of the menu.
  - Alternatively, open this page by clicking on the Chrome menu, hovering over More Tools then selecting Extensions
4. Enable Developer Mode by clicking the toggle switch next to Developer mode.
5. Click the Load unpacked button and select the extension directory.
6. Run the python script `main.py`
7. Inspect element on any webpage and look for the reversed string in the console.

Please note that all extra files are required (i.e. require.js, jquery.js, jquery-3.5.1.js).

For more information regarding how to set up the folder, please see the link: https://developer.chrome.com/docs/extensions/mv3/getstarted/
