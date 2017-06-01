module.exports = {
    _init: function (Vue) {
        if (!Vue.prototype.$toastr) {
            console.warn('@deveodk/vue-toastr : vue-toastr must be set before this plugin is used.')
        }
    },
    _notifySuccess: function (Vue, message, title) {
        Vue.prototype.$toastr('success', message, title)
    },
    _notifyError: function (Vue, message, title) {
        Vue.prototype.$toastr('error', message, title)
    }
}
