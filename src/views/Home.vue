<template lang="pug">
  <div class="es-home es-page">
    <div class="widget" data-widgetid="EXPRESODELSOL" style="position: relative; width: 80%; margin:auto; "></div>
    .es-inner
      //- Banner slider
      BannerSlider
    .es-inner
      //- Featured slider
      FeaturedSlider
      //- Grid duo mapa
    .es-inner
      .es-grid-duo
        .es-grid-duo__item.es-grid-duo__item_content
          h2.es-subtitle Consulta nuestros destinos y horarios aquí
          p.es-txt Te contamos cuales son todos nuestros destinos, horarios y servicios; nos ajustamos a tus necesidades de viaje y te llevamos seguro a tu destino.
          .es-grid-duo__btn-wrap
            nav.es-nav-actions
              router-link.es-btn.es-btn_secondary(to="/rutas") Conoce todas nuestras rutas
              a.es-btn.es-btn_primary.es-btn_redbus(href="https://www.redbus.co/viajes/pasajes-de-bus-expreso-del-sol" target="_blank") Compra aquí tus pasajes
        .es-grid-duo__item.es-grid-duo__item_img
          router-link(to="/rutas")
            img.es-slider-futured__img(src="../assets/img/mapa-home-min.jpg")
    .es-inner
      .es-grid-duo.es-grid-duo_right
        .es-grid-duo__item.es-grid-duo__item_img
          img.es-slider-futured__img(src="../assets/img/nosotros-home-min.jpg")
        .es-grid-duo__item.es-grid-duo__item_content
          h2.es-subtitle Sobre nosotros
          p.es-txt Somos una empresa de transporte intermunicipal de pasajeros por carretera con un radio de acción nacional, que cuenta con personal eficiente y con gran calidad humana, además de una flota de vehículos en constante renovación para garantizar tu seguridad y confort; nos enfocamos en la capacitación constante de nuestros operarios y la inspección diaria de nuestra flota, con el fin de asegurarnos que el viaje que realizas sea de tu total agrado y que por ello decidas siempre contar con nosotros.
          .es-grid-duo__btn-wrap
            router-link.es-btn.es-btn_primary(to="/nosotros") Conoce más sobre nosotros
    .es-inner
      section.es-section.es-allied
        header.es-subheader
          h2.es-subtitle Somos tu mejor aliado
        ComfortListHome
    .es-inner
      section.es-section
        h2.es-subtitle Contáctanos
        p.es-txt El área de atención al usuario de Expreso del Sol S.A.S. esta encargada de definir modelos específicos para atender, manejar y dar soluciones contundentes a las inquietudes, quejas y sugerencias que puedan generarse durante tu experiencia como usuario o antes de ella.
        nav.es-nav-actions
          router-link.es-btn.es-btn_secondary(to="/contacto") Ir a página de contácto
          a.es-btn.es-btn_primary.es-btn_redbus(href="https://www.redbus.co/viajes/pasajes-de-bus-expreso-del-sol" target="_blank") Compra aquí tus pasajes



  </div>
</template>

<script>
// @ is an alias to /src
import BannerSlider from "@/components/BannerSlider.vue";
import FeaturedSlider from "@/components/FeaturedSlider.vue";
import ComfortListHome from "@/components/ComfortListHome.vue";

export default {
  name: "Home",
  components: {
    BannerSlider,
    FeaturedSlider,
    ComfortListHome,
  },
};
</script>

<style>
#pinbus-search-form {
  padding: 30px;
  box-shadow: 0 2px 12px -2px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 8px;
  width: 100%;
  border: 10px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  background-clip: padding-box;
  left: 0;
}
#pb_sf_search_module {
  padding: 0;
  background: none;
}
#pb_sf_search_module h2 {
  display: none;
}
#pb_sf_search_module input[type="date"],
#pb_sf_search_module input[type="text"],
#pb_sf_search_module select {
  background: #f2f4fd;
  border: 2px solid #f2f4fd;
  border-radius: 6px;
  padding: 0.5rem 1.2rem;
  outline: none;
}
#pb_sf_search_module input[type="date"]:active,
#pb_sf_search_module input[type="date"]:visited,
#pb_sf_search_module input[type="date"]:hover,
#pb_sf_search_module input[type="text"]:active,
#pb_sf_search_module input[type="text"]:visited,
#pb_sf_search_module input[type="text"]:hover {
  outline: 0 !important;
  border-color: #99ccfa;
}
#pb_sf_search_module label.control-label {
  display: block;
  margin-bottom: 5px;
  color: #16397f;
  font-weight: 400;
  font-size: 13px;
}
#pb_sf_search_module button,
#pb_sf_search_module button[disabled] {
  font-weight: bold;
  border: 0;
  border-radius: 5px;
  background-color: #ffbe00;
  color: rgb(255, 255, 255);
  font-size: 15px;
  padding: 0;
  line-height: 43px;
  text-transform: capitalize;
}
</style>
