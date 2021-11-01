<template>
    <div class="page-banner">
        <div class="page-banner__container">
            <h1 class="page-banner__ttl">{{title}}</h1>
            <p class="page-banner__txt" v-if="shortDesc !== ''">{{shortDesc}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-page-banner",
        props: {
            title: {
                type: String,
                default: ''
            },
            shortDesc: {
                type: String,
                default: ''
            }
        },
        data(){
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
.page-banner {
    background-color: #0b1556;
    background-image: url(/img/bg-banner-mob.jpg);
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    color: var(--page-banner-txt-cr);
    min-height: 395px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 15px;
    line-height: 1.5;
    padding-left: 16px;
    padding-right: 16px;

    @media (min-width: 720px) {
        background-image: url(/img/bg-banner.jpg);
    }

    @media (min-width: 992px) {
        min-height: 370px;
        font-size: 16px;
    }
}

.page-banner__container {
    max-width: var(--container--cms);
}

.page-banner__ttl {
    font-weight: 900;
    font-size: 26px;
    line-height: 1.172;
    margin-bottom: 28px;

    @media (min-width: 992px) {
        font-size: 32px;
    }
}

.page-banner__txt {
    text-shadow: 0 2px 4px rgba(#000, .2);
    opacity: .8;
    margin-bottom: 5px;
}
</style>
