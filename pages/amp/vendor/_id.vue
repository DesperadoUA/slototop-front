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
        <app_vendor_card_amp :value="data.body" />
        <app_slot_loop_downloads_amp :value="data.body.games"
                             v-if="data.body.games.length !== 0"
                             :title="`${translates.GAME_FROM[config.LANG]} ${data.body.title}`"
        />
        <app_casino_loop_downloads_amp :value="data.body.casino"
            v-if="data.body.casino.length !== 0"
            bg="--bg-gray"
            :title="`${translates.CASINO_WORK_WITH[config.LANG]}  ${data.body.title}`"
        />
    </main>
    <app_footer_amp 
        :footer_menu="data.body.settings.footer_menu"
        :footer_text="data.body.settings.footer_text"
        :partners_menu="data.body.settings.partners_menu" 
    />
    <!--
    <app_content :value="data.body.content" v-if="data.body.content !== ''" /> -->
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config'
    import helper from '~/helpers/helpers'
    import app_content from '~/components/content/app-content'
    import app_page_banner_amp from '~/components/page-banner/app_page_banner_amp'
    import app_header_amp from '~/components/header/app-header_amp'
    import app_footer_amp from '~/components/footer/app-footer_amp'
    import app_breadcrumbs_amp from '~/components/breadcrumbs/app_breadcrumbs_amp'
    import app_vendor_card_amp from '~/components/vendor_card/app-vendor-card_amp'
    import app_slot_loop_downloads_amp from '~/components/slot_loop_download/app_slot_loop_download_amp'
    import app_casino_loop_downloads_amp from '~/components/casino_loop_downloads/app_casino_loop_downloads_amp'
    import app_author_link_amp from '~/components/author/app-author-link_amp'
    import translateMixin from '~/mixins/translate'
    export default {
        name: "single-vendor_amp",
        amp: 'hybrid',
        ampLayout: 'default.amp',
        data: () => {
            return {
                data: {},
            }
        },
        components: {app_content, app_page_banner_amp, app_author_link_amp, app_header_amp, 
        app_footer_amp, app_breadcrumbs_amp, app_vendor_card_amp, app_slot_loop_downloads_amp, app_casino_loop_downloads_amp},
        mixins: [translateMixin],
        async asyncData({route, error}) {
            if(route.params.id) {
                const request = new DAL_Builder()
                const response = await request.postType('vendor')
                    .url(route.params.id)
                    .get()
                if(response.data.confirm === 'error') {
                    error({ statusCode: 404, message: 'Post not found' })
                }
                else {
                    const data = await helper.globalDataMixin(response, route)
                    data.body.breadcrumbs = [
                        {...config.BREADCRUMBS_ROOT[config.LANG]},
                        {...config.BREADCRUMBS_VENDORS[config.LANG]},
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
                    }
                ],
                link: [
                    { rel: 'canonical', href: this.data.body.currentUrl}
                ]
            }
        },
    }
</script>