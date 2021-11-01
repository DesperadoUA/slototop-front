<template>
  <div class="container">
    <div class="footer-nav">
      <NuxtLink v-for="(item, index) in value" :key="index" :to="item.value_1"
              class="footer-nav-link">{{item.value_2}}</NuxtLink>
    </div>
  </div>
</template>

<script>
    export default {
        name: "app-footer-menu",
        props: {
            value: {
                type: Array,
                default: []
            },
        },
        data(){
            return {
                settings: []
            }
        },
    }
</script>

<style scoped>

</style>