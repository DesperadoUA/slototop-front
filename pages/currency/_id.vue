<template>
  <div>
      <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
      <app_payment_loop_downloads :value="data.body.posts" v-if="data.body.posts.length !== 0" />
      <app_content :value="data.body.content" v-if="data.body.content !== ''" />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config/index'
    import app_content from '~/components/content/app-content'
    import app_page_banner from '~/components/page-banner/app_page_banner'
    import app_payment_loop_downloads from '~/components/payment_loop_download/'
    export default {
        name: "single-currency",
        data: () => {
            return {
                data: {},
            }
        },
        components: {app_content, app_page_banner, app_payment_loop_downloads},
        async asyncData({route, error}) {
            if(route.params.id) {
                const request = new DAL_Builder()
                const response = await request.postType('currency')
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