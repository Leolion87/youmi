import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _7dba8faf = () => interopDefault(import('..\\pages\\company.vue' /* webpackChunkName: "pages_company" */))
const _4a5691f3 = () => interopDefault(import('..\\pages\\company\\index.vue' /* webpackChunkName: "pages_company_index" */))
const _f5ba6fe2 = () => interopDefault(import('..\\pages\\detail.vue' /* webpackChunkName: "pages_detail" */))
const _d94cf3d0 = () => interopDefault(import('..\\pages\\employment\\index.vue' /* webpackChunkName: "pages_employment_index" */))
const _1eee9b14 = () => interopDefault(import('..\\pages\\finance\\index.vue' /* webpackChunkName: "pages_finance_index" */))
const _37f7459c = () => interopDefault(import('..\\pages\\findPassword.vue' /* webpackChunkName: "pages_findPassword" */))
const _71849396 = () => interopDefault(import('..\\pages\\info\\index.vue' /* webpackChunkName: "pages_info_index" */))
const _1f0fa35c = () => interopDefault(import('..\\pages\\list.vue' /* webpackChunkName: "pages_list" */))
const _4f98c122 = () => interopDefault(import('..\\pages\\msg\\index.vue' /* webpackChunkName: "pages_msg_index" */))
const _377b9451 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages_news_index" */))
const _0b81d464 = () => interopDefault(import('..\\pages\\post\\index.vue' /* webpackChunkName: "pages_post_index" */))
const _cee2dc34 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages_search" */))
const _41dd1752 = () => interopDefault(import('..\\pages\\status\\index.vue' /* webpackChunkName: "pages_status_index" */))
const _51ccb8d1 = () => interopDefault(import('..\\pages\\info\\about.vue' /* webpackChunkName: "pages_info_about" */))
const _7b8d3594 = () => interopDefault(import('..\\pages\\info\\auth.vue' /* webpackChunkName: "pages_info_auth" */))
const _13fe9ce4 = () => interopDefault(import('..\\pages\\info\\contact.vue' /* webpackChunkName: "pages_info_contact" */))
const _f4a87614 = () => interopDefault(import('..\\pages\\info\\edit.vue' /* webpackChunkName: "pages_info_edit" */))
const _3b2c36ad = () => interopDefault(import('..\\pages\\info\\login.vue' /* webpackChunkName: "pages_info_login" */))
const _870071e2 = () => interopDefault(import('..\\pages\\info\\register.vue' /* webpackChunkName: "pages_info_register" */))
const _434d6ff8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/company",
      component: _7dba8faf,
      children: [{
        path: "",
        component: _4a5691f3,
        name: "company"
      }]
    }, {
      path: "/detail",
      component: _f5ba6fe2,
      name: "detail"
    }, {
      path: "/employment",
      component: _d94cf3d0,
      name: "employment"
    }, {
      path: "/finance",
      component: _1eee9b14,
      name: "finance"
    }, {
      path: "/findPassword",
      component: _37f7459c,
      name: "findPassword"
    }, {
      path: "/info",
      component: _71849396,
      name: "info"
    }, {
      path: "/list",
      component: _1f0fa35c,
      name: "list"
    }, {
      path: "/msg",
      component: _4f98c122,
      name: "msg"
    }, {
      path: "/news",
      component: _377b9451,
      name: "news"
    }, {
      path: "/post",
      component: _0b81d464,
      name: "post"
    }, {
      path: "/search",
      component: _cee2dc34,
      name: "search"
    }, {
      path: "/status",
      component: _41dd1752,
      name: "status"
    }, {
      path: "/info/about",
      component: _51ccb8d1,
      name: "info-about"
    }, {
      path: "/info/auth",
      component: _7b8d3594,
      name: "info-auth"
    }, {
      path: "/info/contact",
      component: _13fe9ce4,
      name: "info-contact"
    }, {
      path: "/info/edit",
      component: _f4a87614,
      name: "info-edit"
    }, {
      path: "/info/login",
      component: _3b2c36ad,
      name: "info-login"
    }, {
      path: "/info/register",
      component: _870071e2,
      name: "info-register"
    }, {
      path: "/",
      component: _434d6ff8,
      name: "index"
    }],

    fallback: false
  })
}
