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
			<script_amp :src="PaymentPathScript" v-if="PaymentNumberPostOnQuery < data.body.payments.length">
				<app_payment_loop_download_amp :value="data.body.payments" bg="--bg-gray" />
			</script_amp>
			<app_payment_loop_download_amp
				:value="data.body.payments"
				bg="--bg-gray"
				v-if="data.body.payments.length !== 0 && PaymentNumberPostOnQuery > data.body.payments.length"
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
import helper from '~/helpers/helpers'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
import app_payment_loop_download_amp from '~/components/payment_loop/payment_loop_download_amp'
import script_amp from '~/components/script_amp'
import { PAYMENT as PaymentNumberPostOnQuery } from '~/config/postLoader'
import { PAYMENT as PaymentPathScript } from '~/config/ampPathScript'
import DAL_Builder from "~/DAL/builder";

export default {
	name: 'payments-page_amp',
	components: {
		app_payment_loop_download_amp,
		script_amp
	},
	mixins: [pageTemplateAmp],
	data() {
		return {
			PaymentNumberPostOnQuery,
			PaymentPathScript
		}
	},
	async asyncData({ route, error }) {
        const request = new DAL_Builder()
        const response = await request
            .postType('pages')
            .url('payments')
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
