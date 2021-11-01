<template>
  <div class="partners-logos">
    <div class="container" v-if="value !== null && value.length !== 0">
      <ul class="partners-logos__list">
        <li class="partners-logos__item" v-for="(item, index) in value" :key="index">
          <a no-prefetch :href="item.value_1">
            <img :src="item.src" loading="lazy">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "app-partners-menu",
        props: {
            value: {
                type: Array,
                default: []
            },
        },
    }
</script>

<style scoped>

</style>