<template>
    <header class="header">
    <div class="container header__container">
      <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}/`" >
      <amp-img :src="logo" 
             class="logo" 
             width="147" 
             height="53"
             ></amp-img>
      </NuxtLink>
      <button class="hamburger navbar__btn" on='tap:sidebar1.toggle'>
          <span class="bar">
            <div class="bar_line"></div>
            <div class="bar_line"></div>
            <div class="bar_line"></div>
          </span>
      </button>
      <amp-sidebar id="sidebar1" layout="nodisplay" side="right">
          <ul class="nav_menu">
            <li class="menu_box_item" 
                     v-for="(item, index) in menu_links" 
                     :key="index">
                    <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.value_1}`" >
                        {{item.value_2}}
                    </NuxtLink>
                 </li>
          </ul>
      </amp-sidebar>
    </div>
  </header>
</template>
<script>
    import translateMixin from '~/mixins/translate.js'
    export default {
        name: "app-header_amp",
        mixins: [translateMixin],
        props: ['logo', 'menu_links'],
        data(){
            return {}
        }
    }
</script>

<style lang="scss">
:root {
    --scrollbar-width: 0;
}

.header {
    padding-top: 14px;
    padding-bottom: 14px;
    position: fixed;
    background-color: var(--theme-bg-4);
    top: 0;
    left: 0;
    width: 100%;
    max-width: calc(100vw - var(--scrollbar-width));
    z-index: 999;

    /*.scrolled & {
        background-color: rgba(#fff, .8);
    }*/

    @media (max-width: 991px) {
        display: flex;
        align-items: center;
        min-height: 64px;
    }

    @media (min-width: 992px) {
        position: absolute;
        padding-top: 31px;
        padding-bottom: 23px;
    }
}

.header__container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (min-width: 992px) {
        justify-content: space-between;
    }
}
</style>
