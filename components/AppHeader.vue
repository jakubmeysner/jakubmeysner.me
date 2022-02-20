<template>
  <header class="bg-zinc-800 text-lg md:flex shadow-md">
    <div class="flex justify-between flex-grow p-4 md:pl-12 lg:pl-20 xl:pl-28">
      <div class="font-bold">
        <nuxt-link to="/" class="hover:text-indigo-400">
          Jakub Meysner
        </nuxt-link>
      </div>

      <button class="md:hidden" @click="menu = !menu">
        <font-awesome-icon icon="bars" size="lg" />
      </button>
    </div>

    <nav
      :class="{ hidden: !menu }"
      class="text-xl md:text-lg md:block bg-zinc-700 md:bg-transparent p-12 md:p-4 md:pr-12 lg:pr-20 xl:pr-28 shadow-inner md:shadow-none"
    >
      <ul class="flex flex-col md:flex-row items-center gap-8">
        <li v-for="item in nav" :key="item.to">
          <nuxt-link
            :to="item.to"
            class="hover:text-indigo-400"
            active-class="text-indigo-400"
          >
            {{ item.label }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      menu: false,
      nav: [
        {
          to: "/projects",
          label: "Projects",
        },
      ],
    }
  },
})
</script>
