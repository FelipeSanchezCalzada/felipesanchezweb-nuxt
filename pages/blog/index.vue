<script setup lang="ts">

import {ParsedContent} from '@nuxt/content/dist/runtime/types';
import {Ref} from 'vue';

useHead({
  title: 'Felipe Sánchez | Blog',
  meta: [
    { name: 'description', content: `Este es mi rinconcito. En el te cuento lo que sé, hago pequeñas guias y pienso en voz alta sobre algunos temas`}
  ],
})


const allTags = Array.from(new Set(
    (await queryContent('blog/posts').find()).map(post => post.tags).flat()
))

const parseDateToLocaleString = (date) => {
  return new Date(date).toLocaleDateString();
}

const selectedTagsToFilter: Ref<string[]> = ref([])
watch(selectedTagsToFilter, () => {
  fetchFilteredContent()
})
const toggleTag = (tag: string) => {
  if (selectedTagsToFilter.value.includes(tag)) {
    selectedTagsToFilter.value = selectedTagsToFilter.value.filter((item) => item !== tag)
  } else {
    selectedTagsToFilter.value = [...selectedTagsToFilter.value, tag]
  }
}


const contentQuery = computed(() => {

  return {
    where: {
      published: true,
      tags: selectedTagsToFilter.value.length > 0 ? {$in: selectedTagsToFilter.value} : undefined
    },
    sort: {
      date: -1
    }
  }
})
const filteredContent : Ref<ParsedContent[]> = ref([])
const fetchFilteredContent = () => {
  queryContent(contentQuery.value, 'blog/posts').find().then((content) => {
    filteredContent.value = content
  })
}
fetchFilteredContent()

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

    <div class="flex justify-center my-3">
      <div class="flex">
        <button
            @click="selectedTagsToFilter = []"
            :class="[
                selectedTagsToFilter.length === 0 ? 'bg-blue-950' : 'bg-transparent '
            ]"
            class="hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Todos los posts
        </button>
        <div v-for="tag in allTags" :key="tag">
          <button
              @click="toggleTag(tag)"
              :class="[
                selectedTagsToFilter.includes(tag) ? 'bg-blue-950' : 'bg-transparent '
              ]"
              class="hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2">
            {{tag}}
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap justify-around mt-10">
      <a :href="article._path" v-for="article in filteredContent" :key="article._path">
        <div class="max-w-[24rem] px-5 py-6 hover:cursor-pointer hover:scale-105 transition-all duration-300">
          <img :src="article.featuredImagePath" alt="Featured image for Post" class="w-full h-48 object-cover object-center">
          <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-slate-800	py-2 px-3.5 align-baseline font-sans text-xs font-bold leading-none text-white mt-5">
            {{ parseDateToLocaleString(article.date)}}
          </div>
          <h2 class="text-lg font-bold mt-2">{{ article.title }}</h2>
          <p class="mt-2 text-justify ">{{ article.description }}</p>
        </div>
      </a>
    </div>
  </main>
</template>

<style scoped>

</style>