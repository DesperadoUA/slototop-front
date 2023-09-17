<template>
	<div>
		<PageBanner :title="data.body.h1" :shortDesc="data.body.short_desc" />
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
		<app_payment_loop_download :value="data.body.payments" bg="--bg-gray" v-if="data.body.payments.length !== 0" />
		<Content :value="data.body.content" v-if="data.body.content !== ''" />
	</div>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import helper from '~/helpers/helpers'
import app_payment_loop_download from '~/components/payment_loop'
import app_author_link from '~/components/author/app-author-link'
import head from '~/mixins/head'
import pageTemplate from '~/mixins/pageTemplate'
export default {
	name: 'payments-page',
	data: () => {
		return {}
	},
	components: {
		app_payment_loop_download,
		app_author_link
	},
	mixins: [head, pageTemplate],
	async asyncData({ route, error }) {
		const request = {
			url: 'payments'
		}
		const response = await DAL_Page.getData(request)
		if (response.data.confirm === 'error') {
			error({ statusCode: 404, message: 'Post not found' })
		} else {
			const data = helper.headDataMixin(response.data, route)
			return { data }
		}
	}
}
</script>
