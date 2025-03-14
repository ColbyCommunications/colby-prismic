import { repositoryName, apiEndpoint } from './slicemachine.config.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    runtimeConfig: {
        public: {
            siteName: process.env.SITE_NAME,
        },
    },

    app: {
        head: {
            title: 'Prismic + Nuxt Minimal Starter',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },

    modules: ['@nuxtjs/prismic'],

    prismic: {
        endpoint: apiEndpoint || repositoryName,
        preview: '/api/preview',
        // clientConfig: {
        //     routes: [
        //         {
        //             type: 'page',
        //             path: '/:uid',
        //         },
        //         // {
        //         //     type: 'alumni_events',
        //         //     path: '/events/:uid',
        //         // },
        //         {
        //             type: 'page',
        //             uid: 'home',
        //             path: '/',
        //         },
        //     ],
        // },
    },
});
