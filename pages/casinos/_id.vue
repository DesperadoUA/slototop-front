<template>
  <div>
    <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
    <app_slot_loop_downloads :value="data.body.posts" v-if="data.body.posts.length !== 0" />
    <app_content :value="data.body.content" v-if="data.body.content !== ''"/>
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config/index'
    import app_casino_loop_downloads from '~/components/casino_loop_downloads/app_casino_loop_downloads'
    import app_content from '~/components/content/app-content'
    import app_page_banner from '~/components/page-banner/app_page_banner';
    export default {
        name: "casino-category",
        data: () => {
            return {

            }
        },
        components: {app_casino_loop_downloads, app_content, app_page_banner},
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

<style lang="scss"></style>