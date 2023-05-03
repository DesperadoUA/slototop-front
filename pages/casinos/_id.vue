<template>
  <div>
    <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
    <app_slot_loop_downloads :value="data.body.posts" v-if="data.body.posts.length !== 0" />
    <app_content :value="data.body.content" v-if="data.body.content !== ''"/>
    <app_faq :value="data.body.faq" v-if="data.body.faq.length !== 0" />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import helper from '~/helpers/helpers'
    import app_casino_loop_downloads from '~/components/casino_loop_downloads/app_casino_loop_downloads'
    import app_content from '~/components/content/app-content'
    import app_page_banner from '~/components/page-banner/app_page_banner'
    import app_faq from '~/components/faq/app_faq'
    import head from '~/mixins/head'
    import author from '~/mixins/author'
    export default {
        name: "casino-category",
        data: () => {
            return {

            }
        },
        components: {app_casino_loop_downloads, app_content, app_page_banner, app_faq},
        mixins: [head, author],
        async asyncData({route, error}) {
            if(route.params.id) {
                const request = new DAL_Builder()
                const response = await request.postType('casinos')
                    .url(route.params.id)
                    .get()
                if(response.data.confirm === 'error') {
                    error({ statusCode: 404, message: 'Post not found' })
                }
                else {
                    const data = helper.headDataMixin(response.data, route)
                    return {data}
                }
            }
            else {
                error({ statusCode: 404, message: 'Post not found' })
            }
        }
    }
</script>

<style lang="scss"></style>