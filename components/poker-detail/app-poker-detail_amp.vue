<template>
<div class="casino-detail">
    <div class="container">
        <table class="detail-table">
            <tr class="detail-row" v-if="value.currency.length !== 0">
                <th class="detail-row__heading">{{translates.CURRENCY[config.LANG]}}</th>

                <td class="detail-row__content">
                    <span class="detail-item"
                              v-for="(item, index) in value.currency"
                              :key="index"
                    >{{item.sub_title}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.payments.length !== 0">
                <th class="detail-row__heading">{{translates.PAYMENT_METHODS[config.LANG]}}</th>

                <td class="detail-row__content">
                    <span class="detail-item"
                              v-for="(item, index) in value.payments"
                              :key="index"
                    >{{item.title}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.country.length !== 0">
                <th class="detail-row__heading">{{translates.ACCEPTS_PLAYERS[config.LANG]}}</th>

                <td class="detail-row__content">
                    <span class="detail-item --flag"
                              v-for="(item, index) in value.country"
                              :key="index">
                        <amp-img :src="item.thumbnail" :alt="item.title" width="25" height="18" />
                    </span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.min_payments !== ''">
                <th class="detail-row__heading">{{translates.MIN_PAYMENT[config.LANG]}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.min_payments}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.min_deposit !== ''">
                <th class="detail-row__heading">{{translates.MIN_DEPOSIT[config.LANG]}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.min_deposit}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.withdrawal !== ''">
                <th class="detail-row__heading">{{translates.WITHDRAWAL[config.LANG]}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.withdrawal}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.year !== ''">
                <th class="detail-row__heading">{{translates.YEAR_FOUNDATION[config.LANG]}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.year}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.licenses.length !== 0">
                <th class="detail-row__heading">{{translates.LICENSE[config.LANG]}}</th>

                <td class="detail-row__content">
                    <span class="detail-item"
                       v-for="(item, index) in value.licenses"
                       :key="index"
                    >{{item.title}}</span>
                </td>
            </tr>
            <tr class="detail-row">
                <th class="detail-row__heading">{{translates.CONTACTS[config.LANG]}}</th>

                <td class="detail-row__content">
                    <span class="detail-item" v-if="value.phone !== ''">{{value.phone}}</span>
                    <span class="detail-item" v-if="value.site !== ''">{{value.site}}</span>
                    <span class="detail-item" v-if="value.email !== ''">{{value.email}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.technology.length !== 0">
                <th class="detail-row__heading">{{translates.TECHNOLOGY[config.LANG]}}</th>

                <td class="detail-row__content">
                    <span class="detail-item"
                              v-for="(item, index) in value.technology"
                              :key="index"
                    >{{item.title}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.language.length !== 0">
                <th class="detail-row__heading">{{translates.LANGUAGES[config.LANG]}}</th>

                <td class="detail-row__content">
                    <span class="detail-item"
                              v-for="(item, index) in value.language"
                              :key="index"
                    >{{item.title}}</span>
                </td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
    import translateMixin from '~/mixins/translate'
    export default {
        name: "app-casino-detail_amp",
        props: {
            value: {
                type: Object,
                default: {}
            }
        },
        mixins: [translateMixin]
    }
</script>
