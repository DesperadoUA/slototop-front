<template>
<div class="casinos">
        <div class="slots">
            <div class="container">
                <div class="slots__container">
                    <div    class="slot-item"
                            v-for="(item, index) in currentPosts"
                            :key="index">
                        <div class="slot-item__logo">
                            <NuxtLink no-prefetch :to="item.permalink">
                                <img :src="item.thumbnail" loading="lazy" alt="" />
                            </NuxtLink>
                        </div>
                        <div class="slot-item__content">
                            <div class="slot-item__name">{{item.title}} <img src="/img/check.svg" alt="" v-if="item.licenses.length !== 0"></div>
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
        <div class="items-more">
            <button no-prefetch v-if="value.length > (numberPostOnQuery*postCurrentPage)"
                    class="btn-secondary"
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
        name: "app_casino_loop_downloads",
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
