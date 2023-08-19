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
          <app_category_filter_amp :value="data.body.bonus_type" v-if="data.body.bonus_type.length !== 0" />
          <app_bonuses_loop_downloads_amp :value="data.body.bonuses" v-if="data.body.bonuses.length !== 0" />
          <app_faq_amp :value="data.body.settings.bonus_page_faq" title="Faq" v-if="data.body.settings.bonus_page_faq.length !== 0"/>
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
   import app_page_banner_amp from '~/components/page-banner/app_page_banner_amp'
   import app_bonuses_loop_downloads_amp from '~/components/bonuses_loop_downloads/app_bonuses_loop_downloads_amp'
   import app_content from '~/components/content/app-content'
   import app_faq_amp from '~/components/faq/app_faq_amp'
   import app_category_filter_amp from '~/components/category_filter/app_category_filter_amp'
   import app_author_link_amp from '~/components/author/app-author-link_amp'
   import app_header_amp from '~/components/header/app-header_amp'
   import app_footer_amp from '~/components/footer/app-footer_amp'
   import translateMixin from '~/mixins/translate'
export default {
    name: "app_bonuses",
    data: () => {
        return {}
    },
    components: {app_page_banner_amp, app_content, app_bonuses_loop_downloads_amp, app_faq_amp, app_category_filter_amp, 
    app_author_link_amp, app_header_amp, app_footer_amp},
    mixins: [translateMixin],
    amp: 'hybrid',
    ampLayout: 'default.amp',
    async asyncData({store, route, error}) {
        const request = new DAL_Builder();
        const response = await request.postType('pages')
                                          .url('bonuses')
                                          .get();
        if(response.data.confirm === 'error') {
            error({ statusCode: 404, message: 'Post not found' })
        }
        else {
            const data = await helper.globalDataMixin(response, route)
            return {data}
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
    }
}
</script>
