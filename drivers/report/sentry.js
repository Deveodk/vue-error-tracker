module.exports = {
    _init: function (Vue) {
        if (!Vue.prototype.$raven) {
            console.warn('@deveodk/vue-error-tracker : sentry raven must be set before this plugin is used.')
        }
    },
    _report: function (Vue, status, statusText, body, logLevel) {
        Vue.prototype.$raven.captureMessage(status + ' ' + statusText, {
            level: logLevel,
            extra: body,
            tags: ['Vue-error-tracker']
        })
    }
}
