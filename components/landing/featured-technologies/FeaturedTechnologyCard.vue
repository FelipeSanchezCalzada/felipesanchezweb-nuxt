<script setup lang="ts">
  const props = defineProps<{
    iconName: string
    title: string
    button: {
      text: string
      url: string
    }
  }>()
</script>

<template>
  <div class="relative group w-72 sm:w-96 h-96 overflow-hidden mt-8">
    <div class="flex justify-center">
      <Icon class="transition-all duration-300 group-hover:brightness-[0.2]" :name="iconName" size="19rem"></Icon>
    </div>
    <div class="transition-all absolute w-full h-full shadow-2xl opacity-90 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
    <div class="absolute transition-all duration-300	 group-hover:bg-gradient-to-t from-black  w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
      <div class="absolute w-full flex place-content-center">
        <p class="capitalize font-bold text-4xl text-center shadow-2xl text-white mt-10">{{props.title}}</p>
      </div>
      <div class="absolute w-full flex place-content-center mt-20">
          <p class="font-sans text-center w-4/5 text-white mt-5">
            <slot name="description"></slot>
          </p>
      </div>
      <a :href="props.button.url" target="_blank">
        <button class="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">{{props.button.text}}</button>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>