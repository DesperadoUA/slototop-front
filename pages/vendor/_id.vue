<template>
  <div>
    <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
    <app_breadcrumbs :value="data.body.breadcrumbs" />
    <app_vendor_card :value="data.body" />
    <app_slot_loop_downloads :value="data.body.games"
                             v-if="data.body.games.length !== 0"
                             :title="data.body.title | createTitle"
    />
    <app_casino_loop_downloads :value="data.body.casino"
                               v-if="data.body.casino.length !== 0"
                               :title="data.body.title | createTitleCasino"

    />
    <app_content :value="data.body.content" v-if="data.body.content !== ''" />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config/index'
    import app_content from '~/components/content/app-content'
    import app_page_banner from '~/components/page-banner/app_page_banner'
    import app_slot_loop_downloads from '~/components/slot_loop_download/'
    import app_casino_loop_downloads from '~/components/casino_loop_downloads/app_casino_loop_downloads'
    import app_breadcrumbs from '~/components/breadcrumbs/app_breadcrumbs'
    import app_vendor_card from '~/components/vendor_card/app-vendor-card'
    export default {
        name: "single-vendor",
        data: () => {
            return {
                data: {},
            }
        },
        components: {app_content, app_page_banner, app_slot_loop_downloads, app_casino_loop_downloads, app_breadcrumbs, app_vendor_card},
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
                    const body = response.data.body
                    const data = {body}
                    data.body.currentUrl = config.BASE_URL + route.path
                    data.body.breadcrumbs = [
                        {title:'Sloto.top', permalink: '/'},
                        {title:'Производители', permalink: '/vendors'},
                        {title:data.body.title, permalink: ''},
                    ]
                    return {data}
                }
            }
            else {
                error({ statusCode: 404, message: 'Post not found' })
            }
        },
        filters: {
            createTitle(title){
                return 'Игры от ' + title
            },
            createTitleCasino(title){
                return 'Казино, работающие с ' + title
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