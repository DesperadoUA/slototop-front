<template>
  <div>
    <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
    <app_breadcrumbs :value="data.body.breadcrumbs" />
    <app_casino_card :value="data.body" />
    <app_casino_detail :value="data.body" />
    <app_bonuses :value="data.body.bonuses"
                 :topTextShow="false"
                 :title="data.body.title | createTitle"
                 v-if="data.body.bonuses.length !== 0" />
    <app_content :value="data.body.content" v-if="data.body.content !== ''" />
    <app_faq :value="data.body.faq" v-if="data.body.faq.length !== 0" />
    <app_reviews :title="'Отзывы'" :value="data.body.reviews" v-if="data.body.reviews.length !== 0"/>
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config/index'
    import app_content from '~/components/content/app-content'
    import app_faq from '~/components/faq/app_faq'
    import app_bonuses from '~/components/bonuses-casino/app_bonuses_casino'
    import app_page_banner from '~/components/page-banner/app_page_banner'
    import app_breadcrumbs from '~/components/breadcrumbs/app_breadcrumbs'
    import app_casino_card from '~/components/casino_card/app-casino-card'
    import app_casino_detail from '~/components/casino-detail/app-casino-detail'
    import app_reviews from '~/components/reviews/app_reviews'

    export default {
        name: "app_single_casino",
        components: {app_content, app_breadcrumbs, app_casino_card, app_casino_detail, app_faq, app_bonuses, app_page_banner, app_reviews},
        data: () => {
            return {
               titleBonus: ''
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
                    data.body.currentUrl = config.BASE_URL + route.path;
                    data.body.breadcrumbs = [
                        {title:'Sloto.top', permalink: '/'},
                        {title:'Казино', permalink: '/casinos'},
                        {title:data.body.title, permalink: ''},
                    ];
                    return {data}
                }
            }
            else {
                error({ statusCode: 404, message: 'Post not found' })
            }
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
