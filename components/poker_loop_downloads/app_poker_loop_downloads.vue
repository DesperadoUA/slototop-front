<template>
<div :class="'casinos '+bg">
        <div class="slots">
            <div class="container">
                <div class="slots__heading" v-if="title">
                    <h2 class="slots__ttl">{{title}}</h2>
                </div>
                <div class="slots__container items-wrap">
                    <div    class="slot-item"
                            v-for="(item, index) in currentPosts"
                            :key="index">
                        <div class="slot-item__logo">
                            <NuxtLink no-prefetch :to="item.permalink">
                                <img :src="item.thumbnail" loading="lazy" alt="" />
                            </NuxtLink>
                        </div>
                        <div class="slot-item__content">
                            <div class="slot-item__name">{{item.title}}</div>
                            <div class="slot-item__stats">
                                <div class="star-rating">
                                    <span class="star-rating__val" :style="item | widthRating"></span>
                                </div>
                                <strong class="slot-item__stats-val">{{item.rating}}/100</strong>
                            </div>
                        </div>

                        <div class="slot-item__btns">
                            <button class="slot-item__btn --blue" @click="refActivate(item)">{{goTo}}</button>
                        </div>
                    </div>
                </div>
        </div>
        <div class="items-more" v-if="value.length > (numberPostOnQuery*postCurrentPage)">
            <button class="btn-secondary"
                    @click="postShowMore"
            >{{showMore}}</button>
        </div>
    </div>
</div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_poker_loop_downloads",
        props: {
            value: {
                type: Array,
                default: []
            },
            bg: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: undefined
            }
        },
        data(){
            return {
                numberPostOnQuery: 15,
                postCurrentPage: 1,
                showMore: '',
                rating: '',
                welcomeBonus: '',
                freeSpins: '',
                casinoReview: '',
                goTo: ''
            }
        },
        computed: {
            currentPosts() {
               return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        },
        filters:{
            classRating(item) {
               return Helper.classRating(item)
            },
            widthRating(item){
                return `width: ${item.rating}%`
            }
        },
        methods: {
            refActivate(item) {
                 Helper.refActivate(item)
            },
            postShowMore(){
                this.postCurrentPage += 1
            }
        },
        mounted() {
            this.showMore = TRANSLATE.SHOW_MORE.ru
            this.rating = TRANSLATE.RATING.ru
            this.welcomeBonus = TRANSLATE.WELCOME_BONUS.ru
            this.freeSpins = TRANSLATE.FREE_SPINS.ru
            this.casinoReview = TRANSLATE.CASINO_REVIEW.ru
            this.goTo = TRANSLATE.GO_TO.ru
        }
    }
</script>

<style lang="scss" scoped>

</style>
