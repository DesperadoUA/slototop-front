<template>
	<div>
		<PageBanner :title="data.body.h1" :shortDesc="data.body.short_desc" />
		<div class="container">
			<div class="contentEnd">
				<AuthorLink
					:link="config.AUTHOR_PAGE_LINK"
					:text="translates.REVIEW_AUTHOR[config.LANG]"
					:dataTime="data.body.created_at.slice(0, 10)"
					:name="data.body.author_name"
				/>
			</div>
		</div>
		<app_category_filter :value="data.body.bonus_type" v-if="data.body.bonus_type.length !== 0" />
		<app_bonuses_loop_downloads :value="data.body.bonuses" v-if="data.body.bonuses.length !== 0" />
		<Content :value="data.body.content" v-if="data.body.content !== ''" />
		<app_faq :value="changeFaq" :title="'Faq'" v-if="changeFaq.length !== 0" />
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import helper from '~/helpers/helpers'
import app_bonuses_loop_downloads from '~/components/bonus_loop/app_bonuses_loop_downloads'
import app_faq from '~/components/faq/app_faq'
import app_category_filter from '~/components/category_filter/app_category_filter'
import head from '~/mixins/head'
import pageTemplate from '~/mixins/pageTemplate'
export default {
	name: 'app_bonuses',
	data: () => {
		return {
			faq: []
		}
	},
	components: {
		app_bonuses_loop_downloads,
		app_faq,
		app_category_filter
	},
	mixins: [head, pageTemplate],
	async asyncData({ store, route, error }) {
		const request = new DAL_Builder()
		const response = await request
			.postType('pages')
			.url('bonuses')
			.get()
		if (response.data.confirm === 'error') {
			error({ statusCode: 404, message: 'Post not found' })
		} else {
			const data = helper.headDataMixin(response.data, route)
			return { data }
		}
	},
	computed: {
		changeFaq() {
			const settings = this.$store.getters['settings/getSettings']
			if (settings) {
				this.faq = settings.filter(item => item.key === 'bonus_page_faq')[0].value
			}
			return this.faq
		}
	}
}
</script>
