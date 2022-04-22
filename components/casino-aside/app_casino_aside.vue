<template>
    <aside class="aside-casino">
        <div class="aside-casino_casino">
           <div class="aside-casino_ttl border_green">{{ratingCasino}}</div>
           <article class="aside-casino_item" v-for="(item, index) in value.casino" :key="index">
               <div class="aside-casino_wrapper">
                    <div class="aside-casino_thumbnail">
                            <NuxtLink no-prefetch :to="item.permalink">
                                <img :src="item.thumbnail" width="125" height="83" />
                            </NuxtLink>
                    </div>
                    <div class="aside-casino_title">
                            <NuxtLink no-prefetch :to="item.permalink">
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
                   <button class="slot-item__btn --blue" @click="refActivate(item)">{{goTo}}</button>
               </div>
           </article>
        </div>
        <div class="separator"></div>
        <div class="aside-casino_bonuses">
            <div class="aside-casino_ttl border_fiolet">{{topBonuses}}</div>
            <article class="aside-casino_item" v-for="(item, index) in value.bonuses" :key="index">
                <div class="aside-casino_wrapper">
                    <div class="aside-casino_thumbnail">
                        <NuxtLink no-prefetch :to="item.permalink">
                            <img :src="item.casino.thumbnail" width="125" height="83" />
                        </NuxtLink>
                    </div>
                    <div class="aside-casino_title  pt-3">
                        <NuxtLink no-prefetch :to="item.permalink">
                            {{item.title}}
                        </NuxtLink>
                        <div class="aside-casino_bonus_value">
                            {{item.value}}
                        </div>
                    </div>
                </div>
                <div class="aside-casino_action mt-15">
                   <button class="slot-item__btn --blue" @click="refActivate(item)">{{getBonus}}</button>
               </div>
           </article>
        </div>
        <div class="separator"></div>
        <div class="aside-casino_games">
            <div class="aside-casino_ttl border_red">{{ratingGames}}</div>
            <article class="aside-casino_item" v-for="(item, index) in value.games" :key="index">
               <div class="aside-casino_wrapper">
                    <div class="aside-casino_thumbnail">
                            <NuxtLink no-prefetch :to="item.permalink">
                                <img :src="item.thumbnail" width="125" height="83" />
                            </NuxtLink>
                    </div>
                    <div class="aside-casino_title pt-3">
                            <NuxtLink no-prefetch :to="item.permalink">
                                {{item.title}}
                            </NuxtLink>
                            <NuxtLink no-prefetch :to="item.vendor.permalink" class="aside-casino_link">
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
                   <button class="slot-item__btn --blue" @click="refActivate(globalRef)">{{play}}</button>
               </div>
           </article>
        </div>
    </aside>
</template>

<script>
    import TRANSLATE from '~/helpers/translate.json'
    import Helper from '~/helpers/helpers.js'
    import config from '~/config'
    export default {
        name: "app-aside-casino",
        props: {
            value: {
                type: Object,
                default: {}
            }
        },
        data(){
            return {
                globalRef: [],
                ratingCasino: '',
                ratingGames: '',
                topBonuses: '',
                goTo: '',
                getBonus: '',
                play: ''
            }
        },
        async mounted(){
            await this.$store.dispatch('options/setOptions')
            const options = this.$store.getters['options/getOptions']
            const ref = options.filter(item => item.key === 'global-ref')
            if(ref.length !== 0) this.globalRef.ref = ref[0].value
            this.ratingCasino = TRANSLATE.RATING_CASINO[config.LANG]
            this.ratingGames = TRANSLATE.RATING_GAME[config.LANG]
            this.topBonuses = TRANSLATE.TOP_BONUSES[config.LANG]
            this.goTo = TRANSLATE.GO_TO[config.LANG]
            this.getBonus = TRANSLATE.GET_BONUS[config.LANG]
            this.play = TRANSLATE.PLAY[config.LANG]
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
        }
    }
</script>
<style lang="scss" scoped>
    .aside-casino {
        padding-left: 20px;
        padding-top: 70px;
    }
    .aside-casino_item {
        margin-bottom: 32px;
    }
    .aside-casino_ttl {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 900;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.015em;
        text-transform: uppercase;
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 25px;
    }
    .border_green {
        border: 2px solid #3FF6BF;
    }
    .border_red {
        border: 2px solid #F6553F;
    }
    .border_fiolet {
       border: 2px solid #6F3FF6;
    }
    .aside-casino_wrapper {
        display: flex;
        justify-content: space-between;
    }
    .aside-casino_thumbnail {
        width: 125px;
        min-width: 125px;
    }
    .aside-casino_thumbnail img {
        border-radius: 10px;
    }
    .aside-casino_rating {
        width: 50px;
    }
    .aside-casino_circle-rating {
        width: 50px;
        height: 50px;
    }
    .aside-casino_circle-rating .circle-rating__percentage {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 800;
        font-size: 14px;
        text-align: center;
        letter-spacing: 0.015em;
        margin-top: 7px;
    }
    .aside-casino_short_desc {
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 12px;
    }
    .aside-casino_title {
        flex-grow: 1;
        padding-top: 18px;
        padding-left: 10px;     
    }
    .aside-casino_title a {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 14px;
        align-items: center;
        letter-spacing: 0.015em;
        color: #0D2342;
        text-decoration: none;
    }
    .aside-casino_action .slot-item__btn {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .aside-casino_link {
        display: block;
        font-weight: normal!important;
    }
    .aside-casino_bonus_value {
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 12px;
        line-height: 19px;
        letter-spacing: 0.015em;
        color: #F63F6C;
    }
    .separator {
        position: relative;
        height: 30px;
        margin-top: -15px;
        margin-bottom: 15px;
    }
    .separator::before {
        content: "";
        position: absolute;
        left: 50%;
        top:10px;
        transform: translateX(-50%);
        width: 72px;
        height: 2px;
        background: rgba(13, 35, 66, 0.1);
        border-radius: 1px;
    }
    .separator::after {
        content: "";
        position: absolute;
        left: 50%;
        top:20px;
        transform: translateX(-50%);
        width: 72px;
        height: 2px;
        background: rgba(13, 35, 66, 0.1);
        border-radius: 1px;
    }
    @media (min-width:319px) and (max-width:768px) {
        .aside-casino {
            padding-left: 0px;
        }
    }
 </style>
