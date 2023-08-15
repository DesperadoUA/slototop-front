<template>
<div class="casino-card">
    <div class="container casino-card__container">
        <div class="casino-card__logo">
            <img :src="value.casino[0].thumbnail" :alt="value.casino[0].title">
        </div>

        <div class="casino-card__txt">
            <div class="casino-card__name">{{value.title}}</div>
            <strong class="casino-card__bonus" v-if="value.value_bonus !== ''">
                {{value.value_bonus}}
            </strong>
        </div>

        <div class="casino-card__cta">
            <button type="button" class="casino-card__cta btn-primary"
            @click="refActivate(value)"
                    v-if="value.close === 0"
            >{{translates.GET_BONUS[config.LANG]}}</button>
            <button type="button" class="casino-card__cta fake-btn-secondary"
                    v-else
            >{{translates.BONUS_INVALID[config.LANG]}}</button>
            <NuxtLink :to="this.value.casino[0].permalink" class="casino-card__cta_permalink">{{translates.CASINO_REVIEW[config.LANG]}}</NuxtLink>
        </div>
    </div>
</div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
    export default {
        name: "app_bonus_card",
        props: {
            value: {
                type: Object,
                default: {}
            }
        },
        mixins: [translateMixin],
        data(){
            return {}
        },
        methods: {
            refActivate(item) {
                Helper.refActivate(item)
            },
        }
    }
</script>
