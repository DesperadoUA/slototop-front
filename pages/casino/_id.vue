<template>
  <div>
    <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
    <app_breadcrumbs :value="data.body.breadcrumbs" />
    <app_casino_card :value="data.body" />
    <app_close_disclaimer v-if="data.body.close === 1" :value="data.body.title" />
    <app_casino  v-if="data.body.close === 1"
                :value="data.body.casino"
                bg="--bg-gray"
                :title="recommendedCasinos" :linkText="allCasino" link="/casino" />
    <app_casino_detail :value="data.body" />
    <app_bonuses :value="data.body.bonuses"
                 :topTextShow="false"
                 :title="data.body.title | createTitle"
                 v-if="data.body.bonuses.length !== 0" />
    <div class="casino_content container">
        <div class="casino_content_left">
          <app_content :value="data.body.content" v-if="data.body.content !== ''" />
        </div>
        <div class="casino_content_right">
            <app_casino_aside :value="data.body.sidebar" />
        </div>
    </div>
    <app_casino_rating :value="data.body.casinoRating" :title="data.body.title" />
    <app_faq :value="data.body.faq" v-if="data.body.faq.length !== 0" />
    <app_reviews :title="'Отзывы'" :value="data.body.reviews" v-if="data.body.reviews.length !== 0"/>
    <app_slick_button :referal="data.body.ref"></app_slick_button>
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config/index'
    import TRANSLATE from '~/helpers/translate.json'
    import app_content from '~/components/content/app-content'
    import app_faq from '~/components/faq/app_faq'
    import app_bonuses from '~/components/bonuses-casino/app_bonuses_casino'
    import app_page_banner from '~/components/page-banner/app_page_banner'
    import app_breadcrumbs from '~/components/breadcrumbs/app_breadcrumbs'
    import app_casino_card from '~/components/casino_card/app-casino-card'
    import app_casino_detail from '~/components/casino-detail/app-casino-detail'
    import app_reviews from '~/components/reviews/app_reviews'
    import app_slick_button from '~/components/slick_button/app_slick_button'
    import app_casino_rating from '~/components/casino_rating/app-casino-rating'
    import app_close_disclaimer from '~/components/close-disclaimer/close-disclaimer'
    import app_casino from '~/components/casino/app_casino'
    import app_casino_aside from '~/components/casino-aside/app_casino_aside'

    export default {
        name: "app_single_casino",
        components: {app_content, app_breadcrumbs, app_casino_card, app_casino_detail, app_faq, app_bonuses, app_page_banner, app_reviews, app_slick_button, 
        app_casino_rating, app_close_disclaimer, app_casino, app_casino_aside},
        data: () => {
            return {
                recommendedCasinos: '',
                allCasino: ''
            }
        },
        filters: {
            createTitle(title){
                return 'Бонусы от ' + title
            }
        },
        async asyncData({route, error}) {
            if(route.params.id) {
                const request = new DAL_Builder();
                const response = await request.postType('casino')
                    .url(route.params.id)
                    .get();
                if(response.data.confirm === 'error') {
                    error({ statusCode: 404, message: 'Post not found' })
                }
                else {
                    const body = response.data.body;
                    const data = {body};
                    data.body.currentUrl = config.BASE_URL + route.path
                    data.body.casinoRating = {
                        reliability: data.body.reliability,
                        conveniencePayments: data.body.convenience_payments,
                        interface: data.body.interface,
                        support: data.body.support,
                        popularity: data.body.popularity,
                        shares: data.body.shares,
                    }
                    data.body.breadcrumbs = [
                        {title:'Sloto.top', permalink: '/'},
                        {title:'Казино', permalink: '/casino'},
                        {title:data.body.title, permalink: ''},
                    ]
                    return {data}
                }
            }
            else {
                error({ statusCode: 404, message: 'Post not found' })
            }
           },
        async mounted(){
            this.recommendedCasinos = TRANSLATE.RECOMMENDED_CASINOS.ru
            this.allCasino = TRANSLATE.ALL_CASINO.ru
        },
        head() {
            return {
                title: this.data.body.meta_title,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.data.body.description
                    },
                ],
                link: [
                    { rel: 'canonical', href: this.data.body.currentUrl}
                ]
            }
        }
    }
</script>
<style scoped>
    .casino_content {
        display: flex;
    }
    .casino_content_left {
        width: 70%;
    }
    .casino_content_right {
        width: 30%;
    }
    @media (min-width:319px) and (max-width:768px) {
        .casino_content {
           flex-wrap: wrap;
        }
        .casino_content_left, .casino_content_right {
          width: 100%;
        }
    }
</style>
