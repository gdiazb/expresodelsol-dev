<template lang="pug">
  <div class="es-services es-page">
    .es-inner
      .es-banner-main
        header.es-banner-main__header
          h1.es-banner-main__title.es-title Sevicios
        picture.es-banner-main__wrapper-img
          source(class="es-banner-main__img" srcset="../assets/img/banner-services-desk-min.jpg" media="(min-width: 768px)")
          img(class="es-banner-main__img" src="../assets/img/banner-services-mobile-min.jpg" alt="Personas viajando felices")
    .es-inner
      section.es-services__content
        article.es-grid-aside#intermunucipal
          .es-grid-aside__item-lateral
            h2.es-subtitle Servicio intermunicipal
          .es-grid-aside__item-content
            .es-txt Te ofrecemos un servicio de transporte intermunicipal de pasajeros por carretera con operación nacional; contamos con personal eficiente y con gran calidad humana, además de una flota de vehículos en constante renovación garantizando siempre seguridad y confort. Nos enfocamos en la capacitación constante de nuestros operarios y la inspección diaria de nuestra flota, con el fin de asegurarnos que el viaje que realizas sea de tu total agrado y que por ello decidas siempre contar con nosotros.
            img(class="es-grid-aside__img" src="../assets/img/servicio-intermunicipal.png" alt="servicio especial")
            .es-grid-aside__btn-wrap
              a.es-btn.es-btn_primary.icon-redbus.es-grid-aside__btn.es-btn_redbus(href="https://www.redbus.co/viajes/pasajes-de-bus-expreso-del-sol" target="_blank") Compra aquí tus pasajes
        article.es-grid-aside#especial
          .es-grid-aside__item-lateral
            h2.es-subtitle Servicio especial
          .es-grid-aside__item-content
            .es-txt De acuerdo al convenio empresarial celebrado entre las empresas TRANSPORTES SAN ANTONIO DEL TEQUENDAMA S.A.S. y EXPRESO DEL SOL S.A.S., trabajamos articuladamente para ofrecerte el servicio de transporte terrestre especial de pasajeros con radio de acción nacional, que integra servicios como transporte escolar, empresarial, ejecutivo, hotelero y de artistas entre otros; sirviendo a nuestros clientes con el mas alto grado de eficiencia, responsabilidad, calidad y seguridad. <br>Estamos a la vanguardia en sistemas tecnológicos, 	los cuales nos permiten comprometernos con el desarrollo integral y la mejora continua a fin de satisfacer las necesidades de nuestros clientes, adaptándonos a las exigencias de su mercado y así favoreciendo sus índices de calidad y cumplimiento de labores. <br>Capacitamos de forma continua nuestro equipo humano y contamos con un parque automotor en constante renovación para prestar un servicio de excelente calidad.
            .es-txt ¿Por qué elegirnos como su prestador de servicios de transporte?
            .es-txt Contamos con:
            ul.es-list-general
              li.es-list-general__item Vehículos último modelo
              li.es-list-general__item Conductores en constante capacitación y con alto grado de calidad humana
              li.es-list-general__item Seguimiento en tiempo real del vehículo
              li.es-list-general__item Reserva vía whatsapp, web o redes sociales.
              li.es-list-general__item Garantía de Puntualidad
              li.es-list-general__item Reducción de costos de hasta un 40%
              li.es-list-general__item Reducción de tiempos
              li.es-list-general__item Optimización de trazados
              li.es-list-general__item Trazabilidad de todo el servicio
              li.es-list-general__item Plataforma tecnológica de gestión de transporte
              li.es-list-general__item Transporte privado VIP
              li.es-list-general__item Eventos Corporativos
              li.es-list-general__item Destinos nacionales
              li.es-list-general__item Transporte grupal
            .es-txt Otros Servicios:
            ul.es-list-general
              li.es-list-general__item Servicios por horas
              li.es-list-general__item Servicios por demanda
              li.es-list-general__item Viajes ocasionales
              li.es-list-general__item City Tour
              li.es-list-general__item Conductor Bilingüe
            .es-txt Debidamente programados con un día de antelación.
            img(class="es-grid-aside__img" src="../assets/img/servicio-especial.png" alt="servicio especial")
            .es-grid-aside__btn-wrap
              a.es-btn.es-btn_whatsapp.es-grid-aside__btn(href="https://wa.me/573165016613?text=Hola+Expreso+del+Sol%2C+me+gustaria+recibir+m%C3%A1s+informaci%C3%B3n+sobre+un+Servicio+Especial" target="_blank") Solicita un servicio especial
        article.es-grid-aside#empresarial
          .es-grid-aside__item-lateral
            h2.es-subtitle Servicio empresarial
          .es-grid-aside__item-content
            .es-txt Somos expertos en Rutas empresariales, ayudamos a nuestros clientes desde la planificación hasta el último detalle de la ejecución con nuestro servicio de rutas corporativas.
            img(class="es-grid-aside__img" src="../assets/img/servicio-empresarial.png" alt="servicio especial")
            .es-grid-aside__btn-wrap
              a.es-btn.es-btn_whatsapp.es-grid-aside__btn(href="https://wa.me/573165016613?text=Hola+Expreso+del+Sol%2C+me+gustar%C3%ADa+recibir+m%C3%A1s+informaci%C3%B3n+sobre+un+servicio+empresarial" target="_blank") Solicita un servicio empresarial
    .es-services__comfort
      h2.es-subtitle.es-subtitle_center Nuestras comodidades
      ComfortList
  </div>
</template>

<script>

import ComfortList from '@/components/ComfortList.vue'

export default {
  name: 'Services',
  components: {
    ComfortList
  }
}
</script>
