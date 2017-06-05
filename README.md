# @deveodk/vue-error-tracker


<img src="https://cloud.githubusercontent.com/assets/7561792/26696798/329afeb2-4710-11e7-8df0-43ad803237b7.png" width="100%" />

[![npm](https://img.shields.io/npm/v/@deveodk/vue-error-tracker.svg)](https://www.npmjs.com/package/@deveodk/vue-error-tracker) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Give your users an easy way to see when something in your application goes wrong. This package makes it easy to show error messages.

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
<!-- Include after Vue -->
<!-- Local files -->
<link rel="stylesheet" href="@deveodk/vue-error-tracker/dist/@deveodk/vue-error-tracker.css"></link>
<script src="@deveodk/vue-error-tracker/dist/@deveodk/vue-error-tracker.js"></script>

<!-- From CDN -->
<link rel="stylesheet" href="https://unpkg.com/@deveodk/vue-error-tracker/dist/@deveodk/vue-error-tracker.css"></link>
<script src="https://unpkg.com/@deveodk/vue-error-tracker"></script>
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

## License

[MIT](http://opensource.org/licenses/MIT)

<img src="https://cloud.githubusercontent.com/assets/7561792/26679305/bc4d7bda-46d4-11e7-9270-3f6cacdd0ae9.png" width="100%" />
