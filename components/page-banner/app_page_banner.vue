<template>
    <div class="page-banner">
        <div class="page-banner__container">
            <h2 class="page-banner__ttl">Какие бонусы казино предлагают</h2>
            <p class="page-banner__txt">Бонусы и акции в лучших онлайн казино, актуальные промокод и информация о бонусах украинских интернет клубов</p>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.page-banner {
    background-color: #0b1556;
    background-image: url(/img/bg-banner-mob.jpg);
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    color: var(--page-banner-txt-cr);
    min-height: 370px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 15px;
    line-height: 1.5;

    @media (min-width: 720px) {
        background-image: url(/img/bg-banner.jpg);
    }

    @media (min-width: 992px) {
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
