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
		<app_category_filter :value="data.body.category" v-if="data.body.category.length !== 0" />
		<app_slot_loop_downloads :value="data.body.posts" bg="--bg-gray" v-if="data.body.posts.length !== 0" />
		<Content :value="data.body.content" v-if="data.body.content !== ''" />
		<app_faq :value="data.body.faq" v-if="data.body.faq.length !== 0" />
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import helper from '~/helpers/helpers'
import app_slot_loop_downloads from '~/components/slot_loop'
import app_category_filter from '~/components/category_filter/app_category_filter'
import app_faq from '~/components/faq/app_faq'
import head from '~/mixins/head'
import pageTemplate from '~/mixins/pageTemplate'
export default {
	name: 'game-category',
	data: () => {
		return {}
	},
	components: {
		app_slot_loop_downloads,
		app_category_filter,
		app_faq
	},
	mixins: [head, pageTemplate],
	async asyncData({ route, error }) {
		if (route.params.id) {
			const request = new DAL_Builder()
			const response = await request
				.postType('games')
				.url(route.params.id)
				.get()
			if (response.data.confirm === 'error') {
				error({ statusCode: 404, message: 'Post not found' })
			} else {
				const data = helper.headDataMixin(response.data, route)
				return { data }
			}
		} else {
			error({ statusCode: 404, message: 'Post not found' })
		}
	}
}
</script>

<style lang="scss"></style>
