<template>
    <div :class="stateMenu">
        <nav class="mobile-menu">
            <ul class="main-nav__list">
                <li v-for="(item, index) in settings" @click="closeMenu"
                  :key="index">
                    <NuxtLink no-prefetch :to="item.value_1" class="main-nav__link">
                        {{item.value_2}}
                    </NuxtLink>
                    <ul v-if="item.child.length !== 0" class="main-nav__drop">
                        <li v-for="(itemDrop, indexDrop) in item.child" :key="indexDrop">
                            <NuxtLink :to="itemDrop.value_1" class="main-nav__drop_link">{{itemDrop.value_2}}</NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>

        <div class="navbar__btn"
             aria-expanded="false"
             aria-label="Menu Button"
             @click="menuActivate"
             role="button">
            <span class="bar"></span>
        </div>
    </div>
</template>
<script>
    export default {
        name: "app-menu",
        data(){
            return {
                settings: []
            }
        },
        async mounted(){
          const data = {lang: 1}
          await this.$store.dispatch('settings/setSettings', data)
          const settings = this.$store.getters['settings/getSettings']
          if(settings.length !== 0) {
             this.settings = settings.filter(item => item.key === 'header_menu' )[0].value
          }
        },
        methods: {
            menuActivate(){
                this.$store.dispatch('common/setMobileMenu', !this.$store.getters['common/getMobileMenu'])
            },
            closeMenu(){
                this.$store.dispatch('common/setMobileMenu', false)
            }
        },
        computed: {
            stateMenu(){
                return this.$store.getters['common/getMobileMenu']
                           ? 'main-nav is-menu-open'
                           : 'main-nav'
            }
        }
    }
</script>

<style lang="scss">
@keyframes expand-menu {
    from {
        transform: translateX(-100%);
        opacity: .5;
    }
}

.main-nav {
    @media (min-width: 992px) {
        margin-right: 10px;
        max-width: 33.333%;
    }
}

.main-nav__list {
    margin: 0;
    padding: 0;
    list-style: none;

    @media (min-width: 992px) {
        display: flex;
        flex-wrap: wrap;
    }

    > li {
        position: relative;

        @media (max-width: 991px) {
            margin-bottom: 24px;
        }

        @media (min-width: 992px) {
            &:hover {
                .main-nav__link {
                    opacity: 1;
                }

                .main-nav__drop {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }

        &:not(:first-child) {
            @media (min-width: 992px) {
                margin-left: 32px;
            }
        }
    }
}

.main-nav__link {
    color: var(--theme-cr-2);
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    display: inline-flex;
    vertical-align: middle;
    align-items: center;

    @media (max-width: 991px) {
        color: #fff;
        position: relative;
    }

    &:after {
        content: '';
        position: absolute;
        transition: var(--transition-default);
        left: 0;
        right: 0;
        bottom: 0;
        height: 2px;
        background-color: var(--theme-cr-3);
        opacity: 0;
    }

    &:hover,
    .active > &,
    .is-active > &,
    &.nuxt-link-exact-active,
    &.is-active {
        &:after {
            opacity: 1;
        }
    }

    @media (min-width: 992px) {
        &:hover {
            opacity: 1;
        }
    }
}

.main-nav__drop {
    position: absolute;
    min-width: 276px;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--theme-bg-4);
    padding: 14px 24px 13px;
    border-radius: 0 0 8px 8px;
    z-index: 999;
    transition: var(--transition-default);
    opacity: 0;
    visibility: hidden;

    > li {
        font-size: 15px;
        line-height: 1.867;
    }

    a {
        color: var(--theme-cr-txt-cms);
        text-decoration: none;

        @media (min-width: 992px) {
            &:hover {
                color: var(--theme-cr-txt);
            }
        }
    }
}

.navbar__btn {
    position: fixed;
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    border: 0;
    cursor: pointer;
    z-index: 1002;
    display: none;

    @media (max-width: 991px) {
        display: flex;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        width: 54px;
    }

    .bar:before,
    .bar:after,
    &:after,
    &:before {
        content: '';
        list-style: none;
        position: absolute;
        background-color: var(--theme-cr-2);
        margin-left: auto;
        margin-right: auto;
        width: 20px;
        height: 3px;
        transform: translateY(-50%);
        transition: var(--transition-default);
    }

    &:before {
        top: 36.25%;
        border-radius: 2px;
    }

    &:after {
        top: 50%;
        border-radius: 2px;
    }

    .bar:before,
    .bar:after {
        width: 10px;
        top: 63.75%;
    }

    &:before,
    &:after,
    .bar:before {
        left: 50%;
        margin-left: -10px;
    }

    .bar:after {
        right: 50%;
        margin-right: -10px;
    }

    .is-menu-open &:before {
        background-color: #fff;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
    }
    .is-menu-open &:after {
        background-color: #fff;
        top: 50%;
        transform: translateY(-50%) rotate(-45deg);
    }

    .is-menu-open & .bar:before {
        left: 0;
        opacity: 0;
    }

    .is-menu-open & .bar:after {
        right: 0;
        opacity: 0;
    }
}

.mobile-menu {
    @media (max-width: 991px) {
        overflow: hidden;
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        height: 100vh;
        width: 293px;
        background: rgba(16, 29, 48, 0.9);
        box-shadow: 0 4px 20px rgba(2, 19, 62, 0.2);
        backdrop-filter: blur(30px);
        padding: 132px 53px 30px;
        display: none;
        flex-direction: column;

        @-moz-document url-prefix() {
            background-color: rgba(16, 29, 48, .97);
        }

        .is-menu-open & {
            display: flex;
            animation: expand-menu .4s ease-in-out;
        }
    }
}
</style>
