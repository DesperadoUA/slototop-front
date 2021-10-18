<template>
    <div class="slots">
        <div class="container">
            <div class="slots__heading">
                <h2 class="slots__ttl">{{dontMissOffer}}</h2>
                <NuxtLink no-prefetch to="/bonuses" class="link-primary">{{allOffers}}</NuxtLink>
            </div>

            <div class="slots__container">
                <NuxtLink no-prefetch class="slot-item"
                    :to="item.permalink"
                        v-for="(item, index) in value"
                        :key="index"
                    >
                    <div class="slot-item__logo">
                        <img :src="item.thumbnail" loading="lazy" alt="" />
                    </div>
                    <div class="slot-item__content">
                        <div class="slot-item__name">{{item.title}}</div>
                        <div class="slot-item__stats">
                            <strong class="slot-item__stats-val">{{item.rating}}/10</strong>
                        </div>
                    </div>

                    <div class="slot-item__btns">
                        <button class="slot-item__btn --blue">{{goTo}}</button>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_popular_offers",
        props: {
            value: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                goTo: '',
                welcomePackage: '',
                allOffers: '',
                dontMissOffer: ''
            }
        },
        filters:{
            classRating(item) {
                return Helper.classRating(item)
            }
        },
        mounted() {
            this.goTo = TRANSLATE.GO_TO.uk
            this.welcomePackage = TRANSLATE.WELCOME_PACKAGE.uk
            this.allOffers = TRANSLATE.ALL_OFFERS.uk
            this.dontMissOffer = TRANSLATE.DONT_MISS_OFFERS.uk
        }
    }
</script>

<style lang="scss"></style>
