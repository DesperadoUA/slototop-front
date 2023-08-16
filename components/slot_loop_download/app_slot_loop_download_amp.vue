<template>
    <div :class="'games --alt-bg '+bg">
        <div class="container">
            <div class="slots__heading" v-if="title">
                <h2 class="slots__ttl">{{title}}</h2>
                <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${link}`" class="link-primary" v-if="link">
                    {{linkText}}
                </NuxtLink>
            </div>
            <div class="games__container flex-wrap">
                <div class="game-item"
                          v-for="(item, index) in currentPosts"
                          :key="index" >
                    <div class="game-item__logo">
                        <amp-img :src="item.thumbnail" alt="" width='224' height='140' />
                    </div>

                    <div class="game-item__hover">
                        <span class="game-item__name">{{item.title}}</span>
                        <span class="game-item__category">{{item.vendor.title}}</span>
                        <NuxtLink class="btn-play" :to="`${config.AMP_PREFIX}${item.permalink}`">{{translates.PLAY[config.LANG]}}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <div class="games__more items-more" v-if="value.length > (numberPostOnQuery*postCurrentPage)">
            <button no-prefetch
                    class="btn-secondary"
            >{{translates.SHOW_MORE[config.LANG]}}</button>
        </div>
    </div>
</template>
<script>
import translateMixin from '~/mixins/translate'
    export default {
        name: "app_slot_loop_downloads_amp",
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
                numberPostOnQuery: 15,
                postCurrentPage: 1
            }
        },
        computed: {
            currentPosts() {
               return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        }
    }
</script>