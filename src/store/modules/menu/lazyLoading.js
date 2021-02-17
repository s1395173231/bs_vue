// src/store/modules/menu/lazyloading.js
export default (name, index = false) => () => require.ensure([], (require) => require(`../../../views/${name}${index ? '/index' : ''}.vue`))
