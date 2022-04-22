<template>
    <section class="casino-rating">
        <div class="container">
        <h3 class="casino-rating_ttl">{{onlineCasinoRating}}{{title}}:{{playerRatings}}</h3>
        </div>
        <div class="container casino_rating_row">
            <div class="casino_rating_item" v-if="value.reliability">
                <div class="casino-card__rating">
                    <div class="circle-rating">
                        <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="value.reliability | classRating">
                                    <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                    <path class="circle-rating__circle" :stroke-dasharray="value.reliability + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        </svg>
                        <div class="circle-rating__percentage">{{value.reliability}}%</div>
                    </div>
                </div>
                <div class="casino-card_ttl">{{reliability}}</div>
            </div>
            <div class="casino_rating_item" v-if="value.conveniencePayments">
                <div class="casino-card__rating">
                    <div class="circle-rating">
                        <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="value.conveniencePayments | classRating">
                                    <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                    <path class="circle-rating__circle" :stroke-dasharray="value.conveniencePayments + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        </svg>
                        <div class="circle-rating__percentage">{{value.conveniencePayments}}%</div>
                    </div>
                </div>
                <div class="casino-card_ttl">{{conveniencePayments}}</div>
            </div>
            <div class="casino_rating_item" v-if="value.interface">
                <div class="casino-card__rating">
                    <div class="circle-rating">
                        <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="value.interface | classRating">
                                    <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                    <path class="circle-rating__circle" :stroke-dasharray="value.interface + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        </svg>
                        <div class="circle-rating__percentage">{{value.interface}}%</div>
                    </div>
                </div>
                <div class="casino-card_ttl">{{interfaceApp}}</div>
            </div>
            <div class="casino_rating_item" v-if="value.support">
                <div class="casino-card__rating">
                    <div class="circle-rating">
                        <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="value.support | classRating">
                                    <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                    <path class="circle-rating__circle" :stroke-dasharray="value.support + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        </svg>
                        <div class="circle-rating__percentage">{{value.support}}%</div>
                    </div>
                </div>
                <div class="casino-card_ttl">{{support}}</div>
            </div>
            <div class="casino_rating_item" v-if="value.popularity">
                <div class="casino-card__rating">
                    <div class="circle-rating">
                        <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="value.popularity | classRating">
                                    <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                    <path class="circle-rating__circle" :stroke-dasharray="value.popularity + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        </svg>
                        <div class="circle-rating__percentage">{{value.popularity}}%</div>
                    </div>
                </div>
                <div class="casino-card_ttl">{{popularity}}</div>
            </div>
            <div class="casino_rating_item" v-if="value.shares">
                <div class="casino-card__rating">
                    <div class="circle-rating">
                        <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="value.shares | classRating">
                                    <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                    <path class="circle-rating__circle" :stroke-dasharray="value.shares + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        </svg>
                        <div class="circle-rating__percentage">{{value.shares}}%</div>
                    </div>
                </div>
                <div class="casino-card_ttl">{{shares}}</div>
            </div>
        </div>
    </section>
</template>

<script>
    import TRANSLATE from '~/helpers/translate.json'
    import Helper from '~/helpers/helpers.js'
    import config from '~/config'
    export default {
        name: "app-casino-rating",
        props: {
            value: {
                type: Object,
                default: {}
            },
            title: {
                type: String,
                default: ''
            }
        },
        data(){
            return {
                reliability: '',
                conveniencePayments: '',
                interfaceApp: '',
                support: '',
                popularity: '',
                shares: '',
                onlineCasinoRating: '',
                playerRatings: '',
                rating: 5
            }
        },
        mounted(){
            this.reliability = TRANSLATE.RELIABILITY[config.LANG]
            this.conveniencePayments = TRANSLATE.CONVENIENCE_PAYMENTS[config.LANG]
            this.interfaceApp = TRANSLATE.INTERFACE[config.LANG]
            this.support = TRANSLATE.SUPPORT[config.LANG]
            this.popularity = TRANSLATE.POPULARITY[config.LANG]
            this.shares = TRANSLATE.SHARES[config.LANG]
            this.onlineCasinoRating = TRANSLATE.ONLINE_CASINO_RATING[config.LANG]
            this.playerRatings = TRANSLATE.PLAYER_RATINGS[config.LANG]
        },
        filters: {
            classRating(item) {
                const newValue = {}
                newValue.rating = item
                return Helper.classRating(newValue)
            }
        }
    }
</script>

<style lang="scss">
    .casino-rating {
        padding-bottom: 30px;
        padding-top: 0px;
    }
    .casino_rating_row {
        display: flex;
        flex-wrap: wrap;
    }
    .casino_rating_item {
        width: 33.3%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .casino-rating .casino-card__rating {
        margin-top: 0px;
    }
    .casino-rating .casino-card_ttl {
        width: 100%;
        text-align: center;
        padding-bottom: 10px;
        font-weight: 700;
    }
    .casino-rating .circle-rating__txt {
        font-size: 22px;
        margin-top: 10px;
    }
    .casino-rating .circle-rating__percentage {
        font-size: 28px;
        transform: translate(-50%, -50%);
    }
    .casino-rating_ttl {
        margin-bottom: 30px;
        font-size: 32px;
    }
    @media (min-width:320px) and (max-width:768px) {
        .casino_rating_item {
            width: 50%;
        }
        .casino-rating_ttl {
           font-size: 24px;
        }
    }
</style>