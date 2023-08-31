<template>
    <div :class="'games --alt-bg '+bg">
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

                        <NuxtLink class="btn-play" :to="item.permalink">{{translates.PLAY[config.LANG]}}</NuxtLink>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <div class="games__more items-more" v-if="value.length > (numberPostOnQuery*postCurrentPage)">
            <button no-prefetch
                    class="btn-secondary"
                    @click="postShowMore"
            >{{translates.SHOW_MORE[config.LANG]}}</button>
        </div>
    </div>
</template>
<script>
import { GAME as NumberPostOnQuery }  from '~/config/postLoader'
import translateMixin from '~/mixins/translate'
    export default {
        name: "app_slot_loop_downloads",
        mixins: [translateMixin],
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
            },
            bg: {
                type: String,
                default: ''
            }
        },
        data(){
            return {
                numberPostOnQuery: NumberPostOnQuery,
                postCurrentPage: 1
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
        }
    }
</script>

<style lang="scss" scoped>

</style>
