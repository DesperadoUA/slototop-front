<template>
	<div>
		<app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
		<app_breadcrumbs :value="data.body.breadcrumbs" />
		<app_game_card :value="data.body" :globalRef="globalRef" />
		<app_game_details :value="data.body.details" />
		<app_casino
			:value="data.body.casino"
			bg="--bg-gray"
			:title="translates.CASINO_WITH_THIS_GAME[config.LANG]"
			:linkText="translates.ALL_CASINO[config.LANG]"
			link="/casino"
		/>
		<app_slots
			:value="data.body.games"
			bg="--bg-gray"
			:title="translates.SIMILAR_GAME[config.LANG]"
			:linkText="translates.ALL_GAMES[config.LANG]"
			link="/games"
		/>
		<app_game_screenshots
			:value="data.body.gallery"
			:title="`${translates.SCREENSHOTS[config.LANG]} ${data.body.title}`"
			v-if="data.body.gallery.length !== 0"
		/>
		<app_game_symbols
			:value="data.body.characters"
			:title="`${translates.SLOT_MACHINE_SYMBOLS[config.LANG]} ${data.body.title}`"
			v-if="data.body.characters.length !== 0"
		/>
		<app_content :value="data.body.content" v-if="data.body.content !== ''" />
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import config from '~/config'
import breadcrumbs from '~/config/breadcrumbs'
import helper from '~/helpers/helpers'
import app_page_banner from '~/components/page_banner/app_page_banner'
import app_breadcrumbs from '~/components/breadcrumbs/app_breadcrumbs'
import app_game_card from '~/components/slot_card/app-game-card'
import app_game_details from '~/components/slot_detail/app-game-details'
import app_casino from '~/components/casino/app_casino'
import app_slots from '~/components/slots/app_slots'
import app_game_screenshots from '~/components/slot_screenshots/app-game-screenshots'
import app_game_symbols from '~/components/slot_symbols/app-game-symbols'
import app_content from '~/components/content/app-content'
import head from '~/mixins/head'
import translateMixin from '~/mixins/translate'
export default {
	name: 'single-game',
	data: () => {
		return {
			globalRef: {
				ref: []
			}
		}
	},
	components: {
		app_content,
		app_page_banner,
		app_breadcrumbs,
		app_game_card,
		app_casino,
		app_slots,
		app_game_details,
		app_game_screenshots,
		app_game_symbols
	},
	mixins: [head, translateMixin],
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
				const data = helper.headDataMixin(response.data, route)
				data.body.breadcrumbs = [
					{ ...breadcrumbs.BREADCRUMBS_ROOT[config.LANG] },
					{ ...breadcrumbs.BREADCRUMBS_GAMES[config.LANG] },
					{ title: data.body.title, permalink: '' }
				]
				return { data }
			}
		} else {
			error({ statusCode: 404, message: 'Post not found' })
		}
	},
	async mounted() {
		await this.$store.dispatch('options/setOptions')
		const options = this.$store.getters['options/getOptions']
		const ref = options.filter(item => item.key === 'global-ref')
		ref.forEach(element => {
			this.globalRef.ref.push(element.value)
		})
	}
}
</script>
