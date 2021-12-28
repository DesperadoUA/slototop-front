<template>
    <div>
        <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
        <app_casino_loop_downloads :value="data.body.casino"
                                   bg="--bg-gray"
                                   v-if="data.body.casino.length !== 0" />
        <app_content :value="data.body.content" v-if="data.body.content !== ''"/>
        <app_faq :value="changeFaq" :title="'Faq'" v-if="changeFaq.length !== 0"/>
      </div>
</template>

<script>
   import DAL_Page from '~/DAL/static_pages'
   import config from '~/config/index'
   import app_casino_loop_downloads from '~/components/casino_loop_downloads/app_casino_loop_downloads'
   import app_content from '~/components/content/app-content'
   import app_page_banner from '~/components/page-banner/app_page_banner'
   import app_faq from '~/components/faq/app_faq'

export default {
    name: "casino-page",
    data: () => {
        return {
            faq: []
        }
    },
    components: {app_casino_loop_downloads, app_content, app_page_banner, app_faq},
    async asyncData({route, error}) {
        const request = {
            url: 'casino'
        };
        const response = await DAL_Page.getData(request);
        if(response.data.confirm === 'error') {
            error({ statusCode: 404, message: 'Post not found' })
        }
        else {
            const body = response.data.body
            const data = {body}
            data.body.currentUrl = config.BASE_URL + route.path
            return {data}
        }
    },
    computed: {
        changeFaq(){
            const settings = this.$store.getters['settings/getSettings']
            if(settings) {
                this.faq = settings.filter(item => item.key === 'casino_page_faq')[0].value
            }
            return this.faq
        },
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

<style lang="scss"></style>
