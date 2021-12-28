<template>
      <div>
          <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
          <app_category_filter :value="data.body.bonus_type" v-if="data.body.bonus_type.length !== 0" />
          <app_bonuses_loop_downloads :value="data.body.bonuses" v-if="data.body.bonuses.length !== 0" />
          <app_content :value="data.body.content" v-if="data.body.content !== ''" />
          <app_faq :value="changeFaq" :title="'Faq'" v-if="changeFaq.length !== 0"/>
      </div>
</template>

<script>
   import DAL_Builder from '~/DAL/builder'
   import config from '~/config/index'
   import app_page_banner from '~/components/page-banner/app_page_banner'
   import app_bonuses_loop_downloads from '~/components/bonuses_loop_downloads/app_bonuses_loop_downloads'
   import app_content from '~/components/content/app-content'
   import app_faq from '~/components/faq/app_faq'
   import app_category_filter from '~/components/category_filter/app_category_filter'
export default {
    name: "app_bonuses",
    data: () => {
        return {
            faq: []
        }
    },
    components: {app_page_banner, app_content, app_bonuses_loop_downloads, app_faq, app_category_filter},
    async asyncData({store, route, error}) {
        const request = new DAL_Builder();
        const response = await request.postType('pages')
                                          .url('bonuses')
                                          .get();
        if(response.data.confirm === 'error') {
            error({ statusCode: 404, message: 'Post not found' })
        }
        else {
            const body = response.data.body;
            const data = {body};
            data.body.currentUrl = config.BASE_URL + route.path;
            return {data}
        }
    },
    computed: {
        changeFaq(){
            const settings = this.$store.getters['settings/getSettings']
            if(settings) {
                this.faq = settings.filter(item => item.key === 'bonus_page_faq')[0].value
            }
            return this.faq
        },
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
