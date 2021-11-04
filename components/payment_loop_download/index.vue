<template>
    <div class="games --alt-bg">
        <div class="container">
            <div class="games__container flex-wrap">
                <NuxtLink class="game-item" no-prefetch
                          :to="item.permalink"
                          v-for="(item, index) in currentPosts"
                          :key="index" >
                    <div class="game-item__logo">
                        <img :src="item.thumbnail" loading="lazy" alt="" />
                    </div>
                </NuxtLink>
            </div>
        </div>

        <div class="games__more items-more">
            <button no-prefetch v-if="value.length > (numberPostOnQuery*postCurrentPage)"
                    class="btn-secondary"
                    @click="postShowMore"
            >{{showMore}}</button>
        </div>
    </div>
</template>
<script>
import Helper from '~/helpers/helpers.js'
import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_payment_loop_downloads",
        props: {
            value: {
                type: Array,
                default: []
            },
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
            this.showMore = TRANSLATE.SHOW_MORE.ru
        }
    }
</script>

<style lang="scss" scoped>

</style>
