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
		<app_category_filter :value="data.body.bonus_type" v-if="data.body.bonus_type.length !== 0" />
		<app_bonuses_loop_downloads :value="data.body.posts" v-if="data.body.posts.length !== 0" />
		<Content :value="data.body.content" v-if="data.body.content !== ''" />
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import helper from '~/helpers/helpers'
import app_bonuses_loop_downloads from '~/components/bonus_loop/app_bonuses_loop_downloads'
import app_category_filter from '~/components/category_filter/app_category_filter'
import app_author_link from '~/components/author/app-author-link'
import head from '~/mixins/head'
import pageTemplate from '~/mixins/pageTemplate'

export default {
	name: 'single-type-bonus',
	data: () => {
		return {
			data: {}
		}
	},
	components: {
		app_bonuses_loop_downloads,
		app_category_filter,
		app_author_link
	},
	mixins: [head, pageTemplate],
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
				const data = helper.headDataMixin(response.data, route)
				return { data }
			}
		} else {
			error({ statusCode: 404, message: 'Post not found' })
		}
	}
}
</script>
