VueErrorHandler.install = function (Vue, options) {


        const vueResource = Vue.prototype.$http;


        if (vueResource == null) {
            console.log("Vue-error-handler: Vue-resource must be installed.")
        }


}