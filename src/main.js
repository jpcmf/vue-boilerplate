import Vue from 'vue'
import App from './App.vue'
import 'script!what-input'
import 'script!foundation-sites'

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

export const app = new Vue({
  el: '#app',
  render: h => h(App),
  // data: {
  //   message: 'Hello'
  // },
  ...App,
  mounted () {
    $(this.$el).foundation()
  }
})
