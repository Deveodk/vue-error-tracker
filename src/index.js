import utils from './libs/utils.js'
function plugin (Vue, options) {
    const defaultOptions = {
      HttpErrorCodes: {}
    }
    options = utils.extend(defaultOptions, [options || {}])
    let notification = false
    if (options.NotificationDriver) {
      options.NotificationDriver._init(Vue)
        notification = true
    }

    if (options.HttpDriver) {
        options.HttpDriver._init(Vue)
        options.HttpDriver._interceptor(Vue, (response) => {
            if (!response) {
                return
            }
            const length = Object.keys(options.HttpErrorCodes).length
            let temp
            let object
            for (let i = 0; i < length; i++) {
                temp = Object.keys(options.HttpErrorCodes)[i]
                object = options.HttpErrorCodes[temp]
                if (response.status === parseInt(temp)) {
                    if (notification) {
                      switch (object.type) {
                          case 'success':
                            options.NotificationDriver._notifySuccess(Vue, object.message, object.title)
                            break
                          case 'error':
                            options.NotificationDriver._notifyError(Vue, object.message, object.title)
                            break
                      }
                    }
                    return
                }
            }
        })
    }
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  version
}
