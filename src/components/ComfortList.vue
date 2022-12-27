<template lang="pug">
  ul.es-comfort-list
    li.es-comfort-list-item(v-for="comfortItem in comfortList" :class="'i-' + comfortItem.icon")
      p.es-comfort-list-label {{ comfortItem.name }}
 
</template>

<script>

export default {
  name: 'ComfortList',
    data () {
    return {
      comfortList: [
        {
          "name": "Bioseguridad",
          "icon": "bioseguridad"
        },
        {
          "name": "Atención al cliente",
          "icon": "atencion-cliente"
        },
        {
          "name": "Luz de lectura",
          "icon": "luz-lectura"
        },
        {
          "name": "Extintor",
          "icon": "extintor"
        },
        {
          "name": "GPS",
          "icon": "gps"
        }
      ]
    }
  },
}
</script>
