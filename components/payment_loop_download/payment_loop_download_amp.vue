<template>
    <div :class="'games '+bg">
        <div class="container">
            <div class="games__container flex-wrap">
                <NuxtLink class="game-item" no-prefetch
                          :to="`${config.AMP_PREFIX}${item.permalink}`"
                          v-for="(item, index) in currentPosts"
                          :key="index" >
                    <div class="game-item__logo">
                        <amp-img :src="item.thumbnail" height="140" width="224" alt="" />
                    </div>
                </NuxtLink>
            </div>
        </div>

        <div class="items-more" v-if="value.length > (numberPostOnQuery*postCurrentPage)">
            <button class="btn-secondary"
            >{{translates.SHOW_MORE[config.LANG]}}</button>
        </div>
    </div>
</template>
<script>
import translateMixin from '~/mixins/translate'
    export default {
        name: "app_payment_loop_downloads_amp",
        props: {
            value: {
                type: Array,
                default: []
            },
            bg: {
                type: String,
                default: ''
            }
        },
        mixins: [translateMixin],
        data(){
            return {
                numberPostOnQuery: 15,
                postCurrentPage: 1,
            }
        },
        computed: {
            currentPosts() {
               return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        }
    }
</script>