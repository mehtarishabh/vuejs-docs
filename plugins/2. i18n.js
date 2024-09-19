export default {
    install: (app, options) => {
      // inject a globally available $translate() method
      app.config.globalProperties.$translate = (key) => {
        // retrieve a nested property in `options`
        // using `key` as the path
        return key.split('.').reduce((o, i) => {
          if (o) return o[i]
        }, options)
      }
    }
  }

/*

Usage with a component:

import i18nPlugin from './plugins/i18n'

app.use(i18nPlugin, {
  greetings: {
    hello: 'Bonjour!'
  }
})

*/