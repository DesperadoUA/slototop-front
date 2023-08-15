<template>
  <section class="disclaimer_close">
    <div class="container disclaimer_wrapper">
      <div class="close_ttl">{{translates.CLOSE[config.LANG]}}</div>
      <div class="close_text">{{translates.CLOSE_MSG[this.config.LANG].replace('$value$', value)}}</div>
    </div>
  </section>
</template>

<script>
import translateMixin from '~/mixins/translate'
    export default {
        name: "close-disclaimer",
        props: {
            value: {
                type: String
            }
        },
        mixins: [translateMixin],
        data: () => {
            return {}
        }
    }
</script>

<style scoped>
  .disclaimer_close {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .disclaimer_wrapper {
    padding: 20px;
    border-radius: 12px;
    background: var(--theme-cr-5);
    color: var(--disabled-bg);
    text-decoration: none;
    font-family: var(--font);
    font-weight: bold;
  }
  @media (max-width: 767px) {
    .disclaimer_close {
      padding: 15px;
    }
  }
  .close_ttl {
    font-size: 24px;
  }
</style>