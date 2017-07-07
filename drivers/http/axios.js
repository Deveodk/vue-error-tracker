let $axios = require('axios')

module.exports = {
  _init: function (Vue) {
    if (!$axios) {
      console.warn('@deveodk/vue-error-tracker : axios must be set before this plugin is used.')
    }
  },
  _interceptor: function (Vue, code, errorCb) {
    if ($axios) {
      axios.interceptors.response.use(function (response) {
        code(response)
        return response
      }, function (error) {
        errorCb(error.response)
        return Promise.reject(error);
      })
    }
  }
}
