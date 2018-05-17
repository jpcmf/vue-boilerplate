<template>
  <div class="home-full">
    <div class="row expanded">
      <div class="large-12 columns">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2></h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-full',
  data () {
    return {
      title: 'Compacto Records',
      subtitle: 'Record Label'
    }
  }
}
</script>
