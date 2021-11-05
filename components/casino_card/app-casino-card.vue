<template>
<div class="casino-card">
    <div class="container casino-card__container">
        <div class="casino-card__logo">
            <img :src="value.thumbnail" :alt="value.title">
        </div>

        <div class="casino-card__txt">
            <div class="casino-card__name">
                {{value.title}}
                <img class="casino-card__license"
                     src="/img/check.svg"
                     alt="" v-if="value.licenses.length !== 0">
                <img v-for="(item, index) in value.licenses"
                     :src="item.thumbnail"
                     :key="index"
                     :alt="item.title"
                >
                <span class="casino-card__license-txt" v-if="value.licenses.length !== 0">{{license}}</span>
            </div>

            <!--<span class="casino-card__company">(Кинг, Слотокинг Украина)</span> -->

            <div class="casino-card__cta">
                <button type="button"
                        class="casino-card__cta btn-primary"
                        @click="refActivate(value)"
                >{{goToCasino}}</button>
            </div>
        </div>

        <div class="casino-card__rating">
            <div class="circle-rating">
                <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="value | classRating">
                    <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path class="circle-rating__circle" :stroke-dasharray="value.rating + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                </svg>
                <div class="circle-rating__percentage">{{value.rating}}</div>
                <span class="circle-rating__txt">{{rating}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import TRANSLATE from '~/helpers/translate.json'
    import Helper from '~/helpers/helpers.js'
    export default {
        name: "app-casino-card",
        props: ['value'],
        data(){
            return {
                license: '',
                goToCasino: '',
                rating: ''
            }
        },
        filters: {
        },
        methods: {
            refActivate(item) {
                Helper.refActivate(item)
            },
        },
        filters: {
            classRating(item) {
                return Helper.classRating(item)
            }
        },
        mounted() {
            this.license = TRANSLATE.LICENSE.ru
            this.goToCasino = TRANSLATE.GO_TO_CASINO.ru
            this.rating = TRANSLATE.RATING.ru
        }

    }
</script>

<style lang="scss">

</style>
