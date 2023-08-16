<template>
    <div>
        <app_header_amp 
           :logo="data.body.options.logo" 
           :menu_links="data.body.settings.header_menu" 
        />
        <main class="main">
            <app_author_top v-if="data.body.h1 !== ''"
               :img="data.body.thumbnail"
               :name="data.body.h1"
               :specialty="translates.AUTHOR_SPECIALIZATION[config.LANG]"
               :shortDesc="data.body.short_desc"
               :socialLinks="data.body.settings.social_links_author"
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
   import DAL_Page from '~/DAL/static_pages'
   import helper from '~/helpers/helpers'
   import app_header_amp from '~/components/header/app-header_amp'
   import app_content from '~/components/content/app-content'
   import app_author_top from '~/components/author/app-author-top'
   import app_footer_amp from '~/components/footer/app-footer_amp'
   import translateMixin from '~/mixins/translate'
export default {
    name: "author-page_amp",
    amp: 'hybrid',
    ampLayout: 'default.amp',
    components: {app_content, app_author_top, app_header_amp, app_footer_amp},
    mixins: [translateMixin],
    async asyncData({store, route}) {
        const request = {
            url: 'author'
        };
        const response = await DAL_Page.getData(request)
        const data = await helper.globalDataMixin(response, route)
        return {data}
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
