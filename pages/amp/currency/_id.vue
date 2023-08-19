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
      <app_payment_loop_downloads_amp :value="data.body.posts"
                                  bg="--bg-gray"
                                  v-if="data.body.posts.length !== 0" />
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
    import helper from '~/helpers/helpers'
    import pageTemplateAmp from '~/mixins/pageTemplateAmp'
    import app_page_banner_amp from '~/components/page-banner/app_page_banner_amp'
    import app_payment_loop_downloads_amp from '~/components/payment_loop_download/payment_loop_download_amp'
    
    export default {
        name: "single-currency_amp",
        components: {app_page_banner_amp, app_payment_loop_downloads_amp},
        mixins: [pageTemplateAmp],
        async asyncData({route, error}) {
            if(route.params.id) {
                const request = new DAL_Builder()
                const response = await request.postType('currency')
                    .url(route.params.id)
                    .get()
                if(response.data.confirm === 'error') {
                    error({ statusCode: 404, message: 'Post not found' })
                }
                else {
                    const data = await helper.globalDataMixin(response, route)
                    return {data}
                }
            }
            else {
                error({ statusCode: 404, message: 'Post not found' })
            }
        }
    }
</script>