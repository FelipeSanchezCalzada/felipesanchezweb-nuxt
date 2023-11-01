<script setup lang="ts">

export type TimelineItemProps =  {
  title: string
  fromTo: string
  content: string
  technologies?: string[]
  tags?: string[]
  externalLinks?: {
    text: string,
    url: string
  }[]
};

const props = defineProps<{
  items: TimelineItemProps[]
}>()

</script>

<template>
  <div>
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <li class="mb-10 ml-6" v-for="timelineItem in props.items">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400"> {{timelineItem.fromTo}} </time>

        <h3 class="text-lg mt-3 mb-4 font-semibold text-gray-900 dark:text-white"> {{timelineItem.title}} </h3>

        <div class="timeline-item-content mb-1 leading-1 text-base font-normal text-gray-500 dark:text-gray-200" v-html="timelineItem.content"></div>

        <div class="mt-3">
          <template v-for="technology in timelineItem.technologies">
            <div class="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-100 ml-3 my-1">
              {{technology}}
            </div>
          </template>
        </div>
        <div class="mt-5">
          <template v-for="link in timelineItem.externalLinks">
            <a target=”_blank” :href="link.url" style="text-decoration: none" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              {{link.text}}
            </a>
          </template>
        </div>
      </li>
    </ol>
  </div>

</template>

<style scoped>

:deep(.timeline-item-content p){
  padding-bottom: 0.5rem;
}

</style>