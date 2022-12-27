<template lang="pug">
  <div class="es-agencias es-page">
    .es-inner
      .es-banner-main
        header.es-banner-main__header
          h1.es-banner-main__title.es-title Agencias
        picture
          source(srcset="../assets/img/banner-agencias-desk-min.jpg" media="(min-width: 768px)")
          img(class="es-banner-main__img" src="../assets/img/banner-agencias-mobile-min.jpg" alt="Personas viajando felices")
    .es-inner
      h2.es-subtitle Nuestras agencias
      button.es-tab-simulated.i-arrow-bottom(v-on:click="toggleList()" :class="{ active: toggleListBoolean }")
        p.es-tab-simulated__txt {{ innerText }}
      tabs.es-vertical-tabs(:class="{ active: toggleListBoolean }")
        tab(title="Bogotá")
          h3.es-subsubtitle Bogotá
          .es-agencias__grid
            .es-agencias__item
              p.es-txt Terminal de transportes Salitre 
              p.es-txt Modulo: Azul (2)
              p.es-txt Taquilla: 148
              p.es-txt Contacto: 416 8957
              p.es-txt Horario de atención: 
              p.es-txt Lun – Dom
              p.es-txt 5:00 am – 07:00 pm
          //- nav.es-vertical-tabs__nav
          //-   a.es-btn.es-btn_secondary.i-telefono(href="tel:+573100101234") +57 310 010 1234
          //-   a.es-btn.es-btn_primary(href="https://goo.gl/maps/E7ey2XXtG2dYzdAW8" target="_blank") Ver en Google Maps
        tab(title="Anapoima")
          h3.es-subsubtitle Anapoima
          .es-agencias__grid
            .es-agencias__item
              p.es-txt Cr 5 – Cll 4 Esquina 
              p.es-txt Contacto: <a class="es-contact__link" target="_blank" href="tel:+573165016613">3165016613</a>
              p.es-txt Horario de atención: 
              p.es-txt Lun – Dom 
              p.es-txt 5:00 am – 07:00 pm
              p.es-txt Punto de referencia
              p.es-txt *Puente Peatonal*
        tab(title="La Mesa")
          h3.es-subsubtitle La Mesa
          .es-agencias__grid
            .es-agencias__item
              p.es-txt Cll 3 Cra 20 – 48 
              p.es-txt Contacto: <a class="es-contact__link" target="_blank" href="tel:+573165016613">3165016613</a>
              p.es-txt Horario de atención: 
              p.es-txt Lun – Dom 
              p.es-txt 5:00 am – 07:00 pm
              p.es-txt Punto de referencia
              p.es-txt *Piscina Municipal*
        tab(title="La Gran Vía")
          h3.es-subsubtitle La Gran Vía
          .es-agencias__grid
            .es-agencias__item
              p.es-txt Transv. 4 Esquina
              p.es-txt Contacto: <a class="es-contact__link" target="_blank" href="tel:+573165016613">3165016613</a>
              p.es-txt Horario de atención: 
              p.es-txt Lun – Dom 
              p.es-txt 5:00 am – 07:00 pm
              p.es-txt Punto de referencia
              p.es-txt *Cruce San Antonio*
        tab(title="Mosquera")
          h3.es-subsubtitle Mosquera
          .es-agencias__grid
            .es-agencias__item
              p.es-txt Glorieta Toreros (Esquina)
              p.es-txt Contacto: <a class="es-contact__link" target="_blank" href="tel:+573165016613">3165016613</a>
              p.es-txt Horario de atención: 
              p.es-txt Lun – Dom 
              p.es-txt 6:00 am – 07:00 pm
              p.es-txt Punto de referencia
              p.es-txt *Glorieta La Mesa*
        tab(title="Cachipay")
          h3.es-subsubtitle Cachipay
          .es-agencias__grid
            .es-agencias__item
              p.es-txt Cr 3 – Cll 3 – 13
              p.es-txt Contacto: <a class="es-contact__link" target="_blank" href="tel:+573165016613">3165016613</a>
              p.es-txt Horario de atención: 
              p.es-txt Lun – Dom 
              p.es-txt 6:00 am – 07:00 pm
        tab(title="Anolaima")
          h3.es-subsubtitle Anolaima
          .es-agencias__grid
            .es-agencias__item
              p.es-txt Terminal de Transportes de Anolaima
              p.es-txt Taquilla 2
              p.es-txt Contacto: <a class="es-contact__link" target="_blank" href="tel:+573165016613">3165016613</a>
              p.es-txt Horario de atención: 
              p.es-txt Lun – Dom 
              p.es-txt 6:00 am – 07:00 pm
        tab(title="Cartagena")
          h3.es-subsubtitle Cartagena (Proximamente)
          .es-agencias__grid
            .es-agencias__item
              p.es-txt Terminal de Transportes
              p.es-txt Modulo: 
              p.es-txt Taquilla:
              p.es-txt Contacto: <a class="es-contact__link" target="_blank" href="tel:+573165016613">3165016613</a>
              p.es-txt Horario de atención: 
              p.es-txt Lun – Dom 
              p.es-txt 6:00 am – 07:00 pm
              p.es-txt Punto de referencia
              p.es-txt *Cr 95 – Cll 54 – 153*
        tab(title="Santa Marta")
          h3.es-subsubtitle Santa Marta (Proximamente)
          .es-agencias__grid
            .es-agencias__item
              p.es-txt Terminal de Transportes
              p.es-txt Modulo: 
              p.es-txt Taquilla:
              p.es-txt Contacto: <a class="es-contact__link" target="_blank" href="tel:+573165016613">3165016613</a>
              p.es-txt Horario de atención: 
              p.es-txt Lun – Dom 
              p.es-txt 6:00 am – 07:00 pm
              p.es-txt Punto de referencia
              p.es-txt *Cll 41 – Cr 31 - 17*
        tab(title="Barranquilla")
          h3.es-subsubtitle Barranquilla (Proximamente)
          .es-agencias__grid
            .es-agencias__item
              p.es-txt Terminal de Transportes
              p.es-txt Modulo: 
              p.es-txt Taquilla:
              p.es-txt Contacto: <a class="es-contact__link" target="_blank" href="tel:+573165016613">3165016613</a>
              p.es-txt Horario de atención: 
              p.es-txt Lun – Dom 
              p.es-txt 6:00 am – 07:00 pm
              p.es-txt Punto de referencia
              p.es-txt *Cr 14 Esquina Cll 62*
  </div>
</template>

<script>

import { Tabs, Tab } from 'vue-slim-tabs'

export default {
  name: 'Agencias',
  components: {
    Tabs,
    Tab
  },
  data () {
    return {
      text: null,
      innerText: null,
      toggleListBoolean: null
    }
  },
  mounted: function () {
    this.tabSelected()
    let texto = document.querySelectorAll(".vue-tab")
    for (var i = 0; i < texto.length; i++) {
      texto[i].addEventListener("click", this.tabSelected);
    }
  },
  watch: {
    innerText: function () {
      console.log(this.innerText);
      this.innerText
    }
  },
  methods: {
    tabSelected() {
      console.log("prueba")
      this.text = document.querySelectorAll("li[aria-selected=true]")
      this.innerText = this.text[0].innerText
      if (this.toggleListBoolean) {
        this.toggleListBoolean = null
      }
    },
    toggleList() {
      this.toggleListBoolean = !this.toggleListBoolean
    }
  }
}
</script>
