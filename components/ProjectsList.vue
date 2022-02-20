<template>
  <div class="flex flex-col md:flex-row justify-center flex-wrap gap-10">
    <article
      v-for="project in projects"
      :key="project.slug"
      class="bg-zinc-700 flex-grow basis-[20rem] p-8 shadow-lg rounded-md"
    >
      <div class="flex justify-between mb-4">
        <h3 class="font-semibold text-xl">
          <nuxt-link
            :to="'/projects/' + project.slug"
            class="hover:text-indigo-400"
          >
            {{ project.name }}
          </nuxt-link>
        </h3>

        <div v-if="project.links" class="flex gap-4">
          <a
            v-if="project.links.github"
            :href="project.links.github"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-indigo-400"
          >
            <font-awesome-icon :icon="['fab', 'github']" size="lg" />
          </a>

          <a
            v-if="project.links.web"
            :href="project.links.web"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-indigo-400"
          >
            <font-awesome-icon icon="globe" size="lg" />
          </a>
        </div>
      </div>

      <ul v-if="project.technologies" class="flex gap-2 flex-wrap">
        <li
          v-for="technology in project.technologies"
          :key="technology"
          class="bg-indigo-600 rounded-lg text-sm px-2 py-1 shadow"
        >
          {{ technology }}
        </li>
      </ul>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Project } from "~/common/project"

@Component
export default class extends Vue {
  @Prop()
  projects!: Project[]
}
</script>
