<template>
    <div class="games">
        <div class="container">
            <div class="slots__heading">
                <h2 class="slots__ttl">Игры</h2>
                <NuxtLink no-prefetch to="/slots" class="link-primary">Все игры</NuxtLink>
            </div>

            <div class="games__container">
                <NuxtLink class="game-item" no-prefetch
                          :to="item.permalink"
                          v-for="(item, index) in value"
                          :key="index" >
                    <div class="game-item__logo">
                        <img :src="item.thumbnail" loading="lazy" alt="" />
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
    import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_popular_slots",
        props: {
            value: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                play: '',
                allSlots: '',
                popularSlots: '',
                rating: ''
            }
        },
        mounted() {
            this.play = TRANSLATE.PLAY.uk
            this.allSlots = TRANSLATE.ALL_SLOTS.uk
            this.popularSlots = TRANSLATE.POPULAR_SLOTS.uk
            this.rating = TRANSLATE.RATING.uk
        }
    }
</script>

<style lang="scss" scoped>
    .games {
        --games-width: 224px;
        --games-gutter: 20px;
        background-color: var(--theme-bg-2);
        padding-top: 50px;
        padding-bottom: 15px;

        @media (max-width: 1229px) {
            padding-top: 32px;
        }
    }

    .games__container {
        overflow-x: auto;
        display: flex;
        justify-content: space-between;
        margin-left: calc(var(--games-gutter) / -2);
        margin-right: calc(var(--games-gutter) / -2);
        margin-bottom: 16px;

        @media (max-width: 1229px) {
            margin-right: calc(var(--side-gutters) * -1);
        }

        &:after {
            content: '';
            flex: auto;
        }

        .game-item {
            flex-shrink: 0;
            flex-basis: var(--games-width);
            margin-left: calc(var(--games-gutter) / 2);
            margin-right: calc(var(--games-gutter) / 2);
            position: relative;
        }
    }

    .game-item {
        background-color: #fff;
        width: var(--games-width);
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        color: currentColor;
        text-decoration: none;
    }

    .game-item__logo {
        overflow: hidden;
        border-radius: 10px;

        img {
            width: 100%;
            vertical-align: top;
        }
    }
</style>
