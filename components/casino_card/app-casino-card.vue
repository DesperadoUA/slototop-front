<template>
<div class="casino-card">
    <div class="container casino-card__container">
        <div class="casino-card__logo">
            <img src="/img/slotoking.png" alt="">
        </div>

        <div class="casino-card__txt">
            <div class="casino-card__name">
                Онлайн казино Slotoking
                <img class="casino-card__license" src="/img/check.svg" alt="">
                <img src="/img/curacao.png" alt="">
                <img src="/img/ukraine.png" alt="">
                <span class="casino-card__license-txt">лицензия</span>
            </div>

            <span class="casino-card__company">(Кинг, Слотокинг Украина)</span>

            <div class="casino-card__cta">
                <button type="button" class="casino-card__cta btn-primary">перейти в казино</button>
            </div>
        </div>

        <div class="casino-card__rating">
            <div class="circle-rating">
                <svg viewBox="0 0 36 36" class="circle-rating__chart" style="--cr-rating: #4ad295;">
                    <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path class="circle-rating__circle" stroke-dasharray="95, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                </svg>
                <div class="circle-rating__percentage">95</div>
                <span class="circle-rating__txt">Рейтинг</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app-casino-card",
        props: ['value'],
        data(){
            return {
            }
        },
        filters: {
        },
        methods: {
        },
        mounted() {

        }
    }
</script>

<style lang="scss">

</style>
