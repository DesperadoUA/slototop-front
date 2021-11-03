<template>
<div class="casino-detail">
    <div class="container">
        <div class="detail-row">
            <div class="detail-row__heading">
                <h4 class="detail-row__sub-ttl">Валюта</h4>
            </div>

            <div class="detail-row__content">
                <span class="detail-item">₴ - UAH</span>
                <span class="detail-item">$ - USD</span>
                <span class="detail-item">₽ - RUB</span>
            </div>
        </div>

        <div class="detail-row">
            <div class="detail-row__heading">
                <h4 class="detail-row__sub-ttl">Методы оплат</h4>
            </div>

            <div class="detail-row__content">
                <a href="" class="detail-item">B-Pay</a>
                <a href="" class="detail-item">EasyPay</a>
            </div>
        </div>

        <div class="detail-row">
            <div class="detail-row__heading">
                <h4 class="detail-row__sub-ttl">Методы выплат</h4>
            </div>

            <div class="detail-row__content">
                <a href="" class="detail-item --payment">LiqPay</a>
                <a href="" class="detail-item --payment">LiqPay</a>
            </div>
        </div>

        <div class="detail-row">
            <div class="detail-row__heading">
                <h4 class="detail-row__sub-ttl">Принимает игроков</h4>
            </div>

            <div class="detail-row__content">
                <span class="detail-item --flag"><img src="/img/flag-ua.svg" alt=""></span>
                <span class="detail-item --flag"><img src="/img/flag-ua.svg" alt=""></span>
                <span class="detail-item --flag"><img src="/img/flag-ua.svg" alt=""></span>
            </div>
        </div>

        <div class="detail-row">
            <div class="detail-row__heading">
                <h4 class="detail-row__sub-ttl">Мин. выплата</h4>
            </div>

            <div class="detail-row__content">
                <span class="detail-item">100 UAH</span>
                <span class="detail-item">100 UAH</span>
            </div>
        </div>

        <div class="detail-row">
            <div class="detail-row__heading">
                <h4 class="detail-row__sub-ttl">Мин. депозит</h4>
            </div>

            <div class="detail-row__content">
                <span class="detail-item">100 UAH</span>
            </div>
        </div>

        <div class="detail-row">
            <div class="detail-row__heading">
                <h4 class="detail-row__sub-ttl">Лицензия</h4>
            </div>

            <div class="detail-row__content">
                <a href="" class="detail-item">Кюрасао (Нидерландские Антильские острова)</a>
                <a href="" class="detail-item">Украина</a>
            </div>
        </div>

        <div class="detail-row">
            <div class="detail-row__heading">
                <h4 class="detail-row__sub-ttl">Контакты</h4>
            </div>

            <div class="detail-row__content">
                <span class="detail-item">(380) 94 71 17 116</span>
                <span class="detail-item">support@slotoking.com</span>
            </div>
        </div>

        <div class="detail-row">
            <div class="detail-row__heading">
                <h4 class="detail-row__sub-ttl">Платформы</h4>
            </div>

            <div class="detail-row__content">
                <a href="" class="detail-item">Ainsworth</a>
                <a href="" class="detail-item">Barcrest Games</a>
            </div>
        </div>
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
