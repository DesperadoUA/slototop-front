<template>
  <div>
    <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
    <app_category_filter :value="data.body.bonus_type" v-if="data.body.bonus_type.length !== 0" />
    <app_bonuses_loop_downloads :value="data.body.posts" v-if="data.body.posts.length !== 0" />
    <app_content :value="data.body.content" v-if="data.body.content !== ''" />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config/index'
    import app_content from '~/components/content/app-content'
    import app_bonuses_loop_downloads from '~/components/bonuses_loop_downloads/app_bonuses_loop_downloads'
    import app_page_banner from '~/components/page-banner/app_page_banner'
    import app_category_filter from '~/components/category_filter/app_category_filter'
    export default {
        name: "single-type-bonus",
        data: () => {
            return {
                data: {},
            }
        },
        components: {app_content, app_bonuses_loop_downloads, app_page_banner, app_category_filter},
        async asyncData({route, error}) {
            if(route.params.id) {
                const request = new DAL_Builder()
                const response = await request.postType('type-bonus')
                    .url(route.params.id)
                    .get()
                if(response.data.confirm === 'error') {
                    error({ statusCode: 404, message: 'Post not found' })
                }
                else {
                    const body = response.data.body
                    const data = {body}
                    data.body.currentUrl = config.BASE_URL + route.path
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
                    },
                ],
                link: [
                    { rel: 'canonical', href: this.data.body.currentUrl}
                ]
            }
        }
    }
</script>

<style scoped>

</style>