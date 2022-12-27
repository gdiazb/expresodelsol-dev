<template lang="pug">
  nav.es-nav
    .es-inner
      ul.es-nav__list(:class="{ 'menuOpen': isOpen}")
        li.es-nav__list-brand
          router-link(:to="'/'")
            img.es-nav__brand-logo(alt="Logo expreso del sol" src="../assets/img/logo.png")

        li.es-nav__action
          button.es-nav__action-btn(type="button", v-on:click="isOpen = !isOpen")
            span.es-nav__action-icon
              small(v-if="!isOpen") Abrir Menú
              small(v-else) Cerrar Menú

        li.es-nav__list-group
          nav.es-nav__nav
            div(v-for="(item, index) in menuList").es-nav__list-link
              router-link(
                v-if="!item.submenu"
                :to="'/' + item.link"
                @click.native="(isOpen = !isOpen)"
              ).es-nav__list-link-txt {{ item.name }}
              router-link(
                v-else
                :to="'/' + item.link"
                @click.native="(isOpen = !isOpen), toggleSubmenu(index)"
              ).es-nav__list-link-txt {{ item.name }}
              button.es-nav__list-link-action.i-a-arrow-bottom(
                v-if="item.submenu"
                @click="toggleSubmenu(index)"
                :class="{ active: selected == index }"
              )
              transition(name="slide-fade")
                ul.es-nav__sublist(v-if="selected == index", v-show="selected == index")
                  li.es-nav__sublist-item(v-for="subItem in item.submenu")
                    router-link(:to="'/' + item.link + '#' + subItem.link" v-scroll-to="'#' + subItem.link" @click.native="(isOpen = !isOpen), toggleSubmenu(index)").es-nav__list-link-txt {{ subItem.name }}

          nav.es-nav__social
            ul.es-nav__social-list
              li.es-nav__social-item
                a.es-nav__social-link.i-facebook(href="https://www.facebook.com/Expreso-del-Sol-SAS-Ilumina-Tu-Camino-1003069126398572" target="_blank")
                  span Facebook
              li.es-nav__social-item
                a.es-nav__social-link.i-instagram(href="https://www.instagram.com/expresodelsol/" target="_blank")
                  span Instagram
              li.es-nav__social-item
                a.es-nav__social-link.i-twitter(href="https://twitter.com/ExpresoSas?s=09" target="_blank")
                  span Twitter
</template>

<script>

export default {
  name: 'Navigation',
  data () {
    return {
      isActiveSubMenu: false,
      isOpen: false,
      active: undefined,
      selected: undefined,
      menuList: [
        {
          "name": "Inicio",
          "link": ""
        },
        {
          "name": "Rutas",
          "link": "rutas"
        },
        {
          "name": "Nosotros",
          "link": "nosotros",
          "submenu": [
            {
              "name": "Conócenos",
              "link": "conocenos",
            },
            {
              "name": "Convenios",
              "link": "convenios",
            },
            {
              "name": "Tipos de flota",
              "link": "tipos-flota",
            }
          ]
        },
        {
          "name": "Servicios",
          "link": "servicios",
          "submenu": [
            {
              "name": "Especial",
              "link": "especial",
            },
            {
              "name": "Intermunucipal",
              "link": "intermunucipal",
            },
            {
              "name": "Empresarial",
              "link": "empresarial",
            }
          ]
        },
        {
          "name": "Agencias",
          "link": "agencias"
        },
        {
          "name": "Contáctenos",
          "link": "contacto"
        }
      ]
    }
  },
  methods: {
    toggleSubmenu: function (f) {
      if(this.selected == f) {
        this.selected = undefined
      }
      else {
        this.selected = f
      }
    },
  }
}
</script>
