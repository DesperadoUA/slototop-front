<template>
<div class="casino-card">
    <div class="container casino-card__container">
        <div class="casino-card__logo">
            <img :src="value.thumbnail" :alt="value.title">
        </div>

        <div class="casino-card__txt">
            <div class="casino-card__name">
                {{value.title}}
            </div>

            <span class="casino-card__company" v-if="value.vendor.length !== 0">{{value.vendor[0].title}}</span>

            <button type="button"
                    class="casino-card__cta btn-primary"
            >{{play}}</button>
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
        name: "app-game-card",
        props: ['value'],
        data(){
            return {
                play: '',
                rating: ''
            }
        },
        filters: {
        },
        methods: {

        },
        filters: {
            classRating(item) {
                return Helper.classRating(item)
            }
        },
        mounted() {
            this.play = TRANSLATE.PLAY.ru
            this.rating = TRANSLATE.RATING.ru
        }

    }
</script>

<style lang="scss">

</style>
