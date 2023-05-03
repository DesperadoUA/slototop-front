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
        <app_poker_loop_downloads :value="data.body.poker"
                                  bg="--bg-gray"
                                  v-if="data.body.poker.length !== 0"/>
        <app_content :value="data.body.content" v-if="data.body.content !== ''"/>
        <app_faq :value="changeFaq" :title="'Faq'" v-if="changeFaq.length !== 0"/>
      </div>
</template>

<script>
   import DAL_Page from '~/DAL/static_pages'
   import config from '~/config/index'
   import helper from '~/helpers/helpers'
   import app_poker_loop_downloads from '~/components/poker_loop_downloads/app_poker_loop_downloads'
   import app_content from '~/components/content/app-content'
   import app_page_banner from '~/components/page-banner/app_page_banner'
   import app_faq from '~/components/faq/app_faq'
   import head from '~/mixins/head'
   import author from '~/mixins/author'
export default {
    name: "poker-page",
    data: () => {
        return {
            faq: []
        }
    },
    components: {app_poker_loop_downloads, app_content, app_page_banner, app_faq},
    mixins: [head, author],
    async asyncData({route, error}) {
        error({ statusCode: 404, message: 'Post not found' })
       /* const request = {
            url: 'pokers'
        };
        const response = await DAL_Page.getData(request);
        if(response.data.confirm === 'error') {
            error({ statusCode: 404, message: 'Post not found' })
        }
        else {
            const data = helper.headDataMixin(response.data, route)
            return {data}
        }

        */
    },
    computed: {
        changeFaq(){
            const settings = this.$store.getters['settings/getSettings']
            if(settings) {
                this.faq = settings.filter(item => item.key === 'poker_page_faq')[0].value
            }
            return this.faq
        },
    }
}
</script>

<style lang="scss"></style>
