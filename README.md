# vue-error-tracker
Vue error tracker keeps track of vue-resource http related errors, and provides a easy solution for tracking errors.


####Installation

~~~
> npm install @deveodk/vue-error-tracker
~~~   

~~~
 var VueErrorTracker = require('@deveodk/vue-error-tracker');
 Vue.use(VueErrorTracker, {
 //options are optional.
              AlertHeader: 'Whoops, something went wrong!',
              ErrorCode: 'Error code:',
              OfflineMessage: 'You are offline',
              MessageTimeout: 5000,
              Timeout: 'We are experiencing high loads, and therefore we failed to load the resource.',
              ServerError: 'Something went wrong, please contact the system admin if the problem persists.',
              BadGateway: 'You have found a bug, please contact the system admin.',
              BadRequest: 'There have been a error. Please reload the site and try again.',
              NotFound: 'The page was not found. Please contact the system admin.',
 });
~~~   


####Available options 

### AlertHeader: `Whoops, something went wrong!`
* Set the title of the alert.

### ErrorCode: `Error code:`
* Set the equivalent word for errorcode for translations.

### OfflineMessage: `You are offline`
* Set the message when the browser is offline and the user tries to make and request.

### MessageTimeout: `5000`
* Set the time between fatal error alerts, ideal if you have many http request which fails.

### Timeout: `We are experiencing high loads, and therfore we failed to load the resource`
* Set the message when a 504 error appears. due to high load.

### ServerError: `Something went wrong, please contact the system admin if the problem persist.`
* Set the message for when a 500 error appears.

### BadGateway: `You have found a bug, please contact the system admin.`
* Set the message for when a 502 error appears.

### NotFound: `You have found a bug, please contact the system admin.`
* Set the message for when a 404 error appear