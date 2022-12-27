<template lang="pug">
  footer.es-footer
    .es-footer__grid

      .es-footer__brand
        img.es-footer__brand-logo(alt="Logo expreso" src="../assets/img/logo.png")
        .es-footer__social
          p.es-footer__social-txt Síguenos:
          ul.es-footer__social-list
            li.es-footer__social-item(v-for="item in socialMenu")
              a.es-footer__social-link(:href="item.link" :class="item.icon" target="_blank")
                span.es-footer__social-link-hidden {{ item.name }}

      .es-footer__company
        h3.es-footer__title Nuestra Compañia
        ul.es-footer__company-list
          li.es-footer__company-item(v-for="item in companyMenu")
            a.es-footer__company-link.i-arrow-right(:href="item.link" :class="item.icon") {{ item.name }}

      .es-footer__contact
        h3.es-footer__title Información de contacto
        ul.es-footer__contact-list
          li.es-footer__contact-item(v-for="item in contactMenu")
            a.es-footer__contact-link(:href="item.link" target="_blank" :class="item.icon")
              pre.es-footer__contact-link-txt {{ item.name }}

      .es-footer__legal
        ul.es-footer__legal-list
          li.es-footer__legal-item
            img.es-footer__legal-logo.es-footer__legal-logo-1(alt="Logo supertransporte" src="../assets/img/logo-supertrasnporte.png")
          li.es-footer__legal-item
            img.es-footer__legal-logo.es-footer__legal-logo-2(alt="Logo supertransporte" src="../assets/img/logo-mintransporte.png")

    .es-footer__copyright
      p.es-footer__copyright-txt © 2021 Expreso del Sol. Todos los derechos reservados

 
</template>

<script>

export default {
  name: 'Footer',
    data () {
    return {
      socialMenu: [
        {
          "name": "Facebook",
          "link": "https://www.facebook.com/Expreso-del-Sol-SAS-Ilumina-Tu-Camino-1003069126398572",
          "icon": "i-facebook"
        },
        {
          "name": "Instagram",
          "link": "https://www.instagram.com/expresodelsol",
          "icon": "i-instagram"
        },
        {
          "name": "Twitter",
          "link": "https://twitter.com/ExpresoSas?s=09",
          "icon": "i-twitter"
        },
      ],
      companyMenu: [
        {
          "name": "Inicio",
          "link": "/",
        },
        {
          "name": "Rutas",
          "link": "/rutas",
        },
        {
          "name": "Nosotros",
          "link": "/nosotros",
        },
        {
          "name": "Servicios",
          "link": "/servicios",
        },
        {
          "name": "Agencias",
          "link": "/agencias",
        },
        {
          "name": "Contáctanos",
          "link": "/contacto",
        }
      ],
      contactMenu: [
        {
          "name": "Diagonal 23 # 69 - 60\nOficina Administrativa",
          "link": "https://goo.gl/maps/E7ey2XXtG2dYzdAW8",
          "icon": "i-ubicacion"
        },
        {
          "name": "(+57) 316 5016613",
          "link": "tel:+573165016613",
          "icon": "i-telefono"
        },
        {
          "name": "Lun - Vie  08:00am - 5:00pm\nEn oficina administrativa\n24/7 por canal de WhatsApp",
          "link": undefined,
          "icon": "i-reloj"
        },
        {
          "name": "atencionalusuario@expresodelsol.com",
          "mailto": true,
          "link": "mailto:atencionalusuario@expresodelsol.com",
          "icon": "i-mail"
        },
        {
          "name": "Trabaja con nosotros",
          "mailto": true,
          "link": "mailto:info@expresodelsol.com?subject=Hoja%20de%20vida&body=Agregue%20una%20breve%20descripción%20suya,%20el%20cargo%20al%20que%20aspira%20y%20adjunte%20su%20hoja%20de%20vida,%20por%20favor.",
          "icon": "i-job"
        },
      ],
    }
  },
}
</script>
