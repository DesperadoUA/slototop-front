<template>
    <div>
        <app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
        <main class="main">
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
            <app_casino_amp :value="data.body.casino"
                :title="translates.ONLINE_CASINO[config.LANG]"
                link="casino"
                :linkText="translates.ALL_CASINO[config.LANG]"
                bg="--bg-gray"
            />
            <app_casino_amp :value="data.body.new_casino"
                :title="translates.NEW_CASINO[config.LANG]"
                bg="--bg-gray"
            />
            <app_slots_amp :value="data.body.top_game" 
                :title="translates.GAMES[config.LANG]" 
                link="games" 
                :linkText="translates.ALL_GAMES[config.LANG]" 
            />
            <app_slots_amp :value="data.body.new_game" 
                :title="translates.NEW_GAMES[config.LANG]" 
                link="games" 
                :linkText="translates.ALL_GAMES[config.LANG]" 
            />
            <app_bonuses_casino_amp :value="data.body.bonuses" 
                :title="translates.BONUSES_CASINO[config.LANG]" 
                link="bonuses" 
                :linkText="translates.ALL_BONUSES[config.LANG]" 
            />
            <app_faq_amp :value="data.body.settings.main_page_faq" title="Faq" />
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
   import app_header_amp from '~/components/header/app-header_amp'
   import helper from '~/helpers/helpers'
   import app_casino_amp from '~/components/casino/app_casino_amp'
   import app_slots_amp from '~/components/slots/app_slots_amp'
   import app_content from '~/components/content/app-content'
   import app_bonuses_casino_amp from '~/components/bonuses-casino/app_bonuses_casino_amp'
   import app_faq_amp from '~/components/faq/app_faq_amp'
   import app_author_link_amp from '~/components/author/app-author-link_amp'
   import app_footer_amp from '~/components/footer/app-footer_amp'
   import translateMixin from '~/mixins/translate'
   import config from '~/config'
export default {
    name: "main-page-amp",
    amp: 'hybrid',
    ampLayout: 'default.amp',
    data: () => {
        return {
            defaultValue: [],
            faq: [],
            banner: [],
            device: false
        }
    },
    components: {app_content, app_casino_amp, app_slots_amp, app_bonuses_casino_amp, app_faq_amp, app_author_link_amp, app_header_amp, app_footer_amp},
    mixins: [translateMixin],
    async asyncData({store, route}) {
        const request = {
            url: 'main'
        };
        const response = await DAL_Page.getData(request)
        const data = await helper.globalDataMixin(response, route)
        data.body.currentUrl = config.BASE_URL[config.LANG]
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
