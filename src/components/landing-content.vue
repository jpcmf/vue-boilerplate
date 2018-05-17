<template>
  <div class="landing-content">
    <div class="row full-width">
      <div class="small-12 columns">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'landing-content',
  data () {
    return {
      title: 'compacto records',
      subtitle: 'gravadora digital brasileira'
    }
  }
}
</script>
