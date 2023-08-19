<template>
  <div>
    <app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
    <main class="main">
        <app_page_banner_amp :title="data.body.h1" :shortDesc="data.body.short_desc" />
        <div class="container">
            <div class="contentEnd">
                <app_author_link_amp
                    :link="config.AUTHOR_PAGE_LINK"
                    :text="translates.REVIEW_AUTHOR[config.LANG]"
                    :dataTime="data.body.created_at.slice(0, 10)"
                    :name="data.body.author_name"
                />
            </div>
        </div>
        <app_breadcrumbs_amp :value="data.body.breadcrumbs" />
        <app_payment_card_amp :value="data.body" />
        <app_payment_detail_amp :value="data.body" />
        <app_casino_loop_downloads_amp :value="data.body.casino"
            :title="translates.GET_PAYMENTS[config.LANG]"
            bg="--bg-gray"
            v-if="data.body.casino.length !== 0"
        />
    </main>
    <app_footer_amp 
        :footer_menu="data.body.settings.footer_menu"
        :footer_text="data.body.settings.footer_text"
        :partners_menu="data.body.settings.partners_menu" 
    />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config'
    import helper from '~/helpers/helpers'
    import app_content from '~/components/content/app-content'
    import app_page_banner_amp from '~/components/page-banner/app_page_banner_amp'
    import app_casino_loop_downloads_amp from '~/components/casino_loop_downloads/app_casino_loop_downloads_amp'
    import app_breadcrumbs_amp from '~/components/breadcrumbs/app_breadcrumbs_amp'
    import app_payment_card_amp from '~/components/payment_card/app-payment-card_amp'
    import app_payment_detail_amp from '~/components/payment-detail/app-payment-detail_amp'
    import app_author_link_amp from '~/components/author/app-author-link_amp'
    import app_header_amp from '~/components/header/app-header_amp'
    import app_footer_amp from '~/components/footer/app-footer_amp'
    import translateMixin from '~/mixins/translate'
    export default {
        name: "single-payment_amp",
        data: () => {
            return {
                data: {},
            }
        },
        amp: 'hybrid',
        ampLayout: 'default.amp',
        components: {app_content, app_page_banner_amp, app_casino_loop_downloads_amp, app_breadcrumbs_amp, 
        app_payment_card_amp, app_payment_detail_amp, app_author_link_amp, app_header_amp, app_footer_amp},
        mixins: [translateMixin],
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
                    const data = await helper.globalDataMixin(response, route)
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
        },
        head() {
            return {
                title: this.data.body.meta_title,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.data.body.description
                    }
                ],
                link: [
                    { rel: 'canonical', href: this.data.body.currentUrl}
                ]
            }
        },
    }
</script>

<style scoped>

</style>