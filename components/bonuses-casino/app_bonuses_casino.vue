<template>
    <div class="bonuses-casino">
        <div class="container">
            <div class="bonuses-casino__heading">
                <span class="badge-top" v-if="topTextShow">Топ 10</span>
                <h2 class="bonuses-casino__ttl" v-if="title">{{title}}</h2>
                <NuxtLink no-prefetch :to="link" class="link-primary" v-if="linkText">{{linkText}}</NuxtLink>
            </div>

            <div class="bonuses__container">
                <div class="bonuses-item"
                     v-for="(item, index) in value"
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
                        <NuxtLink no-prefetch :to="item.permalink" class="hidden-sm bonuses-item__btn btn-secondary">{{readMore}}</NuxtLink>
                        <button type="button" class="bonuses-item__btn btn-primary"
                                @click="refActivate(item)"
                                v-if="item.close === 0"
                        >{{getBonus}}</button>
                        <span class="bonuses-item__btn fake-btn-secondary" v-else>Бонус недействительный</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_bonuses",
        props: {
            value: {
                type: Array,
                default: []
            },
            title: {
                type: String,
                default: undefined
            },
            link: {
                type: String,
                default: undefined
            },
            linkText: {
                type: String,
                default: undefined
            },
            topTextShow: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                readMore: '',
                getBonus: ''
            }
        },
        mounted() {
            this.readMore = TRANSLATE.READ_MORE.ru
            this.getBonus = TRANSLATE.GET_BONUS.ru
        }
    }
</script>

<style lang="scss">

</style>
