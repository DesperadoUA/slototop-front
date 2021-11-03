<template>
<div class="casino-detail">
    <div class="container">
        <table class="detail-table">
            <tr class="detail-row">
                <th class="detail-row__heading">Валюта</th>

                <td class="detail-row__content">
                    <span class="detail-item">₴ - UAH</span>
                    <span class="detail-item">$ - USD</span>
                    <span class="detail-item">₽ - RUB</span>
                </td>
            </tr>

            <tr class="detail-row">
                <th class="detail-row__heading">Методы оплат</th>

                <td class="detail-row__content">
                    <a href="" class="detail-item">B-Pay</a>
                    <a href="" class="detail-item">EasyPay</a>
                </td>
            </tr>

            <tr class="detail-row">
                <th class="detail-row__heading">Методы выплат</th>

                <td class="detail-row__content">
                    <a href="" class="detail-item --payment">LiqPay</a>
                    <a href="" class="detail-item --payment">LiqPay</a>
                </td>
            </tr>

            <tr class="detail-row">
                <th class="detail-row__heading">Принимает игроков</th>

                <td class="detail-row__content">
                    <span class="detail-item --flag"><img src="/img/flag-ua.svg" alt=""></span>
                    <span class="detail-item --flag"><img src="/img/flag-ua.svg" alt=""></span>
                    <span class="detail-item --flag"><img src="/img/flag-ua.svg" alt=""></span>
                </td>
            </tr>

            <tr class="detail-row">
                <th class="detail-row__heading">Мин. выплата</th>

                <td class="detail-row__content">
                    <span class="detail-item">100 UAH</span>
                    <span class="detail-item">100 UAH</span>
                </td>
            </tr>

            <tr class="detail-row">
                <th class="detail-row__heading">Мин. депозит</th>

                <td class="detail-row__content">
                    <span class="detail-item">100 UAH</span>
                </td>
            </tr>

            <tr class="detail-row">
                <th class="detail-row__heading">Лицензия</th>

                <td class="detail-row__content">
                    <a href="" class="detail-item">Кюрасао (Нидерландские Антильские острова)</a>
                    <a href="" class="detail-item">Украина</a>
                </td>
            </tr>

            <tr class="detail-row">
                <th class="detail-row__heading">Контакты</th>

                <td class="detail-row__content">
                    <span class="detail-item">(380) 94 71 17 116</span>
                    <span class="detail-item">support@slotoking.com</span>
                </td>
            </tr>

            <tr class="detail-row">
                <th class="detail-row__heading">Платформы</th>

                <td class="detail-row__content">
                    <a href="" class="detail-item">Ainsworth</a>
                    <a href="" class="detail-item">Barcrest Games</a>
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
                type: Object
            }
        },
        data(){
            return {
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
</style>
