module.exports = {
    _init: function (Vue) {
        if (!Vue.prototype.axios) {
            console.warn('@deveodk/vue-error-tracker : axios must be set before this plugin is used.')
        }
    },
    _interceptor: function (Vue, code, errorCb) {
        Vue.prototype.axios.interceptors.response.use(function (response) {
            // Do something with response data
            code(response)
            return response
        }, function (error) {
            errorCb(error)
            // Do something with response error
            return error
        })
    }
}
