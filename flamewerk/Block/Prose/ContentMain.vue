<template>
  <div class="dark:prose-invert prose mt-16 dark:text-white pb-16 px-5 md:px-0 max-w-full">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>
