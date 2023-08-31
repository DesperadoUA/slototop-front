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
        <script_amp 
            :src="CasinoPathScript" 
            v-if="CasinoNumberPostOnQuery < data.body.casino.length"
        >
            <app_casino_loop_downloads_amp 
                :value="data.body.casino"
                bg="--bg-gray"
                post_type="country"
                :post_url="$route.params.id" 
            />
        </script_amp>
        <app_casino_loop_downloads_amp 
            :value="data.body.casino"
            bg="--bg-gray"
            post_type="country" 
            :post_url="$route.params.id"
            v-if="data.body.casino.length !== 0 && CasinoNumberPostOnQuery > data.body.casino.length" 
        />
        <app_content_amp :value="data.body.amp_content" v-if="data.body.amp_content !== ''"/>
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
    import app_casino_loop_downloads_amp from '~/components/casino_loop_downloads/app_casino_loop_downloads_amp'
    import script_amp from '~/components/script_amp'
    import { CASINO as CasinoNumberPostOnQuery }  from '~/config/postLoader'
    import { CASINO as CasinoPathScript }  from '~/config/ampPathScript'

    export default {
        name: "single-country_amp",
        components: {app_page_banner_amp, app_casino_loop_downloads_amp, script_amp},
        data(){
            return {
                CasinoNumberPostOnQuery,
                CasinoPathScript
            }
        },
        mixins: [pageTemplateAmp],
        async asyncData({route, error}) {
            if(route.params.id) {
                const request = new DAL_Builder()
                const response = await request.postType('country')
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