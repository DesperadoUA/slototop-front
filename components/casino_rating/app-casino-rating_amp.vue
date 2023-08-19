<template>
    <section class="casino-rating">
        <div class="container">
        <h3 class="casino-rating_ttl">{{translates.ONLINE_CASINO_RATING[config.LANG]}}{{title}}:{{translates.PLAYER_RATINGS[config.LANG]}}</h3>
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
                <div class="casino-card_ttl">{{translates.RELIABILITY[config.LANG]}}</div>
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
                <div class="casino-card_ttl">{{translates.CONVENIENCE_PAYMENTS[config.LANG]}}</div>
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
                <div class="casino-card_ttl">{{translates.INTERFACE[config.LANG]}}</div>
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
                <div class="casino-card_ttl">{{translates.SUPPORT[config.LANG]}}</div>
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
                <div class="casino-card_ttl">{{translates.POPULARITY[config.LANG]}}</div>
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
                <div class="casino-card_ttl">{{translates.SHARES[config.LANG]}}</div>
            </div>
        </div>
    </section>
</template>

<script>
    import Helper from '~/helpers/helpers.js'
    import translateMixin from '~/mixins/translate'
    export default {
        name: "app-casino-rating_amp",
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
        mixins: [translateMixin],
        data(){
            return {
                rating: 5
            }
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