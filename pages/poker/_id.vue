<template>
  <div>
    <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
    <div class="container">
      <div class="contentEnd">
        <app_author_link 
            :link="config.AUTHOR_PAGE_LINK"
            :text="translates.REVIEW_AUTHOR[config.LANG]"
            :dataTime="data.body.created_at.slice(0, 10)"
            :name="data.body.author_name"
        />
      </div>
    </div>
    <app_breadcrumbs :value="data.body.breadcrumbs" />
    <app_poker_card :value="data.body" />
    <app_poker_detail :value="data.body" />
    <app_poker_loop_downloads :value="data.body.pokers" bg="--bg-gray" :title="translates.OTHER_POKER_ROOMS[config.LANG]"/>
    <app_content :value="data.body.content"  v-if="data.body.content !== ''" />
    <app_faq :value="data.body.faq" v-if="data.body.faq.length !== 0" />
    <app_reviews :title="'Отзывы'" :value="data.body.reviews" v-if="data.body.reviews.length !== 0"/>
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import TRANSLATE from '~/helpers/translate.json'
    import config from '~/config'
    import helper from '~/helpers/helpers'
    import app_content from '~/components/content/app-content'
    import app_page_banner from '~/components/page-banner/app_page_banner'
    import app_breadcrumbs from '~/components/breadcrumbs/app_breadcrumbs'
    import app_poker_card from '~/components/poker_card/app-poker-card'
    import app_poker_detail from '~/components/poker-detail/app-poker-detail'
    import app_reviews from '~/components/reviews/app_reviews'
    import app_poker_loop_downloads from '~/components/poker_loop_downloads/app_poker_loop_downloads'
    import app_faq from '~/components/faq/app_faq'
    import app_author_link from '~/components/author/app-author-link'
    import head from '~/mixins/head'
    import translateMixin from '~/mixins/translate'
    export default {
        name: "single-poker",
        data: () => {
            return {}
        },
        components: {app_content, app_page_banner, app_breadcrumbs, app_poker_card, app_poker_detail, app_reviews, app_poker_loop_downloads, app_faq, app_author_link},
        mixins: [head, translateMixin],
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
                    const data = helper.headDataMixin(response.data, route)
                    data.body.breadcrumbs = [
                        {...config.BREADCRUMBS_ROOT[config.LANG]},
                        {...config.BREADCRUMBS_POKER[config.LANG]},
                        {title:data.body.title, permalink: ''},
                    ]
                    return {data}
                }
            }
            else {
                error({ statusCode: 404, message: 'Post not found' })
            }
        }
    }
</script>

<style scoped>

</style>

