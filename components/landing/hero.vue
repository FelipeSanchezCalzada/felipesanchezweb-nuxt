<script setup lang="ts">
  const experienceYears = new Date().getFullYear() - 2020;
</script>

<template>
  <section class="my-24">
    <div class="flex flex-col sm:flex-row justify-between items-center">
      <div class="pl-2">
        <h1 class="text-7xl">Felipe Sánchez</h1>
        <h2 class="md:text-2xl mt-5">
          Desarrollador con <span class="experience"> más de {{experienceYears}} años de experiencia </span> especializado
          en <span class="text-red-300">Angular</span>, <span class="text-green-300">Vue & Nuxt</span>,
          <span class="text-green-400">Django REST Framework</span> y <span class="text-blue-300">Kubernetes</span>
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

  .experience {
    color: #58FFA5;
  }

</style>