<script setup lang="ts">

import FeaturedTechnologyCard from '~/components/landing/featured-technologies/FeaturedTechnologyCard.vue';
</script>

<template>
  <div class="w-full flex justify-center flex-wrap content-center">
    <FeaturedTechnologyCard icon-name="logos:nuxt-icon" title="Nuxt (Vue)" :button="{text: 'Nuxt', url: 'https://nuxt.com/'}">
      <template v-slot:description>
        ¡Este sitio web está hecho con Nuxt! <br>
        Desde que lo conocí me enamoré. Tiene todo lo que le falta a Vue para desarrollar proyectos solidos y escalables, pero manteniendo la simplicidad de Vue.
      </template>
    </FeaturedTechnologyCard>
    <FeaturedTechnologyCard icon-name="logos:angular-icon" title="Angular" :button="{text: 'Angular', url: 'https://angular.io/'}">
      <template v-slot:description>
        Fué mi favorito durante mucho tiempo, es tremendamente escalable y te obliga a seguir las mejores prácticas. Antes de conocer Nuxt, era el unico en el que confiaba para proyectos grandes.
      </template>
    </FeaturedTechnologyCard>
    <FeaturedTechnologyCard icon-name="logos:django-icon" title="Django" :button="{text: 'Django REST', url: 'https://www.django-rest-framework.org/'}">
      <template v-slot:description>
        Django REST Framework es sin duda el mejor para desarrollar cualquier API REST rápidamente.
        Solo hay que entender que si tienes un sistema enorme tendrás que definir bien donde pones la lógica de negocio, con Django es fácil perderla por todas partes.
      </template>
    </FeaturedTechnologyCard>
    <FeaturedTechnologyCard icon-name="logos:kubernetes" title="Kubernetes" :button="{text: 'Kubernetes', url: 'https://www.django-rest-framework.org/'}">
      <template v-slot:description>
        Todo lo que hago se ejecuta en contenedores Docker. Kubernetes me permite ir al siguiente nivel con mis contenedores, hacerlos escalables y tolerantes a fallos.
      </template>
    </FeaturedTechnologyCard>
  </div>

</template>

<style scoped>

</style>