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
            <div class="game_card_btn_wrapper">
                <button type="button"
                        class="casino-card__cta btn-play"
                        @click="popUpActivate"
                        v-if="value.iframe !== ''"
                >{{demo}}</button>
                <button type="button"
                        class="casino-card__cta btn-primary game_card_btn"
                        @click="refActivate(globalRef)"
                        v-if="globalRef"
                >{{play}}</button>
            </div>
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

    <div class="game-popup" v-if="showGame">
        <div class="game-popup__container container">
            <button type="button" class="btn-close" @click="closePopUp">x</button>

            <h4 class="game-popup__ttl">{{value.title}}</h4>
            <div class="game-popup__iframe-area">
                <iframe class="game-popup__iframe" 
                :src="value.iframe" frameborder="0"></iframe>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import TRANSLATE from '~/helpers/translate.json'
    import Helper from '~/helpers/helpers.js'
    import config from '~/config'
    export default {
        name: "app-game-card",
        props: {
            value: {
                type: Object,
                default: {}
            },
            globalRef: {
                type: Object,
                default: {
                    ref: []
                }
            }
        },
        data(){
            return {
                play: '',
                demo: '',
                rating: '',
                showGame: false
            }
        },
        filters: {
            classRating(item) {
                return Helper.classRating(item)
            }
        },
        mounted() {
            this.play = TRANSLATE.PLAY[config.LANG]
            this.demo = TRANSLATE.DEMO[config.LANG]
            this.rating = TRANSLATE.RATING[config.LANG]
        },
        methods: {
            popUpActivate(){
                this.showGame = true
            },
            closePopUp(){
                this.showGame = false
            },
            refActivate(item) {
                Helper.refActivate(item)
            },
        }

    }
</script>
<style lang="scss" scoped>
.game-popup {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    top:0;
    left: 0;
    background-color: rgba(16, 29, 48, .9);
    backdrop-filter: blur(15px);
    animation: expand .4s ease-in-out;
    padding: 10.5vh 10px 20px;
    overflow-y: auto;

    @-moz-document url-prefix() {
        background-color: rgba(16, 29, 48, .9);
    }

    .btn-close {
        position: absolute;
        right: 10px;
        top: 0;
        text-indent: -9999px;
        border: 0;
        background-color: transparent;
        padding: 0;
        width: 46px;
        height: 46px;
        cursor: pointer;

        &:hover {
            &:before,
            &:after {
                background-color: rgba(#fff, 1);
            }
        }

        &:before,
        &:after {
            content: '';
            position: absolute;
            left: 50%;
            width: 20px;
            height: 3px;
            transition: var(--transition-default);
            border-radius: 2px;
            transform: rotate(45deg);
            background-color: rgba(#fff, .5);
            margin: 7px 0 0 -10px;
        }

        &:before {
            transform: rotate(-45deg);
        }
    }
}

.game-popup__ttl {
    font-size: 32px;
    line-height: 1.15625;
    letter-spacing: 0.015em;
    color: #fff;
    text-align: center;
    margin-bottom: 27px;
}

.game-popup__container {
    position: relative;

    @media (max-width: 1400px) {
        max-width: 75vw;
    }

    @media (max-width: 767px) {
        max-width: 90vw;
    }
}

.game-popup__iframe-area {
    background-color: #000;
    box-shadow: 0 4px 20px rgba(2, 19, 62, 0.2);
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
}

.game-popup__iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
}
.game_card_btn_wrapper {
    display: flex;
    margin-top: 30px;
    @media (max-width: 767px) {
     flex-wrap: wrap;
     margin-top: 0px;
   }
}
.game_card_btn {
    margin-left: 15px;
     @media (max-width: 767px) {
     margin-left: 0px;
     margin-top: 15px;
   }
}
</style>
