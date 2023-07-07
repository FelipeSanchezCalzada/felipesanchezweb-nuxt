<script setup lang="ts">
  const experienceYears = new Date().getFullYear() - 2020;
</script>

<template>
  <section class="my-24">
    <div class="flex flex-col sm:flex-row justify-between items-center">
      <div class="pl-2">
        <h1 class="text-7xl">Felipe Sánchez</h1>
        <h2 class="md:text-2xl">
          Desarrollador con más de {{experienceYears}} años de experiencia especializado en <span class="angular-text">Angular</span>, <span class="angular-vue">Vue & Nuxt</span>, <span class="django-text">Django REST Framework</span> y <span class="k8s-text">Kubernetes</span>
        </h2>
        <h2 class="md:text-2xl mt-2">
        </h2>
      </div>
      <div>
        <img class="md:flex" src='/img/funko.webp' alt="" decoding="async" />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>