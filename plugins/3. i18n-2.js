export default {
    install: (app, options) => {
      app.provide('i18n', options)
    }
  }

/*

Usage with a component:

import { inject } from 'vue'

const i18n = inject('i18n')

console.log(i18n.greetings.hello)

*/