<template>
  <div class="bg-colorBgLight dark:bg-colorBgDark max-w-4xl mx-auto">
    <div class="w-full">
      <div class="w-full">
        <div class="space-y-5 sm:space-y-4 text-center">
          <!-- <h2
            class="text-3xl font-bold tracking-tight sm:text-4xl text-colorTxtLight dark:text-colorTxtDark">
            {{ $t("homepage.title") }} {{ project.$state.name }} !
          </h2> -->

            <img
              v-if="project.$state.logo"
              :class="[project.$state.logodark ? 'block dark:hidden' : '', 'mx-auto']"
              src="/icon.png"
              :alt="project.$state.name"
              width="120"
              height="120"
            />
            <img
              v-if="project.$state.logodark"
              class="hidden dark:block mx-auto"
              src="/icon.png"
              :alt="project.$state.name"
              width="120"
              height="120"
            />


          <p class="text-xl text-gray-900 dark:text-white">
            <!-- {{ $t("homepage.subtitle") }} -->

Create cross-platform Progressive Web Apps with Markdown Pages. <br> Build on top of Nuxt3/Vue3 with Language Agnostic Building Blocks<br>
 Launch a website, application, store, community with no costs in under 10 min. 
            <!-- {{ $t("homepage.subtitle") }} -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useSettings } from "~/flamewerk/project";

const project = useSettings()

</script>
