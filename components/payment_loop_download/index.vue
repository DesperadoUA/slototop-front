<template>
    <div :class="'games '+bg">
        <div class="container">
            <div class="games__container flex-wrap">
                <NuxtLink class="game-item" no-prefetch
                          :to="item.permalink"
                          v-for="(item, index) in currentPosts"
                          :key="index" >
                    <div class="game-item__logo">
                        <img :src="item.thumbnail" loading="lazy" width="224" alt="" />
                    </div>
                </NuxtLink>
            </div>
        </div>

        <div class="items-more" v-if="value.length > (numberPostOnQuery*postCurrentPage)">
            <button no-prefetch
                    class="btn-secondary"
                    @click="postShowMore"
            >{{showMore}}</button>
        </div>
    </div>
</template>
<script>
import TRANSLATE from '~/helpers/translate.json'
import config from '~/config'
    export default {
        name: "app_payment_loop_downloads",
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
        data(){
            return {
                numberPostOnQuery: 15,
                postCurrentPage: 1,
                showMore: '',
            }
        },
        computed: {
            currentPosts() {
               return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        },
        methods: {
            postShowMore(){
                this.postCurrentPage += 1
            }
        },
        mounted() {
            this.showMore = TRANSLATE.SHOW_MORE[config.LANG]
        }
    }
</script>

<style lang="scss" scoped>

</style>
