import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _395c34c4 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _58ebca71 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */))
const _12fd48e0 = () => interopDefault(import('..\\pages\\detail.vue' /* webpackChunkName: "pages_detail" */))
const _32ec8bf3 = () => interopDefault(import('..\\pages\\findPassword.vue' /* webpackChunkName: "pages_findPassword" */))
const _624f231d = () => interopDefault(import('..\\pages\\list.vue' /* webpackChunkName: "pages_list" */))
const _669d390c = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _15384b22 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _0309c063 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/wap/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _395c34c4,
      name: "about"
    }, {
      path: "/contact",
      component: _58ebca71,
      name: "contact"
    }, {
      path: "/detail",
      component: _12fd48e0,
      name: "detail"
    }, {
      path: "/findPassword",
      component: _32ec8bf3,
      name: "findPassword"
    }, {
      path: "/list",
      component: _624f231d,
      name: "list"
    }, {
      path: "/login",
      component: _669d390c,
      name: "login"
    }, {
      path: "/register",
      component: _15384b22,
      name: "register"
    }, {
      path: "/",
      component: _0309c063,
      name: "index"
    }],

    fallback: false
  })
}
