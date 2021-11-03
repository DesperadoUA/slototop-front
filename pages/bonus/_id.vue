<template>
  <div>
    <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
    <app_content :value="data.body.content" v-if="data.body.content !== ''" />
    <app_bonuses_casino :value="data.body.bonuses"
                        :title="data.body.otherBonuses"
                        :topTextShow="false"
                        v-if="data.body.bonuses.length !== 0"
    />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config/index'
    import TRANSLATE from '~/helpers/translate.json'
    import app_content from '~/components/content/app-content'
    import app_page_banner from '~/components/page-banner/app_page_banner'
    import app_bonuses_casino from '~/components/bonuses-casino/app_bonuses_casino'
    export default {
        name: "single-bonus",
        data: () => {
            return {

            }
        },
        components: {app_content, app_page_banner, app_bonuses_casino},
        async asyncData({route, error}) {
            if(route.params.id) {
                const request = new DAL_Builder()
                const response = await request.postType('bonus')
                    .url(route.params.id)
                    .get()
                if(response.data.confirm === 'error') {
                    error({ statusCode: 404, message: 'Post not found' })
                }
                else {
                    const body = response.data.body
                    const data = {body}
                    data.body.currentUrl = config.BASE_URL + route.path
                    data.body.otherBonuses =  TRANSLATE.OTHER_BONUSES.ru + body.casino?.[0].title
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