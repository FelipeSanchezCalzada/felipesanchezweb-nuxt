<script setup lang="ts">

interface TechSkill {
  title: string
  icon: string
}

interface TechSkillsSection {
  title: string
  techSkills: TechSkill[]
}

const techSkillsSections: TechSkillsSection[] = [
  {
    title: 'Backend',
    techSkills: [
      {
        title: 'Python',
        icon: 'logos:python'
      },
      {
        title: 'Django',
        icon: 'logos:django-icon'
      },
      {
        title: 'Flask',
        icon: 'logos:flask',
      },
      {
        title: 'PostgreSQL',
        icon: 'logos:postgresql',
      },
      {
        title: 'MySQL',
        icon: 'logos:mysql-icon',
      },
    ],
  },
  {
    title: 'Frontend',
    techSkills: [
      {
        title: 'HTML',
        icon: 'logos:html-5'
      },
      {
        title: 'CSS',
        icon: 'logos:css-3'
      },
      {
        title: 'JavaScript',
        icon: 'logos:javascript'
      },
      {
        title: 'TypeScript',
        icon: 'logos:typescript-icon'
      },
      {
        title: 'Nuxt',
        icon: 'logos:nuxt-icon'
      },
      {
        title: 'Vue',
        icon: 'logos:vue'
      },
      {
        title: 'Angular',
        icon: 'logos:angular-icon'
      },
      {
        title: 'Bootstrap',
        icon: 'logos:bootstrap'
      },
      {
        title: 'Tailwind',
        icon: 'logos:tailwindcss-icon'
      },
    ],
  },
  {
    title: 'Sistemas',
    techSkills: [
      {
        title: 'Docker',
        icon: 'logos:docker-icon'
      },
      {
        title: 'Kubernetes',
        icon: 'logos:kubernetes'
      },
      {
        title: 'Helm',
        icon: 'logos:helm'
      },
      {
        title: 'GitLab CI',
        icon: 'logos:gitlab'
      },
      {
        title: 'Linux Servers',
        icon: 'logos:linux-tux'
      },
      {
        title: 'AWS',
        icon: 'logos:aws'
      },
      {
        title: 'Rancher',
        icon: 'logos:rancher-icon'
      },
    ],
  },
  {
    title: 'Otros',
    techSkills: [
      {
        title: 'Git',
        icon: 'logos:git-icon'
      },
      {
        title: 'Jetbrains IDEs',
        icon: 'logos:jetbrains'
      },
      {
        title: 'Arduino',
        icon: 'logos:arduino'
      },
      {
        title: 'Wordpress',
        icon: 'logos:wordpress-icon'
      },
      {
        title: 'WooCommerce',
        icon: 'logos:woocommerce-icon'
      },
    ],
  }
]

</script>

<template>
<div>
  <section v-for="section in techSkillsSections" class="my-5">
    <h2 class="text-2xl font-bold text-center mb-3">{{section.title}}</h2>
    <div class="border-solid border border-gray-300	rounded-lg p-4">
      <div class="flex justify-around flex-wrap">
        <div v-for="skill in section.techSkills" class="text-center px-6 py-2">
          <Icon :name="skill.icon" size="3rem"></Icon>
          <h3 class="mt-1.5 text-xl">{{skill.title}}</h3>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<style scoped>

</style>