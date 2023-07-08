<script setup lang="ts">

useHead({
  title: 'Felipe Sánchez | Blog',
  meta: [
    { name: 'description', content: `Este es mi rinconcito. En el te cuento lo que sé, hago pequeñas guias y pienso en voz alta sobre algunos temas`}
  ],
})

const parseDateToLocaleString = (date) => {
  return new Date(date).toLocaleDateString();
}

const onlyPublishedQuery = {
  where: {
    published: true,
  }
}

</script>

<template>
  <main class="w-full">
    <div class="flex justify-center">
      <div class="max-w-[40rem]">
        <h1 class="text-4xl font-bold text-center">Mi blog personal</h1>
        <p class="text-lg font-semibold text-center mt-3">
          Este es mi rinconcito. En el te cuento lo que sé, hago pequeñas guias y pienso en voz alta sobre algunos temas. ¡Disfruta!
        </p>
      </div>
    </div>

    <div class="flex flex-wrap justify-around mt-10">
      <ContentList path="/blog/posts" :query="onlyPublishedQuery" v-slot="{ list }">
        <a :href="article._path" v-for="article in list" :key="article._path">
          <div class="max-w-[24rem] px-5 py-6 hover:cursor-pointer hover:scale-105 transition-all duration-300">
            <img :src="article.featuredImagePath" alt="Featured image for Post" class="w-full h-48 object-cover object-center">
            <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-slate-700	py-2 px-3.5 align-baseline font-sans text-xs font-bold leading-none text-white mt-5">
              {{ parseDateToLocaleString(article.date)}}
            </div>
            <h2 class="text-lg font-bold mt-2">{{ article.title }}</h2>
            <p class="mt-2 text-justify ">{{ article.description }}</p>
          </div>
        </a>

      </ContentList>
    </div>
  </main>
</template>

<style scoped>

</style>