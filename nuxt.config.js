import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    head: {
      title: 'my website title',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'my website description'
        }
      ],
      //from https://stackoverflow.com/questions/57685076/some-css-will-not-load-in-production-mode-in-nuxt-js
      link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'preload',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'",
        href: '/vue-select.css',
      }

    ]
    },
})
