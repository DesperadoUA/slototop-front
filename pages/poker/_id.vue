<template>
  <div>
    <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
    <app_breadcrumbs :value="data.body.breadcrumbs" />
    <app_poker_card :value="data.body" />
    <app_poker_detail :value="data.body" />
    <app_content :value="data.body.content"  v-if="data.body.content !== ''" />
    <app_reviews :title="'Отзывы'" :value="data.body.reviews" v-if="data.body.reviews.length !== 0"/>
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config/index'
    import app_content from '~/components/content/app-content'
    import app_page_banner from '~/components/page-banner/app_page_banner'
    import app_breadcrumbs from '~/components/breadcrumbs/app_breadcrumbs'
    import app_poker_card from '~/components/poker_card/app-poker-card'
    import app_poker_detail from '~/components/poker-detail/app-poker-detail'
    import app_reviews from '~/components/reviews/app_reviews'
    export default {
        name: "single-poker",
        data: () => {
            return {
                data: {},
            }
        },
        components: {app_content, app_page_banner, app_breadcrumbs, app_poker_card, app_poker_detail, app_reviews},
        async asyncData({route, error}) {
            if(route.params.id) {
                const request = new DAL_Builder()
                const response = await request.postType('poker')
                    .url(route.params.id)
                    .get()
                if(response.data.confirm === 'error') {
                    error({ statusCode: 404, message: 'Post not found' })
                }
                else {
                    const body = response.data.body
                    const data = {body}
                    data.body.currentUrl = config.BASE_URL + route.path
                    data.body.breadcrumbs = [
                        {title:'Sloto.top', permalink: '/'},
                        {title:'Покер-румы', permalink: '/pokers'},
                        {title:data.body.title, permalink: ''},
                    ]
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

<style scoped>

</style>