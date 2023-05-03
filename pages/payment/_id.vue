<template>
  <div>
    <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
    <div class="container">
      <div class="contentEnd">
        <app_author_link 
          :link="$options.authorPageLink"
          :text="$options.reviewAuthor"
          :dataTime="data.body.created_at.slice(0, 10)"
          :name="data.body.author_name"
        />
      </div>
    </div>
    <app_breadcrumbs :value="data.body.breadcrumbs" />
    <app_payment_card :value="data.body" />
    <app_payment_detail :value="data.body" />
    <app_casino_loop_downloads :value="data.body.casino"
                               :title="getPayment"
                               bg="--bg-gray"
                               v-if="data.body.casino.length !== 0"
    />
    <app_content :value="data.body.content" v-if="data.body.content !== ''" />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import TRANSLATE from '~/helpers/translate.json'
    import config from '~/config'
    import helper from '~/helpers/helpers'
    import app_content from '~/components/content/app-content'
    import app_page_banner from '~/components/page-banner/app_page_banner'
    import app_casino_loop_downloads from '~/components/casino_loop_downloads/app_casino_loop_downloads'
    import app_breadcrumbs from '~/components/breadcrumbs/app_breadcrumbs'
    import app_payment_card from '~/components/payment_card/app-payment-card'
    import app_payment_detail from '~/components/payment-detail/app-payment-detail'
    import head from '~/mixins/head'
    import author from '~/mixins/author'
    export default {
        name: "single-payment",
        data: () => {
            return {
                data: {},
                getPayment: ''
            }
        },
        mounted(){
            this.getPayment = TRANSLATE.GET_PAYMENTS[config.LANG]
        },
        components: {app_content, app_page_banner, app_casino_loop_downloads, app_breadcrumbs, app_payment_card, app_payment_detail},
        mixins: [head, author],
        async asyncData({route, error}) {
            if(route.params.id) {
                const request = new DAL_Builder()
                const response = await request.postType('payment')
                    .url(route.params.id)
                    .get()
                if(response.data.confirm === 'error') {
                    error({ statusCode: 404, message: 'Post not found' })
                }
                else {
                    const data = helper.headDataMixin(response.data, route)
                    data.body.breadcrumbs = [
                        {...config.BREADCRUMBS_ROOT[config.LANG]},
                        {...config.BREADCRUMBS_PAYMENTS[config.LANG]},
                        {title: data.body.title, permalink: ''},
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