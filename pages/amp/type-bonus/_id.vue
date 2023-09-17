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
			<app_category_filter_amp :value="data.body.bonus_type" v-if="data.body.bonus_type.length !== 0" />
			<script_amp :src="BonusPathScript" v-if="BonusNumberPostOnQuery < data.body.posts.length">
				<app_bonuses_loop_downloads_amp :value="data.body.posts" post_type="type-bonus" :post_url="$route.params.id" />
			</script_amp>
			<app_bonuses_loop_downloads_amp
				:value="data.body.posts"
				post_type="type-bonus"
				:post_url="$route.params.id"
				v-if="data.body.posts.length !== 0 && BonusNumberPostOnQuery > data.body.posts.length"
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
import helper from '~/helpers/helpers'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
import app_bonuses_loop_downloads_amp from '~/components/bonus_loop/app_bonuses_loop_downloads_amp'
import app_page_banner_amp from '~/components/page_banner/app_page_banner_amp'
import app_category_filter_amp from '~/components/category_filter/app_category_filter_amp'
import script_amp from '~/components/script_amp'
import { BONUS as BonusNumberPostOnQuery } from '~/config/postLoader'
import { BONUS as BonusPathScript } from '~/config/ampPathScript'

export default {
	name: 'single-type-bonus_amp',
	components: {
		app_bonuses_loop_downloads_amp,
		app_page_banner_amp,
		app_category_filter_amp,
		script_amp
	},
	mixins: [pageTemplateAmp],
	data() {
		return {
			BonusNumberPostOnQuery,
			BonusPathScript
		}
	},
	async asyncData({ route, error }) {
		if (route.params.id) {
			const request = new DAL_Builder()
			const response = await request
				.postType('type-bonus')
				.url(route.params.id)
				.get()
			if (response.data.confirm === 'error') {
				error({ statusCode: 404, message: 'Post not found' })
			} else {
				const data = await helper.globalDataMixin(response, route)
				return { data }
			}
		} else {
			error({ statusCode: 404, message: 'Post not found' })
		}
	}
}
</script>
