<template>
    <div class="category-filter">
        <div class="category-filter__container container">
            <NuxtLink class="category-filter-item"
                  v-for="(item, index) in value"
                  :key="index"
                      :to="item.permalink"
            >{{item.title}}</NuxtLink>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-category-filter",
        props: {
            value: {
                type: Array,
                default: []
            },
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

    a {
        text-decoration: none;
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
    color: currentColor;
    border: 1px solid transparent;
    transition: var(--transition-default);

    &:hover,
    &.is-active {
        border-color: #f63f6c;
        box-shadow: none;
    }
}
</style>
