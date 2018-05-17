<template>
  <header class="main-header">
    <div class="row">
      <div class="small-3 columns">
        <img v-bind:src="url" alt="Logo" class="logo">
      </div>
      <div class="small-9 columns">
        <!-- <nav v-bind:class="active" v-on:click.prevent>

        </nav> -->
        <nav class="main-menu">
          <ul>
            <li v-if="links!=null" v-for="link of links">
              <a v-bind:href="link.anchor.address">{{ link.anchor.name }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'main-header',
  data () {
    return {
      url: require('assets/img/logo-compacto.png'),
      links: [
        { anchor: { address: '#', name: 'home' } },
        { anchor: { address: '#', name: 'sobre' } },
        { anchor: { address: '#', name: 'releases' } },
        { anchor: { address: '#', name: 'artistas' } },
        { anchor: { address: '#', name: 'podcasts' } },
        { anchor: { address: '#', name: 'contato' } }
      ]
    }
  }
}
</script>
