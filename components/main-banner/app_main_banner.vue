<template>
    <div class="main-banner">
        <div class="main-banner__wrapper">
            <div class="main-banner__container" :style="moveSlider">
                <div class="banner-item" v-for="(item, index) in value" :key="index">
                    <!--<div class="banner-item__elements">
                        <img class="banner-item__logo" src="/img/logo-reel-emperor.svg" alt="">
                        <div class="banner-item__ttl">Приветственный пакет </div>
                        <div class="banner-item__bonus">400 EUR + 250 FS</div>
                        <a href="" class="btn-tertiary &#45;&#45;reel">ПОЛУЧИТЬ БОНУС</a>
                    </div>-->
                    <NuxtLink :to="item.value_1" >
                        <img :src="item.src" alt="">
                    </NuxtLink>
                </div>
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
            currentSlide: 0,
            currentDelta: 0,
            interval: 5000,
            timer: {},
            delta: {
                DC: 1240
            }
        }
    },
    computed: {
        moveSlider(){
            return 'margin-left:'+this.currentDelta+'px'
        }
    },
    beforeDestroy(){
        clearInterval(this.timer)
    },
    mounted() {
        if(this.value.length > 1) {
             this.timer = setInterval(() => {
                this.currentSlide++
                if(this.currentSlide === this.value.length) this.currentSlide = 0
                this.currentDelta = -this.currentSlide*this.delta.DC
            }, this.interval);
        }
    }
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
    margin: 0 auto;
    transition: 0.7s;
}

.banner-item {
    flex-shrink: 0;
    flex-basis: var(--banner-width);
    width: var(--banner-width);
    position: relative;
    margin-left: calc(var(--banner-gutter) / 2);
    margin-right: calc(var(--banner-gutter) / 2);
}
.main-banner__wrapper {
    margin: 0 auto;
    width: 1240px;
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
