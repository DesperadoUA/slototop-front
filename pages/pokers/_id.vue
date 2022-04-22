<template>
  <div>
    <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
    <app_poker_loop_downloads :value="data.body.posts" v-if="data.body.posts.length !== 0"/>
    <app_content :value="data.body.content" v-if="data.body.content !== ''"/>
    <app_faq :value="data.body.faq" v-if="data.body.faq.length !== 0" />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config'
    import helper from '~/helpers/helpers'
    import app_poker_loop_downloads from '~/components/poker_loop_downloads/app_poker_loop_downloads'
    import app_content from '~/components/content/app-content'
    import app_page_banner from '~/components/page-banner/app_page_banner'
    import app_faq from '~/components/faq/app_faq'
    export default {
        name: "poker-category",
        data: () => {
            return {

            }
        },
        components: {app_content, app_poker_loop_downloads, app_page_banner, app_faq},
        async asyncData({route, error}) {
            if(route.params.id) {
                const request = new DAL_Builder()
                const response = await request.postType('pokers')
                    .url(route.params.id)
                    .get()
                if(response.data.confirm === 'error') {
                    error({ statusCode: 404, message: 'Post not found' })
                }
                else {
                    const data = response.data
                    data.body.currentUrl = config.BASE_URL + route.path
                    data.body.headerLinks = helper.hreflang(data.body.hreflang)
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
                    { rel: 'canonical', href: this.data.body.currentUrl},
                    ...this.data.body.headerLinks
                ]
            }
        }
    }
</script>

<style lang="scss"></style>