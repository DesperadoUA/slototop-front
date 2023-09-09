<template>
	<div>
		<app_header_amp
			:logo="data.body.options.logo"
			:menu_links="data.body.settings.header_menu"
		/>
		<main class="main">
			<app_page_banner_amp
				:title="data.body.h1"
				:shortDesc="data.body.short_desc"
			/>
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
			<app_payment_card_amp :value="data.body" />
			<app_payment_detail_amp :value="data.body" />
			<script_amp
				:src="CasinoPathScript"
				v-if="CasinoNumberPostOnQuery < data.body.casino.length"
			>
				<app_casino_loop_downloads_amp
					:value="data.body.casino"
					:title="translates.GET_PAYMENTS[config.LANG]"
					bg="--bg-gray"
					post_type="payment"
					:post_url="$route.params.id"
				/>
			</script_amp>
			<app_casino_loop_downloads_amp
				:value="data.body.casino"
				:title="translates.GET_PAYMENTS[config.LANG]"
				bg="--bg-gray"
				post_type="payment"
				:post_url="$route.params.id"
				v-if="
					data.body.casino.length !== 0 &&
						CasinoNumberPostOnQuery > data.body.casino.length
				"
			/>
			<app_content_amp
				:value="data.body.amp_content"
				v-if="data.body.amp_content !== ''"
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
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
import app_page_banner_amp from '~/components/page-banner/app_page_banner_amp'
import app_casino_loop_downloads_amp from '~/components/casino_loop_downloads/app_casino_loop_downloads_amp'
import app_breadcrumbs_amp from '~/components/breadcrumbs/app_breadcrumbs_amp'
import app_payment_card_amp from '~/components/payment_card/app-payment-card_amp'
import app_payment_detail_amp from '~/components/payment-detail/app-payment-detail_amp'
import script_amp from '~/components/script_amp'
import { CASINO as CasinoNumberPostOnQuery } from '~/config/postLoader'
import { CASINO as CasinoPathScript } from '~/config/ampPathScript'

export default {
	name: 'single-payment_amp',
	components: {
		app_page_banner_amp,
		app_casino_loop_downloads_amp,
		app_breadcrumbs_amp,
		app_payment_card_amp,
		app_payment_detail_amp,
		script_amp
	},
	mixins: [pageTemplateAmp],
	data() {
		return {
			CasinoNumberPostOnQuery,
			CasinoPathScript
		}
	},
	async asyncData({ route, error }) {
		if (route.params.id) {
			const request = new DAL_Builder()
			const response = await request
				.postType('payment')
				.url(route.params.id)
				.get()
			if (response.data.confirm === 'error') {
				error({ statusCode: 404, message: 'Post not found' })
			} else {
				const data = await helper.globalDataMixin(response, route)
				data.body.breadcrumbs = [
					{ ...breadcrumbs.BREADCRUMBS_ROOT[config.LANG] },
					{ ...breadcrumbs.BREADCRUMBS_PAYMENTS[config.LANG] },
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
