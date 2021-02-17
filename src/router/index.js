import Vue from 'vue'
import Router from 'vue-router'
import goTo from 'vuetify/es5/services/goto'
import menuModule from '@/store/modules/menu/index.js'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  routes: [
    ...generateRoutesFromMenu(menuModule.state.items),
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (!item.component) {
      generateRoutesFromMenu(item.subItems, routes)
    }
  }
  return routes
}
