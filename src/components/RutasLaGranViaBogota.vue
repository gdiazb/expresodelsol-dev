<template lang="pug">
  div
    slick(ref="slick" :options="slickOptions" class="es-slider-futured es-slider-futured-LaGranViaBogota")
      figure.es-slider-futured__card(v-for="card in futuredListLaGranViaBogota")
        img.es-slider-futured__img(:src="'../assets/img/' + card.src" :alt="card.title + card.subtitle")
    slick.es-rutas(ref="slick" :options="slickOptionsNav" class="es-slider-nav es-slider-nav-LaGranViaBogota")              
      .es-list__item(v-for="cardNav in futuredListLaGranViaBogota")
        p.es-txt.es-txt_center.es-rutas__slider-nav-item {{ cardNav.title }}
</template>

<script>

import '../../node_modules/slick-carousel/slick/slick.css'
import Slick from 'vue-slick';

export default {
  name: 'RutasLaGranViaBogota',
  components: {
    Slick
  },
  data () {
    return {
      futuredListLaGranViaBogota: [
        {
          "title": "La Gran Vía",
          "src": "la-gran-via-min.jpg"
        },
        {
          "title": "Anapoima",
          "src": "anapoima-min.jpg"
        },
        {
          "title": "La Mesa",
          "src": "la-mesa-min.jpg"
        },
        {
          "title": "Mosquera",
          "src": "mosquera-min.jpg"
        },
        {
          "title": "Bogotá",
          "src": "bogota-min.jpg"
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
        asNavFor: '.es-slider-nav-LaGranViaBogota'
      },
      slickOptionsNav: {
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.es-slider-futured-LaGranViaBogota',
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
