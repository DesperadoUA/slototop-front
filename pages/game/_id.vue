<template>
  <div>
    <app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
    <app_breadcrumbs :value="data.body.breadcrumbs" />
    <app_game_card :value="data.body" :globalRef="globalRef" />
    <app_game_details :value="data.body.details" />
    <app_casino :value="data.body.casino"
                bg="--bg-gray"
                :title="casinoWithThisGame"
                :linkText="allCasino" link="/casino" />
    <app_slots :value="data.body.games"
               bg="--bg-gray"
               :title="similarGames"
               :linkText="allGames" link="/games" />
    <app_game_screenshots 
        :value="data.body.gallery" 
        :title="data.body.screenshots"
        v-if="data.body.gallery.length !== 0" />
    <app_game_symbols
        :value="data.body.characters" 
        :title="data.body.slotMachineSymbols"
        v-if="data.body.characters.length !== 0"
     />
    <app_content :value="data.body.content"  v-if="data.body.content !== ''" />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config'
    import helper from '~/helpers/helpers'
    import TRANSLATE from '~/helpers/translate.json'
    import app_page_banner from '~/components/page-banner/app_page_banner'
    import app_breadcrumbs from '~/components/breadcrumbs/app_breadcrumbs'
    import app_game_card from '~/components/game_card/app-game-card'
    import app_game_details from '~/components/game-details/app-game-details'
    import app_casino from '~/components/casino/app_casino'
    import app_slots from '~/components/slots/app_slots'
    import app_game_screenshots from '~/components/game-screenshots/app-game-screenshots'
    import app_game_symbols from '~/components/game-symbols/app-game-symbols'
    import app_content from '~/components/content/app-content'
    import head from '~/mixins/head'
    export default {
        name: "single-game",
        data: () => {
            return {
                casinoWithThisGame: '',
                allCasino: '',
                similarGames: '',
                allGames: '',
                screenshots: '',
                globalRef: {
                    ref: []
                }
            }
        },
        components: {app_content, app_page_banner, app_breadcrumbs, app_game_card, app_casino, app_slots, app_game_details, app_game_screenshots, app_game_symbols},
        mixins: [head],
        async asyncData({route, error}) {
            if(route.params.id) {
                const request = new DAL_Builder();
                const response = await request.postType('game')
                    .url(route.params.id)
                    .get();
                if(response.data.confirm === 'error') {
                    error({ statusCode: 404, message: 'Post not found' })
                }
                else {
                    const data = helper.headDataMixin(response.data, route)
                    data.body.breadcrumbs = [
                        {...config.BREADCRUMBS_ROOT[config.LANG]},
                        {...config.BREADCRUMBS_GAMES[config.LANG]},
                        {title:data.body.title, permalink: ''},
                    ];
                    data.body.screenshots = TRANSLATE.SCREENSHOTS[config.LANG] +' '+ data.body.title
                    data.body.slotMachineSymbols = TRANSLATE.SLOT_MACHINE_SYMBOLS[config.LANG] +' '+ data.body.title
                    return {data}
                }
            }
            else {
                error({ statusCode: 404, message: 'Post not found' })
            }
        },
        async mounted(){
            this.casinoWithThisGame = TRANSLATE.CASINO_WITH_THIS_GAME[config.LANG]
            this.allCasino = TRANSLATE.ALL_CASINO[config.LANG]
            this.similarGames = TRANSLATE.SIMILAR_GAME[config.LANG]
            this.allGames = TRANSLATE.ALL_GAMES[config.LANG]

            await this.$store.dispatch('options/setOptions')
            const options = this.$store.getters['options/getOptions']
            const ref = options.filter(item => item.key === 'global-ref')
            ref.forEach(element => {this.globalRef.ref.push(element.value)})
        }
    }
</script>
