<template>
    <div>
        <app_banner :value="changeBanner" v-if="changeBanner.length !== 0 && device" />
        <div class="container">
            <div class="contentEnd">
               <app_author_link 
                :link="config.AUTHOR_PAGE_LINK"
                :text="translates.REVIEW_AUTHOR[config.LANG]"
                :dataTime="data.body.created_at.slice(0, 10)"
                :name="data.body.author_name"
               />
            </div>
        </div>
        <app_casino :value="data.body.casino"
                    :title="translates.ONLINE_CASINO[config.LANG]"
                    link="casino"
                    :linkText="translates.ALL_CASINO[config.LANG]"
                    bg="--bg-gray"
        />
        <app_casino :value="data.body.new_casino"
                    :title="translates.NEW_CASINO[config.LANG]"
                    bg="--bg-gray"
        />
        <app_slots :value="data.body.top_game" 
            :title="translates.GAMES[config.LANG]" 
            link="games" 
            :linkText="translates.ALL_GAMES[config.LANG]" 
        />
        <app_slots :value="data.body.new_game" 
            :title="translates.NEW_GAMES[config.LANG]" 
            link="games" 
            :linkText="translates.ALL_GAMES[config.LANG]"
        />
        <app_bonuses_casino :value="data.body.bonuses" 
            :title="translates.BONUSES_CASINO[config.LANG]" 
            link="bonuses" 
            :linkText="translates.ALL_BONUSES[config.LANG]" 
        />
        <app_content :value="data.body.content" v-if="data.body.content !== ''"/>
        <app_faq :value="changeFaq" :title="'Faq'" v-if="changeFaq.length !== 0"/>
    </div>
</template>

<script>
   import DAL_Page from '~/DAL/static_pages'
   import helper from '~/helpers/helpers'
   import app_casino from '~/components/casino/app_casino'
   import app_slots from '~/components/slots/app_slots'
   import app_content from '~/components/content/app-content'
   import app_bonuses_casino from '~/components/bonuses-casino/app_bonuses_casino'
   import app_banner from '~/components/main-banner/app_main_banner'
   import app_faq from '~/components/faq/app_faq'
   import app_author_link from '~/components/author/app-author-link'
   import head from '~/mixins/head'
   import translateMixin from '~/mixins/translate'
export default {
    name: "main-page",
    data: () => {
        return {
            defaultValue: [],
            faq: [],
            banner: [],
            device: false
        }
    },
    components: {app_content, app_casino, app_slots, app_bonuses_casino, app_banner, app_faq, app_author_link},
    mixins: [head, translateMixin],
    async asyncData({store, route}) {
        const request = {
            url: 'main'
        };
        const response = await DAL_Page.getData(request)
        const data = helper.headDataMixin(response.data, route)
        return {data}
    },
    mounted() {
            this.device = window.screen.width < 1200 ? false : true
        },
    computed: {
        changeFaq(){
            const settings = this.$store.getters['settings/getSettings']
            if(settings) {
                this.faq = settings.filter(item => item.key === 'main_page_faq')[0].value
            }
            return this.faq
        },
        changeBanner(){
            const settings = this.$store.getters['settings/getSettings']
            if(settings) {
                this.banner = settings.filter(item => item.key === 'banner')[0].value
            }
            return this.banner
        },
    }
}
</script>
