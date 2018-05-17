<template>
  <footer class="main-footer">
    <div class="row">

      <!-- <div class="small-12 columns">
        <nav class="footer-menu">
          <ul>
            <li v-if="links!=null" v-for="link of links">
              <a v-bind:href="link.anchor.address">{{ link.anchor.name }}</a>
            </li>
          </ul>
        </nav>
      </div> -->

      <div class="small-12 medium-4 large-4 columns">
        <img v-bind:src="url" alt="Logo" class="logo">
        <h4>{{ title[0] }}</h4>
        <nav class="footer-menu">
          <ul>
            <li v-if="links!=null" v-for="link of links">
              <a v-bind:href="link.anchor.address">{{ link.anchor.name  }}</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="small-12 medium-4 large-4 columns">
        <h4>{{ title[1] }}</h4>
         <nav class="contact-menu">
          <ul>
            <li v-if="contatos!=null" v-for="contato of contatos">
              <a v-bind:href="contato.anchor.address">{{ contato.anchor.name  }}</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="small-12 medium-4 large-4 columns">
        <h4>{{ title[2] }}</h4>
        <div class="footer-extras">
          <nav class="extra-links">
            <ul>
              <li v-if="extras!=null" v-for="extra of extras">
                <a v-bind:href="extra.anchor.address">{{ extra.anchor.name }}</a>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'main-footer',
  data () {
    return {
      url: require('assets/img/logo-compacto.png'),

      title: ['menu', 'contato', 'social'],
      links: [
        { anchor: { address: '#', name: 'home' } },
        { anchor: { address: '#', name: 'sobre' } },
        { anchor: { address: '#', name: 'releases' } },
        { anchor: { address: '#', name: 'artistas' } },
        { anchor: { address: '#', name: 'podcasts' } },
        { anchor: { address: '#', name: 'contato' } }
      ],
      contatos: [
        { anchor: { address: 'tel:xxxx-xxxx', name: '(XX) XXXX-XXXX' } },
        { anchor: { address: 'mailto:xxx@xxx.com', name: 'xxx@xxx.com' } }
      ],
      extras: [
        { anchor: { address: 'tel:xxxx-xxxx', name: '(XX) xxxx-xxxx' } },
        { anchor: { address: 'mailo:xxx@xxx.com', name: 'xxx@xxx.com' } }
      ]
    }
  }

}
</script>
