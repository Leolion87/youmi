module.exports = {
    head: {
        titleTemplate: '蚌埠信息网',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '蚌埠信息网是蚌埠人的网上家园,免费分类发布信息,求职、招聘、房屋租赁、房屋买卖、生活服务等。' },
            { hid: 'keywords', name: 'keywords', content: '蚌埠信息网,蚌埠招聘，蚌埠求职，蚌埠跳蚤市场，蚌埠租房，蚌埠二手' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
        '/api': {
            target: 'http:127.0.0.1:9090',
            pathRewrite: { '^/api': '' }
        }
    },
    plugins: [
        { src: '~plugins/iview.js', ssr: true }
    ],
    css: [
        '~assets/css/reset.css'
    ],
    router: {
        base: '/wap/'  //打包时使用
    },
    routes: [
        {
            name: 'index',
            path: '/',
            component: 'pages/index.vue'
        },
        {
            name: 'login',
            path: '/login',
            component: 'pages/login.vue'
        },
        {
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
        }
    ]
}