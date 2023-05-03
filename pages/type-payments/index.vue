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
        <app_payment_loop_download :value="data.body.posts" v-if="data.body.posts.length !== 0" />
        <app_content :value="data.body.content" v-if="data.body.content !== ''"/>
    </div>
</template>

<script>
   import DAL_Page from '~/DAL/static_pages'
   import config from '~/config/index'
   import helper from '~/helpers/helpers'
   import app_content from '~/components/content/app-content'
   import app_page_banner from '~/components/page-banner/app_page_banner'
   import app_payment_loop_download from '~/components/payment_loop_download'
   import head from '~/mixins/head'
   import author from '~/mixins/author'
export default {
    name: "type-payments-page",
    data: () => {
        return {
           
        }
    },
    components: {app_content, app_page_banner, app_payment_loop_download},
    mixins: [head, author],
    async asyncData({route, error}) {
        const request = {
            url: 'type-payments'
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
