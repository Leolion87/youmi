module.exports = {
    head: {
        titleTemplate: '新房圈-找渠道,找分销,首选新房圈-专业新房渠道对接平台',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '新房圈-找渠道,找分销,首选新房圈-专业新房渠道对接平台' },
            { hid: 'keywords', name: 'keywords', content: '新房圈-找渠道,找分销,首选新房圈-专业新房渠道对接平台' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: './assets/images/favicon.ico' }
        ]
    },
    build: {
    },
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],
    axios: {
        proxy: true
    },
    proxy: {
        // '/api': {
        //     target: 'http:127.0.0.1:9090',
        //     pathRewrite: { '^/api': '' }
        // }
    },
    plugins: [
        { src: '~plugins/iview.js', ssr: true }
    ],
    css: [
        '~assets/css/reset.css'
    ],
    router: {
        //base: '/wap/'  //打包时使用
    },
    routes: [
        {
            name: 'index',
            path: '/',
            component: 'pages/index.vue'
        },
        {
            name: 'index-search',
            path: '/search',
            component: 'pages/home/search.vue'
        },
        {
            name: 'login',
            path: '/login',
            component: 'pages/login.vue'
        },
        {//新房楼盘
            name: 'list',
            path: '/list',
            component: 'pages/list.vue'
        },
        {
            name: 'detail',
            path: '/detai',
            component: 'pages/detail.vue'
        },
        {
            path: '/register',
            name: 'register',
            component: 'pages/register.vue'
        },
        {
            path: '/about',
            name: 'about',
            component: 'pages/about.vue'
        },
        {
            path: '/contact',
            name: 'contact',
            component: 'pages/contact.vue'
        },
        {
            path: '/findPassword',
            name: 'findPassword',
            component: 'pages/findPassword.vue'
        },
        {
            path:'/info',
            name:'info',
            component:'pages/info.vue',
        },
        {
            path: '/edit',
            name: 'edit',
            component: 'pages/edit.vue'
        }
    ]
}