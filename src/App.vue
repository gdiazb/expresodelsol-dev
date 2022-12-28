<template lang="pug">
  div(id="app")
    transition(name="slide-fade")
      Preload(v-if="loading")
    Navigation
    a.es-btn-fixed_whatsapp(href="https://wa.me/573165016613?text=Hola+Expreso+del+Sol%2C+me+gustar%C3%ADa+recibir+informaci%C3%B3n" target="_blank")
      span Escribenos por <br>WhatsApp
    a.es-btn-fixed_redbus(href="https://www.redbus.co/viajes/pasajes-de-bus-expreso-del-sol" target="_blank")
      span.es-btn-fixed_redbus-txt Adquiere tus tiquetes
    <router-view/>
    Footer
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Preload from '@/components/Preload'

export default {
  components: {
    Navigation,
    Footer,
    Preload
  },
  data () {
    return {
      loading: true,  
    }
  },
  created: function () {
    this.loader()
  },
  watch: {
    loading: function () {
      this.loading
    },
  },
  methods: {
    loader() {
      var self = this;
      setTimeout(function(){ self.loading = false }, 3000);
    }
  }
}
</script>

