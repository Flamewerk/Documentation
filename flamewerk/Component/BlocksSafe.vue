<template>
  <div class="">
    <div class=" xl:mx-auto max-w-7xl xl:px-8">

      <div class="mt-4 flow-root">
        <div class="-my-2">
            <div class="absolute flex px-8 relative grid grid-cols-1 sm:grid-cols-2 gap-x-8 space-x-0 ">
              <a v-for="category in categories" :key="category.name" :href="category.href" class="relative flex h-32 w-32 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 w-auto">
                <span aria-hidden="true" class="absolute inset-0">
                  <img :src="category.imageSrc" alt="" class="h-full w-full object-cover object-center" />
                </span>
                <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                <span class="relative mt-auto text-center text-xl font-bold text-white">{{ category.name }}</span>
              </a>
            </div>
          
        </div>
      </div>

      <div class="mt-6 px-4 sm:hidden">
        <a href="#" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    name: 'Open AI',
    href: '/underconstruction',
    imageSrc: 'https://i0.wp.com/images.surferseo.art/9ac57666-0ece-45c2-b14c-59e54ff080a5.png?resize=750%2C410&ssl=1',
  },
  {
    name: 'Auth',
    href: '/underconstruction',
    imageSrc: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://voltage.cloud/wp-content/uploads/2023/04/NOSTR-Magnifying-Glass-Banner-Edited-1024x424.png',
  },
  {
    name: 'Blog',
    href: '/underconstruction',
    imageSrc: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  },
  {
    name: 'Ghost',
    href: '/underconstruction',
    imageSrc: 'https://ghost.org/images/meta/ghost.png',
  },
  { name: 'Markdown', href: '/underconstruction', imageSrc: 'https://i0.wp.com/www.thatcompany.com/wp-content/uploads/2021/11/Markdown-Language_Content-Writing-Banner.png?w=1200&ssl=1' },

  {
    name: 'Kwesforms',
    href: '/underconstruction',
    imageSrc: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2019/09/static-form-providers.png?fit=1200%2C600&ssl=1',
  },
  {
    name: 'Snipcart',
    href: '/underconstruction',
    imageSrc: 'https://statamic.com/storage/products/KAKhiD9E28VV5NOJczb9oN4TYATpZi7xB0671bmt.png',
  },
  {
    name: 'Nostr',
    href: '/underconstruction',
    imageSrc: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://voltage.cloud/wp-content/uploads/2023/04/NOSTR-Letterbox-Banner-Edited-1024x424.png',
  },
  {
    name: 'Miscellaneous',
    href: '/underconstruction',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
  },
  { name: 'Fathom', href: '/underconstruction', imageSrc: 'https://as1.ftcdn.net/v2/jpg/04/39/63/56/1000_F_439635674_0mEVTGzc4w82vQQB8AmE9uGRvdeoUvGK.jpg' },

]
</script>