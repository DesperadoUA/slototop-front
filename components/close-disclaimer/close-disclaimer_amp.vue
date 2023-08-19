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