<script setup lang="ts">
import Hero from '~/components/landing/hero.vue';
import FeaturedTechnologies from '~/components/landing/featured-technologies/FeaturedTechnologies.vue';
import CVTimeline, {TimelineItemProps} from '~/components/landing/CVTimeline.vue';
const experienceYears = new Date().getFullYear() - 2020;

useHead({
  title: 'Felipe Sánchez | Home',
  meta: [
    { name: 'description', content: `Desarrollador con más de ${experienceYears} años de experiencia especializado en Angular, Vue & Nuxt, Django REST Framework y Kubernetes`}
  ],
})

const timelineItems: TimelineItemProps[] = [
  {
    title: 'Desarrollador Full Stack Django y Vue en mlean',
    fromTo: 'Mayo 2022 - Actualidad',
    content: `<p>Actualmente, trabajo en el mPS (mlean Production System) usado por Coca-Cola, Renault, Nestlé, Nissan, entre otros.</p>
        <p>En el puesto me encargo de labores de desarrollo y análisis de software tanto front como back, incluido testing unitario.</p>
    `,
    technologies: ['Django (Python)', 'VueJS (JS y TS)', 'PostgreSQL', 'Docker'],
    externalLinks: [{text: 'Web mlean', url: 'https://www.mlean.com/'}]
  },
  {
    title: 'Desarrollador Full Stack y de Integraciones Empresariales en Angular, Python y Kubernetes en Getronics',
    fromTo: 'Abril 2021 – Mayo 2022',
    content: `<p>Desde el departamento de Integraciones Empresariales de Getronics he trabajado en el proyecto Smart Buildings con uno de los stacks mas novedosos: Angular, Python (Flask) y Kubernetes.</p>
        <p>El proyecto se construye con una arquitectura de microservicios y microaplicaciones. </p>
        <p>Adicionalmente, he participado en labores de apoyo para algunos proyectos de la APBA (Autoridad Portuaria de la Bahía de Algeciras)</p>
    `,
    technologies: ['Flask (Python)', 'Django (Python)', 'Angular (TS)', 'PostgreSQL', 'Kubernetes', 'Keycloak'],
    externalLinks: [{text: 'Web Getronics', url: 'https://www.getronics.com/es/'}]
  },
  {
    title: 'Desarrollador Full Stack en Spring Framework en ViewNext',
    fromTo: 'Octubre 2020 – Abril 2021',
    content: `<p>Durante este periodo he trabajado en el Sistema de Gestión de Puntos de Recarga para vehículos eléctricos de Iberdrola (SGPR), proyecto de gran envergadura y con enfoque al mercado mundial.</p>
       <p> Este proyecto ha servido como lanzadera del sistema EVA (Electric Vehicle Accelerator)</p>
    `,
    technologies: ['SpringMVC (Java)', 'Spring (Java)', 'OracleSQL', 'Angular (TS)', 'IBM WebSphere Application Server'],
    externalLinks: [{text: 'Web ViewNext', url: 'https://www.viewnext.com/'}]
  },
  {
    title: 'Desarrollador frontend Angular en Everis (NTT Data)',
    fromTo: 'Agosto 2020 – Octubre 2020',
    content: `<p>En el puesto se ha desarrollado el sistema de mantenimiento de una de las centrales nucleares más importantes de España. El proyecto ha requerido de estrictos estándares de Unit Testing con Jasmine los cuales he liderado gracias a la confianza que el equipo puso en mi desde el principio.</p>
    `,
    technologies: ['Angular (TS)'],
    externalLinks: [{text: 'Web Everis (Actualmente NTT Data)', url: 'https://es.nttdata.com/'}]
  }
];

</script>

<template>
  <div>

    <div class="min-h-[calc(100vh-10rem)]">
      <hero></hero>
    </div>
    <FeaturedTechnologies></FeaturedTechnologies>
    <div class="mt-[10rem]">
      <CVTimeline :items="timelineItems"></CVTimeline>

    </div>

  </div>
</template>

<style scoped>

</style>