module.exports = {
  _init: function (Vue) {
    if (!Vue.prototype.http) {
      console.warn('@deveodk/vue-error-tracker : vue-resource must be set before this plugin is used.')
    }
  },
  _interceptor: function (Vue, code) {
    Vue.prototype.http.interceptors.push(function (request, next) {
      next(function (response) {
        code(response)
      })
    })
  }
}
