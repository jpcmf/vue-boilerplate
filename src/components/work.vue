<template>
  <div class="work">
    <div class="row">
      <div class="small-12 columns">
        <input type="text" v-on:input="changeTitle">
        <h1>{{ title }}</h1>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'work',
  data () {
    return {
      title: 'Work'
    }
  },
  methods: {
    changeTitle: function (event) {
      this.title = event.target.value
    }
  }
}
</script>
