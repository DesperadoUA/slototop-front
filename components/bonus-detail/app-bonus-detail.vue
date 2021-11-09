<template>
<div class="casino-detail">
    <div class="container">
        <table class="detail-table">
            <tr class="detail-row" v-if="value.country.length !== 0">
                <th class="detail-row__heading">{{availablePlayers}}</th>

                <td class="detail-row__content">
                    <NuxtLink class="detail-item --flag"
                              v-for="(item, index) in value.country"
                              :key="index"
                              :to="item.permalink"
                    >
                        <img :src="item.thumbnail" :alt="item.title">
                    </NuxtLink>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.type_bonus.length !== 0">
                <th class="detail-row__heading">{{typeBonus}}</th>

                <td class="detail-row__content">
                    <NuxtLink class="detail-item"
                       v-for="(item, index) in value.type_bonus"
                       :key="index"
                       :to="item.permalink"
                    >{{item.title}}</NuxtLink>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.wager !== ''">
                <th class="detail-row__heading">{{wager}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.wager}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.number_use !== ''">
                <th class="detail-row__heading">{{numberUse}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.number_use}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.value_bonus !== ''">
                <th class="detail-row__heading">{{valueBonus}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.value_bonus}}</span>
                </td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
    import TRANSLATE from '~/helpers/translate'
    export default {
        name: "app-bonus-detail",
        props: {
            value: {
                type: Object,
                default: {}
            }
        },
        data(){
            return {
                typeBonus: '',
                wager: '',
                numberUse: '',
                availablePlayers: '',
                valueBonus: ''
            }
        },
        mounted() {
            this.typeBonus = TRANSLATE.TYPE_BONUS.ru
            this.wager = TRANSLATE.WAGER.ru
            this.numberUse = TRANSLATE.NUMBER_USE.ru
            this.availablePlayers = TRANSLATE.AVAILABLE_PLAYERS.ru
            this.valueBonus = TRANSLATE.VALUE_BONUS.ru
        }
    }
</script>

<style lang="scss">
</style>
