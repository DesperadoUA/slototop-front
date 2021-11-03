<template>
    <div>
        <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
        <app_payment_loop_download :value="data.body.posts" v-if="data.body.posts.length !== 0" />
        <app_content :value="data.body.content" v-if="data.body.content !== ''"/>
    </div>
</template>

<script>
   import DAL_Page from '~/DAL/static_pages'
   import config from '~/config/index'
   import app_content from '~/components/content/app-content'
   import app_page_banner from '~/components/page-banner/app_page_banner'
   import app_payment_loop_download from '~/components/payment_loop_download'
export default {
    name: "type-payments-page",
    data: () => {
        return {
           
        }
    },
    components: {app_content, app_page_banner, app_payment_loop_download},
    async asyncData({route, error}) {
        const request = {
            url: 'type-payments'
        };
        const response = await DAL_Page.getData(request);
        if(response.data.confirm === 'error') {
            error({ statusCode: 404, message: 'Post not found' })
        } else {
            const body = response.data;
            const data = body;
            data.body.currentUrl = config.BASE_URL + route.path;
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
