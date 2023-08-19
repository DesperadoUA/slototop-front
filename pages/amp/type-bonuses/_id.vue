<template>
  <div>
    <app_page_banner_amp :title="data.body.h1" :shortDesc="data.body.short_desc" />
    <div class="container">
      <div class="contentEnd">
        <app_author_link_amp 
          :link="config.AUTHOR_PAGE_LINK"
          :text="translates.REVIEW_AUTHOR[config.LANG]"
          :dataTime="data.body.created_at.slice(0, 10)"
          :name="data.body.author_name"
        />
      </div>
    </div>
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import helper from '~/helpers/helpers'
    import app_content from '~/components/content/app-content'
    import app_page_banner_amp from '~/components/page-banner/app_page_banner_amp'
    import app_author_link_amp from '~/components/author/app-author-link_amp'
    import translateMixin from '~/mixins/translate'
    
    export default {
        name: "type-bonuses-category",
        components: {app_content, app_page_banner_amp, app_author_link_amp},
        mixins: [translateMixin],
        data: () => {
            return {
                data: {},
            }
        },
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('type-bonuses')
                .url(route.params.id)
                .get()
            if(response.data.confirm === 'error') {
                error({ statusCode: 404, message: 'Post not found' })
            }
            else {
                const data = await helper.globalDataMixin(response, route)
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
                    }
                ],
                link: [
                    { rel: 'canonical', href: this.data.body.currentUrl}
                ]
            }
        },
    }
</script>

<style scoped>

</style>