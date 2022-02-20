<template>
  <main>
    <index-hero />

    <section
      class="p-4 py-16 md:px-12 lg:px-20 xl:px-28 flex flex-col items-center"
    >
      <h2 class="font-semibold text-3xl text-center mb-16">Projects</h2>

      <projects-list :projects="projects" />

      <nuxt-link
        to="/projects"
        class="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-lg px-4 py-2 shadow mt-16"
      >
        View more
      </nuxt-link>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { Project } from "~/common/project"

@Component({
  head: {
    titleTemplate: undefined,
  },
  async asyncData({ $content }) {
    const projects = await $content("projects").sortBy("order").limit(3).fetch()

    return {
      projects,
    }
  },
})
export default class extends Vue {
  projects!: Project[]
}
</script>
