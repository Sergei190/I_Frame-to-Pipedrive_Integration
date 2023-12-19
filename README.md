# JS Developer Intern Test Task Documentation


## Description

This documentation provides an overview and explanation of the test task for the JavaScript developer intern 
position. The task involves setting up an application using Pipedrive CRM and creating an iframe window to 
collect and save input information to Pipedrive using an API call. The task also requires submitting the
completed task along with additional attachments.


## Task Steps

1. Set up the Pipedrive CRM application.
2. Open an iframe window.
3. Save all input information from the iframe window to Pipedrive by making an API call to create a deal and 
   send all the collected information.
   Example video: Video Example.Mp4
   Note: Google Maps integration for the address field is not required.


### Required Apps:

* Pipedrive
* Hosting for the web page/iframe window
* Loom


### Task Submission

* Send the completed task to `malika@salesautomators.com`.
* Use the subject line "Javascript developer intern first test task done".
* Attach the following:
   * Link to the GitHub repository.
   * CV in HH (format not specified).
   * Link to a video screencast with a webcam explaining the code and how everything works.


## Code Explanation

The provided code serves as a starting point for completing the test task. It includes the following functions 
and steps:

1. The `sendRequestToPipedriveAPI()` function handles sending a POST request to the Pipedrive API.
2. The `window.onload` event handler handles loading the web page and initializing the iframe.
3. Inside the window.onload handler:
    * The iframe's source (`src`) is set to the specified URL.
    * An event listener is attached to the iframe's `onload` event.
    * The `onload` event handler inside the iframe:
       * Retrieves the input information from the iframe document.
       * Constructs a `pipedriveDeal` object with the collected information.
       * Calls `sendRequestToPipedriveAPI()` to send the deal to Pipedrive.

The provided code includes duplicate `window.onload` handlers and `iframe.onload` event handlers.        
Please consolidate the code to avoid conflicts.

To complete the task, insert the necessary code inside the  `sendRequestToPipedriveAPI()` function to
send the POST request to the Pipedrive API.

Note: The actual code for making the API call to Pipedrive is missing and needs to be implemented by the 
developer.


## Conclusion

This documentation provides an overview of the Javascript developer intern test task. It explains the steps 
required to complete the task and provides the initial code provided. Developers are expected to implement 
the missing code inside the `sendRequestToPipedriveAPI()` function to send the API call to Pipedrive and 
complete the task according to the given instructions. Once completed, the task should be submitted as 
instructed in the task description.