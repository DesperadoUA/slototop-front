<template>
    <aside class="aside-casino">
        <div class="aside-casino_casino">
           <div class="aside-casino_ttl border_green">{{translates.RATING_CASINO[config.LANG]}}</div>
           <article class="aside-casino_item" v-for="(item, index) in value.casino" :key="index">
               <div class="aside-casino_wrapper">
                    <div class="aside-casino_thumbnail">
                            <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`">
                                <amp-img :src="item.thumbnail" width="125" height="83" />
                            </NuxtLink>
                    </div>
                    <div class="aside-casino_title">
                            <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`">
                                {{item.title}}
                            </NuxtLink>
                    </div>
                    <div class="aside-casino_rating">
                        <div class="circle-rating aside-casino_circle-rating">
                                <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="item | classRating">
                                    <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                    <path class="circle-rating__circle" :stroke-dasharray="item.rating + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                </svg>
                                <div class="circle-rating__percentage">{{item.rating}}</div>
                            </div>
                    </div>
               </div>
               <div class="aside-casino_short_desc">
                    {{item.short_desc}}
               </div>
               <div class="aside-casino_action">
                   <a class="slot-item__btn --blue" :href="getRef(item)">{{translates.GO_TO[config.LANG]}}</a>
               </div>
           </article>
        </div>
        <div class="separator"></div>
        <div class="aside-casino_bonuses">
            <div class="aside-casino_ttl border_fiolet">{{translates.TOP_BONUSES[config.LANG]}}</div>
            <article class="aside-casino_item" v-for="(item, index) in value.bonuses" :key="index">
                <div class="aside-casino_wrapper">
                    <div class="aside-casino_thumbnail">
                        <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`">
                            <amp-img :src="item.casino.thumbnail" width="125" height="83" />
                        </NuxtLink>
                    </div>
                    <div class="aside-casino_title  pt-3">
                        <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`">
                            {{item.title}}
                        </NuxtLink>
                        <div class="aside-casino_bonus_value">
                            {{item.value}}
                        </div>
                    </div>
                </div>
                <div class="aside-casino_action mt-15">
                   <a class="slot-item__btn --blue" :href="getRef(item)">
                      {{translates.GET_BONUS[config.LANG]}}
                   </a>
               </div>
           </article>
        </div>
        <div class="separator"></div>
        <div class="aside-casino_games">
            <div class="aside-casino_ttl border_red">{{translates.RATING_GAME[config.LANG]}}</div>
            <article class="aside-casino_item" v-for="(item, index) in value.games" :key="index">
               <div class="aside-casino_wrapper">
                    <div class="aside-casino_thumbnail">
                            <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`">
                                <amp-img :src="item.thumbnail" width="125" height="83" />
                            </NuxtLink>
                    </div>
                    <div class="aside-casino_title pt-3">
                            <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`">
                                {{item.title}}
                            </NuxtLink>
                            <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.vendor.permalink}`" class="aside-casino_link">
                                {{item.vendor.title}}
                            </NuxtLink>
                    </div>
                    <div class="aside-casino_rating">
                        <div class="circle-rating aside-casino_circle-rating">
                                <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="item | classRating">
                                    <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                    <path class="circle-rating__circle" :stroke-dasharray="item.rating + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                </svg>
                                <div class="circle-rating__percentage">{{item.rating}}</div>
                            </div>
                    </div>
               </div>
               <div class="aside-casino_action mt-15">
                   <a class="slot-item__btn --blue" :href="getRef(globalRef)">{{translates.PLAY[config.LANG]}}</a>
               </div>
           </article>
        </div>
    </aside>
</template>

<script>
    import Helper from '~/helpers/helpers.js'
    import translateMixin from '~/mixins/translate'
    export default {
        name: "app-aside-casino",
        props: {
            value: {
                type: Object,
                default: {}
            },
            globalRef: {
                type: Array,
                default: [],
            }
        },
        mixins: [translateMixin],
        data(){
            return {}
        },
        methods: {
            getRef(item) {
                return Helper.getRef(item)
            },
        },
        filters: {
            classRating(item) {
                return Helper.classRating(item)
            }
        }
    }
</script>