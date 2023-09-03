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
                :src="VendorPathScript" 
                v-if="VendorNumberPostOnQuery < data.body.vendors.length"
            >
                <app_vendor_loop_download_amp
                    :value="data.body.vendors"
                    bg="--bg-gray"
                />
            </script_amp>
            <app_vendor_loop_download_amp
                :value="data.body.vendors"
                bg="--bg-gray"
                v-if="data.body.vendors.length !== 0 && VendorNumberPostOnQuery > data.body.vendors.length" 
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
   import DAL_Page from '~/DAL/static_pages'
   import helper from '~/helpers/helpers'
   import pageTemplateAmp from '~/mixins/pageTemplateAmp'
   import app_page_banner_amp from '~/components/page-banner/app_page_banner_amp'
   import app_vendor_loop_download_amp from '~/components/vendor_loop_download/app_vendor_loop_download_amp'
   import script_amp from '~/components/script_amp'
   import { VENDOR as VendorNumberPostOnQuery }  from '~/config/postLoader'
   import { VENDOR as VendorPathScript }  from '~/config/ampPathScript'

export default {
    name: "vendors-page_amp",
    components: {app_page_banner_amp, app_vendor_loop_download_amp, script_amp},
    mixins: [pageTemplateAmp],
    data: () => {
        return {
            VendorNumberPostOnQuery,
            VendorPathScript
        }
    },
    async asyncData({route, error}) {
        const request = {
            url: 'vendors'
        };
        const response = await DAL_Page.getData(request);
        if(response.data.confirm === 'error') {
            error({ statusCode: 404, message: 'Post not found' })
        } else {
            const data = await helper.globalDataMixin(response, route)
            return {data}
        }
    }
}
</script>