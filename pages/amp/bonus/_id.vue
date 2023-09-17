<template>
	<div>
		<app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
		<main class="main">
			<app_page_banner_amp :title="data.body.h1" :shortDesc="data.body.short_desc" />
			<div class="container">
				<div class="contentEnd">
					<app_author_link_amp
						:link="config.AUTHOR_PAGE_LINK"
						:text="translates.REVIEW_AUTHOR[config.LANG]"
						:dataTime="data.body.created_at.slice(0, 10)"
						:name="data.body.author_name"
					/>
				</div>
			</div>
			<app_breadcrumbs_amp :value="data.body.breadcrumbs" />
			<app_bonus_card_amp :value="data.body" />
			<app_bonus_details_amp :value="data.body" />
			<app_content_amp :value="data.body.amp_content" v-if="data.body.amp_content !== ''" />
			<app_bonuses_casino_amp
				v-if="data.body.bonuses.length !== 0"
				:value="data.body.bonuses"
				:title="`${translates.OTHER_BONUSES[config.LANG]} ${data.body.casino[0].title}`"
				:topTextShow="false"
			/>
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
import app_page_banner_amp from '~/components/page_banner/app_page_banner_amp'
import app_bonuses_casino_amp from '~/components/bonus_casino/app_bonuses_casino_amp'
import app_breadcrumbs_amp from '~/components/breadcrumbs/app_breadcrumbs_amp'
import app_bonus_card_amp from '~/components/bonus_card/app_bonus_card_amp'
import app_bonus_details_amp from '~/components/bonus_detail/app-bonus-detail_amp'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
export default {
	name: 'single-bonus',
	data: () => {
		return {}
	},
	components: {
		app_page_banner_amp,
		app_bonuses_casino_amp,
		app_breadcrumbs_amp,
		app_bonus_details_amp,
		app_bonus_card_amp
	},
	mixins: [pageTemplateAmp],
	async asyncData({ route, error }) {
		if (route.params.id) {
			const request = new DAL_Builder()
			const response = await request
				.postType('bonus')
				.url(route.params.id)
				.get()
			if (response.data.confirm === 'error') {
				error({ statusCode: 404, message: 'Post not found' })
			} else {
				const data = await helper.globalDataMixin(response, route)
				data.body.breadcrumbs = [
					{ ...breadcrumbs.BREADCRUMBS_ROOT[config.LANG] },
					{ ...breadcrumbs.BREADCRUMBS_BONUSES[config.LANG] },
					{ title: data.body.title, permalink: '' }
				]
				return { data }
			}
		} else {
			error({ statusCode: 404, message: 'Post not found' })
		}
	}
}
</script>
