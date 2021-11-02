<template>
    <div class="breadcrumbs">
        <div class="container">
            <ul itemscope="itemscope" itemtype="https://schema.org/BreadcrumbList" class="breadcrumb-list">
                <li itemprop="itemListElement" itemscope="itemscope" itemtype="https://schema.org/ListItem" class="breadcrumb-item">
                    <a href="/"
                       itemtype="https://schema.org/Thing"
                       itemscope="itemscope" itemprop="item" id="homePage"
                       class="nuxt-link-active"><span itemprop="name">Sloto.top</span></a>
                    /
                    <meta itemprop="position" content="1">
                </li>
                <li itemprop="itemListElement" itemscope="itemscope" itemtype="https://schema.org/ListItem" class="breadcrumb-item">
                    <span itemtype="https://schema.org/Thing" itemscope="itemscope" itemprop="item" id="single">
                        <span itemprop="name">SlotoKing</span>
                    </span>
                    <meta itemprop="position" content="2">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_breadcrumbs",
        props: {
        },
        data() {
            return {
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
.breadcrumbs {
    background-color: var(--theme-bg-3);
    padding-top: 25px;
    padding-bottom: 20px;

    @media (min-width: 992px) {
        padding-top: 34px;
    }
}

.breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
}

.breadcrumb-item {
    font-size: 15px;
    line-height: 1.2;
    font-weight: 500;
    margin-right: 8px;
    color: var(--theme-cr-txt-cms);

    &:not(:first-child) {
        //margin-left: 8px;
    }

    a {
        color: var(--btn-primary);
        text-decoration: none;
        display: inline-block;
        margin-right: 5px;
    }
}

    .breadcrumb-list{}
</style>

