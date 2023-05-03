<template>
  <div>
    <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
    <div class="container">
      <div class="contentEnd">
        <app_author_link 
          :link="$options.authorPageLink"
          :text="$options.reviewAuthor"
          :dataTime="data.body.created_at.slice(0, 10)"
          :name="data.body.author_name"
        />
      </div>
    </div>
    <app_content :value="data.body.content" v-if="data.body.content !== ''" />
    <app_faq :value="data.body.faq" v-if="data.body.faq.length !== 0" />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import helper from '~/helpers/helpers'
    import app_content from '~/components/content/app-content'
    import app_page_banner from '~/components/page-banner/app_page_banner'
    import app_faq from '~/components/faq/app_faq'
    import head from '~/mixins/head'
    import author from '~/mixins/author'
    export default {
        name: "country-category",
        components: {app_content, app_page_banner, app_faq},
        mixins: [head, author],
        data: () => {
            return {
                data: {},
            }
        },
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('countries')
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
    }
</script>

<style scoped>

</style>