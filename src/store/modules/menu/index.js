import lazyLoading from './lazyLoading.js'

const state = {
  items: [
    {
      title: 'Projects',
      path: '/projects',
      isMenu: true,
      router: true,
      icon: 'computer',
      component: lazyLoading('projects/Projects')
    },
    {
      title: 'hello world',
      path: '/hello',
      isMenu: true,
      router: true,
      icon: 'computer',
      component: lazyLoading('HelloWorld')
    },
    {
      title: '首页',
      path: '/Home',
      isMenu: true,
      router: true,
      icon: 'computer',
      component: lazyLoading('Home')
    }
  ]
}

export default {
  state
}
