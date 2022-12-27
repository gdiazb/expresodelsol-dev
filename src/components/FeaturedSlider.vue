<template lang="pug">
  .es-banner-slider
    h2.es-subtitle Destinos destacados
    slick(ref="slick" :options="slickOptions" class="es-slider-futured")
      figure.es-slider-futured__card(v-for="card in futuredList")
        img.es-slider-futured__img(:src="'../assets/img/' + card.src" :alt="card.title + card.subtitle")
        figcaption.es-slider-futured__caption
          p.es-slider-futured__title {{ card.title }}
          p.es-slider-futured__subtitle {{ card.subtitle }}
</template>

<script>

import '../../node_modules/slick-carousel/slick/slick.css'
import Slick from 'vue-slick';

export default {
  name: 'FeaturedSlider',
  components: {
    Slick
  },
  data () {
    return {
      futuredList: [
        {
          "title": "Bogotá",
          "subtitle": "Cundinamarca",
          "src": "bogota-min.jpg"
        },
        {
          "title": "Anapoima",
          "subtitle": "Cundinamarca",
          "src": "anapoima-min.jpg"
        },
        {
          "title": "La Mesa",
          "subtitle": "Cundinamarca",
          "src": "la-mesa-min.jpg"
        },
        {
          "title": "La Gran Vía",
          "subtitle": "Cundinamarca",
          "src": "la-gran-via-min.jpg"
        },
        {
          "title": "Mosquera",
          "subtitle": "Cundinamarca",
          "src": "mosquera-min.jpg"
        },
        {
          "title": "Cachipay",
          "subtitle": "Cundinamarca",
          "src": "cachipay-min.jpg"
        },
        {
          "title": "Anolaima",
          "subtitle": "Cundinamarca",
          "src": "anolaima-min.jpg"
        },
        {
          "title": "Zipacón",
          "subtitle": "Cundinamarca",
          "src": "zipacon-min.jpg"
        },
        {
          "title": "Cartagenita",
          "subtitle": "Cundinamarca",
          "src": "cartagenita-min.jpg"
        },
        {
          "title": "Funza",
          "subtitle": "Cundinamarca",
          "src": "funza-min.jpg"
        },
        {
          "title": "Cartagena",
          "subtitle": "Costa Caribe",
          "src": "cartagena-min.jpg"
        },
        {
          "title": "Santa Marta",
          "subtitle": "Costa Caribe",
          "src": "santa-marta-min.jpg"
        },
        {
          "title": "Barranquilla",
          "subtitle": "Costa Caribe",
          "src": "barranquilla-min.jpg"
        },
        {
          "title": "Fundación",
          "subtitle": "Costa Caribe",
          "src": "fundacion-magdalena-min.jpg"
        }
      ],
      slickOptions: {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
        ]
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
