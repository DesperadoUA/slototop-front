<template>
<div class="casino-detail">
    <div class="container">
        <table class="detail-table">
            <tr class="detail-row" v-if="value.currency.length !== 0">
                <th class="detail-row__heading">{{currency}}</th>

                <td class="detail-row__content">
                    <NuxtLink class="detail-item"
                              v-for="(item, index) in value.currency"
                              :key="index"
                              :to="item.permalink"
                    >{{item.sub_title}}</NuxtLink>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.payments.length !== 0">
                <th class="detail-row__heading">{{paymentMethods}}</th>

                <td class="detail-row__content">
                    <NuxtLink class="detail-item"
                              v-for="(item, index) in value.payments"
                              :key="index"
                              :to="item.permalink"
                    >{{item.title}}</NuxtLink>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.country.length !== 0">
                <th class="detail-row__heading">{{acceptPlayers}}</th>

                <td class="detail-row__content">
                    <NuxtLink class="detail-item --flag"
                              v-for="(item, index) in value.country"
                              :key="index"
                              :to="item.permalink"
                    >
                        <img :src="item.thumbnail" :alt="item.title" width="25" height="18">
                    </NuxtLink>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.min_payments !== ''">
                <th class="detail-row__heading">{{minPayment}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.min_payments}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.min_deposit !== ''">
                <th class="detail-row__heading">{{minDeposit}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.min_deposit}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.chat !== ''">
                <th class="detail-row__heading">{{chat}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.chat}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.withdrawal !== ''">
                <th class="detail-row__heading">{{withdrawal}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.withdrawal}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.year !== ''">
                <th class="detail-row__heading">{{yearFoundation}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.year}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.number_games !== ''">
                <th class="detail-row__heading">{{numberGames}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.number_games}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.licenses.length !== 0">
                <th class="detail-row__heading">{{license}}</th>

                <td class="detail-row__content">
                    <NuxtLink class="detail-item"
                       v-for="(item, index) in value.licenses"
                       :key="index"
                       :to="item.permalink"
                    >{{item.title}}</NuxtLink>
                </td>
            </tr>
            <tr class="detail-row">
                <th class="detail-row__heading">{{contacts}}</th>

                <td class="detail-row__content">
                    <span class="detail-item" v-if="value.phone !== ''">{{value.phone}}</span>
                    <span class="detail-item" v-if="value.site !== ''">{{value.site}}</span>
                    <span class="detail-item" v-if="value.email !== ''">{{value.email}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.vendors.length !== 0">
                <th class="detail-row__heading">{{platforms}}</th>

                <td class="detail-row__content">
                    <NuxtLink class="detail-item"
                              v-for="(item, index) in value.vendors"
                              :key="index"
                              :to="item.permalink"
                    >{{item.title}}</NuxtLink>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.technology.length !== 0">
                <th class="detail-row__heading">{{technology}}</th>

                <td class="detail-row__content">
                    <NuxtLink class="detail-item"
                              v-for="(item, index) in value.technology"
                              :key="index"
                              :to="item.permalink"
                    >{{item.title}}</NuxtLink>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.language.length !== 0">
                <th class="detail-row__heading">{{languages}}</th>

                <td class="detail-row__content">
                    <NuxtLink class="detail-item"
                              v-for="(item, index) in value.language"
                              :key="index"
                              :to="item.permalink"
                    >{{item.title}}</NuxtLink>
                </td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
    import TRANSLATE from '~/helpers/translate'
    export default {
        name: "app-casino-detail",
        props: {
            value: {
                type: Object,
                default: {}
            }
        },
        data(){
            return {
                currency: '',
                paymentMethods: '',
                acceptPlayers: '',
                minPayment: '',
                minDeposit: '',
                chat: '',
                withdrawal: '',
                yearFoundation: '',
                numberGames: '',
                license: '',
                contacts: '',
                platforms: '',
                technology: '',
                languages: ''
            }
        },
        mounted() {
            this.currency = TRANSLATE.CURRENCY.ru
            this.paymentMethods = TRANSLATE.PAYMENT_METHODS.ru
            this.acceptPlayers = TRANSLATE.ACCEPTS_PLAYERS.ru
            this.minPayment = TRANSLATE.MIN_PAYMENT.ru
            this.minDeposit = TRANSLATE.MIN_DEPOSIT.ru
            this.chat = TRANSLATE.CHAT.ru
            this.withdrawal = TRANSLATE.WITHDRAWAL.ru
            this.yearFoundation = TRANSLATE.YEAR_FOUNDATION.ru
            this.numberGames = TRANSLATE.NUMBER_GAMES.ru
            this.license = TRANSLATE.LICENSE.ru
            this.contacts = TRANSLATE.CONTACTS.ru
            this.platforms = TRANSLATE.PLATFORMS.ru
            this.technology = TRANSLATE.TECHNOLOGY.ru
            this.languages = TRANSLATE.LANGUAGES.ru
        }
    }
</script>

<style lang="scss">
</style>
