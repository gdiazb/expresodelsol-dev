<template lang="pug">
  .es-agencias__grid
    .es-agencias__item
      ul
        li.es-txt(v-for="item in futuredListBogota") {{ item.title }}
    
</template>

<script>

import '../../node_modules/slick-carousel/slick/slick.css'
import Slick from 'vue-slick';

export default {
  name: 'RutasBogota',
  components: {
    Slick
  },
  data () {
    return {
      futuredListBogota: [
        {
          "title": "Anapoima",
        },
        {
          "title": "La Mesa",
        },
        {
          "title": "La Gran Vía",
        },
        {
          "title": "Mosquera (Glorieta Toreros)",
        },
        {
          "title": "Mosquera (Biblioteca San Juan Bosco)",
        },
        {
          "title": "Cachipay",
        },
        {
          "title": "Anolaima",
        },
        {
          "title": "Zipacón",
        },
        {
          "title": "Cartagenita",
        },
        {
          "title": "Funza (Centro)",
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
        asNavFor: '.es-slider-nav-CartagenaFundacion'
      },
      slickOptionsNav: {
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.es-slider-futured-CartagenaFundacion',
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
