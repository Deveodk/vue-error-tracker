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
              OfflineMessage: 'You are offline',
              MessageTimeout: 5000,
              Timeout: 'We are experiencing high loads, and therfore we failed to load the resource',
              ServerError: 'Something went wrong, please contact the system admin if the problem persist.',
              BadGateway: 'You have found a bug, please contact the system admin.',
              BadRequest: 'There have been a error, please try to reload the site and try again.',
              NotFound: 'You have found a bug, please contact the system admin.',
 });
~~~   


####Available options 

### OfflineMessage: `You are offline`
* Set the message when the browser is offline and the user tries to make and request

### MessageTimeout: `5000`
* Set the time between fatal error alerts, ideal if you have many http request which fails.

### Timeout: `We are experiencing high loads, and therfore we failed to load the resource`
* Set the message when a 504 error appears. due to high load.

### ServerError: `Something went wrong, please contact the system admin if the problem persist.`
* Set the message for when a 500 error appears

### BadGateway: `You have found a bug, please contact the system admin.`
* Set the message for when a 502 error appears

### NotFound: `You have found a bug, please contact the system admin.`
* Set the message for when a 404 error appear