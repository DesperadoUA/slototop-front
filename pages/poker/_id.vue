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
		<app_breadcrumbs :value="data.body.breadcrumbs" />
		<app_poker_card :value="data.body" />
		<app_poker_detail :value="data.body" />
		<app_poker_loop_downloads
			:value="data.body.pokers"
			bg="--bg-gray"
			:title="translates.OTHER_POKER_ROOMS[config.LANG]"
		/>
		<Content :value="data.body.content" v-if="data.body.content !== ''" />
		<app_faq :value="data.body.faq" v-if="data.body.faq.length !== 0" />
		<app_reviews :title="'Отзывы'" :value="data.body.reviews" v-if="data.body.reviews.length !== 0" />
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import config from '~/config'
import breadcrumbs from '~/config/breadcrumbs'
import helper from '~/helpers/helpers'
import app_breadcrumbs from '~/components/breadcrumbs/app_breadcrumbs'
import app_poker_card from '~/components/poker_card/app-poker-card'
import app_poker_detail from '~/components/poker_detail/app-poker-detail'
import app_reviews from '~/components/reviews/app_reviews'
import app_poker_loop_downloads from '~/components/poker_loop/app_poker_loop_downloads'
import app_faq from '~/components/faq/app_faq'
import head from '~/mixins/head'
import pageTemplate from '~/mixins/pageTemplate'
export default {
	name: 'single-poker',
	data: () => {
		return {}
	},
	components: {
		app_breadcrumbs,
		app_poker_card,
		app_poker_detail,
		app_reviews,
		app_poker_loop_downloads,
		app_faq
	},
	mixins: [head, pageTemplate],
	async asyncData({ route, error }) {
		if (route.params.id) {
			const request = new DAL_Builder()
			const response = await request
				.postType('poker')
				.url(route.params.id)
				.get()
			if (response.data.confirm === 'error') {
				error({ statusCode: 404, message: 'Post not found' })
			} else {
				const data = helper.headDataMixin(response.data, route)
				data.body.breadcrumbs = [
					{ ...breadcrumbs.BREADCRUMBS_ROOT[config.LANG] },
					{ ...breadcrumbs.BREADCRUMBS_POKER[config.LANG] },
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
