<template>
    <div class="main-banner">
        <div class="main-banner__container">
            <div class="banner-item">
                <!--<div class="banner-item__elements">
                    <img class="banner-item__logo" src="/img/logo-reel-emperor.svg" alt="">
                    <div class="banner-item__ttl">Приветственный пакет </div>
                    <div class="banner-item__bonus">400 EUR + 250 FS</div>
                    <a href="" class="btn-tertiary &#45;&#45;reel">ПОЛУЧИТЬ БОНУС</a>
                </div>-->
                <img src="/img/banner-reel.jpg" alt="">
            </div>

            <div class="banner-item">
                <img src="/img/banner-reel.jpg" alt="">
            </div>

            <div class="banner-item">
                <img src="/img/banner-reel.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "main_banner",
    props: {
        value: {
            type: Array,
            default: []
        }
    },
    data() {
        return {

        }
    },

}
</script>

<style lang="scss" scoped>
.main-banner {
    --banner-width: 1200px;
    --banner-gutter: 40px;
    padding-bottom: 38px;

    @media (min-width: 992px) {
        padding-bottom: 50px;
    }
}

.main-banner__container {
    display: flex;
    justify-content: center;
    margin-left: calc(var(--slots-gutter) / -2);
    margin-right: calc(var(--slots-gutter) / -2);
}

.banner-item {
    flex-shrink: 0;
    flex-basis: var(--banner-width);
    width: var(--banner-width);
    position: relative;
    margin-left: calc(var(--banner-gutter) / 2);
    margin-right: calc(var(--banner-gutter) / 2);
}
/*.banner-item__elements {
    position: absolute;
    top: 50%;
    left: 9.167%;
    transform: translateY(-50%);
    color: var(--theme-cr-txt-alt);
}
.banner-item__logo {
    margin-bottom: 10px;
}
.banner-item__ttl {
    font-size: 15px;
    line-height: 1.2;
    font-weight: 700;
    @media (min-width: 992px) {
        font-size: 24px;
    }
}
.banner-item__bonus {
    line-height: 1.2;
    font-size: 25px;
    font-family: var(--alt-font-family);
    margin-bottom: 15px;
    @media (min-width: 992px) {
        font-size: 44px;
        margin-bottom: 30px;
    }
}*/
</style>
