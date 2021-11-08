<template>
    <div class="game-symbols">
        <div class="container">
            <h2>Символы игрового автомата Razor Shark</h2>

            <div class="game-symbols__container">
                <div class="symbols-item">
                    <img class="symbols-item__img" src="/img/bg-banner-mob.jpg" alt="">

                    <ul class="symbols-item__txt">
                        <li><strong class="mark">5</strong> <span class="dot">&#183;</span> 300.00</li>
                        <li><strong class="mark">5</strong> <span class="dot">&#183;</span> 300.00</li>
                        <li><strong class="mark">5</strong> <span class="dot">&#183;</span> 300.00</li>
                    </ul>
                </div>

                <div class="symbols-item">
                    <img class="symbols-item__img" src="/img/bg-banner-mob.jpg" alt="">

                    <ul class="symbols-item__txt">
                        <li><strong class="mark">5</strong> <span class="dot">&#183;</span> 300.00</li>
                        <li><strong class="mark">5</strong> <span class="dot">&#183;</span> 300.00</li>
                        <li><strong class="mark">5</strong> <span class="dot">&#183;</span> 300.00</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scope>
.game-symbols {
    padding-top: 30px;
    --symbols-width: 33.333%;
    --symbols-gutter: 20px;
    --symbols-bottom-gutter: 22px;
}

.game-symbols__container {
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--symbols-gutter) / -2);
    margin-right: calc(var(--symbols-gutter) / -2);
    margin-bottom: calc(var(--symbols-bottom-gutter) * -1);

    .symbols-item {
        flex-shrink: 0;
        flex-basis: calc(var(--symbols-width) - var(--symbols-gutter));
        margin-left: calc(var(--symbols-gutter) / 2);
        margin-right: calc(var(--symbols-gutter) / 2);
    }
}

.symbols-item {
    display: flex;
    align-items: center;
    color: var(--theme-cr-txt-cms);
    margin-bottom: var(--symbols-bottom-gutter);

    .dot {
        display: inline-block;
        vertical-align: middle;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        text-indent: -9999px;
        background-color: currentColor;
        margin: -2px 6px 0;
    }
}

.symbols-item__img {
    width: 100px;
    border-radius: 8px;
    margin-right: 16px;
}

.symbols-item__txt {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 24px;

    .mark {
        color: var(--theme-cr-2);
    }
}
</style>
