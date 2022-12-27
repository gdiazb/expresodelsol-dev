<template lang="pug">
  .es-banner-slider
    header.es-banner-slider__header
      .es-banner-slider__title
        h1.es-title Expreso del Sol
      .es-banner-slider__slogan
        p.es-title ¡Ilumina tu camino!
    <slick ref="slick" :options="slickOptions" class="es-slider">
      <picture>
        <source class="es-slider__img" srcset="../assets/img/slide-1-desk-min.jpg" media="(min-width: 768px)">
        <img class="es-slider__img" src="../assets/img/slide-1-mobile-min.jpg" alt="Personas viajando felices">
      </picture>
      <picture>
        <source srcset="../assets/img/slide-2-desk-min.jpg" media="(min-width: 768px)">
        <img class="es-slider__img" src="../assets/img/slide-2-mobile-min.jpg" alt="Personas viajando felices">
      </picture>
      <picture>
        <source srcset="../assets/img/slide-3-desk-min.jpg" media="(min-width: 768px)">
        <img class="es-slider__img" src="../assets/img/slide-3-mobile-min.jpg" alt="Personas viajando felices">
      </picture>
    </slick>
</template>

<script>

import '../../node_modules/slick-carousel/slick/slick.css'
import Slick from 'vue-slick';

export default {
  name: 'Bannerslider',
  components: {
    Slick
  },
  data () {
    return {
      slickOptions: {
        slidesToShow: 1,
        dots: true,
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
