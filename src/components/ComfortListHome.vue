<template lang="pug">
  ul.es-comfort-list.es-comfort-list_home
    li.es-comfort-list-item(v-for="comfortItem in comfortList" :class="'i-' + comfortItem.icon")
      p.es-comfort-list-label {{ comfortItem.name }}
 
</template>

<script>

export default {
  name: 'ComfortListHome',
    data () {
    return {
      comfortList: [
        {
          "name": "Seguridad",
          "icon": "security"
        },
        {
          "name": "Confort",
          "icon": "comfort"
        },
        {
          "name": "Calidad humana",
          "icon": "team"
        },
        {
          "name": "Puntualidad",
          "icon": "clock"
        },
        {
          "name": "Bioseguridad",
          "icon": "bioseguridad"
        }
      ]
    }
  },
}
</script>
