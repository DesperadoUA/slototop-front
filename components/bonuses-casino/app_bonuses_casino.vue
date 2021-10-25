<template>
    <div class="bonuses-casino">
        <div class="container">
            <div class="bonuses-casino__heading">
                <span class="badge-top">Топ 10</span>
                <h2 class="bonuses-casino__ttl">Бонусы казино</h2>

                <NuxtLink no-prefetch to="/slots" class="link-primary">Все бонусы</NuxtLink>
            </div>

            <div class="bonuses__container">
                <div class="bonuses-item">
                    <div class="bonuses-item__logo">
                        <img src="/img/slotoking.png" alt="">
                    </div>
                    <div class="bonuses-item__name">Бонус от Slotoking</div>
                    <div class="bonuses-item__val">150% + 25 FS</div>
                    <div class="bonuses-tags">
                        <div class="bonuses-tag">Бонус на 1-й депозит</div>
                        <div class="bonuses-tag">Бездепозитный бонус</div>
                        <div class="bonuses-tag">Cashback</div>
                        <div class="bonuses-tag">VIP-предложения</div>
                        <div class="bonuses-tag">Другие</div>
                    </div>

                    <div class="bonuses-item__btns">
                        <a href="" class="bonuses-item__btn btn-secondary">Подробнее</a>
                        <a href="" class="bonuses-item__btn btn-primary">Получить бонус</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
.bonuses-casino {
    --bonuses-width: 50%;
    --bonuses-gutter: 20px;
    background-color: var(--theme-bg-3);
    padding-top: 32px;
    padding-bottom: 33px;

    @media (min-width: 992px) {
        padding-top: 50px;
        padding-bottom: 44px;
    }
}

.badge-top {
    background-color: #3ff6bf;
    border-radius: 10px;
    text-transform: uppercase;
    font-family: var(--alt-font-family);
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    padding: 11px 11px 9px;
    color: var(--theme-cr-2);
    display: inline-block;
    margin-right: 12px;
}

.bonuses-casino__heading {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .link-primary {
        margin-left: auto;
    }
}

.bonuses-casino__ttl {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 900;
    margin-bottom: 0;
    padding-bottom: 3px;

    @media (min-width: 992px) {
        font-size: 24px;
    }
}

.bonuses__container {
    @media (min-width: 992px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-left: calc(var(--bonuses-gutter) / -2);
        margin-right: calc(var(--bonuses-gutter) / -2);
    }

    .bonuses-item {
        margin-bottom: 17px;

        @media (min-width: 992px) {
            flex-shrink: 0;
            flex-basis: calc(var(--bonuses-width) - var(--bonuses-gutter));
            margin-left: calc(var(--bonuses-gutter) / 2);
            margin-right: calc(var(--bonuses-gutter) / 2);
            margin-bottom: 26px;
        }
    }
}

.bonuses-item {
    background-color: #fff;
    box-shadow: 0 4px 20px rgba(#02133e, .2);
    border-radius: 10px;
    padding: 10px;
    display: grid;
    grid-template-areas:    "bonuses-logo bonuses-name bonuses-name"
                            "bonuses-logo bonuses-val bonuses-val"
                            "bonuses-tags bonuses-tags bonuses-tags"
                            "bonuses-btns bonuses-btns bonuses-btns";
    grid-template-columns: 158px 1fr 1fr;
}

.bonuses-item__logo {
    grid-area: bonuses-logo;
    margin-bottom: 16px;
}

.bonuses-item__name {
    align-self: end;
    grid-area: bonuses-name;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.015em;
    margin-bottom: 7px;
}

.bonuses-item__val {
    grid-area: bonuses-val;
    align-self: center;
    font-family: var(--alt-font-family);
    font-weight: 900;
    font-size: 28px;
    color: var(--theme-cr-3);
    margin-bottom: 16px;
}

.bonuses-tags {
    grid-area: bonuses-tags;
}

.bonuses-tag {
    font-size: 11px;
    height: 24px;
    font-weight: 700;
    padding: 5px 8px;
    border: 1px solid rgba(13, 35, 66, .1);
    box-sizing: border-box;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
}

.bonuses-item__btns {
    grid-area: bonuses-btns;
    --btn-width: 50%;
    --btn-gutter: 10px;

    @media (min-width: 992px) {
        display: flex;
        margin-left: calc(var(--btn-gutter) / -2);
        margin-right: calc(var(--btn-gutter) / -2);

        .bonuses-item__btn {
            box-sizing: border-box;
            flex-shrink: 0;
            flex-basis: calc(var(--btn-width) - var(--btn-gutter));
            margin-left: calc(var(--btn-gutter) / 2);
            margin-right: calc(var(--btn-gutter) / 2);
        }
    }
}
</style>
