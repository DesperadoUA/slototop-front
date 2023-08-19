<template>
<div class="casino-detail">
    <div class="container">
        <table class="detail-table">
            <tr class="detail-row" v-if="value.commission !== ''">
                <th class="detail-row__heading">{{translates.COMMISSION[config.LANG]}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.commission}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.withdrawal_period !== ''">
                <th class="detail-row__heading">{{translates.WITHDRAWAL[config.LANG]}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.withdrawal_period}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.withdrawal !== ''">
                <th class="detail-row__heading">{{translates.WITHDRAWAL_POSSIBILITY[config.LANG]}}</th>

                <td class="detail-row__content">
                    <span class="detail-item">{{value.withdrawal}}</span>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.currency.length !== 0">
                <th class="detail-row__heading">{{translates.CURRENCY[config.LANG]}}</th>
                <td class="detail-row__content">
                    <NuxtLink class="detail-item"
                              v-for="(item, index) in value.currency"
                              :key="index"
                              :to="`${config.AMP_PREFIX}${item.permalink}`"
                    >{{item.sub_title}}</NuxtLink>
                </td>
            </tr>
            <tr class="detail-row" v-if="value.site !== ''">
                <th class="detail-row__heading">{{translates.SITE[config.LANG]}}</th>
                <td class="detail-row__content">
                  <span class="detail-item">{{value.site}}</span>
                </td>
          </tr>
            <tr class="detail-row" v-if="value.type_payment.length !== 0">
                <th class="detail-row__heading">{{translates.TYPE[config.LANG]}}</th>
                <td class="detail-row__content">
                    <NuxtLink class="detail-item"
                              v-for="(item, index) in value.type_payment"
                              :key="index"
                              :to="`${config.AMP_PREFIX}${item.permalink}`"
                    >{{item.title}}</NuxtLink>
                </td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
    import translateMixin from '~/mixins/translate'
    export default {
        name: "app-payment-detail",
        props: {
            value: {
                type: Object,
                default: {}
            }
        },
        mixins: [translateMixin],
        data(){
            return {}
        }
    }
</script>

<style lang="scss">
</style>
