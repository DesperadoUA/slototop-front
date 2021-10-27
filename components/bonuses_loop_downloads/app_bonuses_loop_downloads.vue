<template>
    <div class="bonuses-casino">
        <div class="container">
            <div class="bonuses__container">
                <div class="bonuses-item"
                     v-for="(item, index) in currentPosts"
                     :key="index"
                >
                    <div class="bonuses-item__logo">
                        <img :src="item.casino.thumbnail" :alt="item.title">
                    </div>
                    <div class="bonuses-item__name">{{item.title}}</div>
                    <div class="bonuses-item__val">{{item.value}}</div>
                    <div class="bonuses-tags">
                        <NuxtLink class="bonuses-tag"
                            v-for="(item_cat, index_cat) in item.type_bonus"
                            :key="index_cat"
                            :to="item_cat.permalink"
                        >{{item_cat.title}}</NuxtLink>
                    </div>

                    <div class="bonuses-item__btns">
                        <NuxtLink no-prefetch :to="item.permalink" class="bonuses-item__btn btn-secondary">{{readMore}}</NuxtLink>
                        <span class="bonuses-item__btn btn-primary" @click="refActivate(item)">{{getBonus}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="items-more casino-card__more">
            <button no-prefetch v-if="value.length > (numberPostOnQuery*postCurrentPage)"
                    class="btn-primary"
                    @click="postShowMore"
            >{{showMore}}
            </button>
        </div>
    </div>

</template>

<script>
import Helper from '~/helpers/helpers.js'
import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_bonuses",
        props: {
            value: {
                type: Array,
                default: []
            },
        },
        data(){
            return {
                numberPostOnQuery: 10,
                postCurrentPage: 1,
                showMore: '',
                rating: '',
                play: '',
                review: ''
            }
        },
        computed: {
            currentPosts() {
               return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
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
            this.readMore = TRANSLATE.READ_MORE.ru
            this.getBonus = TRANSLATE.GET_BONUS.ru
        }
    }
</script>

<style lang="scss" scoped>

</style>
