<template>
	<div>
		<app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
		<main class="main">
			<PageBannerAmp :title="data.body.h1" :shortDesc="data.body.short_desc" />
			<app_breadcrumbs_amp :value="data.body.breadcrumbs" />
			<app_game_card_amp :value="data.body" :globalRef="data.body.options['global-ref']" />
			<app_game_details_amp :value="data.body.details" />
			<app_casino_amp
				:value="data.body.casino"
				bg="--bg-gray"
				:title="translates.CASINO_WITH_THIS_GAME[config.LANG]"
				:linkText="translates.ALL_CASINO[config.LANG]"
				link="casino"
			/>
			<app_slots_amp
				:value="data.body.games"
				bg="--bg-gray"
				:title="translates.SIMILAR_GAME[config.LANG]"
				:linkText="translates.ALL_GAMES[config.LANG]"
				link="games"
			/>
			<app_game_screenshots_amp
				:value="data.body.gallery"
				:title="`${translates.SCREENSHOTS[config.LANG]} ${data.body.title}`"
				v-if="data.body.gallery.length !== 0"
			/>
			<app_game_symbols_amp
				:value="data.body.characters"
				:title="`${translates.SLOT_MACHINE_SYMBOLS[config.LANG]} ${data.body.title}`"
				v-if="data.body.characters.length !== 0"
			/>
			<app_content_amp :value="data.body.amp_content" v-if="data.body.amp_content !== ''" />
		</main>
		<app_footer_amp
			:footer_menu="data.body.settings.footer_menu"
			:footer_text="data.body.settings.footer_text"
			:partners_menu="data.body.settings.partners_menu"
		/>
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import config from '~/config'
import breadcrumbs from '~/config/breadcrumbs'
import helper from '~/helpers/helpers'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
import app_breadcrumbs_amp from '~/components/breadcrumbs/app_breadcrumbs_amp'
import app_game_card_amp from '~/components/slot_card/app-game-card_amp'
import app_game_details_amp from '~/components/slot_detail/app-game-details_amp'
import app_casino_amp from '~/components/casino/app_casino_amp'
import app_slots_amp from '~/components/slots/app_slots_amp'
import app_game_screenshots_amp from '~/components/slot_screenshots/app-game-screenshots_amp'
import app_game_symbols_amp from '~/components/slot_symbols/app-game-symbols_amp'
export default {
	name: 'single-game_amp',
	components: {
		app_breadcrumbs_amp,
		app_game_card_amp,
		app_game_details_amp,
		app_casino_amp,
		app_slots_amp,
		app_game_screenshots_amp,
		app_game_symbols_amp
	},
	mixins: [pageTemplateAmp],
	async asyncData({ route, error }) {
		if (route.params.id) {
			const request = new DAL_Builder()
			const response = await request
				.postType('game')
				.url(route.params.id)
				.get()
			if (response.data.confirm === 'error') {
				error({ statusCode: 404, message: 'Post not found' })
			} else {
				const data = await helper.globalDataMixin(response, route)
				data.body.breadcrumbs = [
					{ ...breadcrumbs.BREADCRUMBS_ROOT[config.LANG] },
					{ ...breadcrumbs.BREADCRUMBS_GAMES[config.LANG] },
					{ title: data.body.title, permalink: '' }
				]
				data.body.options['global-ref'].ref = data.body.options['global-ref']
				return { data }
			}
		} else {
			error({ statusCode: 404, message: 'Post not found' })
		}
	}
}
</script>
