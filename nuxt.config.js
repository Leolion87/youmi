module.exports = {
    head: {
        titleTemplate: '新房圈',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '新房圈-找渠道,找分销,首选新房圈-专业新房渠道对接平台' },
            { hid: 'keywords', name: 'keywords', content: '新房圈-找渠道,找分销,首选新房圈-专业新房渠道对接平台' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/assets/images/favicon.ico' }
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
            component: 'pages/search.vue'
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
            name:'info',
            path:'/info',
            component:'pages/info/index.vue',
        },
        {//编辑资料
            path: '/edit',
            name: 'edit',
            component: 'pages/edit.vue'
        },
        {//企业认证
            name: 'auth',
            path: '/auth',
            component: 'pages/auth.vue'
        },
        {//经纪公司
            name: 'company',
            path: '/company',
            component: 'pages/company.vue'
        },
        {//行业新闻
            name: 'news',
            path: '',
            component: 'pages/news/index.vue'
        },
        {//融资总包
            name: 'finance',
            path: '/finance',
            component: 'pages/finance/index.vue'
        },
        {
            //求职招聘employment
            name: 'employment',
            path: '/employment',
            component: 'pages/employment/index.vue'
        },
        {
            //消息
            name: 'msg',
            path: '/msg',
            component: 'pages/msg/index.vue'
        },
        {
            //发布
            name: 'post',
            path: '/post',
            component: 'pages/post/index.vue'
        },
        {
            //动态
            name: 'status',
            path: '/status',
            component: 'pages/status/index.vue'
        }

    ]
}