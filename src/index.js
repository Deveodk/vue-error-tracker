var utilitys = require('./lib/utils.js');
import {VueOnline} from 'vue-online';

const VueErrorTracker = {


    install: (Vue, options) => {
        const checkVueResource = Vue.http;


        if (checkVueResource == null) {
            console.log("Vue-error-tracker: Vue-resource must be installed.")
        }


//set the error count variable and the fatal error count.
        var ErrorCount = 0;
        var FatalErrorCount = 0;

        var showMessage = true;

//Set the default options

        var defaultOptions = {
            OfflineMessage: 'You are offline',
            MessageTimeout: 5000,
            Timeout: 'We are experiencing high loads, and therfore we failed to load the resource',
            ServerError: 'Something went wrong, please contact the system admin if the problem persist.',
            BadGateway: 'You have found a bug, please contact the system admin.',
            BadRequest: 'There have been a error, please try to reload the site and try again.',
            NotFound: 'You have found a bug, please contact the system admin.',

        }


        options = utilitys.extend(defaultOptions, [options || {}]);


        Vue.http.interceptors.push(function (request, next) {

            if(!VueOnline.isOnline){
                alertFunction(OfflineMessage);
                return false;
            }

            next(function (response) {

                /**
                 * Response checker code.
                 */


                switch (response.status) {
                    case 403:
                        ErrorCount = ErrorCount + 1;
                        break;
                    case 422:
                        ErrorCount = ErrorCount + 1;
                        break;
                    case 404:
                        ErrorCount = ErrorCount + 1;
                        FatalErrorCount = FatalErrorCount + 1;
                        alertFunction(options.NotFound)
                        break;
                    case 500:
                        ErrorCount = ErrorCount + 1;
                        FatalErrorCount = FatalErrorCount + 1;
                        alertFunction(options.ServerError)
                        break;
                    case 502:
                        ErrorCount = ErrorCount + 1;
                        FatalErrorCount = FatalErrorCount + 1;
                        alertFunction(options.BadGateway)
                        break;
                    case 504:
                        ErrorCount = ErrorCount + 1;
                        FatalErrorCount = FatalErrorCount + 1;
                        alertFunction(options.Timeout)
                        break;
                    default:

                }

            });
        });


        function alertFunction(message) {

            if (showMessage) {
                alert(message);
            }
            showMessage = false;

            setTimeout(function () {
                showMessage = true;
            }, options.MessageTimeout);

        }


    }


}

if (typeof module === 'object' && module.exports) {
    module.exports = VueErrorTracker;
}