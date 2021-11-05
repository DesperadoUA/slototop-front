<template>
    <div class="games">
        <div class="container">
            <div class="slots__heading" v-if="title">
                <h2 class="slots__ttl">{{title}}</h2>
                <NuxtLink no-prefetch :to="link" class="link-primary" v-if="link">
                    {{linkText}}
                </NuxtLink>
            </div>
            <div class="games__container flex-wrap">
                <NuxtLink class="game-item" no-prefetch
                          :to="item.permalink"
                          v-for="(item, index) in currentPosts"
                          :key="index" >
                    <div class="game-item__logo">
                        <img :src="item.thumbnail" loading="lazy" alt="" />
                    </div>

                    <div class="game-item__hover">
                        <span class="game-item__name">{{item.title}}</span>
                        <span class="game-item__category">{{item.vendor.title}}</span>

                        <NuxtLink class="btn-play" :to="item.permalink">Играть</NuxtLink>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="items-more">
            <button no-prefetch v-if="value.length > (numberPostOnQuery*postCurrentPage)"
                    class="btn-primary"
                    @click="postShowMore"
            >{{showMore}}</button>
        </div>
    </div>
</template>
<script>
import Helper from '~/helpers/helpers.js'
import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_slot_loop_downloads",
        props: {
            value: {
                type: Array,
                default: []
            },
            title: {
                type: String,
                default: undefined
            },
            link: {
                type: String,
                default: undefined
            },
            linkText: {
                type: String,
                default: undefined
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
            this.showMore = TRANSLATE.SHOW_MORE.ru
        }
    }
</script>

<style lang="scss" scoped>

</style>
