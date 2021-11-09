<template>
<div class="casino-card">
    <div class="container casino-card__container">
        <div class="casino-card__logo">
            <img src="/img/slotoking.png" alt="">
        </div>

        <div class="casino-card__txt">
            <div class="casino-card__name">
                Бонус от 777 Original
            </div>
            <strong class="casino-card__bonus">125000 ₽</strong>
        </div>

        <div class="casino-card__cta">
            <button type="button" class="casino-card__cta btn-primary">Получить бонус</button>
        </div>
    </div>
</div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_bonus_card",
        props: {
            value: {
                type: Object,
                default: {}
            },
            goTo: '',
            rating: '',
            casino_review: ''
        },
        data(){
            return {
                numberPostOnQuery: 10,
                postCurrentPage: 1
            }
        },
        filters:{
            classRating(item) {
                return Helper.classRating(item)
            }
        },
        methods: {
            refActivate(item) {
                Helper.refActivate(item)
            },
        },
        mounted() {
            this.rating = TRANSLATE.RATING.uk
            this.goTo = TRANSLATE.GO_TO.uk
            this.casino_review = TRANSLATE.CASINO_REVIEW.uk
        }
    }
</script>
