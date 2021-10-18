<template>
    <div class="slots">
        <div class="container">
            <div class="slots__heading">
                <h2 class="slots__ttl">{{newCasino}}</h2>
                <NuxtLink no-prefetch to="/reviews" class="link-primary">{{allCasino}}</NuxtLink>
            </div>

            <div class="slots__container">
                <NuxtLink no-prefetch :to="item.permalink"
                          class="slot-item"
                          v-for="(item, index) in value"
                          :key="index">
                    <div class="slot-item__logo">
                        <img :src="item.thumbnail" loading="lazy" alt="" />
                    </div>
                    <div class="slot-item__content">
                        <div class="slot-item__name">{{item.title}}</div>
                        <div class="slot-item__stats">
                            <strong class="slot-item__stats-val">{{item.rating}}/10</strong>
                        </div>
                    </div>

                    <div class="slot-item__btns">
                        <button class="slot-item__btn --blue">{{goTo}}</button>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_new_casino",
        props: {
            value: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                goTo: '',
                rating: '',
                newCasino: '',
                allCasino: ''
            }
        },
        filters: {
            classRating(item) {
                return Helper.classRating(item)
            }
        },
        mounted() {
            this.goTo = TRANSLATE.GO_TO.uk
            this.rating = TRANSLATE.RATING.uk
            this.newCasino = TRANSLATE.NEW_CASINO.uk
            this.allCasino = TRANSLATE.ALL_CASINO.uk
        }
    }
</script>

<style lang="scss">
.slots {
    --slots-width: 224px;
    --slots-gutter: 20px;
    background-color: var(--theme-bg-1);
    padding-bottom: 15px;

    .casinos + & {
        padding-top: 40px;
    }
}

.slots__heading {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 26px;

    @media (min-width: 768px) {
        justify-content: space-between;
    }

    .link-primary {
        @media (max-width: 767px) {
            display: none;
        }
    }
}

.slots__ttl {
    font-size: 20px;
    line-height: 1.358;
    font-weight: 900;
    margin-bottom: 0;

    @media (min-width: 992px) {
        font-size: 24px;
    }
}

.slots__container {
    overflow-x: auto;
    display: flex;
    justify-content: space-between;
    margin-left: calc(var(--slots-gutter) / -2);
    margin-right: calc(var(--slots-gutter) / -2);
    margin-bottom: 16px;

    @media (max-width: 1229px) {
        margin-right: calc(var(--side-gutters) * -1);
    }

    &:after {
        content: '';
        flex: auto;
    }

    .slot-item {
        flex-shrink: 0;
        flex-basis: var(--slots-width);
        margin-left: calc(var(--slots-gutter) / 2);
        margin-right: calc(var(--slots-gutter) / 2);
        position: relative;
    }
}

.slot-item {
    background-color: #fff;
    width: var(--slots-width);
    min-height: 260px;
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    color: currentColor;
    text-decoration: none;
}

.slot-item__logo {
    overflow: hidden;
    margin-bottom: 14px;
    padding: 5px;

    img {
        width: 100%;
        border-radius: 8px;
    }
}

.slot-item__casino-name {
    font-size: 18px;
    line-height: 1.389;
    font-weight: 700;
    text-align: center;
}

.slot-item__content {
    font-size: 14px;
    line-height: 1.357;
    text-align: center;
    margin-bottom: 17px;
    padding-left: 8px;
    padding-right: 8px;
}

.slot-item__txt {
    min-height: 86px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.slot-item__name {
    font-weight: 700;
    font-size: 15px;
    line-height: 1.389;
    margin-bottom: 1px;
}

.slot-item__stats {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.slot-item__divider {
    width: 1px;
    height: 23px;
    background: rgba(#281c4b, .2);
    border-radius: 1px;
    margin-left: 8px;
    margin-right: 8px;
}

.slot-item__stats-val {
    margin-left: 4px;
}

.slot-item__btns {
    margin-top: auto;
    overflow: hidden;
    border-radius: 0 0 10px 10px;
}

.slot-item__btn {
    color: #fff;
    font-family: var(--base-font-family);
    font-size: 16px;
    font-weight: 700;
    min-height: 40px;
    text-decoration: none;
    border: 0;
    padding: 3px 5px;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &.--green {
        background-color: var(--btn-secondary);

        &:hover {
            background-color: #009c3e;
        }
    }

    &.--blue {
        background-color: var(--btn-primary);

        &:hover {
            background-color: #0475dd;
        }
    }
}
</style>
