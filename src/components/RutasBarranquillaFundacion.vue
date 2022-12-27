<template lang="pug">
  div
    slick(ref="slick" :options="slickOptions" class="es-slider-futured es-slider-futured-BarranquillaFundacion")
      figure.es-slider-futured__card(v-for="card in futuredListBarranquillaFundacion")
        img.es-slider-futured__img(:src="'../assets/img/' + card.src" :alt="card.title + card.subtitle")
    slick.es-rutas(ref="slick" :options="slickOptionsNav" class="es-slider-nav es-slider-nav-BarranquillaFundacion")              
      .es-list__item(v-for="cardNav in futuredListBarranquillaFundacion")
        p.es-txt.es-txt_center.es-rutas__slider-nav-item {{ cardNav.title }}
</template>

<script>

import '../../node_modules/slick-carousel/slick/slick.css'
import Slick from 'vue-slick';

export default {
  name: 'RutasBarranquillaFundacion',
  components: {
    Slick
  },
  data () {
    return {
      futuredListBarranquillaFundacion: [
        {
          "title": "Barranquilla",
          "src": "barranquilla-min.jpg"
        },
        {
          "title": "Cartagena",
          "src": "cartagena-min.jpg"
        },
        {
          "title": "Santa Marta",
          "src": "santa-marta-min.jpg"
        },
        {
          "title": "Clemencia",
          "src": "clemencia-min.jpg"
        },
        {
          "title": "Fundación",
          "src": "fundacion-min.jpg"
        },
      ],
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        fade: true,
        arrows: false,
        cssEase: 'linear',
        asNavFor: '.es-slider-nav-BarranquillaFundacion'
      },
      slickOptionsNav: {
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.es-slider-futured-BarranquillaFundacion',
        centerMode: true,
        focusOnSelect: true
      },
    }
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
        // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
          this.$refs.slick.reSlick();
      });
    },
  }
}
</script>
