module.exports = (function () {
    function isObject (val) {
        return val !== null && typeof val === 'object' && val.constructor !== Array
    }

    function toArray (val) {
        return (typeof val) === 'string' || (typeof val) === 'number' ? [val] : val
    }

    function extend (mainObj, appendObj) {
        let i, ii, key
        const data = {}

        for (key in mainObj) {
            if (isObject(mainObj[key])) {
                data[key] = extend(mainObj[key], {})
            } else {
                data[key] = mainObj[key]
            }
        }

        for (i = 0, ii = appendObj.length; i < ii; i++) {
            for (key in appendObj[i]) {
                if (isObject(appendObj[i][key])) {
                    data[key] = extend(mainObj[key] || {}, [appendObj[i][key]])
                } else {
                    data[key] = appendObj[i][key]
                }
            }
        }

        return data
    }

    function compare (one, two) {
        let i, ii, key

        if (Object.prototype.toString.call(one) === '[object Object]' && Object.prototype.toString.call(two) === '[object Object]') {
            for (key in one) {
                if (compare(one[key], two[key])) {
                    return true
                }
            }

            return false
        }

        one = toArray(one)
        two = toArray(two)

        if (one.constructor !== Array || two.constructor !== Array) {
            return false
        }

        for (i = 0, ii = one.length; i < ii; i++) {
            if (two.indexOf(one[i]) >= 0) {
                return true
            }
        }

        return false
    }

    return {
        extend: extend,
        toArray: toArray,
        compare: compare
    }
})()
