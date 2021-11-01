<template>
    <div>
        <app_banner :value="defaultValue" />
        <app_casino :value="data.body.casino" :title="onlineCasino" link="casinos" :linkText="allCasino"/>
        <app_casino :value="data.body.new_casino" :title="newCasino"/>
        <app_slots :value="data.body.top_game" :title="games" link="games" :linkText="allGames"/>
        <app_slots :value="data.body.new_game" :title="newGames" link="games" :linkText="allGames"/>
        <app_bonuses_casino :value="data.body.bonuses" :title="bonusesCasino" link="bonuses" :linkText="allBonuses" />
        <app_content :value="data.body.content"/>
        <app_faq :value="changeFaq" :title="'Faq'" v-if="changeFaq.length !== 0"/>
    </div>
</template>

<script>
   import DAL_Page from '~/DAL/static_pages'
   import config from '~/config/index'
   import TRANSLATE from '~/helpers/translate.json'
   import app_casino from '~/components/casino/app_casino'
   import app_slots from '~/components/slots/app_slots'
   import app_content from '~/components/content/app-content'
   import app_bonuses_casino from '~/components/bonuses-casino/app_bonuses_casino'
   import app_banner from '~/components/main-banner/app_main_banner'
   import app_faq from '~/components/faq/app_faq'
export default {
    name: "main-page",
    data: () => {
        return {
            allCasino: "",
            newCasino: "",
            onlineCasino: "",
            games: "",
            newGames: "",
            allGames: "",
            bonusesCasino: "",
            allBonuses: "",
            defaultValue: [],
            faq: []
        }
    },
    components: {app_content, app_casino, app_slots, app_bonuses_casino, app_banner, app_faq},
    async asyncData({store, route}) {
        const request = {
            url: 'main'
        };
        const response = await DAL_Page.getData(request);
        const body = response.data;
        const data = body;
        data.body.currentUrl = config.BASE_URL + route.path;
        return {data}
    },
    mounted() {
            this.allCasino = TRANSLATE.ALL_CASINO.ru
            this.newCasino = TRANSLATE.NEW_CASINO.ru
            this.onlineCasino = TRANSLATE.ONLINE_CASINO.ru
            this.games = TRANSLATE.GAMES.ru
            this.newGames = TRANSLATE.NEW_GAMES.ru
            this.allGames = TRANSLATE.ALL_GAMES.ru
            this.bonusesCasino = TRANSLATE.BONUSES_CASINO.ru
            this.allBonuses = TRANSLATE.ALL_BONUSES.ru
        },
    computed: {
        changeFaq(){
            const settings = this.$store.getters['settings/getSettings']
            if(settings) {
                this.faq = settings.filter(item => item.key === 'main_page_faq')[0].value
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

<style lang="scss"></style>
