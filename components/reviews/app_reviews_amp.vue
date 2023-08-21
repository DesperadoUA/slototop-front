<template>
<amp-script layout="container" :src="`${config.BASE_URL[config.LANG]}/js/amp-review.js`" class="sample">
    <section class="reviews"
             itemprop="review"
             itemscope itemtype="http://schema.org/Review">
        <div itemprop="itemReviewed"
             itemscope
             itemtype="https://schema.org/Organization">
            <meta itemprop="name" :content="title"/>
        </div>

        <div class="container">
            <h2 class="reviews__title" itemprop="name">{{title}}</h2>

            <div class="review-item" v-for="(item, index) in currentPosts"
                 :key="index">
                <div class="review-item__author" itemprop='author' itemscope='' itemtype='http://schema.org/Person'>
                    <span itemprop='name'>{{item.review_name}}</span>
                </div>
                <div class="review-item__rating">
                    <div class="star-rating">
                        <div class="star-rating__val" :style="'width: '+item.review_rating+'%;'">

                        </div>
                    </div>
                    <strong class="slot-item__stats-val">{{(item.review_rating/10).toFixed(1)}}/10</strong>
                </div>
                <div class="review-item__desc" itemprop='reviewBody'>
                    {{item.review_text}}
                </div>
            </div>
            <div class="loadContainer"></div>
            <div class="" v-if="value.length > (numberPostOnQuery*postCurrentPage)">
                <button
                    :data-apiUrl="`${config.API_URL[config.LANG]}${post_type}/review`" 
                    :data-postsOnQuery="numberPostOnQuery"
                    :data-ampPrefix="config.AMP_PREFIX"
                    :data-post-type="post_type"
                    :data-post-url="post_url" 
                    type="button" 
                    class="reviews__show-more btn-secondary loadMoreBtn" >
                    {{translates.SHOW_MORE[config.LANG]}}
                </button>
            </div>
        </div>
    </section>
</amp-script>
</template>

<script>
    import translateMixin from '~/mixins/translate'
    export default {
        name: "app_reviews",
        props: {
            title: {
               default: "",
               type: String 
            },
            value: {
                default: [],
                type: Array
            },
            post_type: {
               require: true,
               type: String
            },
            post_url: {
                require: true,
                type: String
            }
        },
        mixins: [translateMixin],
        data(){
            return {
                numberPostOnQuery: 5,
                postCurrentPage: 1
            }
        },
        computed: {
            currentPosts() {
                return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        }
    }
</script>