<img src="https://s3.eu-central-1.amazonaws.com/deveo-packages/packages/vue-error-tracker/banner.png" width="100%" />


[![npm](https://img.shields.io/npm/v/@deveodk/vue-error-tracker.svg)](https://www.npmjs.com/package/@deveodk/vue-error-tracker) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Give your users an easy way to see when something in your application goes wrong. This package makes it easy to show error messages.

# Demo
See a functioning demo
<a href="https://packages.deveo.io/packages/vue/vue-error-tracker">deveo demo site</a>


## Installation

```bash
npm install --save @deveodk/vue-error-tracker
```

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import vueErrorTracker from '@deveodk/vue-error-tracker'
Vue.use(vueErrorTracker)
```

### Browser

```html
<!-- From CDN -->
<script src="https://unpkg.com/@deveodk/vue-error-tracker/dist/@deveodk/vue-error-tracker.min.js"></script>
```

## Usage

The error tracker will automatically show a nice little toastr if you combine it with our @deveodk/vue-toastr.
However it is possible to write your own custom drivers

The package is compatible with vue-resource and axios out of the box

```code
# You can notify on as many http status codes as your like, 
just include them in the HttpErrorCodes object

import errorTracker from '@deveodk/vue-error-tracker'
Vue.use(errorTracker, {
    HttpDriver: require('@deveodk/vue-error-tracker/drivers/http/axios.js'),
    NotificationDriver: require('@deveodk/vue-error-tracker/drivers/notification/deveoToastr.js'),
   # Sentry.io optional
   # ReportDriver: require('@deveodk/vue-error-tracker/drivers/report/sentry.js'),
    HttpErrorCodes: {
        400: {
            title: 'Unknown error',
            message: 'Something went wrong',
            type: 'error'
        },
        500: {
            title: 'Server error',
            message: 'Ohh no something went wrong',
            type: 'error'
        }
    }
})
```

## Reporting errors
You can report the errors through the error drivers. The error tracker comes with built in support for sentry.io

```code
# Sentry raven example
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
Raven
    .config(KEY HERE)
    .addPlugin(RavenVue, Vue)
    .install()
Vue.prototype.$raven = Raven

# The error tracker will now automaticly report the errors to sentry
```

## License

[MIT](http://opensource.org/licenses/MIT)

<img src="https://s3.eu-central-1.amazonaws.com/deveo-packages/packages/packages-by-deveo.png" width="100%" />
