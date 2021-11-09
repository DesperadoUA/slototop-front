<template>
    <div>
        <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
        <app_category_filter :value="data.body.category" v-if="data.body.category.length !== 0" />
        <app_slot_loop_downloads
                :value="data.body.games"
                bg="--bg-gray"
                v-if="data.body.games.length !== 0"
        />
        <app_content :value="data.body.content" v-if="data.body.content !== ''" />
      </div>
</template>

<script>
   import DAL_Page from '~/DAL/static_pages'
   import config from '~/config/index'
   import app_slot_loop_downloads from '~/components/slot_loop_download/'
   import app_content from '~/components/content/app-content'
   import app_page_banner from '~/components/page-banner/app_page_banner'
   import app_category_filter from '~/components/category_filter/app_category_filter'
export default {
    name: "game-page",
    data: () => {
        return {
           
        }
    },
    components: {app_slot_loop_downloads, app_content, app_page_banner, app_category_filter},
    async asyncData({route, error}) {
        const request = {
            url: 'games'
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
