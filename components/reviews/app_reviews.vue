<template>
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

            <div class="" v-if="value.length > (numberPostOnQuery*postCurrentPage)">
                <button type="button" class="reviews__show-more btn-secondary"  @click="postShowMore">
                    {{translates.SHOW_MORE[config.LANG]}}
                </button>
            </div>
        </div>
    </section>
</template>

<script>
    import translateMixin from '~/mixins/translate'
    export default {
        name: "app_reviews",
        props: ['value', 'title'],
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
        },
        methods: {
            postShowMore(){
                this.postCurrentPage += 1
            }
        }
    }
</script>

<style lang="scss">
.reviews {
    background-color: var(--theme-bg-3);
    padding-top: 30px;
    padding-bottom: 40px;

    @media (min-width: 992px) {
        padding-top: 50px;
        padding-bottom: 70px;
    }

    .faq + & {
        margin-top: 20px;
    }
}

.review-item {
    background-color: var(--review-bg);
    box-shadow: 0 4px 20px rgba(#02133e, .2);
    border-radius: 10px;
    color: var(--theme-cr-txt-cms);
    padding: 15px 35px 15px 15px;
    margin-bottom: 18px;

    @media (min-width: 992px) {
        padding: 22px 55px 22px 20px;
    }
}

.review-item__author {
    font-size: 15px;
    line-height: 1.2;
    font-weight: 700;
    color: var(--theme-cr-2);
    margin-bottom: 6px;
}

.review-item__rating {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
    margin-left: -2px;
}

.reviews__show-more {
    margin-top: 30px;
    width: 200px;
    display: flex;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 992px) {
        margin-top: 40px;
    }
}
</style>
