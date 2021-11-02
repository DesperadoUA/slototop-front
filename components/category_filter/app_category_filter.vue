<template>
    <div class="category-filter">
        <div class="category-filter__container container">
            <span class="category-filter-item">🧨 Все казино</span>
            <span class="category-filter-item">🧨 Новые казино</span>
            <span class="category-filter-item">🧨 Все казино</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-category-filter",
        props: {
        },
        data(){
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
.category-filter {
    background-color: var(--theme-bg-3);
    padding-top: 40px;

    @media (min-width: 992px) {
        padding-top: 50px;
    }
}

.category-filter__container {
    display: flex;
    flex-wrap: wrap;
}

.category-filter-item {
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 4px 20px rgba(2, 19, 62, .2);
    border-radius: 8px;
    margin-right: 16px;
    padding: 8px 23px;
    font-size: 15px;
    line-height: 1.2;
    font-weight: 500;
    border: 1px solid transparent;
    transition: var(--transition-default);

    &:hover,
    &.is-active {
        border-color: #f63f6c;
    }
}
</style>
