<template lang="pug">
  <div class="es-nosotros es-page">
    .es-inner
      .es-banner-main
        header.es-banner-main__header
          h1.es-banner-main__title.es-title Nosotros
        picture.es-banner-main__wrapper-img
          source(class="es-banner-main__img" srcset="../assets/img/banner-nosotros-desk-min.jpg" media="(min-width: 768px)")
          img(class="es-banner-main__img" src="../assets/img/banner-nosotros-mobile-min.jpg" alt="Personas viajando felices")
    .es-inner
      section.es-about__content
        article.es-grid-aside#conocenos
          .es-grid-aside__item-lateral
            h2.es-subtitle Conócenos
          .es-grid-aside__item-content
            .es-grid-aside__item-separate
              h3.es-subsubtitle Misión
              p.es-txt Somos una compañía Colombiana de transporte terrestre intermunicipal con radio de acción nacional, con firme propósito de facilitar la movilización de nuestros clientes y usuarios, brindando el mejor servicio con seguridad, comodidad y puntualidad, con personal altamente calificado y actualización permanente del parque automotor; en busca de la excelencia del servicio y orientados al mejoramiento de la calidad de vida de nuestros usuarios.
            .es-grid-aside__item-separate
              h3.es-subsubtitle Visión
              p.es-txt Para el año 2021 seremos la compañía de transporte de pasajeros de la región con mayor reconocimiento y crecimiento, llegando a nuevas regiones de nuestro país, siendo la mejor opción en seguridad, comodidad y puntualidad. Seremos líderes en la integración Intermodal de pasajeros, satisfaciendo las necesidades de nuestros clientes mediante la implementación de estándares de calidad con tecnología que permita generar procesos eficientes y así mejorar cada vez más la calidad de vida de nuestros usuarios.
            .es-grid-aside__item-separate
              h3.es-subsubtitle Valores corporativos
              ul.es-list-general
                li.es-list-general__item Respeto
                li.es-list-general__item Honestidad
                li.es-list-general__item Lealtad
            .es-grid-aside__item-separate
              h3.es-subsubtitle Principios Corporativos
              ul.es-list-general
                li.es-list-general__item Compromiso
                li.es-list-general__item Buen trato
                li.es-list-general__item Unión
            .es-grid-aside__item-separate
              h3.es-subsubtitle Sistema de Gestión de Seguridad y Salud en el Trabajo
              p.es-txt Es un conjunto de Actividades dirigidas a proteger y promover la salud de los trabajadores mediante la prevención y el control de enfermedades y accidentes, y la eliminación de los factores y condiciones que ponen en peligro la salud y la seguridad en el trabajo.
        article.es-grid-aside#convenios
          .es-grid-aside__item-lateral
            h2.es-subtitle Convenios
          .es-grid-aside__item-content
            .es-grid-aside__item-separate
              img.es-about__img(src="../assets/img/logo-tst.jpg" alt="logo tst")
            .es-grid-aside__item-separate
              h3.es-subsubtitle Parque automotor
              p.es-txt Disfruta de una experiencia de viaje inolvidable en el parque automotor que ponemos a tu disposición. Viaja directo a donde quieres ir con todos los servicios que necesitas para sentirte cómodo y seguro. <br>Te ofrecemos vehículos con tecnología innovadora, que te permitirán sentirte cómodo desde el momento de tu abordaje, contamos con una plataforma tecnológica de rastreo satelital monitoreada 24/7 por personal debidamente capacitado, garantizándote así seguridad y tranquilidad durante todo tu viaje.
        ComfortList
    .es-inner#tipos-flota
      h2.es-subtitle Tipos de flota
      button.es-tab-simulated.i-arrow-bottom(v-on:click="toggleList()" :class="{ active: toggleListBoolean }")
        p.es-tab-simulated__txt {{ innerText }}
      tabs.es-vertical-tabs(:class="{ active: toggleListBoolean }")
        tab(title="Aerován")
          .es-tabs__grid
            .es-tabs__grid-item
              h3.es-subsubtitle Aerován
              figure.es-tabs__grid-figure
                img.es-tabs__img(class="es-banner-main__img" src="../assets/img/aerovan.png" alt="")
        tab(title="Microbús")
          .es-tabs__grid
            .es-tabs__grid-item
              h3.es-subsubtitle Microbús
              figure.es-tabs__grid-figure
                img.es-tabs__img(class="es-banner-main__img" src="../assets/img/microbus.png" alt="")
        tab(title="Buseta")
          .es-tabs__grid
            .es-tabs__grid-item
              h3.es-subsubtitle Buseta
              figure.es-tabs__grid-figure
                img.es-tabs__img(class="es-banner-main__img" src="../assets/img/grid-aside-bus.png" alt="")
        tab(title="Bus")
          .es-tabs__grid
            .es-tabs__grid-item
              h3.es-subsubtitle Bus
              figure.es-tabs__grid-figure
                img.es-tabs__img(class="es-banner-main__img" src="../assets/img/grid-aside-bus.png" alt="")
        tab(title="Microbús de lujo")
          .es-tabs__grid
            .es-tabs__grid-item
              h3.es-subsubtitle Microbús de lujo (próximamente)
              figure.es-tabs__grid-figure
                img.es-tabs__img(class="es-banner-main__img" src="../assets/img/grid-aside-bus.png" alt="")
        tab(title="Bus de lujo")
          .es-tabs__grid
            .es-tabs__grid-item
              h3.es-subsubtitle Bus de lujo (próximamente)
              figure.es-tabs__grid-figure
                img.es-tabs__img(class="es-banner-main__img" src="../assets/img/grid-aside-bus.png" alt="")

  </div>
</template>

<script>
import { Tabs, Tab } from 'vue-slim-tabs'
import ComfortList from '@/components/ComfortList.vue'

export default {
  name: 'Services',
  components: {
    Tabs, Tab,
    ComfortList
  },
  data () {
    return {
      text: null,
      toggleListBoolean: null,
      innerText: null,
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

<style src="vue-slim-tabs/themes/default.css"></style>