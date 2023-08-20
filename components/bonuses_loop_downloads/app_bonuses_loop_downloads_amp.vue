<template>
    <amp-script layout="container" :src="`${config.BASE_URL[config.LANG]}/js/amp-bonus.js`" class="sample">
        <section class="bonuses-casino">
            <div class="container">
                <div class="bonuses__container">
                    <article class="bonuses-item"
                        v-for="(item, index) in currentPosts"
                        :key="index"
                    >
                        <div class="bonuses-item__logo">
                            <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`">
                                <amp-img :src="item.casino.thumbnail" :alt="item.title" width="146" height="95" />
                            </NuxtLink>
                        </div>
                        <div class="bonuses-item__name">
                            <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`">
                                {{item.title}}
                            </NuxtLink>
                        </div>
                        <div class="bonuses-item__val">{{item.value}}</div>
                        <div class="bonuses-tags">
                            <NuxtLink class="bonuses-tag"
                                v-for="(item_cat, index_cat) in item.type_bonus"
                                :key="index_cat"
                                :to="`${config.AMP_PREFIX}${item_cat.permalink}`"
                            >{{item_cat.title}}</NuxtLink>
                        </div>

                        <div class="bonuses-item__btns">
                            <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`" class="hidden-sm bonuses-item__btn btn-secondary">
                                {{translates.READ_MORE[config.LANG]}}
                            </NuxtLink>
                            <a :href="getRef(item)" class="bonuses-item__btn btn-primary"
                                    v-if="item.close === 0"
                            >{{translates.GET_BONUS[config.LANG]}}</a>
                            <span class="bonuses-item__btn fake-btn-secondary" v-else>{{translates.BONUS_INVALID[config.LANG]}}</span>
                        </div>
                    </article>
                </div>
                <div class="loadContainer"></div>
            </div>
            <div class="items-more">
                <button 
                    :data-apiUrl="config.API_URL[config.LANG]" 
                    :data-postsOnQuery="numberPostOnQuery"
                    :data-ampPrefix="config.AMP_PREFIX"
                    :data-post-type="post_type"
                    :data-post-url="post_url"
                    v-if="value.length > (numberPostOnQuery*postCurrentPage)"
                    class="btn-secondary loadMoreBtn"
                >{{translates.SHOW_MORE[config.LANG]}}
                </button>
            </div>
        </section>
    </amp-script>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
    export default {
        name: "app_bonuses_amp",
        props: {
            value: {
                type: Array,
                default: []
            },
            post_type: {
               default: 'page',
               type: String
            },
            post_url: {
                default: 'bonuses',
                type: String
            }
        },
        mixins: [translateMixin],
        data(){
            return {
                numberPostOnQuery: 10,
                postCurrentPage: 1,
            }
        },
        computed: {
            currentPosts() {
               return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        },
        methods: {
            getRef(item) {
                return Helper.getRef(item)
            },
        }
    }
</script>
