<template>
	<div>
		<app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
		<main class="main">
			<PageBannerAmp :title="data.body.h1" :shortDesc="data.body.short_desc" />
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
			<app_bonus_card_amp :value="data.body.posts" v-if="data.body.posts.length !== 0" />
			<app_content_amp :value="data.body.amp_content" v-if="data.body.amp_content !== ''" />
			<app_faq_amp :value="data.body.faq" v-if="data.body.faq.length !== 0" />
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
import helper from '~/helpers/helpers'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
import app_bonuses_loop_downloads_amp from '~/components/bonus_loop/app_bonuses_loop_downloads_amp'
import app_faq_amp from '~/components/faq/app_faq_amp'
export default {
	name: 'bonus-category_amp',
	components: {
		app_bonuses_loop_downloads_amp,
		app_faq_amp
	},
	mixins: [pageTemplateAmp],
	async asyncData({ route, error }) {
		const request = new DAL_Builder()
		const response = await request
			.postType('bonuses')
			.url(route.params.id)
			.get()
		if (response.data.confirm === 'error') {
			error({ statusCode: 404, message: 'Post not found' })
		} else {
			const data = await helper.globalDataMixin(response, route)
			return { data }
		}
	}
}
</script>
