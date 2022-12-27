<template lang="pug">
  <div class="cc-404 cc-page">
    header.es-404__header.es-header
      h1.es-title.es-404__title WOOPS
        span.es-lead.es-404__lead PÁGINA NO ENCONTRADA, INTENTA OTRO LINK DE BUSQUEDA
    .es-404__content
      router-link(to="/").es-form__btn.es-btn.es-404__btn Ir al home
  </div>
</template>

<script>

export default {
  name: 'NotFound'
}
</script>
