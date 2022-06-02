import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import App from './App'
import { MyRouteType } from './types'

const examples = import.meta.glob('./examples/**/*.tsx')

const examplesPromise = Object.keys(examples)
  .map(x => examples[x])
  .map(f => f())


const routes: MyRouteType[] = []

Promise.all(examplesPromise)
  .then(list => {
    for (let module of list) {
      for (let key in module) {
        const component = module[key]
        routes.push({
          path: '/' + key.toLocaleLowerCase(),
          key,
          component
        })
      }
    }

    const router = createRouter({
      history: createWebHashHistory(),
      routes
    })
    
    createApp(App, { routes })
      .use(router)
      .mount('#app')
  })

