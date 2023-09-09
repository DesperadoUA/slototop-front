<template>
	<div>
		<app_page_banner :title="data.body.h1" :shortDesc="data.body.short_desc" />
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
		<app_poker_loop_downloads
			:value="data.body.posts"
			v-if="data.body.posts.length !== 0"
		/>
		<app_content :value="data.body.content" v-if="data.body.content !== ''" />
		<app_faq :value="data.body.faq" v-if="data.body.faq.length !== 0" />
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import helper from '~/helpers/helpers'
import app_poker_loop_downloads from '~/components/poker_loop_downloads/app_poker_loop_downloads'
import app_content from '~/components/content/app-content'
import app_page_banner from '~/components/page-banner/app_page_banner'
import app_faq from '~/components/faq/app_faq'
import app_author_link from '~/components/author/app-author-link'
import head from '~/mixins/head'
import translateMixin from '~/mixins/translate'
export default {
	name: 'poker-category',
	data: () => {
		return {}
	},
	components: {
		app_content,
		app_poker_loop_downloads,
		app_page_banner,
		app_faq,
		app_author_link
	},
	mixins: [head, translateMixin],
	async asyncData({ route, error }) {
		if (route.params.id) {
			const request = new DAL_Builder()
			const response = await request
				.postType('pokers')
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
