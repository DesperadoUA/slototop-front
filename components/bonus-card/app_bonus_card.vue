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
            >{{getBonus}}</button>
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
            }
        },
        data(){
            return {
                getBonus: ''      
            }
        },
        methods: {
            refActivate(item) {
                Helper.refActivate(item)
            },
        },
        mounted() {
            this.getBonus = TRANSLATE.GET_BONUS.ru
        }
    }
</script>
