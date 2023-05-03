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
    </div>
</template>

<script>
   import DAL_Page from '~/DAL/static_pages'
   import helper from '~/helpers/helpers'
   import app_content from '~/components/content/app-content'
   import app_page_banner from '~/components/page-banner/app_page_banner'
   import head from '~/mixins/head'
   import author from '~/mixins/author'
export default {
    name: "currency-page",
    data: () => {
        return {
           
        }
    },
    components: {app_content, app_page_banner},
    mixins: [head, author],
    async asyncData({route,error}) {
        const request = {
            url: 'currencies'
        };
        const response = await DAL_Page.getData(request);
        if(response.data.confirm === 'error') {
            error({ statusCode: 404, message: 'Post not found' })
        } else {
            const data = helper.headDataMixin(response.data, route)
            return {data}
        }
    }
}
</script>

<style lang="scss"></style>
