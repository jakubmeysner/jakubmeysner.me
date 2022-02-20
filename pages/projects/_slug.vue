<template>
  <main class="p-4 py-16 md:px-12 lg:px-20 xl:px-28">
    <div class="flex justify-between items-center mb-8">
      <h1 class="font-bold text-4xl">{{ project.name }}</h1>

      <div class="flex gap-8">
        <a
          v-if="project.links.github"
          :href="project.links.github"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-indigo-400"
        >
          <font-awesome-icon :icon="['fab', 'github']" size="2x" />
        </a>

        <a
          v-if="project.links.web"
          :href="project.links.web"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-indigo-400"
        >
          <font-awesome-icon icon="globe" size="2x" />
        </a>
      </div>
    </div>

    <ul v-if="project.technologies" class="flex gap-2 flex-wrap mb-16">
      <li
        v-for="technology in project.technologies"
        :key="technology"
        class="bg-indigo-600 rounded-lg px-2 py-1 shadow-md"
      >
        {{ technology }}
      </li>
    </ul>

    <nuxt-content
      :document="project"
      class="prose prose-invert max-w-none prose-p:text-white"
    />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { Project } from "~/common/project"

@Component({
  head() {
    return {
      title: (this as ProjectsSlug).project.name,
    }
  },
  async asyncData({ $content, route }) {
    const project = await $content("projects/" + route.params.slug).fetch()

    return {
      project,
    }
  },
})
export default class ProjectsSlug extends Vue {
  project!: Project
}
</script>
