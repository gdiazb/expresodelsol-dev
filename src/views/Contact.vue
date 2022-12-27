<template lang="pug">
  <div class="es-services es-page">
    .es-inner
      .es-banner-main
        header.es-banner-main__header
          h1.es-banner-main__title.es-title Contáctanos
        picture
          source(class="es-banner-main__img" srcset="../assets/img/banner-contact-desk-min.jpg" media="(min-width: 768px)")
          img(class="es-banner-main__img" src="../assets/img/banner-contact-mobile-min.jpg" alt="Personas viajando felices")
    .es-inner.es-intro#informacion-contacto
      p.es-txt.es-txt_center El área de atención al usuario de Expreso del Sol S.A.S. esta encargada de definir modelos específicos para atender, manejar y dar soluciones contundentes a las inquietudes, quejas y sugerencias que puedan generarse durante tu experiencia como usuario o antes de ella.
    .es-inner
      .es-contact
        dl.es-contact__list
          dt.es-contact__term Atención telefónica:
          dd.es-contact__def
            a.es-contact__link(href="tel:+573165016613" target="_blank") 316 5016613
          dt.es-contact__term E-mail PQR:
          dd.es-contact__def
            a.es-contact__link(href="mailto:atencionalusuario@expresodelsol.com" target="_blank") atencionalusuario@expresodelsol.com
          dt.es-contact__term E-mail:
          dd.es-contact__def
            a.es-contact__link(href="mailto:info@expresodelsol.com" target="_blank") info@expresodelsol.com
        dl.es-contact__list
          dt.es-contact__term Correo electrónico:
          dd.es-contact__def
            a.es-contact__link(href="mailto:servicioalcliente@expresodelsol.com" target="_blank") servicioalcliente@expresodelsol.com
        a.es-btn.es-btn_whatsapp(href="https://wa.me/573165016613?text=Hola+Expreso+del+Sol%2C+me+gustar%C3%ADa+recibir+informaci%C3%B3n" target="_blank") Contáctanos al instante
  </div>
</template>

<script>

import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon
} from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';

export default {
  name: 'Contact',
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon
  }
}
</script>
