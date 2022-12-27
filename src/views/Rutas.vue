<template lang="pug">
  <div class="es-rutas es-page">
    .es-inner
      .es-banner-main
        header.es-banner-main__header
          h1.es-banner-main__title.es-title Rutas
        picture.es-banner-main__wrapper-img
          source(srcset="../assets/img/banner-rutas-desk-min.jpg" media="(min-width: 768px)")
          img(class="es-banner-main__img" src="../assets/img/banner-rutas-mobile-min.jpg" alt="Personas viajando felices")
    .es-inner
      button.es-tab-simulated.i-arrow-bottom(v-on:click="toggleList()" :class="{ active: toggleListBoolean }")
        p.es-tab-simulated__txt {{ innerText }}

      tabs.es-vertical-tabs(:class="{ active: toggleListBoolean }")
        tab(title="Bogotá")
          h3.es-subsubtitle Bogotá
          RutasBogota

        tab(title="Cartagena")
          h3.es-subsubtitle Cartagena
          RutasCartagenaFundacion

        tab(title="Barranquilla")
          h3.es-subsubtitle Barranquilla
          RutasBarranquillaFundacion

        tab(title="Santa Marta")
          h3.es-subsubtitle Santa Marta
          RutasSantaMartaClemencia

        tab(title="Anapoima")
          h3.es-subsubtitle Anapoima
          RutasAnapoimaBogota

        tab(title="La Mesa")
          h3.es-subsubtitle La Mesa
          RutasLaMesaBogota

        tab(title="La Gran Vía")
          h3.es-subsubtitle La Gran Vía
          RutasLaGranViaBogota
        
        tab(title="Mosquera")
          h3.es-subsubtitle Mosquera
          RutasMosquera

        tab(title="Cachipay")
          h3.es-subsubtitle Cachipay
          RutasCachipayBogota

        tab(title="Anolaima")
          h3.es-subsubtitle Anolaima
          RutasAnolaimaBogota

        tab(title="Catagenita")
          h3.es-subsubtitle Catagenita
          RutasCartagenitaMosquera
  </div>
</template>

<script>

import { Tabs, Tab } from 'vue-slim-tabs'
import RutasBogota from '../components/RutasBogota'
import RutasMosquera from '../components/RutasMosquera'
import RutasCartagenitaMosquera from '../components/RutasCartagenitaMosquera'
import RutasCartagenaFundacion from '../components/RutasCartagenaFundacion'
import RutasBarranquillaFundacion from '../components/RutasBarranquillaFundacion'
import RutasSantaMartaClemencia from '../components/RutasSantaMartaClemencia'
import RutasAnapoimaBogota from '../components/RutasAnapoimaBogota'
import RutasLaMesaBogota from '../components/RutasLaMesaBogota'
import RutasLaGranViaBogota from '../components/RutasLaGranViaBogota'
import RutasCachipayBogota from '../components/RutasCachipayBogota'
import RutasAnolaimaBogota from '../components/RutasAnolaimaBogota'
import Slick from 'vue-slick';
import '../../node_modules/slick-carousel/slick/slick.css'

export default {
  name: 'Rutas',
  components: {
    Tabs,
    Tab,
    Slick,
    RutasBogota,
    RutasMosquera,
    RutasCartagenaFundacion,
    RutasCartagenitaMosquera,
    RutasBarranquillaFundacion,
    RutasSantaMartaClemencia,
    RutasAnapoimaBogota,
    RutasLaMesaBogota,
    RutasLaGranViaBogota,
    RutasCachipayBogota,
    RutasAnolaimaBogota,
  },
  data () {
    return {
      text: null,
      innerText: null,
      toggleListBoolean: null,
      selected: 0,
      totalItems: undefined,
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        fade: true,
        arrows: false,
        cssEase: 'linear',
        asNavFor: '.es-slider-nav'
      },
      slickOptionsNav: {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.es-slider-futured',
        centerMode: true,
        focusOnSelect: true
      },
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
      this.innerText
    },
    totalItems: function () {
      this.totalItems
    }
  },
  methods: {
    tabSelected() {
      this.text = document.querySelectorAll("li[aria-selected=true]")
      this.innerText = this.text[0].innerText
      if (this.toggleListBoolean) {
        this.toggleListBoolean = null
      }
    },
    toggleList() {
      this.toggleListBoolean = !this.toggleListBoolean
    },
  }
}
</script>
