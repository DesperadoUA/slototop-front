<template>
<div class="casino-card">
    <div class="container casino-card__container">
        <div class="casino-card__logo">
            <img :src="value.thumbnail"
                 width="250"
                 height="160"
                 :alt="value.title">
        </div>

        <div class="casino-card__txt">
            <div class="casino-card__name">
                {{value.title}}
                <img class="casino-card__license"
                     src="/img/check.svg"
                     alt="" v-if="value.licenses.length !== 0" width="15" height="15">
                <img v-for="(item, index) in value.licenses"
                     :src="item.thumbnail"
                     :key="index"
                     :alt="item.title"
                >
                <span class="casino-card__license-txt" v-if="value.licenses.length !== 0">{{$options.license}}</span>
            </div>

            <!--<span class="casino-card__company">(Кинг, Слотокинг Украина)</span> -->
            <div class="casino-card__button_wrapper">
                <button v-if="value.close !== 1"
                    type="button"
                    class="casino-card__cta btn-primary"
                    @click="refActivate(value)"
                >{{$options.goToCasino}}</button>
                <PromoBtn 
                    v-if="value.promocod"
                    :text="value.promocod"
                    :subTitle="$options.promoTitle"
                />
            </div>
        </div>

        <div class="casino-card__rating">
            <div class="circle-rating">
                <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="value | classRating">
                    <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path class="circle-rating__circle" :stroke-dasharray="value.rating + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                </svg>
                <div class="circle-rating__percentage">{{value.rating}}</div>
                <span class="circle-rating__txt">{{$options.rating}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import TRANSLATE from '~/helpers/translate.json'
    import Helper from '~/helpers/helpers.js'
    import PromoBtn from '~/components/casino_card/parts/PromoBtn'
    import config from '~/config'
    export default {
        name: "app-casino-card",
        props: ['value'],
        components: {PromoBtn},
        data(){
            return {
                license: '',
                goToCasino: '',
                rating: ''
            }
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
         created() {
            this.$options.license = TRANSLATE.LICENSE[config.LANG]
            this.$options.goToCasino = TRANSLATE.GO_TO_CASINO[config.LANG]
            this.$options.rating = TRANSLATE.RATING[config.LANG]
            this.$options.promoTitle = TRANSLATE.PROMO_TITLE[config.LANG]
        }
    }
</script>

<style lang="scss">
.casino-card__button_wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;
    margin-top: 40px;
}
 @media (max-width: 767px) {
    .casino-card__button_wrapper {
      margin-top: 20px;
      flex-wrap: wrap;
    }
 }
</style>
