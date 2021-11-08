<template>
    <div class="game-screenshots">
        <div class="container">
            <h2 class="game-screenshots__ttl">Скриншоты Razor Shark</h2>

            <div class="game-screenshots__container">
                <div class="screenshots-item">
                    <img src="/img/slotoking.png" alt="">
                </div>

                <div class="screenshots-item">
                    <img src="/img/slotoking.png" alt="">
                </div>

                <div class="screenshots-item">
                    <img src="/img/slotoking.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scope>
.game-screenshots {
    padding-top: 50px;
    padding-bottom: 30px;
    --screenshots-width: 33.333%;
    --screenshots-gutter: 20px;
}

.game-screenshots__container {
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--screenshots-gutter) / -2);
    margin-right: calc(var(--screenshots-gutter) / -2);

    .screenshots-item {
        flex-shrink: 0;
        flex-basis: calc(var(--screenshots-width) - var(--screenshots-gutter));
        margin-left: calc(var(--screenshots-gutter) / 2);
        margin-right: calc(var(--screenshots-gutter) / 2);
    }
}

.screenshots-item {
    background-color: var(--theme-bg-3);
    border-radius: 10px;
    overflow: hidden;

    img {
        width: 100%;
    }
}
</style>
