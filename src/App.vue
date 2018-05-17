<template>
  <div id="app">
    <!-- <foundation-example></foundation-example> -->
    <!-- <foundation-topbar></foundation-topbar> -->
    <main-header></main-header>
    <div class="container">
      <foundation-accordion></foundation-accordion>
      <foundation-dropdown-menu></foundation-dropdown-menu>
      <home-full></home-full>
      <landing-content></landing-content>
      <work></work>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import MainHeader from './components/root/main-header.vue'
import MainFooter from './components/root/main-footer.vue'
import HomeFull from './components/home-full.vue'
import LandingContent from './components/landing-content.vue'
import Work from './components/work.vue'

// foundation can be imported directly at the component level
import 'foundation-sites'

// console.log(Foundation)

export default {
  name: 'app',
  components: { MainHeader, MainFooter, HomeFull, LandingContent, Work }
}
</script>

<!-- <style src="./assets/scss/app.scss" lang="sass"></style> -->
<style lang="sass">
  @import "~styles/theme.scss"
  @import "~styles/style"
</style>
