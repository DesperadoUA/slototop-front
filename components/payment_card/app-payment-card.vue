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
            <span class="casino-card__company" v-if="value.site">{{value.site}}</span>
        </div>
    </div>
</div>
</template>

<script>
    import TRANSLATE from '~/helpers/translate.json'
    import Helper from '~/helpers/helpers.js'
    export default {
        name: "app-vendor-card",
        props: ['value'],
        data(){
            return {
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
            this.rating = TRANSLATE.RATING.ru
        }

    }
</script>

<style lang="scss">

</style>
