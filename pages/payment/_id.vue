<template>
  <div>
    <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
    <app_breadcrumbs :value="data.body.breadcrumbs" />
    <app_payment_card :value="data.body" />
    <app_payment_detail :value="data.body" />
    <app_casino_loop_downloads :value="data.body.casino"
                               :title="'Оплату принимают'"
                               bg="--bg-gray"
                               v-if="data.body.casino.length !== 0"
    />
    <app_content :value="data.body.content" v-if="data.body.content !== ''" />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config/index'
    import app_content from '~/components/content/app-content'
    import app_page_banner from '~/components/page-banner/app_page_banner'
    import app_casino_loop_downloads from '~/components/casino_loop_downloads/app_casino_loop_downloads'
    import app_breadcrumbs from '~/components/breadcrumbs/app_breadcrumbs'
    import app_payment_card from '~/components/payment_card/app-payment-card'
    import app_payment_detail from '~/components/payment-detail/app-payment-detail'
    export default {
        name: "single-payment",
        data: () => {
            return {
                data: {},
            }
        },
        components: {app_content, app_page_banner, app_casino_loop_downloads, app_breadcrumbs, app_payment_card, app_payment_detail},
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
                    const body = response.data.body
                    const data = {body}
                    data.body.currentUrl = config.BASE_URL + route.path
                    data.body.breadcrumbs = [
                        {title:'Sloto.top', permalink: '/'},
                        {title:'Платежные системы', permalink: '/payments'},
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