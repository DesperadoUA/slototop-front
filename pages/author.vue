<template>
    <div>
        <app_author_top v-if="data.body.h1 !== ''"
            :img="data.body.thumbnail"
            :name="data.body.h1"
            :specialty="$options.specialty"
            :link="$options.fbLink"
            :shortDesc="data.body.short_desc"
            :socialLinks="authorSocialLinks"
        />
        <app_content :value="data.body.content" v-if="data.body.content !== ''"/>
    </div>
</template>

<script>
   import DAL_Page from '~/DAL/static_pages'
   import helper from '~/helpers/helpers'
   import app_content from '~/components/content/app-content'
   import app_author_top from '~/components/author/app-author-top'
   import head from '~/mixins/head'
   import TRANSLATE from '~/helpers/translate.json'
   import config from '~/config'
export default {
    name: "author-page",
    components: {app_content, app_author_top},
    mixins: [head],
    async asyncData({store, route}) {
        const request = {
            url: 'author'
        };
        const response = await DAL_Page.getData(request)
        const data = helper.headDataMixin(response.data, route)
        return {data}
    },
    computed: {
        authorSocialLinks() {
            const settings = this.$store.getters['settings/getSettings']
            if(settings) {
              return this.socialLinks = this.$store.getters['settings/getSettings']
                .filter(item => item.key === 'social_links_author' )[0].value 
            } 
            return []
        }
    },
    created() {
        this.$options.specialty = TRANSLATE.AUTHOR_SPECIALIZATION[config.LANG]
        this.$options.fbLink = config.AUTHOR_FB_URL
    }
}
</script>

<style lang="scss">

</style>
