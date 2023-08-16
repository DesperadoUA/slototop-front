<template>
    <section :class="'games '+bg">
        <div class="container">
            <div class="slots__heading">
                <h2 class="slots__ttl" v-if="title">{{title}}</h2>
                <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}/${link}`" class="link-primary" v-if="link">
                    {{linkText}}
                </NuxtLink>
            </div>

            <div class="games__container flex-wrap">
                <div class="game-item" 
                          v-for="(item, index) in value"
                          :key="index" >
                    <div class="game-item__logo">
                        <a :href="`${config.AMP_PREFIX}/${item.permalink}`">
                            <amp-img :src="item.thumbnail" width="224" height="140" alt="" />
                        </a>
                    </div>

                    <div class="game-item__hover">
                        <span class="game-item__name">{{item.title}}</span>
                        <span class="game-item__category">{{item.vendor.title}}</span>
                        <NuxtLink class="btn-play" :to="`${config.AMP_PREFIX}${item.permalink}`">{{translates.PLAY[config.LANG]}}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import translateMixin from '~/mixins/translate'
    export default {
        name: "app_slots_amp",
        mixins: [translateMixin],
        props: {
            value: {
                type: Array,
                default: []
            },
            title: {
                type: String,
                default: undefined
            },
            link: {
                type: String,
                default: undefined
            },
            linkText: {
                type: String,
                default: undefined
            },
            bg: {
                type: String,
                default: ''
            }
        }
    }
</script>
