var utilitys = require('./lib/utils.js');
const VueOnline = require('vue-online/src/VueOnline.js')

var component = require('./components/errorbox.vue');
module.exports = (function () {

    return function install(Vue, options) {
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
            AlertHeader: 'Whoops, something went wrong!',
            ErrorCode: 'Error code:',
            OfflineMessage: 'You are offline',
            MessageTimeout: 5000,
            Timeout: 'We are experiencing high loads, and therefore we failed to load the resource.',
            ServerError: 'Something went wrong, please contact the system admin if the problem persists.',
            BadGateway: 'You have found a bug, please contact the system admin.',
            BadRequest: 'There have been a error. Please reload the site and try again.',
            NotFound: 'The page was not found. Please contact the system admin.',

        }


        options = utilitys.extend(defaultOptions, [options || {}]);


        Vue.http.interceptors.push(function (request, next) {

            if(!VueOnline.isOnline){
                alertFunction(options.OfflineMessage, "offline");
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
                        alertFunction(options.NotFound,response.status)
                        break;
                    case 500:
                        ErrorCount = ErrorCount + 1;
                        FatalErrorCount = FatalErrorCount + 1;
                        alertFunction(options.ServerError,response.status)
                        break;
                    case 502:
                        ErrorCount = ErrorCount + 1;
                        FatalErrorCount = FatalErrorCount + 1;
                        alertFunction(options.BadGateway,response.status)
                        break;
                    case 504:
                        ErrorCount = ErrorCount + 1;
                        FatalErrorCount = FatalErrorCount + 1;
                        alertFunction(options.Timeout,response.status)
                        break;
                    default:

                }

            });
        });


        function alertFunction(message,codeStatus) {

            if (showMessage) {
                var Comp = Vue.extend(component);
                var vm = new Comp({
                    data: {
                        header: options.AlertHeader,
                        message: message,
                        code: options.ErrorCode,
                        status: codeStatus
                    }
                }).$mount();
                vm.$appendTo('body')
            }
            showMessage = false;

            setTimeout(function () {
                showMessage = true;
            }, options.MessageTimeout);

        }


    }



})();