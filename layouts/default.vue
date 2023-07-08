<script setup lang="ts">

import random from 'lodash/random';

const currentYear = new Date().getFullYear()
const backgroundImageStyle = {
  backgroundImage: `url('/img/bg-img-${random(1, 2, false)}.webp')`,
}
</script>

<template>
  <div class="bg-abstract-image min-h-screen antialiased text-slate-500 dark:text-slate-400"
       :style="backgroundImageStyle" >
    <div class="backdrop-blur-md sm:py-1 sm:px-[3rem] lg:py-3 lg:px-[6rem] xl:py-5 xl:px-[13rem] 2xl:py-7 2xl:px-[18rem]">
      <div class="sm:rounded-3xl hadow-lg text-white bg-black  bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <div class="flex flex-col justify-between items-center px-5 sm:px-12">
          <header class="w-full w-full py-4">
            <nav class="">
              <div class="flex justify-between items-center">
                <div class="flex justify-between items-center text-lg">
                  <a href="#">
                    <svg class="h-8 w-8 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />  <polyline points="7.5 19.79 7.5 14.6 3 12" />  <polyline points="21 12 16.5 14.6 16.5 19.79" />  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />  <line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                  </a>
                </div>
                <div class="flex font-m items-center hidden md:flex space-x-12 items-center">
                  <NuxtLink href="/home">Inicio</NuxtLink>
                  <NuxtLink href="/blog">Blog</NuxtLink>
                </div>
                <div class="md:flex space-x-8 items-center">
                  <a href="https://www.linkedin.com/in/felipe-sanchez-calzada/" target="_blank"><Icon name="bxl:linkedin" size="2rem"></Icon></a>
                  <a href="https://github.com/FelipeSanchezCalzada" target="_blank"><Icon name="bxl:github" size="2rem"></Icon></a>
                  <a href="https://www.twitch.tv/felipesanchezweb" target="_blank" ><Icon name="bxl:twitch" size="2rem"></Icon></a>

                  <!--                    <a href="#">Log in</a>-->
<!--                    <a href="#"><button class="bg-transparent font-m bg-white text-gray-800  py-1 px-3  rounded-lg">Sign Up-->
<!--                    </button></a>-->
                </div>
              </div>
            </nav>

          </header>

          <slot></slot>

          <footer>
            <div class="p-4 mt-6 mb-4">
              <h5 class="text-xs  sm:text-lg text-center">
                Gracias por visitar mi sitio web <Icon name="ic:twotone-favorite" size="1.5rem"></Icon>
                <br class="sm:hidden">
                ¡Nos vemos pronto!
              </h5>
              <h5 class="text-xs sm:text-lg text-center mt-2">
                © {{currentYear}} Felipe Sánchez Calzada. All rights reserved.
              </h5>
            </div>
          </footer>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.bg-abstract-image{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;}
</style>