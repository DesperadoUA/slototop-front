<template>
<div class="casino-detail">
    <div class="container">
        <table class="detail-table">
            <tr class="detail-row" v-if="value.commission !== ''">
                <th class="detail-row__heading">{{commission}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.commission}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.withdrawal_period !== ''">
                <th class="detail-row__heading">{{withdrawal}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.withdrawal_period}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.withdrawal !== ''">
                <th class="detail-row__heading">{{withdrawalPossibility}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.withdrawal}}</span>
                </td>
            </tr>
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
        </table>
    </div>
</div>
</template>

<script>
    import TRANSLATE from '~/helpers/translate'
    export default {
        name: "app-payment-detail",
        props: {
            value: {
                type: Object,
                default: {}
            }
        },
        data(){
            return {
                withdrawal: '',
                commission: '',
                withdrawalPossibility: '',
                currency: ''
            }
        },
        mounted() {
            this.withdrawal = TRANSLATE.WITHDRAWAL.ru
            this.commission = TRANSLATE.COMMISSION.ru
            this.withdrawalPossibility = TRANSLATE.WITHDRAWAL_POSSIBILITY.ru
            this.currency = TRANSLATE.CURRENCY.ru
        }
    }
</script>

<style lang="scss">
</style>
