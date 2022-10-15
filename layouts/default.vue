<template>
  <div class="font-sans bg-neutral-900 text-white min-h-full flex flex-col">
    <nuxt-child class="flex-grow" />
  </div>
</template>

<style>
/* stylelint-disable selector-id-pattern */
html,
body,
#__nuxt,
#__layout {
  height: 0;
  min-height: 100%;
}
/* stylelint-enable selector-id-pattern */
</style>
